import { CLUB_INFO, CLUB_CONTACTS, NAV_LINKS } from '../config/clubData';
import { ArrowUp, Instagram, Send, Globe, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#07080A] border-t border-[#1E2124] text-neutral-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 pb-12 border-b border-white/5">
          {/* Brand Wordmark & Location */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 bg-[#FF5A1F] rounded-xs" />
              <span className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-display uppercase">
                {CLUB_INFO.brandShort}
              </span>
            </div>
            <p className="text-xs text-neutral-400 max-w-sm">
              Детский спортивный клуб «Автодор». Футбольная среда развития юных игроков с трёх лет.{' '}
              {CLUB_INFO.city}, Россия.
            </p>
          </div>

          {/* Navigation Mirrors */}
          <nav className="flex flex-wrap items-center gap-6 text-xs uppercase tracking-wider font-semibold">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Scroll to top button with arrow micro-nudge */}
          <button
            type="button"
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-xs uppercase tracking-wider text-neutral-400 hover:text-white transition-colors duration-200 cursor-pointer"
            aria-label="Вернуться наверх"
          >
            <span>Наверх</span>
            <ArrowUp className="w-4 h-4 text-[#FF5A1F] transition-transform duration-200 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Social Links & Contact Row */}
        <div className="py-6 border-b border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-wider text-neutral-400 font-mono">
              Мы в сети:
            </span>
            <div className="flex items-center gap-2">
              {CLUB_CONTACTS.telegramUrl && (
                <a
                  href={CLUB_CONTACTS.telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-[#141618] border border-[#262A30] hover:border-[#FF5A1F] hover:text-[#FF5A1F] text-neutral-300 flex items-center justify-center transition-all duration-200"
                  aria-label="Telegram"
                >
                  <Send className="w-4 h-4" />
                </a>
              )}
              {CLUB_CONTACTS.instagramUrl && (
                <a
                  href={CLUB_CONTACTS.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-[#141618] border border-[#262A30] hover:border-[#FF5A1F] hover:text-[#FF5A1F] text-neutral-300 flex items-center justify-center transition-all duration-200"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              )}
              {CLUB_CONTACTS.vkUrl && (
                <a
                  href={CLUB_CONTACTS.vkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-[#141618] border border-[#262A30] hover:border-[#FF5A1F] hover:text-[#FF5A1F] text-neutral-300 flex items-center justify-center transition-all duration-200"
                  aria-label="ВКонтакте"
                >
                  <Globe className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {CLUB_CONTACTS.phoneDisplay && (
            <a
              href={`tel:${CLUB_CONTACTS.phoneRaw}`}
              className="inline-flex items-center gap-2 text-xs font-mono text-neutral-300 hover:text-[#FF5A1F] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#FF5A1F]" />
              <span className="font-bold tracking-wider">{CLUB_CONTACTS.phoneDisplay}</span>
            </a>
          )}
        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-neutral-400">
          <p>© {new Date().getFullYear()} ДСК «Автодор» (Смоленск). Все права защищены.</p>
          <p className="text-neutral-400">
            Официальный сайт детского футбольного клуба
          </p>
        </div>
      </div>
    </footer>
  );
};
