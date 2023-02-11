/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        fontFamily: {
            quicksand: ['Quicksand', 'sans-serif'],
            amiri: ['Amiri Quran', 'serif'],
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
