/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: {
            dark: '#03030c',
            light: '#f8fafc'
          },
          panel: {
            dark: 'rgba(11, 11, 28, 0.45)',
            light: 'rgba(255, 255, 255, 0.65)'
          },
          border: {
            dark: 'rgba(139, 92, 246, 0.15)',
            light: 'rgba(109, 40, 217, 0.08)'
          },
          purple: '#8b5cf6',
          blue: '#3b82f6',
          pink: '#d946ef',
          cyan: '#06b6d4',
        }
      },
      backgroundImage: {
        'neon-gradient': 'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)',
        'cyber-gradient': 'linear-gradient(to bottom, #03030c, #050515, #020208)',
        'radial-glow': 'radial-gradient(circle 800px at var(--mouse-x, 0) var(--mouse-y, 0), rgba(139, 92, 246, 0.08), transparent 80%)'
      },
      boxShadow: {
        'neon-purple': '0 0 15px rgba(139, 92, 246, 0.3)',
        'neon-blue': '0 0 15px rgba(59, 82, 246, 0.3)',
        'neon-cyan': '0 0 15px rgba(6, 182, 212, 0.3)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace']
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-reverse': 'float-reverse 8s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' }
        },
        'float-reverse': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(15px) rotate(180deg)' }
        }
      }
    },
  },
  plugins: [
    function({ addVariant }) {
      addVariant('light', '.light &');
    }
  ],
}
