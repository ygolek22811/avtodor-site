import React from 'react';
import { PHILOSOPHY_PILLARS } from '../config/clubData';
import { Check } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const PhilosophySection: React.FC = () => {
  return (
    <section id="philosophy" className="py-24 lg:py-32 bg-[#0A0B0D] border-t border-[#262A30]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="max-w-3xl mb-16 lg:mb-20">
          <div className="flex items-center gap-3 text-xs uppercase tracking-widest font-semibold text-[#FF5A1F] mb-3">
            <span className="w-5 h-[2px] bg-[#FF5A1F]" />
            <span>Философия и подход</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-display uppercase leading-tight mb-6">
            РАЗВИТИЕ ИГРОКА КАК НЕПРЕРЫВНЫЙ ПРОЦЕСС
          </h2>
          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
            В ДСК «Автодор» футбол рассматривается не как разовая гонка за сиюминутным счётом,
            а как последовательная система спортивного и личностного взросления. Мы закладываем
            фундамент, на котором юный игрок растёт уверенным в себе, тактически грамотным и дисциплинированным.
          </p>
        </ScrollReveal>

        {/* 3 Pillars Grid with Staggered Scroll Reveal (100ms interval) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {PHILOSOPHY_PILLARS.map((pillar, idx) => (
            <ScrollReveal
              key={pillar.index}
              delayMs={idx * 100}
              className="h-full"
            >
              <div className="group relative bg-[#141618] border border-[#262A30] p-8 flex flex-col justify-between h-full card-hover-subtle hover:border-[#FF5A1F]/50">
                <div>
                  {/* Clean Editorial Index */}
                  <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
                    <span className="text-2xl sm:text-3xl font-bold text-[#FF5A1F] font-display tabular-nums">
                      {pillar.index}
                    </span>
                    <span className="text-[11px] uppercase tracking-wider text-neutral-400 font-mono">
                      Ключевой вектор
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white font-display mb-4 tracking-tight">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-neutral-300 leading-relaxed mb-6 font-normal">
                    {pillar.summary}
                  </p>
                </div>

                {/* Bullet list of key focal areas */}
                <ul className="space-y-2.5 pt-6 border-t border-white/5 text-xs text-neutral-300">
                  {pillar.details.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-2.5">
                      <span className="mt-0.5 w-3.5 h-3.5 rounded-full bg-[#FF5A1F]/15 text-[#FF5A1F] flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Subtle bottom accent hover line with smooth transition */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#FF5A1F] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Supporting Quote / Editorial Note */}
        <ScrollReveal delayMs={150} className="mt-14">
          <div className="p-6 sm:p-8 bg-[#151719] border border-[#262A30] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 transition-colors duration-200 hover:border-neutral-700">
            <div className="max-w-2xl">
              <p className="text-sm sm:text-base text-neutral-200 italic font-medium leading-relaxed">
                «Обучение детей футболу требует терпения, уважения к индивидуальным особенностям каждого возраста и создания среды, в которой не боятся ошибаться и пробовать новое.»
              </p>
            </div>
            <div className="shrink-0 text-left sm:text-right">
              <span className="text-xs uppercase tracking-widest text-[#FF5A1F] font-semibold block">
                Принцип клуба
              </span>
              <span className="text-xs text-neutral-400">
                ДСК «Автодор» · Смоленск
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
