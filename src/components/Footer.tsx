import React from 'react';
import { ShieldCheck, Lock, Award, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1D1D1F] text-[#86868B] text-xs py-12 border-t border-white/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Security & Guarantee Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pb-8 mb-8 border-b border-white/10 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2.5">
            <Lock className="w-5 h-5 text-emerald-400 shrink-0" />
            <div>
              <span className="text-white font-semibold block text-xs">
                Plată 100% Securizată
              </span>
              <span className="text-[11px] text-neutral-400">Criptare SSL 256-bit</span>
            </div>
          </div>

          <div className="flex items-center justify-center sm:justify-start gap-2.5">
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
            <div>
              <span className="text-white font-semibold block text-xs">
                Garanție 15 Zile
              </span>
              <span className="text-[11px] text-neutral-400">Rambursare 100% fără riscuri</span>
            </div>
          </div>

          <div className="flex items-center justify-center sm:justify-start gap-2.5">
            <Award className="w-5 h-5 text-emerald-400 shrink-0" />
            <div>
              <span className="text-white font-semibold block text-xs">
                Acces Instantaneu
              </span>
              <span className="text-[11px] text-neutral-400">Descărcare directă pe email</span>
            </div>
          </div>

          <div className="flex items-center justify-center sm:justify-start gap-2.5">
            <Heart className="w-5 h-5 text-emerald-400 shrink-0" />
            <div>
              <span className="text-white font-semibold block text-xs">
                Satisfacție 99.4%
              </span>
              <span className="text-[11px] text-neutral-400">Peste 1.480 de clienți fericiți</span>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Links */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[11px]">
          <div>
            © {new Date().getFullYear()} Protocolul de Conservare Enzimatică. Toate drepturile rezervate.
          </div>
          <div className="flex items-center gap-4 text-neutral-400">
            <span className="hover:text-white transition-colors cursor-pointer">
              Termeni și Condiții
            </span>
            <span>•</span>
            <span className="hover:text-white transition-colors cursor-pointer">
              Politica de Confidențialitate
            </span>
            <span>•</span>
            <span className="hover:text-white transition-colors cursor-pointer">
              Contact Suport
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
