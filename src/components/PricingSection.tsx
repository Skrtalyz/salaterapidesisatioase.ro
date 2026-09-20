import React from 'react';
import { 
  Check, 
  X, 
  ArrowRight
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface PricingSectionProps {
  onSelectPlan?: (planId: 'basic' | 'complete') => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan }) => {
  const { copy, lang } = useLanguage();
  const { pricing } = copy;
  const basicPlan = pricing.plans[0];
  const completePlan = pricing.plans[1];

  return (
    <section id="pricing-section" className="py-16 sm:py-24 bg-[#F5F5F7] border-b border-black/[0.06]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Apple Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <span className="text-xs font-semibold text-[#0071E3] uppercase tracking-wider block mb-2">
            {pricing.sectionBadge}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#1D1D1F] tracking-[-0.03em] leading-tight">
            {pricing.sectionTitle}
          </h2>
          <p className="text-[#86868B] text-base sm:text-lg mt-3">
            {pricing.sectionSubtitle}
          </p>
        </div>

        {/* 2-Tier Pricing Comparison Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          
          {/* OPTION 1: BASIC PLAN */}
          <div 
            id="pricing-plan-basic"
            className="bg-white rounded-[28px] border border-black/[0.08] p-7 sm:p-9 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all"
          >
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-[#86868B] mb-1">
                {lang === 'pt' ? 'Edição Essencial' : 'Ediție Esențială'}
              </div>
              <h3 className="text-2xl font-bold text-[#1D1D1F] tracking-tight mb-2">
                {basicPlan.name}
              </h3>
              <p className="text-xs sm:text-sm text-[#86868B] mb-6 leading-relaxed">
                {basicPlan.tagline}
              </p>

              {/* Price Block */}
              <div className="bg-[#F5F5F7] rounded-[22px] p-5 mb-6">
                <div className="text-xs text-[#86868B] mb-1">
                  {lang === 'pt' ? 'Valor normal:' : 'Valoare normală:'} <span className="line-through">{basicPlan.originalPriceEur} ({basicPlan.originalPriceRon})</span>
                </div>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-4xl font-bold text-[#1D1D1F] tracking-tight">
                    {basicPlan.priceEur}
                  </span>
                  <span className="text-sm font-semibold text-[#86868B]">
                    ({basicPlan.priceRon})
                  </span>
                </div>
                <span className="text-[12px] text-[#86868B] block mt-1">
                  {lang === 'pt' ? 'Pagamento único • Sem assinaturas' : 'Plată unică • Fără abonament'}
                </span>
              </div>

              {/* Feature Checklist */}
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#1D1D1F]">
                  <span className="w-4 h-4 rounded-full bg-[#34C759]/15 text-[#248A3D] flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">✓</span>
                  <span>{lang === 'pt' ? 'Manual Principal: 200+ Receitas de Saladas Ativas' : 'Manualul Principal: 200+ Rețete de Salate Active'}</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#1D1D1F]">
                  <span className="w-4 h-4 rounded-full bg-[#34C759]/15 text-[#248A3D] flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">✓</span>
                  <span>{lang === 'pt' ? 'Guia de Conservação Enzimática (Saladas 7 Dias)' : 'Ghidul de Conservare Enzimatică (Salate 7 Zile)'}</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-red-600/90 font-medium">
                  <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span className="line-through">{lang === 'pt' ? 'SEM os 50 Molhos Lipolíticos de Ativação' : 'FĂRĂ cele 50 de Sosuri Lipolitice de Activare'}</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-red-600/90 font-medium">
                  <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span className="line-through">{lang === 'pt' ? 'SEM Cronograma Detox "Reset 7 Dias"' : 'FĂRĂ Cronograma Detox "Reset 7 Zile"'}</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-red-600/90 font-medium">
                  <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span className="line-through">{lang === 'pt' ? 'SEM Calculadora de Economia de Supermercado' : 'FĂRĂ Calculatorul de Economii Supermarket'}</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-red-600/90 font-medium">
                  <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span className="line-through">{lang === 'pt' ? 'SEM Guia de Organização Semanal "Zero Fricção"' : 'FĂRĂ Ghidul de Organizare "Zero Fricțiune"'}</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#1D1D1F]">
                  <span className="w-4 h-4 rounded-full bg-[#34C759]/15 text-[#248A3D] flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">✓</span>
                  <span>{lang === 'pt' ? 'Acesso Básico aos Arquivos PDF' : 'Acces de Bază la Fișiere PDF'}</span>
                </div>
              </div>
            </div>

            {/* CTA Basic */}
            <div>
              <a
                id="btn-select-basic-plan"
                href={basicPlan.checkoutUrl || 'https://pay.hotmart.com/H107690169O?off=31vemewe&checkoutMode=10'}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#F5F5F7] hover:bg-neutral-200 active:scale-[0.98] text-[#1D1D1F] font-semibold text-sm sm:text-base py-3.5 px-6 rounded-full transition-all flex items-center justify-center gap-2 cursor-pointer border border-black/10 no-underline text-center"
              >
                <span>{lang === 'pt' ? 'Selecionar Plano Básico (7,90 €)' : 'Alege Planul de Bază (7,90 €)'}</span>
              </a>
              <div className="mt-2.5 text-center text-[11px] text-[#86868B]">
                {lang === 'pt' ? 'Entrega digital instantânea • Sem bônus' : 'Livrare digitală instantanee • Fără bonusuri'}
              </div>
            </div>
          </div>

          {/* OPTION 2: COMPLETE METABOLIC PLAN (APPLE / DECOY FLAGSHIP) */}
          <div 
            id="pricing-plan-complete"
            className="bg-white rounded-[28px] border-2 border-emerald-500 p-7 sm:p-9 flex flex-col justify-between shadow-[0_12px_45px_rgba(16,185,129,0.2)] relative transform md:-translate-y-2 transition-all"
          >
            {/* Top Recommended Ribbon */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 text-white text-xs font-bold px-4 py-1 rounded-full shadow-md tracking-wide flex items-center gap-1.5 whitespace-nowrap">
              <span>{lang === 'pt' ? '⭐ MAIS VENDIDO / RECOMENDADO' : '⭐ CEL MAI VÂNDUT / RECOMANDAT'}</span>
            </div>

            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-[#0071E3] mb-1 pt-1">
                {lang === 'pt' ? 'Edição Completa Recomendada' : 'Ediție Completă Recomandată'}
              </div>
              <h3 className="text-2xl sm:text-[26px] font-bold text-[#1D1D1F] tracking-tight mb-2">
                {completePlan.name}
              </h3>
              <p className="text-xs sm:text-sm text-[#86868B] mb-6 leading-relaxed">
                {completePlan.tagline}
              </p>

              {/* Price Highlight Block */}
              <div className="bg-[#0071E3]/5 border border-[#0071E3]/15 rounded-[22px] p-5 mb-6">
                <div className="text-xs text-[#86868B] mb-1">
                  {lang === 'pt' ? 'Valor com bônus:' : 'Valoare cu bonusuri:'} <span className="line-through">{completePlan.originalPriceEur} ({completePlan.originalPriceRon})</span>
                </div>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-4xl sm:text-5xl font-bold text-[#0071E3] tracking-tight">
                    {completePlan.priceEur}
                  </span>
                  <span className="text-base font-semibold text-[#1D1D1F]">
                    ({completePlan.priceRon})
                  </span>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-[11px] font-semibold bg-[#34C759]/15 text-[#248A3D] px-2.5 py-0.5 rounded-full">
                    {lang === 'pt' ? 'Economia Máxima' : 'Economie Maximă'}
                  </span>
                  <span className="text-[11px] text-[#86868B]">
                    {lang === 'pt' ? 'Pagamento único sem taxas recorrentes' : 'Plată unică fără costuri ascunse'}
                  </span>
                </div>
              </div>

              {/* Complete Features List */}
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3 text-xs sm:text-sm text-[#1D1D1F] font-medium">
                  <span className="w-4 h-4 rounded-full bg-[#34C759]/15 text-[#248A3D] flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">✓</span>
                  <span>{lang === 'pt' ? 'Manual Principal: 200+ Receitas de Saladas Ativas' : 'Manualul Principal: 200+ Rețete de Salate Active'}</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-[#1D1D1F] font-medium">
                  <span className="w-4 h-4 rounded-full bg-[#34C759]/15 text-[#248A3D] flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">✓</span>
                  <span>{lang === 'pt' ? 'Guia de Conservação Enzimática (Saladas Frescas 7 Dias)' : 'Ghidul de Conservare Enzimatică (Salate Proaspete 7 Zile)'}</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-[#1D1D1F] font-medium bg-[#0071E3]/5 p-2 rounded-[12px] border border-[#0071E3]/10">
                  <span className="w-4 h-4 rounded-full bg-[#0071E3] text-white flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">★</span>
                  <span className="font-semibold text-[#0071E3]">{lang === 'pt' ? 'Guia dos 50 Molhos Lipolíticos de Ativação' : 'Ghidul celor 50 de Sosuri Lipolitice'}</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-[#1D1D1F] font-medium">
                  <span className="w-4 h-4 rounded-full bg-[#34C759]/15 text-[#248A3D] flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">✓</span>
                  <span>{lang === 'pt' ? 'Guia de Compras Inteligentes no Supermercado' : 'Ghidul de Cumpărături Inteligente'}</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-[#1D1D1F] font-medium">
                  <span className="w-4 h-4 rounded-full bg-[#34C759]/15 text-[#248A3D] flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">✓</span>
                  <span>{lang === 'pt' ? 'Calculadora de Economias & Cronograma Detox 7 Dias' : 'Calculatorul de Economii & Cronograma Detox 7 Zile'}</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-[#1D1D1F] font-medium">
                  <span className="w-4 h-4 rounded-full bg-[#34C759]/15 text-[#248A3D] flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">✓</span>
                  <span>{lang === 'pt' ? 'Todos os 4 Bônus Exclusivos inclusos' : 'Toate cele 4 Bonusuri Exclusive incluse'}</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-[#1D1D1F] font-medium">
                  <span className="w-4 h-4 rounded-full bg-[#34C759]/15 text-[#248A3D] flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">✓</span>
                  <span>{lang === 'pt' ? 'Acesso Vitalício & Atualizações Gratuitas' : 'Acces pe Viață & Actualizări Gratuite'}</span>
                </div>
              </div>
            </div>

            {/* CTA Complete */}
            <div>
              <a
                id="btn-select-complete-plan"
                href={completePlan.checkoutUrl || 'https://pay.hotmart.com/N107697844Q?off=1ocjasuy&checkoutMode=10'}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#0071E3] hover:bg-[#0077ED] active:scale-[0.98] text-white font-medium text-base py-4 px-6 rounded-full shadow-[0_4px_16px_rgba(0,113,227,0.3)] transition-all flex items-center justify-center gap-2 cursor-pointer no-underline text-center"
              >
                <span>{lang === 'pt' ? 'Adquirir Pacote Completo (14,90 €)' : 'Comandă Pachetul Complet (14,90 €)'}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <div className="mt-3 text-center">
                <div className="text-[11px] text-[#34C759] font-medium">
                  {pricing.accessTrust}
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
