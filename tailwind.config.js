/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                bgLanding: "url('/images/BG-landing.jpg')",
            },
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
        },
    },
    plugins: [
        function ({ addUtilities }) {
            addUtilities({
                ".text-outline": {
                    "text-shadow":
                        "0px 0px 3px black, 0px 0px 3px black, 0px 0px 3px black, 0px 0px 3px black",
                },
            });
        },
    ],
};
