/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
      colors: {
        primary: {
          'soft-blue': 'hsl(215, 51%, 70%)',
          'cyan': 'hsl(178, 100%, 50%)',
        },
        neutral: {
          'dark-blue-1': 'hsl(217, 54%, 11%)',
          'dark-blue-2': 'hsl(216, 50%, 16%)',
          'dark-blue-3': 'hsl(215, 32%, 27%)',
          'white': 'hsl(0, 0%, 100%)',
        },
      },
    },
  },
  plugins: [],
};
