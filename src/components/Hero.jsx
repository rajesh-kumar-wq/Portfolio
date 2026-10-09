import { motion } from 'framer-motion';
import { Code2, Globe, FileDown, ArrowRight, Mail } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden grid-bg">
      {/* Top info bar */}
      <div className="absolute top-24 left-0 right-0 px-6 md:px-12 lg:px-20 flex justify-between items-start z-10 hidden sm:flex">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="flex items-center gap-2 mb-1">
            <Code2 size={14} className="text-light-text dark:text-dark-accent" />
            <span className="font-space font-bold text-xs tracking-[0.15em] uppercase">
              PYTHON FULL STACK DEVELOPER
            </span>
          </div>
          <p className="font-space text-xs tracking-[0.12em] text-light-muted dark:text-dark-muted uppercase">
            REACT.JS / DJANGO / PYTHON
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-right"
        >
          <div className="flex items-center gap-2 mb-1 justify-end">
            <Globe size={14} className="text-light-text dark:text-dark-accent" />
            <span className="font-space font-bold text-xs tracking-[0.15em] uppercase">
              LOCATION & AVAILABILITY
            </span>
          </div>
          <p className="font-space text-xs tracking-[0.12em] text-light-muted dark:text-dark-muted uppercase">
            OPEN TO JUNIOR & FRESHER ROLES
          </p>
        </motion.div>
      </div>

      {/* Watermark background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="font-playfair font-black text-[12rem] md:text-[20rem] lg:text-[28rem] leading-none tracking-tight text-light-border/30 dark:text-dark-border/20 whitespace-nowrap"
        >
          PYTHON
        </motion.span>
      </div>

      {/* Geometric circle */}
      <div className="absolute left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="w-[300px] h-[300px] md:w-[450px] md:h-[450px] lg:w-[550px] lg:h-[550px] rounded-full border border-light-border/40 dark:border-dark-border/30"
        />
      </div>
      <div className="absolute left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.08, scale: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="w-[320px] h-[320px] md:w-[480px] md:h-[480px] lg:w-[580px] lg:h-[580px] rounded-full border border-light-border/30 dark:border-dark-border/20"
        />
      </div>

      {/* Portrait */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-[5] flex justify-center mt-12 md:mt-4"
      >
        <div className="relative w-[240px] h-[320px] md:w-[300px] md:h-[420px] lg:w-[360px] lg:h-[500px]">
          <img
            src="/hero-portrait.png"
            alt="Rajesh Kumar R."
            className="w-full h-full object-cover object-top"
            style={{
              maskImage: 'linear-gradient(to bottom, black 75%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 75%, transparent 100%)'
            }}
          />
        </div>
      </motion.div>

      {/* Name and CTA */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="relative z-10 text-center -mt-16 md:-mt-24 lg:-mt-28 pb-4 flex flex-col items-center"
      >
        <h1 className="font-playfair font-black text-[3.5rem] sm:text-[4.5rem] md:text-[6.5rem] lg:text-[8rem] leading-[0.85] tracking-tight italic mb-6 text-light-text dark:text-dark-text drop-shadow-md">
          RAJESH KUMAR R.
        </h1>

        <p className="font-space text-sm md:text-base font-bold tracking-[0.16em] uppercase mb-4 text-light-text dark:text-dark-accent">
          Python Full Stack Developer
        </p>
        <p className="font-jakarta text-sm md:text-base text-light-muted dark:text-dark-muted max-w-xl mx-auto mb-10 px-6">
          Early-career developer building practical web applications with Python, Django, REST APIs, React.js, and database integrations.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 px-6">
          <button
            onClick={() => scrollToSection('work')}
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-light-text text-white dark:bg-dark-accent font-space text-xs font-bold tracking-wider hover:scale-105 transition-transform"
          >
            VIEW PROJECTS
            <ArrowRight size={14} />
          </button>
          <a
            href="/Python Full Stack.pdf"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-light-bg/80 dark:bg-dark-bg/80 border border-light-border/50 dark:border-dark-border/50 font-space text-xs font-bold tracking-wider hover:bg-light-border/20 dark:hover:bg-dark-border/20 backdrop-blur-sm transition-all"
          >
            DOWNLOAD RESUME
            <FileDown size={14} />
          </a>
          <button
            onClick={() => scrollToSection('contact')}
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-light-bg/80 dark:bg-dark-bg/80 border border-light-border/50 dark:border-dark-border/50 font-space text-xs font-bold tracking-wider hover:bg-light-border/20 dark:hover:bg-dark-border/20 backdrop-blur-sm transition-all"
          >
            CONTACT ME
            <Mail size={14} />
          </button>
        </div>
      </motion.div>
    </section>
  );
}
