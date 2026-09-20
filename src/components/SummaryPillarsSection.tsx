import React from 'react';
import { ArrowDown, CheckCircle2, Zap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const SummaryPillarsSection: React.FC = () => {
  const { copy, lang } = useLanguage();
  const { summaryPillars } = copy as any;

  if (!summaryPillars) return null;

  const handleScrollToPricing = () => {
    document.getElementById('pricing-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="summary-pillars-section" className="py-12 sm:py-16 bg-[#F5F5F7] border-t border-black/[0.06]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* High Conversion Anchor Box */}
        <div className="bg-white rounded-[26px] border-2 border-emerald-500/30 p-6 sm:p-9 shadow-[0_8px_30px_rgba(16,185,129,0.08)] relative overflow-hidden">
          
          {/* Top Label */}
          <div className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full mb-4">
            <Zap className="w-3.5 h-3.5 text-emerald-600" />
            <span>{lang === 'ro' ? 'Ghid Rapid de Decizie' : 'Guia Rápido de Decisão'}</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-[#1D1D1F] tracking-tight mb-2">
            {summaryPillars.title}
          </h3>

          <p className="text-[#86868B] text-sm sm:text-base mb-6 leading-relaxed">
            {summaryPillars.subtitle}
          </p>

          {/* 4 Pillars Grid */}
          <div className="space-y-4 mb-8">
            {summaryPillars.pillars.map((pillar: { title: string; desc: string }, index: number) => (
              <div 
                key={index}
                className="flex items-start gap-3 bg-[#F5F5F7] hover:bg-emerald-50/50 p-4 rounded-2xl transition-colors border border-black/[0.04]"
              >
                <div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div className="text-sm sm:text-base leading-snug">
                  <strong className="text-[#1D1D1F] font-bold block sm:inline mr-1.5">
                    {pillar.title}
                  </strong>
                  <span className="text-[#48484A]">
                    {pillar.desc}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Jump to pricing button */}
          <div className="text-center">
            <button
              onClick={handleScrollToPricing}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0071E3] hover:bg-[#0077ED] text-white font-bold text-sm sm:text-base py-3.5 px-8 rounded-full shadow-[0_4px_16px_rgba(0,113,227,0.25)] transition-all cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>{summaryPillars.ctaText}</span>
              <ArrowDown className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
