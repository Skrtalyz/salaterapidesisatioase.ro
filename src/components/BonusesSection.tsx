import React from 'react';
import { 
  Clock, 
  Calculator, 
  Calendar, 
  Salad, 
  ArrowRight,
  Gift
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface BonusesSectionProps {
  onCtaClick: (planId?: 'basic' | 'complete') => void;
}

export const BonusesSection: React.FC<BonusesSectionProps> = ({ onCtaClick }) => {
  const { copy, lang } = useLanguage();
  const { bonuses } = copy;

  const getBonusIcon = (id: number) => {
    switch (id) {
      case 1:
        return <Salad className="w-6 h-6 text-[#1D1D1F]" />;
      case 2:
        return <Calendar className="w-6 h-6 text-[#1D1D1F]" />;
      case 3:
        return <Calculator className="w-6 h-6 text-[#1D1D1F]" />;
      case 4:
        return <Clock className="w-6 h-6 text-[#1D1D1F]" />;
      default:
        return <Gift className="w-6 h-6 text-[#1D1D1F]" />;
    }
  };

  return (
    <section id="bonuses-section" className="py-16 sm:py-24 bg-white border-y border-black/[0.05]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Apple Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#1D1D1F] tracking-[-0.03em] leading-tight">
            {bonuses.sectionTitle}
          </h2>
          <p className="text-[#86868B] text-base sm:text-lg mt-3">
            {bonuses.sectionSubtitle}
          </p>

          {/* Bonus Showcase Image */}
          <div className="flex justify-center mt-6">
            <img
              src="https://i.imgur.com/8IoDFao.png"
              alt={lang === 'pt' ? 'Bônus Exclusivos - 4 Guias Práticos' : 'Bonusuri Exclusive - 4 Ghiduri Practice'}
              referrerPolicy="no-referrer"
              className="w-full max-w-md sm:max-w-xl h-auto object-contain drop-shadow-sm"
            />
          </div>
        </div>

        {/* Apple 4-Card Bonus Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {bonuses.list.map((bonus) => (
            <div 
              key={bonus.id}
              className="bg-[#F5F5F7] rounded-[24px] border border-black/[0.05] p-6 sm:p-7 shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-[0_6px_24px_rgba(0,0,0,0.05)] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="w-12 h-12 rounded-[14px] bg-white border border-black/[0.04] flex items-center justify-center shrink-0 shadow-2xs">
                    {getBonusIcon(bonus.id)}
                  </div>
                  <span className="bg-[#34C759]/15 text-[#248A3D] text-[11px] font-semibold px-3 py-1 rounded-full">
                    {lang === 'pt' ? 'Incluso no Pacote' : 'Inclus în Pachet'}
                  </span>
                </div>

                <h3 className="font-bold text-[#1D1D1F] text-lg sm:text-[19px] leading-snug mb-2">
                  {bonus.title}
                </h3>

                <p className="text-[#86868B] text-sm leading-relaxed mb-4">
                  {bonus.description}
                </p>
              </div>

              <div className="pt-3 border-t border-black/[0.06] flex items-center justify-between text-xs">
                <div className="text-[#86868B]">
                  {lang === 'pt' ? 'Valor individual:' : 'Valoare individuală:'} <span className="line-through text-[#86868B]">{bonus.normalPriceEur} / {bonus.normalPriceRon}</span>
                </div>
                <div className="font-semibold text-[#1D1D1F] bg-white px-2.5 py-1 rounded-full border border-black/[0.05]">
                  {lang === 'pt' ? 'Gratuito hoje' : 'Gratuit astăzi'}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Apple Space Black Value Banner */}
        <div className="mt-8 bg-[#1D1D1F] text-white rounded-[24px] p-6 sm:p-8 shadow-xl text-center relative overflow-hidden">
          <div className="max-w-xl mx-auto space-y-2">
            <span className="inline-block bg-white/10 text-neutral-200 text-xs font-semibold px-3 py-1 rounded-full border border-white/10 mb-1">
              {bonuses.saveBadge}
            </span>
            <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {bonuses.bonusNotice}
            </h4>
            <p className="text-neutral-400 text-xs sm:text-sm">
              {lang === 'pt' ? 'Sem mensalidades futuras ou taxas recorrentes ocultas.' : 'Fără abonamente lunare sau costuri recurente ascunse.'}
            </p>
          </div>
        </div>

        {/* Apple CTA */}
        <div className="mt-10 text-center max-w-md mx-auto">
          <button
            id="bonuses-cta-button"
            onClick={() => onCtaClick('complete')}
            className="w-full sm:w-auto min-w-[260px] bg-[#0071E3] hover:bg-[#0077ED] active:scale-[0.98] text-white font-medium text-base py-3.5 px-8 rounded-full shadow-[0_4px_14px_rgba(0,113,227,0.3)] transition-all cursor-pointer inline-flex items-center justify-center gap-2"
          >
            <span>{bonuses.ctaButton}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
