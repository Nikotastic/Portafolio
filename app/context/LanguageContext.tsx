"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Language = "es" | "en";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  es: {
    // Navbar
    "nav.portfolio": "Nikotastic",
    "nav.about": "Sobre mí",
    "nav.projects": "Proyectos",
    "nav.contact": "Contacto",

    // Hero
    "hero.greeting": "Hola, soy",
    "hero.title": "Desarrolladora Full Stack",
    "hero.description": "Creo aplicaciones web",
    "hero.description.bold": "funcionales y escalables",
    "hero.description.end":
      "que integran frontend y backend. Me apasiona resolver problemas y transformar ideas en soluciones digitales de impacto.",

    // Tech Carousel
    "tech.title": "Tecnologías",

    // Projects
    "projects.title": "Proyectos",

    // Footer
    "footer.title": "Conectemos",
    "footer.subtitle": "¿Tienes un proyecto en mente? ¡Hablemos!",
    "footer.rights": "Todos los derechos reservados.",
  },
  en: {
    // Navbar
    "nav.portfolio": "Nikotastic",
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.contact": "Contact",

    // Hero
    "hero.greeting": "Hi, I'm",
    "hero.title": "Full Stack Developer",
    "hero.description": "I create",
    "hero.description.bold": "functional and scalable",
    "hero.description.end":
      "web applications that integrate frontend and backend. I'm passionate about solving problems and transforming ideas into impactful digital solutions.",

    // Tech Carousel
    "tech.title": "Technologies",

    // Projects
    "projects.title": "Projects",

    // Footer
    "footer.title": "Let's Connect",
    "footer.subtitle": "Have a project in mind? Let's talk!",
    "footer.rights": "All rights reserved.",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("es");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "es" ? "en" : "es"));
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.es] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
