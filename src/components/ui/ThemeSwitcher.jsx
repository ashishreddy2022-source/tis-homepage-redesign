import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('tis-theme') || 'light';
    }
    return 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('tis-theme', theme);
  }, [theme]);

  function toggle() {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  }

  return (
    <button
      onClick={toggle}
      className="relative flex items-center justify-center w-10 h-10 rounded-full bg-brand-100/60 hover:bg-brand-200/80 dark:bg-slate-700 dark:hover:bg-slate-600 transition-colors"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <motion.div
        key={theme}
        initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.25 }}
      >
        {theme === 'light' ? (
          <Moon className="w-5 h-5 text-brand-700" />
        ) : (
          <Sun className="w-5 h-5 text-gold-400" />
        )}
      </motion.div>
    </button>
  );
}
