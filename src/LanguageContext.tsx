import { createContext, useContext, useState, type ReactNode } from 'react';
import { translate, type translateType } from './common/translation';

type Language = keyof translateType;

interface LanguageContextType {
  lang: Language;
  t: translateType[Language];
  toggle: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>('en');
  const t = translate[lang];

  const toggle = () => setLang((prev) => (prev === 'en' ? 'ar' : 'en'));

  return (
    <LanguageContext.Provider value={{ lang, t, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}