/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html", "dist/js/*.js"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        // orange
        primary: "#f97316",
        // gray 800
        dark: "#1f2937",
        // sky
        sky: "#0c4a6e",
      },
      screens: {
        "2xl": "1320px",
      },
      fontFamily: {
        raleway: ["Raleway"],
      },
    },
  },
  plugins: [],
};
