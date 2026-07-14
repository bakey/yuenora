import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, Star } from "lucide-react";
import { pricingPlans } from "@/data/doctors";

const WHATSAPP_LINK = "https://wa.me/8617723081247";

export default function PricingSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="pricing"
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
            Transparent Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[60px] font-medium text-[#0f172a] tracking-[-0.02em] leading-[1.1]">
            Choose Your Plan
          </h2>
          <p className="mt-4 text-[#475569] text-base max-w-[480px] mx-auto">
            Professional medical consultation at a fraction of Western costs.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-start">
          {pricingPlans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 * i }}
              className={`relative rounded-3xl p-8 lg:p-10 transition-all duration-500 hover:-translate-y-2 ${
                plan.popular
                  ? "border-t-2 border-[#0d9488]"
                  : "border border-[#0d9488]/10"
              }`}
              style={{
                background: plan.popular
                  ? "linear-gradient(180deg, rgba(13,148,136,0.08) 0%, rgba(232,244,244,0.95) 100%)"
                  : "rgba(255, 255, 255, 0.03)",
                backdropFilter: "blur(20px)",
                boxShadow: plan.popular
                  ? "0 0 60px rgba(31, 162, 255, 0.1)"
                  : "none",
              }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-[#0d9488] text-[#f0f9fa] text-[11px] font-semibold uppercase tracking-wider">
                  <Star size={10} fill="#f0f9fa" />
                  Most Popular
                </div>
              )}

              {/* Plan Name */}
              <p className="text-[11px] uppercase tracking-[0.14em] text-[#475569] opacity-60 font-medium mb-2">
                {plan.name}
              </p>

              {/* Price */}
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-4xl md:text-5xl font-medium text-[#0f172a] tracking-[-0.03em]">
                  {plan.price}
                </span>
              </div>
              <p className="text-sm text-[#475569] mb-8">{plan.description}</p>

              {/* Features */}
              <ul className="flex flex-col gap-3 mb-10">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-[#475569]"
                  >
                    <Check
                      size={16}
                      className="text-[#0d9488] mt-0.5 flex-shrink-0"
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full text-center py-3.5 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-[1.02] ${
                  plan.popular
                    ? "bg-gradient-to-br from-[#f0f0f0] to-white text-[#0f172a] hover:shadow-lg hover:shadow-[#0d9488]/10"
                    : "border border-[#0d9488]/15 text-[#0f172a] hover:bg-[#0d9488]/5 hover:border-[#0d9488]/30"
                }`}
              >
                Start Consultation
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
