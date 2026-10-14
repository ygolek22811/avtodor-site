import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  durationMs?: number;
  type?: 'fade-up' | 'scale-settle';
}

/**
 * High-performance, lightweight ScrollReveal component.
 * - Uses native IntersectionObserver with threshold & rootMargin.
 * - Fires once when scrolled into view.
 * - Disconnects observer immediately after triggering to save CPU.
 * - Respects prefers-reduced-motion.
 * - Compositor-only properties (opacity, transform).
 * - Fallback safety timeout ensures content is NEVER stuck invisible.
 */
export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  delayMs = 0,
  durationMs = 600,
  type = 'fade-up',
  style,
  ...rest
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 1. Accessibility check: if user prefers reduced motion, show immediately
    if (
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setIsVisible(true);
      return;
    }

    // 2. Fallback check: if IntersectionObserver is unavailable
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const node = ref.current;
    if (!node) return;

    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
          if (timeoutId) clearTimeout(timeoutId);
        }
      },
      {
        root: null,
        rootMargin: '0px 0px -40px 0px',
        threshold: 0.08,
      }
    );

    observer.observe(node);

    // 3. Robust safety net: if element is somehow never triggered,
    // ensure it displays within 2.5s so content is never lost.
    timeoutId = setTimeout(() => {
      setIsVisible(true);
      observer.disconnect();
    }, 2500);

    return () => {
      observer.disconnect();
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  const getAnimationStyles = (): React.CSSProperties => {
    const baseTransition = `opacity ${durationMs}ms cubic-bezier(0.16, 1, 0.3, 1), transform ${durationMs}ms cubic-bezier(0.16, 1, 0.3, 1)`;

    if (type === 'scale-settle') {
      return {
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'scale(1)' : 'scale(1.02)',
        transition: baseTransition,
        transitionDelay: `${delayMs}ms`,
        willChange: isVisible ? 'auto' : 'opacity, transform',
        ...style,
      };
    }

    // Default 'fade-up'
    return {
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
      transition: baseTransition,
      transitionDelay: `${delayMs}ms`,
      willChange: isVisible ? 'auto' : 'opacity, transform',
      ...style,
    };
  };

  return (
    <div
      ref={ref}
      className={className}
      style={getAnimationStyles()}
      {...rest}
    >
      {children}
    </div>
  );
};
