import { modelAssetUrl } from "../lib/assets";

export type TaoBeadModel = {
  id: string;
  materialId: string;
  modelUrl: string;
  sourceFile: string;
  nameCn: string;
  nameEn: string;
  visualNote: string;
  intention: string;
};

export type TaoMaterialCategory = {
  id: string;
  nameCn: string;
  nameEn: string;
  tone: string;
  seal: string;
  summary: string;
  taoMeaning: string;
  symbolicKeywords: string[];
  usage: string;
  pairing: string[];
  beads: TaoBeadModel[];
};

const cinnabarNames = [
  ["赤曜护心珠", "Crimson Heart-Guard Bead", "圆面浮雕厚重，中心纹样如符印收束。", "适合作为手串主珠，表达安定、清明与守护之意。"],
  ["朱印玄纹珠", "Vermilion Seal Pattern Bead", "纹理层层外展，像一枚被时间磨亮的朱色印章。", "适合放在串珠中心，作为个人愿心的视觉焦点。"],
  ["丹砂云篆珠", "Cinnabar Cloud-Script Bead", "浮雕线条有云篆感，红色饱满而不轻浮。", "象征正气、清安与传统符箓文化中的仪式色。"],
  ["赤麟护符珠", "Crimson Kirin Talisman Bead", "外圈纹路繁复，有瑞兽甲片般的层次。", "适合与黑曜石搭配，形成红黑守护感。"],
  ["朱轮定心珠", "Vermilion Wheel of Stillness", "正面轮廓如法轮，视觉中心稳定。", "适合作为冥想、持念、日常提醒的文化配件。"],
  ["丹霞福纹珠", "Rosy Cinnabar Blessing Bead", "红色层次像山间丹霞，纹饰更柔和。", "表达福气、平安与温润的祝福感。"],
  ["赤符明心珠", "Crimson Talisman Clarity Bead", "纹样更紧凑，适合做简洁但有力量的主珠。", "象征清醒、专注与不被杂念牵动。"],
  ["朱砂镇念珠", "Cinnabar Grounding Bead", "体量饱满，纹理沉稳，适合偏男性化搭配。", "表达稳住心念、收束气场的象征意义。"],
  ["玄赤护身珠", "Dark-Red Guardian Bead", "红色更深，浮雕阴影强，视觉气质偏沉稳。", "可作为护身主题手串的主视觉。"],
  ["赤金符华珠", "Crimson-Gold Ritual Bead", "纹理密集，有金线镂刻般的华丽感。", "适合高端礼赠或祝福仪式套装。"],
  ["丹心如意珠", "Cinnabar Wish-Fulfillment Bead", "造型圆融，红色醒目但仍有古意。", "表达一念清安、随身有愿的文化寓意。"],
];

const peachwoodNames = [
  ["桃符清安珠", "Peachwood Peace Talisman Bead", "木质温润，适合作为日常佩戴的轻主珠。", "象征清正、安居与传统桃符文化中的守护意象。"],
  ["桃木扶正珠", "Peachwood Upright Energy Bead", "木纹更有力量，适合与朱砂形成红木搭配。", "表达扶正、安定与回到内在秩序。"],
  ["灵桃护念珠", "Spiritual Peachwood Intention Bead", "形态朴素，强调木质本身的天然感。", "适合做低调的愿心珠。"],
  ["桃枝纳福珠", "Peach Branch Blessing Bead", "整体圆润，有民俗祝福器物的亲和感。", "象征纳福、家宅安宁与随身清安。"],
  ["木德静心珠", "Wood-Virtue Stillness Bead", "偏沉稳的木色，适合安静东方风。", "对应五行木意，表达生发、温和与修身。"],
  ["桃印守宅珠", "Peachwood Household Guardian Bead", "适合作为成组手串中的节奏珠。", "表达守护居所、安顿日常的文化寓意。"],
];

const obsidianNames = [
  ["玄曜守界珠", "Obsidian Boundary Bead", "黑色深沉，适合与朱砂形成强烈对比。", "象征边界、沉静与内在防护感。"],
  ["黑曜定境珠", "Black Obsidian Still-Realm Bead", "圆面克制，视觉重心稳定。", "适合表达安神定心、隔绝喧嚣的象征意义。"],
  ["玄石护念珠", "Dark Stone Intention Guard", "石质感强，适合偏极简的手串组合。", "作为愿心的沉稳底色。"],
  ["夜衡守心珠", "Night Balance Bead", "黑色与高光形成平衡，气质冷静。", "象征平衡、节制与清醒判断。"],
  ["墨曜归真珠", "Ink-Obsidian Return Bead", "整体如墨，适合艺术馆气质搭配。", "表达归真、收敛、内观。"],
  ["玄盾护身珠", "Obsidian Shield Bead", "形象更具护盾感，适合守护主题。", "表达象征性的保护、边界和稳定。"],
  ["黑玉静界珠", "Black Jade Quiet Boundary Bead", "质感接近黑玉，适合高端克制风。", "象征静界、沉稳与不争。"],
];

function makeBeads(materialId: string, prefix: string, names: string[][]): TaoBeadModel[] {
  return names.map(([nameCn, nameEn, visualNote, intention], index) => ({
    id: `${materialId}-${String(index + 1).padStart(2, "0")}`,
    materialId,
    modelUrl: modelAssetUrl(`/assets/tao-diy/models/${prefix}-${String(index + 1).padStart(2, "0")}.glb`),
    sourceFile: `${index + 1}`,
    nameCn,
    nameEn,
    visualNote,
    intention,
  }));
}

export const taoMaterialCategories: TaoMaterialCategory[] = [
  {
    id: "cinnabar",
    nameCn: "朱砂",
    nameEn: "Cinnabar",
    tone: "CINNABAR · TALISMAN RED",
    seal: "朱砂",
    summary: "取朱砂之赤，借符箓之意，作随身清安之记。",
    taoMeaning:
      "朱砂红在道教符箓、印记与传统祈福视觉中常作为醒目的仪式色，象征正气、清明、护持与一念归正。这里将它作为文化寓意与审美符号，不承诺任何现实效果。",
    symbolicKeywords: ["清明", "守护", "正气", "愿心", "仪式色"],
    usage: "适合作为主珠、中心珠、项链焦点珠，也适合搭配红绳、黑曜石与八卦配件。",
    pairing: ["黑曜石", "桃木", "八卦牌", "深红绳"],
    beads: makeBeads("cinnabar", "cinnabar", cinnabarNames),
  },
  {
    id: "peachwood",
    nameCn: "桃木",
    nameEn: "Peach Wood",
    tone: "PEACH WOOD · FOLK TAOIST TOKEN",
    seal: "桃木",
    summary: "木色温润，桃符有护，适合表达安居与清正。",
    taoMeaning:
      "桃木在中国民俗与道教文化语境中常与桃符、门护、清正之气相关。它的气质比朱砂更温和，适合表达安居、净心、日常守护和家宅平安的象征意义。",
    symbolicKeywords: ["安居", "清正", "温润", "家宅", "守念"],
    usage: "适合作为日常佩戴主材，可与朱砂形成红木组合，也可与檀木、菩提、素绳搭配。",
    pairing: ["朱砂", "菩提", "素绳", "葫芦配件"],
    beads: makeBeads("peachwood", "peachwood", peachwoodNames),
  },
  {
    id: "obsidian",
    nameCn: "黑曜石",
    nameEn: "Obsidian",
    tone: "OBSIDIAN · QUIET PROTECTION",
    seal: "黑曜",
    summary: "玄黑收敛，沉静有界，适合表达守护与定心。",
    taoMeaning:
      "黑曜石的黑色、镜面和深沉质感，适合在道教文化风格中表达边界、收束、静定和内观。它不是神秘承诺，而是一种关于保护感与内在秩序的视觉符号。",
    symbolicKeywords: ["边界", "沉静", "内观", "守护", "不争"],
    usage: "适合作为底色珠、男性向手串、红黑守护主题，也适合与朱砂形成强对比。",
    pairing: ["朱砂", "铜铃", "黑绳", "太极牌"],
    beads: makeBeads("obsidian", "obsidian", obsidianNames),
  },
];

export const defaultTaoMaterial = taoMaterialCategories[0];
export const defaultTaoBead = defaultTaoMaterial.beads[0];

