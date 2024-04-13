/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '3x250': 'repeat(3, 250px)',
        '3x300': 'repeat(3, 300px)',
        '3x350': 'repeat(3, 350px)',
        '3x400': 'repeat(3, 400px)',
      }
    },
  },
  plugins: [],
}

