import React, { useState } from 'react';
import { CLUB_GALLERY, ClubMediaItem } from '../config/clubData';
import { ClubImage } from './ClubImage';
import { Maximize2, X } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const ClubLifeSection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<ClubMediaItem | null>(null);

  return (
    <section id="club-life" className="py-24 lg:py-32 bg-[#0A0B0D] border-t border-[#262A30]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Scroll Reveal */}
        <ScrollReveal className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 text-xs uppercase tracking-widest font-semibold text-[#FF5A1F] mb-3">
            <span className="w-5 h-[2px] bg-[#FF5A1F]" />
            <span>Атмосфера клуба</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-display uppercase leading-tight">
            ЖИЗНЬ КЛУБА
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-300 leading-relaxed">
            Тренировочные сборы, отработка игровых эпизодов, первые победы и спортивная дисциплина.
            Каждый день в футбольной школе развивает координацию, характер и любовь к игре.
          </p>
        </ScrollReveal>

        {/* Gallery Bento / Asymmetric Mosaic Grid with Staggered Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {CLUB_GALLERY.map((item, index) => {
            // Asymmetric grid layout
            const colSpan =
              index === 0
                ? 'md:col-span-7 aspect-16/10'
                : index === 1
                ? 'md:col-span-5 aspect-4/3'
                : index === 2
                ? 'md:col-span-4 aspect-4/3'
                : index === 3
                ? 'md:col-span-4 aspect-4/3'
                : 'md:col-span-4 aspect-4/3';

            return (
              <ScrollReveal
                key={item.id}
                delayMs={index * 80}
                className={colSpan}
              >
                <div
                  onClick={() => setSelectedImage(item)}
                  className="group relative h-full w-full overflow-hidden bg-[#141618] border border-[#262A30] cursor-pointer transition-colors duration-200 hover:border-[#FF5A1F]/50"
                >
                  <ClubImage
                    src={item.imageUrl}
                    fallbackSrcs={item.fallbackUrls}
                    alt={item.title}
                    fallbackTitle={item.title}
                    className="w-full h-full object-cover transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.025] group-hover:brightness-[1.04]"
                  />

                  {/* Scrim Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B0D]/90 via-[#0A0B0D]/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                  {/* Overlaid Title & Category */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between">
                    <div>
                      <span className="text-[11px] uppercase tracking-wider font-semibold text-[#FF5A1F] block mb-1">
                        {item.category}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-white font-display uppercase tracking-tight">
                        {item.title}
                      </h3>
                    </div>

                    <div className="w-8 h-8 rounded-none bg-black/60 border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <Maximize2 className="w-4 h-4 text-[#FF5A1F]" />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Note on Gallery Replacement */}
        <ScrollReveal delayMs={120} className="mt-8 text-center text-xs text-neutral-400">
          Фотоархив клуба ДСК «Автодор» регулярно дополняется фотоматериалами с открытых занятий и турниров.
        </ScrollReveal>
      </div>

      {/* Lightbox Modal with smooth entry */}
      {selectedImage && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-[#0A0B0D]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 transition-opacity duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative w-auto max-w-[95vw] mx-auto bg-[#151719] border border-[#262A30] p-3 sm:p-4 shadow-2xl transition-transform duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3 gap-6">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#FF5A1F] font-semibold">
                  {selectedImage.category}
                </span>
                <h4 className="text-lg font-bold text-white font-display uppercase">
                  {selectedImage.title}
                </h4>
              </div>
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="p-2 text-neutral-400 hover:text-white transition-colors duration-200 cursor-pointer"
                aria-label="Закрыть изображение"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="relative flex justify-center">
              <ClubImage
                src={selectedImage.imageUrl}
                fallbackSrcs={selectedImage.fallbackUrls}
                alt={selectedImage.title}
                fallbackTitle={selectedImage.title}
                className="w-auto h-auto max-h-[75vh] max-w-full object-contain"
              />
            </div>

            <div className="mt-3 flex items-center justify-between text-xs text-neutral-400 gap-4">
              <span>ДСК «Автодор» · Смоленск</span>
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="text-[#FF5A1F] hover:underline cursor-pointer transition-colors duration-200"
              >
                Закрыть просмотр
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
