import React, { useState } from 'react';
import { 
  X, 
  Lock, 
  ShieldCheck, 
  CreditCard, 
  ArrowRight,
  Gift,
  Mail,
  User,
  Phone,
  CheckCircle2
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlanId: 'basic' | 'complete';
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ 
  isOpen, 
  onClose, 
  selectedPlanId 
}) => {
  const { copy, lang } = useLanguage();
  const [activePlan, setActivePlan] = useState<'basic' | 'complete'>(selectedPlanId);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [isSuccess, setIsSuccess] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'apple_pay' | 'google_pay'>('card');

  React.useEffect(() => {
    setActivePlan(selectedPlanId);
    setIsSuccess(false);
  }, [selectedPlanId, isOpen]);

  if (!isOpen) return null;

  const isPt = lang === 'pt';

  const basicPlan = copy.pricing.plans[0];
  const completePlan = copy.pricing.plans[1];

  const planDetails = activePlan === 'complete' 
    ? {
        name: isPt ? 'Pacote Completo Recomendado' : 'Pachet Complet Recomandat',
        priceEur: completePlan.priceEur,
        priceRon: completePlan.priceRon,
        originalRon: isPt ? `aprox. ${completePlan.originalPriceRon}` : completePlan.originalPriceRon,
        savings: isPt ? 'R$ 273' : '273 RON',
        checkoutUrl: completePlan.checkoutUrl || 'https://pay.hotmart.com/N107697844Q?off=1ocjasuy&checkoutMode=10',
        bonusesIncluded: true
      }
    : {
        name: isPt ? 'Edição Essencial' : 'Ediție Esențială',
        priceEur: basicPlan.priceEur,
        priceRon: basicPlan.priceRon,
        originalRon: isPt ? `aprox. ${basicPlan.originalPriceRon}` : basicPlan.originalPriceRon,
        savings: isPt ? 'R$ 60' : '60 RON',
        checkoutUrl: basicPlan.checkoutUrl || 'https://pay.hotmart.com/H107690169O?off=31vemewe&checkoutMode=10',
        bonusesIncluded: false
      };

  const handleCompleteOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (planDetails.checkoutUrl) {
      window.location.href = planDetails.checkoutUrl;
      return;
    }
    setIsSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-white rounded-[28px] max-w-lg w-full overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.15)] border border-black/[0.08] relative my-6">
        
        {/* iOS Sheet Top Grab Indicator */}
        <div className="pt-3 pb-1 flex justify-center">
          <div className="w-10 h-1 rounded-full bg-black/15" />
        </div>

        {/* Header */}
        <div className="p-6 pt-2 pb-5 border-b border-black/[0.06] relative">
          <button
            onClick={onClose}
            className="absolute top-3 right-4 text-[#86868B] hover:text-[#1D1D1F] w-8 h-8 rounded-full bg-[#F5F5F7] flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
          
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0071E3] uppercase tracking-wider mb-1">
            <Lock className="w-3.5 h-3.5" />
            <span>{isPt ? 'Finalização Segura' : 'Comandă Securizată'}</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-[#1D1D1F] tracking-tight">
            {isPt ? 'Protocolo de Conservação Enzimática' : 'Protocolul de Conservare Enzimatică'}
          </h3>
          <p className="text-[#86868B] text-xs mt-1">
            {isPt ? 'Download digital instantâneo enviado diretamente para seu e-mail' : 'Descărcare digitală instantanee trimisă direct pe email'}
          </p>
        </div>

        {isSuccess ? (
          /* Order Success State */
          <div className="p-7 sm:p-9 text-center space-y-4">
            <div className="w-16 h-16 bg-[#34C759]/15 text-[#248A3D] rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <h4 className="text-2xl font-bold text-[#1D1D1F] tracking-tight">
              {isPt ? 'Pedido Confirmado com Sucesso' : 'Comandă Confirmată cu Succes'}
            </h4>

            <p className="text-[#86868B] text-sm leading-relaxed">
              {isPt ? (
                <>Enviamos o link de acesso aos manuais digitais para <strong className="text-[#1D1D1F] font-semibold">{formData.email || 'seu endereço de e-mail'}</strong>.</>
              ) : (
                <>Am trimis linkul de acces la ghidurile digitale către <strong className="text-[#1D1D1F] font-semibold">{formData.email || 'adresa ta de email'}</strong>.</>
              )}
            </p>

            <div className="bg-[#F5F5F7] rounded-[20px] p-5 text-left text-xs text-[#1D1D1F] space-y-2 border border-black/[0.05]">
              <div className="font-semibold text-sm text-[#1D1D1F]">{isPt ? 'Próximos passos:' : 'Pașii următori:'}</div>
              <div>{isPt ? '1. Abra seu e-mail e verifique a mensagem de boas-vindas' : '1. Deschide emailul și verifică mesajul de bun venit'}</div>
              <div>{isPt ? '2. Baixe os PDFs para seu iPhone, iPad ou computador' : '2. Descarcă PDF-urile pe iPhone, iPad sau computer'}</div>
              <div>{isPt ? '3. Acesse a lista de compras para iniciar na próxima refeição' : '3. Accesează lista de cumpărături pentru următoarea masă'}</div>
            </div>

            <button
              onClick={onClose}
              className="w-full bg-[#1D1D1F] hover:bg-black active:scale-[0.98] text-white font-medium py-3.5 rounded-full transition-all cursor-pointer"
            >
              {isPt ? 'Concluir e Acessar' : 'Finalizează și Deschide'}
            </button>
          </div>
        ) : (
          /* Checkout Form */
          <form onSubmit={handleCompleteOrder} className="p-6 space-y-5">
            
            {/* iOS Pill Segmented Control Plan Switcher */}
            <div className="p-1 bg-[#F5F5F7] rounded-full flex gap-1 border border-black/[0.04]">
              <button
                type="button"
                onClick={() => setActivePlan('basic')}
                className={`flex-1 py-2 px-3 rounded-full text-xs font-semibold transition-all text-center cursor-pointer ${
                  activePlan === 'basic' 
                    ? 'bg-white text-[#1D1D1F] shadow-[0_2px_8px_rgba(0,0,0,0.08)]' 
                    : 'text-[#86868B] hover:text-[#1D1D1F]'
                }`}
              >
                {isPt ? 'Básico (7,90 € / 39 RON)' : 'De Bază (7,90 € / 39 RON)'}
              </button>
              <button
                type="button"
                onClick={() => setActivePlan('complete')}
                className={`flex-1 py-2 px-3 rounded-full text-xs font-semibold transition-all text-center cursor-pointer ${
                  activePlan === 'complete' 
                    ? 'bg-[#0071E3] text-white shadow-[0_2px_8px_rgba(0,113,227,0.3)]' 
                    : 'text-[#86868B] hover:text-[#1D1D1F]'
                }`}
              >
                {isPt ? 'Completo (14,90 € / 74 RON)' : 'Complet (14,90 € / 74 RON)'}
              </button>
            </div>

            {/* Selected Plan Summary Banner */}
            <div className="bg-[#F5F5F7] rounded-[20px] p-4 border border-black/[0.05]">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold text-[#1D1D1F] block">
                    {planDetails.name}
                  </span>
                  <span className="text-[11px] text-[#86868B] line-through">
                    {isPt ? 'Valor padrão:' : 'Valoare:'} {planDetails.originalRon}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xl font-bold text-[#1D1D1F] block tracking-tight">
                    {planDetails.priceRon}
                  </span>
                  <span className="text-[10px] font-semibold bg-[#34C759]/15 text-[#248A3D] px-2 py-0.5 rounded-full">
                    {isPt ? `Economia: ${planDetails.savings}` : `Economisești: ${planDetails.savings}`}
                  </span>
                </div>
              </div>

              {planDetails.bonusesIncluded && (
                <div className="mt-2.5 pt-2 border-t border-black/[0.05] text-[11px] font-medium text-[#1D1D1F] flex items-center gap-1.5">
                  <Gift className="w-3.5 h-3.5 text-[#0071E3]" />
                  <span>{isPt ? 'Todos os 4 Bônus complementares inclusos' : 'Toate cele 4 Bonusuri suplimentare incluse'}</span>
                </div>
              )}
            </div>

            {/* iOS Input Fields */}
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-medium text-[#86868B] mb-1">
                  {isPt ? 'Nome Completo' : 'Nume și Prenume'}
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-[#86868B] absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder={isPt ? 'ex: Maria Silva' : 'ex: Maria Popescu'}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-10 pr-3 py-3 text-sm rounded-[14px] bg-[#F5F5F7] border border-black/[0.06] text-[#1D1D1F] focus:outline-none focus:border-[#0071E3] focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#86868B] mb-1">
                  {isPt ? 'E-mail para entrega do acesso' : 'Email pentru livrarea accesului'}
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-[#86868B] absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    placeholder={isPt ? 'ex: maria.silva@icloud.com' : 'ex: maria.popescu@gmail.com'}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-10 pr-3 py-3 text-sm rounded-[14px] bg-[#F5F5F7] border border-black/[0.06] text-[#1D1D1F] focus:outline-none focus:border-[#0071E3] focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#86868B] mb-1">
                  {isPt ? 'Telefone / WhatsApp (opcional)' : 'Număr de Telefon (opțional)'}
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-[#86868B] absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    placeholder={isPt ? 'ex: (11) 99999-9999' : 'ex: 0722 000 000'}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-10 pr-3 py-3 text-sm rounded-[14px] bg-[#F5F5F7] border border-black/[0.06] text-[#1D1D1F] focus:outline-none focus:border-[#0071E3] focus:bg-white transition-all"
                  />
                </div>
              </div>
            </div>

            {/* iOS Payment Method Segmented Control */}
            <div>
              <label className="block text-xs font-medium text-[#86868B] mb-1.5">
                {isPt ? 'Método de Pagamento' : 'Metodă de Plată'}
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  className={`p-2.5 rounded-[14px] border text-xs font-semibold flex flex-col items-center gap-1 transition-all cursor-pointer ${
                    paymentMethod === 'card' 
                      ? 'border-[#0071E3] bg-[#0071E3]/5 text-[#0071E3]' 
                      : 'border-black/[0.06] bg-[#F5F5F7] text-[#1D1D1F]'
                  }`}
                >
                  <CreditCard className="w-4 h-4" />
                  <span>{isPt ? 'Cartão' : 'Card'}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('apple_pay')}
                  className={`p-2.5 rounded-[14px] border text-xs font-semibold flex flex-col items-center gap-1 transition-all cursor-pointer ${
                    paymentMethod === 'apple_pay' 
                      ? 'border-[#0071E3] bg-[#0071E3]/5 text-[#0071E3]' 
                      : 'border-black/[0.06] bg-[#F5F5F7] text-[#1D1D1F]'
                  }`}
                >
                  <span> Pay</span>
                  <span className="text-[10px] text-[#86868B]">1-Toque</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('google_pay')}
                  className={`p-2.5 rounded-[14px] border text-xs font-semibold flex flex-col items-center gap-1 transition-all cursor-pointer ${
                    paymentMethod === 'google_pay' 
                      ? 'border-[#0071E3] bg-[#0071E3]/5 text-[#0071E3]' 
                      : 'border-black/[0.06] bg-[#F5F5F7] text-[#1D1D1F]'
                  }`}
                >
                  <span>G Pay</span>
                  <span className="text-[10px] text-[#86868B]">Rápido</span>
                </button>
              </div>
            </div>

            {/* Apple Blue Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#0071E3] hover:bg-[#0077ED] active:scale-[0.98] text-white font-medium text-base py-4 px-6 rounded-full shadow-[0_4px_16px_rgba(0,113,227,0.3)] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{isPt ? `Ir para Pagamento Seguro (${planDetails.priceEur} / ${planDetails.priceRon})` : `Mergi la Plata Securizată (${planDetails.priceEur} / ${planDetails.priceRon})`}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Reassurance */}
            <div className="flex items-center justify-center gap-3 text-[11px] text-[#86868B] pt-1">
              <span className="flex items-center gap-1 text-[#34C759]">
                <ShieldCheck className="w-3.5 h-3.5" /> {isPt ? 'Garantia de 15 Dias' : 'Garanție 15 Zile'}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Lock className="w-3.5 h-3.5" /> {isPt ? 'Criptografia 256-bit' : 'Criptare 256-bit'}
              </span>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
