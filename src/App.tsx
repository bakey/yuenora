import { assetUrl } from "@/lib/assets";
﻿import { lazy, Suspense, useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import BrandMark from "./components/BrandMark";
import TaoPhotoWallSection from "./sections/TaoPhotoWallSection";
import { languageOptions, useI18n } from "./i18n";
import "./App.css";
import "./scroll-containment.css";
import "./TaoDiyEntry.css";
import "./IntroGate.css";
import "./BrandMark.css";

gsap.registerPlugin(ScrollTrigger);

const TaoDiySection = lazy(() => import("./sections/TaoDiySection"));

const templeScrollItems = [
  {
    title: "Peace for Family",
    titleZh: "送家人：平安常在",
    blessing: "For parents or elders, choose jade or warm woods for calm protection and daily care.",
    blessingZh: "如果送给父母或长辈，建议选择玉石、桃木或檀木，寓意平安守护、日常安康。",
    materialNote: "Jade feels gentle and settled; wood carries a warmer folk blessing.",
    materialNoteZh: "玉石温润稳重，适合表达长久牵挂；木质温暖朴素，带有传统守护之意。",
    image: assetUrl("/assets/libo2-scroll/libo2-01.webp"),
  },
  {
    title: "Harmony for Partner",
    titleZh: "送伴侣：和合相守",
    blessing: "For a partner, choose rose crystal, jade, or red agate for closeness, trust, and steady affection.",
    blessingZh: "如果送给伴侣，建议选择粉晶、玉石或南红玛瑙，寓意亲密、信任与长久相伴。",
    materialNote: "Soft crystal speaks of tenderness; red agate adds warmth and commitment.",
    materialNoteZh: "粉晶表达柔和心意，南红玛瑙色泽温暖，适合承载感情与承诺。",
    image: assetUrl("/assets/libo2-scroll/libo2-02.webp"),
  },
  {
    title: "Luck for Friends",
    titleZh: "送朋友：好运随行",
    blessing: "For friends, choose citrine, mixed stones, or lapis accents for confidence, support, and good timing.",
    blessingZh: "如果送给朋友，建议选择黄水晶、多宝混搭或青金点缀，寓意好运、支持与顺遂。",
    materialNote: "Citrine feels bright and optimistic; mixed stones make the piece lively and easy to wear.",
    materialNoteZh: "黄水晶明亮有活力，多宝材质层次丰富，适合作为轻松又有心意的礼物。",
    image: assetUrl("/assets/libo2-scroll/libo2-03.webp"),
  },
  {
    title: "Clarity for Yourself",
    titleZh: "送自己：清明专注",
    blessing: "For yourself, choose clear crystal, obsidian, or lapis for focus, boundaries, and a quieter rhythm.",
    blessingZh: "如果送给自己，建议选择白水晶、黑曜石或青金石，寓意专注、沉稳与内在秩序。",
    materialNote: "Clear crystal is clean and bright; obsidian gives the design a grounded, protective tone.",
    materialNoteZh: "白水晶清透纯净，黑曜石沉稳内敛，适合提醒自己保持节奏与边界。",
    image: assetUrl("/assets/libo2-scroll/libo2-04.webp"),
  },
  {
    title: "Prosperity Wish",
    titleZh: "求财运：稳中有进",
    blessing: "For career or prosperity wishes, choose citrine, jade, or gold details for openness and steady growth.",
    blessingZh: "如果想表达事业与财运祝福，建议选择黄水晶、玉石或小金饰，寓意开阔、稳进与丰盛。",
    materialNote: "Citrine brings brightness; jade keeps the blessing dignified and balanced.",
    materialNoteZh: "黄水晶象征明朗机会，玉石让整体更沉稳，适合职场、开业或升迁祝愿。",
    image: assetUrl("/assets/libo2-scroll/libo2-05.webp"),
  },
  {
    title: "Health Blessing",
    titleZh: "愿健康：身心安定",
    blessing: "For health wishes, choose jade, white crystal, or warm wood for softness, rest, and protection.",
    blessingZh: "如果祝愿健康安定，建议选择玉石、白水晶或木质材料，寓意调和、休养与守护。",
    materialNote: "Jade is gentle on the eye; wood makes the piece feel grounded and close to daily life.",
    materialNoteZh: "玉石视觉柔和，木质亲近日常，适合送给需要关怀与陪伴的人。",
    image: assetUrl("/assets/libo2-scroll/libo2-06.webp"),
  },
  {
    title: "Study Focus",
    titleZh: "愿学业：心定清明",
    blessing: "For study or exams, choose lapis, clear crystal, or obsidian for focus, expression, and composure.",
    blessingZh: "如果送给学生或备考的人，建议选择青金石、白水晶或黑曜石，寓意专注、表达与稳定心绪。",
    materialNote: "Lapis carries a deep blue calm; crystal keeps the design clean and bright.",
    materialNoteZh: "青金石蓝色沉静，白水晶清爽明亮，适合学习、考试与长期目标。",
    image: assetUrl("/assets/libo2-scroll/libo2-07.webp"),
  },
  {
    title: "Travel Protection",
    titleZh: "愿出行：一路平安",
    blessing: "For travel or distance, choose obsidian, jade, or red agate for protection and safe return.",
    blessingZh: "如果送给远行、搬迁或异地生活的人，建议选择黑曜石、玉石或南红玛瑙，寓意守护与归途平安。",
    materialNote: "Obsidian feels protective; red agate brings warmth across distance.",
    materialNoteZh: "黑曜石偏守护，南红玛瑙温暖醒目，适合表达牵挂和安心。",
    image: assetUrl("/assets/libo2-scroll/libo2-08.webp"),
  },
  {
    title: "New Beginning",
    titleZh: "愿新程：重新出发",
    blessing: "For a new job, new home, or new stage, choose jade, citrine, or mixed stones for renewal and courage.",
    blessingZh: "如果是新工作、新家或人生新阶段，建议选择玉石、黄水晶或多宝组合，寓意更新、勇气与顺势而行。",
    materialNote: "Mixed stones add movement; citrine gives the blessing a brighter forward energy.",
    materialNoteZh: "多宝组合更有变化感，黄水晶更明亮，适合表达新的开始。",
    image: assetUrl("/assets/libo2-scroll/libo2-09.webp"),
  },
  {
    title: "Gratitude Gift",
    titleZh: "表感谢：温柔长久",
    blessing: "For teachers, helpers, or someone kind to you, choose jade, crystal, or sandalwood for gratitude and respect.",
    blessingZh: "如果想表达感谢，建议选择玉石、水晶或檀木，寓意敬意、清澈与长久的善意。",
    materialNote: "Sandalwood feels quiet and respectful; jade keeps the gift refined.",
    materialNoteZh: "檀木沉静有礼，玉石温润雅致，适合送给老师、贵人或帮助过你的人。",
    image: assetUrl("/assets/libo2-scroll/libo2-10.webp"),
  },
  {
    title: "Daily Protection",
    titleZh: "日常守护：随身安心",
    blessing: "For everyday wear, choose smaller jade, crystal, or wood pieces that feel light, clean, and easy to match.",
    blessingZh: "如果希望日常佩戴，建议选择小尺寸玉石、水晶或木质饰品，轻便耐看，也更容易搭配。",
    materialNote: "Small beads are comfortable; natural textures make the blessing feel close and personal.",
    materialNoteZh: "小颗珠更舒适，天然纹理更贴近日常，让祝福成为随身的提醒。",
    image: assetUrl("/assets/libo2-scroll/libo2-11.webp"),
  },
];

const blessingServiceItems = [
  ["Temple Offering", "After you select the service, the piece is placed for offering in a temple setting with the recipient's name and intention recorded."],
  ["Three-Day Blessing", "The piece stays in blessing for three days, with the intention directed toward peace, health, harmony, or prosperity."],
  ["Video Record", "After the blessing, we record a short video carrying the name and blessing message as a personal keepsake."],
  ["Blessed Dispatch", "The piece is packed and shipped after the three-day offering and video record are complete."],
];

const giftIntentionPaths = [
  {
    id: "family",
    label: "For Family",
    words: "Peace · Health · Protection",
    copy: "A steady, gentle gift for everyday care.",
  },
  {
    id: "partner",
    label: "For Partner",
    words: "Bond · Harmony · Blessing",
    copy: "A considered token of closeness, trust, and emotional balance.",
  },
  {
    id: "friend",
    label: "For Friends",
    words: "Luck · Support · Clarity",
    copy: "A refined and useful gift for daily wear.",
  },
  {
    id: "self",
    label: "For Yourself",
    words: "Prosperity · Focus · Renewal",
    copy: "A private reminder of discipline, rhythm, and renewal.",
  },
] as const;

const intentionMaterialCards: Record<string, Array<{ cn: string; en: string; meaning: string; texture: string }>> = {
  family: [
    { cn: "Peach Wood", en: "Peach Wood", meaning: "Warmth, protection, and daily kindness.", texture: "wood" },
    { cn: "Sandalwood", en: "Sandalwood", meaning: "Stillness, steadiness, and gentle care.", texture: "sandal" },
    { cn: "White Jade", en: "White Jade", meaning: "Peace, softness, and clear blessing.", texture: "jade" },
  ],
  partner: [
    { cn: "White Jade", en: "White Jade", meaning: "Clarity, tenderness, and harmony.", texture: "jade" },
    { cn: "Green Jade", en: "Green Jade", meaning: "Gentle renewal and emotional repair.", texture: "green" },
    { cn: "Cloisonne", en: "Cloisonne", meaning: "Refined, ceremonial, and memorable.", texture: "cloisonne" },
  ],
  friend: [
    { cn: "Lapis Lazuli", en: "Lapis Lazuli", meaning: "Focus, expression, and steady support.", texture: "lapis" },
    { cn: "Obsidian", en: "Obsidian", meaning: "Boundaries, composure, and inner strength.", texture: "obsidian" },
    { cn: "Cinnabar", en: "Cinnabar", meaning: "Traditional red for protection and confidence.", texture: "cinnabar" },
  ],
  self: [
    { cn: "Citrine", en: "Citrine", meaning: "Opportunity, confidence, and a bright rhythm.", texture: "citrine" },
    { cn: "Chinese Lacquer", en: "Chinese Lacquer", meaning: "Craft, sheen, and Eastern refinement.", texture: "lacquer" },
    { cn: "Obsidian", en: "Obsidian", meaning: "Focus, restraint, and energetic boundary.", texture: "obsidian" },
  ],
};

const recommendationMap: Record<string, { title: string; materials: string[]; reason: string }> = {
  family: {
    title: "Family Peace Gift",
    materials: ["Peach Wood", "Sandalwood", "White Jade", "Gold Accent"],
    reason: "Peach wood carries folk protection, sandalwood quiets the whole piece, and white jade gives it a gentle, dependable presence.",
  },
  partner: {
    title: "Harmony Gift Design",
    materials: ["White Jade", "Green Jade", "Cloisonne", "Floral Accent"],
    reason: "Jade keeps the tone soft and balanced, while cloisonne adds ceremony and memory.",
  },
  friend: {
    title: "Clarity Support Bracelet",
    materials: ["Lapis Lazuli", "Obsidian", "Cinnabar", "Simple Spacers"],
    reason: "Lapis brings focus, obsidian adds depth, and a touch of cinnabar gives the gift a traditional spirit.",
  },
  self: {
    title: "Renewal & Opportunity Bracelet",
    materials: ["Citrine", "Chinese Lacquer", "Obsidian", "Gold Accent"],
    reason: "Citrine brings brightness, lacquer adds craft, and obsidian keeps the design calm and grounded.",
  },
};

const giftWishOptions = [
  { id: "protection", cn: "Peace & Protection", en: "Protection" },
  { id: "health", cn: "Health & Stability", en: "Health" },
  { id: "harmony", cn: "Love & Harmony", en: "Harmony" },
  { id: "opportunity", cn: "Career & Prosperity", en: "Opportunity" },
  { id: "calm", cn: "Calm Sleep", en: "Calm" },
  { id: "focus", cn: "Study & Focus", en: "Focus" },
];

const giftStyleOptions = ["Quiet & Restrained", "Warm Daily Wear", "Ceremonial"];
const giftPathIcons: Record<string, string> = {
  family: "F",
  partner: "P",
  friend: "G",
  self: "S",
};

function TaoDiyEntry({ onEnter, onMenu }: { onEnter: () => void; onMenu: () => void }) {
  const { t } = useI18n();
  const giftPanelRef = useRef<HTMLDivElement | null>(null);
  const [selectedPath, setSelectedPath] = useState<string>(giftIntentionPaths[0].id);
  const [selectedWish, setSelectedWish] = useState<string>("health");
  const [selectedStyle, setSelectedStyle] = useState<string>(giftStyleOptions[1]);
  const [questionnaireOpen, setQuestionnaireOpen] = useState(false);
  const [step, setStep] = useState<"choose" | "recommend">("choose");
  const selectedPathData = giftIntentionPaths.find((item) => item.id === selectedPath) ?? giftIntentionPaths[0];
  const selectedMaterials = intentionMaterialCards[selectedPathData.id];
  const recommendation = recommendationMap[selectedPathData.id];
  const entryTitle = t("gift.entry.title");
  const entryTitleWords = entryTitle.split(" ");

  const handleEntryPointerMove = (event: React.PointerEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--glow-x", `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty("--glow-y", `${event.clientY - rect.top}px`);
  };

  const openGiftFlow = () => {
    setStep("choose");
    setQuestionnaireOpen(true);
  };

  useEffect(() => {
    if (!questionnaireOpen) {
      document.body.classList.remove("modal-scroll-locked");
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      return;
    }

    const scrollY = window.scrollY;
    document.body.classList.add("modal-scroll-locked");
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";

    const stopPageScroll = (event: WheelEvent | TouchEvent) => {
      const target = event.target as HTMLElement | null;
      if (target?.closest(".tao-gift-panel")) return;
      event.preventDefault();
    };

    window.addEventListener("wheel", stopPageScroll, { passive: false, capture: true });
    window.addEventListener("touchmove", stopPageScroll, { passive: false, capture: true });

    return () => {
      window.removeEventListener("wheel", stopPageScroll, { capture: true });
      window.removeEventListener("touchmove", stopPageScroll, { capture: true });
      document.body.classList.remove("modal-scroll-locked");
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      window.scrollTo(0, scrollY);
    };
  }, [questionnaireOpen]);

  useEffect(() => {
    const wrapper = giftPanelRef.current;
    const content = wrapper?.querySelector<HTMLElement>(".tao-gift-form, .tao-gift-result");
    if (!questionnaireOpen || !wrapper || !content) return;

    const lenis = new Lenis({
      wrapper,
      content,
      lerp: 0.08,
      smoothWheel: true,
    });

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
  }, [questionnaireOpen, step]);

  useEffect(() => {
    const section = document.getElementById("diy-entry");
    const media = window.matchMedia("(max-width: 800px)");
    if (!section) return undefined;

    const updateHeaderState = (isVisible: boolean) => {
      document.body.classList.toggle("tao-diy-mobile-entry-active", media.matches && isVisible);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        updateHeaderState(Boolean(entry?.isIntersecting));
      },
      { threshold: 0.22 },
    );

    observer.observe(section);
    const handleMediaChange = () => {
      const rect = section.getBoundingClientRect();
      updateHeaderState(rect.top < window.innerHeight * 0.78 && rect.bottom > window.innerHeight * 0.22);
    };
    media.addEventListener("change", handleMediaChange);
    handleMediaChange();

    return () => {
      observer.disconnect();
      media.removeEventListener("change", handleMediaChange);
      document.body.classList.remove("tao-diy-mobile-entry-active");
    };
  }, []);

  return (
    <section id="diy-entry" className="tao-diy-entry" onPointerMove={handleEntryPointerMove}>
      <div className="tao-diy-entry-bg" aria-hidden="true" />
      <div className="tao-diy-entry-copy fade-up" data-note={t("gift.entry.note")}>
        <div className="tao-diy-mobile-brand">
          <BrandMark className="tao-diy-mobile-logo" />
          <button className="tao-diy-mobile-menu" onClick={onMenu} type="button" aria-label={t("nav.toggleMenu")}>
            <span>{t("nav.menu").toUpperCase()}</span>
            <b>☰</b>
          </button>
        </div>
        <div className="tao-diy-mobile-hero">
          <h2>{t("gift.entry.mobileTitle")}</h2>
          <p>{t("gift.entry.copy")}</p>
          <button className="tao-diy-mobile-start" onClick={openGiftFlow} type="button">
            {t("gift.start")} <span>→</span>
          </button>
        </div>
        <p className="eyebrow">{t("gift.entry.kicker")}</p>
        <h2>
          {entryTitleWords.length > 1 ? (
            <>
              <span>{entryTitleWords.slice(0, -1).join(" ")}</span>
              <span>{entryTitleWords.at(-1)}</span>
            </>
          ) : (
            <span>{entryTitle}</span>
          )}
        </h2>
        <p>{t("gift.entry.copy")}</p>
        <div className="tao-intention-grid" aria-label={t("gift.entry.aria")}>
          {giftIntentionPaths.map((path, index) => (
            <button className={selectedPath === path.id ? "active" : ""} key={path.id} onClick={() => setSelectedPath(path.id)} type="button">
              <small>{String(index + 1).padStart(2, "0")}</small>
              <b>{t(`gift.${path.id}`)}</b>
              <span>{t(`gift.${path.id}.words`, path.words)}</span>
              <p>{t(`gift.${path.id}.copy`, path.copy)}</p>
              <i>{t("gift.selected")}</i>
              <em>→</em>
            </button>
          ))}
        </div>
        <div className="tao-diy-mobile-extra" aria-label={t("gift.mobileExtra.aria")}>
          <div className="tao-diy-mobile-extra-head">
            <span>{t("gift.mobileExtra.kicker")}</span>
            <b>{t("gift.mobileExtra.title")}</b>
          </div>
          <div className="tao-diy-mobile-extra-grid">
            <article>
              <small>01</small>
              <strong>{t("gift.mobileExtra.step1")}</strong>
              <p>{t("gift.mobileExtra.step1.copy")}</p>
            </article>
            <article>
              <small>02</small>
              <strong>{t("gift.mobileExtra.step2")}</strong>
              <p>{t("gift.mobileExtra.step2.copy")}</p>
            </article>
            <article>
              <small>03</small>
              <strong>{t("gift.mobileExtra.step3")}</strong>
              <p>{t("gift.mobileExtra.step3.copy")}</p>
            </article>
          </div>
          <div className="tao-diy-mobile-extra-note">
            <span>{t("gift.mobileExtra.price")}</span>
            <span>{t("gift.mobileExtra.service")}</span>
          </div>
        </div>
        <button className="gold-button" onClick={openGiftFlow} type="button">
          {t("gift.start")} <span>→</span>
        </button>
      </div>

      {questionnaireOpen && (
        <div className="tao-gift-modal" role="dialog" aria-modal="true" aria-label={t("gift.modal.aria")}>
          <button className="tao-gift-backdrop" onClick={() => setQuestionnaireOpen(false)} type="button" />
          <div className={`tao-gift-panel ${step === "recommend" ? "is-result-step" : ""}`} data-lenis-prevent ref={giftPanelRef}>
            <button className="tao-gift-close" onClick={() => setQuestionnaireOpen(false)} type="button">
              {t("nav.close")}
            </button>
            {step === "choose" ? (
              <div className="tao-gift-form">
                <p className="eyebrow">{t("gift.modal.kicker")}</p>
                <h3>{t("gift.q1")}</h3>
                <div className="tao-gift-options">
                  {giftIntentionPaths.map((option) => (
                    <button className={selectedPath === option.id ? "active" : ""} key={option.id} onClick={() => setSelectedPath(option.id)} type="button">
                      <strong aria-hidden="true">{giftPathIcons[option.id]}</strong>
                      <b>{t(`gift.${option.id}`)}</b>
                      <span>{t(`gift.${option.id}.copy`, option.copy)}</span>
                      <i aria-hidden="true" />
                    </button>
                  ))}
                </div>
                <h3>{t("gift.q2")}</h3>
                <div className="tao-gift-options compact">
                  {giftWishOptions.map((option) => (
                    <button className={selectedWish === option.id ? "active" : ""} key={option.id} onClick={() => setSelectedWish(option.id)} type="button">
                      <strong aria-hidden="true">✓</strong>
                      <b>{t(`wish.${option.id}`, option.cn)}</b>
                      <span>{option.en}</span>
                      <i aria-hidden="true" />
                    </button>
                  ))}
                </div>
                <h3>{t("gift.q3")}</h3>
                <div className="tao-gift-style">
                  {giftStyleOptions.map((option) => (
                    <button className={selectedStyle === option ? "active" : ""} key={option} onClick={() => setSelectedStyle(option)} type="button">
                      {t(option === "Quiet & Restrained" ? "style.quiet" : option === "Warm Daily Wear" ? "style.warm" : "style.ceremonial", option)}
                    </button>
                  ))}
                </div>
                <div className="tao-gift-next-row">
                  <span>{t("gift.nextHint")}</span>
                  <button className="gold-button" onClick={onEnter} type="button">
                    {t("gift.openBuilder")} <span>→</span>
                  </button>
                </div>
              </div>
            ) : (
              <aside className="tao-gift-result">
                <p className="eyebrow">{t("gift.result")}</p>
                <h3>{recommendation.title}</h3>
                <div className="tao-gift-material-list">
                  {recommendation.materials.map((material) => (
                    <span key={material}>{material}</span>
                  ))}
                </div>
                <div className="tao-gift-material-cards">
                  {selectedMaterials.map((material) => (
                    <article className={`texture-${material.texture}`} key={material.cn}>
                      <b>{material.cn}</b>
                      <span>{material.en}</span>
                      <p>{material.meaning}</p>
                    </article>
                  ))}
                </div>
                <p>{recommendation.reason}</p>
                <div className="tao-gift-result-actions">
                  <button className="tao-gift-secondary" onClick={() => setStep("choose")} type="button">
                    {t("gift.back")}
                  </button>
                  <button className="gold-button" onClick={onEnter} type="button">
                    {t("gift.openBuilder")} <span>→</span>
                  </button>
                </div>
              </aside>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

function TaoDiyLoading() {
  const { t } = useI18n();
  return (
    <section id="diy-loading" className="tao-diy-loading-screen">
      <p>{t("diy.loading")}</p>
      <span />
    </section>
  );
}

export default function App() {
  const { locale, setLocale, t } = useI18n();
  const root = useRef<HTMLDivElement>(null);
  const [menu, setMenu] = useState(false);
  const [diyLoaded, setDiyLoaded] = useState(false);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const lenis = new Lenis({
        lerp: 0.08,
        smoothWheel: true,
        prevent: (node) => node instanceof Element && Boolean(node.closest(".tao-gift-panel")),
      });
      const update = (time: number) => lenis.raf(time * 1000);
      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add(update);
      gsap.ticker.lagSmoothing(0);

      gsap.from(".hero-copy > *", { y: 34, autoAlpha: 0, stagger: 0.16, duration: 1.15, ease: "power3.out", delay: 0.15 });
      gsap.utils.toArray<HTMLElement>(".fade-up").forEach((el) =>
        gsap.from(el, { y: 48, autoAlpha: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 84%" } }),
      );
      gsap.utils.toArray<HTMLElement>(".clip-reveal").forEach((el) =>
        gsap.to(el, { clipPath: "inset(0% 0% 0% 0%)", duration: 1.2, ease: "expo.out", scrollTrigger: { trigger: el, start: "top 85%" } }),
      );
      gsap.utils.toArray<HTMLElement>(".ritual-row, .material-row, .step").forEach((el) =>
        gsap.from(el, { y: 32, autoAlpha: 0, duration: 0.9, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 88%" } }),
      );

      return () => {
        lenis.destroy();
        gsap.ticker.remove(update);
      };
    }, root);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const scrollableOverflow = new Set(["auto", "scroll", "overlay"]);

    const getScrollableTarget = (start: EventTarget | null, event: WheelEvent) => {
      if (!(start instanceof Element)) return null;

      let node: Element | null = start;
      while (node && node !== document.body && node !== document.documentElement) {
        const element = node as HTMLElement;
        const style = window.getComputedStyle(element);
        const canScrollY = scrollableOverflow.has(style.overflowY) && element.scrollHeight > element.clientHeight + 1;
        const canScrollX = scrollableOverflow.has(style.overflowX) && element.scrollWidth > element.clientWidth + 1;
        const wantsHorizontalScroll = Math.abs(event.deltaX) > 0 || event.shiftKey || (!canScrollY && Math.abs(event.deltaY) > 0);

        if ((Math.abs(event.deltaY) > 0 && canScrollY) || (wantsHorizontalScroll && canScrollX)) {
          return { element, canScrollY, canScrollX };
        }

        node = node.parentElement;
      }

      return null;
    };

    const routeWheelToInnerScroller = (event: WheelEvent) => {
      if (event.defaultPrevented || event.ctrlKey) return;
      if (event.target instanceof Element && event.target.closest(".product-catalog-main")) return;
      if (event.target instanceof Element && event.target.closest(".tao-gift-panel")) return;

      const target = getScrollableTarget(event.target, event);
      if (!target) return;

      const { element, canScrollY, canScrollX } = target;
      const top = canScrollY ? event.deltaY : 0;
      const left = canScrollX ? event.deltaX || (event.shiftKey || !canScrollY ? event.deltaY : 0) : 0;

      if (!top && !left) return;

      event.preventDefault();
      event.stopImmediatePropagation();
      element.scrollBy({ top, left, behavior: "auto" });
    };

    window.addEventListener("wheel", routeWheelToInnerScroller, { passive: false, capture: true });
    return () => {
      window.removeEventListener("wheel", routeWheelToInnerScroller, { capture: true });
    };
  }, []);

  useEffect(() => {
    const section = document.getElementById("blessing-service");
    const media = window.matchMedia("(max-width: 800px)");
    if (!section) return undefined;

    const updateHeaderState = (isVisible: boolean) => {
      document.body.classList.toggle("tao-blessing-mobile-active", media.matches && isVisible);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        updateHeaderState(Boolean(entry?.isIntersecting));
      },
      { threshold: 0.2 },
    );

    observer.observe(section);
    const handleMediaChange = () => {
      const rect = section.getBoundingClientRect();
      updateHeaderState(rect.top < window.innerHeight * 0.8 && rect.bottom > window.innerHeight * 0.2);
    };
    media.addEventListener("change", handleMediaChange);
    handleMediaChange();

    return () => {
      observer.disconnect();
      media.removeEventListener("change", handleMediaChange);
      document.body.classList.remove("tao-blessing-mobile-active");
    };
  }, []);

  const navItems = [
    { label: t("nav.custom"), href: "#diy" },
    { label: t("nav.collection"), href: "#bracelets" },
    { label: t("nav.blessing"), href: "#blessing-service" },
  ];

  return (
    <div ref={root} className="dao-site">
      <header className="dao-header">
        <a href="#top" className="dao-logo" aria-label={t("brand.logoAlt")}>
          <BrandMark compact />
        </a>
        <nav>
          {navItems.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="gold-button header-cta" href="#diy">
          {t("nav.build")} <span>→</span>
        </a>
        <label className="language-switcher" aria-label={t("nav.language")}>
          <select value={locale} onChange={(event) => setLocale(event.target.value as typeof locale)}>
            {languageOptions.map((option) => (
              <option key={option.code} value={option.code}>{option.short}</option>
            ))}
          </select>
        </label>
        <button className="menu-trigger" onClick={() => setMenu(!menu)} aria-label={t("nav.menu")}>
          {t("nav.menu")}
        </button>
        <div className={`mobile-nav ${menu ? "open" : ""}`}>
          <button className="mobile-nav-close" onClick={() => setMenu(false)} type="button" aria-label={t("nav.close")}>
            {t("nav.close")}
          </button>
          {navItems.map((item) => (
            <a onClick={() => setMenu(false)} key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>
      </header>

      <main id="top">
        <section className="hero hero-triptych">
          <div className="hero-video-triptych">
            <video className="hero-video-panel is-active" autoPlay loop muted playsInline preload="metadata">
              <source src={assetUrl("/assets/tao-diy/gift-designer-bg-mobile.mp4")} media="(max-width: 800px)" type="video/mp4" />
              <source src={assetUrl("/assets/tao-diy/gift-designer-bg.mp4")} media="(min-width: 801px)" type="video/mp4" />
            </video>
          </div>
          <div className="hero-shade" />
          <div className="hero-copy">
            <p className="hero-kicker">{t("hero.kicker")}</p>
            <h1 data-gold={t("hero.title")}>
              {t("hero.title")}
            </h1>
            <p>{t("hero.copy")}</p>
            <a className="underline-link light" href="#diy">
              {t("hero.cta")} <b>→</b>
            </a>
          </div>
          <p className="hero-side">{t("hero.side")}</p>
        </section>

        <div className="structural-transition dark-to-mural">
          <span>01</span>
          <i />
          <b>{t("transition.blessingPieces")}</b>
          <i />
        </div>
        <TaoPhotoWallSection />
        <section id="blessing-service" className="blessing-service-section">
          <div className="blessing-service-bg" aria-hidden="true" />
          <div className="blessing-mobile-brand">
            <BrandMark className="blessing-mobile-logo" />
            <button onClick={() => setMenu(true)} type="button" aria-label={t("nav.toggleMenu")}>
              {t("nav.menu")}
            </button>
          </div>
          <div className="blessing-service-copy fade-up">
            <p className="eyebrow">{t("service.kicker")}</p>
            <h2>{t("service.title")}</h2>
            <p>{t("service.copy")}</p>
            <div className="blessing-service-actions">
              <a className="gold-button" href="#bracelets">
                {t("service.choose")} <span>→</span>
              </a>
              <a className="underline-link light" href="#diy">
                {t("service.create")} <b>→</b>
              </a>
            </div>
            <div className="blessing-service-note">
              <span>{t("service.noteLabel")}</span>
              <b>{t("service.noteTitle")}</b>
              <p>{t("service.noteCopy")}</p>
            </div>
          </div>
          <div className="blessing-service-panel fade-up">
            <div className="blessing-service-video-card">
              <video
                src={assetUrl("/assets/blessing-service/temple-blessing-video.m4v")}
                controls
                playsInline
                preload="metadata"
                poster={assetUrl("/assets/tao-diy/order-modal-bg.png")}
              />
            </div>
            <div className="blessing-service-list">
              {blessingServiceItems.map(([title, copy], index) => (
                <article key={title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <b>{t(`service.step${index + 1}.title`, title)}</b>
                  <p>{t(`service.step${index + 1}.copy`, copy)}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <div className="structural-transition mural-to-diy">
          <span>02</span>
          <i />
          <b>{t("nav.custom")}</b>
          <i />
        </div>
        <div id="diy" className="diy-anchor">
          {diyLoaded ? (
            <Suspense fallback={<TaoDiyLoading />}>
              <TaoDiySection />
            </Suspense>
          ) : (
            <TaoDiyEntry onEnter={() => setDiyLoaded(true)} onMenu={() => setMenu(true)} />
          )}
        </div>
        <section id="intention-collection" className="collection ink">
          <div className="collection-intro">
            <p className="eyebrow">{t("journal.kicker")}</p>
            <h2>
              {t("journal.title")}
            </h2>
            <p>{t("journal.copy")}</p>
          </div>
          <div className="collection-track auto-marquee" aria-label={t("journal.carousel")}>
            {[...templeScrollItems, ...templeScrollItems].map((item, index) => (
              <article className="bracelet-card" key={`${item.image}-${index}`} aria-hidden={index >= templeScrollItems.length}>
                <div className="card-image">
                  <img src={item.image} alt={item.title} loading={index < 3 ? "eager" : "lazy"} />
                  <span>{String((index % templeScrollItems.length) + 1).padStart(2, "0")}</span>
                </div>
                <p className="card-material">{locale === "zh" ? "祝福建议" : "Blessing Guide"}</p>
                <h3>{locale === "zh" ? item.titleZh : item.title}</h3>
                <p className="card-copy">{locale === "zh" ? item.blessingZh : item.blessing}</p>
                <p className="card-note">{locale === "zh" ? item.materialNoteZh : item.materialNote}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

