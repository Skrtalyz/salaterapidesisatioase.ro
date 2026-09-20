import React, { useState } from 'react';
import { 
  ChevronDown, 
  ChevronUp, 
  ArrowRight, 
  MessageCircle, 
  Calculator, 
  ShieldCheck,
  Leaf
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface FaqSectionProps {
  onCtaClick: (planId?: 'basic' | 'complete') => void;
  onWhatsAppClick: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onCtaClick, onWhatsAppClick }) => {
  const { copy, lang } = useLanguage();
  const { faq } = copy;
  const [openIndexes, setOpenIndexes] = useState<number[]>([0]);

  const toggleAccordion = (index: number) => {
    setOpenIndexes((prev) => 
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section id="faq-section" className="py-16 sm:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* Apple Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold text-[#0071E3] uppercase tracking-wider block mb-2">
            {lang === 'pt' ? 'Perguntas Frequentes' : 'Întrebări Frecvente'}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#1D1D1F] tracking-[-0.03em] leading-tight">
            {faq.title}
          </h2>
        </div>

        {/* Apple iOS Balance / Calculation Widget */}
        <div className="mb-10 bg-[#F5F5F7] rounded-[24px] border border-black/[0.05] p-6 sm:p-7 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-[12px] bg-white text-[#1D1D1F] border border-black/[0.06] flex items-center justify-center shrink-0 shadow-2xs">
              <Calculator className="w-5 h-5 text-[#0071E3]" />
            </div>
            <div>
              <span className="text-xs font-semibold text-[#0071E3] uppercase tracking-wider block mb-1">
                {lang === 'pt' ? 'Cálculo de Custo-Benefício' : 'Calcul Cost-Beneficiu'}
              </span>
              <p className="text-[#1D1D1F] text-sm sm:text-[15px] leading-relaxed font-normal">
                "{faq.rationalization}"
              </p>
            </div>
          </div>
        </div>

        {/* Inset iOS Settings Style Grouped FAQ */}
        <div className="rounded-[24px] bg-[#F5F5F7] border border-black/[0.06] divide-y divide-black/[0.06] overflow-hidden mb-12 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
          {faq.items.map((item, index) => {
            const isOpen = openIndexes.includes(index);
            return (
              <div key={index} className="transition-colors">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-semibold text-[#1D1D1F] text-sm sm:text-base hover:text-[#0071E3] transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-[#86868B] text-xs font-medium w-5">
                      0{index + 1}
                    </span>
                    <span>{item.question}</span>
                  </span>
                  <div className="w-7 h-7 rounded-full bg-white border border-black/[0.06] flex items-center justify-center shrink-0 shadow-2xs">
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-[#0071E3]" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-[#86868B]" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-[#86868B] text-xs sm:text-sm leading-relaxed">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Final Apple Decision Actions */}
        <div className="text-center max-w-md mx-auto space-y-3 pt-2">
          <button
            id="faq-final-cta-button"
            onClick={() => onCtaClick('complete')}
            className="w-full bg-[#0071E3] hover:bg-[#0077ED] active:scale-[0.98] text-white font-medium text-base py-4 px-8 rounded-full shadow-[0_4px_16px_rgba(0,113,227,0.3)] transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <span>{faq.ctaButton}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* WhatsApp Support Button */}
          <button
            id="faq-whatsapp-support-button"
            onClick={onWhatsAppClick}
            className="w-full bg-[#F5F5F7] hover:bg-neutral-200 active:scale-[0.98] text-[#1D1D1F] font-semibold text-sm py-3.5 px-6 rounded-full border border-black/[0.06] transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            <span>{faq.whatsappButton}</span>
          </button>

          <div className="text-xs text-[#86868B] flex items-center justify-center gap-1.5 pt-2">
            <ShieldCheck className="w-4 h-4 text-[#34C759]" />
            <span>{lang === 'pt' ? 'Protegido por 15 dias de garantia incondicional' : 'Protejat prin 15 zile de garanție necondiționată'}</span>
          </div>
        </div>

        {/* Apple Style Minimalist Footer */}
        <footer className="mt-16 pt-8 border-t border-black/[0.06] text-center text-xs text-[#86868B] space-y-3">
          <div className="flex items-center justify-center gap-2 font-semibold text-[#1D1D1F]">
            <Leaf className="w-4 h-4 text-emerald-600" />
            <span>{lang === 'pt' ? 'Protocolo de Conservação Enzimática' : 'Protocolul de Conservare Enzimatică'}</span>
          </div>
          <p>{faq.footerCopyright}</p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-[12px] text-[#86868B] pt-2">
            <a href="#hero-section" className="hover:text-[#1D1D1F] transition-colors">{lang === 'pt' ? 'Início' : 'Acasă'}</a>
            <span>•</span>
            <a href="#what-you-get-section" className="hover:text-[#1D1D1F] transition-colors">{lang === 'pt' ? 'O Que Recebe' : 'Ce Primești'}</a>
            <span>•</span>
            <a href="#bonuses-section" className="hover:text-[#1D1D1F] transition-colors">{lang === 'pt' ? 'Bônus' : 'Bonusuri'}</a>
            <span>•</span>
            <a href="#pricing-section" className="hover:text-[#1D1D1F] transition-colors">{lang === 'pt' ? 'Preços' : 'Prețuri'}</a>
          </div>
        </footer>

      </div>
    </section>
  );
};
