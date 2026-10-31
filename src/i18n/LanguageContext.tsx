import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import en from "../locales/en.json";
import tr from "../locales/tr.json";

export type Language = "tr" | "en";

type Widen<T> = T extends string
  ? string
  : { [Key in keyof T]: Widen<T[Key]> };

type Locale = Widen<typeof tr>;

const translations: Record<Language, Locale> = { tr, en };
const preferenceKey = "portfolio-language";

function getInitialLanguage(): Language {
  try {
    const savedLanguage = window.localStorage.getItem(preferenceKey);
    if (savedLanguage === "tr" || savedLanguage === "en") {
      return savedLanguage;
    }
  } catch (error) {
    console.warn("Unable to read the saved language preference.", error);
  }

  return navigator.language.toLowerCase().startsWith("en") ? "en" : "tr";
}

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: Locale;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: PropsWithChildren) {
  const [language, setCurrentLanguage] = useState<Language>(getInitialLanguage);

  const setLanguage = useCallback((nextLanguage: Language) => {
    try {
      window.localStorage.setItem(preferenceKey, nextLanguage);
    } catch (error) {
      console.warn("Unable to save the language preference.", error);
    }
    setCurrentLanguage(nextLanguage);
  }, []);

  const t = translations[language];
  const value = useMemo(
    () => ({ language, setLanguage, t }),
    [language, setLanguage, t]
  );

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = t.meta.title;

    const description = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]'
    );
    if (description) {
      description.content = t.meta.description;
    }
  }, [language, t]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider.");
  }
  return context;
}
