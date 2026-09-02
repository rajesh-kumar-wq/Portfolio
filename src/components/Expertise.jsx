import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Monitor, Server, Database, Brain, CheckCircle2 } from 'lucide-react';
import { expertiseData } from '../data/expertise';

const iconMap = {
  Monitor: Monitor,
  Server: Server,
  Database: Database,
  Brain: Brain,
};

const iconColors = {
  'SK-01': { bg: 'bg-blue-500/10', text: 'text-blue-400' },
  'SK-02': { bg: 'bg-emerald-500/10', text: 'text-emerald-400' },
  'SK-03': { bg: 'bg-amber-500/10', text: 'text-amber-400' },
  'SK-04': { bg: 'bg-violet-500/10', text: 'text-violet-400' },
};

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Expertise() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="expertise" ref={ref} className="relative bg-dark-bg text-dark-text py-24 md:py-32 overflow-hidden">
      {/* Grid bg */}
      <div className="absolute inset-0 grid-bg" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Section header */}
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="mb-16"
        >
          <p className="section-label text-dark-muted flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-dark-muted inline-block" />
            SECTION 03 / CORE COMPETENCIES
          </p>
          <h2 className="section-heading text-dark-text">
            EXPERTISE
          </h2>
        </motion.div>

        {/* Expertise grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {expertiseData.map((item, index) => {
            const IconComponent = iconMap[item.icon];
            const colors = iconColors[item.id];

            return (
              <motion.div
                key={item.id}
                variants={fadeUpVariant}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                custom={index + 1}
                className="bg-dark-card/80 rounded-2xl p-8 border border-dark-border/50 hover:border-dark-border 
                           transition-all duration-300 hover:-translate-y-1"
              >
                {/* Card header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg ${colors.bg} flex items-center justify-center`}>
                      <IconComponent size={18} className={colors.text} />
                    </div>
                    <span className="font-space font-bold text-sm tracking-[0.1em]">{item.id}</span>
                  </div>
                  <span className="font-space text-[10px] tracking-[0.2em] text-dark-muted uppercase">
                    SPECIFICATION
                  </span>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-dark-border/50 mb-6" />

                {/* Title & description */}
                <h3 className="font-playfair font-black text-xl md:text-2xl tracking-tight mb-3 italic">
                  {item.title}
                </h3>
                <p className="font-jakarta text-sm text-dark-muted leading-relaxed mb-8">
                  {item.description}
                </p>

                {/* Divider */}
                <div className="w-full h-px bg-dark-border/50 mb-6" />

                {/* Technologies */}
                <p className="font-space text-[10px] tracking-[0.2em] text-dark-muted uppercase mb-4">
                  CORE TECHNOLOGIES & CONCEPTS
                </p>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                  {item.technologies.map((tech) => (
                    <div key={tech} className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-emerald-400 flex-shrink-0" />
                      <span className="font-space text-xs tracking-wide">{tech}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
