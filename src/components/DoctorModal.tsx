import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check, MessageCircle } from "lucide-react";
import type { Doctor } from "@/data/doctors";
import { useI18n } from "../i18n";

interface Props {
  doctor: Doctor | null;
  onClose: () => void;
}

const WHATSAPP_LINK = "https://wa.me/8617723081247";

export default function DoctorModal({ doctor, onClose }: Props) {
  const { t } = useI18n();

  useEffect(() => {
    if (!doctor) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [doctor, onClose]);

  return (
    <AnimatePresence>
      {doctor && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          onClick={onClose}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
          style={{
            background: "rgba(240, 249, 250, 0.94)",
            backdropFilter: "blur(12px)",
          }}
        >
          {/* Close Button */}
          <motion.button
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 0.7, rotate: 0 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.2 }}
            onClick={onClose}
            className="fixed top-6 right-6 text-[#0f172a] p-2 hover:text-[#0d9488] transition-colors z-10"
            aria-label={t("nav.close")}
          >
            <X size={28} />
          </motion.button>

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-[900px] max-h-[90vh] overflow-y-auto scrollbar-hide rounded-3xl overflow-hidden"
            style={{
              background: "linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(240,249,250,0.98) 100%)",
              border: "1px solid rgba(13,148,136,0.08)",
            }}
          >
            <div className="grid md:grid-cols-[1.2fr_1fr]">
              {/* Doctor Image */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15, duration: 0.5 }}
                className="relative aspect-[3/4] md:aspect-auto md:min-h-[500px]"
              >
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(to top, rgba(15,23,42,0.1) 0%, transparent 40%)",
                  }}
                />
              </motion.div>

              {/* Doctor Details */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25, duration: 0.5 }}
                className="p-8 md:p-10 flex flex-col gap-6"
              >
                {/* Header */}
                <div>
                  <p className="text-[11px] uppercase tracking-[0.14em] text-[#0d9488] font-medium mb-2">
                    {doctor.specialty}
                  </p>
                  <h2 className="text-3xl md:text-4xl font-medium text-[#0f172a] tracking-[-0.02em] mb-1">
                    {doctor.name}
                  </h2>
                  <p className="text-[#475569] text-sm">
                    {doctor.title} · {doctor.hospitalTier}
                  </p>
                </div>

                {/* Experience Badge */}
                <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full self-start"
                  style={{
                    background: "rgba(31, 162, 255, 0.1)",
                    border: "1px solid rgba(31, 162, 255, 0.2)",
                  }}
                >
                  <span className="text-[#0d9488] text-sm font-medium">
                    {doctor.experience} experience
                  </span>
                </div>

                {/* Expertise */}
                <div>
                  <p className="text-[11px] uppercase tracking-[0.12em] text-[#475569] opacity-60 mb-3">
                    Areas of Expertise
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {doctor.expertise.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1.5 rounded-lg text-xs text-[#475569] border border-[#0d9488]/12"
                        style={{ background: "rgba(13,148,136,0.04)" }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <p className="text-[#475569] text-sm leading-relaxed">
                  {doctor.description}
                </p>

                {/* Services */}
                <div>
                  <p className="text-[11px] uppercase tracking-[0.12em] text-[#475569] opacity-60 mb-3">
                    Available Services
                  </p>
                  <div className="flex flex-col gap-2">
                    {doctor.services.map((service) => (
                      <div
                        key={service}
                        className="flex items-center gap-2 text-sm text-[#475569]"
                      >
                        <Check size={14} className="text-[#0d9488] flex-shrink-0" />
                        {service}
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-br from-[#f0f0f0] to-white text-[#0f172a] text-sm font-medium rounded-xl hover:shadow-lg hover:shadow-[#0d9488]/10 transition-all duration-300 hover:scale-[1.02]"
                >
                  <MessageCircle size={16} />
                  Book with this Doctor
                </a>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
