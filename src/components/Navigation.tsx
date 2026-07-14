import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import BrandMark from "./BrandMark";
import { useI18n } from "../i18n";

const navLinks = [
  { labelKey: "nav.custom", href: "#diy" },
  { labelKey: "nav.collection", href: "#bracelets" },
  { labelKey: "nav.blessing", href: "#blessing-service" },
  { labelKey: "nav.contact", href: "#contact" },
];

const WHATSAPP_LINK = "https://wa.me/8617723081247";

export default function Navigation() {
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 h-20 transition-all duration-500 ${
          scrolled
            ? "bg-[#f0f9fa]/80 backdrop-blur-xl border-b border-[#0d9488]/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto h-full flex items-center justify-between px-6 lg:px-10">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="text-[#0f172a] font-medium text-lg tracking-[-0.02em] hover:opacity-70 transition-opacity"
          >
            <BrandMark compact />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-[#475569] text-sm hover:text-[#0f172a] transition-colors duration-300"
              >
                {t(link.labelKey)}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center px-5 py-2.5 bg-gradient-to-br from-[#f0f0f0] to-white text-[#0f172a] text-sm font-medium rounded-lg hover:shadow-lg hover:shadow-[#0d9488]/10 transition-all duration-300 hover:scale-[1.02]"
            >
              {t("nav.build")}
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-[#0f172a] p-2"
              aria-label={t("nav.toggleMenu")}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#f0f9fa]/95 backdrop-blur-xl pt-24 px-6"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => handleNavClick(link.href)}
                  className="text-[#0f172a] text-2xl font-light text-left"
                >
                  {t(link.labelKey)}
                </motion.button>
              ))}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center px-6 py-3 bg-gradient-to-br from-[#f0f0f0] to-white text-[#0f172a] text-base font-medium rounded-lg"
              >
                {t("nav.build")}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
