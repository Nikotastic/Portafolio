"use client";

import { useLanguage } from "../context/LanguageContext";
import { useState, useEffect } from "react";

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
    <div className="flex flex-col sm:flex-row items-center gap-4 mt-8 animate-slide-up-delay-3">
      <a
        href={cvPath}
        download
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-3 px-8 py-4 bg-slate-100 text-slate-900 font-bold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] active:scale-95"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-200 to-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="relative z-10"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" x2="12" y1="15" y2="3" />
        </svg>
        <span className="relative z-10">{t("hero.cv")}</span>
      </a>

      <div className="relative">
        <button
          onClick={() => setShowQR(!showQR)}
          className="flex items-center gap-3 px-6 py-4 bg-slate-800/50 border border-slate-700 text-slate-300 font-semibold rounded-full hover:bg-slate-800 hover:text-white hover:border-slate-500 transition-all duration-300"
          title={t("hero.qr")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="5" height="5" x="3" y="3" rx="1" />
            <rect width="5" height="5" x="16" y="3" rx="1" />
            <rect width="5" height="5" x="3" y="16" rx="1" />
            <path d="M21 16h-3a2 2 0 0 0-2 2v3" />
            <path d="M21 21v.01" />
            <path d="M12 7v3a2 2 0 0 1-2 2H7" />
            <path d="M3 12h.01" />
            <path d="M12 3h.01" />
            <path d="M12 16v.01" />
            <path d="M16 12h1" />
            <path d="M21 12v.01" />
            <path d="M12 21v-1" />
          </svg>
          <span className="sm:hidden">{t("hero.qr")}</span>
        </button>

        {showQR && (
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 p-4 bg-slate-900/90 backdrop-blur-xl border border-slate-700/50 rounded-2xl shadow-2xl animate-fade-in z-50">
            <div className="w-32 h-32 bg-white p-2 flex items-center justify-center rounded-lg overflow-hidden relative">
              {qrUrl ? (
                <img
                  src={qrUrl}
                  alt="QR Code CV"
                  className="w-full h-full object-contain animate-fade-in"
                />
              ) : (
                <div className="w-8 h-8 border-2 border-slate-200 border-t-slate-800 rounded-full animate-spin"></div>
              )}
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rotate-45 w-4 h-4 bg-slate-900/90 border-r border-b border-slate-700/50"></div>
            <p className="text-[10px] text-slate-400 mt-2 text-center font-medium">
              {baseUrl.includes("localhost")
                ? "Scan (use Local IP)"
                : "Scan to view CV"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
