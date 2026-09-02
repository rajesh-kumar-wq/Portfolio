import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Globe, Terminal, ExternalLink } from 'lucide-react';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

const stats = [
  { value: '4+', label: 'COMPLETED PROJECTS' },
  { value: 'B.Sc.', label: 'COMPUTER SCIENCE' },
  { value: '2025', label: 'GRADUATION YEAR' },
  { value: '10+', label: 'CORE TECH STACK' },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" ref={ref} className="relative bg-dark-bg text-dark-text pt-12 pb-24 md:pt-16 md:pb-32 overflow-hidden">
      {/* Watermark */}
      <div className="absolute top-0 left-0 pointer-events-none select-none">
        <span className="font-playfair font-black text-[8rem] md:text-[14rem] lg:text-[18rem] leading-none tracking-tight text-dark-border/10 block"
              style={{ writingMode: 'vertical-lr' }}>
          ABOUT
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Section label */}
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="mb-12"
        >
          <p className="section-label text-dark-muted flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-dark-muted inline-block" />
            SECTION 01 / BIOGRAPHY & PHILOSOPHY
          </p>
        </motion.div>

        {/* Professional summary */}
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          custom={1}
          className="mb-16"
        >
          <p className="font-space text-xs tracking-[0.2em] text-amber-400 mb-6">// PROFESSIONAL SUMMARY</p>
          <div className="border-l-2 border-amber-400 pl-8 md:pl-12">
            <p className="font-jakarta text-xl md:text-2xl lg:text-3xl leading-relaxed text-dark-text/90 font-light">
              "I am a passionate Python Full Stack Developer and a B.Sc. Computer Science graduate with hands-on experience building responsive and scalable web applications, including a 3-month internship at NIM Technologies. I specialize in integrating robust backend logic with Django and Python alongside dynamic, user-friendly frontend interfaces using React.js and Tailwind CSS."
            </p>
          </div>
        </motion.div>

        {/* Feature cards */}
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          custom={2}
          className="grid md:grid-cols-2 gap-6 mb-16"
        >
          <div className="bg-dark-card/80 rounded-2xl p-8 border border-dark-border/50 hover:border-dark-border transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                <Globe size={18} className="text-emerald-400" />
              </div>
              <h3 className="font-space font-bold text-sm tracking-[0.1em] uppercase">
                FULL-STACK DEVELOPMENT
              </h3>
            </div>
            <p className="font-jakarta text-sm text-dark-muted leading-relaxed">
              Developing cohesive web applications by handling both frontend UI creation and backend database management with REST API integrations.
            </p>
          </div>

          <div className="bg-dark-card/80 rounded-2xl p-8 border border-dark-border/50 hover:border-dark-border transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-violet-500/10 flex items-center justify-center">
                <Terminal size={18} className="text-violet-400" />
              </div>
              <h3 className="font-space font-bold text-sm tracking-[0.1em] uppercase">
                PRACTICAL ENGINEERING
              </h3>
            </div>
            <p className="font-jakarta text-sm text-dark-muted leading-relaxed">
              Applying foundational computer science principles and programming logic to build clean, maintainable, and scalable code.
            </p>
          </div>
        </motion.div>

        {/* Career stats */}
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          custom={3}
          className="mb-16"
        >
          <p className="section-label text-dark-muted flex items-center gap-2 mb-6 justify-center">
            <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
            CAREER & ACADEMIC METRICS
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-dark-card/60 rounded-xl p-6 border border-dark-border/50 text-center">
                <p className="font-playfair font-black text-3xl md:text-4xl mb-2">{stat.value}</p>
                <p className="font-space text-[10px] tracking-[0.15em] text-dark-muted uppercase">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Resume CTA */}
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          custom={4}
          className="flex flex-col items-center"
        >
          {/* Avatar badge */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
              <span className="font-space font-bold text-white text-sm">RK</span>
            </div>
            <div>
              <p className="font-space font-bold text-sm tracking-wide">RAJESH KUMAR R.</p>
              <p className="font-space text-[10px] tracking-[0.12em] text-dark-muted uppercase">
                PYTHON FULL STACK DEVELOPER | REACT.JS · DJANGO
              </p>
            </div>
          </div>

          <a
            href="/Python Full Stack.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full border-2 border-dark-text text-dark-text
                       font-space font-medium text-xs tracking-[0.15em] uppercase
                       hover:bg-dark-text hover:text-dark-bg transition-all duration-300 group"
          >
            INSPECT CURRICULUM VITAE
            <ExternalLink size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
