"use client";

import { useLanguage } from "../context/LanguageContext";
import { motion } from "framer-motion";

export default function TechCarousel() {
  const { t } = useLanguage();

  const technologies = [
    {
      name: "C#",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
    },
    {
      name: ".NET",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Next.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "SQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    },
    {
      name: "MYSQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
      name: "Oracle",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg",
    },
    {
      name: "PHP",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    },
    {
      name: "Boostrap",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    },
    {
      name: "Android Studio",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg",
    },
    {
      name: "Vue.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
    },
    {
      name: "React Native",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Firebase",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    },
    {
      name: "Docker",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    },
    {
      name: "Scrum",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/confluence/confluence-original.svg",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto mb-12">
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-100 text-center tracking-tight"
        >
          {t("tech.title")}
        </motion.h2>
      </div>

      <div className="relative w-full">
        {/* Gradientes para efecto fade en los bordes */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-slate-900 via-slate-900/80 to-transparent z-10 pointer-events-none"></div>

        {/* Carrusel infinito */}
        <div className="overflow-hidden py-4">
          <div className="flex animate-carousel w-fit">
            {/* Primer conjunto de logos */}
            {technologies.map((tech, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 mx-4 md:mx-10 group"
              >
                <div className="w-16 h-16 md:w-24 md:h-24 flex items-center justify-center bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-white/5 hover:border-white/20 transition-all duration-300 group-hover:bg-slate-800/50 group-hover:scale-110">
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-10 h-10 md:w-14 md:h-14 object-contain transition-all duration-500 opacity-90 group-hover:opacity-100"
                  />
                </div>
                <p className="text-center text-[10px] md:text-sm font-medium text-slate-500 mt-3 group-hover:text-slate-300 transition-colors">
                  {tech.name}
                </p>
              </div>
            ))}

            {/* Segundo conjunto (duplicado para el loop infinito) */}
            {technologies.map((tech, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 mx-4 md:mx-10 group"
              >
                <div className="w-16 h-16 md:w-24 md:h-24 flex items-center justify-center bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-white/5 hover:border-white/20 transition-all duration-300 group-hover:bg-slate-800/50 group-hover:scale-110">
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-10 h-10 md:w-14 md:h-14 object-contain transition-all duration-500 opacity-90 group-hover:opacity-100"
                  />
                </div>
                <p className="text-center text-[10px] md:text-sm font-medium text-slate-500 mt-3 group-hover:text-slate-300 transition-colors">
                  {tech.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
