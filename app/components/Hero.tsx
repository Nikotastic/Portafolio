"use client";

import { useLanguage } from "../context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 max-w-3xl mx-auto relative">
      {/* Efecto de gradiente sutil superpuesto */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent pointer-events-none"></div>

      <div className="relative z-10 space-y-6">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-100 animate-slide-up">
          {t("hero.greeting")}{" "}
          <span className="text-slate-300 border-b-2 border-slate-500 hover:border-slate-400 transition-colors duration-300 inline-block hover:scale-105 transform">
            Nikol Velasquez
          </span>
        </h1>
        <p className="text-2xl md:text-3xl text-slate-300 font-light animate-slide-up-delay-1">
          {t("hero.title")}
        </p>
        <p className="text-lg text-gray-400 leading-relaxed max-w-2xl animate-slide-up-delay-2">
          {t("hero.description")}{" "}
          <span className="text-slate-200 font-semibold">
            {t("hero.description.bold")}
          </span>{" "}
          {t("hero.description.end")}
        </p>
      </div>
    </section>
  );
}
