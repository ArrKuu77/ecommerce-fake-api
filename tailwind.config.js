/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navBg: "#272524",

        customBrown: "#A05936",
        darkGray: "#333333",
        darkNavy: "#1A2A4D",
        forestGreen: "#0B3D0B",
      },
    },
  },
  plugins: [],
};
