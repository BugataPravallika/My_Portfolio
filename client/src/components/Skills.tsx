import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, BrainCircuit, Terminal, Activity, Pocket, Wrench, Languages } from 'lucide-react';

interface Skill {
  name: string;
  level: number; // percentage representing progress
}

interface SkillCategory {
  title: string;
  icon: any;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend Development',
    icon: Code2,
    skills: [
      { name: 'React.js', level: 90 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'TypeScript', level: 85 },
      { name: 'JavaScript', level: 90 },
      { name: 'Vite & HTML5/CSS3', level: 90 },
    ],
  },
  {
    title: 'Backend Engineering',
    icon: Terminal,
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 85 },
      { name: 'FastAPI (Python)', level: 80 },
      { name: 'REST APIs', level: 90 },
    ],
  },
  {
    title: 'Database Systems',
    icon: Database,
    skills: [
      { name: 'MongoDB', level: 85 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'Supabase & SQL', level: 80 },
    ],
  },
  {
    title: 'AI & Generative AI',
    icon: BrainCircuit,
    skills: [
      { name: 'LLM App Dev & LangChain', level: 90 },
      { name: 'Google Gemini API', level: 95 },
      { name: 'CrewAI Multi-Agents', level: 85 },
      { name: 'Prompt Engineering', level: 95 },
      { name: 'RAG Systems & Vector DBs', level: 85 },
    ],
  },
  {
    title: 'Machine Learning',
    icon: Activity,
    skills: [
      { name: 'Scikit-Learn', level: 85 },
      { name: 'TensorFlow & Keras', level: 75 },
      { name: 'Pandas & NumPy', level: 90 },
      { name: 'Ensemble Models (RF/GB)', level: 80 },
    ],
  },
  {
    title: 'Workflow Automation',
    icon: Pocket,
    skills: [
      { name: 'n8n Workflow Automation', level: 90 },
      { name: 'Webhook Integrations', level: 85 },
      { name: 'Workflow Architecture', level: 80 },
    ],
  },
  {
    title: 'Developer Tools',
    icon: Wrench,
    skills: [
      { name: 'Git & GitHub', level: 90 },
      { name: 'VS Code & Postman', level: 90 },
      { name: 'Cloudinary CDN', level: 85 },
    ],
  },
  {
    title: 'Languages',
    icon: Languages,
    skills: [
      { name: 'Python', level: 90 },
      { name: 'JavaScript & TypeScript', level: 90 },
      { name: 'Java & C', level: 80 },
    ],
  },
];

export const Skills: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  return (
    <section
      id="skills"
      className="relative py-24 bg-cyber-bg-dark text-white dark:bg-cyber-bg-dark light:bg-cyber-bg-light light:text-slate-900 overflow-hidden"
    >
      <div className="glow-blob w-[500px] h-[500px] bg-cyber-pink top-[20%] right-[-10%]" />
      <div className="glow-blob w-[500px] h-[500px] bg-cyber-purple bottom-[10%] left-[-10%]" />

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
            // 02. Technical Inventory
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight"
          >
            Core Competencies & Stack
          </motion.h3>
          <div className="w-16 h-1 bg-gradient-to-r from-cyber-purple to-cyber-blue mx-auto rounded-full shadow-neon-purple" />
        </div>

        {/* Skill Panels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat, i) => {
            const Icon = cat.icon;
            const isHovered = activeIdx === i;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                onMouseEnter={() => setActiveIdx(i)}
                onMouseLeave={() => setActiveIdx(null)}
                className="glass-panel glass-panel-hover p-6 rounded-2xl border border-cyber-border-dark flex flex-col justify-start relative group transition-all duration-300 min-h-[360px]"
              >
                {/* Visual Neon Indicator Bar */}
                <div
                  className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyber-purple to-cyber-blue rounded-t-2xl transition-all duration-300 ${
                    isHovered ? 'opacity-100 shadow-[0_0_10px_rgba(139,92,246,0.6)]' : 'opacity-0'
                  }`}
                />

                {/* Panel Header */}
                <div className="flex items-center gap-3.5 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyber-purple/20 to-cyber-blue/15 text-cyber-purple border border-cyber-purple/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-inner">
                    <Icon size={22} className="group-hover:rotate-6 transition-transform duration-300" />
                  </div>
                  <h4 className="text-base sm:text-lg font-bold tracking-tight text-white dark:text-white light:text-slate-800">
                    {cat.title}
                  </h4>
                </div>

                {/* Skills Progress Bars */}
                <div className="flex-1 space-y-4">
                  {cat.skills.map((skill, j) => (
                    <div key={j} className="space-y-1.5">
                      <div className="flex justify-between items-center text-xs font-mono">
                        <span className="text-slate-300 dark:text-slate-300 light:text-slate-700 font-semibold">
                          {skill.name}
                        </span>
                        <span className="text-cyber-cyan font-bold">
                          {skill.level}%
                        </span>
                      </div>
                      
                      {/* Gauge rail */}
                      <div className="w-full h-1.5 bg-slate-800/60 dark:bg-slate-800/60 light:bg-slate-200/80 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: 'easeOut', delay: 0.1 }}
                          className="h-full bg-gradient-to-r from-cyber-purple to-cyber-blue rounded-full shadow-[0_0_5px_#8b5cf6]"
                        />
                      </div>
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
};
