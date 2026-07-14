from __future__ import annotations

import json
import re
import shutil
from pathlib import Path

from PIL import Image, ImageOps


SOURCE_ROOT = Path(r"D:\360MoveData\Users\Administrator\Documents\New project 30\待作图\整理商品")
APP_ROOT = Path(__file__).resolve().parents[1]
ASSET_ROOT = APP_ROOT / "public" / "assets" / "homepage-catalog-v2"
DATA_FILE = APP_ROOT / "src" / "data" / "taoProductCatalog.ts"


PARENT_MAP = {
    "手链手串": ("bracelet", "手链手串", "Bracelets"),
    "项链吊坠": ("necklace", "项链吊坠", "Necklaces & Pendants"),
    "戒指": ("ring", "戒指", "Rings"),
    "耳钉": ("earring", "耳钉", "Earrings"),
    "香饰香珠": ("incense", "香饰香珠", "Incense Beads"),
}

GROUP_COPY = {
    "南红_玛瑙": ("南红玛瑙", "Warm Red Agate", "以红色系与温润纹理为主，适合表达守护、热忱与好运。"),
    "和田玉_玉石": ("玉石水晶", "Jade & Stone", "偏清润、平和、内敛的玉石系列，适合平安、圆满与日常礼赠。"),
    "多宝混搭": ("多宝混搭", "Mixed Blessing", "多种色泽与材质组合，适合作为寓意更丰富的祝福礼物。"),
    "水晶": ("水晶能量", "Crystal Light", "通透、清明、轻盈的晶石系列，适合专注、净化与更新。"),
    "绿松石": ("绿松雅意", "Turquoise", "蓝绿矿物色调，带来清爽、松弛与东方装饰感。"),
    "青金石": ("青金星河", "Lapis Lazuli", "深蓝与金色星点感，适合沉稳、智慧与仪式感搭配。"),
    "吊坠_挂件": ("吊坠挂件", "Pendants", "可单独佩戴或组合搭配的坠饰系列。"),
    "如意锁": ("如意锁", "Ruyi Locks", "以如意、长宁、守护为寓意的锁形配饰。"),
    "平安扣": ("平安扣", "Peace Discs", "圆融成环，适合作为平安、圆满与礼赠的表达。"),
    "项链": ("项链", "Necklaces", "更完整的颈间佩戴系列，适合日常和节庆礼赠。"),
    "东方香调": ("东方香调", "Oriental Aroma", "偏暖、沉静、层次丰富的合香珠系列。"),
    "木质香调": ("木质香调", "Woody Aroma", "木质、安静、深呼吸感的香饰系列。"),
    "花香调": ("花香调", "Floral Aroma", "柔和花香与东方香材结合，适合轻盈、温暖的礼物。"),
}

GROUP_SLUGS = {
    "手链手串": "all-bracelets",
    "戒指": "rings",
    "耳钉": "earrings",
    "香饰香珠": "incense-beads",
    "南红_玛瑙": "red-agate",
    "和田玉_玉石": "jade-stone",
    "多宝混搭": "mixed-blessing",
    "水晶": "crystal",
    "绿松石": "turquoise",
    "青金石": "lapis",
    "吊坠_挂件": "pendants",
    "如意锁": "ruyi-locks",
    "平安扣": "peace-discs",
    "项链": "necklaces",
    "东方香调": "oriental-aroma",
    "木质香调": "woody-aroma",
    "花香调": "floral-aroma",
}

MATERIAL_TERMS = [
    "S925", "925", "18k", "18K", "K金", "足金", "银", "金",
    "南红", "玛瑙", "琥珀", "蜜蜡", "和田玉", "玉石", "玉", "翡翠",
    "水晶", "发晶", "绿幽灵", "绿松石", "青金石", "青金", "珍珠",
    "朱砂", "檀木", "檀", "沉香", "菩提", "碧玺", "宝玉石",
    "合香珠", "香珠", "中药", "龙涎", "桂花", "玫瑰", "茉莉", "金桂", "木樨",
]

POETIC_PREFIXES = [
    "一念", "云岫", "松风", "月照", "静山", "星河", "福泽", "兰若",
    "朝露", "清晖", "灵犀", "愿景", "山月", "云纹", "归云", "晴岚",
    "莲心", "拂晓", "玄光", "照夜", "素愿", "微澜", "流光", "明心",
    "竹影", "鹤梦", "秋水", "春岚", "长风", "檐雨", "清泉", "晚香",
    "澄心", "云阶", "归舟", "听雪", "照心", "闻磬", "静澜", "安行",
]

POETIC_SUFFIXES = [
    "清安", "归心", "护念", "守愿", "长宁", "静好", "凝光", "入怀",
    "成环", "纳福", "同心", "安和", "生辉", "见喜", "祥瑞", "澄怀",
    "寄月", "承愿", "怀真", "听泉", "含章", "知意", "守静", "照愿",
    "清圆", "如愿", "向暖", "无忧", "安然", "长乐", "静意", "知归",
    "承福", "含光", "和鸣", "云起", "风定", "心宁", "福至", "愿成",
]

KEYWORD_NAMES = [
    ("葫芦", "福葫纳安"),
    ("如意", "如意长宁"),
    ("平安扣", "圆满平安"),
    ("锁", "长宁如锁"),
    ("花神", "花神凝香"),
    ("玄韵", "玄韵归心"),
    ("龙吟", "龙吟护佑"),
    ("清修", "一念清圆"),
    ("圆珠", "云岫清圆"),
    ("美人", "花影凝眸"),
    ("归元", "归元守静"),
    ("四合", "四合纳吉"),
    ("清醒", "明心清醒"),
]


def read_text(path: Path) -> str:
    for encoding in ("utf-8-sig", "utf-8", "gb18030"):
        try:
            return path.read_text(encoding=encoding)
        except UnicodeDecodeError:
            continue
    return path.read_text(errors="ignore")


def parse_detail(path: Path) -> dict[str, str]:
    if not path.exists():
        return {}
    result: dict[str, str] = {}
    for raw in read_text(path).splitlines():
        line = raw.strip()
        if "：" in line:
            key, value = line.split("：", 1)
            result[key.strip()] = value.strip()
    return result


def strip_index(name: str) -> str:
    return re.sub(r"^\d+[_-]?", "", name).strip("_- ")


def material_label(text: str, detail: dict[str, str]) -> str:
    value = detail.get("商品材质") or ""
    if value:
        return value
    found = []
    for term in MATERIAL_TERMS:
        if term and term in text and term not in found:
            found.append(term)
    return "、".join(found[:5]) or "天然材质"


def poetic_name(original: str, index: int, used_names: set[str]) -> str:
    base = strip_index(original)
    for key, value in KEYWORD_NAMES:
        if key in base:
            return unique_variant(value, index, used_names)
    cleaned = base
    for term in sorted(MATERIAL_TERMS, key=len, reverse=True):
        cleaned = cleaned.replace(term, "")
    cleaned = re.sub(r"[（）()【】\\[\\]_\-·\s]+", "", cleaned)
    cleaned = cleaned.replace("手串", "").replace("手链", "").replace("项链", "").replace("吊坠", "").replace("耳钉", "").replace("戒指", "")
    if 2 <= len(cleaned) <= 5 and cleaned not in used_names:
        used_names.add(cleaned)
        return cleaned
    return unique_variant("", index, used_names)


def unique_variant(name: str, index: int, used_names: set[str]) -> str:
    # Product-facing names should feel like Chinese poetic collection names.
    # Material words stay in filters/tags/details, not in the display name.
    candidates = []
    if name:
        candidates.append(name)
    total = len(POETIC_PREFIXES) * len(POETIC_SUFFIXES)
    for offset in range(total):
        n = index + offset
        prefix = POETIC_PREFIXES[n % len(POETIC_PREFIXES)]
        suffix = POETIC_SUFFIXES[(n * 7 + n // len(POETIC_PREFIXES)) % len(POETIC_SUFFIXES)]
        if prefix[-1] in suffix or suffix[0] in prefix:
            continue
        candidates.append(f"{prefix}{suffix}")
    for candidate in candidates:
        if candidate not in used_names:
            used_names.add(candidate)
            return candidate
    fallback = f"清愿{index + 1:03d}"
    used_names.add(fallback)
    return fallback


def slugify(text: str) -> str:
    text = strip_index(text)
    ascii_part = re.sub(r"[^a-zA-Z0-9]+", "-", text).strip("-").lower()
    if ascii_part:
        return ascii_part[:60]
    return re.sub(r"[\\/:*?\"<>|\\s]+", "-", text).strip("-")[:60]


def pick_images(folder: Path) -> list[Path]:
    files = [p for p in folder.iterdir() if p.is_file() and p.suffix.lower() in {".jpg", ".jpeg", ".png", ".webp"}]
    # Only use AI-generated product visuals on the storefront.
    # Exclude raw/original marketplace images such as 主图.jpg, and exclude text-heavy detail pages.
    priority = ["AI佩戴图", "AI主图"]
    picked: list[Path] = []
    for label in priority:
        matches = sorted([p for p in files if p.stem == label or p.stem.startswith(label)], key=lambda p: (p.suffix.lower() != ".png", p.name))
        for p in matches:
            if p not in picked:
                picked.append(p)
    return picked[:2]


def save_webp(src: Path, dest: Path, max_side: int) -> None:
    dest.parent.mkdir(parents=True, exist_ok=True)
    with Image.open(src) as im:
        im = ImageOps.exif_transpose(im)
        if im.mode in ("RGBA", "LA"):
            bg = Image.new("RGB", im.size, (246, 238, 220))
            bg.paste(im, mask=im.getchannel("A"))
            im = bg
        else:
            im = im.convert("RGB")
        im.thumbnail((max_side, max_side), Image.Resampling.LANCZOS)
        im.save(dest, "WEBP", quality=78, method=6)


def price_from_detail(detail: dict[str, str]) -> float:
    raw = detail.get("价格", "")
    match = re.search(r"([0-9]+(?:\\.[0-9]+)?)", raw)
    return float(match.group(1)) if match else 0.0


def top_level_and_group(product_dir: Path) -> tuple[str, str, str, str, str]:
    rel = product_dir.relative_to(SOURCE_ROOT).parts
    top_cn = rel[0]
    parent, default_group_title, default_group_subtitle = PARENT_MAP.get(top_cn, ("bracelet", top_cn, top_cn))
    if len(rel) >= 3:
        group_key = rel[1]
    else:
        group_key = top_cn
    title, subtitle, desc = GROUP_COPY.get(group_key, (group_key, group_key, f"{group_key} 系列成品。"))
    return parent, group_key, title, subtitle, desc


def build_catalog() -> list[dict]:
    if ASSET_ROOT.exists():
        shutil.rmtree(ASSET_ROOT)
    group_map: dict[tuple[str, str], dict] = {}
    all_product_dirs = [
        p for p in SOURCE_ROOT.rglob("*")
        if p.is_dir() and (p / "产品详情.txt").exists() and pick_images(p)
    ]
    all_product_dirs.sort(key=lambda p: str(p.relative_to(SOURCE_ROOT)))
    used_names: set[str] = set()

    for idx, product_dir in enumerate(all_product_dirs):
        parent, group_key, group_title, group_subtitle, group_desc = top_level_and_group(product_dir)
        group_id = f"{parent}-{GROUP_SLUGS.get(group_key, slugify(group_key) or str(len(group_map) + 1))}"
        key = (parent, group_key)
        group = group_map.setdefault(key, {
            "id": group_id,
            "parent": parent,
            "title": group_title,
            "subtitle": group_subtitle,
            "description": group_desc,
            "items": [],
        })

        detail = parse_detail(product_dir / "产品详情.txt")
        source_name = detail.get("原商品标题") or detail.get("商品名") or strip_index(product_dir.name)
        original_name = detail.get("商品名") or strip_index(product_dir.name)
        material = material_label(original_name + source_name, detail)
        images = pick_images(product_dir)
        product_id_match = re.match(r"^(\d+)", product_dir.name)
        code = product_id_match.group(1) if product_id_match else f"{idx + 1:03d}"
        safe_dir = f"p{code}-{idx:03d}"
        asset_dir = ASSET_ROOT / safe_dir
        web_images = []
        for image_index, image in enumerate(images):
            name = "main.webp" if image_index == 0 else f"detail_{image_index:02d}.webp"
            dest = asset_dir / name
            save_webp(image, dest, 1100 if image_index == 0 else 1200)
            web_images.append(f"/assets/homepage-catalog-v2/{safe_dir}/{name}")

        desc = detail.get("商品简介") or f"{material} 系列，适合作为祈福、礼赠与日常佩戴的东方饰物。"
        short_desc = desc if len(desc) <= 96 else desc[:94] + "…"
        item = {
            "id": f"product-{code}-{idx}",
            "code": code,
            "name": poetic_name(original_name, idx, used_names),
            "sourceName": source_name,
            "type": PARENT_MAP.get(product_dir.relative_to(SOURCE_ROOT).parts[0], ("bracelet", "", ""))[1],
            "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
            "description": short_desc,
            "details": [line for line in desc.split("；") if line.strip()][:4] or [desc],
            "image": web_images[0],
            "images": web_images,
            "tags": [material, group_title, PARENT_MAP.get(product_dir.relative_to(SOURCE_ROOT).parts[0], ("bracelet", "", ""))[1]],
            "price": price_from_detail(detail),
            "currency": "USD" if "$" in detail.get("价格", "") else "CNY",
        }
        group["items"].append(item)

    order = ["bracelet", "necklace", "ring", "earring", "incense"]
    groups = list(group_map.values())
    groups.sort(key=lambda g: (order.index(g["parent"]) if g["parent"] in order else 99, g["title"]))
    return groups


def write_ts(groups: list[dict]) -> None:
    payload = json.dumps(groups, ensure_ascii=False, indent=2)
    ts = f"""export type TaoCatalogParent = \"bracelet\" | \"necklace\" | \"ring\" | \"earring\" | \"incense\";

export type TaoCatalogItem = {{
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
}};

export type TaoCatalogGroup = {{
  id: string;
  parent: TaoCatalogParent;
  title: string;
  subtitle: string;
  description: string;
  items: TaoCatalogItem[];
}};

export const taoProductCatalog: TaoCatalogGroup[] = {payload};
"""
    DATA_FILE.write_text(ts, encoding="utf-8")


def main() -> None:
    groups = build_catalog()
    write_ts(groups)
    total = sum(len(group["items"]) for group in groups)
    print(f"Generated {len(groups)} groups, {total} products")
    print(f"Assets: {ASSET_ROOT}")
    print(f"Data: {DATA_FILE}")


if __name__ == "__main__":
    main()
