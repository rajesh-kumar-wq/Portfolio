import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { projects, filterCategories } from '../data/projects';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Work() {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const filteredProjects = activeFilter === 'ALL'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="work" ref={ref} className="relative py-24 md:py-32 grid-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Section header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <p className="section-label flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-light-text dark:bg-dark-accent inline-block" />
              SECTION 02 / PORTFOLIO INDEX
            </p>
            <h2 className="section-heading">
              SELECTED<br />WORKS
            </h2>
          </motion.div>

          {/* Filter pills */}
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            custom={1}
            className="flex flex-wrap gap-3"
          >
            {filterCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`filter-pill ${activeFilter === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-light-border/50 dark:bg-dark-border/50 mb-12" />

        {/* Projects */}
        <div className="space-y-20">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={fadeUpVariant}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              custom={index + 2}
              className="grid lg:grid-cols-2 gap-8 items-start"
            >
              {/* Project preview */}
              <div className="relative group">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300 
                                dark:from-dark-card dark:to-dark-bg border border-light-border/50 dark:border-dark-border/50">
                  <img
                    src={project.image}
                    alt={`${project.title} project cover illustration`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
              </div>

              {/* Project info */}
              <div className="lg:pl-4">
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-playfair font-black text-3xl md:text-4xl tracking-tight">
                    [{project.id}]
                  </span>
                  <div className="flex items-center gap-3 ml-auto">
                    <span className="font-space text-xs tracking-[0.15em] text-light-muted dark:text-dark-muted uppercase">
                      {project.category}
                    </span>
                  </div>
                </div>

                <h3 className="font-playfair font-black text-2xl md:text-3xl tracking-tight mb-2">
                  {project.title}
                </h3>
                <p className="font-space text-[10px] tracking-[0.2em] text-light-muted dark:text-dark-muted uppercase mb-6">
                  {project.subtitle}
                </p>

                <p className="font-jakarta text-sm md:text-base leading-relaxed text-light-muted dark:text-dark-muted mb-8">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 rounded-full text-[10px] font-space font-medium tracking-wider 
                                 bg-light-text/5 dark:bg-dark-text/5 border border-light-border/30 dark:border-dark-border/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.links.length > 0 && (
                  <div className="flex flex-wrap gap-x-6 gap-y-3">
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-space text-xs tracking-[0.15em] uppercase
                                   hover:text-light-muted dark:hover:text-dark-accent transition-colors group"
                      >
                        {link.label}
                        <ExternalLink size={12} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
