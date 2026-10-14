import React from 'react';
import { COOPERATION_DATA, PartnerClub } from '../config/clubData';
import { ScrollReveal } from './ScrollReveal';

export const CooperationSection: React.FC = () => {
  return (
    <section id="cooperation" className="py-20 lg:py-28 bg-[#0D0E11] border-t border-[#262A30]/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="max-w-3xl mb-12 lg:mb-16">
          <div className="flex items-center gap-3 text-xs uppercase tracking-widest font-semibold text-[#FF5A1F] mb-3">
            <span className="w-5 h-[2px] bg-[#FF5A1F]" />
            <span>{COOPERATION_DATA.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display uppercase leading-tight mb-4">
            {COOPERATION_DATA.title}
          </h2>
          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
            {COOPERATION_DATA.subtitle}
          </p>
        </ScrollReveal>

        {/* 5 Clubs Balanced Editorial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5">
          {COOPERATION_DATA.clubs.map((club: PartnerClub, index: number) => (
            <ScrollReveal
              key={club.id}
              delayMs={index * 80}
              className="h-full"
            >
              <div className="group relative bg-[#141618] border border-[#262A30] p-6 sm:p-7 flex flex-col justify-between h-full card-hover-subtle hover:border-[#FF5A1F]/50 hover:bg-[#181B1F]">
                <div>
                  {/* City & Counter Meta */}
                  <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/5 text-[11px] font-mono uppercase tracking-wider text-neutral-400">
                    <span>{club.city || 'Россия'}</span>
                    <span className="text-[#FF5A1F]/80">0{index + 1}</span>
                  </div>

                  {/* Club Typography or Optional Badge */}
                  {club.badgeUrl ? (
                    <div className="h-14 flex items-center justify-center mb-4">
                      <img
                        src={club.badgeUrl}
                        alt={club.badgeAlt || club.name}
                        className="max-h-12 max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-200"
                      />
                    </div>
                  ) : null}

                  <h3 className="text-2xl sm:text-3xl font-bold text-white font-display tracking-tight uppercase group-hover:text-white transition-colors duration-200">
                    {club.name}
                  </h3>
                </div>

                <div className="pt-6 mt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs text-neutral-400 font-medium">
                    {club.category || 'Клуб / Академия'}
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-neutral-600 group-hover:bg-[#FF5A1F] transition-colors duration-200" />
                </div>

                {/* Subtle bottom orange accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#FF5A1F] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Editorial Context Footer Note */}
        <ScrollReveal delayMs={150} className="mt-10 lg:mt-12">
          <div className="py-4 px-6 bg-[#141618]/60 border border-[#262A30] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-neutral-400">
            <span className="text-neutral-300">
              Постоянный контакт с ведущими футбольными центрами страны задаёт высокие ориентиры спортивного развития воспитанников ДСК «Автодор».
            </span>
            <span className="text-[11px] uppercase tracking-wider text-[#FF5A1F] font-semibold shrink-0">
              Смоленск · Россия
            </span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
