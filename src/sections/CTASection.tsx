import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageCircle, Mail, MapPin, ExternalLink } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/8617723081247";

export default function CTASection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <>
      {/* CTA Section */}
      <section
        id="cta"
        className="relative w-full py-40 md:py-56 overflow-hidden"
        style={{ background: "#f0f9fa" }}
      >
        {/* Background glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, rgba(13,148,136,0.08) 0%, transparent 60%)",
          }}
        />

        <div
          className="relative max-w-[800px] mx-auto px-6 lg:px-10 text-center"
          ref={ref}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[11px] uppercase tracking-[0.14em] text-[#0d9488] font-medium mb-6 block">
              Get Started Today
            </span>

            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[80px] font-medium tracking-[-0.04em] leading-[0.95] mb-8">
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #ffffff 0%, #5eead4 50%, #0d9488 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Start with an Online Medical Opinion
              </span>
            </h2>

            <p className="text-[#475569] text-base md:text-lg max-w-[560px] mx-auto mb-12 leading-relaxed">
              Upload your medical records and our medical coordinator will help
              match your case with a suitable Chinese doctor.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-br from-[#f0f0f0] to-white text-[#0f172a] text-sm font-medium rounded-xl hover:shadow-lg hover:shadow-[#0d9488]/10 transition-all duration-300 hover:scale-[1.02]"
              >
                <ExternalLink size={16} />
                Book Now
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-[#0f172a] text-sm font-medium rounded-xl border border-[#0d9488]/15 hover:border-[#0d9488]/50 hover:bg-[#0d9488]/10 transition-all duration-300"
              >
                <MessageCircle size={16} />
                Contact on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="relative w-full py-16 md:py-20 border-t border-[#0d9488]/12"
        style={{ background: "#f0f9fa" }}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10 md:gap-8">
            {/* Brand */}
            <div>
              <h3 className="text-[#0f172a] text-lg font-medium mb-4">
                缘灵
              </h3>
              <p className="text-sm text-[#475569] leading-relaxed max-w-[300px]">
                Connecting international patients with experienced Chinese
                doctors for professional online medical consultations.
              </p>
              <div className="mt-6 flex items-center gap-2 text-sm text-[#0d9488]">
                <MessageCircle size={16} />
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  WhatsApp: +86 17723081247
                </a>
              </div>
            </div>

            {/* Platform */}
            <div>
              <h4 className="text-[11px] uppercase tracking-[0.12em] text-[#475569] opacity-50 font-medium mb-4">
                Platform
              </h4>
              <ul className="flex flex-col gap-3">
                {["How It Works", "Pricing", "Specialties", "For Doctors"].map(
                  (item) => (
                    <li key={item}>
                      <button
                        onClick={() => {
                          const id = item
                            .toLowerCase()
                            .replace(/\s+/g, "-")
                            .replace(/\s/g, "");
                          const el = document.querySelector(
                            id === "how-it-works"
                              ? "#how-it-works"
                              : id === "pricing"
                                ? "#pricing"
                                : id === "specialties"
                                  ? "#specialists"
                                  : "#hero"
                          );
                          if (el) el.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="text-sm text-[#475569] hover:text-[#0f172a] transition-colors"
                      >
                        {item}
                      </button>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Specialties */}
            <div>
              <h4 className="text-[11px] uppercase tracking-[0.12em] text-[#475569] opacity-50 font-medium mb-4">
                Specialties
              </h4>
              <ul className="flex flex-col gap-3">
                {[
                  "Oncology",
                  "Cardiology",
                  "Neurology",
                  "Orthopedics",
                  "Fertility",
                ].map((item) => (
                  <li key={item}>
                    <span className="text-sm text-[#475569]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-[11px] uppercase tracking-[0.12em] text-[#475569] opacity-50 font-medium mb-4">
                Contact
              </h4>
              <ul className="flex flex-col gap-3">
                <li className="flex items-center gap-2 text-sm text-[#475569]">
                  <MessageCircle size={14} className="text-[#0d9488]" />
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#0f172a] transition-colors"
                  >
                    WhatsApp
                  </a>
                </li>
                <li className="flex items-center gap-2 text-sm text-[#475569]">
                  <Mail size={14} className="text-[#0d9488]" />
                  <span>service@yuenora.com</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-[#475569]">
                  <MapPin
                    size={14}
                    className="text-[#0d9488] mt-0.5 flex-shrink-0"
                  />
                  <span>Shanghai, China</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-16 pt-8 border-t border-[#0d9488]/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-[#475569] opacity-40">
              &copy; {new Date().getFullYear()} 缘灵. All rights
              reserved.
            </p>
            <p className="text-xs text-[#475569] opacity-40">
              缘灵 is a blessing jewelry studio. We do not provide
              emergency medical services.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
