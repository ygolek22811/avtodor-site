import React, { useState } from 'react';
import { FAQ_DATA, FAQItem } from '../config/clubData';
import { Plus, ArrowUpRight, HelpCircle } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const FAQSection: React.FC = () => {
  // Allow toggling question items (default first question open for immediate preview)
  const [openIds, setOpenIds] = useState<string[]>([FAQ_DATA[0]?.id || 'faq-age']);

  const toggleItem = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleScrollToContacts = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactsElement = document.getElementById('contacts');
    if (contactsElement) {
      contactsElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="faq" className="py-24 lg:py-32 bg-[#0A0B0D] border-t border-[#262A30]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Expressive Editorial Header & Support Note */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <ScrollReveal>
              <div className="flex items-center gap-3 text-xs uppercase tracking-widest font-semibold text-[#FF5A1F] mb-3">
                <span className="w-5 h-[2px] bg-[#FF5A1F]" />
                <span>Вопросы родителей</span>
              </div>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-display uppercase leading-tight mb-6">
                ВОПРОСЫ РОДИТЕЛЕЙ
              </h2>

              <p className="text-base sm:text-lg text-neutral-300 leading-relaxed mb-8">
                Всё, что важно знать перед началом занятий: собрали ответы на главные вопросы об экипировке, пробной тренировке, группах и адаптации детей.
              </p>

              {/* Minimalist Graphite Support Card */}
              <div className="bg-[#141618] border border-[#262A30] p-6 sm:p-7 relative card-hover-subtle hover:border-[#FF5A1F]/40">
                <div className="flex items-start gap-3.5 mb-4">
                  <div className="w-8 h-8 rounded-none bg-[#FF5A1F]/10 border border-[#FF5A1F]/30 flex items-center justify-center shrink-0 text-[#FF5A1F]">
                    <HelpCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white font-display uppercase tracking-tight">
                      Остались вопросы?
                    </h3>
                    <span className="text-[11px] text-neutral-400 font-mono uppercase tracking-wider block">
                      Прямой контакт с клубом
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6">
                  Если вы не нашли ответ на свой вопрос или хотите уточнить расписание конкретной возрастной группы — свяжитесь с нами, и мы с радостью проконсультируем вас.
                </p>

                <a
                  href="#contacts"
                  onClick={handleScrollToContacts}
                  className="group inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold tracking-wider uppercase text-white bg-[#FF5A1F] hover:bg-[#E64C12] active:scale-[0.98] transition-all duration-200 cursor-pointer shadow-sm"
                >
                  <span>Задать вопрос клубу</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                {/* Subtle bottom orange accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#FF5A1F] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Editorial Accordion List */}
          <div className="lg:col-span-7">
            <div className="divide-y divide-[#262A30] border-y border-[#262A30]">
              {FAQ_DATA.map((item: FAQItem, index: number) => {
                const isOpen = openIds.includes(item.id);
                const displayIndex = index + 1 < 10 ? `0${index + 1}` : `${index + 1}`;

                return (
                  <ScrollReveal
                    key={item.id}
                    delayMs={index * 50}
                  >
                    <div className="group transition-colors duration-200">
                      <button
                        type="button"
                        onClick={() => toggleItem(item.id)}
                        aria-expanded={isOpen}
                        aria-controls={`faq-answer-${item.id}`}
                        className="w-full py-5 sm:py-6 flex items-start justify-between gap-4 text-left cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#FF5A1F]"
                      >
                        <div className="flex items-start gap-3 sm:gap-4 flex-1">
                          {/* Index indicator */}
                          <span className="text-xs sm:text-sm font-mono text-[#FF5A1F] font-semibold tabular-nums mt-0.5 shrink-0 select-none">
                            {displayIndex}
                          </span>

                          {/* Question text */}
                          <span className="text-base sm:text-lg font-bold text-white group-hover:text-[#FF5A1F] transition-colors duration-200 uppercase tracking-tight leading-snug font-display">
                            {item.question}
                          </span>
                        </div>

                        {/* Minimalist Rotating '+' Icon */}
                        <div
                          className={`w-7 h-7 sm:w-8 sm:h-8 border flex items-center justify-center shrink-0 transition-all duration-200 ${
                            isOpen
                              ? 'border-[#FF5A1F] bg-[#FF5A1F]/10 text-[#FF5A1F]'
                              : 'border-[#262A30] bg-[#141618] text-neutral-400 group-hover:border-[#FF5A1F]/50 group-hover:text-white'
                          }`}
                          aria-hidden="true"
                        >
                          <Plus
                            className={`w-4 h-4 transition-transform duration-300 ease-out transform ${
                              isOpen ? 'rotate-45 text-[#FF5A1F]' : 'rotate-0'
                            }`}
                          />
                        </div>
                      </button>

                      {/* Smooth Collapsible Answer Container */}
                      <div
                        id={`faq-answer-${item.id}`}
                        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0 pointer-events-none'
                        }`}
                      >
                        <div className="overflow-hidden">
                          <div className="pb-6 pt-1 pl-7 sm:pl-9 pr-2 sm:pr-8 text-neutral-300 text-sm sm:text-base leading-relaxed font-normal">
                            {item.answer}
                          </div>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
