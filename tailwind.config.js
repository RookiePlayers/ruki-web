/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rukipurple: "#6a00f4",
        rukiblue: "#31cbc9",
      },
      screens: {
        xs: "480px",
      }
    },
  },
  plugins: [],
}