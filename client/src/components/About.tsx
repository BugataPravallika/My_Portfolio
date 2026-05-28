import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, Cpu, Calendar } from 'lucide-react';

interface TimelineItem {
  type: string;
  title: string;
  institution: string;
  date: string;
  metric: string;
  metricLabel: string;
  description: string;
}

const educationTimeline: TimelineItem[] = [
  {
    type: 'B.Tech',
    title: 'B.Tech Computer Science & Engineering',
    institution: 'RGUKT Nuzvid (Rajiv Gandhi University of Knowledge Technologies)',
    date: 'Expected 2027',
    metric: '8.40',
    metricLabel: 'CGPA',
    description: 'Specializing in computer systems, algorithms, database architectures, machine learning foundations, and full-stack software development workflows.',
  },
  {
    type: 'PUC',
    title: 'Pre-University Course (M.Bi.P.C / M.P.C Equivalent)',
    institution: 'RGUKT Nuzvid',
    date: 'Completed 2023',
    metric: '9.52',
    metricLabel: 'CGPA',
    description: 'Rigorous foundation in mathematics, physics, computer sciences, and foundational engineering principles.',
  },
  {
    type: 'SSC',
    title: 'Secondary School Certificate (SSC)',
    institution: 'Amarajyothi School',
    date: 'Completed 2021',
    metric: '10.0',
    metricLabel: 'GPA',
    description: 'Graduated with perfect academic record of 10/10 GPA, demonstrating top excellence in science and analytical disciplines.',
  },
];

const stats = [
  { label: 'Academic CGPA (PUC)', value: '9.52' },
  { label: 'Active Projects', value: '9+' },
  { label: 'Tech Stack Skills', value: '35+' },
  { label: 'Certifications', value: '6+' },
];

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="relative py-24 bg-cyber-bg-dark text-white dark:bg-cyber-bg-dark light:bg-cyber-bg-light light:text-slate-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-mono tracking-widest text-cyber-purple uppercase"
          >
            // 01. Professional Dossier
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight"
          >
            About Me & Education Timeline
          </motion.h3>
          <div className="w-16 h-1 bg-gradient-to-r from-cyber-purple to-cyber-blue mx-auto rounded-full shadow-neon-purple" />
        </div>

        {/* Bio grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <h4 className="text-2xl font-bold tracking-tight text-white dark:text-white light:text-slate-800">
              Architecting Intelligent Solutions at the Intersection of Web & AI
            </h4>
            <p className="text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed font-sans text-base">
              I am a Computer Science student at RGUKT Nuzvid with strong interest in Full-Stack Development, Generative AI, LLM applications, AI agents, automation systems, and machine learning. I enjoy building scalable web applications, intelligent chatbots, RAG systems, and real-world AI-powered platforms.
            </p>
            <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed font-sans text-base">
              I have hands-on experience with React.js, Node.js, FastAPI, MongoDB, PostgreSQL, Tailwind CSS, and AI technologies such as LangChain, CrewAI, Google Gemini API, and Scikit-Learn. I strive to design applications that feel modern, fluid, responsive, and intelligently automated.
            </p>

            {/* Quick Skills Summary Cards */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 glass-panel border border-cyber-border-dark flex items-center gap-3">
                <div className="p-2 rounded-lg bg-cyber-purple/20 text-cyber-purple">
                  <Cpu size={20} />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block">Focus Area</span>
                  <span className="text-sm font-semibold">Generative AI</span>
                </div>
              </div>
              <div className="p-4 glass-panel border border-cyber-border-dark flex items-center gap-3">
                <div className="p-2 rounded-lg bg-cyber-blue/20 text-cyber-blue">
                  <BookOpen size={20} />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block">Degree Level</span>
                  <span className="text-sm font-semibold">B.Tech CSE</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Statistics Display Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 grid grid-cols-2 gap-6 h-full"
          >
            {stats.map((stat, i) => (
              <div
                key={i}
                className="glass-panel glass-panel-hover p-6 rounded-2xl flex flex-col justify-center items-center text-center border border-cyber-border-dark relative group transition-all duration-300"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyber-purple to-cyber-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl" />
                <span className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyber-purple to-cyber-blue neon-text-purple">
                  {stat.value}
                </span>
                <span className="text-xs font-mono tracking-widest text-slate-400 dark:text-slate-400 light:text-slate-600 mt-2 uppercase">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Education Timeline */}
        <div className="max-w-4xl mx-auto mt-16 relative">
          {/* Vertical Central Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyber-purple via-cyber-blue to-transparent -translate-x-1/2 opacity-30" />

          <div className="space-y-12">
            {educationTimeline.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6 }}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* central Timeline Dot */}
                  <div className="absolute left-4 sm:left-1/2 top-6 w-8 h-8 rounded-full bg-cyber-bg-dark border-2 border-cyber-purple -translate-x-1/2 z-20 flex items-center justify-center shadow-[0_0_10px_#8b5cf6] timeline-dot" />

                  {/* Spacer for side content */}
                  <div className="w-full sm:w-1/2" />

                  {/* Main Education Card */}
                  <div className="w-full sm:w-1/2 pl-12 sm:pl-0 sm:px-8 mt-2 sm:mt-0">
                    <div className="glass-panel glass-panel-hover p-6 rounded-2xl border border-cyber-border-dark relative group transition-all duration-300">
                      
                      {/* Metric Tag badge */}
                      <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-cyber-purple/10 border border-cyber-purple/20 flex flex-col items-center">
                        <span className="text-sm font-bold text-cyber-purple">{item.metric}</span>
                        <span className="text-[8px] font-mono tracking-widest text-slate-400 uppercase">
                          {item.metricLabel}
                        </span>
                      </div>

                      {/* Header details */}
                      <span className="px-2 py-0.5 rounded bg-cyber-blue/10 border border-cyber-blue/20 text-[10px] font-mono text-cyber-blue uppercase">
                        {item.type}
                      </span>
                      <h5 className="text-lg font-bold text-white dark:text-white light:text-slate-800 mt-2">
                        {item.title}
                      </h5>
                      <span className="text-sm text-slate-400 block mt-1 font-sans font-medium">
                        {item.institution}
                      </span>

                      {/* Year badge */}
                      <div className="flex items-center gap-1.5 mt-3 text-xs font-mono text-cyber-cyan">
                        <Calendar size={12} />
                        <span>{item.date}</span>
                      </div>

                      <p className="text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 mt-4 leading-relaxed font-sans">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
