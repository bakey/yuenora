import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Microscope,
  Brain,
  Bone,
  Heart,
  Baby,
  Sparkles,
  Scissors,
  Smile,
  Leaf,
  Activity,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Microscope,
  Brain,
  Bone,
  Heart,
  Baby,
  Sparkles,
  Scissors,
  Smile,
  Leaf,
  Activity,
};

const specialtyItems = [
  { name: "Oncology", icon: "Microscope", description: "Comprehensive cancer care" },
  { name: "Neurology", icon: "Brain", description: "Brain & nervous system disorders" },
  { name: "Orthopedics", icon: "Bone", description: "Bone, joint & muscle care" },
  { name: "Cardiology", icon: "Heart", description: "Heart & vascular health" },
  { name: "Fertility & IVF", icon: "Baby", description: "Reproductive medicine" },
  { name: "Dermatology", icon: "Sparkles", description: "Skin health & aesthetics" },
  { name: "Cosmetic Medicine", icon: "Scissors", description: "Aesthetic procedures" },
  { name: "Dentistry", icon: "Smile", description: "Dental & oral care" },
  { name: "Traditional Chinese Medicine", icon: "Leaf", description: "Holistic healing" },
  { name: "Rehabilitation", icon: "Activity", description: "Recovery & therapy" },
];

export default function SpecialtiesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section
      id="specialists"
      className="relative w-full py-32 md:py-48"
      style={{ background: "#f0f9fa" }}
    >
      {/* Ambient glow */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(13,148,136,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10" ref={ref}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="text-[11px] uppercase tracking-[0.14em] text-[#0d9488] font-medium mb-4 block">
            Expert Care
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[60px] font-medium text-[#0f172a] tracking-[-0.02em] leading-[1.1]">
            Comprehensive Specialties
          </h2>
        </motion.div>

        {/* Specialty Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5">
          {specialtyItems.map((specialty, i) => {
            const Icon = iconMap[specialty.icon];
            const isHovered = hoveredIdx === i;

            return (
              <motion.div
                key={specialty.name}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.08 * i }}
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
                className="relative group cursor-pointer rounded-2xl p-6 lg:p-8 border border-[#0d9488]/10 bg-[#ffffff] hover:border-[rgba(13,148,136,0.3)] transition-all duration-500 text-center"
                style={{
                  boxShadow: isHovered
                    ? "0 0 40px rgba(31, 162, 255, 0.1)"
                    : "none",
                }}
              >
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[rgba(13,148,136,0.08)] group-hover:bg-[rgba(13,148,136,0.15)] transition-colors duration-300">
                  <Icon
                    size={22}
                    className="text-[#0d9488]"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="text-sm lg:text-base font-medium text-[#0f172a] mb-1">
                  {specialty.name}
                </h3>
                <p className="text-xs text-[#475569] opacity-60">
                  {specialty.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
