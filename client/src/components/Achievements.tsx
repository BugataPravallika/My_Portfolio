import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Shield, HelpCircle } from 'lucide-react';

interface Achievement {
  title: string;
  category: string;
  issuer: string;
  date: string;
  description: string;
  badge: string;
  icon: any;
}

const achievementsData: Achievement[] = [
  {
    title: 'SRM GeeksforGeeks Hackathon Participant',
    category: 'Hackathon & Engineering',
    issuer: 'SRM University & GeeksforGeeks GFG',
    date: '2024',
    description: 'Designed and prototyped an automated AI-driven multi-agent platform designed to evaluate and solve complex coding test assignments under strict time limits.',
    badge: 'Contender',
    icon: Trophy
  },
  {
    title: 'NCC B Certificate – Grade A',
    category: 'Leadership & National Cadet Corps',
    issuer: 'Ministry of Defence, Govt. of India',
    date: '2023',
    description: 'Received top-grade \'A\' in National Cadet Corps (NCC) training, demonstrating top-tier discipline, physical endurance, map-reading, and leadership commands.',
    badge: 'Grade A',
    icon: Shield
  },
  {
    title: 'NCC C Certificate – Grade B',
    category: 'Leadership & National Cadet Corps',
    issuer: 'Ministry of Defence, Govt. of India',
    date: '2024',
    description: 'Earned the highly prestigious \'C\' certificate (Grade B). Acquired comprehensive operational skills, community leadership training, and disaster response tactics.',
    badge: 'Grade B',
    icon: Star
  }
];

export const Achievements: React.FC = () => {
  return (
    <section
      id="achievements"
      className="relative py-24 bg-cyber-bg-dark text-white dark:bg-cyber-bg-dark light:bg-cyber-bg-light light:text-slate-900 overflow-hidden"
    >
      <div className="glow-blob w-[500px] h-[500px] bg-cyber-pink top-[15%] left-[-15%]" />
      <div className="glow-blob w-[500px] h-[500px] bg-cyber-cyan bottom-[10%] right-[-15%]" />

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
            // 05. Milestones & Honors
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight"
          >
            Achievements & Leadership
          </motion.h3>
          <div className="w-16 h-1 bg-gradient-to-r from-cyber-purple to-cyber-blue mx-auto rounded-full shadow-neon-purple" />
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievementsData.map((ach, idx) => {
            const Icon = ach.icon;
            return (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                key={idx}
                className="glass-panel glass-panel-hover p-6 rounded-2xl border border-cyber-border-dark flex flex-col justify-between relative group transition-all duration-300 min-h-[260px]"
              >
                {/* Visual Neon Indicator Bar */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyber-purple to-cyber-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl" />

                <div className="space-y-4">
                  {/* Header row */}
                  <div className="flex justify-between items-start">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyber-purple/20 to-cyber-blue/15 text-cyber-purple border border-cyber-purple/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-inner">
                      <Icon size={22} className="group-hover:rotate-12 transition-transform duration-300" />
                    </div>
                    
                    <span className="px-2.5 py-0.5 rounded bg-cyber-purple/10 border border-cyber-purple/20 text-[9px] font-mono text-cyber-purple font-bold tracking-widest uppercase">
                      {ach.badge}
                    </span>
                  </div>

                  {/* Body Text details */}
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono text-cyber-cyan block uppercase">
                      {ach.category}
                    </span>
                    <h4 className="text-base sm:text-lg font-bold text-white dark:text-white light:text-slate-800 group-hover:text-cyber-purple transition-colors duration-300">
                      {ach.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed font-sans font-medium">
                      Issuer: {ach.issuer}
                    </p>
                    <p className="text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed font-sans pt-1">
                      {ach.description}
                    </p>
                  </div>
                </div>

                {/* Footer */}
                <div className="flex justify-end items-center mt-6 pt-4 border-t border-cyber-border-dark/20 text-xs font-mono text-slate-400">
                  <span>{ach.date}</span>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
