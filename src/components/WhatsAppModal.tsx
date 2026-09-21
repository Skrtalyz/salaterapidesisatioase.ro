import React, { useState } from 'react';
import { X, MessageCircle, Send, CheckCircle2 } from 'lucide-react';

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WhatsAppModal: React.FC<WhatsAppModalProps> = ({ isOpen, onClose }) => {
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  if (!isOpen) return null;

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
    setTimeout(() => {
      const defaultMsg = 'Bună ziua! Doresc mai multe detalii despre Protocolul de Conservare Enzimatică.';
      window.open(`https://wa.me/?text=${encodeURIComponent(message || defaultMsg)}`, '_blank');
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white rounded-[28px] max-w-md w-full overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.15)] border border-black/[0.08] relative">
        
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
          
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-[14px] bg-[#34C759]/15 text-[#248A3D] flex items-center justify-center shrink-0">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-[#1D1D1F] tracking-tight">
                Asistență WhatsApp
              </h3>
              <div className="flex items-center gap-1.5 text-xs text-[#34C759] font-medium">
                <span className="w-2 h-2 rounded-full bg-[#34C759] animate-pulse"></span>
                <span>Echipă disponibilă online</span>
              </div>
            </div>
          </div>
        </div>

        {isSent ? (
          <div className="p-7 text-center space-y-3">
            <div className="w-14 h-14 bg-[#34C759]/15 text-[#248A3D] rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-[#1D1D1F]">
              Se redirecționează către WhatsApp...
            </h4>
            <p className="text-xs text-[#86868B]">
              Așteaptă un moment până când te conectăm cu echipa noastră.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSend} className="p-6 space-y-4">
            <p className="text-xs sm:text-sm text-[#86868B] leading-relaxed">
              Adresează întrebările tale direct specialiștilor noștri înainte de a plasa comanda.
            </p>

            <div>
              <label className="block text-xs font-medium text-[#86868B] mb-1.5">
                Mesajul tău (opțional)
              </label>
              <textarea
                rows={3}
                placeholder="Bună ziua! Aș dori să aflu mai multe despre..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-3.5 text-sm rounded-[16px] bg-[#F5F5F7] border border-black/[0.06] text-[#1D1D1F] focus:outline-none focus:border-[#0071E3] focus:bg-white resize-none transition-all"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#34C759] hover:bg-[#30D158] active:scale-[0.98] text-white font-semibold text-sm py-3.5 px-6 rounded-full shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Deschide Conversația pe WhatsApp</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              className="w-full text-center text-xs text-[#86868B] hover:text-[#1D1D1F] py-1 transition-colors cursor-pointer"
            >
              Înapoi la pagină
            </button>
          </form>
        )}

      </div>
    </div>
  );
};
