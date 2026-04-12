'use client';

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  type ReactNode,
} from 'react';
import Image from 'next/image';

interface LightboxContextType {
  open: (src: string, alt: string) => void;
}

const LightboxContext = createContext<LightboxContextType>({
  open: () => {},
});

export function LightboxProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [src, setSrc] = useState('');
  const [alt, setAlt] = useState('');

  const open = useCallback((imgSrc: string, imgAlt: string) => {
    setSrc(imgSrc);
    setAlt(imgAlt);
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
    document.body.style.overflow = '';
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, close]);

  return (
    <LightboxContext.Provider value={{ open }}>
      {children}

      {isOpen && (
        <div
          className="fixed inset-0 z-[9998] flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-label={alt}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-[#1A1714]/95 animate-fade-in cursor-zoom-out"
            onClick={close}
          />

          {/* Image */}
          <div className="relative w-[90vw] h-[85vh] animate-fade-up z-10 pointer-events-none">
            <Image
              src={src}
              alt={alt}
              fill
              className="object-contain"
              sizes="90vw"
              priority
            />
          </div>

          {/* Close button */}
          <button
            onClick={close}
            className="absolute top-6 right-6 z-10 text-[#C4B8A8] hover:text-[#F5F0EA] transition-colors duration-300"
            aria-label="Close lightbox"
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* Caption */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
            <span className="text-[#C4B8A8] text-xs tracking-wide">
              {alt}
            </span>
          </div>
        </div>
      )}
    </LightboxContext.Provider>
  );
}

export function LightboxTrigger({
  src,
  alt,
  children,
  className = '',
}: {
  src: string;
  alt: string;
  children: ReactNode;
  className?: string;
}) {
  const { open } = useContext(LightboxContext);

  return (
    <div
      onClick={() => open(src, alt)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          open(src, alt);
        }
      }}
      role="button"
      tabIndex={0}
      className={`cursor-zoom-in ${className}`}
      aria-label={`View ${alt}`}
    >
      {children}
    </div>
  );
}
