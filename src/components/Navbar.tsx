import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { CLUB_INFO, NAV_LINKS } from '../config/clubData';

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          isScrolled
            ? 'bg-[#0A0B0D]/95 backdrop-blur-md border-b border-[#262A30]/80 py-3.5 shadow-2xl shadow-black/50'
            : 'bg-[#0A0B0D]/70 backdrop-blur-sm border-b border-white/5 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Strictly 1-Row, 3-Zone Top Bar Contract */}
          <div className="flex items-center justify-between gap-4 lg:gap-6 xl:gap-8">
            {/* Zone 1: Single text element wordmark */}
            <a
              href="#"
              className="text-xl sm:text-2xl font-bold tracking-tight text-white hover:text-[#FF5A1F] transition-colors duration-200 whitespace-nowrap shrink-0 font-display flex items-center gap-2 group"
              aria-label={CLUB_INFO.brandFull}
            >
              <span className="w-2.5 h-2.5 bg-[#FF5A1F] rounded-xs inline-block transition-transform duration-200 group-hover:scale-110"></span>
              <span>{CLUB_INFO.brandShort}</span>
            </a>

            {/* Zone 2: single-line clean nav links */}
            <nav className="hidden lg:flex items-center gap-3 xl:gap-5 2xl:gap-7 text-[11px] xl:text-xs uppercase tracking-wider xl:tracking-widest font-semibold text-neutral-300">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className="relative pb-1 text-neutral-300 hover:text-white transition-colors duration-200 whitespace-nowrap shrink-0 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#FF5A1F] hover:after:w-full after:transition-[width] after:duration-200 after:ease-out"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Zone 3: 1 primary action */}
            <div className="flex items-center gap-3 shrink-0">
              <a
                href="#contacts"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('#contacts');
                }}
                className="group hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold tracking-wider uppercase text-white bg-[#FF5A1F] hover:bg-[#E64C12] active:scale-[0.98] transition-all duration-200 rounded-none shadow-sm whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>Контакты</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              {/* Mobile menu toggle button */}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-neutral-200 hover:text-white focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#FF5A1F] transition-colors duration-200"
                aria-label={isMobileMenuOpen ? "Закрыть меню" : "Открыть меню"}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden bg-[#0A0B0D]/98 backdrop-blur-xl pt-24 px-6 pb-8 flex flex-col justify-between animate-[fadeIn_200ms_ease-out]">
          <nav className="flex flex-col gap-5">
            <span className="text-[11px] uppercase tracking-widest text-[#FF5A1F] font-semibold">
              Навигация по клубу
            </span>
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="text-2xl font-bold tracking-tight text-white hover:text-[#FF5A1F] transition-colors duration-200 py-2 font-display uppercase border-b border-white/5"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-6 border-t border-white/10 flex flex-col gap-4">
            <div className="text-xs text-neutral-400">
              <p className="font-semibold text-white">{CLUB_INFO.brandFull}</p>
              <p>{CLUB_INFO.city}, Россия</p>
            </div>
            <a
              href="#contacts"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#contacts');
              }}
              className="w-full text-center py-3.5 text-xs font-semibold tracking-wider uppercase text-white bg-[#FF5A1F] hover:bg-[#E64C12] active:scale-[0.99] transition-all duration-200"
            >
              Перейти к контактам
            </a>
          </div>
        </div>
      )}
    </>
  );
};
