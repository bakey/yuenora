import { assetUrl, modelAssetUrl } from "@/lib/assets";

export type BeadItemType = "bead" | "spacer" | "charm" | "pendant";
export type BraceletCategory = "using" | "main" | "spacer" | "pendant" | "sets";
export type MainMaterialGroup =
  | "cinnabar"
  | "peachwood"
  | "obsidian"
  | "sandalwood"
  | "white-jade"
  | "green-jade"
  | "citrine"
  | "lapis"
  | "lacquer"
  | "cloisonne"
  | "wucai";
export type ThreadAxis = "free" | "tangent";

export type TaoBraceletVisualStyle = {
  base: string;
  highlight: string;
  shadow: string;
  pattern?: string;
  symbol?: string;
};

export type BeadItem = {
  id: string;
  name: string;
  nameEn: string;
  category: BraceletCategory;
  image: string;
  price: number;
  size?: string;
  meaning?: string;
  meaningEn?: string;
  type: BeadItemType;
  colorTheme?: string;
  materialGroup?: MainMaterialGroup;
  modelUrl?: string;
  threadAxis?: ThreadAxis;
  previewFace?: boolean;
  /**
   * Preview-only correction for models whose visible threading hole is not at
   * the rendered thumbnail center. Values are pixels in the unrotated preview
   * thumbnail coordinate space; positive x is right, positive y is down.
   */
  threadAnchor?: { x: number; y: number };
  visual: TaoBraceletVisualStyle;
};

export type BraceletPiece = {
  id: string;
  itemId: string;
  slotType: "main" | "spacer" | "charm";
  slotIndex?: number;
};

export const braceletCategories = [
  { id: "using", label: "正在使用", labelEn: "Using" },
  { id: "main", label: "主珠", labelEn: "Main Beads" },
  { id: "spacer", label: "隔珠", labelEn: "Spacers" },
  { id: "pendant", label: "吊坠", labelEn: "Pendants" },
  { id: "sets", label: "推荐组合", labelEn: "Sets" },
] as const satisfies ReadonlyArray<{ id: BraceletCategory; label: string; labelEn: string }>;

export const mainMaterialTabs = [
  { id: "white-jade", label: "白玉", labelEn: "White Jade" },
  { id: "green-jade", label: "青玉", labelEn: "Green Jade" },
  { id: "citrine", label: "黄水晶", labelEn: "Citrine" },
  { id: "lapis", label: "青金石", labelEn: "Lapis Lazuli" },
  { id: "cloisonne", label: "景泰蓝", labelEn: "Cloisonné" },
  { id: "wucai", label: "五彩瓷珠", labelEn: "Wucai Porcelain" },
  { id: "lacquer", label: "中国漆珠", labelEn: "Chinese Lacquer" },
  { id: "obsidian", label: "黑曜石", labelEn: "Obsidian" },
  { id: "cinnabar", label: "朱砂", labelEn: "Cinnabar" },
  { id: "peachwood", label: "桃木", labelEn: "Peach Wood" },
  { id: "sandalwood", label: "檀木", labelEn: "Sandalwood" },
] as const satisfies ReadonlyArray<{ id: MainMaterialGroup; label: string; labelEn: string }>;

const MODEL_ROOT = modelAssetUrl("/assets/tao-diy/models");
const TANGENT_THREADED_MODEL_IDS = new Set([
  "cinnabar-05",
  "cinnabar-08",
  "cloisonne-06",
  "cloisonne-07",
  "green-jade-04",
  "green-jade-05",
  "lapis-01",
  "lapis-02",
  "lapis-03",
  "lapis-04",
  "lapis-06",
  "lapis-08",
  "obsidian-03",
  "peachwood-03",
  "sandalwood-09",
  "wucai-04",
  "wucai-09",
  "wucai-10",
  "wucai-12",
  "wucai-13",
  "wucai-14",
  "wucai-15",
  "wucai-16",
  "wucai-17",
  "wucai-18",
  "wucai-19",
  "wucai-20",
  "wucai-21",
]);

const THREAD_ANCHOR_BY_ID = new Map<string, { x: number; y: number }>([
  ["green-jade-04", { x: -7, y: 1 }],
  ["green-jade-05", { x: -4, y: 0 }],
  ["wucai-14", { x: 10, y: 0 }],
]);

const FACE_PREVIEW_MODEL_IDS = new Set([
  "green-jade-04",
  "green-jade-05",
  "lapis-04",
  "lapis-06",
  "lapis-08",
  "wucai-10",
  "wucai-12",
  "wucai-13",
  "wucai-14",
  "wucai-15",
  "wucai-16",
  "wucai-17",
  "wucai-18",
  "wucai-19",
  "wucai-20",
  "wucai-21",
]);

const cinnabarVisual: TaoBraceletVisualStyle = {
  base: "#b90808",
  highlight: "#ff8170",
  shadow: "#4d0202",
  symbol: "朱",
};

const peachwoodVisual: TaoBraceletVisualStyle = {
  base: "#9b5424",
  highlight: "#f0b067",
  shadow: "#3c1a0a",
  symbol: "木",
};

const obsidianVisual: TaoBraceletVisualStyle = {
  base: "#080706",
  highlight: "#f0d687",
  shadow: "#010101",
  symbol: "玄",
};

const sandalwoodVisual: TaoBraceletVisualStyle = {
  base: "#5b341d",
  highlight: "#c58a4a",
  shadow: "#1f1008",
  symbol: "檀",
};

const whiteJadeVisual: TaoBraceletVisualStyle = {
  base: "#e9e2cf",
  highlight: "#fff8e8",
  shadow: "#9f967f",
  symbol: "玉",
};

const greenJadeVisual: TaoBraceletVisualStyle = {
  base: "#6f8f78",
  highlight: "#c8dfc9",
  shadow: "#304739",
  symbol: "青",
};

const citrineVisual: TaoBraceletVisualStyle = {
  base: "#d7a436",
  highlight: "#fff0a8",
  shadow: "#6f4311",
  symbol: "晶",
};

const lapisVisual: TaoBraceletVisualStyle = {
  base: "#173c8f",
  highlight: "#78a9ff",
  shadow: "#071333",
  symbol: "青",
};

const lacquerVisual: TaoBraceletVisualStyle = {
  base: "#6b120d",
  highlight: "#f0b36a",
  shadow: "#210605",
  symbol: "漆",
};

const cloisonneVisual: TaoBraceletVisualStyle = {
  base: "#155f89",
  highlight: "#f3d78b",
  shadow: "#08233b",
  symbol: "蓝",
};

const wucaiVisual: TaoBraceletVisualStyle = {
  base: "#f0dfb7",
  highlight: "#ef6b3f",
  shadow: "#224b68",
  symbol: "彩",
};

const spacerVisual: TaoBraceletVisualStyle = {
  base: "#c99b42",
  highlight: "#fff0b0",
  shadow: "#6d3d11",
  symbol: "",
};

const accessoryVisual: TaoBraceletVisualStyle = {
  base: "#c89a3a",
  highlight: "#fff2b8",
  shadow: "#5d3510",
  symbol: "",
};

function numberedModel(prefix: string, index: number) {
  return `${MODEL_ROOT}/${prefix}-${String(index).padStart(2, "0")}.glb`;
}

function makeMainBeads(
  materialGroup: MainMaterialGroup,
  prefix:
    | "cinnabar"
    | "peachwood"
    | "obsidian"
    | "sandalwood"
    | "white-jade"
    | "green-jade"
    | "citrine"
    | "lapis"
    | "lacquer"
    | "cloisonne"
    | "wucai",
  names: Array<[string, string]>,
  meaning: string,
  meaningEn: string,
  visual: TaoBraceletVisualStyle,
  price: number,
): BeadItem[] {
  return names.map(([name, nameEn], index) => {
    const beadId = `${prefix}-${String(index + 1).padStart(2, "0")}`;

    return {
      id: beadId,
      name,
      nameEn,
      category: "main",
      image: assetUrl(`/assets/tao-diy/thumbs/${prefix}-${String(index + 1).padStart(2, "0")}.webp`),
      price,
      size: "10mm · GLB model",
      meaning,
      meaningEn,
      type: "bead",
      colorTheme: prefix,
      materialGroup,
      modelUrl: numberedModel(prefix, index + 1),
      threadAxis: TANGENT_THREADED_MODEL_IDS.has(beadId) ? "tangent" : "free",
      previewFace: FACE_PREVIEW_MODEL_IDS.has(beadId),
      threadAnchor: THREAD_ANCHOR_BY_ID.get(beadId),
      visual,
    };
  });
}

const cinnabarBeads = makeMainBeads(
  "cinnabar",
  "cinnabar",
  [
    ["赤曜护心珠", "Crimson Heart-Guard Bead"],
    ["朱印玄纹珠", "Vermilion Seal Pattern Bead"],
    ["丹砂云篆珠", "Cinnabar Cloud-Script Bead"],
    ["赤麟护符珠", "Crimson Kirin Talisman Bead"],
    ["朱轮定心珠", "Vermilion Wheel of Stillness"],
    ["丹霞福纹珠", "Rosy Cinnabar Blessing Bead"],
    ["赤符明心珠", "Crimson Talisman Clarity Bead"],
    ["朱砂镇念珠", "Cinnabar Grounding Bead"],
    ["玄赤护身珠", "Dark-Red Guardian Bead"],
    ["赤金符华珠", "Crimson-Gold Ritual Bead"],
    ["丹心如意珠", "Cinnabar Wish-Fulfillment Bead"],
  ],
  "朱砂在道教视觉中常与符箓、护持、正念与仪式色相关；这里作为文化寓意与审美符号呈现。",
  "In Daoist visual culture, cinnabar is associated with talismans, protection, mindful intention, and ritual color. Here it is offered as a cultural symbol and aesthetic accent.",
  cinnabarVisual,
  128,
);

const peachwoodBeads = makeMainBeads(
  "peachwood",
  "peachwood",
  [
    ["桃符清安珠", "Peachwood Peace Talisman Bead"],
    ["桃木扶正珠", "Peachwood Upright Energy Bead"],
    ["灵桃护念珠", "Spiritual Peachwood Intention Bead"],
    ["桃枝纳福珠", "Peach Branch Blessing Bead"],
    ["木德静心珠", "Wood-Virtue Stillness Bead"],
    ["桃印守宅珠", "Peachwood Household Guardian Bead"],
  ],
  "桃木常被视作民俗护持与清安之木，适合表达自然、温润、守护与日常佩戴感。",
  "Peachwood has long been seen in folk tradition as a wood of protection and quiet peace. Its warm, natural tone suits daily wear and gentle guardianship.",
  peachwoodVisual,
  96,
);

const sandalwoodBeads = makeMainBeads(
  "sandalwood",
  "sandalwood",
  [
    ["玄檀定心珠", "Dark Sandalwood Stillness Bead"],
    ["沉檀守念珠", "Sandalwood Mind-Guard Bead"],
    ["檀香清安珠", "Sandalwood Peace Bead"],
    ["玄木归真珠", "Darkwood Return-to-Truth Bead"],
    ["檀纹护持珠", "Sandalwood Protection Grain Bead"],
    ["静檀养神珠", "Quiet Sandalwood Spirit Bead"],
    ["檀影福念珠", "Sandalwood Blessing Intention Bead"],
    ["古檀承愿珠", "Ancient Sandalwood Vow Bead"],
    ["檀心澄明珠", "Sandalwood Clarity Heart Bead"],
    ["沉香玄护珠", "Deep Sandalwood Guardian Bead"],
    ["檀木安神珠", "Sandalwood Calm-Mind Bead"],
    ["玄檀净意珠", "Dark Sandalwood Pure Intention Bead"],
    ["檀韵守静珠", "Sandalwood Quiet-Rhythm Bead"],
    ["檀印清修珠", "Sandalwood Cultivation Seal Bead"],
    ["古木镇心珠", "Ancient Wood Grounding Bead"],
    ["檀光护念珠", "Sandalwood Intention-Guard Bead"],
    ["玄檀福佑珠", "Dark Sandalwood Blessing Bead"],
    ["檀香归元珠", "Sandalwood Return-to-Origin Bead"],
  ],
  "檀木香气沉稳，在东方修持语境中常被视作安神、清静、守念与日常佩戴的温润材质。这里作为文化寓意与审美符号呈现。",
  "Sandalwood carries a calm, grounding fragrance. In Eastern practice it is valued for quieting the mind, supporting intention, and everyday mindful wear.",
  sandalwoodVisual,
  138,
);

const whiteJadeBeads = makeMainBeads(
  "white-jade",
  "white-jade",
  [
    ["白玉清心珠", "White Jade Clear-Heart Bead"],
    ["月华守念珠", "Moonlit Jade Intention Bead"],
    ["玉衡安定珠", "Jade Balance Stillness Bead"],
    ["素玉净意珠", "Pure Jade Intention Bead"],
    ["云白护持珠", "Cloud-White Protection Bead"],
    ["玉露澄明珠", "Jade Dew Clarity Bead"],
    ["白璧归真珠", "White Bi Return-to-Truth Bead"],
    ["霜玉福念珠", "Frost Jade Blessing Bead"],
    ["玉光清安珠", "Jade Light Peace Bead"],
    ["素心圆满珠", "Pure-Heart Completion Bead"],
  ],
  "白玉质感温润、清透，在东方审美中常被用来表达清净、平衡、涵养与随身守持。这里作为文化寓意与材质美感呈现。",
  "White jade is smooth, clear, and quietly luminous. In Eastern aesthetics it expresses purity, balance, cultivation, and gentle daily protection.",
  whiteJadeVisual,
  148,
);

const greenJadeBeads = makeMainBeads(
  "green-jade",
  "green-jade",
  [
    ["青玉守衡珠", "Green Jade Balance Bead"],
    ["苍玉清安珠", "Verdant Jade Peace Bead"],
    ["青岚护念珠", "Mist-Green Intention Bead"],
    ["玉泽静心珠", "Jade Grace Stillness Bead"],
    ["青璧归真珠", "Green Bi Return-to-Truth Bead"],
    ["松青福念珠", "Pine-Green Blessing Bead"],
    ["玉衡护持珠", "Jade Balance Guardian Bead"],
    ["青光圆融珠", "Green Jade Harmony Bead"],
  ],
  "青玉色泽沉静，介于山色与玉色之间，适合表达平衡、涵养、清安、守持与东方温润气质。这里作为文化寓意与材质美感呈现。",
  "Green jade holds a quiet color between mountain and jade tones. It suits expressions of balance, cultivation, calm protection, and Eastern warmth.",
  greenJadeVisual,
  148,
);

const citrineBeads = makeMainBeads(
  "citrine",
  "citrine",
  [
    ["黄晶纳福珠", "Citrine Blessing Bead"],
    ["金曜丰盛珠", "Golden Abundance Bead"],
    ["明财富念珠", "Bright Fortune Intention Bead"],
    ["日华进益珠", "Sunlit Prosperity Bead"],
  ],
  "黄水晶色泽明亮温润，在当代东方饰品语境中常被用来表达丰盛、明朗、自信、事业机缘与积极心念。这里作为文化寓意与材质美感呈现。",
  "Citrine is bright and warm in color. In contemporary Eastern jewelry it is often used to express abundance, clarity, confidence, opportunity, and positive intention.",
  citrineVisual,
  158,
);

const lapisBeads = makeMainBeads(
  "lapis",
  "lapis",
  [
    ["青金玄穹珠", "Lapis Celestial Vault Bead"],
    ["星曜守念珠", "Star-Gold Intention Bead"],
    ["青蓝定心珠", "Deep Blue Stillness Bead"],
    ["金砂明识珠", "Gold-Fleck Clarity Bead"],
    ["玄蓝护持珠", "Dark Blue Guardian Bead"],
    ["天青启智珠", "Heaven-Blue Wisdom Bead"],
    ["青金归真珠", "Lapis Return-to-Truth Bead"],
    ["星河清安珠", "Milky-Way Peace Bead"],
  ],
  "青金石蓝色深沉，常带金色矿点，适合表达智慧、沉静、洞察、守念与星空般的精神秩序。这里作为文化寓意与材质美感呈现。",
  "Lapis lazuli is deep blue, often flecked with gold. It suits expressions of wisdom, stillness, insight, intention, and a star-like sense of inner order.",
  lapisVisual,
  168,
);

const lacquerBeads = makeMainBeads(
  "lacquer",
  "lacquer",
  [
    ["玄漆护纹珠", "Lacquer Guardian Pattern Bead"],
    ["赤漆承福珠", "Red Lacquer Blessing Bead"],
    ["金纹漆艺珠", "Gilded Lacquer Craft Bead"],
  ],
  "中国漆珠以漆艺肌理、深色光泽和手工层次见长，适合表达器物感、守护纹样、礼序与东方工艺美学。这里作为文化寓意与材质美感呈现。",
  "Chinese lacquer beads are valued for their layered texture, deep sheen, and hand-finished depth. They express object presence, protective pattern, ritual order, and Eastern craft aesthetics.",
  lacquerVisual,
  188,
);

const cloisonneBeads = makeMainBeads(
  "cloisonne",
  "cloisonne",
  [
    ["景蓝云纹珠", "Cloisonné Cloud Pattern Bead"],
    ["珐蓝护念珠", "Blue Enamel Intention Bead"],
    ["金丝景泰珠", "Gold-Wire Cloisonné Bead"],
    ["天青承福珠", "Sky-Blue Blessing Bead"],
    ["景泰花纹珠", "Cloisonné Floral Bead"],
    ["蓝釉守衡珠", "Blue Glaze Balance Bead"],
    ["金线圆融珠", "Gold-Line Harmony Bead"],
    ["宫蓝清安珠", "Imperial Blue Peace Bead"],
    ["珐彩明心珠", "Enamel Clarity Bead"],
    ["景蓝归真珠", "Cloisonné Return-to-Truth Bead"],
    ["瑞彩护持珠", "Auspicious Enamel Guardian Bead"],
  ],
  "景泰蓝以金属胎、掐丝与釉彩层次形成华丽而克制的东方器物感，适合表达秩序、华彩、守持、礼仪与宫廷工艺美学。这里作为文化寓意与材质美感呈现。",
  "Cloisonné builds ornate yet restrained Eastern objects through metal bodies, wire partitions, and enamel layers. It expresses order, brilliance, guardianship, ceremony, and imperial craft aesthetics.",
  cloisonneVisual,
  208,
);

const wucaiBeads = makeMainBeads(
  "wucai",
  "wucai",
  [
    ["五彩瑞云珠", "Wucai Auspicious Cloud Bead"],
    ["彩瓷承福珠", "Porcelain Blessing Bead"],
    ["朱彩护念珠", "Vermilion Wucai Intention Bead"],
    ["青花映心珠", "Blue-White Reflection Bead"],
    ["五色圆融珠", "Five-Color Harmony Bead"],
    ["彩釉清安珠", "Glazed Peace Bead"],
    ["瑞彩明心珠", "Auspicious Clarity Bead"],
    ["瓷纹守衡珠", "Porcelain Pattern Balance Bead"],
    ["五彩归真珠", "Wucai Return-to-Truth Bead"],
    ["锦彩福念珠", "Brocade-Color Blessing Bead"],
    ["花釉护持珠", "Floral Glaze Guardian Bead"],
    ["彩云定心珠", "Color-Cloud Stillness Bead"],
    ["宫彩承愿珠", "Imperial Color Vow Bead"],
    ["瓷光清心珠", "Porcelain Light Clear-Heart Bead"],
    ["五彩安和珠", "Five-Color Peaceful Harmony Bead"],
    ["瑞釉守念珠", "Auspicious Glaze Intention Bead"],
    ["彩瓷圆满珠", "Wucai Completion Bead"],
    ["云纹福泽珠", "Cloud Pattern Blessing Bead"],
    ["花彩静修珠", "Floral Wucai Cultivation Bead"],
    ["锦釉护身珠", "Brocade Glaze Protection Bead"],
    ["五色明德珠", "Five-Color Bright Virtue Bead"],
    ["彩瓷归元珠", "Wucai Return-to-Origin Bead"],
  ],
  "五彩瓷珠以釉彩、瓷质和多色纹样形成明快而有秩序的东方器物感，适合表达圆融、福泽、喜乐、平衡与传统工艺审美。这里作为文化寓意与材质美感呈现。",
  "Wucai porcelain beads combine glaze, porcelain body, and multicolor patterns into lively yet ordered Eastern objects. They express harmony, blessing, joy, balance, and traditional craft beauty.",
  wucaiVisual,
  178,
);

const obsidianBeads = makeMainBeads(
  "obsidian",
  "obsidian",
  [
    ["玄曜守界珠", "Obsidian Boundary Bead"],
    ["黑曜定境珠", "Black Obsidian Still-Realm Bead"],
    ["玄石护念珠", "Dark Stone Intention Guard"],
    ["夜衡守心珠", "Night Balance Bead"],
    ["墨曜归真珠", "Ink-Obsidian Return Bead"],
    ["玄盾护身珠", "Obsidian Shield Bead"],
    ["黑玉静界珠", "Black Jade Quiet Boundary Bead"],
  ],
  "黑曜石的黑色、锐面和深沉质感，适合表达边界、收束、静定和内观。",
  "Obsidian's black color, sharp facets, and deep texture suit expressions of boundaries, focus, stillness, and inward reflection.",
  obsidianVisual,
  118,
);

const spacerBeads: BeadItem[] = [
  ["鎏金平安隔珠", "Gilded Peace Spacer"],
  ["玉环节律隔珠", "Jade Rhythm Spacer"],
  ["金纹守序隔珠", "Gold Pattern Order Spacer"],
  ["古金云纹隔珠", "Aged-Gold Cloud Spacer"],
  ["素金夹片隔珠", "Plain Gold Disc Spacer"],
  ["莲纹鎏金隔珠", "Lotus Gilded Spacer"],
  ["圆光护念隔珠", "Round-Light Intention Spacer"],
  ["玉边承福隔珠", "Jade-Edge Blessing Spacer"],
  ["金环清序隔珠", "Gold Ring Order Spacer"],
  ["古法素环隔珠", "Traditional Plain Ring Spacer"],
  ["中空金环隔珠", "Openwork Gold Ring Spacer"],
  ["瑞纹夹片隔珠", "Auspicious Pattern Spacer"],
  ["圆满金面隔珠", "Completion Gold-Face Spacer"],
  ["青玉平衡隔珠", "Green Jade Balance Spacer"],
].map(([name, nameEn], index) => {
  const itemIndex = index + 1;
  const id = `spacer-${String(itemIndex).padStart(2, "0")}`;

  return {
    id,
    name,
    nameEn,
    category: "spacer",
    image: assetUrl(`/assets/tao-diy/thumbs/${id}.webp`),
    price: 48,
    size: "Spacer · flat-threaded",
    meaning: "隔珠用于贴合两颗主珠之间，形成节奏、留白和材质层次；短径穿线，正面朝外展示纹样与工艺。",
    meaningEn: "Spacers sit between main beads to create rhythm, breathing space, and material layering. They are short-threaded with the face turned outward to show pattern and craft.",
    type: "spacer",
    colorTheme: "gold",
    materialGroup: undefined,
    modelUrl: numberedModel("spacer", itemIndex),
    previewFace: true,
    visual: spacerVisual,
  } satisfies BeadItem;
});

const aiAccessoryNames: Array<[string, string]> = [
  ["松石云纹配件", "Turquoise Cloud Accessory"],
  ["松石瑞纹配件", "Turquoise Auspicious Accessory"],
  ["蓝雪人吊坠", "Blue Snowman Pendant"],
  ["四叶福牌", "Clover Blessing Charm"],
  ["黑檀圆珠配件", "Ebony Bead Accessory"],
  ["黑檀护念配件", "Ebony Intention Accessory"],
  ["黑檀莲纹配件", "Ebony Lotus Accessory"],
  ["花心吊坠", "Floral Heart Pendant"],
  ["纳福吊坠", "Fortune Charm Pendant"],
  ["金鱼纳福配件", "Fortune Fish Charm"],
  ["福心吊坠", "Fortune Heart Charm"],
  ["福运吊坠", "Fortune Pendant"],
  ["金红中国结配件", "Gold Red Knot Accessory"],
  ["金象护福配件", "Gold Elephant Charm"],
  ["金云吊坠", "Golden Cloud Pendant"],
  ["金蛋福匣吊坠", "Golden Egg Locket"],
  ["金彩缎带配件", "Golden Enamel Ribbon"],
  ["镂金花球配件", "Golden Filigree Orb"],
  ["金袋纳财吊坠", "Golden Money Bag Pendant"],
  ["金环圆珠配件", "Golden Orb Ring Charm"],
  ["金寿字吊坠", "Golden Shou Pendant"],
  ["青釉吊坠", "Green Enamel Pendant"],
  ["青釉护念吊坠", "Green Enamel Intention Pendant"],
  ["金顶垂坠配件", "Hanging Dome Pendant"],
  ["盘结金绳配件", "Interwoven Gold Knot"],
  ["长寿纹吊坠", "Longevity Symbol Pendant"],
  ["爱心护念吊坠", "Love Pendant"],
  ["华丽镂金配件", "Ornate Gold Filigree"],
  ["平安吊坠", "Peace Pendant"],
  ["青海波吊坠", "Seigaiha Wave Pendant"],
  ["寿字金牌", "Shou Longevity Pendant"],
  ["富贵纹吊坠", "Wealth Prosperity Pendant"],
  ["白玉环吊坠", "White Jade Donut Pendant"],
  ["黑檀梅花配件", "Ebony Plum Blossom Accessory"],
  ["招财金符吊坠", "Fortune Gold Talisman"],
];

const aiAccessoryItems: BeadItem[] = aiAccessoryNames.map(([name, nameEn], index) => {
  const itemIndex = index + 1;
  const id = `accessory-${String(itemIndex).padStart(2, "0")}`;

  return {
    id,
    name,
    nameEn,
    category: "pendant",
    image: assetUrl(`/assets/tao-diy/thumbs/${id}.webp`),
    price: 168,
    size: "Accessory · outside-hanging",
    meaning:
      "配件悬挂在手串外侧，用作视觉焦点、寓意补充与层次点缀；它不按主珠占位，而是沿圆环外侧自然垂挂。",
    meaningEn: "Accessories hang on the outer side of the bracelet as visual accents, meaning complements, and layered details. They do not occupy main-bead slots; instead they drape naturally along the outer ring.",
    type: "pendant",
    colorTheme: "gold",
    materialGroup: undefined,
    modelUrl: numberedModel("accessory", itemIndex),
    previewFace: true,
    visual: accessoryVisual,
  } satisfies BeadItem;
});

export const beadItems: BeadItem[] = [
  ...cinnabarBeads,
  ...peachwoodBeads,
  ...sandalwoodBeads,
  ...whiteJadeBeads,
  ...greenJadeBeads,
  ...citrineBeads,
  ...lapisBeads,
  ...lacquerBeads,
  ...cloisonneBeads,
  ...wucaiBeads,
  ...obsidianBeads,
  ...spacerBeads,
  ...aiAccessoryItems,
].filter((item) => item.id !== "wucai-07");

export const starterBraceletPieces: BraceletPiece[] = [];

export function getBeadItem(itemId: string) {
  return beadItems.find((item) => item.id === itemId);
}

export function getBeadUnitPriceRange(_item: BeadItem) {
  return { min: 10, max: 10 };
}

export function formatBeadUnitPrice(item: BeadItem) {
  const range = getBeadUnitPriceRange(item);
  return range.min === range.max ? `USD ${range.min}` : `USD ${range.min}-${range.max}`;
  return `${range.min}-${range.max} 美元`;
}

export function getBraceletEstimateRange(pieces: BraceletPiece[]) {
  const count = pieces.length;
  return { min: count * 10, max: count * 10 };
}

export function formatBraceletEstimate(pieces: BraceletPiece[]) {
  if (!pieces.length) return "USD 0";
  return `Approx. USD ${pieces.length * 10}`;
  if (!pieces.length) return "0 美元";
  return `约 ${pieces.length * 10} 美元`;
}