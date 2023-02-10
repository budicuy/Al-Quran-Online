/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      quicksand: ['Quicksand', 'sans-serif'],
    },
    container: {
      center: true,
      maxWidth: '1536',
    },
    extend: {},
  },
  plugins: [],
}
