import React from 'react';
import { SPONSORSHIP_INFO, SponsorBenefit } from '../config/clubData';
import { Globe, Shirt, Megaphone, ArrowRight } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const SponsorshipSection: React.FC = () => {
  const handleScrollToContacts = (e: React.MouseEvent) => {
    e.preventDefault();
    const targetElement = document.getElementById(SPONSORSHIP_INFO.ctaTargetId || 'contacts');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const renderBenefitIcon = (iconName?: string) => {
    switch (iconName) {
      case 'globe':
        return <Globe className="w-6 h-6 text-[#FF5A1F]" />;
      case 'shirt':
        return <Shirt className="w-6 h-6 text-[#FF5A1F]" />;
      case 'media':
      default:
        return <Megaphone className="w-6 h-6 text-[#FF5A1F]" />;
    }
  };

  return (
    <section id="sponsors" className="scroll-mt-20 py-20 lg:py-28 bg-[#0D0E11] border-t border-[#262A30] relative overflow-hidden">
      {/* Subtle background ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-0 w-96 h-96 bg-[#FF5A1F]/5 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with ScrollReveal */}
        <ScrollReveal className="max-w-4xl mb-12 lg:mb-16">
          <div className="flex items-center gap-3 text-xs uppercase tracking-widest font-semibold text-[#FF5A1F] mb-3">
            <span className="w-5 h-[2px] bg-[#FF5A1F]" />
            <span>{SPONSORSHIP_INFO.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display uppercase leading-tight mb-5">
            {SPONSORSHIP_INFO.title}
          </h2>
          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
            {SPONSORSHIP_INFO.description}
          </p>
        </ScrollReveal>

        {/* 3 Benefit Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {SPONSORSHIP_INFO.benefits.map((benefit: SponsorBenefit, index: number) => (
            <ScrollReveal
              key={benefit.id}
              delayMs={index * 80}
              className="h-full"
            >
              <div className="group relative bg-[#141618] border border-[#262A30] p-7 sm:p-8 flex flex-col justify-between h-full transition-all duration-300 hover:border-[#FF5A1F]/50 hover:bg-[#181B1F]">
                <div>
                  {/* Icon & Counter Meta */}
                  <div className="flex items-center justify-between pb-5 mb-6 border-b border-white/5">
                    <div className="w-12 h-12 bg-[#101214] border border-[#262A30] flex items-center justify-center group-hover:border-[#FF5A1F]/40 transition-colors duration-200">
                      {renderBenefitIcon(benefit.iconName)}
                    </div>
                    <span className="text-xs font-mono font-semibold tracking-wider text-neutral-400">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white font-display uppercase tracking-tight mb-3 group-hover:text-white transition-colors duration-200">
                    {benefit.title}
                  </h3>

                  <p className="text-sm text-neutral-300 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs text-neutral-400 font-mono">
                  <span>ДСК «Автодор»</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-neutral-600 group-hover:bg-[#FF5A1F] transition-colors duration-200" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom CTA Commercial Action Bar */}
        <ScrollReveal delayMs={240} className="mt-8 lg:mt-12">
          <div className="p-6 sm:p-8 bg-gradient-to-r from-[#141618] via-[#171A1E] to-[#141618] border border-[#262A30] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 transition-colors duration-200 hover:border-neutral-600">
            <div className="max-w-2xl">
              <div className="text-xs font-mono uppercase tracking-wider text-[#FF5A1F] mb-1">
                Открыты к сотрудничеству
              </div>
              <div className="text-lg sm:text-xl font-bold text-white font-display uppercase tracking-tight">
                Индивидуальные форматы интеграции для вашего бизнеса
              </div>
              <p className="text-xs sm:text-sm text-neutral-400 mt-1.5 leading-relaxed">
                Свяжитесь с клубом для обсуждения вариантов спонсорских пакетов, размещения брендинга и совместных медиапроектов.
              </p>
            </div>

            <button
              type="button"
              onClick={handleScrollToContacts}
              className="inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#FF5A1F] hover:bg-[#E64C12] active:scale-[0.98] transition-all duration-200 shrink-0 cursor-pointer shadow-lg shadow-[#FF5A1F]/15 group"
            >
              <span>{SPONSORSHIP_INFO.ctaText}</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
