import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Nanum Gothic', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                "dark-gray": "#444444",
                "dim-gray": "#6F6F6F",
                "light-gray": "#0000001F",
                "dark-blue": "#0D7AB5",
                "dim-blue": "#64C0F3",
                "light-blue": "#64C0F330",
                "dim-purple": "#BBA4FB",
                "light-purple": "#BBA4FB30",
            }
        },
    },
    plugins: [
        import('@tailwindcss/aspect-ratio'),
    ],
}

