"use client";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { Lang } from "@/lib/content";

type I18n = { lang: Lang; rtl: boolean; setLang: (lang: Lang) => void; toggle: () => void };
const Context = createContext<I18n | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("ar");
  useEffect(() => {
    const saved = localStorage.getItem("rsc-language") as Lang | null;
    if (saved === "ar" || saved === "en") {
      const restore = window.setTimeout(() => setLang(saved), 0);
      return () => window.clearTimeout(restore);
    }
  }, []);
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    localStorage.setItem("rsc-language", lang);
  }, [lang]);
  const value = useMemo(() => ({ lang, rtl: lang === "ar", setLang, toggle: () => setLang((v) => v === "ar" ? "en" : "ar") }), [lang]);
  return <Context.Provider value={value}>{children}</Context.Provider>;
}
export function useLanguage() { const value = useContext(Context); if (!value) throw new Error("LanguageProvider missing"); return value; }
