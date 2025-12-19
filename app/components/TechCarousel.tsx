"use client";

import { useLanguage } from "../context/LanguageContext";

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
    <section className="py-16 px-6 overflow-hidden">
      <div className="max-w-3xl mx-auto mb-8">
        <h2 className="text-3xl font-bold text-gray-100 text-center animate-slide-up">
          {t("tech.title")}
        </h2>
      </div>

      <div className="relative w-full">
        {/* Gradientes para efecto fade en los bordes */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none"></div>

        {/* Carrusel infinito con ancho fijo */}
        <div className="overflow-hidden">
          <div className="flex animate-carousel w-fit">
            {/* Primer conjunto de logos */}
            {technologies.map((tech, index) => (
              <div key={`first-${index}`} className="flex-shrink-0 mx-8 group">
                <div className="w-20 h-20 flex items-center justify-center bg-slate-800/50 rounded-lg border border-slate-700 hover:border-slate-500 hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-slate-700/50">
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-12 h-12 object-contain filter brightness-90 group-hover:brightness-110 transition-all"
                  />
                </div>
                <p className="text-center text-sm text-gray-400 mt-2 group-hover:text-gray-200 transition-colors">
                  {tech.name}
                </p>
              </div>
            ))}

            {/* Segundo conjunto (duplicado para el loop infinito) */}
            {technologies.map((tech, index) => (
              <div key={`second-${index}`} className="flex-shrink-0 mx-8 group">
                <div className="w-20 h-20 flex items-center justify-center bg-slate-800/50 rounded-lg border border-slate-700 hover:border-slate-500 hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-slate-700/50">
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-12 h-12 object-contain filter brightness-90 group-hover:brightness-110 transition-all"
                  />
                </div>
                <p className="text-center text-sm text-gray-400 mt-2 group-hover:text-gray-200 transition-colors">
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
