/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enable manual toggling
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'hacker-green': '#0f0',     // Classic Terminal Green
        'ink-black': '#000000',     // Pure Black
        'paper-white': '#ffffff',   // Pure White
        'gray-dim': '#1a1a1a',      // DarkGray for backgrounds
      },
      fontFamily: {
        'mono': ['"Fira Code"', 'monospace'],
        'sans': ['"Noto Sans JP"', 'sans-serif'],
      },
      animation: {
        'typing': 'typing 3.5s steps(40, end)',
        'blink-caret': 'blink-caret .75s step-end infinite',
        'glitch': 'glitch 1s linear infinite',
      },
      keyframes: {
        typing: {
          from: { width: '0' },
          to: { width: '100%' },
        },
        'blink-caret': {
          'from, to': { borderColor: 'transparent' },
          '50%': { borderColor: 'currentColor' }, // Adaptive color
        },
        glitch: {
          '2%, 64%': { transform: 'translate(2px,0) skew(0deg)' },
          '4%, 60%': { transform: 'translate(-2px,0) skew(0deg)' },
          '62%': { transform: 'translate(0,0) skew(5deg)' },
        },
      },
    },
  },
  plugins: [],
}
