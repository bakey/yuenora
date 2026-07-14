import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Upload, UserCheck, Stethoscope, Video, FileText } from "lucide-react";
import { howItWorksSteps } from "@/data/doctors";

const icons = [Upload, UserCheck, Stethoscope, Video, FileText];

export default function HowItWorksSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="how-it-works"
      className="relative w-full py-32 md:py-48"
      style={{ background: "#e8f4f4" }}
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
            Simple Process
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[60px] font-medium text-[#0f172a] tracking-[-0.02em] leading-[1.1]">
            How It Works
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-6">
            {howItWorksSteps.map((step, i) => {
              const Icon = icons[i];
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 40 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.15 * i }}
                  className="relative flex flex-col items-center text-center group"
                >
                  {/* Step Number + Icon */}
                  <div className="relative mb-6">
                    <div className="w-[72px] h-[72px] rounded-2xl flex items-center justify-center border border-[#0d9488]/12 bg-[#ffffff] group-hover:border-[rgba(13,148,136,0.3)] transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(13,148,136,0.15)]">
                      <Icon
                        size={24}
                        className="text-[#0d9488]"
                        strokeWidth={1.5}
                      />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#0d9488] flex items-center justify-center">
                      <span className="text-[10px] font-bold text-[#f0f9fa]">
                        {step.step}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-medium text-[#0f172a] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#475569] leading-relaxed max-w-[260px]">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
