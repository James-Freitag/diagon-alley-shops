/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        parchment: "#fdfaf6",
        wandwood: "#5c4033",
        darkwood: "#4b2e2e",
        goldlight: "#c9a66b",
      },
    },
  },
  plugins: [],
};
