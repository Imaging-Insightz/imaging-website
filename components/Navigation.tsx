'use client';
import { useEffect, useRef, useState, useCallback } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/#about', label: 'About' },
  { href: '/#reports', label: 'Reports' },
  { href: '/#how', label: 'How it Works' },
  { href: '/team', label: 'Team' },
  { href: '/contact', label: 'Contact Us' },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Focus trap for mobile menu
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!open || e.key !== 'Tab' || !menuRef.current) return;
    const focusable = menuRef.current.querySelectorAll<HTMLElement>('a, button');
    if (focusable.length === 0) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }, [open]);

  useEffect(() => {
    if (open) {
      document.addEventListener('keydown', handleKeyDown);
      // Close on Escape
      const onEsc = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
      document.addEventListener('keydown', onEsc);
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        document.removeEventListener('keydown', onEsc);
      };
    }
  }, [open, handleKeyDown]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-navy-950/80 backdrop-blur-xl border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="container-x flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3 group">
          {/* Icon-only crop of the logo — shows just the colorful AI/brain/DNA mark */}
          <div
            className="w-12 h-12 sm:w-14 sm:h-14 bg-no-repeat transition-transform duration-300 group-hover:scale-110"
            style={{
              backgroundImage: 'url(/brand/logo.png)',
              backgroundSize: '230% auto',
              backgroundPosition: '12% center',
              filter: 'drop-shadow(0 0 12px rgba(20,184,166,0.55))',
            }}
            aria-label="ImagingInsight AI"
          />
          <div className="leading-tight">
            <div className="font-display font-bold text-base sm:text-xl tracking-tight">
              <span className="logo-shimmer">Imaging</span>
              <span className="text-teal-400">Insight</span>{' '}
              <span className="ai-pulse">AI</span>
            </div>
            <div className="text-[9px] sm:text-[10px] uppercase tracking-[0.18em] text-slate-400 mt-0.5 hidden sm:block">
              Radiogenomes AI™ Platform
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-slate-300 hover:text-teal-300 transition-colors relative group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-teal-400 group-hover:w-full transition-all" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="#contact" className="btn-primary text-sm py-2 px-5 hidden sm:inline-flex">
            Request Demo
          </a>
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div ref={menuRef} role="dialog" aria-label="Mobile navigation" className="lg:hidden bg-navy-950/95 backdrop-blur-xl border-t border-white/5">
          <div className="container-x py-6 flex flex-col gap-4">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-slate-200 hover:text-teal-300"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
