import React, { createContext, useContext, useEffect, useState } from "react";
import { translations } from "@/data/translations";

export type Language = "en" | "es";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem("zs_lang") as Language;
    return (saved === "en" || saved === "es") ? saved : "en";
  });

  const setLanguage = (lang: Language) => {
    if (lang !== language) {
      setLanguageState(lang);
      localStorage.setItem("zs_lang", lang);
    }
  };

  const t = (key: string): string => {
    const current = (translations as any)[language];
    if (current && key in current) {
      return current[key];
    }
    return key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
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
