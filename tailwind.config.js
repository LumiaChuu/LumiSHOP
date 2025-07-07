/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brown-50': '#fdf8f6',
        'brown-100': '#f2e8e5',
        'brown-200': '#eaddd7',
        'brown-300': '#e0cec7',
        'brown-400': '#d2bab0',
        'brown-500': '#bfa094',
        'brown-600': '#a18072',
        'brown-700': '#977669',
        'brown-800': '#846358',
        'brown-900': '#43302b',
        'cream-50': '#fffaf0',
        'cream-100': '#fdf5e6',
        'cream-200': '#fbf0db',
        'orange-100': '#fff3e0',
        'orange-500': '#ff9800',
        'orange-600': '#fb8c00',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
