import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Stethoscope } from "lucide-react";
import VortexGallery from "@/lib/VortexGallery";
import ImageDetailOverlay from "@/components/ImageDetailOverlay";
import DoctorModal from "@/components/DoctorModal";
import { doctors } from "@/data/doctors";
import type { Doctor } from "@/data/doctors";

const WHATSAPP_LINK = "https://wa.me/8617723081247";

interface ImageItem {
  src: string;
  category: string;
  title: string;
  description: string;
}

const galleryImages: ImageItem[] = doctors.map((d) => ({
  src: d.image,
  category: d.specialty,
  title: d.name,
  description: `${d.title} at ${d.hospitalTier}. ${d.experience} of experience. Expert in ${d.expertise.join(", ")}.`,
}));

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const vortexRef = useRef<VortexGallery | null>(null);
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const vortex = new VortexGallery(
      canvasRef.current,
      galleryImages.map((i) => i.src)
    );
    vortexRef.current = vortex;

    return () => {
      vortex.destroy();
    };
  }, []);

  useEffect(() => {
    vortexRef.current?.setPaused(selectedIdx !== null);
  }, [selectedIdx]);

  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const vortex = vortexRef.current;
    const canvas = canvasRef.current;
    if (!vortex || !canvas) return;
    const idx = vortex.pickAtScreen(
      e.clientX,
      e.clientY,
      canvas.getBoundingClientRect()
    );
    if (idx !== null && idx >= 0 && idx < doctors.length) {
      setSelectedIdx(idx);
    }
  };

  const handleCloseOverlay = () => {
    setSelectedIdx(null);
  };

  const handleViewProfile = () => {
    if (selectedIdx !== null && selectedIdx >= 0 && selectedIdx < doctors.length) {
      setSelectedDoctor(doctors[selectedIdx]);
    }
  };

  const handleCloseModal = () => {
    setSelectedDoctor(null);
  };

  return (
    <section
      id="hero"
      className="relative w-full min-h-[100dvh] overflow-hidden"
      style={{ background: "#f0f9fa" }}
    >
      {/* WebGL Canvas */}
      <canvas
        ref={canvasRef}
        onClick={handleCanvasClick}
        className="absolute inset-0 w-full h-full cursor-pointer"
        style={{ zIndex: 1 }}
      />

      {/* Gradient overlay for depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 2,
          background:
            "linear-gradient(180deg, rgba(240,249,250,0.5) 0%, rgba(240,249,250,0.2) 40%, rgba(240,249,250,0.7) 100%)",
        }}
      />

      {/* Content */}
      <div
        className="relative flex flex-col items-start justify-center min-h-[100dvh] px-6 lg:px-16 xl:px-24"
        style={{ zIndex: 10 }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="max-w-[680px]"
        >
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="h-px w-8 bg-[#0d9488]" />
            <span className="text-[11px] uppercase tracking-[0.14em] text-[#0d9488] font-medium">
              Online Medical Consultation
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[80px] font-medium leading-[0.95] tracking-[-0.04em] mb-6 text-shadow-hero"
            style={{
              background:
                "linear-gradient(135deg, #0f172a 0%, #0d9488 50%, #14b8a6 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Consult Experienced Chinese Doctors Online
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-[#475569] text-base md:text-lg leading-relaxed max-w-[520px] mb-10"
          >
            Get a professional medical second opinion from China&apos;s hospital
            specialists — faster, more affordable, and supported by bilingual
            medical coordinators.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gradient-to-br from-[#f0f0f0] to-white text-[#0f172a] text-sm font-medium rounded-xl hover:shadow-lg hover:shadow-[#0d9488]/10 transition-all duration-300 hover:scale-[1.02]"
            >
              <Stethoscope size={16} />
              Book a Consultation
            </a>
            <button
              onClick={() => {
                const el = document.querySelector("#how-it-works");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-[#0f172a] text-sm font-medium rounded-xl border border-[#0d9488]/15 hover:border-[#0d9488]/25 hover:bg-[#0d9488]/5 transition-all duration-300"
            >
              View Doctors
              <ArrowRight size={16} />
            </button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="absolute bottom-8 left-6 lg:left-16 xl:px-24"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center gap-2"
            >
              <span className="text-[11px] uppercase tracking-[0.12em] text-[#475569] opacity-50">
                Scroll
              </span>
              <div className="w-px h-8 bg-gradient-to-b from-[#0d9488]/20 to-transparent" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Image Detail Overlay */}
      <ImageDetailOverlay
        image={selectedIdx !== null ? galleryImages[selectedIdx] : null}
        onClose={handleCloseOverlay}
        onViewProfile={handleViewProfile}
      />

      {/* Doctor Modal */}
      <DoctorModal doctor={selectedDoctor} onClose={handleCloseModal} />
    </section>
  );
}
