import { AnimatePresence, motion } from 'framer-motion';
import { GraduationCap, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { navigation } from '../../data/content';
import Button from '../ui/Button';
import ThemeSwitcher from '../ui/ThemeSwitcher';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-md shadow-sm border-b border-brand-100/20'
          : 'bg-transparent'
      }`}
      style={scrolled ? { backgroundColor: 'color-mix(in srgb, var(--bg) 95%, transparent)' } : undefined}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2.5 shrink-0" aria-label="TIS Home">
            <GraduationCap className={`w-8 h-8 ${scrolled ? 'text-brand-700' : 'text-white'}`} />
            <div className="leading-tight">
              <span className={`block text-lg font-heading font-bold ${scrolled ? 'text-[var(--fg)]' : 'text-white'}`}>TIS</span>
              <span className={`block text-[10px] tracking-wider uppercase ${scrolled ? 'text-[var(--fg-muted)]' : 'text-white/60'}`}>Tulas International School</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    scrolled
                      ? 'text-[var(--fg-secondary)] hover:text-brand-700 hover:bg-brand-50/60'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <ThemeSwitcher />
            <Button href="#admissions" size="sm" className="hidden md:inline-flex">
              Apply Now
            </Button>

            {/* Mobile Toggle */}
            <button
              className={`lg:hidden flex items-center justify-center w-10 h-10 rounded-md transition-colors ${
                scrolled ? 'hover:bg-brand-50' : 'text-white hover:bg-white/10'
              }`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Nav Panel */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="lg:hidden fixed inset-0 top-16 bg-[var(--bg)] z-40"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <nav className="px-6 py-8 flex flex-col gap-2" aria-label="Mobile navigation">
              {navigation.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-3 text-lg font-medium text-[var(--fg)] hover:bg-brand-50/60 rounded-lg transition-colors"
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  {item.label}
                </motion.a>
              ))}
              <div className="mt-6 px-4">
                <Button href="#admissions" size="lg" className="w-full" onClick={() => setMobileOpen(false)}>
                  Apply Now
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
