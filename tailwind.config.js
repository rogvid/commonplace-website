/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'cyber-black': '#0a0a0a',
        'cyber-blue': '#00eeff',
        'cyber-pink': '#ff00ff',
        'cyber-green': '#00ff9f',
        'cyber-gray': '#808080',
      },
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      boxShadow: {
        'neon-blue': '0 0 10px rgba(0, 238, 255, 0.5), 0 0 20px rgba(0, 238, 255, 0.3), 0 0 30px rgba(0, 238, 255, 0.1)',
        'neon-pink': '0 0 10px rgba(255, 0, 255, 0.5), 0 0 20px rgba(255, 0, 255, 0.3), 0 0 30px rgba(255, 0, 255, 0.1)',
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'scan': 'scan 2s linear infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 10px rgba(0, 238, 255, 0.5), 0 0 20px rgba(0, 238, 255, 0.3), 0 0 30px rgba(0, 238, 255, 0.1)' },
          '100%': { boxShadow: '0 0 20px rgba(0, 238, 255, 0.7), 0 0 30px rgba(0, 238, 255, 0.5), 0 0 40px rgba(0, 238, 255, 0.3)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
      typography: {
        DEFAULT: {
          css: {
            'code::before': {
              content: '""'
            },
            'code::after': {
              content: '""'
            },
            code: {
              fontWeight: '400',
            },
            pre: {
              backgroundColor: 'transparent',
            }
          }
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 