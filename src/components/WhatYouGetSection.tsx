import React from 'react';
import { 
  CheckCircle2, 
  Package, 
  Smartphone, 
  Infinity as InfinityIcon, 
  ArrowRight,
  Sparkles,
  Utensils
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface WhatYouGetSectionProps {
  onCtaClick: (planId?: 'basic' | 'complete') => void;
}

export const WhatYouGetSection: React.FC<WhatYouGetSectionProps> = ({ onCtaClick }) => {
  const { copy } = useLanguage();
  const { deliverables } = copy;

  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Utensils className="w-6 h-6 text-[#1D1D1F]" />;
      case 1:
        return <Package className="w-6 h-6 text-[#1D1D1F]" />;
      case 2:
        return <Smartphone className="w-6 h-6 text-[#1D1D1F]" />;
      case 3:
        return <InfinityIcon className="w-6 h-6 text-[#1D1D1F]" />;
      default:
        return <CheckCircle2 className="w-6 h-6 text-[#1D1D1F]" />;
    }
  };

  return (
    <section id="what-you-get-section" className="py-16 sm:py-24 bg-[#F5F5F7]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Apple Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#1D1D1F] tracking-[-0.03em] leading-tight mb-6">
            {deliverables.sectionTitle}
          </h2>

          {/* Section Mockup Image */}
          <div className="flex justify-center my-4">
            <img
              src="https://i.imgur.com/85nRSSF.png"
              alt="Ce Vei Primi - Livrare Imediată"
              referrerPolicy="no-referrer"
              className="w-full max-w-md sm:max-w-lg h-auto object-contain drop-shadow-sm"
            />
          </div>
        </div>

        {/* Apple 4-Card Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {deliverables.items.map((item, index) => (
            <div 
              key={index}
              className="bg-white rounded-[24px] border border-black/[0.06] p-6 sm:p-7 shadow-[0_2px_14px_rgba(0,0,0,0.03)] hover:shadow-[0_6px_24px_rgba(0,0,0,0.06)] transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  {/* iOS App Icon Style Container */}
                  <div className="w-12 h-12 rounded-[14px] bg-[#F5F5F7] border border-black/[0.04] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    {getIcon(index)}
                  </div>
                  <span className="bg-black/[0.04] text-[#1D1D1F] text-[11px] font-medium px-3 py-1 rounded-full border border-black/[0.04]">
                    {item.badge}
                  </span>
                </div>

                <h3 className="font-bold text-[#1D1D1F] text-lg sm:text-[19px] leading-snug mb-2">
                  {item.title}
                </h3>

                <p className="text-[#86868B] text-sm sm:text-[15px] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 pt-3.5 border-t border-black/[0.05] flex items-center text-xs font-semibold text-[#1D1D1F] gap-2">
                <span className="w-4 h-4 rounded-full bg-[#34C759]/15 text-[#248A3D] flex items-center justify-center shrink-0">
                  ✓
                </span>
                <span>Inclus în pachetul digital</span>
              </div>
            </div>
          ))}
        </div>

        {/* Clean Apple CTA Button */}
        <div className="mt-10 text-center max-w-md mx-auto">
          <button
            id="deliverables-cta-button"
            onClick={() => onCtaClick('complete')}
            className="w-full sm:w-auto min-w-[240px] bg-[#1D1D1F] hover:bg-black active:scale-[0.98] text-white font-medium text-sm sm:text-base py-3.5 px-7 rounded-full shadow-sm hover:shadow-md transition-all cursor-pointer inline-flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-neutral-300" />
            <span>{deliverables.ctaButton}</span>
            <ArrowRight className="w-4 h-4 text-neutral-300" />
          </button>
        </div>

      </div>
    </section>
  );
};
