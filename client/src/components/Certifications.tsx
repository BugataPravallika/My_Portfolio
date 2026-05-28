import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, ShieldCheck } from 'lucide-react';

interface Certificate {
  title: string;
  issuer: string;
  platform: string;
  year: string;
  badge: string;
}

const certificationsData: Certificate[] = [
  {
    title: 'Artificial Intelligence',
    issuer: 'NPTEL',
    platform: 'IIT Madras / SWAYAM',
    year: '2024',
    badge: 'Elite + Silver'
  },
  {
    title: 'Deep Learning',
    issuer: 'NPTEL',
    platform: 'IIT Kharagpur / SWAYAM',
    year: '2024',
    badge: 'Elite'
  },
  {
    title: 'Cloud Computing',
    issuer: 'NPTEL',
    platform: 'IIT Kharagpur / SWAYAM',
    year: '2024',
    badge: 'Elite'
  },
  {
    title: 'Unified Modeling Language (UML)',
    issuer: 'NPTEL',
    platform: 'IIT Kharagpur / SWAYAM',
    year: '2023',
    badge: 'Elite'
  },
  {
    title: 'Fundamentals of Algorithms',
    issuer: 'QIC (Quality Improvement Cell)',
    platform: 'RGUKT Academic',
    year: '2023',
    badge: 'Grade A'
  },
  {
    title: 'Exploring Quantum Computing Workshop',
    issuer: 'IIT / RGUKT Workshop',
    platform: 'Research Seminar',
    year: '2023',
    badge: 'Participant'
  }
];

export const Certifications: React.FC = () => {
  return (
    <section
      id="certifications"
      className="relative py-24 bg-cyber-bg-dark text-white dark:bg-cyber-bg-dark light:bg-cyber-bg-light light:text-slate-900 overflow-hidden"
    >
      <div className="glow-blob w-[500px] h-[500px] bg-cyber-purple top-[10%] right-[-15%]" />
      <div className="glow-blob w-[500px] h-[500px] bg-cyber-blue bottom-[10%] left-[-15%]" />

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
            // 04. Validated Credentials
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight"
          >
            Certifications & Training
          </motion.h3>
          <div className="w-16 h-1 bg-gradient-to-r from-cyber-purple to-cyber-blue mx-auto rounded-full shadow-neon-purple" />
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificationsData.map((cert, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              key={idx}
              className="glass-panel glass-panel-hover p-6 rounded-2xl border border-cyber-border-dark flex flex-col justify-between relative group transition-all duration-300 min-h-[220px]"
            >
              {/* Outer decorative line on active card */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyber-purple to-cyber-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl" />

              <div className="space-y-4">
                {/* Header details */}
                <div className="flex justify-between items-start">
                  <div className="p-3 rounded-xl bg-cyber-purple/10 border border-cyber-purple/20 text-cyber-purple group-hover:scale-105 transition-transform duration-300">
                    <Award size={22} className="group-hover:rotate-6 transition-transform duration-300" />
                  </div>
                  
                  {/* Badge */}
                  <span className="px-2.5 py-0.5 rounded bg-cyber-cyan/10 border border-cyber-cyan/20 text-[9px] font-mono text-cyber-cyan font-bold tracking-widest uppercase">
                    {cert.badge}
                  </span>
                </div>

                {/* Info titles */}
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-white dark:text-white light:text-slate-800 group-hover:text-cyber-purple transition-colors duration-300">
                    {cert.title}
                  </h4>
                  <span className="text-xs text-slate-400 block mt-1 font-sans font-medium">
                    {cert.issuer} &bull; {cert.platform}
                  </span>
                </div>
              </div>

              {/* Bottom detail footer */}
              <div className="flex justify-between items-center mt-6 pt-4 border-t border-cyber-border-dark/20 text-xs font-mono text-slate-400">
                <span className="text-[10px] text-cyber-purple flex items-center gap-1">
                  <ShieldCheck size={12} className="text-cyber-cyan shadow-[0_0_4px_#06b6d4]" />
                  Verified Credential
                </span>
                <span>{cert.year}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
