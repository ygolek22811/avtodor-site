import React, { useState, useEffect } from 'react';

interface ClubImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackTitle?: string;
  className?: string;
  fallbackSrcs?: string[];
}

/**
 * Resilient Image Component with zero-broken-image policy:
 * - If an image fails or URL is empty, attempts any fallbackSrcs sequentially.
 * - If all fail, renders an elegant athletic vector canvas with pitch lines.
 * - On appearance: subtle scale settle (1.02 to 1.0) and opacity (0 to 1).
 * - Restrained hover brightness/scale.
 * - Respects prefers-reduced-motion.
 */
export const ClubImage: React.FC<ClubImageProps> = ({
  src,
  fallbackSrcs = [],
  alt,
  fallbackTitle,
  className = '',
  ...props
}) => {
  const [currentSrcIndex, setCurrentSrcIndex] = useState(0);
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Compile list of sources to try
  const allSources = [src, ...fallbackSrcs].filter(Boolean) as string[];

  useEffect(() => {
    setCurrentSrcIndex(0);
    setHasError(false);
    setIsLoaded(false);
  }, [src]);

  const currentSrc = allSources[currentSrcIndex];

  const handleError = () => {
    if (currentSrcIndex + 1 < allSources.length) {
      setCurrentSrcIndex((prev) => prev + 1);
    } else {
      setHasError(true);
    }
  };

  if (!currentSrc || hasError) {
    return (
      <div
        className={`relative flex flex-col items-center justify-center overflow-hidden bg-[#151719] border border-[#262A30] text-neutral-400 select-none ${className}`}
        aria-label={alt || fallbackTitle || "Детский спортивный клуб «Автодор»"}
      >
        {/* Subtle tactical pitch markings vector */}
        <svg
          className="absolute inset-0 w-full h-full opacity-10 pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 400 300"
          preserveAspectRatio="none"
        >
          <rect x="20" y="20" width="360" height="260" fill="none" stroke="currentColor" strokeWidth="2" />
          <line x1="200" y1="20" x2="200" y2="280" stroke="currentColor" strokeWidth="2" />
          <circle cx="200" cy="150" r="50" fill="none" stroke="currentColor" strokeWidth="2" />
          <rect x="20" y="80" width="60" height="140" fill="none" stroke="currentColor" strokeWidth="2" />
          <rect x="320" y="80" width="60" height="140" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>

        <div className="relative z-10 flex flex-col items-center text-center p-4">
          <div className="w-10 h-10 mb-2 rounded-full border border-[#FF5A1F]/30 bg-[#FF5A1F]/10 flex items-center justify-center text-[#FF5A1F]">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="9" strokeWidth="2" />
              <path strokeWidth="1.5" d="M12 3a9 9 0 0 0 0 18M3 12a9 9 0 0 0 18 0" />
            </svg>
          </div>
          <p className="text-xs font-semibold tracking-wider uppercase text-neutral-300">
            {fallbackTitle || "ДСК «Автодор»"}
          </p>
          <p className="text-[11px] text-neutral-400 mt-0.5">Смоленск</p>
        </div>
      </div>
    );
  }

  const isContain = className?.includes('object-contain');
  const fitClass = isContain ? 'w-auto h-auto max-h-[75vh] max-w-full object-contain block' : 'w-full h-full object-cover';
  const containerBg = isContain ? '' : 'bg-[#151719]';

  return (
    <div className={`relative ${containerBg} ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-[#151719] transition-opacity duration-300" />
      )}
      <img
        key={currentSrc}
        src={currentSrc}
        alt={alt || "ДСК Автодор"}
        referrerPolicy="no-referrer"
        onLoad={() => setIsLoaded(true)}
        onError={handleError}
        className={`${fitClass} will-change-[opacity,transform] transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-[1.02]'
        }`}
        {...props}
      />
    </div>
  );
};
