import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Building2,
  Users,
  Globe,
  DollarSign,
  MessageCircle,
  Award,
} from "lucide-react";

const advantages = [
  {
    icon: Building2,
    title: "World-Class Hospitals",
    description:
      "Access specialists from advanced hospitals in Beijing, Shanghai, Guangzhou, Shenzhen, and Chengdu.",
  },
  {
    icon: Users,
    title: "High Patient Volume Experience",
    description:
      "China has large-scale clinical experience. Many specialists see high patient volumes annually.",
  },
  {
    icon: DollarSign,
    title: "Affordable Consultation",
    description:
      "More affordable consultation and treatment planning compared to the US and Europe.",
  },
  {
    icon: MessageCircle,
    title: "Bilingual Support",
    description:
      "Full bilingual support for international patients. Our coordinators speak English, Arabic, and more.",
  },
  {
    icon: Globe,
    title: "Global Patient Network",
    description:
      "Serving patients from the US, Europe, Middle East, Southeast Asia, and beyond.",
  },
  {
    icon: Award,
    title: "Certified Specialists",
    description:
      "All doctors are certified physicians at Class-A Tertiary Hospitals, China's top hospital tier.",
  },
];

export default function TrustSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="trust"
      className="relative w-full py-32 md:py-48"
      style={{ background: "#f0f9fa" }}
    >
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10" ref={ref}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="text-[11px] uppercase tracking-[0.14em] text-[#0d9488] font-medium mb-4 block">
            Trust & Excellence
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[60px] font-medium text-[#0f172a] tracking-[-0.02em] leading-[1.1]">
            The China Medical
            <br />
            Advantage
          </h2>
        </motion.div>

        {/* Advantages Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {advantages.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className="group flex gap-5 p-6 rounded-2xl border border-[#0d9488]/10 hover:border-[rgba(13,148,136,0.18)] bg-[#ffffff]/50 hover:bg-[#ffffff] transition-all duration-500"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[rgba(13,148,136,0.12)] border border-[rgba(13,148,136,0.15)] flex items-center justify-center">
                <item.icon
                  size={18}
                  className="text-[#0d9488]"
                  strokeWidth={1.5}
                />
              </div>
              <div>
                <h3 className="text-base font-medium text-[#0f172a] mb-1.5">
                  {item.title}
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: "500+", label: "Certified Specialists" },
            { value: "50+", label: "Class-A Hospitals" },
            { value: "30+", label: "Countries Served" },
            { value: "98%", label: "Patient Satisfaction" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="text-3xl md:text-4xl font-medium tracking-[-0.02em] mb-1"
                style={{
                  background:
                    "linear-gradient(135deg, #ffffff 0%, #5eead4 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {stat.value}
              </div>
              <p className="text-xs text-[#475569] uppercase tracking-[0.1em]">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
