"use client";

import projects from "@/data/projects.json";
import { useLanguage } from "../context/LanguageContext";

export default function Projects() {
  const { t, language } = useLanguage();

  return (
    <section id="projectos" className="px-6 max-w-4xl mx-auto py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-100 animate-slide-up mb-3">
          {t("projects.title")}
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-slate-500 to-slate-700 mx-auto rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p: any, i) => (
          <div
            key={i}
            className="group relative border border-slate-700/50 bg-gradient-to-br from-slate-900/50 to-slate-800/30 p-8 rounded-xl hover:border-slate-500 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-900/80 animate-fade-in-up overflow-hidden"
            style={{ animationDelay: `${i * 150}ms` }}
          >
            {/* Efecto de brillo al hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-700/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:animate-shimmer"></div>

            {/* Icono de GitHub */}
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-lg bg-slate-800/70 flex items-center justify-center group-hover:bg-slate-700/70 transition-colors">
                <svg
                  className="w-6 h-6 text-gray-400 group-hover:text-gray-200 transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>

            <h3 className="font-bold text-2xl text-gray-100 mb-3 group-hover:text-white transition-colors">
              {p.title[language]}
            </h3>
            <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors mb-6">
              {p.description[language]}
            </p>

            {/* Botones de acción */}
            <div className="flex flex-wrap gap-2 mt-auto relative z-10">
              {p.demo && (
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[120px] flex items-center justify-center gap-2 px-3 py-2 bg-slate-700/50 hover:bg-slate-600/70 border border-slate-600 hover:border-slate-500 rounded-lg text-gray-200 hover:text-white transition-all duration-300 font-medium text-xs group/btn cursor-pointer"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                  <span>{language === "es" ? "Ver Demo" : "View Demo"}</span>
                </a>
              )}

              {p["demo admin"] && (
                <a
                  href={p["demo admin"]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[120px] flex items-center justify-center gap-2 px-3 py-2 bg-blue-900/40 hover:bg-blue-800/60 border border-blue-700/50 hover:border-blue-500 rounded-lg text-blue-100 hover:text-white transition-all duration-300 font-medium text-xs group/btn cursor-pointer"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                  <span>{language === "es" ? "Demo Admin" : "Admin Demo"}</span>
                </a>
              )}

              {p["demo client"] && (
                <a
                  href={p["demo client"]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[120px] flex items-center justify-center gap-2 px-3 py-2 bg-emerald-900/40 hover:bg-emerald-800/60 border border-emerald-700/50 hover:border-emerald-500 rounded-lg text-emerald-100 hover:text-white transition-all duration-300 font-medium text-xs group/btn cursor-pointer"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  <span>
                    {language === "es" ? "Demo Cliente" : "Client Demo"}
                  </span>
                </a>
              )}

              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-[120px] flex items-center justify-center gap-2 px-3 py-2 bg-slate-800/50 hover:bg-slate-700/70 border border-slate-700 hover:border-slate-500 rounded-lg text-gray-300 hover:text-white transition-all duration-300 font-medium text-xs group/btn cursor-pointer"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{language === "es" ? "Repositorio" : "Repository"}</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
