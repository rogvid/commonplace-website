/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'cyber-black': '#0c0e16',
        'cyber-dark': '#1a1b26',
        'cyber-blue': '#0ef',
        'cyber-blue-glow': 'rgba(0, 238, 255, 0.5)',
        'cyber-pink': '#ff3587',
        'cyber-pink-glow': 'rgba(255, 53, 135, 0.5)',
        'cyber-yellow': '#f0f53d',
        'cyber-yellow-glow': 'rgba(240, 245, 61, 0.5)',
        'cyber-green': '#04d9b2',
        'cyber-green-glow': 'rgba(4, 217, 178, 0.5)',
        'cyber-gray': '#7a7c91',
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'Menlo', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'neon-blue': '0 0 5px theme(colors.cyber-blue), 0 0 10px theme(colors.cyber-blue-glow)',
        'neon-pink': '0 0 5px theme(colors.cyber-pink), 0 0 10px theme(colors.cyber-pink-glow)',
        'neon-yellow': '0 0 5px theme(colors.cyber-yellow), 0 0 10px theme(colors.cyber-yellow-glow)',
        'neon-green': '0 0 5px theme(colors.cyber-green), 0 0 10px theme(colors.cyber-green-glow)',
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(to right, #1a1b26 1px, transparent 1px), linear-gradient(to bottom, #1a1b26 1px, transparent 1px)',
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s infinite',
        'text-shimmer': 'text-shimmer 3s infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { opacity: 0.8 },
          '50%': { opacity: 0.4 },
        },
        'text-shimmer': {
          '0%, 100%': { backgroundPosition: '200% 0' },
          '50%': { backgroundPosition: '-200% 0' },
        },
      },
    },
  },
  plugins: [],
}
