import { assetUrl } from "@/lib/assets";
import { newTaoProductCatalog } from "./taoNewProductCatalog";

export type TaoCatalogParent = "bracelet" | "necklace" | "ring" | "earring" | "incense";

export type TaoCatalogItem = {
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
};

export type TaoCatalogGroup = {
  id: string;
  parent: TaoCatalogParent;
  title: string;
  subtitle: string;
  description: string;
  items: TaoCatalogItem[];
};

export const taoProductCatalog: TaoCatalogGroup[] = [...newTaoProductCatalog,
  {
    "id": "bracelet-red-agate",
    "parent": "bracelet",
    "title": "南红玛瑙",
    "subtitle": "Warm Red Agate",
    "description": "以红色系与温润纹理为主，适合表达守护、热忱与好运。",
    "items": [
      {
        "id": "product-002-2",
        "code": "002",
        "name": "一念清圆",
        "sourceName": "普陀山南红玛瑙手串女水晶玛瑙玉髓翡翠宝玉石单散珠蜜蜡双圈手链",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "南红玛瑙清修圆珠以南红、玛瑙、水晶、翡翠、蜜蜡、珍珠、玉为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门；玛瑙纹理沉稳，寓意安定心念、凝聚内在力量；水晶通透澄明，寓意净化、清醒与能量…",
        "details": [
          "南红玛瑙清修圆珠以南红、玛瑙、水晶、翡翠、蜜蜡、珍珠、玉为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门",
          "玛瑙纹理沉稳，寓意安定心念、凝聚内在力量",
          "水晶通透澄明，寓意净化、清醒与能量流动",
          "翡翠清润有生机，寓意福气、贵气与长久安宁"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p002-002/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p002-002/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p002-002/detail_01.webp")
        ],
        "tags": [
          "南红、玛瑙、水晶、翡翠、蜜蜡、珍珠、玉",
          "南红玛瑙",
          "手链手串"
        ],
        "price": 126.0,
        "currency": "USD"
      },
      {
        "id": "product-004-3",
        "code": "004",
        "name": "月照知意",
        "sourceName": "普陀山南红手串保山满肉招财手链女款转运珠小众双圈马年生日礼物",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "南红玛瑙清修圆珠以南红、玛瑙、翡翠、蜜蜡、珍珠为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门；玛瑙纹理沉稳，寓意安定心念、凝聚内在力量；翡翠清润有生机，寓意福气、贵气与长久安宁；蜜…",
        "details": [
          "南红玛瑙清修圆珠以南红、玛瑙、翡翠、蜜蜡、珍珠为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门",
          "玛瑙纹理沉稳，寓意安定心念、凝聚内在力量",
          "翡翠清润有生机，寓意福气、贵气与长久安宁",
          "蜜蜡温暖明亮，寓意丰盛、亲和与岁月沉淀"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p004-003/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p004-003/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p004-003/detail_01.webp")
        ],
        "tags": [
          "南红、玛瑙、翡翠、蜜蜡、珍珠",
          "南红玛瑙",
          "手链手串"
        ],
        "price": 133.0,
        "currency": "USD"
      },
      {
        "id": "product-011-4",
        "code": "011",
        "name": "静山安然",
        "sourceName": "普陀山冰飘南红手串女双圈天然红玛瑙手链马年本命年招财新年礼物",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "南红玛瑙清修圆珠以南红、玛瑙、水晶为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门；玛瑙纹理沉稳，寓意安定心念、凝聚内在力量；水晶通透澄明，寓意净化、清醒与能量流动。圆珠成串，象征周…",
        "details": [
          "南红玛瑙清修圆珠以南红、玛瑙、水晶为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门",
          "玛瑙纹理沉稳，寓意安定心念、凝聚内在力量",
          "水晶通透澄明，寓意净化、清醒与能量流动。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p011-004/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p011-004/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p011-004/detail_01.webp")
        ],
        "tags": [
          "南红、玛瑙、水晶",
          "南红玛瑙",
          "手链手串"
        ],
        "price": 142.0,
        "currency": "USD"
      },
      {
        "id": "product-012-5",
        "code": "012",
        "name": "星河云起",
        "sourceName": "普陀山黑曜石手链叠戴高级感水晶手串招财运天然黑色玛瑙补水女款",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "玛瑙水晶清修圆珠以玛瑙、水晶为核心元素。玛瑙纹理沉稳，寓意安定心念、凝聚内在力量；水晶通透澄明，寓意净化、清醒与能量流动。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方…",
        "details": [
          "玛瑙水晶清修圆珠以玛瑙、水晶为核心元素。玛瑙纹理沉稳，寓意安定心念、凝聚内在力量",
          "水晶通透澄明，寓意净化、清醒与能量流动。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p012-005/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p012-005/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p012-005/detail_01.webp")
        ],
        "tags": [
          "玛瑙、水晶",
          "南红玛瑙",
          "手链手串"
        ],
        "price": 130.0,
        "currency": "USD"
      },
      {
        "id": "product-018-6",
        "code": "018",
        "name": "福泽护念",
        "sourceName": "普陀山本命年南红手串女红色玛瑙蜜蜡招财转运珠轻奢手链新年礼物",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "南红玛瑙清修圆珠以南红、玛瑙、和田玉、蜜蜡、玉为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门；玛瑙纹理沉稳，寓意安定心念、凝聚内在力量；和田玉温润含蓄，寓意仁和、圆满与福泽绵长；蜜…",
        "details": [
          "南红玛瑙清修圆珠以南红、玛瑙、和田玉、蜜蜡、玉为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门",
          "玛瑙纹理沉稳，寓意安定心念、凝聚内在力量",
          "和田玉温润含蓄，寓意仁和、圆满与福泽绵长",
          "蜜蜡温暖明亮，寓意丰盛、亲和与岁月沉淀"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p018-006/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p018-006/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p018-006/detail_01.webp")
        ],
        "tags": [
          "南红、玛瑙、和田玉、蜜蜡、玉",
          "南红玛瑙",
          "手链手串"
        ],
        "price": 117.0,
        "currency": "USD"
      },
      {
        "id": "product-019-7",
        "code": "019",
        "name": "兰若纳福",
        "sourceName": "普陀山天然正品南红玛瑙手串女款本命年转运珠手链草莓晶貔貅手饰",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "南红玛瑙清修圆珠以南红、玛瑙、蜜蜡为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门；玛瑙纹理沉稳，寓意安定心念、凝聚内在力量；蜜蜡温暖明亮，寓意丰盛、亲和与岁月沉淀。圆珠成串，象征周…",
        "details": [
          "南红玛瑙清修圆珠以南红、玛瑙、蜜蜡为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门",
          "玛瑙纹理沉稳，寓意安定心念、凝聚内在力量",
          "蜜蜡温暖明亮，寓意丰盛、亲和与岁月沉淀。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p019-007/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p019-007/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p019-007/detail_01.webp")
        ],
        "tags": [
          "南红、玛瑙、蜜蜡",
          "南红玛瑙",
          "手链手串"
        ],
        "price": 150.0,
        "currency": "USD"
      },
      {
        "id": "product-020-8",
        "code": "020",
        "name": "朝露寄月",
        "sourceName": "普陀山文创集南红手串保山满肉招财手链女款双圈叠戴水晶手串礼物",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "南红玛瑙清修圆珠以南红、玛瑙、水晶为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门；玛瑙纹理沉稳，寓意安定心念、凝聚内在力量；水晶通透澄明，寓意净化、清醒与能量流动。圆珠成串，象征周…",
        "details": [
          "南红玛瑙清修圆珠以南红、玛瑙、水晶为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门",
          "玛瑙纹理沉稳，寓意安定心念、凝聚内在力量",
          "水晶通透澄明，寓意净化、清醒与能量流动。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p020-008/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p020-008/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p020-008/detail_01.webp")
        ],
        "tags": [
          "南红、玛瑙、水晶",
          "南红玛瑙",
          "手链手串"
        ],
        "price": 133.0,
        "currency": "USD"
      },
      {
        "id": "product-021-9",
        "code": "021",
        "name": "清晖照愿",
        "sourceName": "普陀山文创集南红双圈手串天然绿檀木玛瑙招财转运珠本命年手链女",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "南红玛瑙清修圆珠以南红、玛瑙、檀为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门；玛瑙纹理沉稳，寓意安定心念、凝聚内在力量；檀香气息沉稳，寓意安神、辟浊与沉静守正。香韵随身，取清心定…",
        "details": [
          "南红玛瑙清修圆珠以南红、玛瑙、檀为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门",
          "玛瑙纹理沉稳，寓意安定心念、凝聚内在力量",
          "檀香气息沉稳，寓意安神、辟浊与沉静守正。香韵随身，取清心定气、辟浊纳祥之意，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p021-009/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p021-009/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p021-009/detail_01.webp")
        ],
        "tags": [
          "南红、玛瑙、檀",
          "南红玛瑙",
          "手链手串"
        ],
        "price": 134.0,
        "currency": "USD"
      },
      {
        "id": "product-023-10",
        "code": "023",
        "name": "灵犀静意",
        "sourceName": "普陀山文创集天然柿子南红手串女本命年转运川料本命红玛瑙礼物男",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "南红玛瑙清修圆珠以南红、玛瑙为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门；玛瑙纹理沉稳，寓意安定心念、凝聚内在力量。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为…",
        "details": [
          "南红玛瑙清修圆珠以南红、玛瑙为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门",
          "玛瑙纹理沉稳，寓意安定心念、凝聚内在力量。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p023-010/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p023-010/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p023-010/detail_01.webp")
        ],
        "tags": [
          "南红、玛瑙",
          "南红玛瑙",
          "手链手串"
        ],
        "price": 150.0,
        "currency": "USD"
      },
      {
        "id": "product-030-11",
        "code": "030",
        "name": "愿景心宁",
        "sourceName": "普陀山文创集绿松色幸运石手串3mm叠戴手链南红蜜蜡转运珠女礼物",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "南红蜜蜡清修圆珠以南红、蜜蜡为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门；蜜蜡温暖明亮，寓意丰盛、亲和与岁月沉淀。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东…",
        "details": [
          "南红蜜蜡清修圆珠以南红、蜜蜡为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门",
          "蜜蜡温暖明亮，寓意丰盛、亲和与岁月沉淀。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p030-011/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p030-011/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p030-011/detail_01.webp")
        ],
        "tags": [
          "南红、蜜蜡",
          "南红玛瑙",
          "手链手串"
        ],
        "price": 150.0,
        "currency": "USD"
      },
      {
        "id": "product-032-12",
        "code": "032",
        "name": "山月长宁",
        "sourceName": "普陀山文创集优化绿松石手串女款双圈天然南红玛瑙多宝转运珠手链",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "南红玛瑙清修圆珠以南红、玛瑙、绿松石为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门；玛瑙纹理沉稳，寓意安定心念、凝聚内在力量；绿松石色泽清润，寓意平安、疗愈与长久护佑。圆珠成串，象…",
        "details": [
          "南红玛瑙清修圆珠以南红、玛瑙、绿松石为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门",
          "玛瑙纹理沉稳，寓意安定心念、凝聚内在力量",
          "绿松石色泽清润，寓意平安、疗愈与长久护佑。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p032-012/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p032-012/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p032-012/detail_01.webp")
        ],
        "tags": [
          "南红、玛瑙、绿松石",
          "南红玛瑙",
          "手链手串"
        ],
        "price": 133.0,
        "currency": "USD"
      },
      {
        "id": "product-035-13",
        "code": "035",
        "name": "云纹安和",
        "sourceName": "普陀山文创集高端印度小叶紫檀手串女士正品男款本命年天然手链",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "玛瑙和田玉清修圆珠以玛瑙、和田玉、檀、蜜蜡、珍珠、玉、花为核心元素。玛瑙纹理沉稳，寓意安定心念、凝聚内在力量；和田玉温润含蓄，寓意仁和、圆满与福泽绵长；檀香气息沉稳，寓意安神、辟浊与沉静守…",
        "details": [
          "玛瑙和田玉清修圆珠以玛瑙、和田玉、檀、蜜蜡、珍珠、玉、花为核心元素。玛瑙纹理沉稳，寓意安定心念、凝聚内在力量",
          "和田玉温润含蓄，寓意仁和、圆满与福泽绵长",
          "檀香气息沉稳，寓意安神、辟浊与沉静守正",
          "蜜蜡温暖明亮，寓意丰盛、亲和与岁月沉淀"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p035-013/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p035-013/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p035-013/detail_01.webp")
        ],
        "tags": [
          "玛瑙、和田玉、檀、蜜蜡、珍珠、玉、花",
          "南红玛瑙",
          "手链手串"
        ],
        "price": 223.0,
        "currency": "USD"
      },
      {
        "id": "product-038-14",
        "code": "038",
        "name": "归云怀真",
        "sourceName": "普陀山文创集天然真鸡油黄蜜蜡手串正品马年女款双圈高端南红手链",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "南红蜜蜡清修圆珠以南红、蜜蜡为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门；蜜蜡温暖明亮，寓意丰盛、亲和与岁月沉淀。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东…",
        "details": [
          "南红蜜蜡清修圆珠以南红、蜜蜡为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门",
          "蜜蜡温暖明亮，寓意丰盛、亲和与岁月沉淀。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p038-014/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p038-014/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p038-014/detail_01.webp")
        ],
        "tags": [
          "南红、蜜蜡",
          "南红玛瑙",
          "手链手串"
        ],
        "price": 150.0,
        "currency": "USD"
      },
      {
        "id": "product-040-15",
        "code": "040",
        "name": "晴岚如愿",
        "sourceName": "普陀山文创集天然黄虎眼石手串男士玛瑙闪电虎睛石猫眼石手链男款",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "玛瑙清修圆珠以玛瑙为核心元素。玛瑙纹理沉稳，寓意安定心念、凝聚内在力量。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。",
        "details": [
          "玛瑙清修圆珠以玛瑙为核心元素。玛瑙纹理沉稳，寓意安定心念、凝聚内在力量。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p040-015/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p040-015/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p040-015/detail_01.webp")
        ],
        "tags": [
          "玛瑙",
          "南红玛瑙",
          "手链手串"
        ],
        "price": 223.0,
        "currency": "USD"
      },
      {
        "id": "product-047-16",
        "code": "047",
        "name": "莲心承福",
        "sourceName": "【普陀山直发】南红双圈手串女生天然水晶叠戴手链招财转运珠礼物",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "南红玛瑙清修圆珠以南红、玛瑙、水晶、檀为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门；玛瑙纹理沉稳，寓意安定心念、凝聚内在力量；水晶通透澄明，寓意净化、清醒与能量流动；檀香气息沉稳…",
        "details": [
          "南红玛瑙清修圆珠以南红、玛瑙、水晶、檀为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门",
          "玛瑙纹理沉稳，寓意安定心念、凝聚内在力量",
          "水晶通透澄明，寓意净化、清醒与能量流动",
          "檀香气息沉稳，寓意安神、辟浊与沉静守正。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p047-016/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p047-016/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p047-016/detail_01.webp")
        ],
        "tags": [
          "南红、玛瑙、水晶、檀",
          "南红玛瑙",
          "手链手串"
        ],
        "price": 106.0,
        "currency": "USD"
      },
      {
        "id": "product-052-17",
        "code": "052",
        "name": "拂晓愿成",
        "sourceName": "【普陀山】天然金发晶虎眼石手串女款黄水晶招财运聚财转运珠手链",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "南红发晶清修圆珠以南红、发晶、水晶为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门；发晶内含金丝般晶体，寓意聚财、坚定与向上生长；水晶通透澄明，寓意净化、清醒与能量流动。圆珠成串，象…",
        "details": [
          "南红发晶清修圆珠以南红、发晶、水晶为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门",
          "发晶内含金丝般晶体，寓意聚财、坚定与向上生长",
          "水晶通透澄明，寓意净化、清醒与能量流动。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p052-017/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p052-017/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p052-017/detail_01.webp")
        ],
        "tags": [
          "南红、发晶、水晶",
          "南红玛瑙",
          "手链手串"
        ],
        "price": 130.0,
        "currency": "USD"
      },
      {
        "id": "product-065-18",
        "code": "065",
        "name": "照夜见喜",
        "sourceName": "青城山来年元宝大漆12mm南红单圈手串国风原创 925银百搭大漆珠",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "南红S925银清修圆珠以南红、S925银、银、大漆为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门；银质清亮，寓意洁净、护佑与灵动；大漆光泽含蓄，寓意传承、圆满与东方雅韵。圆珠成串，…",
        "details": [
          "南红S925银清修圆珠以南红、S925银、银、大漆为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门",
          "银质清亮，寓意洁净、护佑与灵动",
          "大漆光泽含蓄，寓意传承、圆满与东方雅韵。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p065-018/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p065-018/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p065-018/detail_01.webp")
        ],
        "tags": [
          "南红、S925银、银、大漆",
          "南红玛瑙",
          "手链手串"
        ],
        "price": 1055.0,
        "currency": "USD"
      },
      {
        "id": "product-074-19",
        "code": "074",
        "name": "素愿含章",
        "sourceName": "青城山【朱红蜜露】5mm原矿火焰纹小米珠南红俄料蜜蜡手串配珠女",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "南红蜜蜡清修圆珠以南红、蜜蜡、银为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门；蜜蜡温暖明亮，寓意丰盛、亲和与岁月沉淀；银质清亮，寓意洁净、护佑与灵动。圆珠成串，象征周而复始、福气…",
        "details": [
          "南红蜜蜡清修圆珠以南红、蜜蜡、银为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门",
          "蜜蜡温暖明亮，寓意丰盛、亲和与岁月沉淀",
          "银质清亮，寓意洁净、护佑与灵动。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p074-019/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p074-019/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p074-019/detail_01.webp")
        ],
        "tags": [
          "南红、蜜蜡、银",
          "南红玛瑙",
          "手链手串"
        ],
        "price": 206.0,
        "currency": "USD"
      },
      {
        "id": "product-076-20",
        "code": "076",
        "name": "微澜无忧",
        "sourceName": "青城山【寻溯】6mm南红单圈手串精致百搭叠戴必选",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "南红银清修圆珠以南红、银、花为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门；银质清亮，寓意洁净、护佑与灵动；花香意象柔美，寓意舒展、悦己与生机。圆珠成串，象征周而复始、福气流转，适…",
        "details": [
          "南红银清修圆珠以南红、银、花为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门",
          "银质清亮，寓意洁净、护佑与灵动",
          "花香意象柔美，寓意舒展、悦己与生机。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p076-020/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p076-020/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p076-020/detail_01.webp")
        ],
        "tags": [
          "南红、银、花",
          "南红玛瑙",
          "手链手串"
        ],
        "price": 375.0,
        "currency": "USD"
      },
      {
        "id": "product-081-21",
        "code": "081",
        "name": "福葫纳安",
        "sourceName": "青城山【壶中日月】9mm柿子红单圈手串湖水绿葫芦时尚设计款轻奢",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "南红银葫芦纳福以南红、银为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门；银质清亮，寓意洁净、护佑与灵动。葫芦形制取纳福纳吉、圆满安康之意，适合日常佩戴、修心静坐或作为东方礼赠。",
        "details": [
          "南红银葫芦纳福以南红、银为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门",
          "银质清亮，寓意洁净、护佑与灵动。葫芦形制取纳福纳吉、圆满安康之意，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p081-021/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p081-021/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p081-021/detail_01.webp")
        ],
        "tags": [
          "南红、银",
          "南红玛瑙",
          "手链手串"
        ],
        "price": 770.0,
        "currency": "USD"
      },
      {
        "id": "product-083-22",
        "code": "083",
        "name": "流光和鸣",
        "sourceName": "青城山天然冰飘南红手串蜜蜡绿松石平安环琥珀手链珠宝女款饰品",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "南红绿松石清修圆珠以南红、绿松石、蜜蜡、琥珀、银为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门；绿松石色泽清润，寓意平安、疗愈与长久护佑；蜜蜡温暖明亮，寓意丰盛、亲和与岁月沉淀；琥…",
        "details": [
          "南红绿松石清修圆珠以南红、绿松石、蜜蜡、琥珀、银为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门",
          "绿松石色泽清润，寓意平安、疗愈与长久护佑",
          "蜜蜡温暖明亮，寓意丰盛、亲和与岁月沉淀",
          "琥珀凝结时光，寓意温暖、守护与安然"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p083-022/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p083-022/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p083-022/detail_01.webp")
        ],
        "tags": [
          "南红、绿松石、蜜蜡、琥珀、银",
          "南红玛瑙",
          "手链手串"
        ],
        "price": 263.0,
        "currency": "USD"
      },
      {
        "id": "product-089-23",
        "code": "089",
        "name": "竹影成环",
        "sourceName": "青城山天然冰红南红手串官方文创珠宝红玛瑙碧玉配珍珠手链银饰品",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "南红玛瑙清修圆珠以南红、玛瑙、珍珠、银、玉为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门；玛瑙纹理沉稳，寓意安定心念、凝聚内在力量；珍珠莹润柔和，寓意圆融、珍贵与温婉；银质清亮，寓…",
        "details": [
          "南红玛瑙清修圆珠以南红、玛瑙、珍珠、银、玉为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门",
          "玛瑙纹理沉稳，寓意安定心念、凝聚内在力量",
          "珍珠莹润柔和，寓意圆融、珍贵与温婉",
          "银质清亮，寓意洁净、护佑与灵动"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p089-023/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p089-023/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p089-023/detail_01.webp")
        ],
        "tags": [
          "南红、玛瑙、珍珠、银、玉",
          "南红玛瑙",
          "手链手串"
        ],
        "price": 316.0,
        "currency": "USD"
      },
      {
        "id": "product-093-24",
        "code": "093",
        "name": "鹤梦澄怀",
        "sourceName": "青城山文创官方正品原创天然川料南红冰飘手串翡翠白玉葫芦手饰",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "南红翡翠葫芦纳福以南红、翡翠、银、玉为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门；翡翠清润有生机，寓意福气、贵气与长久安宁；银质清亮，寓意洁净、护佑与灵动；玉质温雅，寓意君子之德…",
        "details": [
          "南红翡翠葫芦纳福以南红、翡翠、银、玉为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门",
          "翡翠清润有生机，寓意福气、贵气与长久安宁",
          "银质清亮，寓意洁净、护佑与灵动",
          "玉质温雅，寓意君子之德、平安与圆满。葫芦形制取纳福纳吉、圆满安康之意，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p093-024/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p093-024/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p093-024/detail_01.webp")
        ],
        "tags": [
          "南红、翡翠、银、玉",
          "南红玛瑙",
          "手链手串"
        ],
        "price": 316.0,
        "currency": "USD"
      },
      {
        "id": "product-095-25",
        "code": "095",
        "name": "秋水守静",
        "sourceName": "青城山官方旗舰店天然藕粉和田玉手串南红平安喜乐手饰简约时尚",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "南红和田玉清修圆珠以南红、和田玉、银、玉为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门；和田玉温润含蓄，寓意仁和、圆满与福泽绵长；银质清亮，寓意洁净、护佑与灵动；玉质温雅，寓意君子…",
        "details": [
          "南红和田玉清修圆珠以南红、和田玉、银、玉为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门",
          "和田玉温润含蓄，寓意仁和、圆满与福泽绵长",
          "银质清亮，寓意洁净、护佑与灵动",
          "玉质温雅，寓意君子之德、平安与圆满。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p095-025/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p095-025/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p095-025/detail_01.webp")
        ],
        "tags": [
          "南红、和田玉、银、玉",
          "南红玛瑙",
          "手链手串"
        ],
        "price": 389.0,
        "currency": "USD"
      },
      {
        "id": "product-098-26",
        "code": "098",
        "name": "春岚长乐",
        "sourceName": "青城山天然和田玉哑光白玉手串南红配珠单圈手链女日常简约送女友",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "南红和田玉清修圆珠以南红、和田玉、银、玉为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门；和田玉温润含蓄，寓意仁和、圆满与福泽绵长；银质清亮，寓意洁净、护佑与灵动；玉质温雅，寓意君子…",
        "details": [
          "南红和田玉清修圆珠以南红、和田玉、银、玉为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门",
          "和田玉温润含蓄，寓意仁和、圆满与福泽绵长",
          "银质清亮，寓意洁净、护佑与灵动",
          "玉质温雅，寓意君子之德、平安与圆满。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p098-026/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p098-026/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p098-026/detail_01.webp")
        ],
        "tags": [
          "南红、和田玉、银、玉",
          "南红玛瑙",
          "手链手串"
        ],
        "price": 316.0,
        "currency": "USD"
      },
      {
        "id": "product-115-27",
        "code": "115",
        "name": "檐雨守愿",
        "sourceName": "青城山官方天然川料冰飘南红玛瑙手串搭碧玉小清新气质文艺送女友",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "南红玛瑙清修圆珠以南红、玛瑙、银、玉为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门；玛瑙纹理沉稳，寓意安定心念、凝聚内在力量；银质清亮，寓意洁净、护佑与灵动；玉质温雅，寓意君子之德…",
        "details": [
          "南红玛瑙清修圆珠以南红、玛瑙、银、玉为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门",
          "玛瑙纹理沉稳，寓意安定心念、凝聚内在力量",
          "银质清亮，寓意洁净、护佑与灵动",
          "玉质温雅，寓意君子之德、平安与圆满。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p115-027/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p115-027/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p115-027/detail_01.webp")
        ],
        "tags": [
          "南红、玛瑙、银、玉",
          "南红玛瑙",
          "手链手串"
        ],
        "price": 133.0,
        "currency": "USD"
      },
      {
        "id": "product-131-28",
        "code": "131",
        "name": "清泉同心",
        "sourceName": "青城山官方珠宝十八18籽手串菩提子南红蜜蜡玛瑙送女生礼物手链",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "南红玛瑙清修圆珠以南红、玛瑙、菩提、十八籽、蜜蜡为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门；玛瑙纹理沉稳，寓意安定心念、凝聚内在力量；菩提承载修心之意，寓意觉悟、沉静与日日精进…",
        "details": [
          "南红玛瑙清修圆珠以南红、玛瑙、菩提、十八籽、蜜蜡为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门",
          "玛瑙纹理沉稳，寓意安定心念、凝聚内在力量",
          "菩提承载修心之意，寓意觉悟、沉静与日日精进",
          "十八籽象征十八般善念，寓意护身、修心与福慧增长"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p131-028/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p131-028/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p131-028/detail_01.webp")
        ],
        "tags": [
          "南红、玛瑙、菩提、十八籽、蜜蜡",
          "南红玛瑙",
          "手链手串"
        ],
        "price": 175.0,
        "currency": "USD"
      },
      {
        "id": "product-134-29",
        "code": "134",
        "name": "晚香承愿",
        "sourceName": "青城山天然南红手串女款柿子红本命年玛瑙手链送女生礼物手链",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "南红玛瑙清修圆珠以南红、玛瑙、银为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门；玛瑙纹理沉稳，寓意安定心念、凝聚内在力量；银质清亮，寓意洁净、护佑与灵动。圆珠成串，象征周而复始、福…",
        "details": [
          "南红玛瑙清修圆珠以南红、玛瑙、银为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门",
          "玛瑙纹理沉稳，寓意安定心念、凝聚内在力量",
          "银质清亮，寓意洁净、护佑与灵动。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p134-029/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p134-029/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p134-029/detail_01.webp")
        ],
        "tags": [
          "南红、玛瑙、银",
          "南红玛瑙",
          "手链手串"
        ],
        "price": 437.0,
        "currency": "USD"
      },
      {
        "id": "product-135-30",
        "code": "135",
        "name": "澄心清圆",
        "sourceName": "青城山文创珠宝天然南红手串柿子红玛瑙大珠单圈手链四川凉山南红",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "南红玛瑙清修圆珠以南红、玛瑙、银为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门；玛瑙纹理沉稳，寓意安定心念、凝聚内在力量；银质清亮，寓意洁净、护佑与灵动。圆珠成串，象征周而复始、福…",
        "details": [
          "南红玛瑙清修圆珠以南红、玛瑙、银为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门",
          "玛瑙纹理沉稳，寓意安定心念、凝聚内在力量",
          "银质清亮，寓意洁净、护佑与灵动。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p135-030/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p135-030/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p135-030/detail_01.webp")
        ],
        "tags": [
          "南红、玛瑙、银",
          "南红玛瑙",
          "手链手串"
        ],
        "price": 759.0,
        "currency": "USD"
      },
      {
        "id": "product-143-31",
        "code": "143",
        "name": "云阶知归",
        "sourceName": "天然川料南红手串女正品柿子红真蜜蜡手链配绿松石送女生礼物手链",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "南红玛瑙清修圆珠以南红、玛瑙、水晶、绿松石、蜜蜡为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门；玛瑙纹理沉稳，寓意安定心念、凝聚内在力量；水晶通透澄明，寓意净化、清醒与能量流动；绿…",
        "details": [
          "南红玛瑙清修圆珠以南红、玛瑙、水晶、绿松石、蜜蜡为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门",
          "玛瑙纹理沉稳，寓意安定心念、凝聚内在力量",
          "水晶通透澄明，寓意净化、清醒与能量流动",
          "绿松石色泽清润，寓意平安、疗愈与长久护佑"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p143-031/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p143-031/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p143-031/detail_01.webp")
        ],
        "tags": [
          "南红、玛瑙、水晶、绿松石、蜜蜡",
          "南红玛瑙",
          "手链手串"
        ],
        "price": 791.0,
        "currency": "USD"
      },
      {
        "id": "product-146-32",
        "code": "146",
        "name": "花神凝香",
        "sourceName": "青城山天然冰飘南红手串女款正品樱花粉冰荔枝素圈送女生礼物手链",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "南红花花神凝香以南红、花为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门；花香意象柔美，寓意舒展、悦己与生机。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。",
        "details": [
          "南红花花神凝香以南红、花为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门",
          "花香意象柔美，寓意舒展、悦己与生机。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p146-032/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p146-032/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p146-032/detail_01.webp")
        ],
        "tags": [
          "南红、花",
          "南红玛瑙",
          "手链手串"
        ],
        "price": 131.0,
        "currency": "USD"
      },
      {
        "id": "product-158-33",
        "code": "158",
        "name": "归舟福至",
        "sourceName": "青城山天然蜜蜡手串老花蜡小米珠十堰原矿高瓷绿松石手链南红如意",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "南红绿松石花神凝香以南红、绿松石、蜜蜡、琥珀、银、花为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门；绿松石色泽清润，寓意平安、疗愈与长久护佑；蜜蜡温暖明亮，寓意丰盛、亲和与岁月沉淀…",
        "details": [
          "南红绿松石花神凝香以南红、绿松石、蜜蜡、琥珀、银、花为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门",
          "绿松石色泽清润，寓意平安、疗愈与长久护佑",
          "蜜蜡温暖明亮，寓意丰盛、亲和与岁月沉淀",
          "琥珀凝结时光，寓意温暖、守护与安然"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p158-033/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p158-033/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p158-033/detail_01.webp")
        ],
        "tags": [
          "南红、绿松石、蜜蜡、琥珀、银、花",
          "南红玛瑙",
          "手链手串"
        ],
        "price": 395.0,
        "currency": "USD"
      },
      {
        "id": "product-160-34",
        "code": "160",
        "name": "听雪静好",
        "sourceName": "青城山文创南红手串配黄金18k金小米珠宝手链官方正品旗舰店礼品",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "南红银清修圆珠以南红、银为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门；银质清亮，寓意洁净、护佑与灵动。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。",
        "details": [
          "南红银清修圆珠以南红、银为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门",
          "银质清亮，寓意洁净、护佑与灵动。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p160-034/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p160-034/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p160-034/detail_01.webp")
        ],
        "tags": [
          "南红、银",
          "南红玛瑙",
          "手链手串"
        ],
        "price": 427.0,
        "currency": "USD"
      },
      {
        "id": "product-161-35",
        "code": "161",
        "name": "照心生辉",
        "sourceName": "青城山天然柿子红南红玛瑙手串官方文创珠宝蜜蜡手链玉石配琥珀",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "南红玛瑙清修圆珠以南红、玛瑙、蜜蜡、琥珀、银、玉、花为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门；玛瑙纹理沉稳，寓意安定心念、凝聚内在力量；蜜蜡温暖明亮，寓意丰盛、亲和与岁月沉淀…",
        "details": [
          "南红玛瑙清修圆珠以南红、玛瑙、蜜蜡、琥珀、银、玉、花为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门",
          "玛瑙纹理沉稳，寓意安定心念、凝聚内在力量",
          "蜜蜡温暖明亮，寓意丰盛、亲和与岁月沉淀",
          "琥珀凝结时光，寓意温暖、守护与安然"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p161-035/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p161-035/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p161-035/detail_01.webp")
        ],
        "tags": [
          "南红、玛瑙、蜜蜡、琥珀、银、玉、花",
          "南红玛瑙",
          "手链手串"
        ],
        "price": 306.0,
        "currency": "USD"
      },
      {
        "id": "product-162-36",
        "code": "162",
        "name": "闻磬听泉",
        "sourceName": "青城山天然原矿南红火焰纹手串蛋面玉髓手链女款小米珠官方正品",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "南红银清修圆珠以南红、银、玉为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门；银质清亮，寓意洁净、护佑与灵动；玉质温雅，寓意君子之德、平安与圆满。圆珠成串，象征周而复始、福气流转，适…",
        "details": [
          "南红银清修圆珠以南红、银、玉为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门",
          "银质清亮，寓意洁净、护佑与灵动",
          "玉质温雅，寓意君子之德、平安与圆满。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p162-036/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p162-036/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p162-036/detail_01.webp")
        ],
        "tags": [
          "南红、银、玉",
          "南红玛瑙",
          "手链手串"
        ],
        "price": 400.0,
        "currency": "USD"
      },
      {
        "id": "product-172-37",
        "code": "172",
        "name": "静澜向暖",
        "sourceName": "青城山天然俄料老花蜡流淌纹蜜蜡手串精雕南红慈航真人护佑手链",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "南红蜜蜡花神凝香以南红、蜜蜡、琥珀、银、花为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门；蜜蜡温暖明亮，寓意丰盛、亲和与岁月沉淀；琥珀凝结时光，寓意温暖、守护与安然；银质清亮，寓意…",
        "details": [
          "南红蜜蜡花神凝香以南红、蜜蜡、琥珀、银、花为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门",
          "蜜蜡温暖明亮，寓意丰盛、亲和与岁月沉淀",
          "琥珀凝结时光，寓意温暖、守护与安然",
          "银质清亮，寓意洁净、护佑与灵动"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p172-037/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p172-037/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p172-037/detail_01.webp")
        ],
        "tags": [
          "南红、蜜蜡、琥珀、银、花",
          "南红玛瑙",
          "手链手串"
        ],
        "price": 1371.0,
        "currency": "USD"
      },
      {
        "id": "product-173-38",
        "code": "173",
        "name": "安行含光",
        "sourceName": "青城山天然保山南红手串十堰高瓷蓝原矿绿松石貔貅招财18k金手链",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "南红绿松石清修圆珠以南红、绿松石、银、花为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门；绿松石色泽清润，寓意平安、疗愈与长久护佑；银质清亮，寓意洁净、护佑与灵动；花香意象柔美，寓意…",
        "details": [
          "南红绿松石清修圆珠以南红、绿松石、银、花为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门",
          "绿松石色泽清润，寓意平安、疗愈与长久护佑",
          "银质清亮，寓意洁净、护佑与灵动",
          "花香意象柔美，寓意舒展、悦己与生机。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p173-038/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p173-038/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p173-038/detail_01.webp")
        ],
        "tags": [
          "南红、绿松石、银、花",
          "南红玛瑙",
          "手链手串"
        ],
        "price": 1930.0,
        "currency": "USD"
      },
      {
        "id": "product-180-39",
        "code": "180",
        "name": "一念归心",
        "sourceName": "青城山川料南红玛瑙手串柿子红小米珠保山莲蓬回纹女款手链",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "南红玛瑙清修圆珠以南红、玛瑙、银为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门；玛瑙纹理沉稳，寓意安定心念、凝聚内在力量；银质清亮，寓意洁净、护佑与灵动。圆珠成串，象征周而复始、福…",
        "details": [
          "南红玛瑙清修圆珠以南红、玛瑙、银为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门",
          "玛瑙纹理沉稳，寓意安定心念、凝聚内在力量",
          "银质清亮，寓意洁净、护佑与灵动。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p180-039/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p180-039/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p180-039/detail_01.webp")
        ],
        "tags": [
          "南红、玛瑙、银",
          "南红玛瑙",
          "手链手串"
        ],
        "price": 362.0,
        "currency": "USD"
      },
      {
        "id": "product-183-40",
        "code": "183",
        "name": "云岫成环",
        "sourceName": "青城山原创设计天然保山南红手串18K金日进斗金蟾蜍绿松保山女",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "南红银清修圆珠以南红、银为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门；银质清亮，寓意洁净、护佑与灵动。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。",
        "details": [
          "南红银清修圆珠以南红、银为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门",
          "银质清亮，寓意洁净、护佑与灵动。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p183-040/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p183-040/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p183-040/detail_01.webp")
        ],
        "tags": [
          "南红、银",
          "南红玛瑙",
          "手链手串"
        ],
        "price": 2145.0,
        "currency": "USD"
      },
      {
        "id": "product-187-41",
        "code": "187",
        "name": "松风澄怀",
        "sourceName": "青城山正品天然南红手串凉山柿子红花丝南瓜福字葫芦国风女款",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "南红S925银葫芦纳福以南红、S925银、银、花为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门；银质清亮，寓意洁净、护佑与灵动；花香意象柔美，寓意舒展、悦己与生机。葫芦形制取纳福纳…",
        "details": [
          "南红S925银葫芦纳福以南红、S925银、银、花为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门",
          "银质清亮，寓意洁净、护佑与灵动",
          "花香意象柔美，寓意舒展、悦己与生机。葫芦形制取纳福纳吉、圆满安康之意，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p187-041/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p187-041/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p187-041/detail_01.webp")
        ],
        "tags": [
          "南红、S925银、银、花",
          "南红玛瑙",
          "手链手串"
        ],
        "price": 508.0,
        "currency": "USD"
      },
      {
        "id": "product-189-42",
        "code": "189",
        "name": "月照守静",
        "sourceName": "青城山官方正品天然冰红河湾料手串翡翠稻穗平安喜乐百搭手链",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "南红翡翠清修圆珠以南红、翡翠、银为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门；翡翠清润有生机，寓意福气、贵气与长久安宁；银质清亮，寓意洁净、护佑与灵动。圆珠成串，象征周而复始、福…",
        "details": [
          "南红翡翠清修圆珠以南红、翡翠、银为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门",
          "翡翠清润有生机，寓意福气、贵气与长久安宁",
          "银质清亮，寓意洁净、护佑与灵动。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p189-042/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p189-042/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p189-042/detail_01.webp")
        ],
        "tags": [
          "南红、翡翠、银",
          "南红玛瑙",
          "手链手串"
        ],
        "price": 489.0,
        "currency": "USD"
      },
      {
        "id": "product-200-43",
        "code": "200",
        "name": "静山长乐",
        "sourceName": "青城山官方保真保正天然川料原矿直切k金火焰纹绿松回纹南红手串",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "南红银清修圆珠以南红、银为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门；银质清亮，寓意洁净、护佑与灵动。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。",
        "details": [
          "南红银清修圆珠以南红、银为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门",
          "银质清亮，寓意洁净、护佑与灵动。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p200-043/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p200-043/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p200-043/detail_01.webp")
        ],
        "tags": [
          "南红、银",
          "南红玛瑙",
          "手链手串"
        ],
        "price": 2821.0,
        "currency": "USD"
      },
      {
        "id": "product-201-44",
        "code": "201",
        "name": "星河风定",
        "sourceName": "青城山官方保真保正天然川料原矿直切碧玉k金火焰纹南红手串高货",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "南红银清修圆珠以南红、银、玉为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门；银质清亮，寓意洁净、护佑与灵动；玉质温雅，寓意君子之德、平安与圆满。圆珠成串，象征周而复始、福气流转，适…",
        "details": [
          "南红银清修圆珠以南红、银、玉为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门",
          "银质清亮，寓意洁净、护佑与灵动",
          "玉质温雅，寓意君子之德、平安与圆满。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p201-044/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p201-044/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p201-044/detail_01.webp")
        ],
        "tags": [
          "南红、银、玉",
          "南红玛瑙",
          "手链手串"
        ],
        "price": 2791.0,
        "currency": "USD"
      },
      {
        "id": "product-205-45",
        "code": "205",
        "name": "福泽守愿",
        "sourceName": "青城山官方正品天然黄口和田玉手串保山南红财神招财手串男女百搭",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "南红和田玉清修圆珠以南红、和田玉、银、玉为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门；和田玉温润含蓄，寓意仁和、圆满与福泽绵长；银质清亮，寓意洁净、护佑与灵动；玉质温雅，寓意君子…",
        "details": [
          "南红和田玉清修圆珠以南红、和田玉、银、玉为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门",
          "和田玉温润含蓄，寓意仁和、圆满与福泽绵长",
          "银质清亮，寓意洁净、护佑与灵动",
          "玉质温雅，寓意君子之德、平安与圆满。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p205-045/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p205-045/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p205-045/detail_01.webp")
        ],
        "tags": [
          "南红、和田玉、银、玉",
          "南红玛瑙",
          "手链手串"
        ],
        "price": 380.0,
        "currency": "USD"
      },
      {
        "id": "product-213-46",
        "code": "213",
        "name": "兰若同心",
        "sourceName": "青城山瓦西川料随形火焰纹南红配碧玉蜜蜡手串官方珠宝玛瑙手链女",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "南红玛瑙清修圆珠以南红、玛瑙、蜜蜡、银、玉为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门；玛瑙纹理沉稳，寓意安定心念、凝聚内在力量；蜜蜡温暖明亮，寓意丰盛、亲和与岁月沉淀；银质清亮…",
        "details": [
          "南红玛瑙清修圆珠以南红、玛瑙、蜜蜡、银、玉为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门",
          "玛瑙纹理沉稳，寓意安定心念、凝聚内在力量",
          "蜜蜡温暖明亮，寓意丰盛、亲和与岁月沉淀",
          "银质清亮，寓意洁净、护佑与灵动"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p213-046/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p213-046/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p213-046/detail_01.webp")
        ],
        "tags": [
          "南红、玛瑙、蜜蜡、银、玉",
          "南红玛瑙",
          "手链手串"
        ],
        "price": 288.0,
        "currency": "USD"
      },
      {
        "id": "product-215-47",
        "code": "215",
        "name": "朝露承愿",
        "sourceName": "青城山官方保真保正平安喜乐和田白玉祥云碧玉珠绿松石冰飘手串",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "南红绿松石清修圆珠以南红、绿松石、银、玉为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门；绿松石色泽清润，寓意平安、疗愈与长久护佑；银质清亮，寓意洁净、护佑与灵动；玉质温雅，寓意君子…",
        "details": [
          "南红绿松石清修圆珠以南红、绿松石、银、玉为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门",
          "绿松石色泽清润，寓意平安、疗愈与长久护佑",
          "银质清亮，寓意洁净、护佑与灵动",
          "玉质温雅，寓意君子之德、平安与圆满。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p215-047/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p215-047/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p215-047/detail_01.webp")
        ],
        "tags": [
          "南红、绿松石、银、玉",
          "南红玛瑙",
          "手链手串"
        ],
        "price": 175.0,
        "currency": "USD"
      },
      {
        "id": "product-222-48",
        "code": "222",
        "name": "灵犀知归",
        "sourceName": "青城山【福利孤品】天然水晶紫黄水晶白水晶手串送女生礼物手链",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "玛瑙发晶清修圆珠以玛瑙、发晶、水晶、蜜蜡、珍珠、花、茶为核心元素。玛瑙纹理沉稳，寓意安定心念、凝聚内在力量；发晶内含金丝般晶体，寓意聚财、坚定与向上生长；水晶通透澄明，寓意净化、清醒与能量…",
        "details": [
          "玛瑙发晶清修圆珠以玛瑙、发晶、水晶、蜜蜡、珍珠、花、茶为核心元素。玛瑙纹理沉稳，寓意安定心念、凝聚内在力量",
          "发晶内含金丝般晶体，寓意聚财、坚定与向上生长",
          "水晶通透澄明，寓意净化、清醒与能量流动",
          "蜜蜡温暖明亮，寓意丰盛、亲和与岁月沉淀"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p222-048/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p222-048/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p222-048/detail_01.webp")
        ],
        "tags": [
          "玛瑙、发晶、水晶、蜜蜡、珍珠、花、茶",
          "南红玛瑙",
          "手链手串"
        ],
        "price": 165.0,
        "currency": "USD"
      },
      {
        "id": "product-227-49",
        "code": "227",
        "name": "愿景福至",
        "sourceName": "青城山天然川料原矿火焰纹南红手串925银碧玉葫芦显白手链女送礼",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "南红S925银葫芦纳福以南红、S925银、银、玉为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门；银质清亮，寓意洁净、护佑与灵动；玉质温雅，寓意君子之德、平安与圆满。葫芦形制取纳福纳…",
        "details": [
          "南红S925银葫芦纳福以南红、S925银、银、玉为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门",
          "银质清亮，寓意洁净、护佑与灵动",
          "玉质温雅，寓意君子之德、平安与圆满。葫芦形制取纳福纳吉、圆满安康之意，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p227-049/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p227-049/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p227-049/detail_01.webp")
        ],
        "tags": [
          "南红、S925银、银、玉",
          "南红玛瑙",
          "手链手串"
        ],
        "price": 233.0,
        "currency": "USD"
      },
      {
        "id": "product-229-50",
        "code": "229",
        "name": "山月静好",
        "sourceName": "青城山官方珠宝天然俄料花蜡蜜蜡手串男琥珀配南红绿松石手链女",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "南红绿松石花神凝香以南红、绿松石、蜜蜡、琥珀、银、花为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门；绿松石色泽清润，寓意平安、疗愈与长久护佑；蜜蜡温暖明亮，寓意丰盛、亲和与岁月沉淀…",
        "details": [
          "南红绿松石花神凝香以南红、绿松石、蜜蜡、琥珀、银、花为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门",
          "绿松石色泽清润，寓意平安、疗愈与长久护佑",
          "蜜蜡温暖明亮，寓意丰盛、亲和与岁月沉淀",
          "琥珀凝结时光，寓意温暖、守护与安然"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p229-050/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p229-050/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p229-050/detail_01.webp")
        ],
        "tags": [
          "南红、绿松石、蜜蜡、琥珀、银、花",
          "南红玛瑙",
          "手链手串"
        ],
        "price": 1309.0,
        "currency": "USD"
      },
      {
        "id": "product-230-51",
        "code": "230",
        "name": "云纹生辉",
        "sourceName": "青城山天然保山南红小米珠手串925银凤九蜜蜡枣珠百搭女款手链",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "南红蜜蜡清修圆珠以南红、蜜蜡、S925银、银为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门；蜜蜡温暖明亮，寓意丰盛、亲和与岁月沉淀；银质清亮，寓意洁净、护佑与灵动。圆珠成串，象征周…",
        "details": [
          "南红蜜蜡清修圆珠以南红、蜜蜡、S925银、银为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门",
          "蜜蜡温暖明亮，寓意丰盛、亲和与岁月沉淀",
          "银质清亮，寓意洁净、护佑与灵动。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p230-051/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p230-051/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p230-051/detail_01.webp")
        ],
        "tags": [
          "南红、蜜蜡、S925银、银",
          "南红玛瑙",
          "手链手串"
        ],
        "price": 129.0,
        "currency": "USD"
      },
      {
        "id": "product-236-52",
        "code": "236",
        "name": "归云听泉",
        "sourceName": "青城山天然俄料琥珀蜜蜡双圈手串海纹石碧玉南红老花蜡手链女百搭",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "南红蜜蜡花神凝香以南红、蜜蜡、琥珀、银、玉、花为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门；蜜蜡温暖明亮，寓意丰盛、亲和与岁月沉淀；琥珀凝结时光，寓意温暖、守护与安然；银质清亮，…",
        "details": [
          "南红蜜蜡花神凝香以南红、蜜蜡、琥珀、银、玉、花为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门",
          "蜜蜡温暖明亮，寓意丰盛、亲和与岁月沉淀",
          "琥珀凝结时光，寓意温暖、守护与安然",
          "银质清亮，寓意洁净、护佑与灵动"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p236-052/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p236-052/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p236-052/detail_01.webp")
        ],
        "tags": [
          "南红、蜜蜡、琥珀、银、玉、花",
          "南红玛瑙",
          "手链手串"
        ],
        "price": 935.0,
        "currency": "USD"
      },
      {
        "id": "product-237-53",
        "code": "237",
        "name": "晴岚向暖",
        "sourceName": "青城山天然回纹红玛瑙手串满色满肉本命年情侣手链男女款送礼",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "玛瑙银清修圆珠以玛瑙、银为核心元素。玛瑙纹理沉稳，寓意安定心念、凝聚内在力量；银质清亮，寓意洁净、护佑与灵动。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。",
        "details": [
          "玛瑙银清修圆珠以玛瑙、银为核心元素。玛瑙纹理沉稳，寓意安定心念、凝聚内在力量",
          "银质清亮，寓意洁净、护佑与灵动。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p237-053/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p237-053/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p237-053/detail_01.webp")
        ],
        "tags": [
          "玛瑙、银",
          "南红玛瑙",
          "手链手串"
        ],
        "price": 105.0,
        "currency": "USD"
      },
      {
        "id": "product-242-54",
        "code": "242",
        "name": "莲心含光",
        "sourceName": "青城山官方天然正品保山南红手串6mm素圈diy手链简约礼品百搭男女",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "南红银清修圆珠以南红、银为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门；银质清亮，寓意洁净、护佑与灵动。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。",
        "details": [
          "南红银清修圆珠以南红、银为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门",
          "银质清亮，寓意洁净、护佑与灵动。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p242-054/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p242-054/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p242-054/detail_01.webp")
        ],
        "tags": [
          "南红、银",
          "南红玛瑙",
          "手链手串"
        ],
        "price": 288.0,
        "currency": "USD"
      }
    ]
  },
  {
    "id": "bracelet-mixed-blessing",
    "parent": "bracelet",
    "title": "多宝混搭",
    "subtitle": "Mixed Blessing",
    "description": "多种色泽与材质组合，适合作为寓意更丰富的祝福礼物。",
    "items": [
      {
        "id": "product-031-71",
        "code": "031",
        "name": "云阶承福",
        "sourceName": "普陀山文创集天然黑曜石手串醒狮金曜石银曜石红虎眼石手链男礼物",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "银清修圆珠以银为核心元素。银质清亮，寓意洁净、护佑与灵动。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。",
        "details": [
          "银清修圆珠以银为核心元素。银质清亮，寓意洁净、护佑与灵动。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p031-071/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p031-071/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p031-071/detail_01.webp")
        ],
        "tags": [
          "银",
          "多宝混搭",
          "手链手串"
        ],
        "price": 178.0,
        "currency": "USD"
      },
      {
        "id": "product-045-72",
        "code": "045",
        "name": "归舟愿成",
        "sourceName": "【普陀山直发】天然绿发晶手串女招财转运珠情绪稳定绿幽灵男手链",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "发晶清修圆珠以发晶为核心元素。发晶内含金丝般晶体，寓意聚财、坚定与向上生长。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。",
        "details": [
          "发晶清修圆珠以发晶为核心元素。发晶内含金丝般晶体，寓意聚财、坚定与向上生长。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p045-072/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p045-072/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p045-072/detail_01.webp")
        ],
        "tags": [
          "发晶",
          "多宝混搭",
          "手链手串"
        ],
        "price": 127.0,
        "currency": "USD"
      },
      {
        "id": "product-119-73",
        "code": "119",
        "name": "听雪凝光",
        "sourceName": "青城山天然糖果随形碧玺手链925银 百搭款可送女友",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "S925银银清修圆珠以S925银、银为核心元素。银质清亮，寓意洁净、护佑与灵动。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。",
        "details": [
          "S925银银清修圆珠以S925银、银为核心元素。银质清亮，寓意洁净、护佑与灵动。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p119-073/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p119-073/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p119-073/detail_01.webp")
        ],
        "tags": [
          "S925银、银",
          "多宝混搭",
          "手链手串"
        ],
        "price": 154.0,
        "currency": "USD"
      },
      {
        "id": "product-133-74",
        "code": "133",
        "name": "照心见喜",
        "sourceName": "青城山文创珠宝朱砂手串三合六合本命年生肖护身符手链官方正品",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "朱砂清修圆珠以朱砂为核心元素。朱砂赤色端正，寓意辟邪、安定与护身。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。",
        "details": [
          "朱砂清修圆珠以朱砂为核心元素。朱砂赤色端正，寓意辟邪、安定与护身。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p133-074/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p133-074/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p133-074/detail_01.webp")
        ],
        "tags": [
          "朱砂",
          "多宝混搭",
          "手链手串"
        ],
        "price": 140.0,
        "currency": "USD"
      },
      {
        "id": "product-144-75",
        "code": "144",
        "name": "龙吟护佑",
        "sourceName": "青城山香灰琉璃珠手串官方正品龙生肖本命朱砂三合吞金兽2024代请",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "朱砂龙吟护佑以朱砂为核心元素。朱砂赤色端正，寓意辟邪、安定与护身。香韵随身，取清心定气、辟浊纳祥之意，适合日常佩戴、修心静坐或作为东方礼赠。",
        "details": [
          "朱砂龙吟护佑以朱砂为核心元素。朱砂赤色端正，寓意辟邪、安定与护身。香韵随身，取清心定气、辟浊纳祥之意，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p144-075/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p144-075/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p144-075/detail_01.webp")
        ],
        "tags": [
          "朱砂",
          "多宝混搭",
          "手链手串"
        ],
        "price": 126.0,
        "currency": "USD"
      },
      {
        "id": "product-150-76",
        "code": "150",
        "name": "闻磬含章",
        "sourceName": "青城山天然香灰珠琉璃瓷珠九尾狐女款多宝手链送女生礼物手链",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "清修圆珠150以图片材质待复核为核心元素。材质与形制以图片和原商品信息为准，整体寓意安定、护佑与东方雅致。香韵随身，取清心定气、辟浊纳祥之意，适合日常佩戴、修心静坐或作为东方礼赠。",
        "details": [
          "清修圆珠150以图片材质待复核为核心元素。材质与形制以图片和原商品信息为准，整体寓意安定、护佑与东方雅致。香韵随身，取清心定气、辟浊纳祥之意，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p150-076/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p150-076/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p150-076/detail_01.webp")
        ],
        "tags": [
          "图片材质待复核",
          "多宝混搭",
          "手链手串"
        ],
        "price": 105.0,
        "currency": "USD"
      },
      {
        "id": "product-156-77",
        "code": "156",
        "name": "静澜无忧",
        "sourceName": "青城山官方正品天然琥珀蜜蜡手串老花蜡海纹石手链限量高品保真",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "蜜蜡琥珀花神凝香以蜜蜡、琥珀、银、花为核心元素。蜜蜡温暖明亮，寓意丰盛、亲和与岁月沉淀；琥珀凝结时光，寓意温暖、守护与安然；银质清亮，寓意洁净、护佑与灵动；花香意象柔美，寓意舒展、悦己与生…",
        "details": [
          "蜜蜡琥珀花神凝香以蜜蜡、琥珀、银、花为核心元素。蜜蜡温暖明亮，寓意丰盛、亲和与岁月沉淀",
          "琥珀凝结时光，寓意温暖、守护与安然",
          "银质清亮，寓意洁净、护佑与灵动",
          "花香意象柔美，寓意舒展、悦己与生机。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p156-077/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p156-077/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p156-077/detail_01.webp")
        ],
        "tags": [
          "蜜蜡、琥珀、银、花",
          "多宝混搭",
          "手链手串"
        ],
        "price": 3527.0,
        "currency": "USD"
      },
      {
        "id": "product-157-78",
        "code": "157",
        "name": "安行和鸣",
        "sourceName": "青城山珠宝天然花蜡手串素圈男士大点位俄料琥珀正品手链女礼品",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "琥珀银花神凝香以琥珀、银、花为核心元素。琥珀凝结时光，寓意温暖、守护与安然；银质清亮，寓意洁净、护佑与灵动；花香意象柔美，寓意舒展、悦己与生机。圆珠成串，象征周而复始、福气流转，适合日常佩…",
        "details": [
          "琥珀银花神凝香以琥珀、银、花为核心元素。琥珀凝结时光，寓意温暖、守护与安然",
          "银质清亮，寓意洁净、护佑与灵动",
          "花香意象柔美，寓意舒展、悦己与生机。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p157-078/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p157-078/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p157-078/detail_01.webp")
        ],
        "tags": [
          "琥珀、银、花",
          "多宝混搭",
          "手链手串"
        ],
        "price": 2167.0,
        "currency": "USD"
      },
      {
        "id": "product-182-79",
        "code": "182",
        "name": "云岫纳福",
        "sourceName": "青城山官方保正保真天然俄料鸡油黄蜜蜡清源神君k金蜜蜡手串",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "蜜蜡琥珀清修圆珠以蜜蜡、琥珀、银为核心元素。蜜蜡温暖明亮，寓意丰盛、亲和与岁月沉淀；琥珀凝结时光，寓意温暖、守护与安然；银质清亮，寓意洁净、护佑与灵动。圆珠成串，象征周而复始、福气流转，适…",
        "details": [
          "蜜蜡琥珀清修圆珠以蜜蜡、琥珀、银为核心元素。蜜蜡温暖明亮，寓意丰盛、亲和与岁月沉淀",
          "琥珀凝结时光，寓意温暖、守护与安然",
          "银质清亮，寓意洁净、护佑与灵动。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p182-079/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p182-079/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p182-079/detail_01.webp")
        ],
        "tags": [
          "蜜蜡、琥珀、银",
          "多宝混搭",
          "手链手串"
        ],
        "price": 2155.0,
        "currency": "USD"
      },
      {
        "id": "product-184-80",
        "code": "184",
        "name": "松风寄月",
        "sourceName": "青城山 天然原矿冰红河湾料手串18k金花珠绿松福禄双全手串日常",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "银花花神凝香以银、花为核心元素。银质清亮，寓意洁净、护佑与灵动；花香意象柔美，寓意舒展、悦己与生机。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。",
        "details": [
          "银花花神凝香以银、花为核心元素。银质清亮，寓意洁净、护佑与灵动",
          "花香意象柔美，寓意舒展、悦己与生机。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p184-080/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p184-080/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p184-080/detail_01.webp")
        ],
        "tags": [
          "银、花",
          "多宝混搭",
          "手链手串"
        ],
        "price": 3331.0,
        "currency": "USD"
      },
      {
        "id": "product-199-81",
        "code": "199",
        "name": "星河心宁",
        "sourceName": "青城山官方保真天然俄料蜜蜡18k金财神花蜡手串男女通款高货",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "蜜蜡琥珀花神凝香以蜜蜡、琥珀、银、花为核心元素。蜜蜡温暖明亮，寓意丰盛、亲和与岁月沉淀；琥珀凝结时光，寓意温暖、守护与安然；银质清亮，寓意洁净、护佑与灵动；花香意象柔美，寓意舒展、悦己与生…",
        "details": [
          "蜜蜡琥珀花神凝香以蜜蜡、琥珀、银、花为核心元素。蜜蜡温暖明亮，寓意丰盛、亲和与岁月沉淀",
          "琥珀凝结时光，寓意温暖、守护与安然",
          "银质清亮，寓意洁净、护佑与灵动",
          "花香意象柔美，寓意舒展、悦己与生机。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p199-081/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p199-081/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p199-081/detail_01.webp")
        ],
        "tags": [
          "蜜蜡、琥珀、银、花",
          "多宝混搭",
          "手链手串"
        ],
        "price": 3625.0,
        "currency": "USD"
      },
      {
        "id": "product-211-82",
        "code": "211",
        "name": "福泽长宁",
        "sourceName": "青城山文创天然月光石手串斯里兰卡手链女款送女生礼物手链",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "银清修圆珠以银为核心元素。银质清亮，寓意洁净、护佑与灵动。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。",
        "details": [
          "银清修圆珠以银为核心元素。银质清亮，寓意洁净、护佑与灵动。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p211-082/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p211-082/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p211-082/detail_01.webp")
        ],
        "tags": [
          "银",
          "多宝混搭",
          "手链手串"
        ],
        "price": 130.0,
        "currency": "USD"
      },
      {
        "id": "product-226-83",
        "code": "226",
        "name": "兰若安和",
        "sourceName": "青城山天然正品俄料蜜蜡手串圆珠素圈琥珀鸡油黄男文玩手链女款",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "蜜蜡琥珀清修圆珠以蜜蜡、琥珀、银为核心元素。蜜蜡温暖明亮，寓意丰盛、亲和与岁月沉淀；琥珀凝结时光，寓意温暖、守护与安然；银质清亮，寓意洁净、护佑与灵动。圆珠成串，象征周而复始、福气流转，适…",
        "details": [
          "蜜蜡琥珀清修圆珠以蜜蜡、琥珀、银为核心元素。蜜蜡温暖明亮，寓意丰盛、亲和与岁月沉淀",
          "琥珀凝结时光，寓意温暖、守护与安然",
          "银质清亮，寓意洁净、护佑与灵动。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p226-083/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p226-083/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p226-083/detail_01.webp")
        ],
        "tags": [
          "蜜蜡、琥珀、银",
          "多宝混搭",
          "手链手串"
        ],
        "price": 582.0,
        "currency": "USD"
      },
      {
        "id": "product-234-84",
        "code": "234",
        "name": "朝露怀真",
        "sourceName": "青城山天然翡翠葫芦鸡油黄手串俄料蜜蜡琥珀花丝国风手链男女款",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "翡翠蜜蜡葫芦纳福以翡翠、蜜蜡、琥珀、银、花为核心元素。翡翠清润有生机，寓意福气、贵气与长久安宁；蜜蜡温暖明亮，寓意丰盛、亲和与岁月沉淀；琥珀凝结时光，寓意温暖、守护与安然；银质清亮，寓意洁…",
        "details": [
          "翡翠蜜蜡葫芦纳福以翡翠、蜜蜡、琥珀、银、花为核心元素。翡翠清润有生机，寓意福气、贵气与长久安宁",
          "蜜蜡温暖明亮，寓意丰盛、亲和与岁月沉淀",
          "琥珀凝结时光，寓意温暖、守护与安然",
          "银质清亮，寓意洁净、护佑与灵动"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p234-084/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p234-084/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p234-084/detail_01.webp")
        ],
        "tags": [
          "翡翠、蜜蜡、琥珀、银、花",
          "多宝混搭",
          "手链手串"
        ],
        "price": 589.0,
        "currency": "USD"
      },
      {
        "id": "product-235-85",
        "code": "235",
        "name": "清晖如愿",
        "sourceName": "青城山官方正品天然蜜蜡手串白蜡飘花琥珀手链女款海纹石平安喜乐",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "蜜蜡琥珀花神凝香以蜜蜡、琥珀、银、花为核心元素。蜜蜡温暖明亮，寓意丰盛、亲和与岁月沉淀；琥珀凝结时光，寓意温暖、守护与安然；银质清亮，寓意洁净、护佑与灵动；花香意象柔美，寓意舒展、悦己与生…",
        "details": [
          "蜜蜡琥珀花神凝香以蜜蜡、琥珀、银、花为核心元素。蜜蜡温暖明亮，寓意丰盛、亲和与岁月沉淀",
          "琥珀凝结时光，寓意温暖、守护与安然",
          "银质清亮，寓意洁净、护佑与灵动",
          "花香意象柔美，寓意舒展、悦己与生机。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p235-085/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p235-085/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p235-085/detail_01.webp")
        ],
        "tags": [
          "蜜蜡、琥珀、银、花",
          "多宝混搭",
          "手链手串"
        ],
        "price": 233.0,
        "currency": "USD"
      }
    ]
  },
  {
    "id": "bracelet-crystal",
    "parent": "bracelet",
    "title": "水晶能量",
    "subtitle": "Crystal Light",
    "description": "通透、清明、轻盈的晶石系列，适合专注、净化与更新。",
    "items": [
      {
        "id": "product-001-86",
        "code": "001",
        "name": "灵犀承福",
        "sourceName": "普陀山天然黄水晶手链女巴西黄塔晶转运珠暴富好运手串送男士礼物",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "水晶琥珀清修圆珠以水晶、琥珀为核心元素。水晶通透澄明，寓意净化、清醒与能量流动；琥珀凝结时光，寓意温暖、守护与安然。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。",
        "details": [
          "水晶琥珀清修圆珠以水晶、琥珀为核心元素。水晶通透澄明，寓意净化、清醒与能量流动",
          "琥珀凝结时光，寓意温暖、守护与安然。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p001-086/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p001-086/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p001-086/detail_01.webp")
        ],
        "tags": [
          "水晶、琥珀",
          "水晶能量",
          "手链手串"
        ],
        "price": 125.0,
        "currency": "USD"
      },
      {
        "id": "product-005-87",
        "code": "005",
        "name": "山月凝光",
        "sourceName": "普陀山白水晶海蓝宝手串天然净体女款白月光手链白色转运珠送女友",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "水晶清修圆珠以水晶为核心元素。水晶通透澄明，寓意净化、清醒与能量流动。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。",
        "details": [
          "水晶清修圆珠以水晶为核心元素。水晶通透澄明，寓意净化、清醒与能量流动。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p005-087/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p005-087/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p005-087/detail_01.webp")
        ],
        "tags": [
          "水晶",
          "水晶能量",
          "手链手串"
        ],
        "price": 128.0,
        "currency": "USD"
      },
      {
        "id": "product-006-88",
        "code": "006",
        "name": "云纹见喜",
        "sourceName": "普陀山清透白水晶原创手串幸运精致青金石转运珠送女友本命年手链",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "水晶青金石清修圆珠以水晶、青金石为核心元素。水晶通透澄明，寓意净化、清醒与能量流动；青金石深蓝如夜空，寓意智慧、专注与贵气。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东…",
        "details": [
          "水晶青金石清修圆珠以水晶、青金石为核心元素。水晶通透澄明，寓意净化、清醒与能量流动",
          "青金石深蓝如夜空，寓意智慧、专注与贵气。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p006-088/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p006-088/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p006-088/detail_01.webp")
        ],
        "tags": [
          "水晶、青金石",
          "水晶能量",
          "手链手串"
        ],
        "price": 127.0,
        "currency": "USD"
      },
      {
        "id": "product-007-89",
        "code": "007",
        "name": "归云含章",
        "sourceName": "普陀山天然超净体白水晶手串女款金发晶招财转运珠本命年水晶手链",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "发晶水晶清修圆珠以发晶、水晶为核心元素。发晶内含金丝般晶体，寓意聚财、坚定与向上生长；水晶通透澄明，寓意净化、清醒与能量流动。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为…",
        "details": [
          "发晶水晶清修圆珠以发晶、水晶为核心元素。发晶内含金丝般晶体，寓意聚财、坚定与向上生长",
          "水晶通透澄明，寓意净化、清醒与能量流动。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p007-089/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p007-089/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p007-089/detail_01.webp")
        ],
        "tags": [
          "发晶、水晶",
          "水晶能量",
          "手链手串"
        ],
        "price": 117.0,
        "currency": "USD"
      },
      {
        "id": "product-008-90",
        "code": "008",
        "name": "晴岚无忧",
        "sourceName": "普陀山五行喜金水·天然海蓝宝手串女纯银简约生日礼物白水晶手链",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "水晶银清修圆珠以水晶、银为核心元素。水晶通透澄明，寓意净化、清醒与能量流动；银质清亮，寓意洁净、护佑与灵动。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。",
        "details": [
          "水晶银清修圆珠以水晶、银为核心元素。水晶通透澄明，寓意净化、清醒与能量流动",
          "银质清亮，寓意洁净、护佑与灵动。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p008-090/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p008-090/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p008-090/detail_01.webp")
        ],
        "tags": [
          "水晶、银",
          "水晶能量",
          "手链手串"
        ],
        "price": 118.0,
        "currency": "USD"
      },
      {
        "id": "product-009-91",
        "code": "009",
        "name": "莲心和鸣",
        "sourceName": "普陀山天然青金石手串收藏级蓝色宝石双圈水晶手链多圈本命年礼物",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "水晶青金石清修圆珠以水晶、青金石为核心元素。水晶通透澄明，寓意净化、清醒与能量流动；青金石深蓝如夜空，寓意智慧、专注与贵气。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东…",
        "details": [
          "水晶青金石清修圆珠以水晶、青金石为核心元素。水晶通透澄明，寓意净化、清醒与能量流动",
          "青金石深蓝如夜空，寓意智慧、专注与贵气。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p009-091/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p009-091/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p009-091/detail_01.webp")
        ],
        "tags": [
          "水晶、青金石",
          "水晶能量",
          "手链手串"
        ],
        "price": 180.0,
        "currency": "USD"
      },
      {
        "id": "product-010-92",
        "code": "010",
        "name": "拂晓归心",
        "sourceName": "普陀山帝王青金石手串原矿手链招财蓝色宝石天然青晶石蓝水晶双圈",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "水晶青金石清修圆珠以水晶、青金石为核心元素。水晶通透澄明，寓意净化、清醒与能量流动；青金石深蓝如夜空，寓意智慧、专注与贵气。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东…",
        "details": [
          "水晶青金石清修圆珠以水晶、青金石为核心元素。水晶通透澄明，寓意净化、清醒与能量流动",
          "青金石深蓝如夜空，寓意智慧、专注与贵气。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p010-092/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p010-092/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p010-092/detail_01.webp")
        ],
        "tags": [
          "水晶、青金石",
          "水晶能量",
          "手链手串"
        ],
        "price": 139.0,
        "currency": "USD"
      },
      {
        "id": "product-013-93",
        "code": "013",
        "name": "玄光成环",
        "sourceName": "普陀山天然白水晶手串女款收藏级官方旗舰店海蓝宝手链送女友礼物",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "水晶清修圆珠以水晶为核心元素。水晶通透澄明，寓意净化、清醒与能量流动。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。",
        "details": [
          "水晶清修圆珠以水晶为核心元素。水晶通透澄明，寓意净化、清醒与能量流动。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p013-093/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p013-093/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p013-093/detail_01.webp")
        ],
        "tags": [
          "水晶",
          "水晶能量",
          "手链手串"
        ],
        "price": 152.0,
        "currency": "USD"
      },
      {
        "id": "product-014-94",
        "code": "014",
        "name": "照夜澄怀",
        "sourceName": "普陀山直发天然黄水晶手串女款黄发晶金发晶招财转运手链马年礼物",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "发晶水晶清修圆珠以发晶、水晶为核心元素。发晶内含金丝般晶体，寓意聚财、坚定与向上生长；水晶通透澄明，寓意净化、清醒与能量流动。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为…",
        "details": [
          "发晶水晶清修圆珠以发晶、水晶为核心元素。发晶内含金丝般晶体，寓意聚财、坚定与向上生长",
          "水晶通透澄明，寓意净化、清醒与能量流动。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p014-094/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p014-094/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p014-094/detail_01.webp")
        ],
        "tags": [
          "发晶、水晶",
          "水晶能量",
          "手链手串"
        ],
        "price": 167.0,
        "currency": "USD"
      },
      {
        "id": "product-015-95",
        "code": "015",
        "name": "素愿守静",
        "sourceName": "普陀山天然黄虎眼石手串女款黄塔晶手链男款招财转运珠手链黄水晶",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "水晶清修圆珠以水晶为核心元素。水晶通透澄明，寓意净化、清醒与能量流动。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。",
        "details": [
          "水晶清修圆珠以水晶为核心元素。水晶通透澄明，寓意净化、清醒与能量流动。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p015-095/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p015-095/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p015-095/detail_01.webp")
        ],
        "tags": [
          "水晶",
          "水晶能量",
          "手链手串"
        ],
        "price": 148.0,
        "currency": "USD"
      },
      {
        "id": "product-017-96",
        "code": "017",
        "name": "微澜长乐",
        "sourceName": "普陀山黄水晶手串女款天然水晶手链旺财生日本命年手串送女生礼物",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "水晶清修圆珠以水晶为核心元素。水晶通透澄明，寓意净化、清醒与能量流动。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。",
        "details": [
          "水晶清修圆珠以水晶为核心元素。水晶通透澄明，寓意净化、清醒与能量流动。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p017-096/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p017-096/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p017-096/detail_01.webp")
        ],
        "tags": [
          "水晶",
          "水晶能量",
          "手链手串"
        ],
        "price": 167.0,
        "currency": "USD"
      },
      {
        "id": "product-025-97",
        "code": "025",
        "name": "流光风定",
        "sourceName": "普陀山直发9A天然巴西黄水晶手串女款暴富招财转运珠马年素圈手链",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "水晶清修圆珠以水晶为核心元素。水晶通透澄明，寓意净化、清醒与能量流动。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。",
        "details": [
          "水晶清修圆珠以水晶为核心元素。水晶通透澄明，寓意净化、清醒与能量流动。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p025-097/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p025-097/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p025-097/detail_01.webp")
        ],
        "tags": [
          "水晶",
          "水晶能量",
          "手链手串"
        ],
        "price": 125.0,
        "currency": "USD"
      },
      {
        "id": "product-026-98",
        "code": "026",
        "name": "明心守愿",
        "sourceName": "普陀山文创集天然双圈小叶紫檀手串和田玉水晶转运珠檀木佛珠男女",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "水晶和田玉清修圆珠以水晶、和田玉、檀、玉为核心元素。水晶通透澄明，寓意净化、清醒与能量流动；和田玉温润含蓄，寓意仁和、圆满与福泽绵长；檀香气息沉稳，寓意安神、辟浊与沉静守正；玉质温雅，寓意…",
        "details": [
          "水晶和田玉清修圆珠以水晶、和田玉、檀、玉为核心元素。水晶通透澄明，寓意净化、清醒与能量流动",
          "和田玉温润含蓄，寓意仁和、圆满与福泽绵长",
          "檀香气息沉稳，寓意安神、辟浊与沉静守正",
          "玉质温雅，寓意君子之德、平安与圆满。香韵随身，取清心定气、辟浊纳祥之意，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p026-098/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p026-098/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p026-098/detail_01.webp")
        ],
        "tags": [
          "水晶、和田玉、檀、玉",
          "水晶能量",
          "手链手串"
        ],
        "price": 268.0,
        "currency": "USD"
      },
      {
        "id": "product-028-99",
        "code": "028",
        "name": "竹影同心",
        "sourceName": "普陀山文创集黄水晶五行手串补喜三合六合财神手链金虎眼塔晶黄玉",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "水晶玉清修圆珠以水晶、玉为核心元素。水晶通透澄明，寓意净化、清醒与能量流动；玉质温雅，寓意君子之德、平安与圆满。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。",
        "details": [
          "水晶玉清修圆珠以水晶、玉为核心元素。水晶通透澄明，寓意净化、清醒与能量流动",
          "玉质温雅，寓意君子之德、平安与圆满。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p028-099/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p028-099/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p028-099/detail_01.webp")
        ],
        "tags": [
          "水晶、玉",
          "水晶能量",
          "手链手串"
        ],
        "price": 200.0,
        "currency": "USD"
      },
      {
        "id": "product-029-100",
        "code": "029",
        "name": "鹤梦承愿",
        "sourceName": "普陀山文创集黑曜石手串男水晶马年本命佛银曜石女手链送生日礼物",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "水晶银清修圆珠以水晶、银为核心元素。水晶通透澄明，寓意净化、清醒与能量流动；银质清亮，寓意洁净、护佑与灵动。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。",
        "details": [
          "水晶银清修圆珠以水晶、银为核心元素。水晶通透澄明，寓意净化、清醒与能量流动",
          "银质清亮，寓意洁净、护佑与灵动。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p029-100/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p029-100/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p029-100/detail_01.webp")
        ],
        "tags": [
          "水晶、银",
          "水晶能量",
          "手链手串"
        ],
        "price": 178.0,
        "currency": "USD"
      },
      {
        "id": "product-034-101",
        "code": "034",
        "name": "秋水清圆",
        "sourceName": "普陀山文创集天然黄水晶手串女转运珠虎眼石手链旺财运聚财黄塔晶",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "发晶水晶清修圆珠以发晶、水晶为核心元素。发晶内含金丝般晶体，寓意聚财、坚定与向上生长；水晶通透澄明，寓意净化、清醒与能量流动。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为…",
        "details": [
          "发晶水晶清修圆珠以发晶、水晶为核心元素。发晶内含金丝般晶体，寓意聚财、坚定与向上生长",
          "水晶通透澄明，寓意净化、清醒与能量流动。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p034-101/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p034-101/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p034-101/detail_01.webp")
        ],
        "tags": [
          "发晶、水晶",
          "水晶能量",
          "手链手串"
        ],
        "price": 178.0,
        "currency": "USD"
      },
      {
        "id": "product-037-102",
        "code": "037",
        "name": "春岚知归",
        "sourceName": "普陀山文创集天然海蓝宝补水手串女款水晶手链送女朋友本命年礼物",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "水晶花清修圆珠以水晶、花为核心元素。水晶通透澄明，寓意净化、清醒与能量流动；花香意象柔美，寓意舒展、悦己与生机。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。",
        "details": [
          "水晶花清修圆珠以水晶、花为核心元素。水晶通透澄明，寓意净化、清醒与能量流动",
          "花香意象柔美，寓意舒展、悦己与生机。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p037-102/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p037-102/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p037-102/detail_01.webp")
        ],
        "tags": [
          "水晶、花",
          "水晶能量",
          "手链手串"
        ],
        "price": 122.0,
        "currency": "USD"
      },
      {
        "id": "product-039-103",
        "code": "039",
        "name": "长风福至",
        "sourceName": "[普陀山直发]天然粉水晶招桃花手链女款粉晶转运珠手串送闺蜜礼物",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "水晶和田玉花神凝香以水晶、和田玉、玉、花为核心元素。水晶通透澄明，寓意净化、清醒与能量流动；和田玉温润含蓄，寓意仁和、圆满与福泽绵长；玉质温雅，寓意君子之德、平安与圆满；花香意象柔美，寓意…",
        "details": [
          "水晶和田玉花神凝香以水晶、和田玉、玉、花为核心元素。水晶通透澄明，寓意净化、清醒与能量流动",
          "和田玉温润含蓄，寓意仁和、圆满与福泽绵长",
          "玉质温雅，寓意君子之德、平安与圆满",
          "花香意象柔美，寓意舒展、悦己与生机。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p039-103/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p039-103/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p039-103/detail_01.webp")
        ],
        "tags": [
          "水晶、和田玉、玉、花",
          "水晶能量",
          "手链手串"
        ],
        "price": 130.0,
        "currency": "USD"
      },
      {
        "id": "product-042-104",
        "code": "042",
        "name": "檐雨静好",
        "sourceName": "【普陀山直发】海蓝宝手串女天然水晶转运珠情绪稳定精致手链礼物",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "水晶清修圆珠以水晶为核心元素。水晶通透澄明，寓意净化、清醒与能量流动。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。",
        "details": [
          "水晶清修圆珠以水晶为核心元素。水晶通透澄明，寓意净化、清醒与能量流动。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p042-104/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p042-104/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p042-104/detail_01.webp")
        ],
        "tags": [
          "水晶",
          "水晶能量",
          "手链手串"
        ],
        "price": 108.0,
        "currency": "USD"
      },
      {
        "id": "product-043-105",
        "code": "043",
        "name": "清泉生辉",
        "sourceName": "【普陀山直发】绿幽灵天然水晶女手链满天星千层串珠聚宝盆手串男",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "水晶清修圆珠以水晶为核心元素。水晶通透澄明，寓意净化、清醒与能量流动。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。",
        "details": [
          "水晶清修圆珠以水晶为核心元素。水晶通透澄明，寓意净化、清醒与能量流动。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p043-105/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p043-105/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p043-105/detail_01.webp")
        ],
        "tags": [
          "水晶",
          "水晶能量",
          "手链手串"
        ],
        "price": 118.0,
        "currency": "USD"
      },
      {
        "id": "product-050-106",
        "code": "050",
        "name": "晚香听泉",
        "sourceName": "【普陀山直发】天然白水晶手串海蓝宝手链水晶原创设计女友款礼物",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "水晶玉清修圆珠以水晶、玉为核心元素。水晶通透澄明，寓意净化、清醒与能量流动；玉质温雅，寓意君子之德、平安与圆满。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。",
        "details": [
          "水晶玉清修圆珠以水晶、玉为核心元素。水晶通透澄明，寓意净化、清醒与能量流动",
          "玉质温雅，寓意君子之德、平安与圆满。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p050-106/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p050-106/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p050-106/detail_01.webp")
        ],
        "tags": [
          "水晶、玉",
          "水晶能量",
          "手链手串"
        ],
        "price": 133.0,
        "currency": "USD"
      },
      {
        "id": "product-051-107",
        "code": "051",
        "name": "澄心向暖",
        "sourceName": "【普陀山直发】天然切白水晶手链女手串收藏级佛珠送女朋友礼物",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "水晶玉清修圆珠以水晶、玉为核心元素。水晶通透澄明，寓意净化、清醒与能量流动；玉质温雅，寓意君子之德、平安与圆满。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。",
        "details": [
          "水晶玉清修圆珠以水晶、玉为核心元素。水晶通透澄明，寓意净化、清醒与能量流动",
          "玉质温雅，寓意君子之德、平安与圆满。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p051-107/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p051-107/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p051-107/detail_01.webp")
        ],
        "tags": [
          "水晶、玉",
          "水晶能量",
          "手链手串"
        ],
        "price": 134.0,
        "currency": "USD"
      },
      {
        "id": "product-053-108",
        "code": "053",
        "name": "云阶含光",
        "sourceName": "普陀山紫定上岸九紫离火乌拉圭紫水晶原石手串旺运手链送女友礼物",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "水晶清修圆珠以水晶为核心元素。水晶通透澄明，寓意净化、清醒与能量流动。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。",
        "details": [
          "水晶清修圆珠以水晶为核心元素。水晶通透澄明，寓意净化、清醒与能量流动。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p053-108/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p053-108/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p053-108/detail_01.webp")
        ],
        "tags": [
          "水晶",
          "水晶能量",
          "手链手串"
        ],
        "price": 109.0,
        "currency": "USD"
      },
      {
        "id": "product-054-109",
        "code": "054",
        "name": "归舟清安",
        "sourceName": "【普陀山】收藏级天然海蓝宝手串白水晶双圈手链本命年送女友礼物",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "水晶清修圆珠以水晶为核心元素。水晶通透澄明，寓意净化、清醒与能量流动。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。",
        "details": [
          "水晶清修圆珠以水晶为核心元素。水晶通透澄明，寓意净化、清醒与能量流动。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p054-109/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p054-109/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p054-109/detail_01.webp")
        ],
        "tags": [
          "水晶",
          "水晶能量",
          "手链手串"
        ],
        "price": 108.0,
        "currency": "USD"
      },
      {
        "id": "product-055-110",
        "code": "055",
        "name": "听雪入怀",
        "sourceName": "【普陀山】天然白水晶手链女礼物白阿塞黄水晶手串小众轻奢饰品",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "水晶清修圆珠以水晶为核心元素。水晶通透澄明，寓意净化、清醒与能量流动。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。",
        "details": [
          "水晶清修圆珠以水晶为核心元素。水晶通透澄明，寓意净化、清醒与能量流动。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p055-110/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p055-110/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p055-110/detail_01.webp")
        ],
        "tags": [
          "水晶",
          "水晶能量",
          "手链手串"
        ],
        "price": 133.0,
        "currency": "USD"
      },
      {
        "id": "product-056-111",
        "code": "056",
        "name": "照心祥瑞",
        "sourceName": "【普陀山】招财天然金发晶手链女上岸锦鲤精致好运黄水晶手串礼物",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "发晶水晶清修圆珠以发晶、水晶为核心元素。发晶内含金丝般晶体，寓意聚财、坚定与向上生长；水晶通透澄明，寓意净化、清醒与能量流动。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为…",
        "details": [
          "发晶水晶清修圆珠以发晶、水晶为核心元素。发晶内含金丝般晶体，寓意聚财、坚定与向上生长",
          "水晶通透澄明，寓意净化、清醒与能量流动。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p056-111/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p056-111/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p056-111/detail_01.webp")
        ],
        "tags": [
          "发晶、水晶",
          "水晶能量",
          "手链手串"
        ],
        "price": 109.0,
        "currency": "USD"
      },
      {
        "id": "product-057-112",
        "code": "057",
        "name": "闻磬知意",
        "sourceName": "【普陀山】天然黄水晶手链金虎眼石双圈手串招财转运珠佛珠女款",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "水晶清修圆珠以水晶为核心元素。水晶通透澄明，寓意净化、清醒与能量流动。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。",
        "details": [
          "水晶清修圆珠以水晶为核心元素。水晶通透澄明，寓意净化、清醒与能量流动。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p057-112/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p057-112/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p057-112/detail_01.webp")
        ],
        "tags": [
          "水晶",
          "水晶能量",
          "手链手串"
        ],
        "price": 115.0,
        "currency": "USD"
      },
      {
        "id": "product-058-113",
        "code": "058",
        "name": "静澜安然",
        "sourceName": "【普陀山直发】冰种海蓝宝白水晶手串女款天然蓝色水晶转运珠手链",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "水晶清修圆珠以水晶为核心元素。水晶通透澄明，寓意净化、清醒与能量流动。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。",
        "details": [
          "水晶清修圆珠以水晶为核心元素。水晶通透澄明，寓意净化、清醒与能量流动。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p058-113/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p058-113/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p058-113/detail_01.webp")
        ],
        "tags": [
          "水晶",
          "水晶能量",
          "手链手串"
        ],
        "price": 136.0,
        "currency": "USD"
      },
      {
        "id": "product-059-114",
        "code": "059",
        "name": "安行云起",
        "sourceName": "【普陀山直发】暴富黄水晶手链招财运事业天然黄塔晶手串女串珠饰",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "水晶清修圆珠以水晶为核心元素。水晶通透澄明，寓意净化、清醒与能量流动。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。",
        "details": [
          "水晶清修圆珠以水晶为核心元素。水晶通透澄明，寓意净化、清醒与能量流动。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p059-114/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p059-114/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p059-114/detail_01.webp")
        ],
        "tags": [
          "水晶",
          "水晶能量",
          "手链手串"
        ],
        "price": 150.0,
        "currency": "USD"
      },
      {
        "id": "product-060-115",
        "code": "060",
        "name": "一念守愿",
        "sourceName": "【普陀山】天然金虎眼石手串女招财黄水晶手链双圈财富送女友礼物",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "水晶清修圆珠以水晶为核心元素。水晶通透澄明，寓意净化、清醒与能量流动。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。",
        "details": [
          "水晶清修圆珠以水晶为核心元素。水晶通透澄明，寓意净化、清醒与能量流动。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p060-115/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p060-115/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p060-115/detail_01.webp")
        ],
        "tags": [
          "水晶",
          "水晶能量",
          "手链手串"
        ],
        "price": 206.0,
        "currency": "USD"
      },
      {
        "id": "product-126-116",
        "code": "126",
        "name": "云岫同心",
        "sourceName": "青城山官方正品金发晶黄水晶手串设计款招财转运水晶手链设计款女",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "发晶水晶清修圆珠以发晶、水晶、银为核心元素。发晶内含金丝般晶体，寓意聚财、坚定与向上生长；水晶通透澄明，寓意净化、清醒与能量流动；银质清亮，寓意洁净、护佑与灵动。圆珠成串，象征周而复始、福…",
        "details": [
          "发晶水晶清修圆珠以发晶、水晶、银为核心元素。发晶内含金丝般晶体，寓意聚财、坚定与向上生长",
          "水晶通透澄明，寓意净化、清醒与能量流动",
          "银质清亮，寓意洁净、护佑与灵动。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p126-116/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p126-116/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p126-116/detail_01.webp")
        ],
        "tags": [
          "发晶、水晶、银",
          "水晶能量",
          "手链手串"
        ],
        "price": 975.0,
        "currency": "USD"
      },
      {
        "id": "product-136-117",
        "code": "136",
        "name": "松风承愿",
        "sourceName": "青城山天然蜜蜡手串 正品鸡油黄琥珀珍珠手链 男女款盘玩佛珠念珠",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "水晶蜜蜡清修圆珠以水晶、蜜蜡、琥珀、珍珠为核心元素。水晶通透澄明，寓意净化、清醒与能量流动；蜜蜡温暖明亮，寓意丰盛、亲和与岁月沉淀；琥珀凝结时光，寓意温暖、守护与安然；珍珠莹润柔和，寓意圆…",
        "details": [
          "水晶蜜蜡清修圆珠以水晶、蜜蜡、琥珀、珍珠为核心元素。水晶通透澄明，寓意净化、清醒与能量流动",
          "蜜蜡温暖明亮，寓意丰盛、亲和与岁月沉淀",
          "琥珀凝结时光，寓意温暖、守护与安然",
          "珍珠莹润柔和，寓意圆融、珍贵与温婉。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p136-117/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p136-117/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p136-117/detail_01.webp")
        ],
        "tags": [
          "水晶、蜜蜡、琥珀、珍珠",
          "水晶能量",
          "手链手串"
        ],
        "price": 633.0,
        "currency": "USD"
      },
      {
        "id": "product-149-118",
        "code": "149",
        "name": "月照清圆",
        "sourceName": "青城山多米尼加矿海纹石手串蓝龟背纹k金渡母水晶送女生礼物手链",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "水晶蜜蜡清修圆珠以水晶、蜜蜡为核心元素。水晶通透澄明，寓意净化、清醒与能量流动；蜜蜡温暖明亮，寓意丰盛、亲和与岁月沉淀。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。",
        "details": [
          "水晶蜜蜡清修圆珠以水晶、蜜蜡为核心元素。水晶通透澄明，寓意净化、清醒与能量流动",
          "蜜蜡温暖明亮，寓意丰盛、亲和与岁月沉淀。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p149-118/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p149-118/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p149-118/detail_01.webp")
        ],
        "tags": [
          "水晶、蜜蜡",
          "水晶能量",
          "手链手串"
        ],
        "price": 1262.0,
        "currency": "USD"
      },
      {
        "id": "product-208-119",
        "code": "208",
        "name": "静山知归",
        "sourceName": "青城山官方天然金发晶手串招财富收藏巴西金钛晶黄水晶手链男女款",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "发晶水晶清修圆珠以发晶、水晶、银为核心元素。发晶内含金丝般晶体，寓意聚财、坚定与向上生长；水晶通透澄明，寓意净化、清醒与能量流动；银质清亮，寓意洁净、护佑与灵动。圆珠成串，象征周而复始、福…",
        "details": [
          "发晶水晶清修圆珠以发晶、水晶、银为核心元素。发晶内含金丝般晶体，寓意聚财、坚定与向上生长",
          "水晶通透澄明，寓意净化、清醒与能量流动",
          "银质清亮，寓意洁净、护佑与灵动。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p208-119/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p208-119/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p208-119/detail_01.webp")
        ],
        "tags": [
          "发晶、水晶、银",
          "水晶能量",
          "手链手串"
        ],
        "price": 178.0,
        "currency": "USD"
      },
      {
        "id": "product-210-120",
        "code": "210",
        "name": "星河福至",
        "sourceName": "青城山天然紫水晶手串乌深紫高级感九紫离火生日手链女生百搭日常",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "水晶银清修圆珠以水晶、银为核心元素。水晶通透澄明，寓意净化、清醒与能量流动；银质清亮，寓意洁净、护佑与灵动。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。",
        "details": [
          "水晶银清修圆珠以水晶、银为核心元素。水晶通透澄明，寓意净化、清醒与能量流动",
          "银质清亮，寓意洁净、护佑与灵动。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p210-120/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p210-120/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p210-120/detail_01.webp")
        ],
        "tags": [
          "水晶、银",
          "水晶能量",
          "手链手串"
        ],
        "price": 131.0,
        "currency": "USD"
      },
      {
        "id": "product-225-121",
        "code": "225",
        "name": "福泽静好",
        "sourceName": "青城山天然巴西绿幽灵聚宝盆手串水晶素圈手链情侣款生日送礼百搭",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "水晶银清修圆珠以水晶、银为核心元素。水晶通透澄明，寓意净化、清醒与能量流动；银质清亮，寓意洁净、护佑与灵动。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。",
        "details": [
          "水晶银清修圆珠以水晶、银为核心元素。水晶通透澄明，寓意净化、清醒与能量流动",
          "银质清亮，寓意洁净、护佑与灵动。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p225-121/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p225-121/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p225-121/detail_01.webp")
        ],
        "tags": [
          "水晶、银",
          "水晶能量",
          "手链手串"
        ],
        "price": 2157.0,
        "currency": "USD"
      }
    ]
  },
  {
    "id": "bracelet-jade-stone",
    "parent": "bracelet",
    "title": "玉石水晶",
    "subtitle": "Jade & Stone",
    "description": "偏清润、平和、内敛的玉石系列，适合平安、圆满与日常礼赠。",
    "items": [
      {
        "id": "product-044-55",
        "code": "044",
        "name": "拂晓清安",
        "sourceName": "【普陀山直发】天然三圈石榴石手串和田玉手链轻奢简约百搭送礼物",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "和田玉玉清修圆珠以和田玉、玉为核心元素。和田玉温润含蓄，寓意仁和、圆满与福泽绵长；玉质温雅，寓意君子之德、平安与圆满。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。",
        "details": [
          "和田玉玉清修圆珠以和田玉、玉为核心元素。和田玉温润含蓄，寓意仁和、圆满与福泽绵长",
          "玉质温雅，寓意君子之德、平安与圆满。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p044-055/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p044-055/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p044-055/detail_01.webp")
        ],
        "tags": [
          "和田玉、玉",
          "玉石水晶",
          "手链手串"
        ],
        "price": 133.0,
        "currency": "USD"
      },
      {
        "id": "product-046-56",
        "code": "046",
        "name": "玄光入怀",
        "sourceName": "【普陀山直发】猫爪菩提根手串男女炭烧高密白玉菩提手链文玩佛珠",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "菩提玉清修圆珠以菩提、玉、花为核心元素。菩提承载修心之意，寓意觉悟、沉静与日日精进；玉质温雅，寓意君子之德、平安与圆满；花香意象柔美，寓意舒展、悦己与生机。圆珠成串，象征周而复始、福气流转…",
        "details": [
          "菩提玉清修圆珠以菩提、玉、花为核心元素。菩提承载修心之意，寓意觉悟、沉静与日日精进",
          "玉质温雅，寓意君子之德、平安与圆满",
          "花香意象柔美，寓意舒展、悦己与生机。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p046-056/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p046-056/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p046-056/detail_01.webp")
        ],
        "tags": [
          "菩提、玉、花",
          "玉石水晶",
          "手链手串"
        ],
        "price": 134.0,
        "currency": "USD"
      },
      {
        "id": "product-084-57",
        "code": "084",
        "name": "照夜祥瑞",
        "sourceName": "青城山官方文创珠宝天然和田碧玉手串招财趴趴猫银饰手链女显白绿",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "银玉清修圆珠以银、玉为核心元素。银质清亮，寓意洁净、护佑与灵动；玉质温雅，寓意君子之德、平安与圆满。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。",
        "details": [
          "银玉清修圆珠以银、玉为核心元素。银质清亮，寓意洁净、护佑与灵动",
          "玉质温雅，寓意君子之德、平安与圆满。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p084-057/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p084-057/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p084-057/detail_01.webp")
        ],
        "tags": [
          "银、玉",
          "玉石水晶",
          "手链手串"
        ],
        "price": 706.0,
        "currency": "USD"
      },
      {
        "id": "product-085-58",
        "code": "085",
        "name": "素愿知意",
        "sourceName": "青城山官方文创珠宝和田白玉新疆米达手串配碧玉烟紫珠手链女饰品",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "银玉清修圆珠以银、玉为核心元素。银质清亮，寓意洁净、护佑与灵动；玉质温雅，寓意君子之德、平安与圆满。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。",
        "details": [
          "银玉清修圆珠以银、玉为核心元素。银质清亮，寓意洁净、护佑与灵动",
          "玉质温雅，寓意君子之德、平安与圆满。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p085-058/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p085-058/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p085-058/detail_01.webp")
        ],
        "tags": [
          "银、玉",
          "玉石水晶",
          "手链手串"
        ],
        "price": 316.0,
        "currency": "USD"
      },
      {
        "id": "product-087-59",
        "code": "087",
        "name": "微澜安然",
        "sourceName": "青城山官方正品新疆和田白玉圆珠手串晴水绿葫芦单圈女款手链礼品",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "银玉葫芦纳福以银、玉为核心元素。银质清亮，寓意洁净、护佑与灵动；玉质温雅，寓意君子之德、平安与圆满。葫芦形制取纳福纳吉、圆满安康之意，适合日常佩戴、修心静坐或作为东方礼赠。",
        "details": [
          "银玉葫芦纳福以银、玉为核心元素。银质清亮，寓意洁净、护佑与灵动",
          "玉质温雅，寓意君子之德、平安与圆满。葫芦形制取纳福纳吉、圆满安康之意，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p087-059/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p087-059/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p087-059/detail_01.webp")
        ],
        "tags": [
          "银、玉",
          "玉石水晶",
          "手链手串"
        ],
        "price": 105.0,
        "currency": "USD"
      },
      {
        "id": "product-088-60",
        "code": "088",
        "name": "流光云起",
        "sourceName": "青城山官方正品天然和田玉烟紫多圈手串招财进宝葫芦碧玉双圈手串",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "和田玉银葫芦纳福以和田玉、银、玉为核心元素。和田玉温润含蓄，寓意仁和、圆满与福泽绵长；银质清亮，寓意洁净、护佑与灵动；玉质温雅，寓意君子之德、平安与圆满。葫芦形制取纳福纳吉、圆满安康之意，…",
        "details": [
          "和田玉银葫芦纳福以和田玉、银、玉为核心元素。和田玉温润含蓄，寓意仁和、圆满与福泽绵长",
          "银质清亮，寓意洁净、护佑与灵动",
          "玉质温雅，寓意君子之德、平安与圆满。葫芦形制取纳福纳吉、圆满安康之意，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p088-060/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p088-060/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p088-060/detail_01.webp")
        ],
        "tags": [
          "和田玉、银、玉",
          "玉石水晶",
          "手链手串"
        ],
        "price": 597.0,
        "currency": "USD"
      },
      {
        "id": "product-090-61",
        "code": "090",
        "name": "明心护念",
        "sourceName": "青城山官方正品天然和田白玉手串葫芦碧玉绿意盈怀古风手链气质女",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "银玉葫芦纳福以银、玉为核心元素。银质清亮，寓意洁净、护佑与灵动；玉质温雅，寓意君子之德、平安与圆满。葫芦形制取纳福纳吉、圆满安康之意，适合日常佩戴、修心静坐或作为东方礼赠。",
        "details": [
          "银玉葫芦纳福以银、玉为核心元素。银质清亮，寓意洁净、护佑与灵动",
          "玉质温雅，寓意君子之德、平安与圆满。葫芦形制取纳福纳吉、圆满安康之意，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p090-061/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p090-061/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p090-061/detail_01.webp")
        ],
        "tags": [
          "银、玉",
          "玉石水晶",
          "手链手串"
        ],
        "price": 272.0,
        "currency": "USD"
      },
      {
        "id": "product-099-62",
        "code": "099",
        "name": "竹影纳福",
        "sourceName": "青城山【玉葫纳福】天然和田玉碧玉葫芦皮质手链复古百搭送礼好物",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "和田玉银葫芦纳福以和田玉、银、玉为核心元素。和田玉温润含蓄，寓意仁和、圆满与福泽绵长；银质清亮，寓意洁净、护佑与灵动；玉质温雅，寓意君子之德、平安与圆满。葫芦形制取纳福纳吉、圆满安康之意，…",
        "details": [
          "和田玉银葫芦纳福以和田玉、银、玉为核心元素。和田玉温润含蓄，寓意仁和、圆满与福泽绵长",
          "银质清亮，寓意洁净、护佑与灵动",
          "玉质温雅，寓意君子之德、平安与圆满。葫芦形制取纳福纳吉、圆满安康之意，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p099-062/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p099-062/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p099-062/detail_01.webp")
        ],
        "tags": [
          "和田玉、银、玉",
          "玉石水晶",
          "手链手串"
        ],
        "price": 154.0,
        "currency": "USD"
      },
      {
        "id": "product-102-63",
        "code": "102",
        "name": "鹤梦寄月",
        "sourceName": "青城山【青葫纳福】青城山和田玉碧玉葫芦手表S925银手链复古气质",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "和田玉S925银葫芦纳福以和田玉、S925银、S925银、银、玉为核心元素。和田玉温润含蓄，寓意仁和、圆满与福泽绵长；银质清亮，寓意洁净、护佑与灵动；玉质温雅，寓意君子之德、平安与圆满。葫…",
        "details": [
          "和田玉S925银葫芦纳福以和田玉、S925银、S925银、银、玉为核心元素。和田玉温润含蓄，寓意仁和、圆满与福泽绵长",
          "银质清亮，寓意洁净、护佑与灵动",
          "玉质温雅，寓意君子之德、平安与圆满。葫芦形制取纳福纳吉、圆满安康之意，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p102-063/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p102-063/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p102-063/detail_01.webp")
        ],
        "tags": [
          "和田玉、S925银、S925银、银、玉",
          "玉石水晶",
          "手链手串"
        ],
        "price": 476.0,
        "currency": "USD"
      },
      {
        "id": "product-107-64",
        "code": "107",
        "name": "秋水照愿",
        "sourceName": "青城山【半初】天然和田玉黄玉手串单圈玉石设计新中式百搭送礼物",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "和田玉银清修圆珠以和田玉、银、玉为核心元素。和田玉温润含蓄，寓意仁和、圆满与福泽绵长；银质清亮，寓意洁净、护佑与灵动；玉质温雅，寓意君子之德、平安与圆满。圆珠成串，象征周而复始、福气流转，…",
        "details": [
          "和田玉银清修圆珠以和田玉、银、玉为核心元素。和田玉温润含蓄，寓意仁和、圆满与福泽绵长",
          "银质清亮，寓意洁净、护佑与灵动",
          "玉质温雅，寓意君子之德、平安与圆满。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p107-064/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p107-064/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p107-064/detail_01.webp")
        ],
        "tags": [
          "和田玉、银、玉",
          "玉石水晶",
          "手链手串"
        ],
        "price": 780.0,
        "currency": "USD"
      },
      {
        "id": "product-116-65",
        "code": "116",
        "name": "春岚静意",
        "sourceName": "青城山官方天然和田玉手串配蜜蜡圆珠晴水玉石手链单圈送女友礼物",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "和田玉蜜蜡清修圆珠以和田玉、蜜蜡、银、玉为核心元素。和田玉温润含蓄，寓意仁和、圆满与福泽绵长；蜜蜡温暖明亮，寓意丰盛、亲和与岁月沉淀；银质清亮，寓意洁净、护佑与灵动；玉质温雅，寓意君子之德…",
        "details": [
          "和田玉蜜蜡清修圆珠以和田玉、蜜蜡、银、玉为核心元素。和田玉温润含蓄，寓意仁和、圆满与福泽绵长",
          "蜜蜡温暖明亮，寓意丰盛、亲和与岁月沉淀",
          "银质清亮，寓意洁净、护佑与灵动",
          "玉质温雅，寓意君子之德、平安与圆满。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p116-065/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p116-065/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p116-065/detail_01.webp")
        ],
        "tags": [
          "和田玉、蜜蜡、银、玉",
          "玉石水晶",
          "手链手串"
        ],
        "price": 194.0,
        "currency": "USD"
      },
      {
        "id": "product-124-66",
        "code": "124",
        "name": "长风心宁",
        "sourceName": "青城山官方和田玉碧玉桶珠转运手链设计感编绳小众单珠手绳可调节",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "和田玉银清修圆珠以和田玉、银、玉为核心元素。和田玉温润含蓄，寓意仁和、圆满与福泽绵长；银质清亮，寓意洁净、护佑与灵动；玉质温雅，寓意君子之德、平安与圆满。圆珠成串，象征周而复始、福气流转，…",
        "details": [
          "和田玉银清修圆珠以和田玉、银、玉为核心元素。和田玉温润含蓄，寓意仁和、圆满与福泽绵长",
          "银质清亮，寓意洁净、护佑与灵动",
          "玉质温雅，寓意君子之德、平安与圆满。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p124-066/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p124-066/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p124-066/detail_01.webp")
        ],
        "tags": [
          "和田玉、银、玉",
          "玉石水晶",
          "手链手串"
        ],
        "price": 130.0,
        "currency": "USD"
      },
      {
        "id": "product-163-67",
        "code": "163",
        "name": "檐雨长宁",
        "sourceName": "青城山天然蜜蜡手串俄料鸡油黄道系花丝金镶玉葫芦原创国风手链女",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "翡翠蜜蜡葫芦纳福以翡翠、蜜蜡、琥珀、银、玉、花为核心元素。翡翠清润有生机，寓意福气、贵气与长久安宁；蜜蜡温暖明亮，寓意丰盛、亲和与岁月沉淀；琥珀凝结时光，寓意温暖、守护与安然；银质清亮，寓…",
        "details": [
          "翡翠蜜蜡葫芦纳福以翡翠、蜜蜡、琥珀、银、玉、花为核心元素。翡翠清润有生机，寓意福气、贵气与长久安宁",
          "蜜蜡温暖明亮，寓意丰盛、亲和与岁月沉淀",
          "琥珀凝结时光，寓意温暖、守护与安然",
          "银质清亮，寓意洁净、护佑与灵动"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p163-067/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p163-067/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p163-067/detail_01.webp")
        ],
        "tags": [
          "翡翠、蜜蜡、琥珀、银、玉、花",
          "玉石水晶",
          "手链手串"
        ],
        "price": 548.0,
        "currency": "USD"
      },
      {
        "id": "product-164-68",
        "code": "164",
        "name": "清泉安和",
        "sourceName": "青城山青海山料和田玉高冰晴水料手串猛犸度母原创设计女款手链",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "和田玉银清修圆珠以和田玉、银、玉为核心元素。和田玉温润含蓄，寓意仁和、圆满与福泽绵长；银质清亮，寓意洁净、护佑与灵动；玉质温雅，寓意君子之德、平安与圆满。圆珠成串，象征周而复始、福气流转，…",
        "details": [
          "和田玉银清修圆珠以和田玉、银、玉为核心元素。和田玉温润含蓄，寓意仁和、圆满与福泽绵长",
          "银质清亮，寓意洁净、护佑与灵动",
          "玉质温雅，寓意君子之德、平安与圆满。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p164-068/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p164-068/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p164-068/detail_01.webp")
        ],
        "tags": [
          "和田玉、银、玉",
          "玉石水晶",
          "手链手串"
        ],
        "price": 587.0,
        "currency": "USD"
      },
      {
        "id": "product-169-69",
        "code": "169",
        "name": "晚香怀真",
        "sourceName": "青城山官方正品白蜡小米珠双圈手链烟紫玉福禄平安蜜蜡手串女款",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "蜜蜡琥珀清修圆珠以蜜蜡、琥珀、银、玉、花为核心元素。蜜蜡温暖明亮，寓意丰盛、亲和与岁月沉淀；琥珀凝结时光，寓意温暖、守护与安然；银质清亮，寓意洁净、护佑与灵动；玉质温雅，寓意君子之德、平安…",
        "details": [
          "蜜蜡琥珀清修圆珠以蜜蜡、琥珀、银、玉、花为核心元素。蜜蜡温暖明亮，寓意丰盛、亲和与岁月沉淀",
          "琥珀凝结时光，寓意温暖、守护与安然",
          "银质清亮，寓意洁净、护佑与灵动",
          "玉质温雅，寓意君子之德、平安与圆满"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p169-069/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p169-069/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p169-069/detail_01.webp")
        ],
        "tags": [
          "蜜蜡、琥珀、银、玉、花",
          "玉石水晶",
          "手链手串"
        ],
        "price": 881.0,
        "currency": "USD"
      },
      {
        "id": "product-202-70",
        "code": "202",
        "name": "澄心如愿",
        "sourceName": "青城山官方保真保正天然青海白玉阴沉老山檀太太牌和田玉手串",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "和田玉檀清修圆珠以和田玉、檀、银、玉为核心元素。和田玉温润含蓄，寓意仁和、圆满与福泽绵长；檀香气息沉稳，寓意安神、辟浊与沉静守正；银质清亮，寓意洁净、护佑与灵动；玉质温雅，寓意君子之德、平…",
        "details": [
          "和田玉檀清修圆珠以和田玉、檀、银、玉为核心元素。和田玉温润含蓄，寓意仁和、圆满与福泽绵长",
          "檀香气息沉稳，寓意安神、辟浊与沉静守正",
          "银质清亮，寓意洁净、护佑与灵动",
          "玉质温雅，寓意君子之德、平安与圆满。香韵随身，取清心定气、辟浊纳祥之意，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p202-070/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p202-070/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p202-070/detail_01.webp")
        ],
        "tags": [
          "和田玉、檀、银、玉",
          "玉石水晶",
          "手链手串"
        ],
        "price": 579.0,
        "currency": "USD"
      }
    ]
  },
  {
    "id": "bracelet-turquoise",
    "parent": "bracelet",
    "title": "绿松雅意",
    "subtitle": "Turquoise",
    "description": "蓝绿矿物色调，带来清爽、松弛与东方装饰感。",
    "items": [
      {
        "id": "product-036-122",
        "code": "036",
        "name": "兰若生辉",
        "sourceName": "普陀山文创集优化绿松色玉石手串女收藏级高瓷高端手链送女朋友",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "绿松石蜜蜡清修圆珠以绿松石、蜜蜡、玉为核心元素。绿松石色泽清润，寓意平安、疗愈与长久护佑；蜜蜡温暖明亮，寓意丰盛、亲和与岁月沉淀；玉质温雅，寓意君子之德、平安与圆满。圆珠成串，象征周而复始…",
        "details": [
          "绿松石蜜蜡清修圆珠以绿松石、蜜蜡、玉为核心元素。绿松石色泽清润，寓意平安、疗愈与长久护佑",
          "蜜蜡温暖明亮，寓意丰盛、亲和与岁月沉淀",
          "玉质温雅，寓意君子之德、平安与圆满。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p036-122/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p036-122/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p036-122/detail_01.webp")
        ],
        "tags": [
          "绿松石、蜜蜡、玉",
          "绿松雅意",
          "手链手串"
        ],
        "price": 133.0,
        "currency": "USD"
      },
      {
        "id": "product-070-123",
        "code": "070",
        "name": "朝露听泉",
        "sourceName": "青城山花珀手串官方珠宝天然琥珀绿松石手链随形太阳珠银首饰品女",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "绿松石琥珀花神凝香以绿松石、琥珀、银、花为核心元素。绿松石色泽清润，寓意平安、疗愈与长久护佑；琥珀凝结时光，寓意温暖、守护与安然；银质清亮，寓意洁净、护佑与灵动；花香意象柔美，寓意舒展、悦…",
        "details": [
          "绿松石琥珀花神凝香以绿松石、琥珀、银、花为核心元素。绿松石色泽清润，寓意平安、疗愈与长久护佑",
          "琥珀凝结时光，寓意温暖、守护与安然",
          "银质清亮，寓意洁净、护佑与灵动",
          "花香意象柔美，寓意舒展、悦己与生机。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p070-123/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p070-123/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p070-123/detail_01.webp")
        ],
        "tags": [
          "绿松石、琥珀、银、花",
          "绿松雅意",
          "手链手串"
        ],
        "price": 190.0,
        "currency": "USD"
      }
    ]
  },
  {
    "id": "bracelet-lapis",
    "parent": "bracelet",
    "title": "青金星河",
    "subtitle": "Lapis Lazuli",
    "description": "深蓝与金色星点感，适合沉稳、智慧与仪式感搭配。",
    "items": [
      {
        "id": "product-204-124",
        "code": "204",
        "name": "清晖向暖",
        "sourceName": "青城山官方正品原创设计淡水珍珠猛犸度母青金石手串精致日常百搭",
        "type": "手链手串",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "青金石珍珠清修圆珠以青金石、珍珠、S925银、银为核心元素。青金石深蓝如夜空，寓意智慧、专注与贵气；珍珠莹润柔和，寓意圆融、珍贵与温婉；银质清亮，寓意洁净、护佑与灵动。圆珠成串，象征周而复…",
        "details": [
          "青金石珍珠清修圆珠以青金石、珍珠、S925银、银为核心元素。青金石深蓝如夜空，寓意智慧、专注与贵气",
          "珍珠莹润柔和，寓意圆融、珍贵与温婉",
          "银质清亮，寓意洁净、护佑与灵动。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p204-124/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p204-124/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p204-124/detail_01.webp")
        ],
        "tags": [
          "青金石、珍珠、S925银、银",
          "青金星河",
          "手链手串"
        ],
        "price": 390.0,
        "currency": "USD"
      }
    ]
  },
  {
    "id": "necklace-pendants",
    "parent": "necklace",
    "title": "吊坠挂件",
    "subtitle": "Pendants",
    "description": "可单独佩戴或组合搭配的坠饰系列。",
    "items": [
      {
        "id": "product-041-132",
        "code": "041",
        "name": "拂晓护念",
        "sourceName": "【普陀山直发】宝宝东南枝小挂件婴儿狗牙小孩外出随身桃木剑",
        "type": "项链吊坠",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "玄韵041以图片材质待复核为核心元素。材质与形制以图片和原商品信息为准，整体寓意安定、护佑与东方雅致。佩于胸前，取贴身守护、出入平安之意，适合日常佩戴、修心静坐或作为东方礼赠。",
        "details": [
          "玄韵041以图片材质待复核为核心元素。材质与形制以图片和原商品信息为准，整体寓意安定、护佑与东方雅致。佩于胸前，取贴身守护、出入平安之意，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p041-132/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p041-132/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p041-132/detail_01.webp")
        ],
        "tags": [
          "图片材质待复核",
          "吊坠挂件",
          "项链吊坠"
        ],
        "price": 131.0,
        "currency": "USD"
      },
      {
        "id": "product-048-133",
        "code": "048",
        "name": "玄光纳福",
        "sourceName": "【普陀山直发】宝宝别针平安孕妇小孩儿童外出安睡别惊桃木挂件",
        "type": "项链吊坠",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "玄韵048以图片材质待复核为核心元素。材质与形制以图片和原商品信息为准，整体寓意安定、护佑与东方雅致。佩于胸前，取贴身守护、出入平安之意，适合日常佩戴、修心静坐或作为东方礼赠。",
        "details": [
          "玄韵048以图片材质待复核为核心元素。材质与形制以图片和原商品信息为准，整体寓意安定、护佑与东方雅致。佩于胸前，取贴身守护、出入平安之意，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p048-133/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p048-133/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p048-133/detail_01.webp")
        ],
        "tags": [
          "图片材质待复核",
          "吊坠挂件",
          "项链吊坠"
        ],
        "price": 132.0,
        "currency": "USD"
      },
      {
        "id": "product-049-134",
        "code": "049",
        "name": "照夜寄月",
        "sourceName": "【普陀山直发】小李肥刀剑尚方宝剑饱斧桃木手工木雕送礼挂件摆件",
        "type": "项链吊坠",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "花玄韵以花为核心元素。花香意象柔美，寓意舒展、悦己与生机。佩于胸前，取贴身守护、出入平安之意，适合日常佩戴、修心静坐或作为东方礼赠。",
        "details": [
          "花玄韵以花为核心元素。花香意象柔美，寓意舒展、悦己与生机。佩于胸前，取贴身守护、出入平安之意，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p049-134/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p049-134/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p049-134/detail_01.webp")
        ],
        "tags": [
          "花",
          "吊坠挂件",
          "项链吊坠"
        ],
        "price": 133.0,
        "currency": "USD"
      },
      {
        "id": "product-061-135",
        "code": "061",
        "name": "微澜静意",
        "sourceName": "青城山天然原矿柿子红火焰纹南红玛瑙圆珠单珠diy珠宝手串吊坠",
        "type": "项链吊坠",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "南红玛瑙清修圆珠以南红、玛瑙、银为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门；玛瑙纹理沉稳，寓意安定心念、凝聚内在力量；银质清亮，寓意洁净、护佑与灵动。佩于胸前，取贴身守护、出入…",
        "details": [
          "南红玛瑙清修圆珠以南红、玛瑙、银为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门",
          "玛瑙纹理沉稳，寓意安定心念、凝聚内在力量",
          "银质清亮，寓意洁净、护佑与灵动。佩于胸前，取贴身守护、出入平安之意，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p061-135/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p061-135/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p061-135/detail_01.webp")
        ],
        "tags": [
          "南红、玛瑙、银",
          "吊坠挂件",
          "项链吊坠"
        ],
        "price": 371.0,
        "currency": "USD"
      },
      {
        "id": "product-062-136",
        "code": "062",
        "name": "流光心宁",
        "sourceName": "青城山天然俄料花蜡散珠手串蜜蜡琥珀单珠文玩饰品diy吊坠男女款",
        "type": "项链吊坠",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "蜜蜡琥珀花神凝香以蜜蜡、琥珀、银、花为核心元素。蜜蜡温暖明亮，寓意丰盛、亲和与岁月沉淀；琥珀凝结时光，寓意温暖、守护与安然；银质清亮，寓意洁净、护佑与灵动；花香意象柔美，寓意舒展、悦己与生…",
        "details": [
          "蜜蜡琥珀花神凝香以蜜蜡、琥珀、银、花为核心元素。蜜蜡温暖明亮，寓意丰盛、亲和与岁月沉淀",
          "琥珀凝结时光，寓意温暖、守护与安然",
          "银质清亮，寓意洁净、护佑与灵动",
          "花香意象柔美，寓意舒展、悦己与生机。佩于胸前，取贴身守护、出入平安之意，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p062-136/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p062-136/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p062-136/detail_01.webp")
        ],
        "tags": [
          "蜜蜡、琥珀、银、花",
          "吊坠挂件",
          "项链吊坠"
        ],
        "price": 117.0,
        "currency": "USD"
      },
      {
        "id": "product-067-137",
        "code": "067",
        "name": "明心长宁",
        "sourceName": "青城山文创珠宝南红葫芦吊坠挂件项链女款简约百搭官方正品旗舰店",
        "type": "项链吊坠",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "南红银葫芦纳福以南红、银为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门；银质清亮，寓意洁净、护佑与灵动。葫芦形制取纳福纳吉、圆满安康之意，适合日常佩戴、修心静坐或作为东方礼赠。",
        "details": [
          "南红银葫芦纳福以南红、银为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门",
          "银质清亮，寓意洁净、护佑与灵动。葫芦形制取纳福纳吉、圆满安康之意，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p067-137/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p067-137/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p067-137/detail_01.webp")
        ],
        "tags": [
          "南红、银",
          "吊坠挂件",
          "项链吊坠"
        ],
        "price": 129.0,
        "currency": "USD"
      },
      {
        "id": "product-077-138",
        "code": "077",
        "name": "竹影安和",
        "sourceName": "青城山【海上明月】南红随型珍珠单珠吊坠平安喜乐多样性切面手链",
        "type": "项链吊坠",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "南红珍珠清修圆珠以南红、珍珠、S925银、银为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门；珍珠莹润柔和，寓意圆融、珍贵与温婉；银质清亮，寓意洁净、护佑与灵动。佩于胸前，取贴身守护…",
        "details": [
          "南红珍珠清修圆珠以南红、珍珠、S925银、银为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门",
          "珍珠莹润柔和，寓意圆融、珍贵与温婉",
          "银质清亮，寓意洁净、护佑与灵动。佩于胸前，取贴身守护、出入平安之意，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p077-138/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p077-138/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p077-138/detail_01.webp")
        ],
        "tags": [
          "南红、珍珠、S925银、银",
          "吊坠挂件",
          "项链吊坠"
        ],
        "price": 130.0,
        "currency": "USD"
      },
      {
        "id": "product-079-139",
        "code": "079",
        "name": "鹤梦怀真",
        "sourceName": "青城山【福禄藏春】花珀葫芦吊坠",
        "type": "项链吊坠",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "琥珀银葫芦纳福以琥珀、银、花为核心元素。琥珀凝结时光，寓意温暖、守护与安然；银质清亮，寓意洁净、护佑与灵动；花香意象柔美，寓意舒展、悦己与生机。葫芦形制取纳福纳吉、圆满安康之意，适合日常佩…",
        "details": [
          "琥珀银葫芦纳福以琥珀、银、花为核心元素。琥珀凝结时光，寓意温暖、守护与安然",
          "银质清亮，寓意洁净、护佑与灵动",
          "花香意象柔美，寓意舒展、悦己与生机。葫芦形制取纳福纳吉、圆满安康之意，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p079-139/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p079-139/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p079-139/detail_01.webp")
        ],
        "tags": [
          "琥珀、银、花",
          "吊坠挂件",
          "项链吊坠"
        ],
        "price": 113.0,
        "currency": "USD"
      },
      {
        "id": "product-080-140",
        "code": "080",
        "name": "云佩",
        "sourceName": "青城山和田玉碧玉无事牌编绳吊坠简约大气时尚百搭平安顺遂显白",
        "type": "项链吊坠",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "和田玉银云佩以和田玉、银、玉为核心元素。和田玉温润含蓄，寓意仁和、圆满与福泽绵长；银质清亮，寓意洁净、护佑与灵动；玉质温雅，寓意君子之德、平安与圆满。佩于胸前，取贴身守护、出入平安之意，适…",
        "details": [
          "和田玉银云佩以和田玉、银、玉为核心元素。和田玉温润含蓄，寓意仁和、圆满与福泽绵长",
          "银质清亮，寓意洁净、护佑与灵动",
          "玉质温雅，寓意君子之德、平安与圆满。佩于胸前，取贴身守护、出入平安之意，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p080-140/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p080-140/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p080-140/detail_01.webp")
        ],
        "tags": [
          "和田玉、银、玉",
          "吊坠挂件",
          "项链吊坠"
        ],
        "price": 338.0,
        "currency": "USD"
      },
      {
        "id": "product-082-141",
        "code": "082",
        "name": "秋水如愿",
        "sourceName": "青城山和田碧玉一帆风顺吊坠官方文创珠宝项链挂件女天然玉石礼物",
        "type": "项链吊坠",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "和田玉S925银云佩以和田玉、S925银、银、玉为核心元素。和田玉温润含蓄，寓意仁和、圆满与福泽绵长；银质清亮，寓意洁净、护佑与灵动；玉质温雅，寓意君子之德、平安与圆满。佩于胸前，取贴身守…",
        "details": [
          "和田玉S925银云佩以和田玉、S925银、银、玉为核心元素。和田玉温润含蓄，寓意仁和、圆满与福泽绵长",
          "银质清亮，寓意洁净、护佑与灵动",
          "玉质温雅，寓意君子之德、平安与圆满。佩于胸前，取贴身守护、出入平安之意，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p082-141/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p082-141/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p082-141/detail_01.webp")
        ],
        "tags": [
          "和田玉、S925银、银、玉",
          "吊坠挂件",
          "项链吊坠"
        ],
        "price": 194.0,
        "currency": "USD"
      },
      {
        "id": "product-103-142",
        "code": "103",
        "name": "春岚承福",
        "sourceName": "青城山【清露衔福】天然冰飘南红玛瑙葫芦吊坠挂坠DIY配件百搭女",
        "type": "项链吊坠",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "南红玛瑙葫芦纳福以南红、玛瑙、银为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门；玛瑙纹理沉稳，寓意安定心念、凝聚内在力量；银质清亮，寓意洁净、护佑与灵动。葫芦形制取纳福纳吉、圆满安…",
        "details": [
          "南红玛瑙葫芦纳福以南红、玛瑙、银为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门",
          "玛瑙纹理沉稳，寓意安定心念、凝聚内在力量",
          "银质清亮，寓意洁净、护佑与灵动。葫芦形制取纳福纳吉、圆满安康之意，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p103-142/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p103-142/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p103-142/detail_01.webp")
        ],
        "tags": [
          "南红、玛瑙、银",
          "吊坠挂件",
          "项链吊坠"
        ],
        "price": 134.0,
        "currency": "USD"
      },
      {
        "id": "product-104-143",
        "code": "104",
        "name": "长风愿成",
        "sourceName": "青城山官方天然和田玉且末蓝葫芦吊坠项链S925银玉石福禄素雅女款",
        "type": "项链吊坠",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "和田玉S925银葫芦纳福以和田玉、S925银、S925银、银、玉为核心元素。和田玉温润含蓄，寓意仁和、圆满与福泽绵长；银质清亮，寓意洁净、护佑与灵动；玉质温雅，寓意君子之德、平安与圆满。葫…",
        "details": [
          "和田玉S925银葫芦纳福以和田玉、S925银、S925银、银、玉为核心元素。和田玉温润含蓄，寓意仁和、圆满与福泽绵长",
          "银质清亮，寓意洁净、护佑与灵动",
          "玉质温雅，寓意君子之德、平安与圆满。葫芦形制取纳福纳吉、圆满安康之意，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p104-143/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p104-143/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p104-143/detail_01.webp")
        ],
        "tags": [
          "和田玉、S925银、S925银、银、玉",
          "吊坠挂件",
          "项链吊坠"
        ],
        "price": 523.0,
        "currency": "USD"
      },
      {
        "id": "product-105-144",
        "code": "105",
        "name": "檐雨凝光",
        "sourceName": "青城山官方天然和田玉且末蓝貔貅吊坠项链招财玉挂件男女同款礼物",
        "type": "项链吊坠",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "和田玉银云佩以和田玉、银、玉为核心元素。和田玉温润含蓄，寓意仁和、圆满与福泽绵长；银质清亮，寓意洁净、护佑与灵动；玉质温雅，寓意君子之德、平安与圆满。佩于胸前，取贴身守护、出入平安之意，适…",
        "details": [
          "和田玉银云佩以和田玉、银、玉为核心元素。和田玉温润含蓄，寓意仁和、圆满与福泽绵长",
          "银质清亮，寓意洁净、护佑与灵动",
          "玉质温雅，寓意君子之德、平安与圆满。佩于胸前，取贴身守护、出入平安之意，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p105-144/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p105-144/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p105-144/detail_01.webp")
        ],
        "tags": [
          "和田玉、银、玉",
          "吊坠挂件",
          "项链吊坠"
        ],
        "price": 194.0,
        "currency": "USD"
      },
      {
        "id": "product-109-145",
        "code": "109",
        "name": "清泉见喜",
        "sourceName": "青城山官方【拾福糖猫】天然和田玉糖玉小猫925银吊坠项链百搭",
        "type": "项链吊坠",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "和田玉S925银云佩以和田玉、S925银、银、玉为核心元素。和田玉温润含蓄，寓意仁和、圆满与福泽绵长；银质清亮，寓意洁净、护佑与灵动；玉质温雅，寓意君子之德、平安与圆满。佩于胸前，取贴身守…",
        "details": [
          "和田玉S925银云佩以和田玉、S925银、银、玉为核心元素。和田玉温润含蓄，寓意仁和、圆满与福泽绵长",
          "银质清亮，寓意洁净、护佑与灵动",
          "玉质温雅，寓意君子之德、平安与圆满。佩于胸前，取贴身守护、出入平安之意，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p109-145/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p109-145/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p109-145/detail_01.webp")
        ],
        "tags": [
          "和田玉、S925银、银、玉",
          "吊坠挂件",
          "项链吊坠"
        ],
        "price": 164.0,
        "currency": "USD"
      },
      {
        "id": "product-110-146",
        "code": "110",
        "name": "晚香含章",
        "sourceName": "青城山【云逸】天然和田玉白玉平安无事牌吊坠玉佩男女款玉石挂坠",
        "type": "项链吊坠",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "和田玉银云佩以和田玉、银、玉为核心元素。和田玉温润含蓄，寓意仁和、圆满与福泽绵长；银质清亮，寓意洁净、护佑与灵动；玉质温雅，寓意君子之德、平安与圆满。佩于胸前，取贴身守护、出入平安之意，适…",
        "details": [
          "和田玉银云佩以和田玉、银、玉为核心元素。和田玉温润含蓄，寓意仁和、圆满与福泽绵长",
          "银质清亮，寓意洁净、护佑与灵动",
          "玉质温雅，寓意君子之德、平安与圆满。佩于胸前，取贴身守护、出入平安之意，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p110-146/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p110-146/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p110-146/detail_01.webp")
        ],
        "tags": [
          "和田玉、银、玉",
          "吊坠挂件",
          "项链吊坠"
        ],
        "price": 292.0,
        "currency": "USD"
      },
      {
        "id": "product-117-147",
        "code": "117",
        "name": "澄心无忧",
        "sourceName": "青城山官方【金蜜福葫】天然俄料妖花蜜蜡葫芦 绿松滴溜百搭挂坠",
        "type": "项链吊坠",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "蜜蜡琥珀葫芦纳福以蜜蜡、琥珀、银、花为核心元素。蜜蜡温暖明亮，寓意丰盛、亲和与岁月沉淀；琥珀凝结时光，寓意温暖、守护与安然；银质清亮，寓意洁净、护佑与灵动；花香意象柔美，寓意舒展、悦己与生…",
        "details": [
          "蜜蜡琥珀葫芦纳福以蜜蜡、琥珀、银、花为核心元素。蜜蜡温暖明亮，寓意丰盛、亲和与岁月沉淀",
          "琥珀凝结时光，寓意温暖、守护与安然",
          "银质清亮，寓意洁净、护佑与灵动",
          "花香意象柔美，寓意舒展、悦己与生机。葫芦形制取纳福纳吉、圆满安康之意，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p117-147/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p117-147/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p117-147/detail_01.webp")
        ],
        "tags": [
          "蜜蜡、琥珀、银、花",
          "吊坠挂件",
          "项链吊坠"
        ],
        "price": 132.0,
        "currency": "USD"
      },
      {
        "id": "product-127-148",
        "code": "127",
        "name": "云阶和鸣",
        "sourceName": "青城山和田玉碧玉小鱼吊坠挂件设计款百搭活扣diy项链小提溜配件",
        "type": "项链吊坠",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "和田玉银云佩以和田玉、银、玉为核心元素。和田玉温润含蓄，寓意仁和、圆满与福泽绵长；银质清亮，寓意洁净、护佑与灵动；玉质温雅，寓意君子之德、平安与圆满。佩于胸前，取贴身守护、出入平安之意，适…",
        "details": [
          "和田玉银云佩以和田玉、银、玉为核心元素。和田玉温润含蓄，寓意仁和、圆满与福泽绵长",
          "银质清亮，寓意洁净、护佑与灵动",
          "玉质温雅，寓意君子之德、平安与圆满。佩于胸前，取贴身守护、出入平安之意，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p127-148/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p127-148/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p127-148/detail_01.webp")
        ],
        "tags": [
          "和田玉、银、玉",
          "吊坠挂件",
          "项链吊坠"
        ],
        "price": 133.0,
        "currency": "USD"
      },
      {
        "id": "product-166-149",
        "code": "166",
        "name": "听雪成环",
        "sourceName": "青城山天然原矿南红小米珠项链正品财神吊坠绿松石祥云扣头毛衣链",
        "type": "项链吊坠",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "南红绿松石云佩以南红、绿松石、银为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门；绿松石色泽清润，寓意平安、疗愈与长久护佑；银质清亮，寓意洁净、护佑与灵动。佩于胸前，取贴身守护、出入…",
        "details": [
          "南红绿松石云佩以南红、绿松石、银为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门",
          "绿松石色泽清润，寓意平安、疗愈与长久护佑",
          "银质清亮，寓意洁净、护佑与灵动。佩于胸前，取贴身守护、出入平安之意，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p166-149/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p166-149/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p166-149/detail_01.webp")
        ],
        "tags": [
          "南红、绿松石、银",
          "吊坠挂件",
          "项链吊坠"
        ],
        "price": 783.0,
        "currency": "USD"
      },
      {
        "id": "product-167-150",
        "code": "167",
        "name": "照心澄怀",
        "sourceName": "青城山【灵韵福宝】天然琥珀蜜蜡白蜡项链毛衣链颈饰象神南红吊坠",
        "type": "项链吊坠",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "南红蜜蜡云佩以南红、蜜蜡、琥珀、银为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门；蜜蜡温暖明亮，寓意丰盛、亲和与岁月沉淀；琥珀凝结时光，寓意温暖、守护与安然；银质清亮，寓意洁净、护…",
        "details": [
          "南红蜜蜡云佩以南红、蜜蜡、琥珀、银为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门",
          "蜜蜡温暖明亮，寓意丰盛、亲和与岁月沉淀",
          "琥珀凝结时光，寓意温暖、守护与安然",
          "银质清亮，寓意洁净、护佑与灵动。佩于胸前，取贴身守护、出入平安之意，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p167-150/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p167-150/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p167-150/detail_01.webp")
        ],
        "tags": [
          "南红、蜜蜡、琥珀、银",
          "吊坠挂件",
          "项链吊坠"
        ],
        "price": 1273.0,
        "currency": "USD"
      },
      {
        "id": "product-168-151",
        "code": "168",
        "name": "闻磬守静",
        "sourceName": "青城山天然蜜蜡三圈手链小米珠白蜡项链貔貅招财吊坠颈饰毛衣链",
        "type": "项链吊坠",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "蜜蜡琥珀清修圆珠以蜜蜡、琥珀、银为核心元素。蜜蜡温暖明亮，寓意丰盛、亲和与岁月沉淀；琥珀凝结时光，寓意温暖、守护与安然；银质清亮，寓意洁净、护佑与灵动。佩于胸前，取贴身守护、出入平安之意，…",
        "details": [
          "蜜蜡琥珀清修圆珠以蜜蜡、琥珀、银为核心元素。蜜蜡温暖明亮，寓意丰盛、亲和与岁月沉淀",
          "琥珀凝结时光，寓意温暖、守护与安然",
          "银质清亮，寓意洁净、护佑与灵动。佩于胸前，取贴身守护、出入平安之意，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p168-151/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p168-151/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p168-151/detail_01.webp")
        ],
        "tags": [
          "蜜蜡、琥珀、银",
          "吊坠挂件",
          "项链吊坠"
        ],
        "price": 979.0,
        "currency": "USD"
      },
      {
        "id": "product-175-152",
        "code": "175",
        "name": "静澜长乐",
        "sourceName": "青城山（饰品）原创黄口和田玉二郎真君牌道文化灵佑吊坠18k孤品",
        "type": "项链吊坠",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "和田玉玉云佩以和田玉、玉为核心元素。和田玉温润含蓄，寓意仁和、圆满与福泽绵长；玉质温雅，寓意君子之德、平安与圆满。佩于胸前，取贴身守护、出入平安之意，适合日常佩戴、修心静坐或作为东方礼赠。",
        "details": [
          "和田玉玉云佩以和田玉、玉为核心元素。和田玉温润含蓄，寓意仁和、圆满与福泽绵长",
          "玉质温雅，寓意君子之德、平安与圆满。佩于胸前，取贴身守护、出入平安之意，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p175-152/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p175-152/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p175-152/detail_01.webp")
        ],
        "tags": [
          "和田玉、玉",
          "吊坠挂件",
          "项链吊坠"
        ],
        "price": 2023.0,
        "currency": "USD"
      },
      {
        "id": "product-191-153",
        "code": "191",
        "name": "安行风定",
        "sourceName": "青城山官方文创山鬼花钱纯铜朱砂吊坠男护身符挂件真品珠宝项链女",
        "type": "项链吊坠",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "铜朱砂花神凝香以铜、朱砂、花为核心元素。铜质古朴厚重，寓意镇守、稳固与招纳祥瑞；朱砂赤色端正，寓意辟邪、安定与护身；花香意象柔美，寓意舒展、悦己与生机。佩于胸前，取贴身守护、出入平安之意，…",
        "details": [
          "铜朱砂花神凝香以铜、朱砂、花为核心元素。铜质古朴厚重，寓意镇守、稳固与招纳祥瑞",
          "朱砂赤色端正，寓意辟邪、安定与护身",
          "花香意象柔美，寓意舒展、悦己与生机。佩于胸前，取贴身守护、出入平安之意，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p191-153/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p191-153/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p191-153/detail_01.webp")
        ],
        "tags": [
          "铜、朱砂、花",
          "吊坠挂件",
          "项链吊坠"
        ],
        "price": 105.0,
        "currency": "USD"
      },
      {
        "id": "product-197-154",
        "code": "197",
        "name": "一念长宁",
        "sourceName": "青城山官方正品保真和田白玉慈航真人18k金吊坠高货孤品",
        "type": "项链吊坠",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "银玉云佩以银、玉为核心元素。银质清亮，寓意洁净、护佑与灵动；玉质温雅，寓意君子之德、平安与圆满。佩于胸前，取贴身守护、出入平安之意，适合日常佩戴、修心静坐或作为东方礼赠。",
        "details": [
          "银玉云佩以银、玉为核心元素。银质清亮，寓意洁净、护佑与灵动",
          "玉质温雅，寓意君子之德、平安与圆满。佩于胸前，取贴身守护、出入平安之意，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p197-154/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p197-154/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p197-154/detail_01.webp")
        ],
        "tags": [
          "银、玉",
          "吊坠挂件",
          "项链吊坠"
        ],
        "price": 1077.0,
        "currency": "USD"
      },
      {
        "id": "product-206-155",
        "code": "206",
        "name": "云岫安和",
        "sourceName": "青城山(乾黄)正品保真冰红黄口和田玉6mm新中式毛衣链吊坠孤品",
        "type": "项链吊坠",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "和田玉S925银云佩以和田玉、S925银、银、玉为核心元素。和田玉温润含蓄，寓意仁和、圆满与福泽绵长；银质清亮，寓意洁净、护佑与灵动；玉质温雅，寓意君子之德、平安与圆满。佩于胸前，取贴身守…",
        "details": [
          "和田玉S925银云佩以和田玉、S925银、银、玉为核心元素。和田玉温润含蓄，寓意仁和、圆满与福泽绵长",
          "银质清亮，寓意洁净、护佑与灵动",
          "玉质温雅，寓意君子之德、平安与圆满。佩于胸前，取贴身守护、出入平安之意，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p206-155/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p206-155/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p206-155/detail_01.webp")
        ],
        "tags": [
          "和田玉、S925银、银、玉",
          "吊坠挂件",
          "项链吊坠"
        ],
        "price": 881.0,
        "currency": "USD"
      },
      {
        "id": "product-228-156",
        "code": "228",
        "name": "松风怀真",
        "sourceName": "青城山保真天然川料南红火焰纹吊坠女925银水滴百搭项链送礼好物",
        "type": "项链吊坠",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "南红S925银云佩以南红、S925银、银为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门；银质清亮，寓意洁净、护佑与灵动。佩于胸前，取贴身守护、出入平安之意，适合日常佩戴、修心静坐或…",
        "details": [
          "南红S925银云佩以南红、S925银、银为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门",
          "银质清亮，寓意洁净、护佑与灵动。佩于胸前，取贴身守护、出入平安之意，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p228-156/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p228-156/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p228-156/detail_01.webp")
        ],
        "tags": [
          "南红、S925银、银",
          "吊坠挂件",
          "项链吊坠"
        ],
        "price": 368.0,
        "currency": "USD"
      },
      {
        "id": "product-240-157",
        "code": "240",
        "name": "月照如愿",
        "sourceName": "青城山俄料天然蜜蜡吊坠牡丹花琥珀项链女款珠宝文创首饰官方正品",
        "type": "项链吊坠",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "蜜蜡琥珀花神凝香以蜜蜡、琥珀、银、花为核心元素。蜜蜡温暖明亮，寓意丰盛、亲和与岁月沉淀；琥珀凝结时光，寓意温暖、守护与安然；银质清亮，寓意洁净、护佑与灵动；花香意象柔美，寓意舒展、悦己与生…",
        "details": [
          "蜜蜡琥珀花神凝香以蜜蜡、琥珀、银、花为核心元素。蜜蜡温暖明亮，寓意丰盛、亲和与岁月沉淀",
          "琥珀凝结时光，寓意温暖、守护与安然",
          "银质清亮，寓意洁净、护佑与灵动",
          "花香意象柔美，寓意舒展、悦己与生机。佩于胸前，取贴身守护、出入平安之意，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p240-157/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p240-157/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p240-157/detail_01.webp")
        ],
        "tags": [
          "蜜蜡、琥珀、银、花",
          "吊坠挂件",
          "项链吊坠"
        ],
        "price": 712.0,
        "currency": "USD"
      }
    ]
  },
  {
    "id": "necklace-ruyi-locks",
    "parent": "necklace",
    "title": "如意锁",
    "subtitle": "Ruyi Locks",
    "description": "以如意、长宁、守护为寓意的锁形配饰。",
    "items": [
      {
        "id": "product-064-158",
        "code": "064",
        "name": "如意长宁",
        "sourceName": "青城山4mm_红颜南红柿子红随形小米珠 多圈锁骨链腕颈两用福运款",
        "type": "项链吊坠",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "南红银如意长锁以南红、银为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门；银质清亮，寓意洁净、护佑与灵动。锁形取守福留吉、护佑长宁之意，适合日常佩戴、修心静坐或作为东方礼赠。",
        "details": [
          "南红银如意长锁以南红、银为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门",
          "银质清亮，寓意洁净、护佑与灵动。锁形取守福留吉、护佑长宁之意，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p064-158/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p064-158/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p064-158/detail_01.webp")
        ],
        "tags": [
          "南红、银",
          "如意锁",
          "项链吊坠"
        ],
        "price": 448.0,
        "currency": "USD"
      },
      {
        "id": "product-075-159",
        "code": "075",
        "name": "静山承福",
        "sourceName": "青城山寰宇6mm南红柿子红单珠随型锁骨链显气质时尚百搭简约项链",
        "type": "项链吊坠",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "南红银如意长锁以南红、银为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门；银质清亮，寓意洁净、护佑与灵动。锁形取守福留吉、护佑长宁之意，适合日常佩戴、修心静坐或作为东方礼赠。",
        "details": [
          "南红银如意长锁以南红、银为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门",
          "银质清亮，寓意洁净、护佑与灵动。锁形取守福留吉、护佑长宁之意，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p075-159/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p075-159/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p075-159/detail_01.webp")
        ],
        "tags": [
          "南红、银",
          "如意锁",
          "项链吊坠"
        ],
        "price": 325.0,
        "currency": "USD"
      },
      {
        "id": "product-120-160",
        "code": "120",
        "name": "星河愿成",
        "sourceName": "青城山川料南红小米珠锁骨链柿子红搭珍珠项链本命年显白国风颈链",
        "type": "项链吊坠",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "南红珍珠如意长锁以南红、珍珠、银为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门；珍珠莹润柔和，寓意圆融、珍贵与温婉；银质清亮，寓意洁净、护佑与灵动。锁形取守福留吉、护佑长宁之意，适…",
        "details": [
          "南红珍珠如意长锁以南红、珍珠、银为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门",
          "珍珠莹润柔和，寓意圆融、珍贵与温婉",
          "银质清亮，寓意洁净、护佑与灵动。锁形取守福留吉、护佑长宁之意，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p120-160/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p120-160/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p120-160/detail_01.webp")
        ],
        "tags": [
          "南红、珍珠、银",
          "如意锁",
          "项链吊坠"
        ],
        "price": 194.0,
        "currency": "USD"
      },
      {
        "id": "product-151-161",
        "code": "151",
        "name": "福泽凝光",
        "sourceName": "青城山天然蜜蜡手链三圈白蜡项链南红祥云珠锁骨毛衣链",
        "type": "项链吊坠",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "南红蜜蜡如意长锁以南红、蜜蜡、琥珀、银、花为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门；蜜蜡温暖明亮，寓意丰盛、亲和与岁月沉淀；琥珀凝结时光，寓意温暖、守护与安然；银质清亮，寓意…",
        "details": [
          "南红蜜蜡如意长锁以南红、蜜蜡、琥珀、银、花为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门",
          "蜜蜡温暖明亮，寓意丰盛、亲和与岁月沉淀",
          "琥珀凝结时光，寓意温暖、守护与安然",
          "银质清亮，寓意洁净、护佑与灵动"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p151-161/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p151-161/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p151-161/detail_01.webp")
        ],
        "tags": [
          "南红、蜜蜡、琥珀、银、花",
          "如意锁",
          "项链吊坠"
        ],
        "price": 881.0,
        "currency": "USD"
      },
      {
        "id": "product-154-162",
        "code": "154",
        "name": "兰若见喜",
        "sourceName": "青城山_天然青金石项链小米珠锁骨链108佛珠颈链飘花蜜蜡妈妈吊坠",
        "type": "项链吊坠",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "青金石蜜蜡如意长锁以青金石、蜜蜡、花为核心元素。青金石深蓝如夜空，寓意智慧、专注与贵气；蜜蜡温暖明亮，寓意丰盛、亲和与岁月沉淀；花香意象柔美，寓意舒展、悦己与生机。锁形取守福留吉、护佑长宁…",
        "details": [
          "青金石蜜蜡如意长锁以青金石、蜜蜡、花为核心元素。青金石深蓝如夜空，寓意智慧、专注与贵气",
          "蜜蜡温暖明亮，寓意丰盛、亲和与岁月沉淀",
          "花香意象柔美，寓意舒展、悦己与生机。锁形取守福留吉、护佑长宁之意，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p154-162/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p154-162/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p154-162/detail_01.webp")
        ],
        "tags": [
          "青金石、蜜蜡、花",
          "如意锁",
          "项链吊坠"
        ],
        "price": 675.0,
        "currency": "USD"
      },
      {
        "id": "product-181-163",
        "code": "181",
        "name": "朝露含章",
        "sourceName": "青城山官方正品保真川料南红小米珠毛衣项链绿松锁骨链翡翠吊坠女",
        "type": "项链吊坠",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "南红翡翠如意长锁以南红、翡翠、银为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门；翡翠清润有生机，寓意福气、贵气与长久安宁；银质清亮，寓意洁净、护佑与灵动。锁形取守福留吉、护佑长宁之…",
        "details": [
          "南红翡翠如意长锁以南红、翡翠、银为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门",
          "翡翠清润有生机，寓意福气、贵气与长久安宁",
          "银质清亮，寓意洁净、护佑与灵动。锁形取守福留吉、护佑长宁之意，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p181-163/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p181-163/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p181-163/detail_01.webp")
        ],
        "tags": [
          "南红、翡翠、银",
          "如意锁",
          "项链吊坠"
        ],
        "price": 263.0,
        "currency": "USD"
      },
      {
        "id": "product-212-164",
        "code": "212",
        "name": "清晖无忧",
        "sourceName": "青城山官方正品天然紫水晶石榴石手链九紫离火小众女款百搭锁骨链",
        "type": "项链吊坠",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "水晶银如意长锁以水晶、银为核心元素。水晶通透澄明，寓意净化、清醒与能量流动；银质清亮，寓意洁净、护佑与灵动。锁形取守福留吉、护佑长宁之意，适合日常佩戴、修心静坐或作为东方礼赠。",
        "details": [
          "水晶银如意长锁以水晶、银为核心元素。水晶通透澄明，寓意净化、清醒与能量流动",
          "银质清亮，寓意洁净、护佑与灵动。锁形取守福留吉、护佑长宁之意，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p212-164/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p212-164/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p212-164/detail_01.webp")
        ],
        "tags": [
          "水晶、银",
          "如意锁",
          "项链吊坠"
        ],
        "price": 128.0,
        "currency": "USD"
      },
      {
        "id": "product-219-165",
        "code": "219",
        "name": "灵犀和鸣",
        "sourceName": "青城山天然青金石锁骨项链官方文创珠宝配南红蜜蜡绿松石多圈手串",
        "type": "项链吊坠",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "南红青金石如意长锁以南红、青金石、绿松石、蜜蜡为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门；青金石深蓝如夜空，寓意智慧、专注与贵气；绿松石色泽清润，寓意平安、疗愈与长久护佑；蜜蜡…",
        "details": [
          "南红青金石如意长锁以南红、青金石、绿松石、蜜蜡为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门",
          "青金石深蓝如夜空，寓意智慧、专注与贵气",
          "绿松石色泽清润，寓意平安、疗愈与长久护佑",
          "蜜蜡温暖明亮，寓意丰盛、亲和与岁月沉淀。锁形取守福留吉、护佑长宁之意，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p219-165/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p219-165/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p219-165/detail_01.webp")
        ],
        "tags": [
          "南红、青金石、绿松石、蜜蜡",
          "如意锁",
          "项链吊坠"
        ],
        "price": 244.0,
        "currency": "USD"
      },
      {
        "id": "product-243-166",
        "code": "243",
        "name": "愿景归心",
        "sourceName": "青城山皮绳项链穿南红蜜蜡绿松吊坠挂绳锁骨链黑色绳子diy半成品",
        "type": "项链吊坠",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "南红翡翠如意长锁以南红、翡翠、蜜蜡为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门；翡翠清润有生机，寓意福气、贵气与长久安宁；蜜蜡温暖明亮，寓意丰盛、亲和与岁月沉淀。锁形取守福留吉、…",
        "details": [
          "南红翡翠如意长锁以南红、翡翠、蜜蜡为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门",
          "翡翠清润有生机，寓意福气、贵气与长久安宁",
          "蜜蜡温暖明亮，寓意丰盛、亲和与岁月沉淀。锁形取守福留吉、护佑长宁之意，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p243-166/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p243-166/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p243-166/detail_01.webp")
        ],
        "tags": [
          "南红、翡翠、蜜蜡",
          "如意锁",
          "项链吊坠"
        ],
        "price": 130.0,
        "currency": "USD"
      }
    ]
  },
  {
    "id": "necklace-peace-discs",
    "parent": "necklace",
    "title": "平安扣",
    "subtitle": "Peace Discs",
    "description": "圆融成环，适合作为平安、圆满与礼赠的表达。",
    "items": [
      {
        "id": "product-016-167",
        "code": "016",
        "name": "山月成环",
        "sourceName": "普陀山天然南红玛瑙三圈手链女复古民族风翡翠平安扣马年吊坠手串",
        "type": "项链吊坠",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "南红玛瑙清修圆珠以南红、玛瑙、翡翠为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门；玛瑙纹理沉稳，寓意安定心念、凝聚内在力量；翡翠清润有生机，寓意福气、贵气与长久安宁。佩于胸前，取贴…",
        "details": [
          "南红玛瑙清修圆珠以南红、玛瑙、翡翠为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门",
          "玛瑙纹理沉稳，寓意安定心念、凝聚内在力量",
          "翡翠清润有生机，寓意福气、贵气与长久安宁。佩于胸前，取贴身守护、出入平安之意，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p016-167/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p016-167/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p016-167/detail_01.webp")
        ],
        "tags": [
          "南红、玛瑙、翡翠",
          "平安扣",
          "项链吊坠"
        ],
        "price": 156.0,
        "currency": "USD"
      },
      {
        "id": "product-112-168",
        "code": "112",
        "name": "云纹澄怀",
        "sourceName": "青城山【野蔓生花】天然和田碧玉手绳绞丝平安扣925银精致手链女",
        "type": "项链吊坠",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "S925银银花神凝香以S925银、银、玉、花为核心元素。银质清亮，寓意洁净、护佑与灵动；玉质温雅，寓意君子之德、平安与圆满；花香意象柔美，寓意舒展、悦己与生机。圆珠成串，象征周而复始、福气…",
        "details": [
          "S925银银花神凝香以S925银、银、玉、花为核心元素。银质清亮，寓意洁净、护佑与灵动",
          "玉质温雅，寓意君子之德、平安与圆满",
          "花香意象柔美，寓意舒展、悦己与生机。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p112-168/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p112-168/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p112-168/detail_01.webp")
        ],
        "tags": [
          "S925银、银、玉、花",
          "平安扣",
          "项链吊坠"
        ],
        "price": 135.0,
        "currency": "USD"
      },
      {
        "id": "product-113-169",
        "code": "113",
        "name": "归云守静",
        "sourceName": "青城山天然和田碧玉路路通平安扣桶珠吊坠玉石项链S925银送礼妈妈",
        "type": "项链吊坠",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "S925银S925银云佩以S925银、S925银、银、玉为核心元素。银质清亮，寓意洁净、护佑与灵动；玉质温雅，寓意君子之德、平安与圆满。佩于胸前，取贴身守护、出入平安之意，适合日常佩戴、修…",
        "details": [
          "S925银S925银云佩以S925银、S925银、银、玉为核心元素。银质清亮，寓意洁净、护佑与灵动",
          "玉质温雅，寓意君子之德、平安与圆满。佩于胸前，取贴身守护、出入平安之意，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p113-169/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p113-169/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p113-169/detail_01.webp")
        ],
        "tags": [
          "S925银、S925银、银、玉",
          "平安扣",
          "项链吊坠"
        ],
        "price": 193.0,
        "currency": "USD"
      },
      {
        "id": "product-142-170",
        "code": "142",
        "name": "晴岚长乐",
        "sourceName": "青城山纯天然朱砂项链方孔祥云山鬼花钱吊坠辰砂二十四福寿平安扣",
        "type": "项链吊坠",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "朱砂花花神凝香以朱砂、花为核心元素。朱砂赤色端正，寓意辟邪、安定与护身；花香意象柔美，寓意舒展、悦己与生机。佩于胸前，取贴身守护、出入平安之意，适合日常佩戴、修心静坐或作为东方礼赠。",
        "details": [
          "朱砂花花神凝香以朱砂、花为核心元素。朱砂赤色端正，寓意辟邪、安定与护身",
          "花香意象柔美，寓意舒展、悦己与生机。佩于胸前，取贴身守护、出入平安之意，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p142-170/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p142-170/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p142-170/detail_01.webp")
        ],
        "tags": [
          "朱砂、花",
          "平安扣",
          "项链吊坠"
        ],
        "price": 134.0,
        "currency": "USD"
      },
      {
        "id": "product-179-171",
        "code": "179",
        "name": "莲心风定",
        "sourceName": "青城山且末米达和田白玉吊坠国风平安扣毛衣链赠s925银镀金链",
        "type": "项链吊坠",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "S925银银云佩以S925银、银、玉为核心元素。银质清亮，寓意洁净、护佑与灵动；玉质温雅，寓意君子之德、平安与圆满。佩于胸前，取贴身守护、出入平安之意，适合日常佩戴、修心静坐或作为东方礼赠。",
        "details": [
          "S925银银云佩以S925银、银、玉为核心元素。银质清亮，寓意洁净、护佑与灵动",
          "玉质温雅，寓意君子之德、平安与圆满。佩于胸前，取贴身守护、出入平安之意，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p179-171/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p179-171/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p179-171/detail_01.webp")
        ],
        "tags": [
          "S925银、银、玉",
          "平安扣",
          "项链吊坠"
        ],
        "price": 3027.0,
        "currency": "USD"
      },
      {
        "id": "product-214-172",
        "code": "214",
        "name": "拂晓守愿",
        "sourceName": "青城山官方保真保正天然俄料鸡油黄绿松平安扣枣珠贴片蜜蜡手串",
        "type": "项链吊坠",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "蜜蜡琥珀清修圆珠以蜜蜡、琥珀、银为核心元素。蜜蜡温暖明亮，寓意丰盛、亲和与岁月沉淀；琥珀凝结时光，寓意温暖、守护与安然；银质清亮，寓意洁净、护佑与灵动。圆珠成串，象征周而复始、福气流转，适…",
        "details": [
          "蜜蜡琥珀清修圆珠以蜜蜡、琥珀、银为核心元素。蜜蜡温暖明亮，寓意丰盛、亲和与岁月沉淀",
          "琥珀凝结时光，寓意温暖、守护与安然",
          "银质清亮，寓意洁净、护佑与灵动。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p214-172/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p214-172/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p214-172/detail_01.webp")
        ],
        "tags": [
          "蜜蜡、琥珀、银",
          "平安扣",
          "项链吊坠"
        ],
        "price": 1111.0,
        "currency": "USD"
      }
    ]
  },
  {
    "id": "necklace-necklaces",
    "parent": "necklace",
    "title": "项链",
    "subtitle": "Necklaces",
    "description": "更完整的颈间佩戴系列，适合日常和节庆礼赠。",
    "items": [
      {
        "id": "product-096-173",
        "code": "096",
        "name": "玄光同心",
        "sourceName": "青城山官方天然新疆和田玉白玉项链多圈手串叠戴圆珠女款百搭饰品",
        "type": "项链吊坠",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "和田玉银清修圆珠以和田玉、银、玉为核心元素。和田玉温润含蓄，寓意仁和、圆满与福泽绵长；银质清亮，寓意洁净、护佑与灵动；玉质温雅，寓意君子之德、平安与圆满。佩于胸前，取贴身守护、出入平安之意…",
        "details": [
          "和田玉银清修圆珠以和田玉、银、玉为核心元素。和田玉温润含蓄，寓意仁和、圆满与福泽绵长",
          "银质清亮，寓意洁净、护佑与灵动",
          "玉质温雅，寓意君子之德、平安与圆满。佩于胸前，取贴身守护、出入平安之意，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p096-173/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p096-173/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p096-173/detail_01.webp")
        ],
        "tags": [
          "和田玉、银、玉",
          "项链",
          "项链吊坠"
        ],
        "price": 465.0,
        "currency": "USD"
      },
      {
        "id": "product-101-174",
        "code": "101",
        "name": "照夜承愿",
        "sourceName": "青城山【马上有钱】天然和田玉碧玉小马项链时尚百搭送礼好物",
        "type": "项链吊坠",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "和田玉檀云佩以和田玉、檀、银、玉为核心元素。和田玉温润含蓄，寓意仁和、圆满与福泽绵长；檀香气息沉稳，寓意安神、辟浊与沉静守正；银质清亮，寓意洁净、护佑与灵动；玉质温雅，寓意君子之德、平安与…",
        "details": [
          "和田玉檀云佩以和田玉、檀、银、玉为核心元素。和田玉温润含蓄，寓意仁和、圆满与福泽绵长",
          "檀香气息沉稳，寓意安神、辟浊与沉静守正",
          "银质清亮，寓意洁净、护佑与灵动",
          "玉质温雅，寓意君子之德、平安与圆满。佩于胸前，取贴身守护、出入平安之意，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p101-174/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p101-174/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p101-174/detail_01.webp")
        ],
        "tags": [
          "和田玉、檀、银、玉",
          "项链",
          "项链吊坠"
        ],
        "price": 126.0,
        "currency": "USD"
      },
      {
        "id": "product-123-175",
        "code": "123",
        "name": "素愿清圆",
        "sourceName": "青城山【吉祥】14mm柿子红南红单珠路路通项链 简约百搭送礼好物",
        "type": "项链吊坠",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "南红银云佩以南红、银为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门；银质清亮，寓意洁净、护佑与灵动。佩于胸前，取贴身守护、出入平安之意，适合日常佩戴、修心静坐或作为东方礼赠。",
        "details": [
          "南红银云佩以南红、银为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门",
          "银质清亮，寓意洁净、护佑与灵动。佩于胸前，取贴身守护、出入平安之意，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p123-175/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p123-175/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p123-175/detail_01.webp")
        ],
        "tags": [
          "南红、银",
          "项链",
          "项链吊坠"
        ],
        "price": 174.0,
        "currency": "USD"
      },
      {
        "id": "product-185-176",
        "code": "185",
        "name": "微澜知归",
        "sourceName": "青城山(蕴)官方正品保真保正k金金钱珠雪花和田玉米达料项链",
        "type": "项链吊坠",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "和田玉银花神凝香以和田玉、银、玉、花为核心元素。和田玉温润含蓄，寓意仁和、圆满与福泽绵长；银质清亮，寓意洁净、护佑与灵动；玉质温雅，寓意君子之德、平安与圆满；花香意象柔美，寓意舒展、悦己与…",
        "details": [
          "和田玉银花神凝香以和田玉、银、玉、花为核心元素。和田玉温润含蓄，寓意仁和、圆满与福泽绵长",
          "银质清亮，寓意洁净、护佑与灵动",
          "玉质温雅，寓意君子之德、平安与圆满",
          "花香意象柔美，寓意舒展、悦己与生机。佩于胸前，取贴身守护、出入平安之意，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p185-176/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p185-176/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p185-176/detail_01.webp")
        ],
        "tags": [
          "和田玉、银、玉、花",
          "项链",
          "项链吊坠"
        ],
        "price": 2287.0,
        "currency": "USD"
      },
      {
        "id": "product-188-177",
        "code": "188",
        "name": "流光福至",
        "sourceName": "青城山官方湖北十堰天然原矿高瓷高蓝绿松石项链18k金毛衣链孤品",
        "type": "项链吊坠",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "绿松石银云佩以绿松石、银为核心元素。绿松石色泽清润，寓意平安、疗愈与长久护佑；银质清亮，寓意洁净、护佑与灵动。佩于胸前，取贴身守护、出入平安之意，适合日常佩戴、修心静坐或作为东方礼赠。",
        "details": [
          "绿松石银云佩以绿松石、银为核心元素。绿松石色泽清润，寓意平安、疗愈与长久护佑",
          "银质清亮，寓意洁净、护佑与灵动。佩于胸前，取贴身守护、出入平安之意，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p188-177/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p188-177/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p188-177/detail_01.webp")
        ],
        "tags": [
          "绿松石、银",
          "项链",
          "项链吊坠"
        ],
        "price": 4899.0,
        "currency": "USD"
      },
      {
        "id": "product-198-178",
        "code": "198",
        "name": "明心静好",
        "sourceName": "青城山官方正品和田玉小米珠18k金米达黄口冰飘项链精致孤品",
        "type": "项链吊坠",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "和田玉银云佩以和田玉、银、玉为核心元素。和田玉温润含蓄，寓意仁和、圆满与福泽绵长；银质清亮，寓意洁净、护佑与灵动；玉质温雅，寓意君子之德、平安与圆满。佩于胸前，取贴身守护、出入平安之意，适…",
        "details": [
          "和田玉银云佩以和田玉、银、玉为核心元素。和田玉温润含蓄，寓意仁和、圆满与福泽绵长",
          "银质清亮，寓意洁净、护佑与灵动",
          "玉质温雅，寓意君子之德、平安与圆满。佩于胸前，取贴身守护、出入平安之意，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p198-178/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p198-178/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p198-178/detail_01.webp")
        ],
        "tags": [
          "和田玉、银、玉",
          "项链",
          "项链吊坠"
        ],
        "price": 1832.0,
        "currency": "USD"
      }
    ]
  },
  {
    "id": "ring-rings",
    "parent": "ring",
    "title": "戒指",
    "subtitle": "戒指",
    "description": "戒指 系列成品。",
    "items": [
      {
        "id": "product-063-0",
        "code": "063",
        "name": "玄韵归心",
        "sourceName": "青城山天然俄料鸡油黄方糖戒指女款925银活口可调节蜜蜡琥珀指环",
        "type": "戒指",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "蜜蜡琥珀玄韵以蜜蜡、琥珀、S925银、银为核心元素。蜜蜡温暖明亮，寓意丰盛、亲和与岁月沉淀；琥珀凝结时光，寓意温暖、守护与安然；银质清亮，寓意洁净、护佑与灵动。圆珠成串，象征周而复始、福气…",
        "details": [
          "蜜蜡琥珀玄韵以蜜蜡、琥珀、S925银、银为核心元素。蜜蜡温暖明亮，寓意丰盛、亲和与岁月沉淀",
          "琥珀凝结时光，寓意温暖、守护与安然",
          "银质清亮，寓意洁净、护佑与灵动。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p063-000/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p063-000/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p063-000/detail_01.webp")
        ],
        "tags": [
          "蜜蜡、琥珀、S925银、银",
          "戒指",
          "戒指"
        ],
        "price": 130.0,
        "currency": "USD"
      },
      {
        "id": "product-094-1",
        "code": "094",
        "name": "云岫入怀",
        "sourceName": "青城山保真天然云南保山冰红蛋面锆石戒指圈口可调椭圆形南红戒指",
        "type": "戒指",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "南红银玄韵以南红、银为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门；银质清亮，寓意洁净、护佑与灵动。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。",
        "details": [
          "南红银玄韵以南红、银为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门",
          "银质清亮，寓意洁净、护佑与灵动。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p094-001/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p094-001/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p094-001/detail_01.webp")
        ],
        "tags": [
          "南红、银",
          "戒指",
          "戒指"
        ],
        "price": 210.0,
        "currency": "USD"
      }
    ]
  },
  {
    "id": "earring-earrings",
    "parent": "earring",
    "title": "耳钉",
    "subtitle": "耳钉",
    "description": "耳钉 系列成品。",
    "items": [
      {
        "id": "product-072-125",
        "code": "072",
        "name": "灵犀含光",
        "sourceName": "青城山【光年】花珀圆珠耳坠琥珀耳饰s925银复古百搭小众设计",
        "type": "耳钉",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "琥珀S925银花神凝香以琥珀、S925银、银、花为核心元素。琥珀凝结时光，寓意温暖、守护与安然；银质清亮，寓意洁净、护佑与灵动；花香意象柔美，寓意舒展、悦己与生机。圆珠成串，象征周而复始、…",
        "details": [
          "琥珀S925银花神凝香以琥珀、S925银、银、花为核心元素。琥珀凝结时光，寓意温暖、守护与安然",
          "银质清亮，寓意洁净、护佑与灵动",
          "花香意象柔美，寓意舒展、悦己与生机。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p072-125/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p072-125/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p072-125/detail_01.webp")
        ],
        "tags": [
          "琥珀、S925银、银、花",
          "耳钉",
          "耳钉"
        ],
        "price": 122.0,
        "currency": "USD"
      },
      {
        "id": "product-073-126",
        "code": "073",
        "name": "愿景清安",
        "sourceName": "青城山【墨白】11mm单珠南红耳坠 精致百搭耳饰",
        "type": "耳钉",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "南红银玄韵以南红、银为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门；银质清亮，寓意洁净、护佑与灵动。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。",
        "details": [
          "南红银玄韵以南红、银为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门",
          "银质清亮，寓意洁净、护佑与灵动。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p073-126/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p073-126/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p073-126/detail_01.webp")
        ],
        "tags": [
          "南红、银",
          "耳钉",
          "耳钉"
        ],
        "price": 193.0,
        "currency": "USD"
      },
      {
        "id": "product-086-127",
        "code": "086",
        "name": "山月入怀",
        "sourceName": "青城山官方旗舰店天然和田白玉翡翠耳环新中式气质灵韵葫芦耳钩",
        "type": "耳钉",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "翡翠S925银葫芦纳福以翡翠、S925银、银、玉为核心元素。翡翠清润有生机，寓意福气、贵气与长久安宁；银质清亮，寓意洁净、护佑与灵动；玉质温雅，寓意君子之德、平安与圆满。葫芦形制取纳福纳吉…",
        "details": [
          "翡翠S925银葫芦纳福以翡翠、S925银、银、玉为核心元素。翡翠清润有生机，寓意福气、贵气与长久安宁",
          "银质清亮，寓意洁净、护佑与灵动",
          "玉质温雅，寓意君子之德、平安与圆满。葫芦形制取纳福纳吉、圆满安康之意，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p086-127/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p086-127/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p086-127/detail_01.webp")
        ],
        "tags": [
          "翡翠、S925银、银、玉",
          "耳钉",
          "耳钉"
        ],
        "price": 105.0,
        "currency": "USD"
      },
      {
        "id": "product-091-128",
        "code": "091",
        "name": "云纹祥瑞",
        "sourceName": "青城山官方正品碧玉珍珠耳环女原创设计小众国风垂坠耳饰女款复古",
        "type": "耳钉",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "珍珠银玄韵以珍珠、银、玉为核心元素。珍珠莹润柔和，寓意圆融、珍贵与温婉；银质清亮，寓意洁净、护佑与灵动；玉质温雅，寓意君子之德、平安与圆满。圆珠成串，象征周而复始、福气流转，适合日常佩戴、…",
        "details": [
          "珍珠银玄韵以珍珠、银、玉为核心元素。珍珠莹润柔和，寓意圆融、珍贵与温婉",
          "银质清亮，寓意洁净、护佑与灵动",
          "玉质温雅，寓意君子之德、平安与圆满。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p091-128/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p091-128/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p091-128/detail_01.webp")
        ],
        "tags": [
          "珍珠、银、玉",
          "耳钉",
          "耳钉"
        ],
        "price": 136.0,
        "currency": "USD"
      },
      {
        "id": "product-129-129",
        "code": "129",
        "name": "归云知意",
        "sourceName": "青城山天然川料南红柿子红耳钩女款耳环s925银新中式本命年礼品",
        "type": "耳钉",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "南红S925银玄韵以南红、S925银、银为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门；银质清亮，寓意洁净、护佑与灵动。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作…",
        "details": [
          "南红S925银玄韵以南红、S925银、银为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门",
          "银质清亮，寓意洁净、护佑与灵动。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p129-129/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p129-129/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p129-129/detail_01.webp")
        ],
        "tags": [
          "南红、S925银、银",
          "耳钉",
          "耳钉"
        ],
        "price": 136.0,
        "currency": "USD"
      },
      {
        "id": "product-170-130",
        "code": "170",
        "name": "晴岚安然",
        "sourceName": "青城山天然南红耳饰红耳环新娘11mm珍珠复古正红色中式耳坠饰品",
        "type": "耳钉",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "南红珍珠玄韵以南红、珍珠、银为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门；珍珠莹润柔和，寓意圆融、珍贵与温婉；银质清亮，寓意洁净、护佑与灵动。圆珠成串，象征周而复始、福气流转，适…",
        "details": [
          "南红珍珠玄韵以南红、珍珠、银为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门",
          "珍珠莹润柔和，寓意圆融、珍贵与温婉",
          "银质清亮，寓意洁净、护佑与灵动。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p170-130/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p170-130/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p170-130/detail_01.webp")
        ],
        "tags": [
          "南红、珍珠、银",
          "耳钉",
          "耳钉"
        ],
        "price": 183.0,
        "currency": "USD"
      },
      {
        "id": "product-171-131",
        "code": "171",
        "name": "莲心云起",
        "sourceName": "青城山天然原矿川料南红玛瑙火焰纹耳环复古新中式百搭耳饰女礼品",
        "type": "耳钉",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "南红玛瑙玄韵以南红、玛瑙、银、花为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门；玛瑙纹理沉稳，寓意安定心念、凝聚内在力量；银质清亮，寓意洁净、护佑与灵动；花香意象柔美，寓意舒展、悦…",
        "details": [
          "南红玛瑙玄韵以南红、玛瑙、银、花为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门",
          "玛瑙纹理沉稳，寓意安定心念、凝聚内在力量",
          "银质清亮，寓意洁净、护佑与灵动",
          "花香意象柔美，寓意舒展、悦己与生机。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p171-131/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p171-131/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p171-131/detail_01.webp")
        ],
        "tags": [
          "南红、玛瑙、银、花",
          "耳钉",
          "耳钉"
        ],
        "price": 119.0,
        "currency": "USD"
      }
    ]
  },
  {
    "id": "incense-oriental-aroma",
    "parent": "incense",
    "title": "东方香调",
    "subtitle": "Oriental Aroma",
    "description": "偏暖、沉静、层次丰富的合香珠系列。",
    "items": [
      {
        "id": "product-159-179",
        "code": "159",
        "name": "竹影生辉",
        "sourceName": "青城山道香古法非遗合香珠双圈手持串珠五方贵人龙涎香赵公明吊坠",
        "type": "香饰香珠",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "龙吟护佑159以图片材质待复核为核心元素。材质与形制以图片和原商品信息为准，整体寓意安定、护佑与东方雅致。香韵随身，取清心定气、辟浊纳祥之意，适合日常佩戴、修心静坐或作为东方礼赠。",
        "details": [
          "龙吟护佑159以图片材质待复核为核心元素。材质与形制以图片和原商品信息为准，整体寓意安定、护佑与东方雅致。香韵随身，取清心定气、辟浊纳祥之意，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p159-179/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p159-179/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p159-179/detail_01.webp")
        ],
        "tags": [
          "图片材质待复核",
          "东方香调",
          "香饰香珠"
        ],
        "price": 615.0,
        "currency": "USD"
      },
      {
        "id": "product-165-180",
        "code": "165",
        "name": "云佩165",
        "sourceName": "青城道香纯手工制作古法合香珠手机吊坠非遗传承孙思邈香方包挂",
        "type": "香饰香珠",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "云佩165以图片材质待复核为核心元素。材质与形制以图片和原商品信息为准，整体寓意安定、护佑与东方雅致。香韵随身，取清心定气、辟浊纳祥之意，适合日常佩戴、修心静坐或作为东方礼赠。",
        "details": [
          "云佩165以图片材质待复核为核心元素。材质与形制以图片和原商品信息为准，整体寓意安定、护佑与东方雅致。香韵随身，取清心定气、辟浊纳祥之意，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p165-180/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p165-180/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p165-180/detail_01.webp")
        ],
        "tags": [
          "图片材质待复核",
          "东方香调",
          "香饰香珠"
        ],
        "price": 132.0,
        "currency": "USD"
      },
      {
        "id": "product-174-181",
        "code": "174",
        "name": "鹤梦听泉",
        "sourceName": "青城山道香非遗古法传承孙思邈中药香方五行合香珠手串龙涎香桶珠",
        "type": "香饰香珠",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "龙吟护佑174以图片材质待复核为核心元素。材质与形制以图片和原商品信息为准，整体寓意安定、护佑与东方雅致。香韵随身，取清心定气、辟浊纳祥之意，适合日常佩戴、修心静坐或作为东方礼赠。",
        "details": [
          "龙吟护佑174以图片材质待复核为核心元素。材质与形制以图片和原商品信息为准，整体寓意安定、护佑与东方雅致。香韵随身，取清心定气、辟浊纳祥之意，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p174-181/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p174-181/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p174-181/detail_01.webp")
        ],
        "tags": [
          "图片材质待复核",
          "东方香调",
          "香饰香珠"
        ],
        "price": 215.0,
        "currency": "USD"
      }
    ]
  },
  {
    "id": "incense-woody-aroma",
    "parent": "incense",
    "title": "木质香调",
    "subtitle": "Woody Aroma",
    "description": "木质、安静、深呼吸感的香饰系列。",
    "items": [
      {
        "id": "product-022-182",
        "code": "022",
        "name": "秋水向暖",
        "sourceName": "普陀山文创集沉香木手串佛珠静心盘玩念珠十二生肖本命年佛转运珠",
        "type": "香饰香珠",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "沉香清修圆珠以沉香为核心元素。沉香香气内敛深远，寓意静心、纳福与清明。香韵随身，取清心定气、辟浊纳祥之意，适合日常佩戴、修心静坐或作为东方礼赠。",
        "details": [
          "沉香清修圆珠以沉香为核心元素。沉香香气内敛深远，寓意静心、纳福与清明。香韵随身，取清心定气、辟浊纳祥之意，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p022-182/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p022-182/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p022-182/detail_01.webp")
        ],
        "tags": [
          "沉香",
          "木质香调",
          "香饰香珠"
        ],
        "price": 198.0,
        "currency": "USD"
      },
      {
        "id": "product-068-183",
        "code": "068",
        "name": "春岚含光",
        "sourceName": "青城山【心生木香】奇楠沉香南红手串搭屁桃碧玉吊坠百搭时尚礼品",
        "type": "香饰香珠",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "南红沉香清修圆珠以南红、沉香、银、玉为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门；沉香香气内敛深远，寓意静心、纳福与清明；银质清亮，寓意洁净、护佑与灵动；玉质温雅，寓意君子之德、…",
        "details": [
          "南红沉香清修圆珠以南红、沉香、银、玉为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门",
          "沉香香气内敛深远，寓意静心、纳福与清明",
          "银质清亮，寓意洁净、护佑与灵动",
          "玉质温雅，寓意君子之德、平安与圆满。香韵随身，取清心定气、辟浊纳祥之意，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p068-183/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p068-183/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p068-183/detail_01.webp")
        ],
        "tags": [
          "南红、沉香、银、玉",
          "木质香调",
          "香饰香珠"
        ],
        "price": 166.0,
        "currency": "USD"
      },
      {
        "id": "product-097-184",
        "code": "097",
        "name": "长风清安",
        "sourceName": "青城山官方天然和田玉且末蓝平安如意祥云锁吊坠配流苏沉香珠礼物",
        "type": "香饰香珠",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "和田玉沉香如意长锁以和田玉、沉香、银、玉为核心元素。和田玉温润含蓄，寓意仁和、圆满与福泽绵长；沉香香气内敛深远，寓意静心、纳福与清明；银质清亮，寓意洁净、护佑与灵动；玉质温雅，寓意君子之德…",
        "details": [
          "和田玉沉香如意长锁以和田玉、沉香、银、玉为核心元素。和田玉温润含蓄，寓意仁和、圆满与福泽绵长",
          "沉香香气内敛深远，寓意静心、纳福与清明",
          "银质清亮，寓意洁净、护佑与灵动",
          "玉质温雅，寓意君子之德、平安与圆满。香韵随身，取清心定气、辟浊纳祥之意，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p097-184/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p097-184/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p097-184/detail_01.webp")
        ],
        "tags": [
          "和田玉、沉香、银、玉",
          "木质香调",
          "香饰香珠"
        ],
        "price": 260.0,
        "currency": "USD"
      },
      {
        "id": "product-100-185",
        "code": "100",
        "name": "檐雨入怀",
        "sourceName": "青城山官方正品天然和田且末蓝平安扣沉香葫芦项链颈饰送礼",
        "type": "香饰香珠",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "沉香银葫芦纳福以沉香、银为核心元素。沉香香气内敛深远，寓意静心、纳福与清明；银质清亮，寓意洁净、护佑与灵动。香韵随身，取清心定气、辟浊纳祥之意，适合日常佩戴、修心静坐或作为东方礼赠。",
        "details": [
          "沉香银葫芦纳福以沉香、银为核心元素。沉香香气内敛深远，寓意静心、纳福与清明",
          "银质清亮，寓意洁净、护佑与灵动。香韵随身，取清心定气、辟浊纳祥之意，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p100-185/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p100-185/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p100-185/detail_01.webp")
        ],
        "tags": [
          "沉香、银",
          "木质香调",
          "香饰香珠"
        ],
        "price": 177.0,
        "currency": "USD"
      },
      {
        "id": "product-139-186",
        "code": "139",
        "name": "清泉祥瑞",
        "sourceName": "青城山（饰品）直播间沉香专拍链接【非产品链接】！",
        "type": "香饰香珠",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "南红沉香玄韵以南红、沉香为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门；沉香香气内敛深远，寓意静心、纳福与清明。香韵随身，取清心定气、辟浊纳祥之意，适合日常佩戴、修心静坐或作为东方…",
        "details": [
          "南红沉香玄韵以南红、沉香为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门",
          "沉香香气内敛深远，寓意静心、纳福与清明。香韵随身，取清心定气、辟浊纳祥之意，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p139-186/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p139-186/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p139-186/detail_01.webp")
        ],
        "tags": [
          "南红、沉香",
          "木质香调",
          "香饰香珠"
        ],
        "price": 980.0,
        "currency": "USD"
      },
      {
        "id": "product-177-187",
        "code": "177",
        "name": "晚香知意",
        "sourceName": "青城山天然芽庄奇楠沉香项链南红多圈手链可拆卸锁骨吊坠女士款",
        "type": "香饰香珠",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "南红沉香如意长锁以南红、沉香、银为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门；沉香香气内敛深远，寓意静心、纳福与清明；银质清亮，寓意洁净、护佑与灵动。香韵随身，取清心定气、辟浊纳…",
        "details": [
          "南红沉香如意长锁以南红、沉香、银为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门",
          "沉香香气内敛深远，寓意静心、纳福与清明",
          "银质清亮，寓意洁净、护佑与灵动。香韵随身，取清心定气、辟浊纳祥之意，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p177-187/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p177-187/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p177-187/detail_01.webp")
        ],
        "tags": [
          "南红、沉香、银",
          "木质香调",
          "香饰香珠"
        ],
        "price": 586.0,
        "currency": "USD"
      },
      {
        "id": "product-178-188",
        "code": "178",
        "name": "澄心安然",
        "sourceName": "青城山官方珠宝天然沉香项链葫芦平安碧玉三圈手链手串正品",
        "type": "香饰香珠",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "沉香玉葫芦纳福以沉香、玉为核心元素。沉香香气内敛深远，寓意静心、纳福与清明；玉质温雅，寓意君子之德、平安与圆满。香韵随身，取清心定气、辟浊纳祥之意，适合日常佩戴、修心静坐或作为东方礼赠。",
        "details": [
          "沉香玉葫芦纳福以沉香、玉为核心元素。沉香香气内敛深远，寓意静心、纳福与清明",
          "玉质温雅，寓意君子之德、平安与圆满。香韵随身，取清心定气、辟浊纳祥之意，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p178-188/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p178-188/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p178-188/detail_01.webp")
        ],
        "tags": [
          "沉香、玉",
          "木质香调",
          "香饰香珠"
        ],
        "price": 433.0,
        "currency": "USD"
      },
      {
        "id": "product-186-189",
        "code": "186",
        "name": "归舟护念",
        "sourceName": "青城山沉香108流珠项链手串两用国风8mm简约男女大气节礼毛衣链",
        "type": "香饰香珠",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "沉香清修圆珠以沉香为核心元素。沉香香气内敛深远，寓意静心、纳福与清明。香韵随身，取清心定气、辟浊纳祥之意，适合日常佩戴、修心静坐或作为东方礼赠。",
        "details": [
          "沉香清修圆珠以沉香为核心元素。沉香香气内敛深远，寓意静心、纳福与清明。香韵随身，取清心定气、辟浊纳祥之意，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p186-189/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p186-189/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p186-189/detail_01.webp")
        ],
        "tags": [
          "沉香",
          "木质香调",
          "香饰香珠"
        ],
        "price": 2155.0,
        "currency": "USD"
      },
      {
        "id": "product-190-190",
        "code": "190",
        "name": "听雪纳福",
        "sourceName": "青城山官方正品天然奇楠沉香手串静心安神留香素圈手串男女百搭款",
        "type": "香饰香珠",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "沉香清修圆珠以沉香为核心元素。沉香香气内敛深远，寓意静心、纳福与清明。香韵随身，取清心定气、辟浊纳祥之意，适合日常佩戴、修心静坐或作为东方礼赠。",
        "details": [
          "沉香清修圆珠以沉香为核心元素。沉香香气内敛深远，寓意静心、纳福与清明。香韵随身，取清心定气、辟浊纳祥之意，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p190-190/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p190-190/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p190-190/detail_01.webp")
        ],
        "tags": [
          "沉香",
          "木质香调",
          "香饰香珠"
        ],
        "price": 411.0,
        "currency": "USD"
      },
      {
        "id": "product-193-191",
        "code": "193",
        "name": "照心寄月",
        "sourceName": "青城山天然正品海南沉香手串桶珠型枣珠蜜蜡大吉女款手链可延长链",
        "type": "香饰香珠",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "沉香蜜蜡清修圆珠以沉香、蜜蜡为核心元素。沉香香气内敛深远，寓意静心、纳福与清明；蜜蜡温暖明亮，寓意丰盛、亲和与岁月沉淀。香韵随身，取清心定气、辟浊纳祥之意，适合日常佩戴、修心静坐或作为东方…",
        "details": [
          "沉香蜜蜡清修圆珠以沉香、蜜蜡为核心元素。沉香香气内敛深远，寓意静心、纳福与清明",
          "蜜蜡温暖明亮，寓意丰盛、亲和与岁月沉淀。香韵随身，取清心定气、辟浊纳祥之意，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p193-191/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p193-191/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p193-191/detail_01.webp")
        ],
        "tags": [
          "沉香、蜜蜡",
          "木质香调",
          "香饰香珠"
        ],
        "price": 979.0,
        "currency": "USD"
      },
      {
        "id": "product-194-192",
        "code": "194",
        "name": "闻磬照愿",
        "sourceName": "青城山官方正品天然海南奇楠沉香手串素圈大气男女百搭款送长辈",
        "type": "香饰香珠",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "沉香清修圆珠以沉香为核心元素。沉香香气内敛深远，寓意静心、纳福与清明。香韵随身，取清心定气、辟浊纳祥之意，适合日常佩戴、修心静坐或作为东方礼赠。",
        "details": [
          "沉香清修圆珠以沉香为核心元素。沉香香气内敛深远，寓意静心、纳福与清明。香韵随身，取清心定气、辟浊纳祥之意，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p194-192/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p194-192/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p194-192/detail_01.webp")
        ],
        "tags": [
          "沉香",
          "木质香调",
          "香饰香珠"
        ],
        "price": 607.0,
        "currency": "USD"
      },
      {
        "id": "product-195-193",
        "code": "195",
        "name": "安行心宁",
        "sourceName": "青城山官方正品保真奇楠沉香手串桶珠6mm素圈DIY老型珠女款手链",
        "type": "香饰香珠",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "沉香清修圆珠以沉香为核心元素。沉香香气内敛深远，寓意静心、纳福与清明。香韵随身，取清心定气、辟浊纳祥之意，适合日常佩戴、修心静坐或作为东方礼赠。",
        "details": [
          "沉香清修圆珠以沉香为核心元素。沉香香气内敛深远，寓意静心、纳福与清明。香韵随身，取清心定气、辟浊纳祥之意，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p195-193/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p195-193/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p195-193/detail_01.webp")
        ],
        "tags": [
          "沉香",
          "木质香调",
          "香饰香珠"
        ],
        "price": 261.0,
        "currency": "USD"
      },
      {
        "id": "product-196-194",
        "code": "196",
        "name": "一念静好",
        "sourceName": "青城山官方正品保真天然沉香108项链简约大气精致百搭毛衣链男女",
        "type": "香饰香珠",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "沉香云佩以沉香为核心元素。沉香香气内敛深远，寓意静心、纳福与清明。香韵随身，取清心定气、辟浊纳祥之意，适合日常佩戴、修心静坐或作为东方礼赠。",
        "details": [
          "沉香云佩以沉香为核心元素。沉香香气内敛深远，寓意静心、纳福与清明。香韵随身，取清心定气、辟浊纳祥之意，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p196-194/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p196-194/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p196-194/detail_01.webp")
        ],
        "tags": [
          "沉香",
          "木质香调",
          "香饰香珠"
        ],
        "price": 950.0,
        "currency": "USD"
      },
      {
        "id": "product-203-195",
        "code": "203",
        "name": "云岫生辉",
        "sourceName": "青城山天然沉香手串925吉字葫芦猛犸小绿松蜜蜡保山南红手串",
        "type": "香饰香珠",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "南红沉香葫芦纳福以南红、沉香、蜜蜡、S925银、银为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门；沉香香气内敛深远，寓意静心、纳福与清明；蜜蜡温暖明亮，寓意丰盛、亲和与岁月沉淀；银…",
        "details": [
          "南红沉香葫芦纳福以南红、沉香、蜜蜡、S925银、银为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门",
          "沉香香气内敛深远，寓意静心、纳福与清明",
          "蜜蜡温暖明亮，寓意丰盛、亲和与岁月沉淀",
          "银质清亮，寓意洁净、护佑与灵动。香韵随身，取清心定气、辟浊纳祥之意，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p203-195/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p203-195/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p203-195/detail_01.webp")
        ],
        "tags": [
          "南红、沉香、蜜蜡、S925银、银",
          "木质香调",
          "香饰香珠"
        ],
        "price": 910.0,
        "currency": "USD"
      },
      {
        "id": "product-207-196",
        "code": "207",
        "name": "松风听泉",
        "sourceName": "青城山天然绿奇楠方块沉香手串女川料老型南红925银五帝钱币手链",
        "type": "香饰香珠",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "南红沉香清修圆珠以南红、沉香、S925银、银为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门；沉香香气内敛深远，寓意静心、纳福与清明；银质清亮，寓意洁净、护佑与灵动。香韵随身，取清心…",
        "details": [
          "南红沉香清修圆珠以南红、沉香、S925银、银为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门",
          "沉香香气内敛深远，寓意静心、纳福与清明",
          "银质清亮，寓意洁净、护佑与灵动。香韵随身，取清心定气、辟浊纳祥之意，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p207-196/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p207-196/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p207-196/detail_01.webp")
        ],
        "tags": [
          "南红、沉香、S925银、银",
          "木质香调",
          "香饰香珠"
        ],
        "price": 438.0,
        "currency": "USD"
      },
      {
        "id": "product-209-197",
        "code": "209",
        "name": "月照向暖",
        "sourceName": "青城山官方正品珠宝天然沉香手串野生奇楠碧玉把把壶木质手链女款",
        "type": "香饰香珠",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "沉香玉清修圆珠以沉香、玉为核心元素。沉香香气内敛深远，寓意静心、纳福与清明；玉质温雅，寓意君子之德、平安与圆满。香韵随身，取清心定气、辟浊纳祥之意，适合日常佩戴、修心静坐或作为东方礼赠。",
        "details": [
          "沉香玉清修圆珠以沉香、玉为核心元素。沉香香气内敛深远，寓意静心、纳福与清明",
          "玉质温雅，寓意君子之德、平安与圆满。香韵随身，取清心定气、辟浊纳祥之意，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p209-197/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p209-197/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p209-197/detail_01.webp")
        ],
        "tags": [
          "沉香、玉",
          "木质香调",
          "香饰香珠"
        ],
        "price": 314.0,
        "currency": "USD"
      },
      {
        "id": "product-216-198",
        "code": "216",
        "name": "静山含光",
        "sourceName": "青城山川料瓦西随型火焰纹南红手串配沉香925青金石五路财神男女",
        "type": "香饰香珠",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "南红青金石清修圆珠以南红、青金石、沉香、银为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门；青金石深蓝如夜空，寓意智慧、专注与贵气；沉香香气内敛深远，寓意静心、纳福与清明；银质清亮，…",
        "details": [
          "南红青金石清修圆珠以南红、青金石、沉香、银为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门",
          "青金石深蓝如夜空，寓意智慧、专注与贵气",
          "沉香香气内敛深远，寓意静心、纳福与清明",
          "银质清亮，寓意洁净、护佑与灵动。香韵随身，取清心定气、辟浊纳祥之意，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p216-198/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p216-198/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p216-198/detail_01.webp")
        ],
        "tags": [
          "南红、青金石、沉香、银",
          "木质香调",
          "香饰香珠"
        ],
        "price": 321.0,
        "currency": "USD"
      },
      {
        "id": "product-217-199",
        "code": "217",
        "name": "星河清安",
        "sourceName": "青城山天然川料随型火焰纹南红玛瑙手串奇楠沉香隔珠文玩男女款",
        "type": "香饰香珠",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "南红玛瑙清修圆珠以南红、玛瑙、沉香、银为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门；玛瑙纹理沉稳，寓意安定心念、凝聚内在力量；沉香香气内敛深远，寓意静心、纳福与清明；银质清亮，寓…",
        "details": [
          "南红玛瑙清修圆珠以南红、玛瑙、沉香、银为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门",
          "玛瑙纹理沉稳，寓意安定心念、凝聚内在力量",
          "沉香香气内敛深远，寓意静心、纳福与清明",
          "银质清亮，寓意洁净、护佑与灵动。香韵随身，取清心定气、辟浊纳祥之意，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p217-199/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p217-199/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p217-199/detail_01.webp")
        ],
        "tags": [
          "南红、玛瑙、沉香、银",
          "木质香调",
          "香饰香珠"
        ],
        "price": 257.0,
        "currency": "USD"
      },
      {
        "id": "product-231-200",
        "code": "231",
        "name": "福泽入怀",
        "sourceName": "青城山天奇楠沉香多功能项链屁桃爱心吊坠原矿包浆南红多圈手串女",
        "type": "香饰香珠",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "南红沉香清修圆珠以南红、沉香、茶为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门；沉香香气内敛深远，寓意静心、纳福与清明；茶香清雅，寓意清心、和合与从容。香韵随身，取清心定气、辟浊纳…",
        "details": [
          "南红沉香清修圆珠以南红、沉香、茶为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门",
          "沉香香气内敛深远，寓意静心、纳福与清明",
          "茶香清雅，寓意清心、和合与从容。香韵随身，取清心定气、辟浊纳祥之意，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p231-200/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p231-200/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p231-200/detail_01.webp")
        ],
        "tags": [
          "南红、沉香、茶",
          "木质香调",
          "香饰香珠"
        ],
        "price": 407.0,
        "currency": "USD"
      },
      {
        "id": "product-232-201",
        "code": "232",
        "name": "兰若祥瑞",
        "sourceName": "青城山官方珠宝沉香配天然水晶手串高端木质设计情绪稳定女款手链",
        "type": "香饰香珠",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "水晶沉香清修圆珠以水晶、沉香、银为核心元素。水晶通透澄明，寓意净化、清醒与能量流动；沉香香气内敛深远，寓意静心、纳福与清明；银质清亮，寓意洁净、护佑与灵动。香韵随身，取清心定气、辟浊纳祥之…",
        "details": [
          "水晶沉香清修圆珠以水晶、沉香、银为核心元素。水晶通透澄明，寓意净化、清醒与能量流动",
          "沉香香气内敛深远，寓意静心、纳福与清明",
          "银质清亮，寓意洁净、护佑与灵动。香韵随身，取清心定气、辟浊纳祥之意，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p232-201/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p232-201/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p232-201/detail_01.webp")
        ],
        "tags": [
          "水晶、沉香、银",
          "木质香调",
          "香饰香珠"
        ],
        "price": 231.0,
        "currency": "USD"
      },
      {
        "id": "product-238-202",
        "code": "238",
        "name": "朝露知意",
        "sourceName": "青城山莺歌绿奇楠沉香算盘珠手串碧玉原矿南红如意手链女送礼把把",
        "type": "香饰香珠",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "南红沉香清修圆珠以南红、沉香、玉为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门；沉香香气内敛深远，寓意静心、纳福与清明；玉质温雅，寓意君子之德、平安与圆满。香韵随身，取清心定气、辟…",
        "details": [
          "南红沉香清修圆珠以南红、沉香、玉为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门",
          "沉香香气内敛深远，寓意静心、纳福与清明",
          "玉质温雅，寓意君子之德、平安与圆满。香韵随身，取清心定气、辟浊纳祥之意，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p238-202/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p238-202/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p238-202/detail_01.webp")
        ],
        "tags": [
          "南红、沉香、玉",
          "木质香调",
          "香饰香珠"
        ],
        "price": 509.0,
        "currency": "USD"
      },
      {
        "id": "product-239-203",
        "code": "239",
        "name": "清晖安然",
        "sourceName": "青城山官方天然沉香项链琥珀葫芦手链女莺歌奇楠木多圈手串",
        "type": "香饰香珠",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "沉香琥珀葫芦纳福以沉香、琥珀为核心元素。沉香香气内敛深远，寓意静心、纳福与清明；琥珀凝结时光，寓意温暖、守护与安然。香韵随身，取清心定气、辟浊纳祥之意，适合日常佩戴、修心静坐或作为东方礼赠。",
        "details": [
          "沉香琥珀葫芦纳福以沉香、琥珀为核心元素。沉香香气内敛深远，寓意静心、纳福与清明",
          "琥珀凝结时光，寓意温暖、守护与安然。香韵随身，取清心定气、辟浊纳祥之意，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p239-203/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p239-203/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p239-203/detail_01.webp")
        ],
        "tags": [
          "沉香、琥珀",
          "木质香调",
          "香饰香珠"
        ],
        "price": 363.0,
        "currency": "USD"
      },
      {
        "id": "product-241-204",
        "code": "241",
        "name": "灵犀云起",
        "sourceName": "青城山天然川料南红玛瑙小米珠戒指碎银沉香漆珠对戒指情侣男女款",
        "type": "香饰香珠",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "南红玛瑙玄韵以南红、玛瑙、沉香、银为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门；玛瑙纹理沉稳，寓意安定心念、凝聚内在力量；沉香香气内敛深远，寓意静心、纳福与清明；银质清亮，寓意洁…",
        "details": [
          "南红玛瑙玄韵以南红、玛瑙、沉香、银为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门",
          "玛瑙纹理沉稳，寓意安定心念、凝聚内在力量",
          "沉香香气内敛深远，寓意静心、纳福与清明",
          "银质清亮，寓意洁净、护佑与灵动。香韵随身，取清心定气、辟浊纳祥之意，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p241-204/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p241-204/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p241-204/detail_01.webp")
        ],
        "tags": [
          "南红、玛瑙、沉香、银",
          "木质香调",
          "香饰香珠"
        ],
        "price": 128.0,
        "currency": "USD"
      },
      {
        "id": "product-246-205",
        "code": "246",
        "name": "愿景护念",
        "sourceName": "青城山官方珠宝天然沉香耳钉六角奇楠木质耳饰喜乐耳坠女耳环银制",
        "type": "香饰香珠",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "沉香银玄韵以沉香、银为核心元素。沉香香气内敛深远，寓意静心、纳福与清明；银质清亮，寓意洁净、护佑与灵动。香韵随身，取清心定气、辟浊纳祥之意，适合日常佩戴、修心静坐或作为东方礼赠。",
        "details": [
          "沉香银玄韵以沉香、银为核心元素。沉香香气内敛深远，寓意静心、纳福与清明",
          "银质清亮，寓意洁净、护佑与灵动。香韵随身，取清心定气、辟浊纳祥之意，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p246-205/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p246-205/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p246-205/detail_01.webp")
        ],
        "tags": [
          "沉香、银",
          "木质香调",
          "香饰香珠"
        ],
        "price": 129.0,
        "currency": "USD"
      }
    ]
  },
  {
    "id": "incense-floral-aroma",
    "parent": "incense",
    "title": "花香调",
    "subtitle": "Floral Aroma",
    "description": "柔和花香与东方香材结合，适合轻盈、温暖的礼物。",
    "items": [
      {
        "id": "product-106-206",
        "code": "106",
        "name": "山月纳福",
        "sourceName": "青城山天然和田玉青花玉长条无事牌浓墨晕染沉香碧玉流苏百搭女款",
        "type": "香饰香珠",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "和田玉沉香花神凝香以和田玉、沉香、银、玉、花为核心元素。和田玉温润含蓄，寓意仁和、圆满与福泽绵长；沉香香气内敛深远，寓意静心、纳福与清明；银质清亮，寓意洁净、护佑与灵动；玉质温雅，寓意君子…",
        "details": [
          "和田玉沉香花神凝香以和田玉、沉香、银、玉、花为核心元素。和田玉温润含蓄，寓意仁和、圆满与福泽绵长",
          "沉香香气内敛深远，寓意静心、纳福与清明",
          "银质清亮，寓意洁净、护佑与灵动",
          "玉质温雅，寓意君子之德、平安与圆满"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p106-206/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p106-206/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p106-206/detail_01.webp")
        ],
        "tags": [
          "和田玉、沉香、银、玉、花",
          "花香调",
          "香饰香珠"
        ],
        "price": 194.0,
        "currency": "USD"
      },
      {
        "id": "product-118-207",
        "code": "118",
        "name": "云纹寄月",
        "sourceName": "青城山天然和田玉11mm且末蓝圆珠沉香山茶花贝手串 百搭送礼好物",
        "type": "香饰香珠",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "和田玉沉香花神凝香以和田玉、沉香、银、玉、花、茶为核心元素。和田玉温润含蓄，寓意仁和、圆满与福泽绵长；沉香香气内敛深远，寓意静心、纳福与清明；银质清亮，寓意洁净、护佑与灵动；玉质温雅，寓意…",
        "details": [
          "和田玉沉香花神凝香以和田玉、沉香、银、玉、花、茶为核心元素。和田玉温润含蓄，寓意仁和、圆满与福泽绵长",
          "沉香香气内敛深远，寓意静心、纳福与清明",
          "银质清亮，寓意洁净、护佑与灵动",
          "玉质温雅，寓意君子之德、平安与圆满"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p118-207/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p118-207/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p118-207/detail_01.webp")
        ],
        "tags": [
          "和田玉、沉香、银、玉、花、茶",
          "花香调",
          "香饰香珠"
        ],
        "price": 292.0,
        "currency": "USD"
      },
      {
        "id": "product-137-208",
        "code": "137",
        "name": "归云照愿",
        "sourceName": "青城山饰品合香珠手串非遗古法药香龙涎香薰中药材降真香手链",
        "type": "香饰香珠",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "花龙吟护佑以花为核心元素。花香意象柔美，寓意舒展、悦己与生机。香韵随身，取清心定气、辟浊纳祥之意，适合日常佩戴、修心静坐或作为东方礼赠。",
        "details": [
          "花龙吟护佑以花为核心元素。花香意象柔美，寓意舒展、悦己与生机。香韵随身，取清心定气、辟浊纳祥之意，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p137-208/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p137-208/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p137-208/detail_01.webp")
        ],
        "tags": [
          "花",
          "花香调",
          "香饰香珠"
        ],
        "price": 189.0,
        "currency": "USD"
      },
      {
        "id": "product-147-209",
        "code": "147",
        "name": "晴岚静意",
        "sourceName": "青城山官方珠宝古法五行合香珠手串中药龙涎桂花香手持佛珠手链",
        "type": "香饰香珠",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "花龙吟护佑以花为核心元素。花香意象柔美，寓意舒展、悦己与生机。香韵随身，取清心定气、辟浊纳祥之意，适合日常佩戴、修心静坐或作为东方礼赠。",
        "details": [
          "花龙吟护佑以花为核心元素。花香意象柔美，寓意舒展、悦己与生机。香韵随身，取清心定气、辟浊纳祥之意，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p147-209/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p147-209/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p147-209/detail_01.webp")
        ],
        "tags": [
          "花",
          "花香调",
          "香饰香珠"
        ],
        "price": 178.0,
        "currency": "USD"
      },
      {
        "id": "product-152-210",
        "code": "152",
        "name": "拂晓长宁",
        "sourceName": "青城山龙涎香五方贵人中药香珠手串清妙香五行古法非遗合香珠18籽",
        "type": "香饰香珠",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "花龙吟护佑以花为核心元素。花香意象柔美，寓意舒展、悦己与生机。香韵随身，取清心定气、辟浊纳祥之意，适合日常佩戴、修心静坐或作为东方礼赠。",
        "details": [
          "花龙吟护佑以花为核心元素。花香意象柔美，寓意舒展、悦己与生机。香韵随身，取清心定气、辟浊纳祥之意，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p152-210/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p152-210/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p152-210/detail_01.webp")
        ],
        "tags": [
          "花",
          "花香调",
          "香饰香珠"
        ],
        "price": 316.0,
        "currency": "USD"
      },
      {
        "id": "product-192-211",
        "code": "192",
        "name": "玄光安和",
        "sourceName": "青城山官方文创珠宝饰品 直播专享特供链接",
        "type": "香饰香珠",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "沉香花玄韵以沉香、花为核心元素。沉香香气内敛深远，寓意静心、纳福与清明；花香意象柔美，寓意舒展、悦己与生机。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。",
        "details": [
          "沉香花玄韵以沉香、花为核心元素。沉香香气内敛深远，寓意静心、纳福与清明",
          "花香意象柔美，寓意舒展、悦己与生机。圆珠成串，象征周而复始、福气流转，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p192-211/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p192-211/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p192-211/detail_01.webp")
        ],
        "tags": [
          "沉香、花",
          "花香调",
          "香饰香珠"
        ],
        "price": 685.0,
        "currency": "USD"
      },
      {
        "id": "product-221-212",
        "code": "221",
        "name": "照夜怀真",
        "sourceName": "青城山妙睡宁神古法非遗合香珠静心安神睡眠佛珠念珠道家手串男女",
        "type": "香饰香珠",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "花清修圆珠以花为核心元素。花香意象柔美，寓意舒展、悦己与生机。香韵随身，取清心定气、辟浊纳祥之意，适合日常佩戴、修心静坐或作为东方礼赠。",
        "details": [
          "花清修圆珠以花为核心元素。花香意象柔美，寓意舒展、悦己与生机。香韵随身，取清心定气、辟浊纳祥之意，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p221-212/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p221-212/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p221-212/detail_01.webp")
        ],
        "tags": [
          "花",
          "花香调",
          "香饰香珠"
        ],
        "price": 228.0,
        "currency": "USD"
      },
      {
        "id": "product-224-213",
        "code": "224",
        "name": "微澜承福",
        "sourceName": "青城山【紫气东来】九紫离火合香珠水晶手串巳巳如意蛇年锁骨链女",
        "type": "香饰香珠",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "水晶花如意长锁以水晶、花为核心元素。水晶通透澄明，寓意净化、清醒与能量流动；花香意象柔美，寓意舒展、悦己与生机。香韵随身，取清心定气、辟浊纳祥之意，适合日常佩戴、修心静坐或作为东方礼赠。",
        "details": [
          "水晶花如意长锁以水晶、花为核心元素。水晶通透澄明，寓意净化、清醒与能量流动",
          "花香意象柔美，寓意舒展、悦己与生机。香韵随身，取清心定气、辟浊纳祥之意，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p224-213/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p224-213/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p224-213/detail_01.webp")
        ],
        "tags": [
          "水晶、花",
          "花香调",
          "香饰香珠"
        ],
        "price": 130.0,
        "currency": "USD"
      },
      {
        "id": "product-245-214",
        "code": "245",
        "name": "流光愿成",
        "sourceName": "青城山俄料花珀圆珠吊坠蜜蜡琥珀花花挂件diy单珠万用能扣项链女",
        "type": "香饰香珠",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "沉香蜜蜡花神凝香以沉香、蜜蜡、琥珀、银、花为核心元素。沉香香气内敛深远，寓意静心、纳福与清明；蜜蜡温暖明亮，寓意丰盛、亲和与岁月沉淀；琥珀凝结时光，寓意温暖、守护与安然；银质清亮，寓意洁净…",
        "details": [
          "沉香蜜蜡花神凝香以沉香、蜜蜡、琥珀、银、花为核心元素。沉香香气内敛深远，寓意静心、纳福与清明",
          "蜜蜡温暖明亮，寓意丰盛、亲和与岁月沉淀",
          "琥珀凝结时光，寓意温暖、守护与安然",
          "银质清亮，寓意洁净、护佑与灵动"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p245-214/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p245-214/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p245-214/detail_01.webp")
        ],
        "tags": [
          "沉香、蜜蜡、琥珀、银、花",
          "花香调",
          "香饰香珠"
        ],
        "price": 131.0,
        "currency": "USD"
      },
      {
        "id": "product-247-215",
        "code": "247",
        "name": "明心凝光",
        "sourceName": "【玫瑰美人】青城山合香珠墨红玫瑰古法非遗女生盘玩蝴蝶花香手串",
        "type": "香饰香珠",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "南红水晶花神凝香以南红、水晶、银、花为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门；水晶通透澄明，寓意净化、清醒与能量流动；银质清亮，寓意洁净、护佑与灵动；花香意象柔美，寓意舒展、…",
        "details": [
          "南红水晶花神凝香以南红、水晶、银、花为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门",
          "水晶通透澄明，寓意净化、清醒与能量流动",
          "银质清亮，寓意洁净、护佑与灵动",
          "花香意象柔美，寓意舒展、悦己与生机。香韵随身，取清心定气、辟浊纳祥之意，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p247-215/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p247-215/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p247-215/detail_01.webp")
        ],
        "tags": [
          "南红、水晶、银、花",
          "花香调",
          "香饰香珠"
        ],
        "price": 132.0,
        "currency": "USD"
      },
      {
        "id": "product-248-216",
        "code": "248",
        "name": "竹影见喜",
        "sourceName": "【雍正避暑】青城山中药合香珠手串药香非遗古法夏日避暑清凉解热",
        "type": "香饰香珠",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "朱砂花清修圆珠以朱砂、花为核心元素。朱砂赤色端正，寓意辟邪、安定与护身；花香意象柔美，寓意舒展、悦己与生机。香韵随身，取清心定气、辟浊纳祥之意，适合日常佩戴、修心静坐或作为东方礼赠。",
        "details": [
          "朱砂花清修圆珠以朱砂、花为核心元素。朱砂赤色端正，寓意辟邪、安定与护身",
          "花香意象柔美，寓意舒展、悦己与生机。香韵随身，取清心定气、辟浊纳祥之意，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p248-216/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p248-216/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p248-216/detail_01.webp")
        ],
        "tags": [
          "朱砂、花",
          "花香调",
          "香饰香珠"
        ],
        "price": 133.0,
        "currency": "USD"
      },
      {
        "id": "product-249-217",
        "code": "249",
        "name": "鹤梦含章",
        "sourceName": "青城山合香珠手工diy材料串珠礼物天然中药香牌香珠手链包挂配饰",
        "type": "香饰香珠",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "南红和田玉清修圆珠以南红、和田玉、银、大漆、玉、花为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门；和田玉温润含蓄，寓意仁和、圆满与福泽绵长；银质清亮，寓意洁净、护佑与灵动；大漆光泽…",
        "details": [
          "南红和田玉清修圆珠以南红、和田玉、银、大漆、玉、花为核心元素。南红色泽温润赤诚，寓意热忱、守护与好运临门",
          "和田玉温润含蓄，寓意仁和、圆满与福泽绵长",
          "银质清亮，寓意洁净、护佑与灵动",
          "大漆光泽含蓄，寓意传承、圆满与东方雅韵"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p249-217/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p249-217/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p249-217/detail_01.webp")
        ],
        "tags": [
          "南红、和田玉、银、大漆、玉、花",
          "花香调",
          "香饰香珠"
        ],
        "price": 134.0,
        "currency": "USD"
      },
      {
        "id": "product-250-218",
        "code": "250",
        "name": "秋水无忧",
        "sourceName": "青城山合香珠吊坠中药国风蝴蝶活扣diy儿童平安扣四方如意锁项链",
        "type": "香饰香珠",
        "meaning": "以个人心愿为起点，适合祈福、守护、平安与东方礼赠。",
        "description": "菩提花如意长锁以菩提、花为核心元素。菩提承载修心之意，寓意觉悟、沉静与日日精进；花香意象柔美，寓意舒展、悦己与生机。香韵随身，取清心定气、辟浊纳祥之意，适合日常佩戴、修心静坐或作为东方礼赠。",
        "details": [
          "菩提花如意长锁以菩提、花为核心元素。菩提承载修心之意，寓意觉悟、沉静与日日精进",
          "花香意象柔美，寓意舒展、悦己与生机。香韵随身，取清心定气、辟浊纳祥之意，适合日常佩戴、修心静坐或作为东方礼赠。"
        ],
        "image": assetUrl("/assets/homepage-catalog-v2/p250-218/main.webp"),
        "images": [
          assetUrl("/assets/homepage-catalog-v2/p250-218/main.webp"),
          assetUrl("/assets/homepage-catalog-v2/p250-218/detail_01.webp")
        ],
        "tags": [
          "菩提、花",
          "花香调",
          "香饰香珠"
        ],
        "price": 129.0,
        "currency": "USD"
      }
    ]
  }
];
