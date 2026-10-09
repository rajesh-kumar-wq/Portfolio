import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, MapPin, ChevronRight } from 'lucide-react';
import { workExperience, education } from '../data/timeline';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

function TimelineEntry({ entry, index }) {
  return (
    <motion.div
      variants={fadeUpVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      custom={index}
      className="timeline-card"
    >
      <div className="flex flex-col lg:flex-row lg:gap-12">
        {/* Left side */}
        <div className="lg:w-1/3 mb-6 lg:mb-0">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-light-text dark:bg-dark-accent text-white text-xs font-space font-medium tracking-wider mb-4">
            <Calendar size={12} />
            {entry.date}
          </div>
          <h3 className="font-playfair font-black text-xl md:text-2xl tracking-tight mb-2">
            {entry.company || entry.institution}
          </h3>
          <div className="flex items-center gap-2 text-light-muted dark:text-dark-muted">
            <MapPin size={12} />
            <span className="font-space text-[10px] tracking-[0.15em] uppercase">
              {entry.location}
            </span>
          </div>
        </div>

        {/* Right side */}
        <div className="lg:w-2/3">
          <p className="font-space text-[10px] tracking-[0.2em] text-light-muted dark:text-dark-muted uppercase mb-2">
            POSITION HELD
          </p>
          <h4 className="font-space font-bold text-base tracking-[0.1em] uppercase mb-6">
            {entry.position || entry.degree}
          </h4>
          <ul className="space-y-3">
            {entry.highlights.map((highlight, i) => (
              <li key={i} className="flex gap-3">
                <ChevronRight size={14} className="flex-shrink-0 mt-1 text-light-muted dark:text-dark-muted" />
                <span className="font-jakarta text-sm leading-relaxed text-light-muted dark:text-dark-muted">
                  {highlight}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export default function Timeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="timeline" ref={ref} className="relative py-24 md:py-32 grid-bg overflow-hidden">
      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="font-playfair font-black text-[8rem] md:text-[14rem] lg:text-[20rem] leading-none tracking-tight text-light-border/20 dark:text-dark-border/10">
          RECORD
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Section header */}
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="mb-6"
        >
          <p className="section-label flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-light-text dark:bg-dark-accent inline-block" />
            SECTION 04 / EXPERIENCE & EDUCATION
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
          <motion.h2
            variants={fadeUpVariant}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            custom={1}
            className="section-heading mb-6 lg:mb-0"
          >
            RECORD
          </motion.h2>
          <motion.p
            variants={fadeUpVariant}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            custom={2}
            className="font-space text-xs tracking-[0.15em] text-light-muted dark:text-dark-muted uppercase max-w-sm text-right"
          >
            EXPERIENCE AND ACADEMIC HISTORY
          </motion.p>
        </div>

        <div className="w-full h-px bg-light-border/50 dark:bg-dark-border/50 mb-12" />

        {/* Work Experience */}
        <div className="mb-16">
          <p className="section-label flex items-center gap-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
            WORK EXPERIENCE
          </p>
          <div className="space-y-6">
            {workExperience.map((entry, i) => (
              <TimelineEntry key={i} entry={entry} index={i} />
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-16">
          <p className="section-label flex items-center gap-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-blue-400 inline-block" />
            EDUCATION
          </p>
          <div className="space-y-6">
            {education.map((entry, i) => (
              <TimelineEntry key={i} entry={entry} index={i} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
