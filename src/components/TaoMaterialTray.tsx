import { AnimatePresence, motion } from "framer-motion";
import Lenis from "lenis";
import { useEffect, useRef } from "react";
import type { BeadItem, MainMaterialGroup } from "../data/taoBraceletDesigner";
import { braceletCategories } from "../data/taoBraceletDesigner";
import { localizeProductCopy, localizeProductName, useI18n } from "../i18n";
import { TaoBraceletVisual } from "./TaoBraceletPreview";

type TaoMaterialTrayProps = {
  activeCategory: string;
  activeMainMaterial?: MainMaterialGroup;
  items: BeadItem[];
  mainMaterialTabs?: ReadonlyArray<{ id: MainMaterialGroup; label: string; labelEn: string }>;
  selectedPieceId: string | null;
  onCategoryChange: (category: string) => void;
  onMainMaterialChange?: (material: MainMaterialGroup) => void;
  onAddItem: (item: BeadItem, rect: DOMRect) => void;
  onOpenDetail: (item: BeadItem) => void;
  onReplaceItem: (item: BeadItem, rect: DOMRect) => void;
};

function formatTrayUnitPrice() {
  return "USD 10";
}

export default function TaoMaterialTray({
  activeCategory,
  activeMainMaterial,
  items,
  mainMaterialTabs,
  selectedPieceId,
  onCategoryChange,
  onMainMaterialChange,
  onAddItem,
  onOpenDetail,
  onReplaceItem,
}: TaoMaterialTrayProps) {
  const mainTabsRef = useRef<HTMLDivElement | null>(null);
  const trayContentRef = useRef<HTMLDivElement | null>(null);
  const mainTabsTargetRef = useRef(0);
  const mainTabsFrameRef = useRef(0);
  const { locale, t } = useI18n();

  useEffect(() => {
    const wrapper = trayContentRef.current;
    const content = wrapper?.querySelector<HTMLElement>(".tao-tray-grid");
    if (!wrapper || !content) return;

    const lenis = new Lenis({
      wrapper,
      content,
      lerp: 0.1,
      smoothWheel: true,
      wheelMultiplier: 1.35,
      touchMultiplier: 1.8,
      syncTouch: true,
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
  }, [activeCategory, activeMainMaterial, items.length]);

  useEffect(() => {
    const element = mainTabsRef.current;
    if (!element) return;
    mainTabsTargetRef.current = element.scrollLeft;

    const animate = () => {
      const distance = mainTabsTargetRef.current - element.scrollLeft;
      if (Math.abs(distance) < 0.35) {
        element.scrollLeft = mainTabsTargetRef.current;
        mainTabsFrameRef.current = 0;
        return;
      }
      element.scrollLeft += distance * 0.22;
      mainTabsFrameRef.current = window.requestAnimationFrame(animate);
    };

    const startAnimation = () => {
      if (!mainTabsFrameRef.current) {
        mainTabsFrameRef.current = window.requestAnimationFrame(animate);
      }
    };

    const handleWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;
      event.preventDefault();
      const maxScroll = Math.max(0, element.scrollWidth - element.clientWidth);
      mainTabsTargetRef.current = Math.min(maxScroll, Math.max(0, mainTabsTargetRef.current + event.deltaY * 2.45));
      startAnimation();
    };

    element.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      element.removeEventListener("wheel", handleWheel);
      if (mainTabsFrameRef.current) window.cancelAnimationFrame(mainTabsFrameRef.current);
      mainTabsFrameRef.current = 0;
    };
  }, [activeCategory, activeMainMaterial]);

  return (
    <div className="tao-material-tray">
      <nav className="tao-tray-categories" aria-label={t("diy.categories")}>
        {braceletCategories.map((category) => (
          <button
            className={activeCategory === category.id ? "active" : ""}
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            type="button"
          >
            <span>{t(`diy.category.${category.id}`, localizeProductName(category.labelEn, locale))}</span>
            <small>{t(`diy.category.${category.id}`, localizeProductName(category.labelEn, locale))}</small>
          </button>
        ))}
      </nav>

      <div className="tao-tray-content" data-lenis-prevent ref={trayContentRef}>
        {activeCategory === "main" && mainMaterialTabs && (
          <div className="tao-main-material-tabs" ref={mainTabsRef}>
            {mainMaterialTabs.map((material) => (
              <button
                className={activeMainMaterial === material.id ? "active" : ""}
                key={material.id}
                onClick={() => onMainMaterialChange?.(material.id)}
                type="button"
              >
                {localizeProductName(material.labelEn, locale)}
                <small>{localizeProductName(material.labelEn, locale)}</small>
              </button>
            ))}
          </div>
        )}

        <AnimatePresence mode="wait">
          <motion.div
            className="tao-tray-grid"
            key={`${activeCategory}-${activeMainMaterial ?? ""}`}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
          >
            {items.map((item) => (
              <button
                className="tao-tray-card"
                key={item.id}
                onClick={(event) => {
                  const rect = event.currentTarget.getBoundingClientRect();
                  if (selectedPieceId) onReplaceItem(item, rect);
                  else onAddItem(item, rect);
                }}
                type="button"
              >
                <span
                  className="tao-card-detail"
                  onClick={(event) => {
                    event.stopPropagation();
                    onOpenDetail(item);
                  }}
                >
                  {t("diy.view3d")}
                </span>
                <div className="tao-card-visual">
                  <TaoBraceletVisual item={item} compact />
                </div>
                <span>
                  <b>{localizeProductName(item.nameEn || item.name, locale)}</b>
                  <small>{t(`diy.category.${item.category}`, localizeProductName(item.category, locale))}</small>
                </span>
                <em>{formatTrayUnitPrice()}</em>
                <p>{locale === "en" ? (item.meaningEn || t("diy.symbolic")) : localizeProductCopy(item.meaning || t("diy.symbolic"), locale)}</p>
              </button>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
