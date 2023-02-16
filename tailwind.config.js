/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        fontFamily: {
            ScheherazadeNew: ['Scheherazade New', 'serif'],
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
