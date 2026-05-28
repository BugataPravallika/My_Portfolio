import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, Github, Linkedin, ArrowDown } from 'lucide-react';

const typingTitles = [
  'Full-Stack Developer',
  'Generative AI Enthusiast',
  'AI Agent Developer',
  'React.js Developer',
  'Machine Learning Enthusiast',
  'Automation Engineer',
  'Backend Developer',
];

export const Hero: React.FC = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  // High-fidelity typing animation loop
  useEffect(() => {
    let timer: number;
    const fullText = typingTitles[titleIndex];

    const handleType = () => {
      if (!isDeleting) {
        // Typing
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(100);

        if (currentText === fullText) {
          // Pause at peak
          timer = window.setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        // Deleting
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(50);

        if (currentText === '') {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % typingTitles.length);
          return;
        }
      }

      timer = window.setTimeout(handleType, typingSpeed);
    };

    timer = window.setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, titleIndex, typingSpeed]);

  const handleScrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden bg-cyber-bg-dark text-white dark:bg-cyber-bg-dark light:bg-cyber-bg-light light:text-slate-900"
    >
      {/* Visual background accents */}
      <div className="glow-blob w-[500px] h-[500px] bg-cyber-purple top-[-10%] left-[-10%]" />
      <div className="glow-blob w-[500px] h-[500px] bg-cyber-blue bottom-[10%] right-[-10%]" />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        
        {/* Left Text details */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel border border-cyber-purple/20 max-w-max"
          >
            <span className="w-2 h-2 rounded-full bg-cyber-cyan animate-pulse shadow-[0_0_8px_#06b6d4]" />
            <span className="text-xs font-mono tracking-widest text-cyber-cyan uppercase">
              Ready for Collaboration
            </span>
          </motion.div>

          <div className="space-y-2">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight"
            >
              Hi, I am <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyber-purple via-cyber-pink to-cyber-blue animate-pulse-slow">
                BUGATA PRAVALLIKA
              </span>
            </motion.h1>

            {/* Dynamic typing row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="h-10 sm:h-12 flex items-center"
            >
              <h2 className="text-xl sm:text-2xl font-mono text-slate-300 dark:text-slate-300 light:text-slate-700">
                I am a{' '}
                <span className="text-cyber-cyan border-r-2 border-cyber-cyan pr-1 font-bold animate-pulse">
                  {currentText}
                </span>
              </h2>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-slate-400 dark:text-slate-400 light:text-slate-600 max-w-xl text-base sm:text-lg leading-relaxed font-sans"
          >
            Passionate full-stack developer and Generative AI enthusiast focused on building AI-powered applications, automation workflows, responsive web interfaces, NLP systems, and intelligent multi-agent solutions.
          </motion.p>

          {/* Socials and Action Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4 pt-2"
          >
            {/* Contact Button */}
            <button
              onClick={handleScrollToContact}
              className="px-6 py-3 rounded-2xl bg-gradient-to-r from-cyber-purple to-cyber-blue font-semibold text-white hover:shadow-neon-purple scale-100 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 flex items-center gap-2 group cursor-pointer"
            >
              <Mail size={18} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-300" />
              Get In Touch
            </button>

            {/* Resume Button */}
            <a
              href="/Bugata_Pravallika.pdf"
              download="Bugata_Pravallika.pdf"
              className="px-6 py-3 rounded-2xl glass-panel border border-cyber-border-dark font-semibold text-white dark:text-white light:text-slate-800 hover:border-cyber-purple/40 scale-100 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 flex items-center gap-2 group"
            >
              <Download size={18} className="group-hover:translate-y-0.5 transition-transform duration-300" />
              Download CV
            </a>

            {/* Icon Buttons */}
            <div className="flex gap-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-2xl glass-panel border border-cyber-border-dark flex items-center justify-center text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-white dark:hover:text-white light:hover:text-cyber-purple hover:border-cyber-purple/45 hover:shadow-neon-purple transition-all duration-300"
                title="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-2xl glass-panel border border-cyber-border-dark flex items-center justify-center text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-white dark:hover:text-white light:hover:text-cyber-purple hover:border-cyber-purple/45 hover:shadow-neon-purple transition-all duration-300"
                title="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right side: Animated profile image placeholder */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
            transition={{ 
              initial: { duration: 0.8, type: 'spring', bounce: 0.3 },
              y: { repeat: Infinity, duration: 6, ease: 'easeInOut' }
            }}
            className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 flex items-center justify-center group"
          >
            {/* Outer Glowing Orbital Rings */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-cyber-purple/35 animate-spin-slow" />
            <div className="absolute inset-4 rounded-full border border-cyber-cyan/35 animate-spin-slow [animation-direction:reverse]" />
            <div className="absolute inset-8 rounded-full border-2 border-dotted border-cyber-pink/20 animate-pulse" />

            {/* Glowing particle dots revolving on the rings */}
            <div className="absolute top-2 left-1/2 w-3.5 h-3.5 rounded-full bg-cyber-purple shadow-[0_0_12px_#8b5cf6]" />
            <div className="absolute bottom-2 left-1/3 w-3.5 h-3.5 rounded-full bg-cyber-cyan shadow-[0_0_12px_#06b6d4]" />
            <div className="absolute top-1/3 right-2 w-3.5 h-3.5 rounded-full bg-cyber-pink shadow-[0_0_12px_#d946ef]" />

            {/* Core Avatar Frame */}
            <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-76 md:h-76 rounded-full overflow-hidden glass-panel border-2 border-cyber-purple/40 p-3 shadow-neon-purple flex items-center justify-center relative group-hover:border-cyber-cyan/50 transition-colors duration-500">
              
              {/* Internal Holographic Grid and Glow overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.1)_50%,rgba(6,182,212,0.1)_50%)] bg-[size:100%_6px] opacity-40 mix-blend-overlay pointer-events-none rounded-full" />
              <div className="absolute inset-0 bg-gradient-to-tr from-cyber-purple/20 via-transparent to-cyber-cyan/25 mix-blend-color-dodge opacity-60 rounded-full pointer-events-none" />

              {/* Profile Image */}
              <img
                src="/pravallika.jpg"
                alt="Bugata Pravallika"
                className="w-full h-full object-cover rounded-full filter brightness-95 contrast-105 group-hover:scale-105 group-hover:brightness-100 transition-all duration-700 select-none pointer-events-none"
              />
            </div>
          </motion.div>
        </div>

      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-75 hover:opacity-100 transition-opacity duration-300">
        <span className="text-[10px] font-mono tracking-widest uppercase text-slate-400 dark:text-slate-400 light:text-slate-500">
          Scroll Down
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          onClick={() => {
            const el = document.getElementById('about');
            if (el) {
              window.scrollTo({
                top: el.offsetTop - 80,
                behavior: 'smooth',
              });
            }
          }}
          className="w-6 h-10 rounded-full border-2 border-cyber-purple/50 flex justify-center items-start p-1.5 cursor-pointer shadow-neon-purple"
        >
          <div className="w-1.5 h-1.5 bg-cyber-purple rounded-full shadow-[0_0_6px_#8b5cf6]" />
        </motion.div>
      </div>

    </section>
  );
};
