import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Menu, X, Terminal } from 'lucide-react';

interface NavItem {
  label: string;
  id: string;
}

const navItems: NavItem[] = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Certifications', id: 'certifications' },
  { label: 'Achievements', id: 'achievements' },
  { label: 'Contact', id: 'contact' },
];

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll spy to set active nav link
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const scrollPosition = window.scrollY + 150;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setIsMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          isScrolled
            ? 'py-4 glass-panel border-b border-cyber-border-dark/30 shadow-lg'
            : 'py-6 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo / Brand */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyber-purple to-cyber-blue flex items-center justify-center text-white shadow-neon-purple group-hover:scale-105 transition-transform duration-300">
              <Terminal size={20} className="group-hover:rotate-12 transition-transform duration-300" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-white dark:text-white light:text-slate-900 bg-clip-text">
                PRAVALLIKA
              </span>
              <span className="text-xs block text-cyber-purple font-mono tracking-widest uppercase">
                AI.DEV
              </span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-1 glass-panel px-4 py-1.5 rounded-full border border-white/5 dark:border-white/5 light:border-slate-200">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors duration-300 ${
                      activeSection === item.id
                        ? 'text-white dark:text-white light:text-cyber-purple'
                        : 'text-slate-400 dark:text-slate-400 light:text-slate-600 hover:text-white dark:hover:text-white light:hover:text-slate-900'
                    }`}
                  >
                    {activeSection === item.id && (
                      <motion.div
                        layoutId="activeTab"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        className="absolute inset-0 bg-gradient-to-r from-cyber-purple to-cyber-blue rounded-full -z-10 shadow-[0_0_15px_rgba(139,92,246,0.4)]"
                        style={{ mixBlendMode: theme === 'dark' ? 'initial' : 'screen' }}
                      />
                    )}
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>

            {/* Theme Toggle Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="p-2.5 rounded-xl glass-panel text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-white dark:hover:text-white light:hover:text-cyber-purple hover:border-cyber-purple/35 transition-all duration-300 cursor-pointer"
              title="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </motion.button>
          </nav>

          {/* Mobile Actions (Menu & Theme) */}
          <div className="lg:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md lg:hidden"
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="absolute right-0 top-0 h-full w-80 max-w-[85vw] glass-panel border-l border-cyber-border-dark flex flex-col p-6 shadow-2xl"
            >
              <div className="flex justify-between items-center mb-8">
                <span className="text-lg font-bold text-white dark:text-white light:text-slate-900">
                  Navigation
                </span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5"
                >
                  <X size={20} />
                </button>
              </div>

              <nav className="flex-1">
                <ul className="flex flex-col gap-3">
                  {navItems.map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => handleNavClick(item.id)}
                        className={`w-full text-left px-5 py-4 text-base font-semibold rounded-2xl flex items-center justify-between border transition-all duration-300 ${
                          activeSection === item.id
                            ? 'bg-gradient-to-r from-cyber-purple/20 to-cyber-blue/10 border-cyber-purple/40 text-white dark:text-white light:text-cyber-purple shadow-inner'
                            : 'bg-transparent border-transparent text-slate-400 dark:text-slate-400 light:text-slate-600 hover:border-white/5'
                        }`}
                      >
                        {item.label}
                        {activeSection === item.id && (
                          <div className="w-2 h-2 rounded-full bg-cyber-purple shadow-neon-purple" />
                        )}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="mt-auto pt-6 border-t border-cyber-border-dark/30 text-center">
                <p className="text-xs text-slate-500 font-mono">
                  BUGATA PRAVALLIKA &copy; 2026
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
