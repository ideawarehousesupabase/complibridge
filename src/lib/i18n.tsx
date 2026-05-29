import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en";
const dict: Record<Lang, Record<string, string>> = {
  en: {
    dashboard: "Dashboard", workers: "Sponsored Workers", alerts: "Alerts",
    audit: "Audit Logs", coach: "AI Onboarding Coach", portal: "Worker Portal",
    settings: "Settings", logout: "Logout", welcome: "Welcome back",
    onboarding_intro: "Hello! I'm your onboarding coach. Ask me anything about UK workplace culture, your visa, or your rights.",
  },

};

type I18nCtx = { lang: Lang; setLang: (l: Lang) => void; t: (k: string) => string };
const Ctx = createContext<I18nCtx>({ lang: "en", setLang: () => {}, t: (k) => k });

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");
  useEffect(() => {
    const stored = localStorage.getItem("complibridge_lang") as Lang | null;
    if (stored && dict[stored]) setLangState(stored);
  }, []);
  const setLang = (l: Lang) => { setLangState(l); localStorage.setItem("complibridge_lang", l); };
  const t = (k: string) => dict[lang][k] ?? dict.en[k] ?? k;
  return <Ctx.Provider value={{ lang, setLang, t }}>{children}</Ctx.Provider>;
}

export const useI18n = () => useContext(Ctx);
