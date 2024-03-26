/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      extend: {
        fontFamily: {
          'sans': ['sans-serif'],
        },
        colors: {
          'slate-900': '#1f2937',
          'gray-200': '#edf2f7',
        },
        backgroundColor: {
          'slate-900': '#1f2937',
        },
        transitionDuration: {
          '100': '0.1s',
        },
      },
    },
    variants: {
      extend: {
        textColor: ['dark'],
        backgroundColor: ['dark'],
      },
    },
  },
  plugins: [],
}