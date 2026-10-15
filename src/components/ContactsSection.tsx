import React from 'react';
import { CLUB_CONTACTS, TeamGroup } from '../config/clubData';
import { Phone, Send, Instagram, MapPin, Globe, CheckCircle2, AlertCircle } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface ContactsSectionProps {
  selectedTeam: TeamGroup | null;
  onClearSelectedTeam: () => void;
}

export const ContactsSection: React.FC<ContactsSectionProps> = ({
  selectedTeam,
  onClearSelectedTeam,
}) => {
  const hasPhone = Boolean(CLUB_CONTACTS.phoneDisplay && CLUB_CONTACTS.phoneRaw);
  const hasTelegram = Boolean(CLUB_CONTACTS.telegramUrl);
  const hasInstagram = Boolean(CLUB_CONTACTS.instagramUrl);
  const hasVk = Boolean(CLUB_CONTACTS.vkUrl);
  const hasAnyDirectContact = hasPhone || hasTelegram || hasInstagram || hasVk;

  return (
    <section id="contacts" className="py-24 lg:py-32 bg-[#0A0B0D] border-t border-[#262A30]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Scroll Reveal */}
        <ScrollReveal className="max-w-3xl mb-14">
          <div className="flex items-center gap-3 text-xs uppercase tracking-widest font-semibold text-[#FF5A1F] mb-3">
            <span className="w-5 h-[2px] bg-[#FF5A1F]" />
            <span>Связь с клубом</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-display uppercase leading-tight mb-6">
            КОНТАКТЫ КЛУБА
          </h2>
          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
            По всем вопросам зачисления, записи на просмотр и открытым тренировкам
            обращайтесь к представителям клуба. Открыт набор в группу 2023 г. р. (от 3 лет) и добор в группы 2017–2022 гг. р.
          </p>
        </ScrollReveal>

        {/* Selected Team Inquiry Card (if parent clicked from Teams section) */}
        {selectedTeam && (
          <ScrollReveal delayMs={50} className="mb-10">
            <div className="p-5 bg-[#181B1F] border border-[#FF5A1F] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-all duration-200">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#FF5A1F] shrink-0" />
                <div>
                  <span className="text-xs uppercase tracking-wider text-neutral-400 font-mono block">
                    Запрос по возрастной группе
                  </span>
                  <span className="text-base sm:text-lg font-bold text-white font-display">
                    {selectedTeam.birthYears} ({selectedTeam.code}) —{' '}
                    <span className="text-[#FF5A1F]">
                      {selectedTeam.statusType === 'open' || selectedTeam.isOpenRecruitment
                        ? 'Открытый набор'
                        : selectedTeam.statusType === 'supplementary'
                        ? 'Идёт добор'
                        : 'Состав сформирован'}
                    </span>
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={onClearSelectedTeam}
                className="text-xs text-neutral-400 hover:text-white underline underline-offset-4 cursor-pointer transition-colors duration-200"
              >
                Сбросить выбор
              </button>
            </div>
          </ScrollReveal>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Contact Channels Box */}
          <ScrollReveal delayMs={60} className="lg:col-span-7">
            <div className="bg-[#141618] border border-[#262A30] p-7 sm:p-9 transition-colors duration-200 hover:border-neutral-600">
              <h3 className="text-xl sm:text-2xl font-bold text-white font-display uppercase mb-6 tracking-tight">
                Каналы связи
              </h3>

              {/* Prototype Status Notification if details are pending in config */}
              {!hasAnyDirectContact && (
                <div className="mb-8 p-4 bg-[#1B1E22] border border-[#2B3038] flex items-start gap-3 text-xs text-neutral-300">
                  <AlertCircle className="w-4 h-4 text-[#FF5A1F] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block mb-0.5">
                      Статус конфигурации контактов
                    </span>
                    <span>
                      Официальный номер телефона и прямые ссылки мессенджеров находятся в процессе
                      публикации. Ниже подготовлены проверенные интерфейсные слоты для их мгновенного подключения.
                    </span>
                  </div>
                </div>
              )}

              <div className="space-y-4">
                {/* Phone Slot */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-[#181B1F] border border-[#262A30] gap-3 transition-colors duration-200 hover:border-neutral-600">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 bg-[#121416] border border-[#262A30] flex items-center justify-center text-[#FF5A1F] shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-wider text-neutral-400 block font-mono">
                        Телефон клуба
                      </span>
                      <span className="text-sm sm:text-base font-bold text-white">
                        {hasPhone ? CLUB_CONTACTS.phoneDisplay : "Номер уточняется"}
                      </span>
                    </div>
                  </div>

                  {hasPhone ? (
                    <a
                      href={`tel:${CLUB_CONTACTS.phoneRaw}`}
                      className="inline-flex items-center justify-center px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#FF5A1F] hover:bg-[#E64C12] active:scale-[0.98] transition-all duration-200"
                    >
                      Позвонить
                    </a>
                  ) : (
                    <span className="text-xs text-neutral-400 italic px-2 py-1">
                      Слот подготовлен
                    </span>
                  )}
                </div>

                {/* Telegram Slot */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-[#181B1F] border border-[#262A30] gap-3 transition-colors duration-200 hover:border-neutral-600">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 bg-[#121416] border border-[#262A30] flex items-center justify-center text-[#FF5A1F] shrink-0">
                      <Send className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-wider text-neutral-400 block font-mono">
                        Telegram
                      </span>
                      <span className="text-sm font-semibold text-white">
                        {hasTelegram ? "Официальный канал / контакт" : "Ссылка уточняется"}
                      </span>
                    </div>
                  </div>

                  {hasTelegram ? (
                    <a
                      href={CLUB_CONTACTS.telegramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#1F2329] hover:bg-[#2B3038] border border-[#2B3038] active:scale-[0.98] transition-all duration-200"
                    >
                      Открыть чат
                    </a>
                  ) : (
                    <span className="text-xs text-neutral-400 italic px-2 py-1">
                      Слот подготовлен
                    </span>
                  )}
                </div>

                {/* Instagram Slot */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-[#181B1F] border border-[#262A30] gap-3 transition-colors duration-200 hover:border-neutral-600">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 bg-[#121416] border border-[#262A30] flex items-center justify-center text-[#FF5A1F] shrink-0">
                      <Instagram className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-wider text-neutral-400 block font-mono">
                        Instagram
                      </span>
                      <span className="text-sm font-semibold text-white">
                        {hasInstagram ? "@dck_avtodor" : "Ссылка уточняется"}
                      </span>
                    </div>
                  </div>

                  {hasInstagram ? (
                    <a
                      href={CLUB_CONTACTS.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#1F2329] hover:bg-[#2B3038] border border-[#2B3038] active:scale-[0.98] transition-all duration-200"
                    >
                      Перейти
                    </a>
                  ) : (
                    <span className="text-xs text-neutral-400 italic px-2 py-1">
                      Слот подготовлен
                    </span>
                  )}
                </div>

                {/* VKontakte Slot */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-[#181B1F] border border-[#262A30] gap-3 transition-colors duration-200 hover:border-neutral-600">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 bg-[#121416] border border-[#262A30] flex items-center justify-center text-[#FF5A1F] shrink-0">
                      <Globe className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-wider text-neutral-400 block font-mono">
                        Сообщество ВКонтакте
                      </span>
                      <span className="text-sm font-semibold text-white">
                        {hasVk ? "Клубная группа" : "Ссылка уточняется"}
                      </span>
                    </div>
                  </div>

                  {hasVk ? (
                    <a
                      href={CLUB_CONTACTS.vkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#1F2329] hover:bg-[#2B3038] border border-[#2B3038] active:scale-[0.98] transition-all duration-200"
                    >
                      Перейти
                    </a>
                  ) : (
                    <span className="text-xs text-neutral-400 italic px-2 py-1">
                      Слот подготовлен
                    </span>
                  )}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Confirmed Location & Recruitment Facts */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <ScrollReveal delayMs={120}>
              <div className="bg-[#141618] border border-[#262A30] p-7 sm:p-8 transition-colors duration-200 hover:border-neutral-600">
                <div className="flex items-center gap-3 text-xs uppercase tracking-widest font-semibold text-[#FF5A1F] mb-3">
                  <MapPin className="w-4 h-4 text-[#FF5A1F]" />
                  <span>География клуба</span>
                </div>
                <h3 className="text-2xl font-bold text-white font-display uppercase mb-2">
                  СМОЛЕНСК, РОССИЯ
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6">
                  Детский спортивный клуб «Автодор» базируется в Смоленске.{' '}
                  {CLUB_CONTACTS.addressNote}
                </p>

                <div className="border-t border-white/5 pt-5 space-y-3 text-xs text-neutral-400">
                  <div className="flex justify-between items-center gap-2">
                    <span className="shrink-0">Статус набора:</span>
                    <span className="font-semibold text-[#FF5A1F] uppercase text-right text-[11px] sm:text-xs">
                      Набор 2023 · Добор 2017–2022
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Минимальный возраст:</span>
                    <span className="font-semibold text-white">
                      От 3 лет
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Город проведения занятий:</span>
                    <span className="font-semibold text-white">
                      Смоленск
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </div>
    </section>
  );
};
