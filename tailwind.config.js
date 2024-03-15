/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "Helvetica", "Arial", "sans-serif"],
      },
      colors: {
        primary: "#ffffff",
        third: "#9F9F9F",
        secondary: "#CF0010",
      },
    },
  },
  plugins: [],
};
