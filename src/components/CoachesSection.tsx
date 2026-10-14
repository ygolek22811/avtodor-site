import React from 'react';
import { COACHES_STATUS, COACHES_LIST } from '../config/clubData';
import { Shield, Award, Users, UserCheck } from 'lucide-react';
import { ClubImage } from './ClubImage';
import { ScrollReveal } from './ScrollReveal';

export const CoachesSection: React.FC = () => {
  const isPublished = COACHES_STATUS.isProfilesPublished && COACHES_LIST.length > 0;

  return (
    <section id="coaches" className="py-24 lg:py-32 bg-[#0A0B0D] border-t border-[#262A30]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Scroll Reveal */}
        <ScrollReveal className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 text-xs uppercase tracking-widest font-semibold text-[#FF5A1F] mb-3">
            <span className="w-5 h-[2px] bg-[#FF5A1F]" />
            <span>Наставничество</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-display uppercase leading-tight mb-6">
            ТРЕНЕРСКИЙ ШТАБ
          </h2>
          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
            {COACHES_STATUS.leadMessage}
          </p>
        </ScrollReveal>

        {/* If real profiles are published in config */}
        {isPublished ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {COACHES_LIST.map((coach, idx) => (
              <ScrollReveal
                key={coach.id}
                delayMs={idx * 80}
                className="h-full"
              >
                <div className="bg-[#141618] border border-[#262A30] overflow-hidden group card-hover-subtle h-full flex flex-col justify-between hover:border-[#FF5A1F]/40">
                  <div>
                    <div className="aspect-4/3 relative bg-[#1B1E22] overflow-hidden">
                      {coach.photoUrl ? (
                        <ClubImage
                          src={coach.photoUrl}
                          alt={coach.name}
                          fallbackTitle={coach.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-b from-[#1C1F24] to-[#121417]">
                          <div className="w-14 h-14 rounded-full bg-[#262A30]/80 border border-white/10 flex items-center justify-center mb-2 group-hover:border-[#FF5A1F]/40 transition-colors">
                            <UserCheck className="w-7 h-7 text-[#FF5A1F]" />
                          </div>
                          <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">
                            ДСК «Автодор»
                          </span>
                        </div>
                      )}
                    </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white font-display uppercase mb-1">
                      {coach.name}
                    </h3>
                    <p className="text-xs text-[#FF5A1F] font-semibold uppercase tracking-wider mb-3">
                      {coach.role}
                    </p>
                    {coach.experience && (
                      <p className="text-xs text-neutral-400 mb-1">
                        {coach.experience}
                      </p>
                    )}
                    {coach.license && (
                      <p className="text-xs text-neutral-400 mb-4">
                        {coach.license}
                      </p>
                    )}
                    {coach.bio && (
                      <p className="text-xs text-neutral-300 leading-relaxed border-t border-white/5 pt-3">
                        {coach.bio}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </ScrollReveal>
            ))}
          </div>
        ) : (
          /* Elegant Academic Foundation Structure (Pre-filled structure ready for real staff) */
          <div>
            {/* 3 Core Principles of Club Coaching with Staggered Reveal */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <ScrollReveal delayMs={0} className="h-full">
                <div className="bg-[#141618] border border-[#262A30] p-6 sm:p-7 card-hover-subtle h-full hover:border-neutral-500">
                  <div className="w-10 h-10 rounded-none bg-[#1F2329] border border-[#2B3038] flex items-center justify-center text-[#FF5A1F] mb-5">
                    <Shield className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white font-display mb-2 uppercase">
                    {COACHES_STATUS.editorialPrinciples[0].title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                    {COACHES_STATUS.editorialPrinciples[0].text}
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delayMs={100} className="h-full">
                <div className="bg-[#141618] border border-[#262A30] p-6 sm:p-7 card-hover-subtle h-full hover:border-neutral-500">
                  <div className="w-10 h-10 rounded-none bg-[#1F2329] border border-[#2B3038] flex items-center justify-center text-[#FF5A1F] mb-5">
                    <Award className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white font-display mb-2 uppercase">
                    {COACHES_STATUS.editorialPrinciples[1].title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                    {COACHES_STATUS.editorialPrinciples[1].text}
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delayMs={200} className="h-full">
                <div className="bg-[#141618] border border-[#262A30] p-6 sm:p-7 card-hover-subtle h-full hover:border-neutral-500">
                  <div className="w-10 h-10 rounded-none bg-[#1F2329] border border-[#2B3038] flex items-center justify-center text-[#FF5A1F] mb-5">
                    <Users className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white font-display mb-2 uppercase">
                    {COACHES_STATUS.editorialPrinciples[2].title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                    {COACHES_STATUS.editorialPrinciples[2].text}
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Dignified Pending Structure Banner */}
            <ScrollReveal delayMs={150}>
              <div className="border border-[#262A30] bg-[#121416] p-8 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 transition-colors duration-200 hover:border-neutral-700">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 bg-[#FF5A1F]" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-neutral-300">
                      Статус публикации персональных карточек
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-display uppercase tracking-tight mb-2">
                    Формирование официального реестра наставников
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    Персональные профили тренеров с подтверждёнными лицензиями, спортивным стажем
                    и закреплёнными возрастными группами будут опубликованы в данном разделе после завершения
                    аккредитации клуба.
                  </p>
                </div>

                <div className="shrink-0 border border-[#262A30] bg-[#181B1F] px-5 py-3 text-xs text-neutral-400">
                  <span className="text-white font-medium block">
                    ДСК «Автодор»
                  </span>
                  <span>Смоленск · Россия</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        )}
      </div>
    </section>
  );
};
