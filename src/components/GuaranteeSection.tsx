import React from 'react';
import { 
  ShieldCheck, 
  Lock, 
  RotateCcw
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const GuaranteeSection: React.FC = () => {
  const { copy, lang } = useLanguage();
  const { guarantee } = copy;

  return (
    <section id="guarantee-section" className="py-16 sm:py-24 bg-[#F5F5F7] border-b border-black/[0.06]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        <div className="bg-white rounded-[28px] border border-black/[0.06] p-8 sm:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.03)]">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8">
            
            {/* Apple Guarantee Emblem */}
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#F5F5F7] border border-black/[0.08] text-[#1D1D1F] flex flex-col items-center justify-center shrink-0 shadow-2xs">
              <ShieldCheck className="w-7 h-7 text-[#0071E3] mb-1" />
              <span className="text-[11px] font-bold uppercase leading-tight">{lang === 'pt' ? '15 Dias' : '15 Zile'}</span>
              <span className="text-[9px] text-[#86868B] font-medium leading-tight">{lang === 'pt' ? 'Garantia' : 'Garanție'}</span>
            </div>

            {/* Guarantee Content */}
            <div className="text-center sm:text-left">
              <span className="text-xs font-semibold text-[#0071E3] uppercase tracking-wider block mb-1">
                {lang === 'pt' ? 'Compromisso de Satisfação' : 'Angajament de Satisfacție'}
              </span>

              <h3 className="text-2xl sm:text-3xl font-bold text-[#1D1D1F] mb-3 tracking-tight">
                {guarantee.title}
              </h3>

              <p className="text-[#86868B] text-sm sm:text-[15px] leading-relaxed mb-6">
                {guarantee.bodyText}
              </p>

              {/* Apple Security Badges */}
              <div className="pt-4 border-t border-black/[0.06] grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#1D1D1F] font-medium">
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-[#0071E3] shrink-0" />
                  <span>{guarantee.secureTitle}</span>
                </div>
                <div className="flex items-center gap-2">
                  <RotateCcw className="w-4 h-4 text-[#0071E3] shrink-0" />
                  <span>{lang === 'pt' ? 'Reembolso simplificado sem burocracia' : 'Rambursare simplificată fără birocrație'}</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
