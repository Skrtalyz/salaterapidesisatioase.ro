import React from 'react';
import { 
  ArrowRight, 
  ShieldCheck
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface RecipesShowcaseSectionProps {
  onCtaClick: (planId?: 'basic' | 'complete') => void;
}

export const RecipesShowcaseSection: React.FC<RecipesShowcaseSectionProps> = ({ onCtaClick }) => {
  const { copy, lang } = useLanguage();
  const { recipes } = copy;

  return (
    <section id="recipes-showcase-section" className="py-16 sm:py-24 bg-[#F5F5F7]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Apple Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#1D1D1F] tracking-[-0.03em] leading-tight">
            {recipes.sectionTitle}
          </h2>

          {/* Combinations Showcase Image */}
          <div className="flex justify-center mt-6">
            <img
              src="/images/combinations.png"
              onError={(e) => {
                const target = e.currentTarget;
                if (!target.src.includes('imgur')) {
                  target.src = 'https://i.imgur.com/cGVyURq.jpeg';
                }
              }}
              alt={lang === 'pt' ? 'Combinações que Ativam a Queima de Gordura' : 'Combinații care Activează Arderea Grăsimilor'}
              referrerPolicy="no-referrer"
              className="w-full max-w-md sm:max-w-xl lg:max-w-2xl h-auto object-contain block mix-blend-multiply"
            />
          </div>
        </div>

        {/* Recipes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {recipes.items.map((recipe) => {
            const isFeatured = recipe.id === '10';
            return (
              <div 
                key={recipe.id}
                className={`rounded-[24px] p-6 transition-all flex flex-col justify-between ${
                  isFeatured 
                    ? 'bg-[#1D1D1F] text-white shadow-xl md:col-span-2 lg:col-span-1' 
                    : 'bg-white border border-black/[0.06] shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.06)]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className={`text-2xl p-2.5 rounded-[14px] shrink-0 ${
                      isFeatured ? 'bg-white/10' : 'bg-[#F5F5F7]'
                    }`}>
                      {recipe.icon}
                    </span>
                    <span className={`text-[11px] font-medium px-3 py-1 rounded-full ${
                      isFeatured 
                        ? 'bg-white/15 text-white' 
                        : 'bg-black/[0.04] text-[#1D1D1F] border border-black/[0.04]'
                    }`}>
                      {recipe.tag}
                    </span>
                  </div>

                  <h3 className={`font-bold text-lg mb-2 leading-snug tracking-tight ${
                    isFeatured ? 'text-white' : 'text-[#1D1D1F]'
                  }`}>
                    {recipe.title}
                  </h3>

                  <p className={`text-sm leading-relaxed ${
                    isFeatured ? 'text-neutral-300' : 'text-[#86868B]'
                  }`}>
                    {recipe.description}
                  </p>
                </div>

                <div className={`mt-5 pt-3.5 border-t flex items-center text-xs font-medium gap-1.5 ${
                  isFeatured ? 'border-white/10 text-neutral-300' : 'border-black/[0.05] text-[#86868B]'
                }`}>
                  <ShieldCheck className={`w-3.5 h-3.5 shrink-0 ${isFeatured ? 'text-emerald-400' : 'text-[#34C759]'}`} />
                  <span>{lang === 'pt' ? 'Calibrado com precisão enzimática' : 'Calibrat cu precizie enzimatică'}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Apple CTA Button */}
        <div className="mt-10 text-center max-w-md mx-auto">
          <button
            id="recipes-cta-button"
            onClick={() => onCtaClick('complete')}
            className="w-full sm:w-auto min-w-[260px] bg-[#1D1D1F] hover:bg-black active:scale-[0.98] text-white font-medium text-base py-3.5 px-8 rounded-full shadow-sm hover:shadow-md transition-all cursor-pointer inline-flex items-center justify-center gap-2"
          >
            <span>{recipes.ctaButton}</span>
            <ArrowRight className="w-4 h-4 text-neutral-300" />
          </button>
        </div>

      </div>
    </section>
  );
};
