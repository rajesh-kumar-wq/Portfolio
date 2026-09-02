import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const navLinks = [
  { label: 'ABOUT', href: '#about' },
  { label: 'WORK', href: '#work' },
  { label: 'EXPERTISE', href: '#expertise' },
  { label: 'TIMELINE', href: '#timeline' },
  { label: 'CONTACT', href: '#contact' },
];

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0, x: "-50%" }}
      animate={{ y: 0, opacity: 1, x: "-50%" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-4 left-1/2 z-50 w-[95%] max-w-[1400px] transition-all duration-500 ${
        scrolled ? 'top-3' : 'top-4'
      }`}
    >
      <nav className="glass-nav rounded-full px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center overflow-hidden">
            <svg viewBox="0 0 36 36" className="w-7 h-7" fill="none">
              <path d="M8 28L18 8L28 28" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 22L18 12L24 22" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-syne font-extrabold text-lg tracking-tight uppercase leading-none">
              RAJESH KUMAR R.
            </span>
            <span className="font-space text-[9px] tracking-[0.2em] text-light-muted dark:text-dark-muted font-medium mt-0.5">
              PYTHON FULL STACK DEV
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link, i) => (
            <div key={link.label} className="flex items-center">
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-4 py-2 font-space text-xs tracking-[0.15em] text-light-text dark:text-dark-text 
                           hover:text-light-muted dark:hover:text-dark-muted transition-colors duration-300
                           relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-light-text dark:bg-dark-accent 
                                 group-hover:w-3/4 transition-all duration-300" />
              </a>
              {i < navLinks.length - 1 && (
                <span className="text-light-border dark:text-dark-border text-xs mx-1">/</span>
              )}
            </div>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-full border border-light-border/50 dark:border-dark-border/50
                       flex items-center justify-center hover:bg-light-text hover:text-white 
                       dark:hover:bg-dark-accent transition-all duration-300"
            aria-label="Toggle theme"
          >
            <AnimatePresence mode="wait">
              {isDark ? (
                <motion.div key="sun" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Sun size={16} />
                </motion.div>
              ) : (
                <motion.div key="moon" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Moon size={16} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden w-10 h-10 rounded-full border border-light-border/50 dark:border-dark-border/50
                       flex items-center justify-center hover:bg-light-text hover:text-white 
                       dark:hover:bg-dark-accent transition-all duration-300"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -20, height: 0 }}
            transition={{ duration: 0.3 }}
            className="glass-nav rounded-3xl mt-3 px-6 py-6 lg:hidden overflow-hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="font-space text-sm tracking-[0.15em] text-light-text dark:text-dark-text 
                             hover:text-light-muted dark:hover:text-dark-muted transition-colors py-2 border-b border-light-border/30 dark:border-dark-border/30"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
