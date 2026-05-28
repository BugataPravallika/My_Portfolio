import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { CanvasParticles } from './components/CanvasParticles';
import { CursorGlow } from './components/CursorGlow';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-cyber-bg-dark text-white dark:bg-cyber-bg-dark dark:text-white light:bg-cyber-bg-light light:text-slate-900 overflow-x-hidden font-sans">
        {/* Background Particles Canvas */}
        <CanvasParticles />

        {/* Global Interactive Elements */}
        <ScrollProgressBar />
        <CursorGlow />

        {/* Layout Navigation */}
        <Navbar />

        {/* Core Content Sections */}
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Certifications />
          <Achievements />
          <Contact />
        </main>

        {/* Global Footer */}
        <footer className="relative py-12 bg-cyber-bg-dark border-t border-cyber-border-dark/20 text-slate-500 z-10 dark:bg-cyber-bg-dark light:bg-slate-100 light:text-slate-500">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col items-center md:items-start gap-1">
              <span className="text-sm font-bold tracking-tight text-white dark:text-white light:text-slate-800">
                BUGATA PRAVALLIKA
              </span>
              <span className="text-[10px] font-mono tracking-widest text-cyber-purple uppercase">
                Full-Stack Developer &amp; Generative AI Enthusiast
              </span>
            </div>
            
            <div className="text-center md:text-right space-y-1">
              <p className="text-xs">
                &copy; {new Date().getFullYear()} Bugata Pravallika. All rights reserved.
              </p>
              <p className="text-[10px] font-mono">
                Engineered with <span className="text-cyber-pink">&lt;React / Vite / Tailwind / TS&gt;</span>
              </p>
            </div>
          </div>
        </footer>

      </div>
    </ThemeProvider>
  );
};

export default App;
