import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, X, Calendar, Layers, CheckCircle2, ChevronRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: 'fullstack' | 'aiml' | 'automation' | 'other';
  categoryLabel: string;
  tech: string[];
  shortDesc: string;
  longDesc: string;
  features: string[];
  github: string;
  demo: string;
  date: string;
  featured?: boolean;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: 'EduReach Platform – AI College Information & Placement Portal',
    category: 'fullstack',
    categoryLabel: 'Full-Stack & AI Integration',
    tech: ['React.js', 'TypeScript', 'Node.js', 'Express.js', 'Tailwind CSS', 'JWT', 'Cloudinary', 'LLM APIs'],
    shortDesc: 'A full-stack college portal featuring student authentication, comprehensive placement analytics, and an integrated LLM-powered advisory chatbot.',
    longDesc: 'EduReach is an institutional flagship application designed to automate college admissions queries and placement dashboards. It bridges the gap between students and management through intelligent analytical insights. It features JWT-based stateless sessions, asset uploading using Cloudinary CDN, and an intelligent AI agent designed to resolve common academic and course eligibility questions.',
    features: [
      'Stateless secure JWT user authentication with role-based dashboard views.',
      'Generative AI Advisory Chatbot leveraging customized LLM prompt contexts.',
      'Modern, highly responsive admin panel to manage admissions and placements.',
      'Scalable backend API structure with comprehensive input validation middleware.'
    ],
    github: 'https://github.com/BugataPravallika/Ai-Agentic-chatbot',
    demo: 'https://github.com/BugataPravallika/Ai-Agentic-chatbot',
    date: 'Dec 2025',
    featured: true
  },
  {
    id: 2,
    title: 'QuantStock – AI-Powered Market Forecasting Dashboard',
    category: 'aiml',
    categoryLabel: 'Machine Learning & Analytics',
    tech: ['React.js', 'FastAPI', 'Scikit-Learn', 'NumPy', 'yfinance API', 'Chart.js'],
    shortDesc: 'Real-time financial stock tracking and forecasting dashboard driven by historical yfinance datasets and ensemble regression ML models.',
    longDesc: 'QuantStock is a quantitative dashboard that fetches active tickers and constructs short-term value predictions. Using robust statistical and ensemble learning frameworks like RandomForest and GradientBoosting, it provides market analysts with visual representations of predicted price ranges, stock volatility indexes, and comparative historical performance graphs.',
    features: [
      'Live financial data synchronization with yfinance REST APIs.',
      'FastAPI server orchestrating python-based scikit-learn regression models.',
      'Dynamic charts displaying historical metrics overlaid with predicted values.',
      'Responsive interface optimized for real-time asset comparisons.'
    ],
    github: 'https://github.com/BugataPravallika/Quant-stock',
    demo: 'https://github.com/BugataPravallika/Quant-stock',
    date: 'Oct 2025',
    featured: true
  },
  {
    id: 3,
    title: 'AI News Summarizer Automation Pipeline',
    category: 'automation',
    categoryLabel: 'Workflows & Automation',
    tech: ['n8n', 'Google Gemini API', 'LangChain', 'RSS Feeds', 'Webhooks'],
    shortDesc: 'Scheduled n8n automation pipeline that extracts news from selected RSS feeds and generates structured summaries.',
    longDesc: 'A production-grade workflow automation that periodically polls technology and science RSS feeds. Once new articles are published, it routes the clean text to Google Gemini models to isolate crucial findings, categorizes them by topic, and sends beautiful markdown bulletins to Slack channels and email digests.',
    features: [
      'Periodic RSS poller and parser with deduplication filters built in n8n.',
      'Gemini LLM semantic parsing and structured list summaries.',
      'Multi-channel webhook distribution sending summaries to corporate communicators.',
      'Error-resistant architecture with retry triggers for transient API timeouts.'
    ],
    github: 'https://github.com/BugataPravallika/AI-News-Summarizer-Automation',
    demo: 'https://github.com/BugataPravallika/AI-News-Summarizer-Automation',
    date: 'Apr 2025',
    featured: true
  },
  {
    id: 4,
    title: 'AI Podcast Generator Automation Pipeline',
    category: 'automation',
    categoryLabel: 'Workflows & Automation',
    tech: ['n8n', 'Google Chat Model', 'Webhooks', 'TTS API'],
    shortDesc: 'Webhook-triggered pipeline that generates and publishes highly-structured interactive podcast dialogues.',
    longDesc: 'An advanced content creation automation designed to turn dense technical documents or blog posts into engaging two-host podcast conversations. The pipeline accepts source articles via Webhooks, prompts Gemini to script a dynamic two-speaker dialogue, and orchestrates text-to-speech generators to compile the final audio file.',
    features: [
      'Custom webhook listener node accepting large-format input documents.',
      'Two-host scripting engine managing specialized prompt templates.',
      'Text-to-speech compilation nodes rendering stereo audio.',
      'Automated cloud storage sync hosting ready-to-stream podcast assets.'
    ],
    github: 'https://github.com/BugataPravallika/AI-News-Summarizer-Automation',
    demo: 'https://whisper-studio-lit.lovable.app/',
    date: 'Feb 2025',
    featured: true
  },
  {
    id: 5,
    title: 'Traffic Violation Reporting Portal',
    category: 'fullstack',
    categoryLabel: 'Full-Stack Civic Tech',
    tech: ['Node.js', 'Express.js', 'HTML5', 'CSS3', 'JavaScript', 'MongoDB'],
    shortDesc: 'Civic engagement platform enabling citizens to submit traffic complaints via secure geo-tagged forms with admin moderation panel.',
    longDesc: 'A public-utility web application designed to streamline civic reports. Citizens can submit traffic violation records along with photographs. The platform features an administrative console where traffic officers can review entries, filter by location or license plate, and update violation resolution statuses.',
    features: [
      'Secure report creation equipped with coordinate mappings.',
      'Comprehensive administrative portal with state indicators (Pending, Under Review, Resolved).',
      'Scalable file uploads utilizing server disk memory or remote cloud vaults.',
      'Clean, intuitive dark styling utilizing highly modern vanilla styling strategies.'
    ],
    github: 'https://github.com/sairam0043/Traffix.git',
    demo: 'https://traffix-violation-portal.onrender.com',
    date: 'Dec 2024',
    featured: true
  },
  {
    id: 6,
    title: 'Career Guidance Platform',
    category: 'fullstack',
    categoryLabel: 'Full-Stack & Recommendation',
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'CSS3', 'REST APIs'],
    shortDesc: 'A full-stack career guidance website developed using the MERN stack providing personalized career paths, exam details, and college exploration.',
    longDesc: 'A full-stack career guidance website developed using the MERN stack (MongoDB, Express.js, React.js, Node.js). It provides personalized career paths, competitive exam details, and college exploration features. Includes user login, search filters, and a clean responsive UI.',
    features: [
      'Developed a full-stack career guidance portal using MongoDB, Express, React, and Node.js.',
      'Provides personalized career path mapping and competitive exam detail search filters.',
      'Integrated interactive college exploration features with robust filtering capabilities.',
      'Secure user registration/login flow and highly responsive responsive UI design.'
    ],
    github: 'https://github.com/BugataPravallika/career_guidance_platform',
    demo: 'https://my-career-compass-website.onrender.com/',
    date: 'Oct 2024',
    featured: true
  },
  {
    id: 7,
    title: 'Student Result Management System with Academic Intelligence',
    category: 'fullstack',
    categoryLabel: 'Full-Stack & ML',
    tech: ['React.js', 'FastAPI', 'PostgreSQL', 'Python', 'Scikit-Learn'],
    shortDesc: 'Academic analytics suite equipped with GPA management pipelines, student metrics, and machine learning performance forecast cards.',
    longDesc: 'A high-performance result and score processing application that aggregates performance metrics across college departments. By applying predictive classification algorithms, the platform predicts a student\'s expected semester CGPA based on previous scores, study hours, and exam difficulties, helping educators trigger early-stage tutoring interventions.',
    features: [
      'Robust relational schema in PostgreSQL mapping students, courses, and scores.',
      'Supervised ML classification pipeline evaluating future academic risk profiles.',
      'Premium dark-themed score grids with real-time dynamic GPAs.',
      'Comprehensive report generation exporting student performance spreadsheets.'
    ],
    github: 'https://github.com',
    demo: 'https://demo.com',
    date: 'Aug 2025',
    featured: false
  },
  {
    id: 8,
    title: 'Multi-Agent AI System for Zero-Shot Stance Detection',
    category: 'aiml',
    categoryLabel: 'Generative AI & NLP',
    tech: ['Python', 'CrewAI', 'NLP', 'Google Gemini API', 'LLMs'],
    shortDesc: 'Intelligent multi-agent architecture utilizing CrewAI to perform zero-shot tweet stance classification through coordinated debate nodes.',
    longDesc: 'A research-grade Natural Language Processing pipeline that parses short-text tweets and categorizes their underlying stances without prior dataset training. By building a coordinate agent workflow (comprising a context-gatherer, a semantic analyst, and a stance arbiter), the system achieves state-of-the-art stance detection through systematic debate and validation.',
    features: [
      'Multi-agent role-playing task sequences managed by CrewAI.',
      'Zero-shot prompt templates adapted to high-context societal discussions.',
      'Automated truth-filtering and evaluation modules to detect hallucinations.',
      'Detailed JSON telemetry reporting agent consensus reasoning.'
    ],
    github: 'https://github.com',
    demo: 'https://demo.com',
    date: 'Jun 2025',
    featured: false
  },
  {
    id: 9,
    title: 'Smart Farmer Assistance System',
    category: 'aiml',
    categoryLabel: 'Agriculture & ML',
    tech: ['React.js', 'FastAPI', 'TensorFlow', 'Python', 'OpenWeather API'],
    shortDesc: 'Precision agriculture suite showing weather metrics, harvest recommendations, and crop disease classification.',
    longDesc: 'An agronomy-assistance hub built to empower farmers with data-driven decision trees. The system processes regional soil parameters and weather telemetry from OpenWeather APIs to suggest ideal crops. It integrates a computer vision model that classifies crop leaf diseases from uploaded images.',
    features: [
      'Real-time weather synchronization pulling localized parameters.',
      'FastAPI crop classification model executing neural network calculations.',
      'Disease diagnosis module identifying standard agricultural pathogens.',
      'Responsive, offline-ready UI panels designed for rural network operations.'
    ],
    github: 'https://github.com',
    demo: 'https://demo.com',
    date: 'Aug 2024',
    featured: false
  }
];

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'fullstack' | 'aiml' | 'automation' | 'other'>('all');
  const [selectedProj, setSelectedProj] = useState<Project | null>(null);
  const [showAdditional, setShowAdditional] = useState(false);

  const mainProjects = projectsData.filter(
    (proj) => proj.featured && (filter === 'all' || proj.category === filter)
  );

  const additionalProjects = projectsData.filter(
    (proj) => !proj.featured && (filter === 'all' || proj.category === filter)
  );

  const handleCardClick = (proj: Project) => {
    if (proj.id === 4) { // Podcast Generator
      window.open(proj.demo, '_blank');
    } else {
      setSelectedProj(proj);
    }
  };

  return (
    <section
      id="projects"
      className="relative py-24 bg-cyber-bg-dark text-white dark:bg-cyber-bg-dark light:bg-cyber-bg-light light:text-slate-900 overflow-hidden"
    >
      <div className="glow-blob w-[500px] h-[500px] bg-cyber-blue top-[10%] left-[-15%]" />
      <div className="glow-blob w-[500px] h-[500px] bg-cyber-cyan bottom-[15%] right-[-15%]" />

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
            // 03. Engineering Portfolio
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight"
          >
            Featured Installations
          </motion.h3>
          <div className="w-16 h-1 bg-gradient-to-r from-cyber-purple to-cyber-blue mx-auto rounded-full shadow-neon-purple" />
        </div>

        {/* Filter Buttons Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {['all', 'fullstack', 'aiml', 'automation', 'other'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat as any)}
              className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider font-mono uppercase transition-all duration-300 border cursor-pointer ${
                filter === cat
                  ? 'bg-gradient-to-r from-cyber-purple to-cyber-blue border-cyber-purple/50 text-white shadow-neon-purple scale-105'
                  : 'glass-panel border-cyber-border-dark text-slate-400 dark:text-slate-400 light:text-slate-600 hover:border-cyber-purple/30 hover:text-white'
              }`}
            >
              {cat === 'all'
                ? 'All Projects'
                : cat === 'fullstack'
                ? 'Full-Stack'
                : cat === 'aiml'
                ? 'AI & ML'
                : cat === 'automation'
                ? 'Automations'
                : 'Other Projects'}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {mainProjects.map((proj) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={proj.id}
                className="glass-panel glass-panel-hover rounded-2xl border border-cyber-border-dark flex flex-col justify-between overflow-hidden relative group transition-all duration-300"
              >
                {/* Visual Accent Header Box */}
                <div 
                  onClick={() => handleCardClick(proj)}
                  className="relative h-44 bg-slate-950/65 flex items-center justify-center p-6 border-b border-cyber-border-dark overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900/90 via-slate-950 to-slate-950 cursor-pointer"
                >
                  {/* Decorative abstract grids */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.15)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[size:100%_4px,3px_100%] pointer-events-none" />
                  
                  {/* Floating abstract category graphics */}
                  <div className="w-16 h-16 rounded-2xl bg-cyber-purple/10 border border-cyber-purple/20 text-cyber-purple flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-inner relative z-10">
                    <Layers size={28} className="group-hover:text-cyber-cyan transition-colors duration-500" />
                  </div>

                  {/* Tiny Neon indicator */}
                  <div className="absolute top-4 right-4 px-2.5 py-0.5 rounded bg-cyber-purple/10 border border-cyber-purple/20 text-[9px] font-mono text-cyber-purple font-bold tracking-widest uppercase">
                    {proj.categoryLabel}
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <span className="text-[10px] font-mono text-cyber-cyan flex items-center gap-1">
                      <Calendar size={10} />
                      {proj.date}
                    </span>
                    <h4 
                      onClick={() => handleCardClick(proj)}
                      className="text-lg font-bold text-white dark:text-white light:text-slate-800 leading-tight group-hover:text-cyber-purple transition-colors duration-300 cursor-pointer"
                    >
                      {proj.title}
                    </h4>
                    <p className="text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 line-clamp-3 leading-relaxed font-sans">
                      {proj.shortDesc}
                    </p>
                  </div>

                  {/* Badges and actions row */}
                  <div className="mt-6 space-y-4">
                    {/* Tech Badges List */}
                    <div className="flex flex-wrap gap-1.5">
                      {proj.tech.slice(0, 3).map((t, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded-md bg-slate-900/50 dark:bg-slate-900/50 light:bg-slate-200/50 border border-cyber-border-dark/50 text-[10px] font-mono text-slate-300 dark:text-slate-300 light:text-slate-700"
                        >
                          {t}
                        </span>
                      ))}
                      {proj.tech.length > 3 && (
                        <span className="px-2 py-0.5 rounded-md bg-cyber-purple/10 border border-cyber-purple/20 text-[10px] font-mono text-cyber-purple font-semibold">
                          +{proj.tech.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Bottom CTA row */}
                    <div className="flex justify-between items-center pt-2 border-t border-cyber-border-dark/20">
                      <button
                        onClick={() => handleCardClick(proj)}
                        className="text-xs font-semibold font-mono tracking-wider text-cyber-cyan hover:text-cyber-purple flex items-center gap-0.5 group/btn transition-colors duration-300 cursor-pointer"
                      >
                        Explore Spec
                        <ChevronRight size={14} className="group-hover/btn:translate-x-0.5 transition-transform duration-300" />
                      </button>

                      <div className="flex gap-2">
                        <a
                          href={proj.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg glass-panel border border-cyber-border-dark text-slate-400 dark:text-slate-400 light:text-slate-600 hover:text-white dark:hover:text-white light:hover:text-cyber-purple hover:border-cyber-purple/40 transition-colors duration-300"
                          title="View Repository"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github size={15} />
                        </a>
                        <a
                          href={proj.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg glass-panel border border-cyber-border-dark text-slate-400 dark:text-slate-400 light:text-slate-600 hover:text-white dark:hover:text-white light:hover:text-cyber-purple hover:border-cyber-purple/40 transition-colors duration-300"
                          title="Live Demonstration"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink size={15} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Additional Projects Section */}
        {additionalProjects.length > 0 && (
          <div className="mt-16 text-center">
            <button
              onClick={() => setShowAdditional(!showAdditional)}
              className="px-6 py-3 rounded-full text-xs font-semibold tracking-wider font-mono uppercase transition-all duration-300 border border-cyber-purple/40 hover:border-cyber-purple text-cyber-cyan hover:text-white bg-slate-950/40 cursor-pointer hover:shadow-neon-purple"
            >
              {showAdditional ? 'Hide Additional Projects' : 'View Additional Projects'}
            </button>

            <AnimatePresence>
              {showAdditional && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                  className="overflow-hidden mt-12 text-left"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {additionalProjects.map((proj) => (
                      <motion.div
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.4 }}
                        key={proj.id}
                        className="glass-panel glass-panel-hover rounded-2xl border border-cyber-border-dark flex flex-col justify-between overflow-hidden relative group transition-all duration-300"
                      >
                        {/* Visual Accent Header Box */}
                        <div 
                          onClick={() => handleCardClick(proj)}
                          className="relative h-44 bg-slate-950/65 flex items-center justify-center p-6 border-b border-cyber-border-dark overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900/90 via-slate-950 to-slate-950 cursor-pointer"
                        >
                          {/* Decorative abstract grids */}
                          <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.15)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[size:100%_4px,3px_100%] pointer-events-none" />
                          
                          {/* Floating abstract category graphics */}
                          <div className="w-16 h-16 rounded-2xl bg-cyber-purple/10 border border-cyber-purple/20 text-cyber-purple flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-inner relative z-10">
                            <Layers size={28} className="group-hover:text-cyber-cyan transition-colors duration-500" />
                          </div>

                          {/* Tiny Neon indicator */}
                          <div className="absolute top-4 right-4 px-2.5 py-0.5 rounded bg-cyber-purple/10 border border-cyber-purple/20 text-[9px] font-mono text-cyber-purple font-bold tracking-widest uppercase">
                            {proj.categoryLabel}
                          </div>
                        </div>

                        {/* Card Content Body */}
                        <div className="p-6 flex-1 flex flex-col justify-between">
                          <div className="space-y-3">
                            <span className="text-[10px] font-mono text-cyber-cyan flex items-center gap-1">
                              <Calendar size={10} />
                              {proj.date}
                            </span>
                            <h4 
                              onClick={() => handleCardClick(proj)}
                              className="text-lg font-bold text-white dark:text-white light:text-slate-800 leading-tight group-hover:text-cyber-purple transition-colors duration-300 cursor-pointer"
                            >
                              {proj.title}
                            </h4>
                            <p className="text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 line-clamp-3 leading-relaxed font-sans">
                              {proj.shortDesc}
                            </p>
                          </div>

                          {/* Badges and actions row */}
                          <div className="mt-6 space-y-4">
                            {/* Tech Badges List */}
                            <div className="flex flex-wrap gap-1.5">
                              {proj.tech.slice(0, 3).map((t, idx) => (
                                <span
                                  key={idx}
                                  className="px-2 py-0.5 rounded-md bg-slate-900/50 dark:bg-slate-900/50 light:bg-slate-200/50 border border-cyber-border-dark/50 text-[10px] font-mono text-slate-300 dark:text-slate-300 light:text-slate-700"
                                >
                                  {t}
                                </span>
                              ))}
                              {proj.tech.length > 3 && (
                                <span className="px-2 py-0.5 rounded-md bg-cyber-purple/10 border border-cyber-purple/20 text-[10px] font-mono text-cyber-purple font-semibold">
                                  +{proj.tech.length - 3} more
                                </span>
                              )}
                            </div>

                            {/* Bottom CTA row */}
                            <div className="flex justify-between items-center pt-2 border-t border-cyber-border-dark/20">
                              <button
                                onClick={() => handleCardClick(proj)}
                                className="text-xs font-semibold font-mono tracking-wider text-cyber-cyan hover:text-cyber-purple flex items-center gap-0.5 group/btn transition-colors duration-300 cursor-pointer"
                              >
                                Explore Spec
                                <ChevronRight size={14} className="group-hover/btn:translate-x-0.5 transition-transform duration-300" />
                              </button>

                              <div className="flex gap-2">
                                <a
                                  href={proj.github}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="p-2 rounded-lg glass-panel border border-cyber-border-dark text-slate-400 dark:text-slate-400 light:text-slate-600 hover:text-white dark:hover:text-white light:hover:text-cyber-purple hover:border-cyber-purple/40 transition-colors duration-300"
                                  title="View Repository"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  <Github size={15} />
                                </a>
                                <a
                                  href={proj.demo}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="p-2 rounded-lg glass-panel border border-cyber-border-dark text-slate-400 dark:text-slate-400 light:text-slate-600 hover:text-white dark:hover:text-white light:hover:text-cyber-purple hover:border-cyber-purple/40 transition-colors duration-300"
                                  title="Live Demonstration"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  <ExternalLink size={15} />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}

        {/* Dynamic Details Modal Popup */}
        <AnimatePresence>
          {selectedProj && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                className="glass-panel border border-cyber-purple/30 rounded-3xl max-w-3xl w-full max-h-[85vh] overflow-y-auto flex flex-col p-6 sm:p-8 shadow-2xl relative"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProj(null)}
                  className="absolute top-5 right-5 p-2 rounded-xl glass-panel border border-cyber-border-dark text-slate-400 dark:text-slate-400 light:text-slate-700 hover:text-white dark:hover:text-white light:hover:text-cyber-purple hover:border-cyber-purple/40 transition-all duration-300 cursor-pointer"
                >
                  <X size={18} />
                </button>

                {/* Modal Category indicator */}
                <span className="text-[10px] font-mono tracking-widest text-cyber-cyan uppercase font-bold">
                  // {selectedProj.categoryLabel}
                </span>

                {/* Modal Title */}
                <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white dark:text-white light:text-slate-900 mt-2 pr-8 leading-snug">
                  {selectedProj.title}
                </h3>

                {/* Subtitle Details */}
                <div className="flex flex-wrap items-center gap-4 mt-3 pb-4 border-b border-cyber-border-dark/20 text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1 text-cyber-purple font-semibold">
                    <Calendar size={12} />
                    {selectedProj.date}
                  </span>
                </div>

                {/* Detailed Description */}
                <div className="mt-6 space-y-6 flex-1">
                  <div className="space-y-2">
                    <h5 className="text-xs font-mono tracking-wider text-slate-400 dark:text-slate-400 light:text-slate-500 uppercase">
                      Overview Description
                    </h5>
                    <p className="text-slate-300 dark:text-slate-300 light:text-slate-600 text-sm sm:text-base leading-relaxed font-sans">
                      {selectedProj.longDesc}
                    </p>
                  </div>

                  {/* Bullet Highlights */}
                  <div className="space-y-3">
                    <h5 className="text-xs font-mono tracking-wider text-slate-400 dark:text-slate-400 light:text-slate-500 uppercase">
                      Technical Accomplishments
                    </h5>
                    <ul className="grid grid-cols-1 gap-2.5">
                      {selectedProj.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-sm font-sans text-slate-300 dark:text-slate-300 light:text-slate-600">
                          <CheckCircle2 size={16} className="text-cyber-cyan shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack section */}
                  <div className="space-y-2">
                    <h5 className="text-xs font-mono tracking-wider text-slate-400 dark:text-slate-400 light:text-slate-500 uppercase">
                      Technology Stack
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {selectedProj.tech.map((t, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-xl bg-slate-900/70 dark:bg-slate-900/70 light:bg-slate-200/60 border border-cyber-border-dark text-xs font-mono text-slate-300 dark:text-slate-300 light:text-slate-800"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action CTA links */}
                <div className="mt-8 pt-4 border-t border-cyber-border-dark/25 flex flex-wrap justify-between items-center gap-4">
                  <div className="flex gap-3">
                    <a
                      href={selectedProj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-2xl glass-panel border border-cyber-border-dark hover:border-cyber-purple/40 text-sm font-semibold flex items-center gap-2 group transition-all duration-300"
                    >
                      <Github size={16} className="group-hover:rotate-6 transition-transform duration-300" />
                      View Code
                    </a>
                    <a
                      href={selectedProj.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-2xl bg-gradient-to-r from-cyber-purple to-cyber-blue text-sm font-semibold text-white hover:shadow-neon-purple flex items-center gap-2 group transition-all duration-300"
                    >
                      <ExternalLink size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                      Live Demo
                    </a>
                  </div>
                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
