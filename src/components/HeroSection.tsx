import React, { useState, useEffect } from 'react';
import { ArrowDown, ChevronRight, ShieldCheck } from 'lucide-react';
import { CLUB_INFO } from '../config/clubData';
import { ClubImage } from './ClubImage';

export const HeroSection: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Smooth entry on mount
    const timer = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(timer);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between pt-24 lg:pt-28 pb-12 overflow-hidden bg-[#0A0B0D]">
      {/* Editorial Background Composition with subtle pitch geometry & gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Subtle radial spotlight on the grass tone and atmospheric dusk */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#FF5A1F]/6 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-emerald-950/20 rounded-full blur-[120px]" />
        
        {/* Subtle grid line accents */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div
        className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3.5'
        }`}
      >
        {/* Top Editorial Kicker */}
        <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold tracking-widest uppercase text-neutral-400 mb-6">
          <span className="w-6 h-[2px] bg-[#FF5A1F]" />
          <span className="text-white">{CLUB_INFO.heroSubtitle}</span>
          <span className="text-neutral-600">/</span>
          <span className="text-neutral-400">Футбольный клуб</span>
        </div>

        {/* Asymmetrical 2-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Bold Typography & Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-bold leading-[0.92] tracking-tight text-white font-display mb-6">
              <span className="block text-white">ТВОЙ ПУТЬ</span>
              <span className="block text-white">В ФУТБОЛЕ</span>
              <span className="block text-[#FF5A1F]">НАЧИНАЕТСЯ ЗДЕСЬ</span>
            </h1>

            <p className="text-base sm:text-lg text-neutral-300 max-w-xl font-normal leading-relaxed mb-8">
              {CLUB_INFO.heroDescription}
            </p>

            {/* Primary, Secondary & Sponsor Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-10">
              <button
                type="button"
                onClick={() => scrollTo('teams')}
                className="group inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 text-xs sm:text-sm font-bold tracking-widest uppercase text-white bg-[#FF5A1F] hover:bg-[#E64C12] active:scale-[0.98] transition-all duration-200 shadow-lg shadow-[#FF5A1F]/20 cursor-pointer whitespace-nowrap"
              >
                <span>НАШИ КОМАНДЫ</span>
                <ChevronRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              <button
                type="button"
                onClick={() => scrollTo('contacts')}
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 text-xs sm:text-sm font-bold tracking-widest uppercase text-white border border-[#262A30] hover:border-neutral-400 bg-[#151719]/80 hover:bg-[#1B1E22] active:scale-[0.98] transition-all duration-200 cursor-pointer whitespace-nowrap"
              >
                <span>КОНТАКТЫ</span>
              </button>

              <button
                type="button"
                onClick={() => scrollTo('sponsors')}
                className="group inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 text-xs sm:text-sm font-bold tracking-widest uppercase text-neutral-300 hover:text-white border border-[#262A30] hover:border-[#FF5A1F]/70 bg-[#151719]/50 hover:bg-[#1B1E22] active:scale-[0.98] transition-all duration-200 cursor-pointer whitespace-nowrap"
              >
                <span>СТАТЬ СПОНСОРОМ</span>
              </button>
            </div>

            {/* Zero-Pill Unboxed Key Academy Metadata */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-neutral-400 border-t border-[#262A30]/60 pt-6">
              <div className="flex items-center gap-1.5 text-neutral-300">
                <ShieldCheck className="w-4 h-4 text-[#FF5A1F]" />
                <span className="font-semibold text-white">Набор 2023 · Добор 2017–2022</span>
              </div>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span>Смоленск, Россия</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span>Европейские ориентиры развития</span>
            </div>
          </div>

          {/* Right Column: High-Impact Editorial Imagery Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative border border-[#262A30] bg-[#151719] p-2.5 sm:p-3 shadow-2xl transition-all duration-300 hover:border-[#FF5A1F]/30 group">
              {/* Image Frame */}
              <div className="relative aspect-4/3 sm:aspect-16/11 overflow-hidden">
                <ClubImage
                  src={CLUB_INFO.heroImageUrl || "/images/main.png"}
                  fallbackSrcs={CLUB_INFO.heroImageFallbacks}
                  alt="Детский спортивный клуб «Автодор» (Смоленск)"
                  fallbackTitle="ДСК «Автодор» · Смоленск"
                  className="w-full h-full"
                />

                {/* Scrim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B0D] via-transparent to-transparent opacity-80" />

                {/* Overlaid Editorial Note */}
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <div>
                    <span className="text-[10px] font-mono tracking-widest uppercase text-[#FF5A1F] block">
                      Футбольное пространство
                    </span>
                    <span className="text-sm font-bold text-white font-display">
                      СМОЛЕНСК · ДЕТСКИЙ СПОРТ
                    </span>
                  </div>
                  <span className="text-xs font-mono tabular-nums text-neutral-400">
                    2026
                  </span>
                </div>
              </div>

              {/* Accent Corner Line with subtle color response */}
              <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-[#FF5A1F] transition-all duration-200 group-hover:w-4 group-hover:h-4" />
              <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-[#FF5A1F] transition-all duration-200 group-hover:w-4 group-hover:h-4" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Anchor Indicator */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8 flex items-center justify-between text-xs text-neutral-400">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-[#FF5A1F]" />
          <span className="tracking-wider uppercase">Официальный портал клуба</span>
        </div>
        <button
          onClick={() => scrollTo('philosophy')}
          className="group hover:text-white transition-colors duration-200 flex items-center gap-1.5 uppercase tracking-wider text-[11px] cursor-pointer"
          aria-label="Прокрутить к философии клуба"
        >
          <span>Узнать больше</span>
          <ArrowDown className="w-3.5 h-3.5 text-[#FF5A1F] transition-transform duration-200 group-hover:translate-y-0.5" />
        </button>
      </div>
    </section>
  );
};
