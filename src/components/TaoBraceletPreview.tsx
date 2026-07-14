import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState, type CSSProperties } from "react";
import type { BeadItem, BraceletPiece } from "../data/taoBraceletDesigner";
import { getBeadItem } from "../data/taoBraceletDesigner";
import { localizeProductName, useI18n } from "../i18n";
import TaoModelThumbnail from "./TaoModelThumbnail";

export type BraceletLayoutPoint = {
  x: number;
  y: number;
  angle: number;
  rotation: number;
  scale: number;
  zIndex: number;
};

export const BRACELET_RING_RADIUS = 174;
export const BRACELET_BEAD_CENTER_SPACING = 48;
export const BRACELET_CAPACITY = 36;

export function calculateAdaptiveBraceletRadius(count: number) {
  if (count <= 0) return 116;
  const visualCount = Math.max(4, count);
  const circumferenceRadius = (visualCount * BRACELET_BEAD_CENTER_SPACING) / (Math.PI * 2);
  return Math.max(104, Math.min(BRACELET_RING_RADIUS, circumferenceRadius + 14));
}

type TaoBraceletPreviewProps = {
  pieces: BraceletPiece[];
  items: BeadItem[];
  selectedPieceId: string | null;
  selectedSlotIndex: number | null;
  cordColor: string;
  onSelectPiece: (pieceId: string) => void;
  onSelectSlot: (slotIndex: number) => void;
  onDeletePiece: (pieceId: string) => void;
  onMovePiece: (pieceId: string, targetIndex: number) => void;
};

type DragIntent = {
  pieceId: string;
  targetIndex: number;
};

function getPieceLayoutWeight(piece: BraceletPiece) {
  const item = getBeadItem(piece.itemId);
  if (!item) return 1;
  // Spacers keep their own model thumbnail, but only occupy the thin separator
  // width on the strand instead of the full visible model diameter.
  if (item.type === "spacer") return 0.16;
  // Pendants/charms hang from the strand and should not open a bead-sized gap.
  if (item.type === "charm" || item.type === "pendant") return 0.03;
  return 1;
}

export function calculateBraceletLayout(count: number, radius: number): BraceletLayoutPoint[] {
  if (!count) return [];
  const startAngle = -Math.PI / 2;
  return Array.from({ length: count }, (_, index) => {
    const angle = startAngle + (index * Math.PI * 2) / count;
    const y = Math.sin(angle) * radius;
    const x = Math.cos(angle) * radius;
    return {
      x,
      y,
      angle,
      rotation: (angle * 180) / Math.PI + 90,
      scale: 0.92 + ((Math.sin(angle) + 1) / 2) * 0.16,
      zIndex: Math.round(400 + y),
    };
  });
}

export function calculateWeightedBraceletLayout(pieces: BraceletPiece[], radius: number): BraceletLayoutPoint[] {
  if (!pieces.length) return [];
  const startAngle = -Math.PI / 2;
  const weights = pieces.map(getPieceLayoutWeight);
  const totalWeight = Math.max(1, weights.reduce((sum, weight) => sum + weight, 0));
  let cursor = 0;

  return pieces.map((_, index) => {
    const weight = weights[index];
    const angle = startAngle + ((cursor + weight / 2) / totalWeight) * Math.PI * 2;
    cursor += weight;
    const y = Math.sin(angle) * radius;
    const x = Math.cos(angle) * radius;

    return {
      x,
      y,
      angle,
      rotation: (angle * 180) / Math.PI + 90,
      scale: 0.92 + ((Math.sin(angle) + 1) / 2) * 0.16,
      zIndex: Math.round(400 + y),
    };
  });
}

function VisualBead({ item, compact = false, ringPreview = false }: { item: BeadItem; compact?: boolean; ringPreview?: boolean }) {
  const isCharm = item.type === "charm" || item.type === "pendant";
  const isSpacer = item.type === "spacer";
  const hasStaticModelThumb = item.image && item.image.includes("/assets/tao-diy/thumbs/");
  const followsThread = item.threadAxis === "tangent";
  const showsFace = Boolean(item.previewFace);

  if (ringPreview && isSpacer && item.modelUrl) {
    return <TaoModelThumbnail className="is-ring is-spacer-ring" modelUrl={item.modelUrl} view="spacer-side" />;
  }

  if (hasStaticModelThumb) {
    return (
      <span
        className={`tao-static-bead-thumb bead-${item.id} ${compact ? "is-compact" : ""} ${
          followsThread ? "is-tangent" : ""
        } ${showsFace ? "is-face-preview" : ""}`}
        aria-hidden="true"
      >
        <img alt="" draggable={false} loading="lazy" src={item.image} />
      </span>
    );
  }

  return (
    <span
      className={`tao-visual-bead tao-visual-${item.colorTheme ?? "stone"} ${isCharm ? "is-charm" : ""} ${
        isSpacer ? "is-spacer" : ""
      } ${compact ? "is-compact" : ""}`}
      style={
        {
          "--bead-base": item.visual.base,
          "--bead-highlight": item.visual.highlight,
          "--bead-shadow": item.visual.shadow,
        } as CSSProperties
      }
      aria-hidden="true"
    >
      {item.visual.symbol && <i>{item.visual.symbol}</i>}
    </span>
  );
}

export function TaoBraceletVisual({ item, compact = false }: { item: BeadItem; compact?: boolean }) {
  return <VisualBead item={item} compact={compact} />;
}

function rotateOffset(offset: { x: number; y: number } | undefined, degrees: number) {
  if (!offset) return { x: 0, y: 0 };
  const radians = (degrees * Math.PI) / 180;
  const cos = Math.cos(radians);
  const sin = Math.sin(radians);
  return {
    x: offset.x * cos - offset.y * sin,
    y: offset.x * sin + offset.y * cos,
  };
}

export default function TaoBraceletPreview({
  pieces,
  selectedPieceId,
  cordColor,
  onSelectPiece,
  onDeletePiece,
  onMovePiece,
}: TaoBraceletPreviewProps) {
  const { locale } = useI18n();
  const visibleCount = pieces.length;
  const layoutMass = pieces.reduce((sum, piece) => sum + getPieceLayoutWeight(piece), 0);
  const radius = calculateAdaptiveBraceletRadius(layoutMass);
  const previewRef = useRef<HTMLDivElement>(null);
  const lastTapRef = useRef<{ id: string; time: number } | null>(null);
  const [dragIntent, setDragIntent] = useState<DragIntent | null>(null);
  const previewLayout = visibleCount > 0 ? calculateWeightedBraceletLayout(pieces, radius) : calculateBraceletLayout(1, radius);

  const getDragIntent = (pieceId: string, clientX: number, clientY: number, rect: DOMRect): DragIntent => {
    if (pieces.length <= 1) return { pieceId, targetIndex: 0 };
    const x = clientX - rect.left - rect.width / 2;
    const y = clientY - rect.top - rect.height / 2;

    let angle = Math.atan2(y, x) + Math.PI / 2;
    if (angle < 0) angle += Math.PI * 2;
    const slotFloat = (angle / (Math.PI * 2)) * pieces.length;
    const targetIndex = Math.round(slotFloat) % pieces.length;
    return { pieceId, targetIndex };
  };

  const getPointerClientPoint = (event: MouseEvent | TouchEvent | PointerEvent, fallback: { x: number; y: number }) => {
    if ("clientX" in event && typeof event.clientX === "number") {
      return { x: event.clientX, y: event.clientY };
    }
    const touch = "changedTouches" in event ? event.changedTouches[0] : null;
    return touch ? { x: touch.clientX, y: touch.clientY } : fallback;
  };

  const handlePieceTap = (pieceId: string) => {
    const now = window.performance.now();
    const lastTap = lastTapRef.current;
    if (lastTap?.id === pieceId && now - lastTap.time < 360) {
      lastTapRef.current = null;
      onDeletePiece(pieceId);
      return;
    }
    lastTapRef.current = { id: pieceId, time: now };
    onSelectPiece(pieceId);
  };

  return (
    <div className="tao-bracelet-preview" ref={previewRef}>
      <div className="tao-preview-paper" aria-hidden="true" />
      <div
        className="tao-ring-guide"
        aria-hidden="true"
        style={{ width: radius * 2, height: radius * 2, "--cord-color": cordColor } as CSSProperties}
      />
      <div className="tao-preview-brand">
        <b>缘灵</b>
        <span>灵饰定制</span>
      </div>

      <AnimatePresence>
        {dragIntent && previewLayout[Math.min(dragIntent.targetIndex, previewLayout.length - 1)] && (
          <motion.div
            className="tao-insert-marker"
            initial={{ opacity: 0, scale: 0.65 }}
            animate={{
              opacity: 1,
              scale: 1,
              x: previewLayout[Math.min(dragIntent.targetIndex, previewLayout.length - 1)].x,
              y: previewLayout[Math.min(dragIntent.targetIndex, previewLayout.length - 1)].y,
            }}
            exit={{ opacity: 0, scale: 0.65 }}
            transition={{ type: "spring", stiffness: 360, damping: 28 }}
          />
        )}
      </AnimatePresence>

      <AnimatePresence mode="popLayout">
        {pieces.map((piece, index) => {
          const item = getBeadItem(piece.itemId);
          const visualSlot = Math.max(0, Math.min(previewLayout.length - 1, index));
          const point = previewLayout[visualSlot];
          if (!item || !point) return null;
          const isPendant = item.type === "pendant" || item.type === "charm";
          const followsThread = item.threadAxis === "tangent";
          const showsFace = Boolean(item.previewFace);
          const isSpacer = item.type === "spacer";
          const rotation = isSpacer ? point.rotation + 90 : isPendant ? point.rotation + 180 : followsThread || showsFace ? point.rotation : 0;
          const anchorOffset = followsThread && !showsFace ? rotateOffset(item.threadAnchor, rotation) : { x: 0, y: 0 };
          const outward = isPendant ? 12 : isSpacer ? 0 : 0;
          const x = point.x + Math.cos(point.angle) * outward - anchorOffset.x;
          const y = point.y + Math.sin(point.angle) * outward - anchorOffset.y;

          return (
            <motion.button
              className={`tao-preview-piece ${selectedPieceId === piece.id ? "selected" : ""} ${
                dragIntent?.pieceId === piece.id ? "is-dragging" : ""
              } ${followsThread ? "is-tangent-threaded" : ""} ${showsFace ? "is-face-preview" : ""} ${
                isSpacer ? "is-spacer-piece" : ""
              } ${
                isPendant ? "is-pendant-piece" : ""
              }`}
              key={piece.id}
              layout
              initial={{ opacity: 0, scale: 0.2, x: 0, y: 0, rotate: -18 }}
              animate={{ opacity: 1, scale: point.scale, x, y, rotate: rotation }}
              exit={{ opacity: 0, scale: 0.15, transition: { duration: 0.18 } }}
              transition={{ type: "spring", stiffness: 320, damping: 28, mass: 0.85 }}
              style={{ zIndex: point.zIndex }}
              drag
              dragMomentum={false}
              whileDrag={{ scale: point.scale * 1.18, zIndex: 999 }}
              onTap={() => handlePieceTap(piece.id)}
              onDoubleClick={() => onDeletePiece(piece.id)}
              onDragStart={() => setDragIntent({ pieceId: piece.id, targetIndex: index })}
              onDrag={(event, info) => {
                const parent = previewRef.current?.getBoundingClientRect();
                if (!parent) return;
                const point = getPointerClientPoint(event, info.point);
                setDragIntent(getDragIntent(piece.id, point.x, point.y, parent));
              }}
              onDragEnd={(event, info) => {
                const parent = previewRef.current?.getBoundingClientRect();
                if (!parent) return;
                const point = getPointerClientPoint(event, info.point);
                const intent = getDragIntent(piece.id, point.x, point.y, parent);
                setDragIntent(null);
                onMovePiece(piece.id, intent.targetIndex);
              }}
              type="button"
              aria-label={localizeProductName(item.nameEn || item.name, locale)}
            >
              <VisualBead item={item} ringPreview />
            </motion.button>
          );
        })}
      </AnimatePresence>
    </div>
  );
}

