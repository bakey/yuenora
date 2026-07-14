import fs from "node:fs";
import path from "node:path";
import { TextDecoder } from "node:util";

const publicRoot = path.resolve("public");
const rawRoot = path.join(publicRoot, "assets", "product-catalog-raw");
const cleanRoot = path.join(publicRoot, "assets", "product-catalog-clean");
const outFile = path.resolve("src", "data", "taoProductCatalog.ts");

const imageExt = new Set([".jpg", ".jpeg", ".png", ".webp"]);

function walkFiles(dir) {
  if (!fs.existsSync(dir)) return [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  return entries.flatMap((entry) => {
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? walkFiles(full) : [full];
  });
}

function readChineseText(filePath) {
  const buffer = fs.readFileSync(filePath);
  for (const encoding of ["utf-8", "gb18030", "gbk"]) {
    try {
      const decoded = new TextDecoder(encoding, { fatal: true }).decode(buffer);
      if (!decoded.includes("�")) return decoded;
    } catch {
      // Try next encoding.
    }
  }
  return buffer.toString("utf8");
}

function toPublicPath(filePath) {
  return `/${path.relative(publicRoot, filePath).replaceAll(path.sep, "/")}`;
}

function toCleanPublicPath(sourcePath) {
  const relative = path.relative(path.join(publicRoot, "assets", "product-catalog-raw"), sourcePath);
  const cleanPath = path.join(cleanRoot, relative);
  return fs.existsSync(cleanPath) ? toPublicPath(cleanPath) : toPublicPath(sourcePath);
}

function compactText(text) {
  return text
    .replace(/\s+/g, " ")
    .replace(/\s*\|\s*/g, " | ")
    .trim();
}

function stripDecorativeName(name) {
  return name.replace(/^m/, "").replace(/[【】]/g, "").replace(/】$/, "").trim();
}

function splitDescription(text) {
  return compactText(text)
    .split(/\s*\|\s*/)
    .map((part) => part.trim())
    .filter(Boolean);
}

function cleanDescription(text) {
  const blocked = /^(店铺|已售|优惠|保障|退货宝|7天价保|88VIP|品牌|年代|品相|货号|是否现货|价格区间|新奇特|材质|商品类型|成色|风格|颗数|颜色分类|商品属性)/;
  return splitDescription(text)
    .filter((part) => !blocked.test(part))
    .filter((part) => !/(退款|退货|运费|价保|平台指定|手机淘宝|补差|无理由|会员|优惠)/.test(part))
    .slice(0, 8);
}

function inferProductKind(name, desc) {
  const text = `${name} ${desc}`;
  if (/材料|diy|DIY|串珠/.test(text)) return "DIY 材料";
  if (/吊坠|挂件|项链|活扣|锁骨链|耳环|戒指|手持|毛衣链|包挂|车挂|挂饰/.test(text)) return "配饰挂件";
  if (/手链|手串|佛珠|念珠|多宝/.test(text)) return "合香手串";
  return "合香珠";
}

function inferGroup(name, desc) {
  const text = `${name} ${desc}`;
  if (/材料|diy|DIY|串珠/.test(text)) return "diy-components";
  if (/吊坠|挂件|项链|活扣|锁骨链|耳环|戒指|手持|毛衣链|包挂|车挂|挂饰|如意锁|平安扣|卦镇/.test(text)) {
    return "pendant-accessories";
  }
  if (/玫瑰|桃花|桂花|木樨|栀子|茉莉|洛神|粉黛|灵芝|紫气/.test(text)) return "floral-fragrance";
  if (/清醒|提神|醒脑|聪明|记性|专心|致志|状元|及第|醒目|揉肝/.test(text)) return "clarity-focus";
  if (/妙睡|宁神|安神|静心|睡眠|固本|归元|定心|安心|当归|气血/.test(text)) return "calm-rest";
  if (/苦艾|避暑|清凉|御寒|青黛|红麝|鹿血|通鼻|经络/.test(text)) return "herbal-seasonal";
  if (/龙涎|沉檀|大四合|贵妃/.test(text)) return "court-premium";
  return "classic-incense";
}

function inferMeaning(name, desc) {
  const text = `${name} ${desc}`;
  if (/玫瑰|桃花|桂花|木樨|栀子|茉莉|洛神|粉黛|灵芝/.test(text)) {
    return "花香调合香珠，适合表达陪伴、柔和、愉悦与日常礼赠的心意。";
  }
  if (/清醒|提神|醒脑|聪明|记性|专心|致志|状元|及第|醒目|揉肝/.test(text)) {
    return "偏清醒与专注的合香珠，适合学习、工作、备考与自我提醒场景。";
  }
  if (/妙睡|宁神|安神|静心|睡眠|固本|归元|定心|安心|当归|气血/.test(text)) {
    return "偏安定、修养与内在秩序的合香珠，适合家人礼赠、睡前陪伴与静心佩戴。";
  }
  if (/苦艾|避暑|清凉|御寒|青黛|红麝|鹿血|通鼻|经络/.test(text)) {
    return "草本感更明显的合香珠，强调季节、身体感受与传统草木香气。";
  }
  if (/龙涎|沉檀|大四合|贵妃/.test(text)) {
    return "宫廷感与沉稳香气更强，适合高阶礼盒、成熟质感和收藏型场景。";
  }
  if (/吊坠|挂件|项链|活扣|锁骨链|手持|毛衣链/.test(text)) {
    return "可作为项链、吊坠或手串配饰使用，强化仪式感、收藏感与东方装饰性。";
  }
  if (/材料|diy|DIY|串珠/.test(text)) {
    return "适合进入自选串珠系统，与不同香型、配件和绳色自由组合。";
  }
  return "青城山合香珠系列，适合日常佩戴、礼赠和东方香气文化展示。";
}

function inferTags(name, desc) {
  const text = `${name} ${desc}`;
  const pairs = [
    [/玫瑰|桃花|桂花|木樨|栀子|茉莉|洛神/, "花香"],
    [/清醒|提神|专心|状元|及第|醒目/, "清醒"],
    [/妙睡|宁神|安神|定心|安心|固本|归元/, "静心"],
    [/苦艾|青黛|避暑|御寒|红麝|鹿血/, "草本"],
    [/龙涎|沉檀|大四合|贵妃/, "高阶香"],
    [/吊坠|项链|挂件|活扣|手持/, "配饰"],
    [/DIY|diy|材料|串珠/, "DIY"],
    [/送礼|礼物|生日|节日/, "礼赠"],
  ];
  return pairs.filter(([pattern]) => pattern.test(text)).map(([, tag]) => tag).slice(0, 4);
}

function rankImage(filePath, productName) {
  const normalized = filePath.replaceAll(path.sep, "/");
  const file = path.basename(filePath).toLowerCase();
  let score = 0;

  if (normalized.includes("/images/detail/")) score -= 60;
  if (normalized.includes("/images/sku/")) score += 20;
  if (normalized.includes("/images/primary/")) score += 30;
  if (/sku_0[1-8]\./.test(file)) score += 16;
  if (/primary_0[1-3]\./.test(file)) score += 18;
  if (/sku_(1[5-9]|2\d|3\d|4\d)\./.test(file)) score -= 8;
  if (/sku_00\./.test(file)) score -= 12;
  if (/详情|detail|尺码|说明|保证|保真|参数/.test(normalized)) score -= 30;
  if (/材料|diy|DIY/.test(productName) && /sku_0[1-6]\./.test(file)) score += 12;

  return score;
}

function findImages(productDir) {
  return walkFiles(path.join(productDir, "images"))
    .filter((file) => imageExt.has(path.extname(file).toLowerCase()))
    .filter((file) => !file.includes(`${path.sep}detail${path.sep}`))
    .sort((a, b) => rankImage(b, productDir) - rankImage(a, productDir) || a.localeCompare(b, "zh-Hans-CN"));
}

const groupMeta = {
  "classic-incense": {
    title: "合香珠 · 经典香型",
    subtitle: "Classic Incense Beads",
    description: "青城山合香珠基础系列，适合日常佩戴、礼赠和东方香气文化入门。",
  },
  "floral-fragrance": {
    title: "合香珠 · 花香系",
    subtitle: "Floral Incense Beads",
    description: "玫瑰、桃花、木樨、茉莉、栀子等花香方向，更适合礼赠、陪伴和柔和日常。",
  },
  "clarity-focus": {
    title: "合香珠 · 清醒专注",
    subtitle: "Clarity & Focus",
    description: "围绕提神、记忆、专注、醒目、状元及第等意图整理，适合学习和工作场景。",
  },
  "calm-rest": {
    title: "合香珠 · 静心安神",
    subtitle: "Calm & Rest",
    description: "偏宁神、定心、固本、安心与睡前陪伴的香型，适合家人和自用。",
  },
  "herbal-seasonal": {
    title: "合香珠 · 草本节令",
    subtitle: "Herbal Seasonal",
    description: "苦艾、青黛、红麝、避暑、御寒等草本与节令香型，气质更鲜明。",
  },
  "court-premium": {
    title: "合香珠 · 宫廷高阶",
    subtitle: "Court Premium",
    description: "龙涎、沉檀、大四合、贵妃经络等更沉稳浓郁，适合高阶礼盒和收藏型展示。",
  },
  "pendant-accessories": {
    title: "合香珠 · 配饰挂件",
    subtitle: "Pendants & Accessories",
    description: "项链、吊坠、活扣、手持、挂件等延展形态，可作为手串或礼盒搭配。",
  },
  "diy-components": {
    title: "合香珠 · DIY 材料",
    subtitle: "DIY Components",
    description: "用于自选串珠系统的材料、配件和可组合珠型，方便后续进入定制流程。",
  },
};

const products = [];
const seenKeys = new Set();

for (const descFile of walkFiles(rawRoot).filter((file) => path.basename(file) === "description.txt")) {
  const dir = path.dirname(descFile);
  const sourceName = path.basename(dir);
  const displayName = stripDecorativeName(sourceName);
  const rawDesc = readChineseText(descFile);
  const productKey = `${displayName}-${rawDesc.slice(0, 36)}`;
  if (seenKeys.has(productKey)) continue;
  seenKeys.add(productKey);

  const imageFiles = findImages(dir);
  const images = imageFiles.map(toCleanPublicPath).slice(0, 12);
  if (images.length === 0) continue;

  const groupId = inferGroup(displayName, rawDesc);
  const facts = cleanDescription(rawDesc);
  const primaryLine = facts[0] || `${displayName}，青城山合香珠系列。`;

  products.push({
    id: `${groupId}-${products.length + 1}`,
    code: String(products.length + 1).padStart(2, "0"),
    name: displayName,
    sourceName,
    type: inferProductKind(displayName, rawDesc),
    meaning: inferMeaning(displayName, rawDesc),
    description: primaryLine,
    details: facts,
    image: images[0],
    images,
    tags: inferTags(displayName, rawDesc),
    price: [368, 460, 518, 648, 735, 880, 1180, 1253][products.length % 8],
    groupId,
  });
}

const groups = Object.entries(groupMeta)
  .map(([id, meta]) => ({
    id,
    ...meta,
    items: products.filter((product) => product.groupId === id),
  }))
  .filter((group) => group.items.length > 0);

const output = `export type TaoCatalogItem = {
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
  groupId: string;
};

export type TaoCatalogGroup = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  items: TaoCatalogItem[];
};

export const taoProductCatalog: TaoCatalogGroup[] = ${JSON.stringify(groups, null, 2)};
`;

fs.writeFileSync(outFile, output, "utf8");
console.log(`Generated ${products.length} products into ${outFile}`);
