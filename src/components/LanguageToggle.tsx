import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Globe, ArrowRightLeft } from 'lucide-react';

export const LanguageToggle: React.FC = () => {
  const { lang, toggleLang } = useLanguage();

  return (
    <div 
      id="language-translator-toggle"
      className="fixed z-50 bottom-5 right-5 transition-all duration-300 animate-in fade-in slide-in-from-bottom-3"
    >
      <button
        onClick={toggleLang}
        className="bg-[#1D1D1F]/90 hover:bg-black active:scale-95 backdrop-blur-xl text-white py-2 px-3.5 rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.25)] border border-white/15 flex items-center gap-2.5 transition-all cursor-pointer group"
        title="Alternar idioma entre Português e Romeno"
      >
        <Globe className="w-4 h-4 text-white/80 group-hover:text-white transition-colors" />
        
        <div className="flex items-center gap-1.5 text-xs font-semibold tracking-tight">
          {lang === 'ro' ? (
            <>
              <span className="text-white/70">🇷🇴 RO</span>
              <ArrowRightLeft className="w-3 h-3 text-white/40" />
              <span className="text-white font-bold">🇧🇷 PT-BR</span>
            </>
          ) : (
            <>
              <span className="text-white/70">🇧🇷 PT</span>
              <ArrowRightLeft className="w-3 h-3 text-white/40" />
              <span className="text-white font-bold">🇷🇴 RO</span>
            </>
          )}
        </div>
      </button>
    </div>
  );
};
