import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Clock, ExternalLink, FileText, Send } from 'lucide-react';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

function LiveClock() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setTime(now.toLocaleTimeString('en-US', options) + ' IST');
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="inline-flex items-center gap-3 px-5 py-3 rounded-xl border border-light-border/50 dark:border-dark-border/50 
                    bg-white/50 dark:bg-dark-card/50 backdrop-blur-sm">
      <Clock size={14} className="text-amber-500" />
      <div>
        <p className="font-space text-[9px] tracking-[0.2em] text-light-muted dark:text-dark-muted uppercase">
          LOCAL TIME / KANYAKUMARI, IN
        </p>
        <p className="font-space font-bold text-sm tracking-wide">{time}</p>
      </div>
    </div>
  );
}

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Placeholder for form submission backend
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSent(false), 3000);
    }, 1500);
  };

  const GithubIcon = ({ size }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
      <path d="M9 18c-4.51 2-5-2-7-2"/>
    </svg>
  );

  const LinkedinIcon = ({ size }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect width="4" height="12" x="2" y="9"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  );

  const socialLinks = [
    { label: 'GITHUB', icon: GithubIcon, href: 'https://github.com/rajesh-kumar-wq' },
    { label: 'LINKEDIN', icon: LinkedinIcon, href: 'https://www.linkedin.com/in/rajesh-kumar-1011r' },
    { label: 'RESUME', icon: FileText, href: '/Python Full Stack.pdf' },
  ];

  return (
    <section id="contact" ref={ref} className="relative bg-dark-bg text-dark-text py-24 md:py-32 overflow-hidden">
      {/* Grid bg */}
      <div className="absolute inset-0 grid-bg" />

      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
        <span className="font-playfair font-black text-[6rem] md:text-[10rem] lg:text-[14rem] leading-none tracking-tight text-light-border dark:text-dark-border opacity-5 whitespace-nowrap">
          RAJESH KUMAR R.
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Section header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-16">
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <p className="section-label text-dark-muted flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
              SECTION 06 / INQUIRIES & COMMISSIONS
            </p>
            <h2 className="section-heading text-dark-text">
              GET IN<br className="hidden md:block" /> TOUCH
            </h2>
          </motion.div>

          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            custom={1}
            className="lg:mt-12"
          >
            <LiveClock />
          </motion.div>
        </div>

        {/* Content grid */}
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left — CTA text & Socials */}
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            custom={2}
          >
            <h3 className="font-playfair font-black text-3xl md:text-4xl lg:text-5xl tracking-tight leading-tight mb-8 italic">
              HAVE A PROJECT IN MIND?<br />
              LET'S BUILD<br />
              SOMETHING GREAT.
            </h3>
            <p className="font-jakarta text-base text-dark-muted leading-relaxed max-w-md mb-12">
              Looking for an entry-level Python Full Stack Developer? I am currently accepting opportunities to collaborate on web development and backend engineering roles.
            </p>
            
            {/* Social links */}
            <div>
              <p className="font-space text-[10px] tracking-[0.2em] text-dark-muted uppercase mb-4">
                NETWORKS & ARCHIVES
              </p>
              <div className="grid grid-cols-2 gap-3 max-w-md">
                {socialLinks.map((link) => {
                  const IconComponent = link.icon;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-link group"
                    >
                      <div className="flex items-center gap-3">
                        <IconComponent size={16} />
                        <span className="font-space text-xs font-medium tracking-wider">{link.label}</span>
                      </div>
                      <ExternalLink size={12} className="opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right — Contact Form */}
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            custom={3}
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <p className="font-space text-[10px] tracking-[0.2em] text-dark-muted uppercase mb-2">
                SEND A MESSAGE (COMING SOON)
              </p>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-space text-xs text-dark-muted uppercase">Name</label>
                <input
                  id="name"
                  type="text"
                  required
                  disabled
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="bg-dark-card/50 border border-dark-border/50 rounded-xl px-5 py-4 font-jakarta text-sm focus:outline-none focus:border-amber-400 transition-colors opacity-70"
                  placeholder="John Doe"
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-space text-xs text-dark-muted uppercase">Email</label>
                <input
                  id="email"
                  type="email"
                  required
                  disabled
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="bg-dark-card/50 border border-dark-border/50 rounded-xl px-5 py-4 font-jakarta text-sm focus:outline-none focus:border-amber-400 transition-colors opacity-70"
                  placeholder="john@example.com"
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="font-space text-xs text-dark-muted uppercase">Message</label>
                <textarea
                  id="message"
                  required
                  disabled
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="bg-dark-card/50 border border-dark-border/50 rounded-xl px-5 py-4 font-jakarta text-sm focus:outline-none focus:border-amber-400 transition-colors resize-none opacity-70"
                  placeholder="How can we work together?"
                />
              </div>

              <button
                type="submit"
                disabled={true}
                className="mt-4 flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-amber-400/50 text-dark-bg font-space font-bold text-xs tracking-wider uppercase opacity-70 cursor-not-allowed transition-colors"
              >
                <span>COMING SOON</span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
