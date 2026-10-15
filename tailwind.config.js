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
        primary: {
          DEFAULT: '#7C3AED',
          50: '#F5F3FF',
          100: '#EDE9FE',
          200: '#DDD6FE',
          300: '#C4B5FD',
          400: '#A78BFA',
          500: '#8B5CF6',
          600: '#7C3AED',
          700: '#6D28D9',
          800: '#5B21B6',
          900: '#4C1D95',
        },
        secondary: {
          DEFAULT: '#A855F7',
          400: '#C084FC',
          500: '#A855F7',
          600: '#9333EA',
        },
        accent: {
          DEFAULT: '#EC4899',
          400: '#F472B6',
          500: '#EC4899',
          600: '#DB2777',
        },
        dark: {
          bg: '#0B0F19',
          surface: '#0F172A',
          card: '#1E293B',
          cardHover: '#26354D',
          border: 'rgba(255, 255, 255, 0.08)',
          subtle: 'rgba(255, 255, 255, 0.04)',
        }
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        glow: {
          '0%': { filter: 'drop-shadow(0 0 15px rgba(124, 58, 237, 0.4))' },
          '100%': { filter: 'drop-shadow(0 0 30px rgba(236, 72, 153, 0.6))' },
        }
      }
    },
  },
  plugins: [],
}
