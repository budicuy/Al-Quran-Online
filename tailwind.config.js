/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        fontFamily: {
            amiri: ['Amiri Quran', 'serif'],
            quicksand: ['Quicksand', 'sans-serif'],
        },
        container: {
            center: true,
            maxWidth: '1536px',
        },
        extend: {},
    },
    plugins: [
    ],
}
