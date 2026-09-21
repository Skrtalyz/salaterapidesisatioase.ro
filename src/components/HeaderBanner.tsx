import React, { useState, useEffect } from 'react';
import { Sparkles, Clock } from 'lucide-react';

export const HeaderBanner: React.FC = () => {
  const [currentDate, setCurrentDate] = useState<string>('');
  const [timeLeft, setTimeLeft] = useState({ minutes: 14, seconds: 35 });

  useEffect(() => {
    const now = new Date();
    const formatted = now.toLocaleDateString('ro-RO', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
    setCurrentDate(formatted);

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        }
        return { minutes: 15, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (num: number) => num.toString().padStart(2, '0');

  return (
    <aside aria-label="Notificare Urgență" id="top-urgency-banner" className="bg-[#1D1D1F] text-white text-[11px] sm:text-xs font-medium py-2 px-3 sticky top-0 z-50 shadow-md border-b border-white/10">
      <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="flex items-center gap-1.5 font-semibold text-neutral-100">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>
              {`Reducere specială valabilă doar astăzi, ${currentDate || 'astăzi'}: Acces eliberat`}
            </span>
          </span>
        </div>

        <div className="flex items-center gap-2 bg-white/10 px-2.5 py-0.5 rounded-full text-[11px] font-mono ml-auto sm:ml-0 text-neutral-300">
          <Clock className="w-3 h-3 text-amber-400" />
          <span>Expiră în:</span>
          <span className="text-white font-bold tracking-wider">
            {formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
          </span>
        </div>
      </div>
    </aside>
  );
};

