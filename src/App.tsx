import React, { useState } from 'react';
import { HeaderBanner } from './components/HeaderBanner';
import { HeroSection } from './components/HeroSection';
import { PainSection } from './components/PainSection';
import { WhatYouGetSection } from './components/WhatYouGetSection';
import { BonusesSection } from './components/BonusesSection';
import { RecipesShowcaseSection } from './components/RecipesShowcaseSection';
import { SocialProofSection } from './components/SocialProofSection';
import { SummaryPillarsSection } from './components/SummaryPillarsSection';
import { PricingSection } from './components/PricingSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { CheckoutModal } from './components/CheckoutModal';
import { WhatsAppModal } from './components/WhatsAppModal';

export default function App() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isWhatsAppOpen, setIsWhatsAppOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<'basic' | 'complete'>('complete');

  const scrollToPricing = (planId?: 'basic' | 'complete') => {
    if (planId) setSelectedPlan(planId);
    const pricingEl = document.getElementById('pricing-section');
    if (pricingEl) {
      pricingEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleOpenCheckout = (planId: 'basic' | 'complete') => {
    setSelectedPlan(planId);
    setIsCheckoutOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F5F5F7] text-[#1D1D1F] flex flex-col selection:bg-[#0071E3] selection:text-white antialiased">
      {/* 1. TOP BAR FIXA (URGÊNCIA COM DATA DINÂMICA) */}
      <HeaderBanner />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. HERO SECTION */}
        <HeroSection onCtaClick={scrollToPricing} />

        {/* 3. SEÇÃO DE DOR (IMEDIATAMENTE APÓS A HERO) */}
        <PainSection />

        {/* 4. ENTREGÁVEIS & BENEFÍCIOS */}
        <div id="deliverables-section">
          <WhatYouGetSection onCtaClick={scrollToPricing} />
        </div>

        {/* 5. BÔNUS DE ALTO VALOR */}
        <BonusesSection onCtaClick={scrollToPricing} />

        {/* 6. MODELOS DE SALADAS (ARQUITETURA DAS RECEITAS) */}
        <RecipesShowcaseSection onCtaClick={scrollToPricing} />

        {/* 7. PROVA SOCIAL DUPLA (WHATSAPP + VÍDEOS) */}
        <SocialProofSection />

        {/* 8. BLOCO DE RESUMO / ANCORAGEM ("Nu ai timp să citești tot?") */}
        <SummaryPillarsSection />

        {/* 9. TABELA COMPARATIVA DE PREÇOS (EFEITO DECOY) */}
        <PricingSection onSelectPlan={handleOpenCheckout} />

        {/* 10. GARANTIA 15 DIAS INCONDICIONAL */}
        <GuaranteeSection />

        {/* 11. FAQ & FINAL DECISION */}
        <FaqSection 
          onCtaClick={scrollToPricing}
          onWhatsAppClick={() => setIsWhatsAppOpen(true)}
        />
      </main>

      {/* 12. FOOTER */}
      <Footer />

      {/* Interactive Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        selectedPlanId={selectedPlan}
      />

      {/* WhatsApp Support Direct Modal */}
      <WhatsAppModal
        isOpen={isWhatsAppOpen}
        onClose={() => setIsWhatsAppOpen(false)}
      />
    </div>
  );
}

