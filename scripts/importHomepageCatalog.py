from __future__ import annotations

import json
import math
import re
import shutil
from pathlib import Path

import pandas as pd


SOURCE_ROOT = Path(r"D:\360MoveData\Users\Administrator\Documents\New project 17\homepage_category_collection")
CSV_FILE = SOURCE_ROOT / "homepage_products_catalog.csv"
PROJECT_ROOT = Path(__file__).resolve().parents[1]
PUBLIC_ROOT = PROJECT_ROOT / "public"
ASSET_ROOT = PUBLIC_ROOT / "assets" / "homepage-catalog"
OUT_FILE = PROJECT_ROOT / "src" / "data" / "taoProductCatalog.ts"


DROP_TITLE_RE = re.compile(r"(购物金|福袋链接|直播间置顶|专享购物金|补差|定金|邮费|运费|链接专拍)")
DROP_CATEGORY_RE = re.compile(r"^(其他配饰)$")
NON_PRODUCT_WORDS_RE = re.compile(
    r"(店铺：.*?$|已售：.*?$|优惠：.*?$|保障：.*?$|7天价保.*?$|88VIP.*?$|假一赔四.*?$|极速退款.*?$|退货.*?$|平台指定.*?$)",
    re.M,
)


def as_text(value: object) -> str:
    if value is None:
        return ""
    if isinstance(value, float) and math.isnan(value):
        return ""
    return str(value).strip()


def clean_copy(text: str, limit: int = 170) -> str:
    text = as_text(text)
    text = NON_PRODUCT_WORDS_RE.sub("", text)
    text = re.sub(r"\s+", " ", text).strip(" ；;，,。")
    if len(text) > limit:
        text = text[:limit].rstrip(" ，,。") + "。"
    return text


def safe_name(name: str) -> str:
    name = re.sub(r"[\\/:*?\"<>|]+", "_", name)
    name = re.sub(r"\s+", "_", name).strip("._ ")
    return name[:90] or "product"


def resolve_source_image(relative_path: str) -> Path | None:
    relative_path = as_text(relative_path)
    if not relative_path:
        return None
    candidate = SOURCE_ROOT / relative_path.replace("/", "\\")
    return candidate if candidate.exists() else None


def copy_image(source: Path, product_dir: Path, name: str) -> str | None:
    if not source or not source.exists():
        return None
    product_dir.mkdir(parents=True, exist_ok=True)
    dest = product_dir / f"{name}{source.suffix.lower()}"
    if not dest.exists() or dest.stat().st_size != source.stat().st_size:
        shutil.copy2(source, dest)
    return "/" + dest.relative_to(PUBLIC_ROOT).as_posix()


def split_detail_images(raw: str) -> list[str]:
    return [part.strip() for part in re.split(r"[；;]", as_text(raw)) if part.strip()]


def group_title(level1: str, level2: str) -> str:
    if level1 == "香饰香珠":
        return f"合香珠 · {level2}"
    return f"{level1} · {level2}"


def group_subtitle(level1: str, level2: str) -> str:
    if level1 == "香饰香珠":
        return "Incense Beads"
    if level1 == "手链手串":
        return "Bracelets"
    if level1 == "项链吊坠":
        return "Necklaces & Pendants"
    if level1 == "配件工具":
        return "Accessories"
    return level2


def group_description(level1: str, level2: str, count: int) -> str:
    if level1 == "香饰香珠":
        return f"合香珠系列按香型归类为「{level2}」，用于呈现可佩戴的东方香气、手作质感和礼赠场景。共 {count} 款。"
    if level1 == "手链手串":
        return f"手链手串按核心材质归入「{level2}」，方便用户按色泽、材质与寓意快速浏览。共 {count} 款。"
    if level1 == "项链吊坠":
        return f"项链吊坠按材质与器型归入「{level2}」，适合礼物、日常佩戴和仪式感搭配。共 {count} 款。"
    if level1 == "配件工具":
        return f"配件工具用于补充 DIY、串珠、吊坠和礼盒搭配。共 {count} 款。"
    return f"{level1} / {level2}，共 {count} 款。"


def extract_display_name(title: str) -> str:
    title = re.sub(r"^(青城山|普陀山|青城道香|青城山官方|青城山珠宝旗舰店)", "", title)
    bracket = re.search(r"【([^】]+)】", title)
    if bracket:
        return bracket.group(1).strip()
    title = re.sub(r"(正品|天然|官方|新款|女款|男款|送女生礼物|送男士礼物|手串|手链|项链|吊坠|非遗|古法|中药|合香珠).*", "", title)
    return title.strip(" -_/，,")[:18] or "东方灵饰"


def make_item(row: pd.Series, index: int) -> dict | None:
    title = as_text(row.get("商品标题"))
    level1 = as_text(row.get("一级分类"))
    if not title or DROP_TITLE_RE.search(title) or DROP_CATEGORY_RE.search(level1):
        return None

    product_id = as_text(row.get("商品ID"))
    product_dir = ASSET_ROOT / f"{product_id}_{safe_name(extract_display_name(title))}"

    image_paths: list[str] = []
    main_source = resolve_source_image(as_text(row.get("主图")))
    copied_main = copy_image(main_source, product_dir, "main") if main_source else None
    if copied_main:
        image_paths.append(copied_main)

    for i, detail in enumerate(split_detail_images(as_text(row.get("细节图")))[:10], start=1):
        source = resolve_source_image(detail)
        copied = copy_image(source, product_dir, f"detail_{i:02d}") if source else None
        if copied and copied not in image_paths:
            image_paths.append(copied)

    if not image_paths:
        return None

    tags = [
        tag.strip()
        for tag in re.split(r"[,，/、]", as_text(row.get("推荐标签")))
        if tag.strip()
    ][:5]
    material = as_text(row.get("核心材质"))
    shape = as_text(row.get("款式/器型"))
    if material and material != "未注明" and material not in tags:
        tags.insert(0, material)
    if shape and shape != "常规款" and shape not in tags:
        tags.append(shape)

    price = row.get("现价")
    if price is None or (isinstance(price, float) and math.isnan(price)):
        price = row.get("原价")
    try:
        price_number = float(price)
    except Exception:
        price_number = 0

    desc = clean_copy(row.get("消费者描述"), 190)
    summary = clean_copy(row.get("原始描述摘要"), 220)
    params = clean_copy(row.get("参数"), 160)
    details = [x for x in [desc, params, summary] if x]

    level2 = as_text(row.get("二级分类")) or "未分类"
    group_id = safe_name(f"{level1}-{level2}").lower()

    return {
        "id": f"product-{product_id}",
        "code": str(index).zfill(3),
        "name": extract_display_name(title),
        "sourceName": title,
        "type": as_text(row.get("商品类型")) or level1,
        "meaning": clean_copy(row.get("首页卖点标题"), 90) or f"{level2} · 东方礼赠",
        "description": desc or summary or title,
        "details": details[:4],
        "image": image_paths[0],
        "images": image_paths,
        "tags": tags[:6],
        "price": round(price_number, 2),
        "currency": as_text(row.get("币种")) or "CNY",
        "groupId": group_id,
        "_groupTitle": group_title(level1, level2),
        "_groupSubtitle": group_subtitle(level1, level2),
        "_groupDescriptionSeed": (level1, level2),
        "_priority": as_text(row.get("上架优先级")),
    }


def main() -> None:
    if not CSV_FILE.exists():
        raise FileNotFoundError(CSV_FILE)

    ASSET_ROOT.mkdir(parents=True, exist_ok=True)
    df = pd.read_csv(CSV_FILE)
    df = df[df["是否建议上首页"].fillna("").astype(str).str.strip().eq("是")]

    priority_order = {"高": 0, "中": 1, "低": 2}
    df["_sort_priority"] = df["上架优先级"].map(priority_order).fillna(9)
    df = df.sort_values(["首页推荐分区", "_sort_priority", "商品ID"], kind="stable")

    items: list[dict] = []
    for _, row in df.iterrows():
        item = make_item(row, len(items) + 1)
        if item:
            items.append(item)

    grouped: dict[str, list[dict]] = {}
    meta: dict[str, dict] = {}
    for item in items:
        gid = item["groupId"]
        grouped.setdefault(gid, []).append(item)
        meta.setdefault(
            gid,
            {
                "title": item.pop("_groupTitle"),
                "subtitle": item.pop("_groupSubtitle"),
                "seed": item.pop("_groupDescriptionSeed"),
            },
        )
        item.pop("_priority", None)
        item.pop("_groupTitle", None)
        item.pop("_groupSubtitle", None)
        item.pop("_groupDescriptionSeed", None)

    # Put incense fragrance groups first, then bracelet, pendant, and components.
    def group_sort(entry: tuple[str, list[dict]]) -> tuple[int, str]:
        seed = meta[entry[0]]["seed"]
        level1 = seed[0]
        order = {"香饰香珠": 0, "手链手串": 1, "项链吊坠": 2, "配件工具": 3}
        return (order.get(level1, 9), meta[entry[0]]["title"])

    groups = []
    for gid, group_items in sorted(grouped.items(), key=group_sort):
        level1, level2 = meta[gid]["seed"]
        groups.append(
            {
                "id": gid,
                "title": meta[gid]["title"],
                "subtitle": meta[gid]["subtitle"],
                "description": group_description(level1, level2, len(group_items)),
                "items": group_items,
            }
        )

    output = f"""export type TaoCatalogItem = {{
  id: string;
  code: string;
  name: string;
  sourceName: string;
  type: string;
  meaning: string;
  description: string;
  details: string[];
  image: string;
  images: string[];
  tags: string[];
  price: number;
  currency: string;
  groupId: string;
}};

export type TaoCatalogGroup = {{
  id: string;
  title: string;
  subtitle: string;
  description: string;
  items: TaoCatalogItem[];
}};

export const taoProductCatalog: TaoCatalogGroup[] = {json.dumps(groups, ensure_ascii=False, indent=2)};
"""
    OUT_FILE.write_text(output, encoding="utf-8")
    print(f"Imported {sum(len(group['items']) for group in groups)} products")
    print(f"Created {len(groups)} groups")
    print(f"Copied images into {ASSET_ROOT}")
    print(f"Wrote {OUT_FILE}")


if __name__ == "__main__":
    main()
