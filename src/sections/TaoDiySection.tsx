import { assetUrl } from "@/lib/assets";
﻿import { AnimatePresence, motion } from "framer-motion";
import { lazy, Suspense, useEffect, useMemo, useRef, useState, type CSSProperties } from "react";
import TaoBraceletPreview, {
  BRACELET_CAPACITY,
  calculateAdaptiveBraceletRadius,
  calculateBraceletLayout,
  TaoBraceletVisual,
} from "../components/TaoBraceletPreview";
import TaoMaterialTray from "../components/TaoMaterialTray";
import {
  beadItems,
  getBeadItem,
  mainMaterialTabs,
  starterBraceletPieces,
  type BeadItem,
  type BraceletPiece,
  type MainMaterialGroup,
} from "../data/taoBraceletDesigner";
import type { TaoBeadModel } from "../data/taoDiyItems";
import type { TaoCatalogItem } from "../data/taoProductCatalog";
import { localizeProductCopy, localizeProductName, useI18n } from "../i18n";
import "./TaoDiySection.css";

const STORAGE_KEY = "yuenora-bracelet-design-v1";
const VIEWED_MODEL_STORAGE_KEY = "yuenora-viewed-models-v1";
const WRIST_SIZE_CM = 13;
const CORD_COLORS = [
  { key: "ivory", name: "Ivory", value: "#fff7e6" },
  { key: "red", name: "Red", value: "#b11f18" },
  { key: "black", name: "Black", value: "#10100e" },
  { key: "gold", name: "Gold", value: "#c99a3a" },
  { key: "champagne", name: "Champagne", value: "#d8b778" },
  { key: "jadeGreen", name: "Jade Green", value: "#7fa48a" },
  { key: "paleJade", name: "Pale Jade", value: "#c7d8c5" },
  { key: "cinnabar", name: "Cinnabar", value: "#8f241b" },
  { key: "amber", name: "Amber", value: "#b96f24" },
  { key: "coffee", name: "Coffee", value: "#5b3424" },
  { key: "sandalwood", name: "Sandalwood", value: "#8a5a35" },
  { key: "inkBlue", name: "Ink Blue", value: "#1b3048" },
  { key: "moonBlue", name: "Moon Blue", value: "#7e9db7" },
  { key: "plum", name: "Plum", value: "#74324e" },
  { key: "rose", name: "Rose", value: "#c98783" },
  { key: "moss", name: "Moss", value: "#4e6a45" },
  { key: "slate", name: "Slate", value: "#6f7470" },
  { key: "pearl", name: "Pearl", value: "#e4ddcf" },
  { key: "copper", name: "Copper", value: "#a96435" },
  { key: "multicolor", name: "Multicolor", value: "linear-gradient(90deg, #b11f18, #c99a3a, #7fa48a, #1b3048, #74324e)" },
] as const;
const TaoBead3DViewer = lazy(() => import("../components/TaoBead3DViewer"));
const TaoStrand3DBuilder = lazy(() => import("../components/TaoStrand3DBuilder"));

type FlyingBead = {
  id: string;
  item: BeadItem;
  from: { x: number; y: number };
  to: { x: number; y: number };
};

type PendingAdd = {
  item: BeadItem;
  rect: DOMRect;
};

function createPiece(item: BeadItem, slotIndex?: number): BraceletPiece {
  return {
    id: `${item.id}-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    itemId: item.id,
    slotIndex,
    slotType: item.type === "spacer" ? "spacer" : item.type === "charm" || item.type === "pendant" ? "charm" : "main",
  };
}

function normalizeSlots(pieces: BraceletPiece[]): BraceletPiece[] {
  return pieces.slice(0, BRACELET_CAPACITY).map((piece, index) => ({ ...piece, slotIndex: index }));
}

function insertPieceAtSlot(pieces: BraceletPiece[], pieceId: string, targetSlot: number) {
  const normalized = normalizeSlots(pieces);
  const moving = normalized.find((piece) => piece.id === pieceId);
  if (!moving) return normalized;

  const rest = normalized.filter((piece) => piece.id !== pieceId);
  const target = Math.max(0, Math.min(rest.length, Math.round(targetSlot)));
  rest.splice(target, 0, moving);
  return normalizeSlots(rest);
}

function addPieceAtSlot(pieces: BraceletPiece[], piece: BraceletPiece, targetSlot?: number) {
  const normalized = normalizeSlots(pieces);
  if (normalized.length >= BRACELET_CAPACITY) return normalized;
  const target = typeof targetSlot === "number" ? Math.max(0, Math.min(normalized.length, Math.round(targetSlot))) : normalized.length;
  const next: BraceletPiece[] = normalized.slice();
  next.splice(target, 0, piece);
  return normalizeSlots(next);
}

function getMeaningSummary(pieces: BraceletPiece[]) {
  const meanings = pieces
    .map((piece) => getBeadItem(piece.itemId)?.meaning)
    .filter(Boolean)
    .slice(0, 5) as string[];
  if (!meanings.length) return "No intention materials selected yet.";
  return "Protection · Balance · Personal intention";
}

function getCordTheme(cordColor: string): "red" | "black" | "gold" {
  if (cordColor === "#10100e") return "black";
  if (cordColor === "#c99a3a" || cordColor === "#d8b778") return "gold";
  return "red";
}

const beadCategoryLabels: Record<string, string> = {
  using: "Using",
  main: "Main Bead",
  spacer: "Spacer",
  pendant: "Pendant",
  sets: "Sets",
  "white-jade": "White Jade",
  "green-jade": "Green Jade",
  citrine: "Citrine",
  lapis: "Lapis Lazuli",
  lacquer: "Chinese Lacquer",
  cloisonne: "Cloisonne",
  wucai: "Wucai Porcelain",
  obsidian: "Obsidian",
  cinnabar: "Cinnabar",
  peachwood: "Peach Wood",
  sandalwood: "Sandalwood",
};

function getBeadCategoryLabel(item: BeadItem) {
  const key = item.materialGroup ?? item.category;
  return beadCategoryLabels[key] ?? "Custom Part";
}

function formatDiyUnitPrice() {
  return "USD 10";
}

function formatDiyEstimate(pieces: BraceletPiece[]) {
  return pieces.length ? `Approx. USD ${pieces.length * 10}` : "USD 0";
}

function toStrandBeadModel(item: BeadItem): TaoBeadModel | null {
  if (!item.modelUrl) return null;
  return {
    id: item.id,
    materialId: item.materialGroup ?? item.category,
    modelUrl: item.modelUrl,
    sourceFile: item.modelUrl.split("/").at(-1) ?? item.modelUrl,
    nameCn: item.name,
    nameEn: item.nameEn,
    visualNote: item.size ?? "Custom part",
    intention: item.meaning ?? "A blessing accent that adds meaning and visual rhythm to the design.",
  };
}

export default function TaoDiySection() {
  const { locale, t } = useI18n();
  const [pieces, setPieces] = useState<BraceletPiece[]>(starterBraceletPieces.slice(0, BRACELET_CAPACITY));
  const [history, setHistory] = useState<BraceletPiece[][]>([]);
  const [activeCategory, setActiveCategory] = useState("main");
  const [activeMainMaterial, setActiveMainMaterial] = useState<MainMaterialGroup>("white-jade");
  const [selectedPieceId, setSelectedPieceId] = useState<string | null>(null);
  const [selectedSlotIndex, setSelectedSlotIndex] = useState<number | null>(null);
  const [cordColor, setCordColor] = useState<string>(CORD_COLORS[0].value);
  const [completeOpen, setCompleteOpen] = useState(false);
  const [strand3DOpen, setStrand3DOpen] = useState(false);
  const [detailItem, setDetailItem] = useState<BeadItem | null>(null);
  const [pendingAdd, setPendingAdd] = useState<PendingAdd | null>(null);
  const [viewedModelIds, setViewedModelIds] = useState<Set<string>>(() => {
    try {
      return new Set(JSON.parse(window.localStorage.getItem(VIEWED_MODEL_STORAGE_KEY) ?? "[]") as string[]);
    } catch {
      return new Set();
    }
  });
  const [flyingBead, setFlyingBead] = useState<FlyingBead | null>(null);
  const previewRef = useRef<HTMLDivElement>(null);

  const commitPieces = (updater: (current: BraceletPiece[]) => BraceletPiece[]) => {
    setPieces((current) => {
      const safeCurrent = normalizeSlots(current);
      const rawNext = updater(safeCurrent);
      if (rawNext === safeCurrent || rawNext === current) return safeCurrent;
      const next = normalizeSlots(rawNext);
      setHistory((stack) => [...stack.slice(-24), safeCurrent]);
      return next;
    });
  };

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (!saved) return;
    try {
      const parsed = JSON.parse(saved) as BraceletPiece[];
      if (!Array.isArray(parsed)) return;
      setPieces(normalizeSlots(parsed.filter((piece) => getBeadItem(piece.itemId))));
    } catch {
      window.localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  useEffect(() => {
    if (pieces.length <= BRACELET_CAPACITY) return;
    setPieces((current) => normalizeSlots(current));
    setHistory([]);
    setSelectedPieceId(null);
  }, [pieces.length]);

  useEffect(() => {
    window.localStorage.setItem(VIEWED_MODEL_STORAGE_KEY, JSON.stringify(Array.from(viewedModelIds)));
  }, [viewedModelIds]);

  const visibleItems = useMemo(() => {
    if (activeCategory === "using") {
      return pieces.map((piece) => getBeadItem(piece.itemId)).filter(Boolean) as BeadItem[];
    }
    if (activeCategory === "sets") {
      return beadItems.filter((item) =>
        ["cinnabar-01", "obsidian-01", "peachwood-01", "sandalwood-01", "spacer-01", "accessory-01"].includes(item.id),
      );
    }
    if (activeCategory === "main") {
      return beadItems.filter((item) => item.category === "main" && item.materialGroup === activeMainMaterial);
    }
    return beadItems.filter((item) => item.category === activeCategory);
  }, [activeCategory, activeMainMaterial, pieces]);

  const materialList = useMemo(() => {
    const map = new Map<string, { item: BeadItem; count: number }>();
    pieces.forEach((piece) => {
      const item = getBeadItem(piece.itemId);
      if (!item) return;
      const current = map.get(item.id);
      map.set(item.id, { item, count: (current?.count ?? 0) + 1 });
    });
    return Array.from(map.values());
  }, [pieces]);

  const estimatePrice = useMemo(() => formatDiyEstimate(pieces), [pieces]);
  const meaningSummary = useMemo(() => getMeaningSummary(pieces), [pieces]);
  const strand3DBeads = useMemo(
    () =>
      pieces
        .map((piece) => getBeadItem(piece.itemId))
        .filter(Boolean)
        .map((item) => toStrandBeadModel(item as BeadItem))
        .filter(Boolean) as TaoBeadModel[],
    [pieces],
  );
  const isFull = pieces.length >= BRACELET_CAPACITY;

  const getFlyTarget = (nextLength: number) => {
    const rect = previewRef.current?.getBoundingClientRect();
    if (!rect) return { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const visualCount = Math.max(1, Math.min(BRACELET_CAPACITY, nextLength));
    const layout = calculateBraceletLayout(visualCount, calculateAdaptiveBraceletRadius(visualCount));
    const point = layout[Math.max(0, Math.min(visualCount - 1, nextLength - 1))] ?? { x: 0, y: 0 };
    return { x: rect.left + rect.width / 2 + point.x, y: rect.top + rect.height / 2 + point.y };
  };

  const triggerFly = (item: BeadItem, rect: DOMRect, nextLength: number) => {
    const id = `fly-${Date.now()}`;
    setFlyingBead({
      id,
      item,
      from: { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 },
      to: getFlyTarget(nextLength),
    });
    window.setTimeout(() => setFlyingBead((current) => (current?.id === id ? null : current)), 520);
  };

  const addItemDirect = (item: BeadItem, rect: DOMRect) => {
    if (pieces.length >= BRACELET_CAPACITY) return;
    triggerFly(item, rect, pieces.length + 1);
    window.setTimeout(() => {
      commitPieces((current) => {
        if (current.length >= BRACELET_CAPACITY) return current;
        return addPieceAtSlot(current, createPiece(item, current.length), selectedSlotIndex ?? current.length);
      });
      setSelectedPieceId(null);
      setSelectedSlotIndex(null);
    }, 150);
  };

  const addItem = (item: BeadItem, rect: DOMRect) => {
    if (item.modelUrl && !viewedModelIds.has(item.id)) {
      setViewedModelIds((current) => new Set(current).add(item.id));
      setPendingAdd({ item, rect });
      setDetailItem(item);
      return;
    }

    addItemDirect(item, rect);
  };

  const replaceItem = (item: BeadItem, rect: DOMRect) => {
    if (!selectedPieceId) return addItem(item, rect);
    triggerFly(item, rect, Math.max(1, pieces.length));
    window.setTimeout(() => {
      commitPieces((current) => current.map((piece) => (piece.id === selectedPieceId ? { ...piece, itemId: item.id } : piece)));
      setSelectedPieceId(null);
    }, 120);
  };

  const closeDetail = () => {
    setDetailItem(null);
    setPendingAdd(null);
  };

  const confirmPendingAdd = () => {
    if (!pendingAdd) return;
    const { item, rect } = pendingAdd;
    setDetailItem(null);
    setPendingAdd(null);
    addItemDirect(item, rect);
  };

  const openDetail = (item: BeadItem) => {
    if (item.modelUrl) setViewedModelIds((current) => new Set(current).add(item.id));
    setPendingAdd(null);
    setDetailItem(item);
  };

  const deletePiece = (pieceId: string) => {
    commitPieces((current) => current.filter((piece) => piece.id !== pieceId));
    setSelectedPieceId(null);
    setSelectedSlotIndex(null);
  };

  const movePiece = (pieceId: string, targetIndex: number) => {
    commitPieces((current) => {
      return insertPieceAtSlot(current, pieceId, targetIndex);
    });
    setSelectedSlotIndex(null);
  };

  const undoDesign = () => {
    setHistory((stack) => {
      const previous = stack.at(-1);
      if (!previous) return stack;
      setPieces(normalizeSlots(previous));
      setSelectedPieceId(null);
      return stack.slice(0, -1);
    });
  };

  const clearDesign = () => {
    if (!pieces.length) return;
    commitPieces(() => []);
    setSelectedPieceId(null);
    setSelectedSlotIndex(null);
  };

  const saveDesign = () => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(normalizeSlots(pieces)));
    setStrand3DOpen(true);
  };

  const submitDesignOrder = () => {
    const normalizedPieces = normalizeSlots(pieces);
    const materialSummary =
      materialList.map(({ item, count }) => `${localizeProductName(item.nameEn || item.name, locale)} ×${count}`).join(" · ") || t("diy.notSelected");
    const item: TaoCatalogItem = {
      id: `diy-${Date.now()}`,
      code: "DIY",
      name: t("diy.custom"),
      sourceName: "缘灵 Custom Blessing Jewelry",
      type: t("type.bracelet", "Bracelet"),
      meaning: meaningSummary,
      description: `${t("diy.custom")} · ${WRIST_SIZE_CM}cm · ${normalizedPieces.length} ${t("diy.pcs")}. ${meaningSummary}`,
      details: [
        `${t("diy.materials")}: ${materialSummary}`,
        `${t("diy.wrist")}: ${WRIST_SIZE_CM}cm`,
        `${t("diy.estimate")}: ${formatDiyEstimate(normalizedPieces)}`,
      ],
      image: assetUrl("/assets/tao-diy/diy-designer-bg.png"),
      images: [assetUrl("/assets/tao-diy/diy-designer-bg.png"), assetUrl("/assets/brand/yuenora-logo.png")],
      tags: ["DIY", "Custom", "Blessing"],
      price: normalizedPieces.length * 10,
      currency: "USD",
    };

    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(normalizedPieces));
    window.dispatchEvent(new CustomEvent("tao:open-order", { detail: { item, groupId: "bracelet-mixed-blessing", openCheckout: true } }));
    setCompleteOpen(false);
  };

  return (
    <section id="diy-builder" className="tao-diy-section tao-mobile-diy">
      <div className="tao-phone-shell">
        <header className="tao-diy-topbar">
          <div>
            <p>{t("diy.customPiece")}</p>
            <h2>{t("diy.brand")}</h2>
          </div>
          <div className="tao-diy-meta">
            <span>{t("diy.wrist")} {WRIST_SIZE_CM}cm</span>
            <b className={isFull ? "ok" : ""}>{pieces.length} {t("diy.pcs")}</b>
            <strong>{estimatePrice}</strong>
          </div>
          <div className="tao-diy-top-actions">
            <button disabled={!history.length} onClick={undoDesign} type="button">{t("diy.undo")}</button>
            <button disabled={!pieces.length} onClick={clearDesign} type="button">{t("diy.clear")}</button>
            <button onClick={saveDesign} type="button">{t("diy.save")}</button>
            <button onClick={() => setCompleteOpen(true)} type="button">{t("diy.finish")}</button>
          </div>
        </header>

        <main className="tao-diy-stage" ref={previewRef}>
          <TaoBraceletPreview
            items={beadItems}
            pieces={pieces}
            selectedPieceId={selectedPieceId}
            selectedSlotIndex={selectedSlotIndex}
            cordColor={cordColor}
            onSelectPiece={(pieceId) => {
              setSelectedSlotIndex(null);
              setSelectedPieceId((current) => (current === pieceId ? null : pieceId));
            }}
            onSelectSlot={(slotIndex) => {
              setSelectedPieceId(null);
              setSelectedSlotIndex((current) => (current === slotIndex ? null : slotIndex));
            }}
            onDeletePiece={deletePiece}
            onMovePiece={movePiece}
          />
          <div className="tao-cord-palette" aria-label={t("diy.cord")}>
            <span>{t("diy.cord")}</span>
            {CORD_COLORS.map((color) => {
              const colorLabel = t(`diy.color.${color.key}`, localizeProductName(color.name, locale));
              return (
                <button
                  aria-label={colorLabel}
                  className={cordColor === color.value ? "active" : ""}
                  key={color.key}
                  onClick={() => setCordColor(color.value)}
                  style={{ "--swatch": color.value } as CSSProperties}
                  type="button"
                  title={colorLabel}
                />
              );
            })}
          </div>
          <div className="tao-diy-hint">
            <span>{isFull ? `${t("diy.limit")}: ${BRACELET_CAPACITY} ${t("diy.pcs")}.` : t("diy.hint")}</span>
            {selectedPieceId && <b>{t("diy.selectedHint")}</b>}
          </div>
        </main>

        <TaoMaterialTray
          activeCategory={activeCategory}
          activeMainMaterial={activeMainMaterial}
          items={visibleItems}
          mainMaterialTabs={mainMaterialTabs}
          selectedPieceId={selectedPieceId}
          onCategoryChange={setActiveCategory}
          onMainMaterialChange={setActiveMainMaterial}
          onAddItem={addItem}
          onOpenDetail={openDetail}
          onReplaceItem={replaceItem}
        />
      </div>

      <AnimatePresence>
        {flyingBead && (
          <motion.div
            className="tao-flying-bead"
            initial={{ x: flyingBead.from.x - 23, y: flyingBead.from.y - 23, scale: 0.52, opacity: 0.2, rotate: -28 }}
            animate={{ x: flyingBead.to.x - 23, y: flyingBead.to.y - 23, scale: 1, opacity: 1, rotate: 18 }}
            exit={{ opacity: 0, scale: 0.35 }}
            transition={{ type: "spring", stiffness: 340, damping: 28, mass: 0.8 }}
          >
            <TaoBraceletVisual item={flyingBead.item} compact />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {detailItem && (
          <motion.div className="tao-bead-detail-modal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <button className="tao-complete-backdrop" onClick={closeDetail} type="button" />
            <motion.article
              className="tao-bead-detail-card"
              initial={{ y: 32, scale: 0.96, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: 18, scale: 0.96, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <button className="tao-detail-close" onClick={closeDetail} type="button">{t("diy.close")}</button>
              <div className="tao-detail-viewer">
                {detailItem.modelUrl ? (
                  <Suspense fallback={<div className="tao-detail-loading">{t("diy.loadingModel")}</div>}>
                    <TaoBead3DViewer modelUrl={detailItem.modelUrl} className="tao-detail-3d" />
                  </Suspense>
                ) : (
                  <TaoBraceletVisual item={detailItem} />
                )}
              </div>
              <div className="tao-detail-copy">
                <p>{getBeadCategoryLabel(detailItem)} · {t("diy.detail")}</p>
                <h3>{detailItem.nameEn || detailItem.name}</h3>
                <span>{detailItem.size} · {formatDiyUnitPrice()}</span>
                <div>{locale === "en" ? (detailItem.meaningEn || t("diy.symbolic")) : localizeProductCopy(detailItem.meaning || t("diy.symbolic"), locale)}</div>
                {pendingAdd?.item.id === detailItem.id && (
                  <button className="tao-detail-add" onClick={confirmPendingAdd} type="button">
                    {t("diy.add")} <span>→</span>
                  </button>
                )}
              </div>
            </motion.article>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {completeOpen && (
          <motion.div className="tao-complete-modal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <button className="tao-complete-backdrop" onClick={() => setCompleteOpen(false)} type="button" />
            <motion.article
              className="tao-complete-card"
              initial={{ y: 40, scale: 0.96, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: 18, scale: 0.96, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <p>{t("diy.final")}</p>
              <h3>{t("diy.custom")}</h3>
              <div className="tao-complete-mini">
                {pieces.slice(0, BRACELET_CAPACITY).map((piece) => {
                  const item = getBeadItem(piece.itemId);
                  return item ? <TaoBraceletVisual item={item} compact key={piece.id} /> : null;
                })}
              </div>
              <dl>
                <div><dt>{t("diy.wrist")}</dt><dd>{WRIST_SIZE_CM}cm</dd></div>
                <div><dt>{t("diy.estimate")}</dt><dd>{estimatePrice}</dd></div>
                <div><dt>{t("diy.materials")}</dt><dd>{materialList.map(({ item, count }) => `${item.nameEn || item.name} ×${count}`).join(" · ") || t("diy.notSelected")}</dd></div>
                <div><dt>{t("diy.meaning")}</dt><dd>{meaningSummary}</dd></div>
              </dl>
              <div className="tao-complete-actions">
                <button type="button" onClick={() => setStrand3DOpen(true)}>{t("diy.view3d")}</button>
                <button type="button" onClick={submitDesignOrder}>{t("diy.submit")}</button>
                <a href="mailto:orders@taoblessingjewelry.com">{t("diy.contact")}</a>
              </div>
            </motion.article>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {strand3DOpen && (
          <motion.div className="tao-strand-3d-modal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <button className="tao-complete-backdrop" onClick={() => setStrand3DOpen(false)} type="button" />
            <motion.article
              className="tao-strand-3d-card"
              initial={{ y: 36, scale: 0.96, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: 18, scale: 0.96, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <button className="tao-detail-close" onClick={() => setStrand3DOpen(false)} type="button">{t("diy.close")}</button>
              <div className="tao-strand-3d-copy">
                <p>{t("diy.preview")}</p>
                <h3>{t("diy.previewTitle")}</h3>
                <span>{t("diy.previewHint")}</span>
              </div>
              <div className="tao-strand-3d-stage">
                {strand3DBeads.length ? (
                  <Suspense fallback={<div className="tao-detail-loading">{t("diy.generating")}</div>}>
                    <TaoStrand3DBuilder
                      beads={strand3DBeads}
                      className="tao-strand-3d-viewer"
                      cordTheme={getCordTheme(cordColor)}
                      onBeadClick={(bead) => {
                        const item = getBeadItem(bead.id);
                        if (item) openDetail(item);
                      }}
                    />
                  </Suspense>
                ) : (
                  <div className="tao-strand-3d-empty">{t("diy.empty")}</div>
                )}
              </div>
              <div className="tao-strand-3d-summary">
                <span>{pieces.length} {t("diy.pcs")}</span>
                <span>{estimatePrice}</span>
                <span>{meaningSummary}</span>
              </div>
            </motion.article>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
