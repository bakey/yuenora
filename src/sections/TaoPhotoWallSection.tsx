import { type FormEvent, useEffect, useMemo, useRef, useState } from "react";
import Lenis from "lenis";
import BrandMark from "../components/BrandMark";
import { createOrder, type OrderPayload } from "../lib/orderApi";
import { taoProductCatalog, type TaoCatalogGroup, type TaoCatalogItem, type TaoCatalogParent } from "../data/taoProductCatalog";
import { localizeProductCopy, localizeProductName, useI18n } from "../i18n";

function formatPrice(item: TaoCatalogItem) {
  const price = getDisplayPriceValue(item);
  return price === null ? "Ask for price" : formatUsd(price);
}

function getDisplayPriceValue(item: TaoCatalogItem) {
  if (!item.price) return null;
  return Math.round(item.price);
}

function formatUsd(value: number) {
  return `USD ${Math.round(value)}`;
}

const blessingServiceFee = 500;
const mobileProductBatchSize = 10;
const orderEmail = "orders@taoblessingjewelry.com";

type OrderRecord = {
  id: string;
  createdAt: string;
  productId: string;
  productName: string;
  productType: string;
  price: string;
  productPrice: number | null;
  serviceFee: number;
  total: number | null;
  customerName: FormDataEntryValue | null;
  phone: FormDataEntryValue | null;
  wechat: FormDataEntryValue | null;
  quantity: number;
  address: FormDataEntryValue | null;
  note: FormDataEntryValue | null;
  blessingService: boolean;
};

function formValueToString(value: FormDataEntryValue | null) {
  return typeof value === "string" ? value : "";
}

function buildOrderMailto(order: OrderRecord) {
  const subject = `缘灵 Order ${order.id} - ${order.productName}`;
  const body = [
    `Order ID: ${order.id}`,
    `Product: ${order.productName}`,
    `Type: ${order.productType}`,
    `Unit price: ${order.price}`,
    `Quantity: ${order.quantity}`,
    `Blessing service: ${order.blessingService ? `Yes (${formatUsd(order.serviceFee)})` : "No"}`,
    `Total: ${order.total === null ? "Confirm with service" : formatUsd(order.total)}`,
    "",
    `Recipient name: ${formValueToString(order.customerName)}`,
    `Phone: ${formValueToString(order.phone)}`,
    `WeChat / WhatsApp: ${formValueToString(order.wechat)}`,
    `Address: ${formValueToString(order.address)}`,
    `Notes: ${formValueToString(order.note)}`,
    "",
    "Please confirm payment, delivery details, and blessing-service schedule.",
  ].join("\n");

  return `mailto:${orderEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function getProductOnlyImages(item: TaoCatalogItem) {
  if (item.id.startsWith("taobao-new-")) {
    return [item.image];
  }
  const productImages = item.images.filter((image) => !image.includes("/main."));
  return productImages.length ? productImages : [item.image];
}

function getProductOnlyImage(item: TaoCatalogItem) {
  return getProductOnlyImages(item)[0] ?? item.image;
}

function getProductDetailImages(item: TaoCatalogItem) {
  return Array.from(new Set([getProductOnlyImage(item), item.image, ...item.images])).slice(0, 2);
}

const typeLabels: Record<string, string> = {
  bracelet: "Bracelet",
  necklace: "Necklace",
  ring: "Ring",
  earring: "Earrings",
  incense: "Incense Beads",
};

const groupEnglishCopy: Record<string, { title: string; subtitle: string; material: string; description: string }> = {
  "bracelet-crystal": {
    title: "Love Crystal",
    subtitle: "Crystal Blessings",
    material: "crystal and luminous stone",
    description: "Clear crystal pieces for affection, gentle connection, and everyday emotional balance.",
  },
  "bracelet-jade-stone": {
    title: "Fortune Jade",
    subtitle: "Jade & Stone",
    material: "jade and natural stone",
    description: "Warm jade pieces for protection, calm fortune, and long-wearing peace.",
  },
  "bracelet-mixed-blessing": {
    title: "Wellness Mix",
    subtitle: "Mixed Blessings",
    material: "mixed natural stones",
    description: "Layered materials and colors for health, renewal, and balanced energy.",
  },
  "bracelet-red-agate": {
    title: "Prosperity Agate",
    subtitle: "Red Agate",
    material: "red agate and warm stone",
    description: "Rich red agate pieces for confidence, prosperity, and steady momentum.",
  },
  "necklace-silver": {
    title: "Golden Harmony",
    subtitle: "Gold & Jade",
    material: "gold accents, silver, crystal, and jade",
    description: "Refined pendants and necklaces for abundance, harmony, and ceremonial gifting.",
  },
  "necklace-jade": {
    title: "Jade Pendants",
    subtitle: "Jade",
    material: "jade",
    description: "Soft jade forms for peace, restraint, and quiet protection.",
  },
  "necklace-agate": {
    title: "Agate Pendants",
    subtitle: "Agate",
    material: "agate",
    description: "Warm agate pendants for vitality, courage, and heartfelt gifting.",
  },
  "necklace-amber": {
    title: "Amber Honey",
    subtitle: "Amber",
    material: "amber and beeswax amber",
    description: "Golden amber pieces for warmth, clarity, and gentle daily presence.",
  },
  "necklace-crystal": {
    title: "Crystal & Lapis",
    subtitle: "Crystal Stones",
    material: "crystal and lapis lazuli",
    description: "Clear and deep-toned stones for focus, expression, and personal grounding.",
  },
};

function getGroupEnglish(group?: TaoCatalogGroup) {
  if (!group) {
    return { title: "Blessing Pieces", subtitle: "Curated Objects", material: "natural materials", description: "Meaningful pieces shaped for daily wear and thoughtful gifting." };
  }
  if (group.parent === "ring") return { title: "Blessing Rings", subtitle: "Rings", material: "natural stone and metal accents", description: "Small symbolic rings for daily protection and personal intention." };
  if (group.parent === "earring") return { title: "Blessing Earrings", subtitle: "Earrings", material: "natural stone and gold-toned accents", description: "Light blessing earrings for refined everyday gifting." };
  if (group.parent === "incense") return { title: "Aroma Beads", subtitle: "Incense Beads", material: "aromatic wood and natural beads", description: "Aroma beads for calm presence, focus, and ritual atmosphere." };
  return groupEnglishCopy[group.id] ?? {
    title: "Blessing Pieces",
    subtitle: "Curated Objects",
    material: "natural materials",
    description: "Meaningful pieces shaped for daily wear and thoughtful gifting.",
  };
}

function getDisplayType(item: TaoCatalogItem, parent?: string) {
  if (parent && typeLabels[parent]) return typeLabels[parent];
  if (/necklace|pendant/i.test(item.type)) return "Necklace";
  if (/ring/i.test(item.type)) return "Ring";
  if (/ear/i.test(item.type)) return "Earrings";
  if (/incense|aroma/i.test(item.type)) return "Incense Beads";
  return "Bracelet";
}

const productNameStems: Record<string, string[]> = {
  "bracelet-crystal": [
    "Moonlit Crystal",
    "Rose Dawn",
    "Clear Heart",
    "Lotus Light",
    "Gentle Tide",
    "Morning Dew",
    "Silver Cloud",
    "Quiet Bloom",
    "Pearl Moon",
    "Soft Radiance",
    "Blue Serenity",
    "Star River",
  ],
  "bracelet-jade-stone": [
    "Jade Harmony",
    "Verdant Peace",
    "Mountain Calm",
    "Cloud Jade",
    "Bamboo Grace",
    "Spring Courtyard",
    "Still Water",
    "Green Blessing",
    "Temple Jade",
    "Gentle Guardian",
    "River Stone",
    "Quiet Fortune",
  ],
  "bracelet-mixed-blessing": [
    "Five Blessings",
    "Fortune Garden",
    "Balanced Path",
    "Auspicious Thread",
    "Joyful Harvest",
    "Good Omen",
    "Harmony Grove",
    "Blessing Tide",
    "Lucky Lantern",
    "Peaceful Days",
    "Golden Wish",
    "Kindred Light",
  ],
  "bracelet-red-agate": [
    "Red Fortune",
    "Cinnabar Dawn",
    "Warm Agate",
    "Prosperity Flame",
    "Lotus Ember",
    "Scarlet Blessing",
    "Golden Vermilion",
    "Sunlit Agate",
    "Auspicious Red",
    "Steady Heart",
    "Temple Flame",
    "Crimson Peace",
  ],
  "necklace-silver": [
    "Golden Jade",
    "Jade Abundance",
    "Lotus Treasury",
    "Auspicious Gold",
    "Cloud Fortune",
    "Radiant Harmony",
    "Full Blessing",
    "Golden Courtyard",
    "Jade Promise",
    "Treasure Light",
    "Prosperity Bell",
    "Bright Offering",
  ],
  "necklace-jade": [
    "Quiet Jade",
    "Lotus Pendant",
    "Cloud Guardian",
    "Bamboo Peace",
    "Jade Courtyard",
    "Serene Stone",
    "Green Wish",
    "Mountain Pendant",
  ],
  "necklace-agate": [
    "Scarlet Agate",
    "Warm Ember",
    "Red Lotus",
    "Fortune Flame",
    "Sunset Agate",
    "Auspicious Pendant",
  ],
  "necklace-amber": [
    "Honey Amber",
    "Golden Resin",
    "Warm Light",
    "Amber Wish",
    "Sunlit Pendant",
    "Gentle Honey",
  ],
  "necklace-crystal": [
    "Crystal Moon",
    "Lapis Star",
    "Clear Sky",
    "Blue Temple",
    "Silver Dew",
    "Bright Mind",
  ],
};

const parentNameStems: Partial<Record<TaoCatalogParent, string[]>> = {
  ring: ["Jade Seal", "Moon Ring", "Lotus Ring", "Quiet Promise", "Golden Circle", "Serene Band"],
  earring: ["Jade Lotus", "Cloud Drop", "Golden Bloom", "Soft Blessing", "Moon Petal", "Auspicious Pearl"],
  incense: ["Sandalwood Calm", "Temple Aroma", "Quiet Incense", "Meditation Beads", "Warm Wood", "Still Breath"],
};

function getDisplayName(item: TaoCatalogItem, group?: TaoCatalogGroup, index?: number) {
  const form = getDisplayType(item, group?.parent);
  const nameIndex = Math.max(0, ((index ?? Number(item.code)) || 1) - 1);
  const stems = (group?.id && productNameStems[group.id]) || (group?.parent && parentNameStems[group.parent]) || ["Blessing Piece", "Quiet Fortune", "Eastern Grace"];
  const stem = stems[nameIndex % stems.length];
  if (/ring|earring|beads|pendant|bracelet|necklace/i.test(stem)) return stem;
  if (form === "Earrings") return `${stem} Earrings`;
  if (form === "Incense Beads") return `${stem} Beads`;
  if (form === "Necklace") return `${stem} Pendant`;
  return `${stem} ${form}`;
}

function getMaterialText(_item: TaoCatalogItem, group?: TaoCatalogGroup) {
  return getGroupEnglish(group).material;
}

function hashText(value: string) {
  let hash = 0;
  for (const character of value) {
    hash = (hash * 31 + character.charCodeAt(0)) % 9973;
  }
  return hash;
}

const blessingMeanings = [
  "steady protection",
  "warm prosperity",
  "quiet confidence",
  "emotional harmony",
  "clear focus",
  "health and renewal",
  "gentle courage",
  "daily good fortune",
];

const giftRecipients = [
  "family",
  "a partner",
  "a close friend",
  "yourself",
  "someone starting a new chapter",
  "a loved one who travels often",
  "someone who needs calm support",
  "a thoughtful seasonal gift",
];

const wearingScenes = [
  "office days and weekend wear",
  "daily commutes and travel",
  "quiet evenings and personal rituals",
  "simple linen, silk, or neutral outfits",
  "temple visits and meaningful gatherings",
  "layering with other understated jewelry",
  "gift moments with a handwritten card",
  "everyday reminders of care",
];

const zhGroupCopy: Record<string, { material: string; blessing: string; recipient: string; scene: string; note: string }> = {
  "bracelet-crystal": {
    material: "水晶、粉晶与清透晶石",
    blessing: "感情和合、心绪清明与温柔守护",
    recipient: "伴侣、朋友，或需要情绪安定的自己",
    scene: "日常通勤、约会与轻礼赠场景",
    note: "晶石光感清澈，适合作为表达关心与陪伴的随身祝福。",
  },
  "bracelet-jade-stone": {
    material: "白玉、青玉与温润玉石",
    blessing: "平安守护、身心安定与好运延续",
    recipient: "家人、长辈，或重视长期佩戴质感的人",
    scene: "日常佩戴、节日拜访与正式送礼",
    note: "玉石在东方语境中象征温润、克制与长久的护佑。",
  },
  "bracelet-mixed-blessing": {
    material: "多宝混搭、彩色晶石与金色配件",
    blessing: "健康、圆满、活力与综合好运",
    recipient: "朋友、同事，或正在开启新阶段的人",
    scene: "生日、毕业、乔迁与新年礼物",
    note: "多种材质互相呼应，适合承载多重祝愿。",
  },
  "bracelet-red-agate": {
    material: "南红玛瑙、朱砂色珠材与暖色宝石",
    blessing: "财运、热忱、勇气与稳定前行",
    recipient: "事业起步者、伴侣，或需要信心加持的人",
    scene: "工作、出行、节庆与仪式感穿搭",
    note: "红色在传统文化中寓意吉庆、驱邪与旺盛生命力。",
  },
  "necklace-silver": {
    material: "金色配件、银饰、玉石与水晶",
    blessing: "富足圆满、金玉满堂与贵人缘",
    recipient: "家人、伴侣，或希望送出郑重祝福的人",
    scene: "重要节日、纪念日与正式礼赠",
    note: "金玉相配，强调富贵、圆满与被珍视的心意。",
  },
  "necklace-jade": {
    material: "玉石吊坠与温润绳链",
    blessing: "平安、清正与长久守护",
    recipient: "父母、长辈，或偏爱东方雅致的人",
    scene: "贴身佩戴、祈福礼赠与日常护身",
    note: "玉石含蓄温雅，适合传递稳妥而长久的祝愿。",
  },
  "necklace-agate": {
    material: "玛瑙吊坠与暖色珠材",
    blessing: "热忱、勇气与开运能量",
    recipient: "朋友、伴侣，或正在转换状态的人",
    scene: "出行、聚会与日常点缀",
    note: "玛瑙色泽沉稳，适合表达鼓励与向前的心意。",
  },
  "necklace-amber": {
    material: "蜜蜡琥珀与金色配件",
    blessing: "温暖、安神与柔和保护",
    recipient: "家人、母亲，或需要静心陪伴的人",
    scene: "秋冬穿搭、生日礼物与日常随身",
    note: "琥珀光泽温厚，适合传递安定、照拂与暖意。",
  },
  "necklace-crystal": {
    material: "水晶、青金石与清透宝石",
    blessing: "专注、表达、清明与内在平衡",
    recipient: "学生、创作者，或需要清晰判断的人",
    scene: "学习、工作、冥想与轻正式场合",
    note: "清透与深色石材形成对照，适合承载理性与心念的祝福。",
  },
};

const zhParentCopy: Partial<Record<TaoCatalogParent, { material: string; blessing: string; recipient: string; scene: string; note: string }>> = {
  ring: {
    material: "天然石与金属配件",
    blessing: "承诺、守护与专注心念",
    recipient: "伴侣、自己，或需要纪念信物的人",
    scene: "日常佩戴、纪念日与轻仪式场合",
    note: "戒指贴近日常动作，适合成为低调而持续的提醒。",
  },
  earring: {
    material: "天然石、玉石与金色配件",
    blessing: "灵动、亲和与轻盈好运",
    recipient: "朋友、伴侣，或偏爱精致小物的人",
    scene: "通勤、约会、聚会与节日礼物",
    note: "耳饰更显面部气色，适合传递清爽而明亮的祝福。",
  },
  incense: {
    material: "香木、檀木与天然珠材",
    blessing: "静心、安眠与空间净化",
    recipient: "长辈、朋友，或重视冥想与居家氛围的人",
    scene: "书房、卧室、茶席与静修时刻",
    note: "香材以气息安顿心神，适合表达平和与陪伴。",
  },
};

const zhMeaningVariants = [
  "平安守护",
  "财运顺遂",
  "健康安定",
  "感情和合",
  "清明专注",
  "勇气与新程",
  "温柔陪伴",
  "圆满好运",
];

const zhRecipientVariants = [
  "家人和长辈",
  "伴侣",
  "亲近朋友",
  "自己",
  "正在开始新阶段的人",
  "经常出行的人",
  "需要安定支持的人",
  "节日里想认真祝福的人",
];

const zhSceneVariants = [
  "日常通勤与周末佩戴",
  "旅行、出差与随身护佑",
  "夜晚独处、冥想或静心时刻",
  "棉麻、真丝和素色穿搭",
  "寺庙祈福、聚会与重要见面",
  "与其他低调首饰叠戴",
  "搭配手写卡片作为礼物",
  "每天提醒自己被照顾的时刻",
];

function getZhProductBase(item: TaoCatalogItem, group?: TaoCatalogGroup, index = 1) {
  const seed = hashText(`${item.id}-${group?.id ?? "catalog"}-${index}`);
  const groupCopy = (group?.id && zhGroupCopy[group.id]) || (group?.parent && zhParentCopy[group.parent]);
  const material = groupCopy?.material ?? "天然材质与东方珠材";
  const blessing = groupCopy?.blessing ?? zhMeaningVariants[seed % zhMeaningVariants.length];
  const recipient = groupCopy?.recipient ?? zhRecipientVariants[(seed + 2) % zhRecipientVariants.length];
  const scene = groupCopy?.scene ?? zhSceneVariants[(seed + 5) % zhSceneVariants.length];
  const note = groupCopy?.note ?? "以东方寓意为线索，让佩戴成为一份可见的祝愿。";
  return { material, blessing, recipient, scene, note, seed };
}

function getZhForm(item: TaoCatalogItem, group?: TaoCatalogGroup) {
  const parent = group?.parent;
  if (parent === "necklace") return "项链或吊坠";
  if (parent === "ring") return "戒指";
  if (parent === "earring") return "耳饰";
  if (parent === "incense") return "香珠";
  if (/necklace|pendant/i.test(item.type)) return "项链或吊坠";
  if (/ring/i.test(item.type)) return "戒指";
  if (/ear/i.test(item.type)) return "耳饰";
  if (/incense|aroma/i.test(item.type)) return "香珠";
  return "手链";
}

function getProductSellingPoint(item: TaoCatalogItem, group?: TaoCatalogGroup, index = 1) {
  const seed = hashText(`${item.id}-${group?.id ?? "catalog"}-${index}`);
  const materialText = getMaterialText(item, group);
  const form = getDisplayType(item, group?.parent).toLowerCase();
  const meaning = blessingMeanings[seed % blessingMeanings.length];
  const recipient = giftRecipients[(seed + 2) % giftRecipients.length];
  const scene = wearingScenes[(seed + 5) % wearingScenes.length];
  return `A ${materialText} ${form} for ${meaning}, suited to ${recipient} and ${scene}.`;
}

function formatCardDescription(item: TaoCatalogItem, group?: TaoCatalogGroup, index = 1, locale = "en") {
  if (locale === "zh") {
    const base = getZhProductBase(item, group, index);
    const form = getZhForm(item, group);
    return `以${base.material}制成的${form}，主打${base.blessing}；适合送给${base.recipient}，也适合${base.scene}。`;
  }
  return getProductSellingPoint(item, group, index);
}

function formatDetailDescription(item: TaoCatalogItem, group?: TaoCatalogGroup, locale = "en") {
  if (locale === "zh") {
    const base = getZhProductBase(item, group, Number(item.code) || 1);
    const form = getZhForm(item, group);
    return `${getDisplayName(item, group)}选用${base.material}，作为${form}更强调${base.blessing}。它适合送给${base.recipient}，可用于${base.scene}；${base.note}`;
  }
  const seed = hashText(`${item.id}-${group?.id ?? "detail"}`);
  const materialText = getMaterialText(item, group);
  const form = getDisplayType(item, group?.parent).toLowerCase();
  const meaning = blessingMeanings[seed % blessingMeanings.length];
  const recipient = giftRecipients[(seed + 3) % giftRecipients.length];
  const scene = wearingScenes[(seed + 6) % wearingScenes.length];
  return `Made with ${materialText}, this ${form} carries ${meaning} in a restrained Eastern style. It works well for ${recipient}, especially for ${scene}.`;
}

function useCatalogLenisScroll<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const element = ref.current;
    const content = element?.querySelector<HTMLElement>(".product-catalog-scroll-content");
    if (!element || !content) return;

    const lenis = new Lenis({ wrapper: element, content, lerp: 0.08, smoothWheel: true });
    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = window.requestAnimationFrame(raf);
    };
    frame = window.requestAnimationFrame(raf);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  return ref;
}

const parentLabels: Record<string, { cn: string; sub: string }> = {
  bracelet: { cn: "Bracelets", sub: "Bracelets" },
  necklace: { cn: "Necklaces", sub: "Pendants" },
  ring: { cn: "Rings", sub: "Rings" },
  earring: { cn: "Earrings", sub: "Earrings" },
  incense: { cn: "Incense", sub: "Aroma beads" },
};

const braceletGroupOrder = ["bracelet-crystal", "bracelet-jade-stone", "bracelet-mixed-blessing", "bracelet-red-agate"];

const braceletGroupDisplay: Record<string, Pick<TaoCatalogGroup, "title" | "subtitle" | "description">> = {
  "bracelet-crystal": {
    title: "Love Crystal",
    subtitle: "Crystal Blessings",
    description: "Clear crystal pieces for affection, gentle connection, and everyday emotional balance.",
  },
  "bracelet-jade-stone": {
    title: "Fortune Jade",
    subtitle: "Jade & Stone",
    description: "Warm jade pieces for protection, calm fortune, and long-wearing peace.",
  },
  "bracelet-mixed-blessing": {
    title: "Wellness Mix",
    subtitle: "Mixed Blessings",
    description: "Layered materials and colors for health, renewal, and balanced energy.",
  },
  "bracelet-red-agate": {
    title: "Prosperity Agate",
    subtitle: "Red Agate",
    description: "Rich red agate pieces for confidence, prosperity, and steady momentum.",
  },
};

const hiddenProductIds = new Set([
  "product-041-132", "product-042-104", "product-048-133", "product-049-134", "product-061-135", "product-062-136",
  "product-067-137", "product-077-138", "product-079-139", "product-080-140", "product-082-141", "product-105-144",
  "product-109-145", "product-110-146", "product-112-168", "product-117-147", "product-127-148", "product-166-149",
  "product-169-69", "product-175-152", "product-197-154", "product-199-81", "product-206-155", "product-211-82",
  "product-240-157", "product-039-103", "product-099-62", "product-102-63", "product-101-174", "product-136-117",
  "product-097-184", "product-100-185", "product-246-205", "product-106-206", "product-224-213", "product-249-217",
  "product-250-218", "product-083-22", "product-146-32", "product-149-118", "product-158-33", "product-159-179",
  "product-160-34", "product-165-180", "product-173-38", "product-174-181", "product-180-39", "product-183-40",
  "product-201-44", "product-205-45", "product-213-46", "product-229-50", "product-230-51", "product-236-52",
  "product-237-53", "product-242-54", "product-243-166",
  "taobao-new-845776114432", "taobao-new-914595244329", "taobao-new-1010778132468", "taobao-new-1010782396401",
]);

const hiddenGroupIds = new Set(["bracelet-turquoise", "bracelet-lapis", "necklace-ruyi-locks", "necklace-necklaces"]);

const necklaceMaterialGroups = [
  { id: "necklace-silver", title: "金玉满堂", subtitle: "金玉满堂", description: "以金色配件、银饰、水晶、青金与温润玉石为主，寓意富足圆满、福泽入怀。", keywords: ["银", "S925", "珍珠", "花", "和田玉", "碧玉", "白玉", "玉石", "玉", "翡翠", "水晶", "青金石", "绿松石", "朱砂", "紫水晶"] },
  { id: "necklace-jade", title: "玉石", subtitle: "玉石", description: "以和田玉、碧玉、白玉与玉石为主的项链款式。", keywords: ["和田玉", "碧玉", "白玉", "玉石", "玉", "翡翠"] },
  { id: "necklace-agate", title: "玛瑙", subtitle: "玛瑙", description: "以南红、玛瑙等温润红色材质为主的项链款式。", keywords: ["南红", "玛瑙"] },
  { id: "necklace-amber", title: "蜜蜡琥珀", subtitle: "蜜蜡琥珀", description: "以蜜蜡、琥珀等暖色材质为主的项链款式。", keywords: ["蜜蜡", "琥珀", "花蜡"] },
  { id: "necklace-crystal", title: "水晶青金", subtitle: "水晶青金", description: "以水晶、青金石、绿松石与朱砂等彩石为主的项链款式。", keywords: ["水晶", "青金石", "绿松石", "朱砂", "紫水晶"] },
];

const groupSubtitleTranslations: Record<string, string> = {
  "Warm Red Agate": "温润南红",
  "Mixed Blessing": "多宝祝福",
  "Crystal Light": "清透水晶",
  "Jade & Stone": "温润玉石",
  Turquoise: "绿松雅意",
  "Lapis Lazuli": "青金星河",
  Pendants: "吊坠挂件",
  "Ruyi Locks": "如意锁",
  "Peace Discs": "平安扣",
  Necklaces: "项链",
  "Oriental Aroma": "东方香调",
  "Woody Aroma": "木质香调",
  "Floral Aroma": "花香调",
};

function localizeGroup(group: TaoCatalogGroup): TaoCatalogGroup {
  return {
    ...group,
    subtitle: groupSubtitleTranslations[group.subtitle] ?? group.subtitle,
  };
}

function getItemMaterialText(item: TaoCatalogItem) {
  return [item.tags[0] ?? "", item.sourceName, item.name, item.description, ...item.details].join(" ");
}

function getNecklaceMaterialDefinition(item: TaoCatalogItem) {
  const primaryText = `${item.tags[0] ?? ""} ${item.description}`;
  const fullText = getItemMaterialText(item);
  return necklaceMaterialGroups.find((group) => group.keywords.some((keyword) => primaryText.includes(keyword)))
    ?? necklaceMaterialGroups.find((group) => group.keywords.some((keyword) => fullText.includes(keyword)))
    ?? necklaceMaterialGroups[necklaceMaterialGroups.length - 1];
}

function buildNecklaceMaterialGroups(groups: TaoCatalogGroup[]) {
  const necklaceItems = groups.filter((group) => group.parent === "necklace").flatMap((group) => group.items);
  return necklaceMaterialGroups
    .map((definition) => ({
      id: definition.id,
      parent: "necklace" as const,
      title: definition.title,
      subtitle: definition.subtitle,
      description: definition.description,
      items: necklaceItems.filter((item) => getNecklaceMaterialDefinition(item).id === definition.id),
    }))
    .filter((group) => group.items.length > 0);
}

function getImportedItemTargetGroupId(item: TaoCatalogItem, parent: TaoCatalogParent) {
  const materialText = getItemMaterialText(item);
  if (parent === "bracelet") {
    if (/南红|玛瑙|朱砂|红/.test(materialText)) return "bracelet-red-agate";
    if (/水晶|白玉|黄水晶|发晶|琉璃|琥珀|蜜蜡/.test(materialText)) return "bracelet-crystal";
    if (/玉石|玉|绿松|青金|翡翠/.test(materialText)) return "bracelet-jade-stone";
    return "bracelet-mixed-blessing";
  }
  if (parent === "necklace") return "necklace-pendants";
  if (parent === "ring") return "ring-rings";
  if (parent === "earring") return "earring-earrings";
  return "incense-oriental-aroma";
}

function mergeImportedGroups(groups: TaoCatalogGroup[]) {
  const baseGroups = groups
    .filter((group) => !group.id.endsWith("-new-arrivals"))
    .filter((group) => !hiddenGroupIds.has(group.id))
    .map((group) => ({ ...group, items: [...group.items] }));
  const byId = new Map(baseGroups.map((group) => [group.id, group]));

  groups
    .filter((group) => group.id.endsWith("-new-arrivals"))
    .forEach((group) => {
      group.items.forEach((item) => {
        const target = byId.get(getImportedItemTargetGroupId(item, group.parent));
        if (target) target.items.unshift(item);
      });
    });

  return baseGroups;
}

function prepareCatalogGroups(groups: TaoCatalogGroup[]) {
  const mergedGroups = mergeImportedGroups(groups);
  const visibleGroups = mergedGroups.map((group) =>
    localizeGroup({
      ...group,
      items: group.items.filter((item) => !hiddenProductIds.has(item.id) && Boolean(item.price)),
    }),
  );
  const materialNecklaceGroups = buildNecklaceMaterialGroups(visibleGroups);
  return visibleGroups
    .flatMap((group) => (group.parent === "necklace" ? (group.id.endsWith("-pendants") ? materialNecklaceGroups : [group]) : [group]))
    .map((group) => ({ ...group, ...(braceletGroupDisplay[group.id] ?? {}) }))
    .filter((group) => group.items.length > 0)
    .sort((a, b) => {
      if (a.parent !== b.parent) return 0;
      const indexA = braceletGroupOrder.indexOf(a.id);
      const indexB = braceletGroupOrder.indexOf(b.id);
      const rankA = indexA === -1 ? braceletGroupOrder.length - 1.5 : indexA;
      const rankB = indexB === -1 ? braceletGroupOrder.length - 1.5 : indexB;
      return rankA - rankB;
    });
}

export default function TaoPhotoWallSection() {
  const { locale, t } = useI18n();
  const groups = useMemo(() => prepareCatalogGroups(taoProductCatalog.filter((group) => group.items.length > 0)), []);
  const parents = useMemo(() => Array.from(new Set(groups.map((group) => group.parent))), [groups]);
  const [activeParent, setActiveParent] = useState<string>(parents[0] ?? "bracelet");
  const parentGroups = groups.filter((group) => group.parent === activeParent);
  const [activeGroupId, setActiveGroupId] = useState<string>(parentGroups[0]?.id ?? groups[0]?.id ?? "");
  const [activeProduct, setActiveProduct] = useState<TaoCatalogItem | null>(null);
  const [activeDetailImage, setActiveDetailImage] = useState<string>("");
  const [orderOpen, setOrderOpen] = useState(false);
  const [orderSubmitted, setOrderSubmitted] = useState<{ id: string; productName: string; mailtoUrl: string } | null>(null);
  const [orderSubmitting, setOrderSubmitting] = useState(false);
  const [orderError, setOrderError] = useState<string | null>(null);
  const [orderQuantity, setOrderQuantity] = useState(1);
  const [blessingServiceSelected, setBlessingServiceSelected] = useState(false);
  const [blessingServiceNoticeOpen, setBlessingServiceNoticeOpen] = useState(false);
  const [isMobileCatalog, setIsMobileCatalog] = useState(() => (typeof window === "undefined" ? false : window.matchMedia("(max-width: 760px)").matches));
  const [mobileProductLimit, setMobileProductLimit] = useState(mobileProductBatchSize);
  const catalogMainRef = useCatalogLenisScroll<HTMLElement>();

  useEffect(() => {
    const query = window.matchMedia("(max-width: 760px)");
    const update = () => setIsMobileCatalog(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const nextParentGroups = groups.filter((group) => group.parent === activeParent);
    if (!nextParentGroups.some((group) => group.id === activeGroupId)) {
      setActiveGroupId(nextParentGroups[0]?.id ?? groups[0]?.id ?? "");
    }
  }, [activeGroupId, activeParent, groups]);

  useEffect(() => {
    setMobileProductLimit(mobileProductBatchSize);
  }, [activeGroupId, activeParent]);

  const activeGroup = groups.find((group) => group.id === activeGroupId) ?? parentGroups[0] ?? groups[0];
  const products = activeGroup?.items ?? [];
  const displayedProducts = isMobileCatalog ? products.slice(0, mobileProductLimit) : products;
  const hasMoreMobileProducts = isMobileCatalog && mobileProductLimit < products.length;
  const activeGroupEnglish = getGroupEnglish(activeGroup);
  const activeGroupTitle = localizeProductName(activeGroupEnglish.title, locale);
  const activeGroupSubtitle = localizeProductName(activeGroupEnglish.subtitle, locale);
  const activeGroupDescription = localizeProductCopy(activeGroupEnglish.description, locale);
  const activeProductPrice = activeProduct ? getDisplayPriceValue(activeProduct) : null;
  const orderSubtotal = activeProductPrice === null ? null : activeProductPrice * orderQuantity;
  const orderTotal = orderSubtotal === null ? null : orderSubtotal + (blessingServiceSelected ? blessingServiceFee : 0);

  const openProduct = (item: TaoCatalogItem) => {
    setActiveProduct(item);
    setActiveDetailImage(getProductOnlyImage(item));
    setOrderOpen(false);
    setOrderSubmitted(null);
    setOrderQuantity(1);
    setBlessingServiceSelected(false);
    setBlessingServiceNoticeOpen(false);
  };

  const closeProduct = () => {
    setActiveProduct(null);
    setOrderOpen(false);
    setOrderSubmitted(null);
    setOrderError(null);
    setOrderQuantity(1);
    setBlessingServiceSelected(false);
    setBlessingServiceNoticeOpen(false);
  };

  const openOrder = () => {
    setOrderOpen(true);
    setOrderSubmitted(null);
    setOrderError(null);
    setOrderQuantity(1);
    setBlessingServiceSelected(false);
    setBlessingServiceNoticeOpen(false);
  };

  useEffect(() => {
    const handleExternalOrder = (event: Event) => {
      const detail = (event as CustomEvent<{ item?: TaoCatalogItem; groupId?: string; openCheckout?: boolean }>).detail;
      if (!detail?.item) return;
      const nextGroup = (detail.groupId && groups.find((group) => group.id === detail.groupId)) ?? groups.find((group) => group.parent === "bracelet") ?? groups[0];
      if (nextGroup) {
        setActiveParent(nextGroup.parent);
        setActiveGroupId(nextGroup.id);
      }
      setActiveProduct(detail.item);
      setActiveDetailImage(getProductOnlyImage(detail.item));
      setOrderOpen(detail.openCheckout ?? true);
      setOrderSubmitted(null);
      setOrderError(null);
      setOrderQuantity(1);
      setBlessingServiceSelected(false);
      setBlessingServiceNoticeOpen(false);
    };

    window.addEventListener("tao:open-order", handleExternalOrder as EventListener);
    return () => window.removeEventListener("tao:open-order", handleExternalOrder as EventListener);
  }, [groups]);

  const updateBlessingService = (checked: boolean) => {
    setBlessingServiceSelected(checked);
    if (checked) setBlessingServiceNoticeOpen(true);
  };

  const submitOrder = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!activeProduct || orderSubmitting) return;
    setOrderSubmitting(true);
    setOrderError(null);

    try {
      const form = new FormData(event.currentTarget);
      const orderId = `YUANLING-${Date.now().toString(36).toUpperCase()}`;
      const productPrice = getDisplayPriceValue(activeProduct);
      const quantity = Math.max(1, Number(form.get("quantity")) || 1);
      const serviceFee = blessingServiceSelected ? blessingServiceFee : 0;
      const total = productPrice === null ? null : productPrice * quantity + serviceFee;
      const productName = getLocalizedName(activeProduct);

      const order: OrderRecord = {
        id: orderId,
        createdAt: new Date().toISOString(),
        productId: activeProduct.id,
        productName,
        productType: getLocalizedType(activeProduct, activeGroup?.parent),
        price: formatPrice(activeProduct),
        productPrice,
        serviceFee,
        total,
        customerName: form.get("customerName"),
        phone: form.get("phone"),
        wechat: form.get("wechat"),
        quantity,
        address: form.get("address"),
        note: form.get("note"),
        blessingService: blessingServiceSelected,
      };

      const payload: OrderPayload = {
        order_id: orderId,
        product_id: activeProduct.id,
        product_name: productName,
        product_type: getLocalizedType(activeProduct, activeGroup?.parent),
        price: formatPrice(activeProduct),
        quantity,
        blessing_service: blessingServiceSelected,
        service_fee: String(serviceFee),
        total: total === null ? "Confirm with service" : String(total),
        customer_name: formValueToString(form.get("customerName")) || undefined,
        customer_phone: formValueToString(form.get("phone")) || undefined,
        shipping_address: formValueToString(form.get("address")) || undefined,
        notes: [formValueToString(form.get("wechat")), formValueToString(form.get("note"))].filter(Boolean).join("; ") || undefined,
        status: "pending",
      };

      const savedOrder = await createOrder(payload);

      const storedOrders = JSON.parse(window.localStorage.getItem("taoOrders") || "[]") as unknown[];
      window.localStorage.setItem("taoOrders", JSON.stringify([order, ...storedOrders].slice(0, 80)));

      const mailtoUrl = buildOrderMailto(order);
      setOrderSubmitted({ id: savedOrder.order_id, productName, mailtoUrl });

      const mailWindow = window.open(mailtoUrl, "_blank", "noopener,noreferrer");
      if (!mailWindow) window.location.href = mailtoUrl;
    } catch (error) {
      setOrderError(error instanceof Error ? error.message : t("order.submitError", "Order submission failed. Please try again."));
    } finally {
      setOrderSubmitting(false);
    }
  };

  function getLocalizedType(item: TaoCatalogItem, parent?: string) {
    const type = getDisplayType(item, parent);
    if (type === "Necklace") return t("type.necklace");
    if (type === "Ring") return t("type.ring");
    if (type === "Earrings") return t("type.earring");
    if (type === "Incense Beads") return t("type.incense");
    return t("type.bracelet");
  }

  function getLocalizedName(item: TaoCatalogItem, index?: number) {
    return localizeProductName(getDisplayName(item, activeGroup, index), locale);
  }

  function getLocalizedGroup(group: TaoCatalogGroup) {
    const groupCopy = getGroupEnglish(group);
    return {
      title: localizeProductName(groupCopy.title, locale),
      subtitle: localizeProductName(groupCopy.subtitle, locale),
      count: `${group.items.length} ${t("catalog.pieces")}`,
    };
  }

  function getLocalizedMaterial(item: TaoCatalogItem) {
    return localizeProductName(getMaterialText(item, activeGroup), locale);
  }

  return (
    <section id="bracelets" className="product-catalog-section" aria-label={t("catalog.aria")}>
      <div className="product-catalog-background" aria-hidden="true" />
      <div className="product-catalog-shell">
        <aside className="product-catalog-sidebar">
          <div className="product-catalog-brand">
            <p className="eyebrow">{t("catalog.kicker")}</p>
            <h2>{t("catalog.headline")}</h2>
            <i aria-hidden="true" />
            <p>{t("catalog.copy")}</p>
          </div>
          <div className="product-catalog-nav-grid">
            <div>
              <p className="product-catalog-nav-label">{t("catalog.category")}</p>
              <div className="product-catalog-parent-tabs" aria-label={t("catalog.category")}>
                {parents.map((parent) => (
                  <button className={parent === activeParent ? "active" : ""} key={parent} onClick={() => {
                    const nextGroup = groups.find((group) => group.parent === parent);
                    setActiveParent(parent);
                    setActiveGroupId(nextGroup?.id ?? "");
                  }} type="button">
                    <i aria-hidden="true" />
                    <b>{t(`parent.${parent}`, parentLabels[parent]?.cn ?? parent)}</b>
                    <span>{t(`parent.${parent}.sub`, parentLabels[parent]?.sub ?? parent)}</span>
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="product-catalog-nav-label">{t("catalog.material")}</p>
              <div className="product-catalog-tabs" aria-label={t("catalog.material")}>
                {parentGroups.map((group) => (
                  <button className={group.id === activeGroup.id ? "active" : ""} key={group.id} onClick={() => setActiveGroupId(group.id)} type="button">
                    <i aria-hidden="true" />
                    <span>{getLocalizedGroup(group).title}</span>
                    <small>{getLocalizedGroup(group).subtitle} · {getLocalizedGroup(group).count}</small>
                  </button>
                ))}
              </div>
            </div>
          </div>
          <button className="product-catalog-service" type="button">
            <i aria-hidden="true" />
            <span>{t("catalog.blessingService")}</span>
            <small>{t("catalog.optional")}</small>
          </button>
        </aside>

        <main className="product-catalog-main" ref={catalogMainRef}>
          <div className="product-catalog-scroll-content">
            <div className="product-catalog-title">
              <div>
                <h3>{activeGroupTitle}</h3>
                <p className="eyebrow">{activeGroupSubtitle} {t("catalog.collection")}</p>
                <span>{activeGroupDescription}</span>
              </div>
              <dl className="product-catalog-stats" aria-label={t("catalog.collection")}>
                <div><dt>{products.length}</dt><dd>{t("catalog.pieces")}</dd></div>
                <div><dt>{t("catalog.handmade")}</dt><dd>{t("catalog.smallBatch")}</dd></div>
                <div><dt>{t("catalog.blessing")}</dt><dd>{t("catalog.optional")}</dd></div>
              </dl>
            </div>
            <div className="product-catalog-grid">
              {displayedProducts.map((item, index) => (
                <article className="product-catalog-card" key={item.id}>
                  <button onClick={() => openProduct(item)} type="button" aria-label={`${t("catalog.view")} ${getLocalizedName(item, index + 1)}`}>
                    <div className="product-catalog-image">
                      <img src={getProductOnlyImage(item)} alt={getLocalizedName(item, index + 1)} loading={index < 8 ? "eager" : "lazy"} />
                    </div>
                    <div className="product-catalog-card-copy">
                      <small>{activeGroupSubtitle}</small>
                      <h4>{getLocalizedName(item, index + 1)}</h4>
                      <p>{formatCardDescription(item, activeGroup, index + 1, locale)}</p>
                      <span>{formatPrice(item)}</span>
                    </div>
                  </button>
                </article>
              ))}
            </div>
            {hasMoreMobileProducts && (
              <button
                className="product-catalog-more"
                type="button"
                onClick={() => setMobileProductLimit((limit) => Math.min(limit + mobileProductBatchSize, products.length))}
              >
                {t("catalog.more")}
                <span>{products.length - mobileProductLimit} {t("catalog.morePieces")}</span>
              </button>
            )}
          </div>
        </main>
      </div>
      <div className="product-catalog-note">
        <span>{t("catalog.priceNotice")}</span>
      </div>

      {activeProduct && (
        <div className="product-detail-modal" role="dialog" aria-modal="true" aria-label={getLocalizedName(activeProduct)}>
          <button className="product-detail-backdrop" onClick={closeProduct} type="button" />
          <header className="commerce-modal-topbar">
            <a className="commerce-logo" href="#top" onClick={closeProduct}>
              <BrandMark compact />
            </a>
            <nav aria-label={t("catalog.productNav")}>
              <a href="#top" onClick={closeProduct}>{t("nav.home", "Home")}</a>
              <a href="#bracelets" onClick={closeProduct}>{t("nav.collection")}</a>
              <a href="#diy" onClick={closeProduct}>{t("nav.custom")}</a>
              <a href="#blessing-service" onClick={closeProduct}>{t("nav.blessing")}</a>
            </nav>
            <div className="commerce-icons" aria-hidden="true"><span>⌕</span><span>♡</span><span>{t("catalog.bag")}</span></div>
          </header>
          <article className="product-detail-panel">
            <button className="product-detail-close" onClick={closeProduct} type="button">{t("nav.close")}</button>
            <div className="product-detail-stamps" aria-label={t("catalog.productSeals")}><span>{t("brand.name")}</span><span>{t("catalog.handmadeTag")}</span><span>{t("catalog.blessTag")}</span></div>
            <div className="product-detail-gallery">
              <img src={activeDetailImage || getProductOnlyImage(activeProduct)} alt={getLocalizedName(activeProduct)} />
              <div>
                {getProductDetailImages(activeProduct).map((image, index) => (
                  <button aria-label={`${t("catalog.showImage")} ${index + 1}`} className={image === (activeDetailImage || getProductOnlyImage(activeProduct)) ? "active" : ""} key={image} onClick={() => setActiveDetailImage(image)} type="button">
                    <img src={image} alt="" loading="lazy" />
                  </button>
                ))}
              </div>
            </div>
            <div className="product-detail-copy">
              <p className="eyebrow">{t("catalog.selectedPiece")}</p>
              <h3>{getLocalizedName(activeProduct)}</h3>
              <p className="product-detail-subtitle">{getLocalizedType(activeProduct, activeGroup?.parent)} · {formatPrice(activeProduct)}</p>
              <div className="product-detail-actions product-detail-actions--primary">
                <button className="product-order-button" onClick={openOrder} type="button">{t("catalog.orderNow")} <span>→</span></button>
                <small>{t("catalog.orderHint")}</small>
              </div>
              <p>{formatDetailDescription(activeProduct, activeGroup, locale)}</p>
              <div className="product-detail-ritual"><span>{t("catalog.protect")}</span><span>{t("catalog.handmadeTag")}</span><span>{t("catalog.blessTag")}</span></div>
              <dl>
                <div><dt>{t("catalog.material")}</dt><dd>{getLocalizedMaterial(activeProduct)}</dd></div>
                <div><dt>{t("catalog.form")}</dt><dd>{getLocalizedType(activeProduct, activeGroup?.parent)}</dd></div>
                <div><dt>{t("catalog.price")}</dt><dd>{formatPrice(activeProduct)}</dd></div>
              </dl>
            </div>
          </article>

          {orderOpen && (
            <div className="product-order-modal" role="dialog" aria-modal="true" aria-label={t("order.details")}>
              <button className="product-order-backdrop" onClick={() => setOrderOpen(false)} type="button" />
              <header className="commerce-modal-topbar product-order-topbar">
                <div className="commerce-logo"><BrandMark compact /></div>
                <nav aria-label={t("order.nav")}><span>{t("nav.home", "Home")}</span><span>{t("nav.collection")}</span><span>{t("nav.custom")}</span><span>{t("nav.blessing")}</span></nav>
                <div className="commerce-icons" aria-hidden="true"><span>⌕</span><span>♡</span><span>{t("catalog.bag")}</span></div>
              </header>
              <section className="product-order-panel">
                <button className="product-order-close" onClick={() => setOrderOpen(false)} type="button">{t("nav.close")}</button>
                {orderSubmitted ? (
                  <div className="product-order-success">
                    <p className="eyebrow">{t("order.created")}</p>
                    <h3>{t("order.ready")}</h3>
                    <p>Order ID: <b>{orderSubmitted.id}</b></p>
                    <p>{orderSubmitted.productName} {t("order.saved")}</p>
                    <p className="product-order-success-note">{t("order.backendSaved", "We have received your order.")}</p>
                    <a className="product-order-button" href={orderSubmitted.mailtoUrl}>{t("order.sendEmail")} <span>→</span></a>
                    <button className="product-order-button" onClick={() => setOrderOpen(false)} type="button">{t("order.done")} <span>→</span></button>
                  </div>
                ) : (
                  <form className="product-order-form" onSubmit={submitOrder}>
                    <div className="product-order-heading"><p className="eyebrow">{t("order.checkout")}</p><h3>{t("order.confirm")}</h3><span>{getLocalizedName(activeProduct)} · {formatPrice(activeProduct)}</span></div>
                    <aside className="product-order-summary">
                      <p className="eyebrow">{t("order.summary")}</p>
                      <div className="product-order-summary-item"><img src={activeDetailImage || getProductOnlyImage(activeProduct)} alt={getLocalizedName(activeProduct)} /><div><h4>{getLocalizedName(activeProduct)}</h4><span>{getLocalizedType(activeProduct, activeGroup?.parent)}</span><b>{formatPrice(activeProduct)}</b></div></div>
                      <dl>
                        <div><dt>{t("order.quantity")}</dt><dd>{orderQuantity} {orderQuantity > 1 ? t("order.pieces") : t("order.piece")}</dd></div>
                        <div><dt>{t("order.subtotal")}</dt><dd>{orderSubtotal === null ? t("order.ask") : formatUsd(orderSubtotal)}</dd></div>
                        <div><dt>{t("order.service")}</dt><dd>{blessingServiceSelected ? `${t("order.selected")} · ${formatUsd(blessingServiceFee)}` : t("order.notSelected")}</dd></div>
                        <div><dt>{t("order.dispatch")}</dt><dd>{blessingServiceSelected ? t("order.afterBlessing") : t("order.businessDays")}</dd></div>
                        <div><dt>{t("order.delivery")}</dt><dd>{t("order.serviceConfirm")}</dd></div>
                      </dl>
                      <div className="product-order-total"><span>{t("order.total")}</span><b>{orderTotal === null ? t("order.ask") : formatUsd(orderTotal)}</b></div>
                    </aside>
                    <div className="product-order-grid">
                      <label><span>{t("order.recipient")}</span><input name="customerName" required placeholder={t("order.fullName")} /></label>
                      <label><span>{t("order.phone")}</span><input name="phone" required inputMode="tel" placeholder={t("order.phonePlaceholder")} /></label>
                      <label><span>{t("order.contact")}</span><input name="wechat" placeholder={t("order.contactPlaceholder")} /></label>
                      <label><span>{t("order.quantity")}</span><input name="quantity" type="number" min="1" value={orderQuantity} onChange={(event) => setOrderQuantity(Math.max(1, Number(event.target.value) || 1))} required /></label>
                      <label className="product-order-address"><span>{t("order.address")}</span><textarea name="address" required placeholder={t("order.addressPlaceholder")} /></label>
                      <label className="product-order-address"><span>{t("order.note")}</span><textarea name="note" placeholder={t("order.notePlaceholder")} /></label>
                    </div>
                    <label className="product-order-check"><input name="blessingService" type="checkbox" checked={blessingServiceSelected} onChange={(event) => updateBlessingService(event.target.checked)} /><span>{t("order.addService")}</span></label>
                    {orderError && <div className="product-order-error">{orderError}</div>}
                    <div className="product-order-footer"><p>{t("order.submitHint")}</p><button className="product-order-button" type="submit" disabled={orderSubmitting}>{orderSubmitting ? t("order.submitting", "Submitting...") : t("order.submit")} <span>→</span></button></div>
                    {blessingServiceNoticeOpen && (
                      <div className="blessing-service-confirm-modal" role="dialog" aria-modal="true" aria-label={t("service.modal.kicker")}>
                        <button className="blessing-service-confirm-backdrop" onClick={() => setBlessingServiceNoticeOpen(false)} type="button" />
                        <section className="blessing-service-confirm-card">
                          <button className="blessing-service-confirm-close" onClick={() => setBlessingServiceNoticeOpen(false)} type="button">{t("nav.close")}</button>
                          <p className="eyebrow">{t("service.modal.kicker")}</p>
                          <h4>{t("service.modal.title")}</h4>
                          <p>{t("service.modal.copy")}</p>
                          <ol>
                            <li><b>{t("service.modal.1")}</b><span>{t("service.modal.1.copy")}</span></li>
                            <li><b>{t("service.modal.2")}</b><span>{t("service.modal.2.copy")}</span></li>
                            <li><b>{t("service.modal.3")}</b><span>{t("service.modal.3.copy")}</span></li>
                            <li><b>{t("service.modal.4")}</b><span>{t("service.modal.4.copy")}</span></li>
                          </ol>
                          <div>
                            <button type="button" onClick={() => {
                              setBlessingServiceSelected(false);
                              setBlessingServiceNoticeOpen(false);
                            }}>{t("service.modal.remove")}</button>
                            <button className="product-order-button" type="button" onClick={() => setBlessingServiceNoticeOpen(false)}>{t("service.modal.confirm")} <span>→</span></button>
                          </div>
                        </section>
                      </div>
                    )}
                  </form>
                )}
              </section>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
