import React from 'react';
import { AlertCircle, ArrowDown, Sparkles, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const PainSection: React.FC = () => {
  const { copy, lang } = useLanguage();
  const { painSection } = copy as any;

  if (!painSection) return null;

  const handleScrollToPillarsOrPricing = () => {
    const el = document.getElementById('deliverables-section') || document.getElementById('pricing-section');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pain-section" className="py-12 sm:py-16 bg-white border-y border-black/[0.06] relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* Pain Card with Alert Accents */}
        <div className="rounded-[28px] bg-[#FFF5F5] border border-red-200/80 p-6 sm:p-10 shadow-[0_4px_24px_rgba(239,68,68,0.06)] relative overflow-hidden">
          
          {/* Explanatory Infographic / Image above headline */}
          <div className="rounded-2xl overflow-hidden border border-black/[0.08] shadow-sm mb-6 bg-white">
            <img
              src="https://i.imgur.com/b37UcuC.jpeg"
              alt={lang === 'ro' ? 'Descoperire Nutrițională - Conservare Enzimatică' : 'Descoberta Crucial em Nutrição - Síndrome da Salada Morta'}
              referrerPolicy="no-referrer"
              className="w-full h-auto object-contain block"
            />
          </div>

          {/* Top Alert Pill */}
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 text-xs font-bold px-3 py-1 rounded-full mb-5">
            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
            <span>{lang === 'ro' ? 'Descoperire Crucială în Nutriție' : 'Descoberta Crucial em Nutrição'}</span>
          </div>

          {/* Main Pain Headline */}
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#1D1D1F] tracking-[-0.02em] leading-tight mb-6">
            {painSection.headline}
          </h2>

          {/* Emotional Struggle Narrative */}
          <div className="space-y-4 text-sm sm:text-base text-[#3A3A3C] leading-relaxed">
            <p className="font-medium text-neutral-800">
              {painSection.p1}
            </p>

            {/* The Unspoken Truth Callout Box */}
            <div className="bg-white rounded-2xl p-5 border border-red-100 shadow-xs">
              <span className="text-xs font-bold text-red-600 uppercase tracking-wider block mb-1.5">
                {painSection.truthBadge}
              </span>
              <p className="text-[#1D1D1F] font-semibold text-sm sm:text-base leading-relaxed">
                {painSection.p2}
              </p>
            </div>

            {/* The Breakthrough Solution */}
            <div className="bg-emerald-50 border border-emerald-200/80 rounded-2xl p-5 flex items-start gap-3.5 text-emerald-950">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div className="text-sm sm:text-base font-semibold leading-relaxed">
                {painSection.solutionCallout}
              </div>
            </div>
          </div>

          {/* Action to Discover Protocol */}
          <div className="mt-8 text-center sm:text-left">
            <button
              onClick={handleScrollToPillarsOrPricing}
              className="inline-flex items-center justify-center gap-2 bg-[#1D1D1F] hover:bg-black text-white text-sm sm:text-base font-semibold py-3.5 px-6 rounded-full shadow-md transition-all cursor-pointer hover:scale-[1.01] active:scale-[0.99]"
            >
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>{painSection.ctaButton}</span>
              <ArrowDown className="w-4 h-4 text-neutral-400" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
