"use client";

import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { Menu, X, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const { language, toggleLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuItems = [
    { href: "#sobre-mi", label: t("nav.about") },
    { href: "#proyectos", label: t("nav.projects") },
    { href: "#contacto", label: t("nav.contact") },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-xl bg-slate-900/60 border-b border-white/10 z-50 transition-all duration-300">
      <div className="max-w-5xl mx-auto flex justify-between items-center py-4 px-6 md:px-8">
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="font-bold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400"
        >
          {t("nav.portfolio")}
        </motion.span>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}

          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-4 py-1.5 bg-slate-800/80 border border-slate-700/50 rounded-full text-slate-300 hover:text-white hover:border-slate-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 group active:scale-95"
          >
            <Globe className="w-3.5 h-3.5 group-hover:rotate-12 transition-transform" />
            <span className="text-xs font-bold tracking-wider">
              {language === "es" ? "ES | EN" : "EN | ES"}
            </span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={toggleLanguage}
            className="p-2 text-slate-300 hover:text-white transition-colors"
            aria-label="Toggle Language"
          >
            <span className="text-xs font-bold">{language.toUpperCase()}</span>
          </button>
          <button
            onClick={toggleMenu}
            className="p-2 text-slate-300 hover:text-white transition-colors focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-900/95 border-b border-white/5 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-medium text-slate-300 hover:text-white transition-colors py-2 border-b border-white/5 last:border-0"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
