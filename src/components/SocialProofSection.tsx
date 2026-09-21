import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const SocialProofSection: React.FC = () => {
  const { copy } = useLanguage();
  const { socialProof } = copy;

  const testimonialImages = [
    {
      id: 1,
      src: 'https://i.imgur.com/fpOPm3y.png',
      alt: 'Recenzie WhatsApp - Rezultate Protocol',
    },
    {
      id: 2,
      src: 'https://i.imgur.com/qprvlbe.png',
      alt: 'Recenzie WhatsApp - Rețete și Economie',
    },
    {
      id: 3,
      src: 'https://i.imgur.com/mQM0qud.png',
      alt: 'Recenzie WhatsApp - Digestie și Energie',
    },
  ];

  return (
    <section id="social-proof-section" className="py-16 sm:py-20 bg-white border-b border-black/[0.05]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5F5F7] border border-black/[0.05] text-[#1D1D1F] text-xs font-semibold mb-3">
            <div className="flex text-amber-500 text-xs">★★★★★</div>
            <span>4.9 / 5 • Peste 1.480 recenzii</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-bold text-[#1D1D1F] tracking-[-0.03em] leading-tight">
            {socialProof.sectionTitle}
          </h2>
        </div>

        {/* Real WhatsApp Testimonial Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {testimonialImages.map((item) => (
            <div
              key={item.id}
              className="rounded-[20px] overflow-hidden border border-black/10 bg-[#F9F9FB] shadow-[0_4px_16px_rgba(0,0,0,0.05)] transition-transform duration-200 hover:scale-[1.01] flex justify-center"
            >
              <img
                src={item.src}
                alt={item.alt}
                referrerPolicy="no-referrer"
                className="w-full h-auto object-contain rounded-[19px] block"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
