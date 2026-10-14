import React from 'react';
import { TEAMS_DATA, TeamGroup } from '../config/clubData';
import { ArrowRight, Sparkles, UserPlus, HelpCircle } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface TeamsSectionProps {
  onSelectTeamForInquiry: (team: TeamGroup) => void;
}

export const TeamsSection: React.FC<TeamsSectionProps> = ({ onSelectTeamForInquiry }) => {
  return (
    <section id="teams" className="py-24 lg:py-32 bg-[#0A0B0D] border-t border-[#262A30]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Block with Scroll Reveal */}
        <ScrollReveal className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 text-xs uppercase tracking-widest font-semibold text-[#FF5A1F] mb-3">
              <span className="w-5 h-[2px] bg-[#FF5A1F]" />
              <span>Структура клуба</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-display uppercase leading-tight">
              КОМАНДЫ КЛУБА
            </h2>
            <p className="mt-4 text-base sm:text-lg text-neutral-300 leading-relaxed">
              Возрастная иерархия ДСК «Автодор». Открыт официальный набор для детей от 3 лет
              (группа 2023 г. р.), а также идёт активный добор во все группы 2017–2022 гг. р.
            </p>
          </div>

          <div className="text-xs text-neutral-400 border border-[#262A30] bg-[#151719] p-4 max-w-sm transition-colors duration-200 hover:border-neutral-600">
            <span className="text-white font-semibold block mb-1">
              Информация для родителей
            </span>
            <span>
              Открыт набор в группу 2023 г. р. и добор в группы 2017–2022 гг. р. Наличие мест и запись на просмотр уточняются у представителей клуба.
            </span>
          </div>
        </ScrollReveal>

        {/* Teams Expressive Layout: Staggered reveal (90ms between items) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TEAMS_DATA.map((team, idx) => {
            const isOpenRecruitment = team.isOpenRecruitment || team.statusType === 'open';
            const isSupplementary = team.statusType === 'supplementary';

            return (
              <ScrollReveal
                key={team.id}
                delayMs={idx * 90}
                className={isOpenRecruitment ? 'md:col-span-2 lg:col-span-1 h-full' : 'h-full'}
              >
                <div
                  className={`group relative flex flex-col justify-between p-7 h-full border card-hover-subtle transition-all duration-200 ${
                    isOpenRecruitment
                      ? 'bg-[#181B1F] border-[#FF5A1F] shadow-xl shadow-[#FF5A1F]/10 ring-1 ring-[#FF5A1F]/40 hover:border-[#FF5A1F]'
                      : isSupplementary
                      ? 'bg-[#15171A] border-[#2E333C] hover:border-[#FF5A1F]/70 hover:bg-[#181B1E]'
                      : 'bg-[#141618] border-[#262A30] hover:border-neutral-500'
                  }`}
                >
                  {/* Top Bar inside card */}
                  <div>
                    <div className="flex items-center justify-between gap-2 pb-4 border-b border-white/5 mb-5">
                      <span className="text-xs font-mono tracking-widest uppercase text-neutral-400">
                        {team.code}
                      </span>

                      {isOpenRecruitment ? (
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#FF5A1F]">
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>ОТКРЫТЫЙ НАБОР</span>
                        </span>
                      ) : isSupplementary ? (
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-400">
                          <UserPlus className="w-3.5 h-3.5" />
                          <span>ИДЁТ ДОБОР</span>
                        </span>
                      ) : (
                        <span className="text-xs text-neutral-400 tracking-wider">
                          {team.ageSpan}
                        </span>
                      )}
                    </div>

                    {/* Prominent Birth Years Headline */}
                    <h3 className="text-3xl sm:text-4xl font-bold text-white font-display tracking-tight mb-2">
                      {team.birthYears}
                    </h3>

                    {isOpenRecruitment && (
                      <div className="mb-4 text-xs font-semibold text-white flex items-center gap-2">
                        <span className="w-2 h-2 bg-[#FF5A1F] rounded-full shrink-0" />
                        <span>{team.recruitmentNote || "Открытый набор детей от 3 лет"}</span>
                      </div>
                    )}

                    {isSupplementary && (
                      <div className="mb-4 text-xs font-semibold text-amber-300/90 flex items-center gap-2">
                        <span className="w-2 h-2 bg-amber-400 rounded-full shrink-0 animate-pulse" />
                        <span>{team.recruitmentNote || "Идёт добор в состав"}</span>
                      </div>
                    )}

                    {!isOpenRecruitment && !isSupplementary && team.recruitmentNote && (
                      <div className="mb-4 text-xs text-neutral-400 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-neutral-500 rounded-full shrink-0" />
                        <span>{team.recruitmentNote}</span>
                      </div>
                    )}

                    <p className="text-sm text-neutral-300 leading-relaxed mb-8">
                      {team.description}
                    </p>
                  </div>

                  {/* Bottom Card Action with arrow micro-nudge */}
                  <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => onSelectTeamForInquiry(team)}
                      className={`group/btn inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider transition-colors duration-200 cursor-pointer ${
                        isOpenRecruitment
                          ? 'text-[#FF5A1F] hover:text-white'
                          : isSupplementary
                          ? 'text-amber-400 hover:text-white'
                          : 'text-neutral-300 hover:text-white'
                      }`}
                      aria-label={`Уточнить информацию по группе ${team.birthYears}`}
                    >
                      <span>
                        {isOpenRecruitment
                          ? 'Записаться в группу'
                          : isSupplementary
                          ? 'Записаться на добор'
                          : 'Уточнить информацию'}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-1" />
                    </button>

                    <span className="text-[11px] font-mono text-neutral-400 tabular-nums">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Corner accents */}
                  {isOpenRecruitment && (
                    <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#FF5A1F]" />
                  )}
                  {isSupplementary && (
                    <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t-2 border-r-2 border-amber-400/60" />
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Clarification banner */}
        <ScrollReveal delayMs={150} className="mt-10">
          <div className="p-5 bg-[#151719] border border-[#262A30] flex items-center gap-3 text-xs text-neutral-400 transition-colors duration-200 hover:border-neutral-600">
            <HelpCircle className="w-4 h-4 text-[#FF5A1F] shrink-0" />
            <p>
              В ДСК «Автодор» открыт набор для детей с 3 лет (группа 2023 г. р.), а также ведётся добор во все группы 2017–2022 гг. р. Посещение пробных тренировок и порядок зачисления согласуются с клубом.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
