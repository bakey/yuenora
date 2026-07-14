import { assetUrl } from "@/lib/assets";
export interface TaoGalleryItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

export const taoGalleryItems: TaoGalleryItem[] = [
  {
    id: 1,
    title: "檀木守护手串",
    category: "道系手串",
    image: assetUrl("/images/tao/bracelet-sandalwood.jpg"),
    description:
      "以东方平安、安定与个人心愿为灵感制作的檀木手串。",
  },
  {
    id: 2,
    title: "朱砂祝福手串",
    category: "祝福手作",
    image: assetUrl("/images/tao/bracelet-cinnabar.jpg"),
    description:
      "以传统朱砂色为灵感，寄托守护与祝福寓意的手串。",
  },
  {
    id: 3,
    title: "黑曜石守护手串",
    category: "守护系列",
    image: assetUrl("/images/tao/bracelet-obsidian.jpg"),
    description:
      "深色石材呈现沉稳力量，象征清明、边界与守护。",
  },
  {
    id: 4,
    title: "菩提念珠",
    category: "静心系列",
    image: assetUrl("/images/tao/bracelet-bodhi.jpg"),
    description:
      "天然珠材带来安静、专注与内在平衡的佩戴感。",
  },
  {
    id: 5,
    title: "香火与寺观",
    category: "东方文化",
    image: assetUrl("/images/tao/incense-temple.jpg"),
    description:
      "取意于安静寺观、香烟氤氲与传统仪式氛围。",
  },
  {
    id: 6,
    title: "寺观屋檐",
    category: "传统建筑",
    image: assetUrl("/images/tao/taoist-roof.jpg"),
    description:
      "以中式寺观、山林传统与庄严建筑为视觉参考。",
  },
  {
    id: 7,
    title: "祈福仪式",
    category: "传统服务",
    image: assetUrl("/images/tao/blessing-ritual.jpg"),
    description:
      "所选手串可按个人心愿加入传统祝福服务。",
  },
  {
    id: 8,
    title: "符纸纹样",
    category: "仪式符号",
    image: assetUrl("/images/tao/talisman-paper.jpg"),
    description:
      "视觉元素取意于符箓、传统符号与仪式器物。",
  },
  {
    id: 9,
    title: "锦袋礼盒",
    category: "礼赠工艺",
    image: assetUrl("/images/tao/silk-pouch.jpg"),
    description:
      "为手串与祝福器物准备的精致礼赠包装。",
  },
  {
    id: 10,
    title: "木作器物",
    category: "手作器物",
    image: assetUrl("/images/tao/wooden-craft.jpg"),
    description:
      "以天然材质与东方文化符号为灵感的手作器物。",
  },
];
