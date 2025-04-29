/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        hubot: ['Hubot Sans', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#feffaf',
          50: '#feffef',
          100: '#feffdf',
          200: '#feffcf',
          300: '#feffbf',
          400: '#feffaf',
          500: '#e4e59c',
          600: '#cacb8a',
          700: '#b1b177',
          800: '#979765',
          900: '#7d7d52',
        },
        purple: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
        },
      },
    },
  },
  plugins: [],
};