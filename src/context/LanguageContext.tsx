import React, { createContext, useContext, useState, useEffect } from 'react';
import { COPY_DATA_RO, COPY_DATA_PT } from '../data/copyData';

type Language = 'ro' | 'pt';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  copy: typeof COPY_DATA_RO;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('app_preview_lang');
    return (saved === 'pt' || saved === 'ro') ? saved : 'pt';
  });

  const toggleLang = () => {
    setLang(prev => (prev === 'ro' ? 'pt' : 'ro'));
  };

  useEffect(() => {
    localStorage.setItem('app_preview_lang', lang);
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'ro';
  }, [lang]);

  const copy = lang === 'pt' ? COPY_DATA_PT : COPY_DATA_RO;

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, copy }}>
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
