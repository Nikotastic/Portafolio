"use client";

import { useLanguage } from "../context/LanguageContext";
import { useState, useEffect } from "react";
import { Download, QrCode } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function CVActions() {
  const { language, t } = useLanguage();
  const [showQR, setShowQR] = useState(false);
  const [baseUrl, setBaseUrl] = useState("");

  useEffect(() => {
    setBaseUrl(window.location.origin);
  }, []);

  const cvPath =
    language === "es"
      ? "/CV_Nikol_Velasquez_ES.pdf"
      : "/CV_Nikol_Velasquez_EN.pdf";

  const cvUrl = `${baseUrl}${cvPath}`;
  const qrUrl = baseUrl
    ? `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(
        cvUrl
      )}`
    : "";

  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
      <motion.a
        whileTap={{ scale: 0.95 }}
        href={cvPath}
        download
        target="_blank"
        rel="noopener noreferrer"
        className="w-full sm:w-auto group relative flex items-center justify-center gap-3 px-6 md:px-8 py-3.5 bg-white text-slate-900 font-bold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]"
      >
        <span className="absolute inset-0 bg-gradient-to-r from-slate-200 to-white opacity-0 group-hover:opacity-100 transition-opacity"></span>
        <Download className="w-5 h-5 relative z-10" />
        <span className="relative z-10">{t("hero.cv")}</span>
      </motion.a>

      <div className="relative w-full sm:w-auto">
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowQR(!showQR)}
          className="w-full sm:w-auto flex items-center justify-center gap-3 px-6 py-3.5 bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 text-slate-300 font-semibold rounded-xl hover:bg-slate-800/60 hover:text-white hover:border-slate-500 transition-all duration-300"
          title={t("hero.qr")}
        >
          <QrCode className="w-5 h-5" />
          <span>{t("hero.qr")}</span>
        </motion.button>

        <AnimatePresence>
          {showQR && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 p-4 bg-slate-900 border border-white/10 rounded-2xl shadow-2xl z-50 min-w-[180px]"
            >
              <div className="w-32 h-32 bg-white p-2 flex items-center justify-center mx-auto rounded-lg overflow-hidden relative">
                {qrUrl ? (
                  <img
                    src={qrUrl}
                    alt="QR Code CV"
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <div className="w-8 h-8 border-2 border-slate-200 border-t-slate-800 rounded-full animate-spin"></div>
                )}
              </div>
              <p className="text-[10px] text-slate-400 mt-3 text-center font-medium leading-tight">
                {baseUrl.includes("localhost")
                  ? "Scan (use Local IP)"
                  : "Scan to view CV"}
              </p>
              {/* Arrow */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 w-3 h-3 bg-slate-900 border-r border-b border-white/10 rotate-45"></div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
