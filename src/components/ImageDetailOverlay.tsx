import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";
import type { ImageItem } from "@/config";
import { useI18n } from "../i18n";

interface Props {
  image: ImageItem | null;
  onClose: () => void;
  onViewProfile?: () => void;
}

export default function ImageDetailOverlay({
  image,
  onClose,
  onViewProfile,
}: Props) {
  const { t } = useI18n();

  useEffect(() => {
    if (!image) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [image, onClose]);

  return (
    <AnimatePresence>
      {image && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          onClick={onClose}
          className="fixed inset-0 z-[90] flex items-center justify-center p-4 sm:p-8 md:p-16"
          style={{
            background: "rgba(240, 249, 250, 0.96)",
            backdropFilter: "blur(12px)",
          }}
        >
          {/* Close button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.1 }}
            onClick={onClose}
            className="fixed top-6 right-6 text-[#0f172a] p-2 hover:text-[#0d9488] transition-colors z-10"
            aria-label={t("nav.close")}
          >
            <X size={28} />
          </motion.button>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="grid md:grid-cols-[1.3fr_1fr] gap-8 md:gap-14 max-w-[1200px] w-full items-center"
          >
            {/* Image */}
            <div className="relative flex items-center justify-center max-h-[60vh] md:max-h-[70vh]">
              <img
                src={image.src}
                alt={image.title}
                className="max-w-full max-h-[60vh] md:max-h-[70vh] object-contain rounded-2xl"
                style={{ boxShadow: "0 40px 100px rgba(0,0,0,0.6)" }}
              />
            </div>

            {/* Text Panel */}
            <div className="flex flex-col gap-5">
              {image.category && (
                <p className="text-[11px] tracking-[0.14em] uppercase text-[#0d9488] font-medium">
                  {image.category}
                </p>
              )}

              <h2 className="text-3xl md:text-[clamp(28px,2.6vw,40px)] font-medium text-[#0f172a] leading-[1.15] tracking-[-0.01em]">
                {image.title}
              </h2>

              <p className="text-[#475569] text-base md:text-lg leading-relaxed">
                {image.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mt-4">
                {onViewProfile && (
                  <button
                    onClick={() => {
                      onClose();
                      setTimeout(onViewProfile, 350);
                    }}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-br from-[#f0f0f0] to-white text-[#0f172a] text-sm font-medium rounded-xl hover:shadow-lg transition-all duration-300"
                  >
                    {t("catalog.view")}
                    <ArrowRight size={14} />
                  </button>
                )}
                <button
                  onClick={onClose}
                  className="inline-flex items-center justify-center px-6 py-3 text-[#0f172a] text-sm font-medium rounded-xl border border-[#0d9488]/15 hover:bg-[#0d9488]/5 transition-all duration-300"
                >
                  {t("nav.close")}
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
