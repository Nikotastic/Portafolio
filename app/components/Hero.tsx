"use client";

import { useLanguage } from "../context/LanguageContext";
import CVActions from "./CVActions";
import { motion } from "framer-motion";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="sobre-mi"
      className="min-h-screen flex flex-col justify-center px-6 md:px-12 max-w-5xl mx-auto relative overflow-hidden"
    >
      {/* Efecto de gradiente sutil superpuesto */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent pointer-events-none"></div>

      <div className="relative z-10 space-y-4 md:space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold text-gray-100 leading-tight"
        >
          {t("hero.greeting")}{" "}
          <span className="text-slate-300 border-b-2 border-slate-500 hover:border-slate-400 transition-colors duration-300 inline-block hover:scale-105 transform">
            Nikol Velasquez
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-3xl text-slate-300 font-light"
        >
          {t("hero.title")}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-base md:text-lg text-gray-400 leading-relaxed max-w-2xl"
        >
          {t("hero.description")}{" "}
          <span className="text-slate-200 font-semibold">
            {t("hero.description.bold")}
          </span>{" "}
          {t("hero.description.end")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <CVActions />
        </motion.div>
      </div>
    </section>
  );
}
