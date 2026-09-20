import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface HeroSectionProps {
  onCtaClick?: (planId?: 'basic' | 'complete') => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onCtaClick }) => {
  const { copy, lang } = useLanguage();
  const { hero } = copy;

  const handleSmoothScrollToPricing = () => {
    const pricingEl = document.getElementById('pricing-section');
    if (pricingEl) {
      pricingEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (onCtaClick) {
      onCtaClick('complete');
    }
  };

  return (
    <section id="hero-section" className="relative pt-10 pb-14 sm:pt-14 sm:pb-18 lg:pt-16 lg:pb-20 overflow-hidden">
      {/* Subtle Radial Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[520px] bg-gradient-to-b from-emerald-100/40 via-blue-50/20 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* COPY, NARRATIVE AND CTA BUTTON */}
          <div className="order-2 lg:order-1 lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start">
            {/* HEADLINE & SUBHEADLINE */}
            <h1 id="hero-headline" className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-[1.18] font-extrabold tracking-[-0.03em] text-[#1D1D1F] mb-5">
              <span className="block text-[#1D1D1F]">
                {hero.headlineMain}
              </span>
              <span className="block text-[#0071E3] font-extrabold mt-1 text-xl sm:text-2xl md:text-3xl lg:text-[32px] leading-snug">
                {hero.headlineSub}
              </span>
            </h1>

            {/* Subheadline Narrative */}
            <p id="hero-story-text" className="text-[#48484A] text-sm sm:text-base md:text-lg leading-relaxed font-normal mb-8 max-w-2xl text-center lg:text-left mx-auto lg:mx-0">
              {hero.storyText}
            </p>

            {/* MAIN ACTION BUTTON (CTA) WITH SMOOTH DOWNSCROLL VIA JAVASCRIPT */}
            <div className="w-full sm:w-auto flex flex-col items-center lg:items-start">
              <button
                id="hero-cta-button"
                onClick={handleSmoothScrollToPricing}
                className="w-full sm:w-auto min-w-[290px] bg-[#0071E3] hover:bg-[#0077ED] active:scale-[0.98] text-white font-bold text-base sm:text-[17px] py-4 px-8 rounded-full shadow-[0_6px_22px_rgba(0,113,227,0.35)] hover:shadow-[0_8px_28px_rgba(0,113,227,0.45)] transition-all cursor-pointer flex items-center justify-center gap-2.5"
              >
                <Sparkles className="w-4 h-4 text-blue-100" />
                <span className="tracking-tight">{hero.ctaButton}</span>
                <ArrowRight className="w-4 h-4 text-blue-100" />
              </button>
              <span className="text-[12px] text-[#86868B] mt-2.5 font-medium text-center lg:text-left">
                {lang === 'ro' ? '⚡ Derulează automat la oferte • Acces instantaneu' : '⚡ Rola direto para as ofertas • Acesso instantâneo'}
              </span>
            </div>
          </div>

          {/* PRODUCT IMAGE (ABOVE COPY ON MOBILE, RIGHT ON DESKTOP) */}
          <div className="order-1 lg:order-2 lg:col-span-5 flex items-center justify-center">
            <div className="w-full max-w-xs sm:max-w-sm lg:max-w-none flex justify-center">
              <img
                src="https://i.imgur.com/tHmCFNp.png"
                alt="Protocolo de Preservação Enzimática"
                referrerPolicy="no-referrer"
                className="w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[460px] h-auto object-contain"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

