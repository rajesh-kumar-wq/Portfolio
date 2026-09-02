import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Archive } from 'lucide-react';

export default function ScrollIndicator() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY < 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollDown = () => {
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 left-0 right-0 px-6 md:px-12 lg:px-20 flex justify-between items-end z-40 pointer-events-none"
        >
          {/* Left — archive label */}
          <div className="pointer-events-auto">
            <div className="flex items-center gap-2 text-light-muted dark:text-dark-muted">
              <Archive size={12} />
              <div>
                <p className="font-space text-[10px] tracking-[0.15em] uppercase font-medium">SELECTED WORKS</p>
                <p className="font-space text-[9px] tracking-[0.12em] uppercase opacity-60">VOL. 2024 — 2026 ARCHIVE</p>
              </div>
            </div>
          </div>

          {/* Right — scroll down */}
          <button
            onClick={scrollDown}
            className="pointer-events-auto flex items-center gap-2 group"
          >
            <span className="font-space text-[10px] tracking-[0.15em] text-light-muted dark:text-dark-muted uppercase">
              SCROLL DOWN
            </span>
            <div className="w-8 h-8 rounded-full border border-light-border/50 dark:border-dark-border/50 
                          flex items-center justify-center group-hover:bg-light-text group-hover:text-white 
                          dark:group-hover:bg-dark-accent transition-all duration-300">
              <ChevronDown size={14} className="animate-bounce" />
            </div>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
