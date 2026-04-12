'use client';

import { useState, useEffect } from 'react';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#F5F0EA]/92 backdrop-blur-md shadow-[0_1px_0_var(--border)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-350 mx-auto px-8 md:px-16 lg:px-24 flex items-center justify-between h-18">
        <a
          href="#"
          className="font-serif text-[1.125rem] tracking-[-0.01em] text-[#1A1714] hover:text-[#8B5E3C] transition-colors duration-300"
        >
          Reuel Agyapong
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="label hover:text-[#1A1714] transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden relative w-7 h-5 flex flex-col justify-between"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-full h-px bg-[#1A1714] transition-all duration-300 origin-center ${
              menuOpen ? 'rotate-45 translate-y-[9px]' : ''
            }`}
          />
          <span
            className={`block w-full h-px bg-[#1A1714] transition-all duration-300 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-full h-px bg-[#1A1714] transition-all duration-300 origin-center ${
              menuOpen ? '-rotate-45 -translate-y-[9px]' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          menuOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-[#F5F0EA] border-t border-[#E0D8CE] px-6 py-8 flex flex-col gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="label text-sm hover:text-[#1A1714] transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
