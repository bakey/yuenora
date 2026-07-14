import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Wallet, Clock, Plane } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Experienced Specialists",
    description:
      "Many Chinese specialists handle large patient volumes and complex cases every year, accumulating extensive clinical expertise.",
  },
  {
    icon: Wallet,
    title: "Affordable Medical Review",
    description:
      "A professional second opinion can cost far less than in the US or Europe, without compromising on quality.",
  },
  {
    icon: Clock,
    title: "Fast Access",
    description:
      "Get an initial review without waiting weeks for an offline appointment. Start your consultation within days.",
  },
  {
    icon: Plane,
    title: "Medical Travel Pathway",
    description:
      "If treatment in China is suitable, our team can help arrange hospital visits, translation and medical travel support.",
  },
];

export default function WhyChinaSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="why-china"
      className="relative w-full py-32 md:py-48"
      style={{ background: "#f0f9fa" }}
    >
      {/* Subtle radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(13,148,136,0.06) 0%, transparent 70%)",
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
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[60px] font-medium text-[#0f172a] tracking-[-0.02em] leading-[1.1]">
            Why Patients Choose
            <br />
            Chinese Doctors
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 * i }}
              className="group relative p-8 lg:p-10 rounded-3xl border border-[#0d9488]/10 bg-[#ffffff] hover:border-[rgba(13,148,136,0.3)] transition-all duration-500"
              style={{
                boxShadow: "0 0 0 rgba(31, 162, 255, 0)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 0 40px rgba(31, 162, 255, 0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 0 0 rgba(31, 162, 255, 0)";
              }}
            >
              <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[rgba(13,148,136,0.12)] border border-[rgba(13,148,136,0.18)]">
                <feature.icon
                  size={22}
                  className="text-[#0d9488]"
                  strokeWidth={1.5}
                />
              </div>

              <h3 className="text-xl lg:text-2xl font-medium text-[#0f172a] mb-3 tracking-[-0.01em]">
                {feature.title}
              </h3>
              <p className="text-[#475569] text-sm lg:text-base leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
