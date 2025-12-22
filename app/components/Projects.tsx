"use client";

import projects from "@/data/projects.json";
import { useLanguage } from "../context/LanguageContext";
import { Github, ExternalLink, ShieldCheck, User } from "lucide-react";
import { motion } from "framer-motion";

export default function Projects() {
  const { t, language } = useLanguage();

  return (
    <section id="proyectos" className="px-6 md:px-12 max-w-6xl mx-auto py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4 tracking-tight">
          {t("projects.title")}
        </h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {projects.map((p: any, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative border border-white/5 bg-slate-900/40 backdrop-blur-sm p-6 md:p-8 rounded-2xl hover:border-white/20 transition-all duration-500 flex flex-col h-full"
          >
            {/* Project Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="p-3 rounded-xl bg-slate-800/50 group-hover:bg-blue-600/20 transition-colors">
                <Github className="w-6 h-6 text-slate-400 group-hover:text-blue-400 transition-colors" />
              </div>
            </div>

            <h3 className="font-bold text-2xl text-gray-100 mb-4 group-hover:text-white transition-colors">
              {p.title[language]}
            </h3>
            <p className="text-slate-400 leading-relaxed mb-8 flex-grow">
              {p.description[language]}
            </p>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-auto">
              {p.demo && (
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-slate-200 hover:text-white transition-all text-sm font-semibold"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>{language === "es" ? "Ver Demo" : "View Demo"}</span>
                </a>
              )}

              {p["demo admin"] && (
                <a
                  href={p["demo admin"]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600/10 hover:bg-blue-600/20 border border-blue-600/20 rounded-xl text-blue-400 hover:text-blue-300 transition-all text-sm font-semibold"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>{language === "es" ? "Admin" : "Admin"}</span>
                </a>
              )}

              {p["demo client"] && (
                <a
                  href={p["demo client"]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2.5 bg-emerald-600/10 hover:bg-emerald-600/20 border border-emerald-600/20 rounded-xl text-emerald-400 hover:text-emerald-300 transition-all text-sm font-semibold"
                >
                  <User className="w-4 h-4" />
                  <span>{language === "es" ? "Cliente" : "Client"}</span>
                </a>
              )}

              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-800/80 hover:bg-slate-700 border border-slate-700/50 rounded-xl text-slate-300 hover:text-white transition-all text-sm font-semibold"
              >
                <Github className="w-4 h-4" />
                <span>{language === "es" ? "Código" : "Code"}</span>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
