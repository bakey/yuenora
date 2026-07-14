from pathlib import Path
from PIL import Image, ImageDraw
import re

src = Path("src/data/taoProductCatalog.ts").read_text(encoding="utf-8")
paths = re.findall(r'"image": "([^"]+)"', src)
root = Path("public")
thumbs = []

for image_path in paths[:80]:
    file_path = root / image_path.lstrip("/").replace("/", "\\")
    if not file_path.exists():
        continue
    try:
        image = Image.open(file_path).convert("RGB")
        image.thumbnail((220, 180))
        thumbs.append((image_path, image.copy()))
    except Exception:
        continue

cols = 5
cell_w = 220
cell_h = 220
sheet = Image.new("RGB", (cols * cell_w, ((len(thumbs) + cols - 1) // cols) * cell_h), (18, 16, 13))
draw = ImageDraw.Draw(sheet)

for index, (_, image) in enumerate(thumbs):
    x = (index % cols) * cell_w
    y = (index // cols) * cell_h
    sheet.paste(image, (x + (cell_w - image.width) // 2, y + 8))
    draw.text((x + 8, y + 192), f"{index + 1:02d}", fill=(220, 180, 110))

out = root / "assets/product-catalog-raw/main-image-contact-sheet.jpg"
sheet.save(out, quality=86)
print(out)
