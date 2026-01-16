/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-charcoal': '#0B0D10',
        'soft-white': '#F5F7FA',
        'accent-pink': '#E94E89',
        'accent-violet': '#9B59B6',
        'slate-dark': '#1A1D23',
        'slate-medium': '#2D3139',
        'slate-light': '#4A4F5A',
      },
      fontFamily: {
        'sans': ['Quicksand', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'pulse-slow': 'pulse 3s infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(233, 78, 137, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(233, 78, 137, 0.6)' },
        },
      },
    },
  },
  plugins: [],
}
