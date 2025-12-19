"use client";

import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-slate-900/30 border-b border-slate-700/50 z-50 animate-fade-in">
      <div className="max-w-3xl mx-auto flex justify-between items-center py-4 px-4">
        <span className="font-bold text-gray-100">{t("nav.portfolio")}</span>
        <div className="flex items-center space-x-4">
          <a
            href="#sobre mi"
            className="text-gray-300 hover:text-white transition-colors"
          >
            {t("nav.about")}
          </a>
          <a
            href="#projectos"
            className="text-gray-300 hover:text-white transition-colors"
          >
            {t("nav.projects")}
          </a>
          <a
            href="#contacto"
            className="text-gray-300 hover:text-white transition-colors"
          >
            {t("nav.contact")}
          </a>

          {/* Botón de cambio de idioma */}
          <button
            onClick={toggleLanguage}
            className="ml-2 px-3 py-1 bg-slate-800/50 border border-slate-700 rounded-lg text-gray-300 hover:text-white hover:border-slate-500 transition-all duration-300 hover:scale-105 font-semibold text-sm"
            aria-label="Change language"
          >
            {language === "es" ? "EN" : "ES"}
          </button>
        </div>
      </div>
    </nav>
  );
}
