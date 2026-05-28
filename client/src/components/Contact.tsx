import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Send, Github, Linkedin, MessageSquare, AlertCircle, CheckCircle2, Loader2 } from 'lucide-react';
import { getApiUrl } from '../config/api';

interface ToastState {
  show: boolean;
  type: 'success' | 'error' | 'loading';
  message: string;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<ToastState>({ show: false, type: 'success', message: '' });

  const showToastMsg = (type: 'success' | 'error' | 'loading', message: string, duration = 4000) => {
    setToast({ show: true, type, message });
    if (type !== 'loading') {
      setTimeout(() => {
        setToast((prev) => ({ ...prev, show: false }));
      }, duration);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;

    // Simple Client-side validation
    if (!name || !email || !subject || !message) {
      showToastMsg('error', 'All contact fields are required.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showToastMsg('error', 'Please provide a valid email address.');
      return;
    }

    setIsSubmitting(true);
    showToastMsg('loading', 'Establishing contact with neural node...');

    try {
      const response = await fetch(getApiUrl('/api/contact'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        showToastMsg('success', 'Message secure! Thank you for reaching out.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        showToastMsg('error', data.error || 'Server rejected transmission.');
      }
    } catch (err) {
      console.error('Contact Form Fetch Error:', err);
      showToastMsg(
        'error',
        'Unable to reach API server. Please try again after a few moments.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 bg-cyber-bg-dark text-white dark:bg-cyber-bg-dark light:bg-cyber-bg-light light:text-slate-900 overflow-hidden"
    >
      <div className="glow-blob w-[500px] h-[500px] bg-cyber-purple top-[-10%] right-[-10%]" />
      <div className="glow-blob w-[500px] h-[500px] bg-cyber-pink bottom-[-10%] left-[-10%]" />

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
            // 06. Communications Portal
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight"
          >
            Initiate Contact
          </motion.h3>
          <div className="w-16 h-1 bg-gradient-to-r from-cyber-purple to-cyber-blue mx-auto rounded-full shadow-neon-purple" />
        </div>

        {/* Contact Info and Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left panel: Info cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <h4 className="text-2xl font-bold tracking-tight text-white dark:text-white light:text-slate-800">
              Let's Build Something Revolutionary
            </h4>
            <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed font-sans">
              Have an interesting project, automation workflow, or AI product you'd like to collaborate on? Send a message and let's explore.
            </p>

            {/* Direct Cards */}
            <div className="space-y-4 pt-2">
              <div className="p-5 glass-panel border border-cyber-border-dark flex items-start gap-4">
                <div className="p-3 rounded-xl bg-cyber-purple/20 text-cyber-purple">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-mono tracking-wider block">Primary Channel</span>
                  <a
                    href="mailto:pravallikabugata@gmail.com"
                    className="text-sm font-semibold hover:text-cyber-cyan transition-colors"
                  >
                    pravallikabugata@gmail.com
                  </a>
                </div>
              </div>

              <div className="p-5 glass-panel border border-cyber-border-dark flex items-start gap-4">
                <div className="p-3 rounded-xl bg-cyber-blue/20 text-cyber-blue">
                  <MapPin size={20} />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-mono tracking-wider block">Deployment Node</span>
                  <span className="text-sm font-semibold">
                    RGUKT Nuzvid, Andhra Pradesh, India
                  </span>
                </div>
              </div>
            </div>

            {/* Social Icons Footer */}
            <div className="flex gap-3 pt-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-2xl glass-panel border border-cyber-border-dark flex items-center justify-center text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-white dark:hover:text-white light:hover:text-cyber-purple hover:border-cyber-purple/45 hover:shadow-neon-purple transition-all duration-300"
                title="GitHub Network"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-2xl glass-panel border border-cyber-border-dark flex items-center justify-center text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-white dark:hover:text-white light:hover:text-cyber-purple hover:border-cyber-purple/45 hover:shadow-neon-purple transition-all duration-300"
                title="LinkedIn Network"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>

          {/* Right panel: Modern glassmorphic form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              className="glass-panel p-6 sm:p-8 rounded-3xl border border-cyber-border-dark space-y-5 shadow-2xl relative"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div className="space-y-2">
                  <label className="text-xs font-mono tracking-wider text-slate-300 dark:text-slate-300 light:text-slate-600 block">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/40 dark:bg-slate-950/40 light:bg-white/40 border border-cyber-border-dark/60 focus:border-cyber-purple text-sm text-white dark:text-white light:text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-cyber-purple transition-all duration-300"
                    required
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-xs font-mono tracking-wider text-slate-300 dark:text-slate-300 light:text-slate-600 block">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/40 dark:bg-slate-950/40 light:bg-white/40 border border-cyber-border-dark/60 focus:border-cyber-purple text-sm text-white dark:text-white light:text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-cyber-purple transition-all duration-300"
                    required
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-2">
                <label className="text-xs font-mono tracking-wider text-slate-300 dark:text-slate-300 light:text-slate-600 block">
                  Subject Request
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Enter project or inquiry subject"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950/40 dark:bg-slate-950/40 light:bg-white/40 border border-cyber-border-dark/60 focus:border-cyber-purple text-sm text-white dark:text-white light:text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-cyber-purple transition-all duration-300"
                  required
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-xs font-mono tracking-wider text-slate-300 dark:text-slate-300 light:text-slate-600 block">
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Draft your message details here..."
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950/40 dark:bg-slate-950/40 light:bg-white/40 border border-cyber-border-dark/60 focus:border-cyber-purple text-sm text-white dark:text-white light:text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-cyber-purple transition-all duration-300 resize-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-cyber-purple to-cyber-blue hover:shadow-neon-purple text-sm font-semibold text-white tracking-widest uppercase flex items-center justify-center gap-2 group transition-all duration-300 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Transmitting...
                  </>
                ) : (
                  <>
                    <Send size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                    Send Transmission
                  </>
                )}
              </button>

            </form>
          </motion.div>

        </div>

      </div>

      {/* Futuristic Toast Notifications Overlay */}
      <AnimatePresence>
        {toast.show && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-8 right-6 z-50 flex items-center gap-3 p-4 rounded-2xl glass-panel border border-cyber-purple/30 shadow-[0_0_20px_rgba(139,92,246,0.35)] min-w-[300px]"
          >
            {toast.type === 'success' && (
              <div className="text-cyber-cyan shadow-[0_0_6px_#06b6d4]">
                <CheckCircle2 size={20} />
              </div>
            )}
            {toast.type === 'error' && (
              <div className="text-cyber-pink shadow-[0_0_6px_#d946ef]">
                <AlertCircle size={20} />
              </div>
            )}
            {toast.type === 'loading' && (
              <div className="text-cyber-purple shadow-[0_0_6px_#8b5cf6] animate-spin">
                <Loader2 size={20} />
              </div>
            )}
            
            <div className="flex-1">
              <span className="text-xs font-mono text-slate-400 block">
                {toast.type === 'loading' ? 'TRANSMITTING' : 'STATUS TELEMETRY'}
              </span>
              <span className="text-sm font-semibold text-white">
                {toast.message}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};
