/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        military: {
          DEFAULT: '#5c7a5c',
          dark: '#3f5a3f',
          glow: 'rgba(92,122,92,0.4)',
        },
        ink: {
          DEFAULT: '#0a0a0a',
          soft: '#161616',
        },
      },
      fontFamily: {
        sans: ['Geist', 'Geist Fallback', 'system-ui', 'sans-serif'],
        display: ['Geist', 'Geist Fallback', 'system-ui', 'sans-serif'],
        mono: ['Geist Mono', 'Geist Mono Fallback', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 30px rgba(92,122,92,0.4)',
        'glow-sm': '0 0 15px rgba(92,122,92,0.1)',
      },
      animation: {
        'pulse-soft': 'pulse 2.5s cubic-bezier(0.4,0,0.6,1) infinite',
      },
    },
  },
  plugins: [],
};
