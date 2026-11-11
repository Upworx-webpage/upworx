import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const AboutSection: React.FC = () => {
  const { t } = useLanguage();
  const a = t.aboutSection;

  return (
    <section id="why-choose-upworx" className="relative py-16 sm:py-20 bg-zinc-950 overflow-hidden border-t border-zinc-900">
      {/* Decorative BG element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-teal-custom/5 skew-x-12 transform translate-x-1/2 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Divu kolonnu saturs: Teksts kreisajā pusē, samazināts attēls labajā pusē */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Kreisā puse: Virsraksti un apraksts */}
          <div className="lg:col-span-7">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tighter mb-4 leading-tight">
              {a.title1} <span className="text-teal-custom">{a.title2}</span>
            </h2>
            <div className="h-1 w-20 bg-teal-custom mb-6"></div>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-normal">
              {a.description}
            </p>
          </div>

          {/* Labā puse: Industriāls attēls */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-sm border border-zinc-800 shadow-xl">
              <img 
                src="/upworx-1.webp" 
                alt={`${a.title1} ${a.title2}`} 
                width="780"
                height="439"
                className="w-full h-64 sm:h-72 lg:h-[340px] object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/20 to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

