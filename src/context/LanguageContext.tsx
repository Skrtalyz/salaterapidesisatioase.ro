import React, { createContext, useContext, useEffect } from 'react';
import { COPY_DATA_RO } from '../data/copyData';

type Language = 'ro';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  copy: typeof COPY_DATA_RO;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const lang: Language = 'ro';

  useEffect(() => {
    localStorage.removeItem('app_preview_lang');
    document.documentElement.lang = 'ro';
  }, []);

  const copy = COPY_DATA_RO;

  return (
    <LanguageContext.Provider value={{ lang, setLang: () => {}, toggleLang: () => {}, copy }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

