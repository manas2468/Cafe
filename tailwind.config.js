/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        espresso: {
          light: '#2D1F17',
          DEFAULT: '#1E140F',
          dark: '#140D0A',
        },
        cream: {
          light: '#FFFDF9',
          DEFAULT: '#FDFBF7',
          dark: '#F4ECE1',
        },
        gold: {
          light: '#DFC69E',
          DEFAULT: '#C5A880',
          dark: '#A5865E',
        },
        latte: {
          light: '#FBF8F3',
          DEFAULT: '#F5ECE1',
          dark: '#EBDDC9',
        },
        caramel: {
          light: '#563829',
          DEFAULT: '#3D271D',
          dark: '#271912',
        },
      },
      fontFamily: {
        serif: ['Marcellus', 'Cinzel', 'Playfair Display', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 25s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}
