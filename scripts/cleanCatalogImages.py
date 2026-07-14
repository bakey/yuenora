from __future__ import annotations

from pathlib import Path
import shutil
from PIL import Image, ImageFilter


PUBLIC_ROOT = Path("public")
RAW_ROOT = PUBLIC_ROOT / "assets" / "product-catalog-raw"
CLEAN_ROOT = PUBLIC_ROOT / "assets" / "product-catalog-clean"
IMAGE_EXT = {".jpg", ".jpeg", ".png", ".webp"}


TEXT_MASK_RULES = [
    # product-specific Chinese copy/watermark blocks; keep product, remove copy
    ("【红麝】/images/sku/sku_01", [(0.00, 0.00, 0.24, 0.12), (0.00, 0.80, 0.56, 1.00), (0.42, 0.28, 0.60, 0.72)]),
    ("【鹿血红麝】通经络塑形/images/sku/sku_02", [(0.00, 0.00, 0.82, 0.20), (0.00, 0.84, 0.30, 1.00)]),
    ("五行合香珠/images/sku/sku_01", [(0.00, 0.00, 1.00, 0.20), (0.00, 0.84, 0.30, 1.00)]),
    ("沉檀龙麝/images/sku/sku_02", [(0.00, 0.00, 0.82, 0.20), (0.00, 0.84, 0.30, 1.00)]),
    ("古法安心宁神天然药香去蚊手链/images/sku/sku_08", [(0.00, 0.00, 0.78, 0.20), (0.00, 0.84, 0.30, 1.00)]),
    ("【粉黛灵芝】/images/sku/sku_05", [(0.00, 0.00, 0.72, 0.18), (0.00, 0.84, 0.30, 1.00)]),
    ("【粉黛灵芝】/images/sku/sku_19", [(0.00, 0.00, 0.76, 0.20), (0.00, 0.84, 0.32, 1.00)]),
    ("【粉黛灵芝】/images/sku/sku_20", [(0.00, 0.00, 0.76, 0.20), (0.00, 0.84, 0.32, 1.00)]),
    ("【粉黛灵芝】/images/sku/sku_21", [(0.00, 0.00, 0.76, 0.20), (0.00, 0.84, 0.32, 1.00)]),
    ("【玫瑰美人】/images/sku/sku_15", [(0.00, 0.00, 0.76, 0.20), (0.00, 0.84, 0.32, 1.00)]),
    ("【青黛玄散】/images/sku/sku_17", [(0.00, 0.00, 0.80, 0.20), (0.00, 0.84, 0.32, 1.00)]),
    ("【青黛玄散】/images/sku/sku_30", [(0.00, 0.00, 0.80, 0.20), (0.00, 0.84, 0.32, 1.00)]),
    ("手工diy材料串珠/images/sku/sku_32", [(0.00, 0.00, 1.00, 0.22), (0.00, 0.82, 0.36, 1.00)]),
    ("手工diy材料串珠/images/sku/sku_33", [(0.00, 0.00, 1.00, 0.22), (0.00, 0.82, 0.36, 1.00)]),
]


def normalize(path: Path) -> str:
    return path.as_posix()


def rules_for(relative: Path):
    normalized = normalize(relative)
    return [rect for pattern, rects in TEXT_MASK_RULES if pattern in normalized for rect in rects]


def soften_rect(img: Image.Image, rect):
    w, h = img.size
    left = max(0, int(rect[0] * w))
    top = max(0, int(rect[1] * h))
    right = min(w, int(rect[2] * w))
    bottom = min(h, int(rect[3] * h))
    if right <= left or bottom <= top:
        return
    region = img.crop((left, top, right, bottom))
    # Heavy blur + slight darkening blends text back into the surrounding scene.
    region = region.filter(ImageFilter.GaussianBlur(radius=max(10, min(w, h) // 28)))
    img.paste(region, (left, top))


def clean_image(src: Path, dst: Path, relative: Path):
    dst.parent.mkdir(parents=True, exist_ok=True)
    masks = rules_for(relative)
    if not masks:
        shutil.copy2(src, dst)
        return
    with Image.open(src) as im:
        img = im.convert("RGB")
        for rect in masks:
            soften_rect(img, rect)
        img.save(dst, quality=92, optimize=True)


def main():
    if CLEAN_ROOT.exists():
        shutil.rmtree(CLEAN_ROOT)
    count = 0
    cleaned = 0
    for src in RAW_ROOT.rglob("*"):
        if src.suffix.lower() not in IMAGE_EXT:
            continue
        rel = src.relative_to(RAW_ROOT)
        dst = CLEAN_ROOT / rel
        if rules_for(rel):
            cleaned += 1
        clean_image(src, dst, rel)
        count += 1
    print(f"Copied {count} images; softened text regions in {cleaned} images.")


if __name__ == "__main__":
    main()
