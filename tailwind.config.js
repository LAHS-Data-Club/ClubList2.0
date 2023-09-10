/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                display: "Montserrat, ui-sans-serif",
                body: "Catamaran, ui-sans-serif",
            },
        },
    },
    plugins: [],
};
