/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        icyWhite: "#F0F4F8",
        orangePrimary: "#FF6A00",
        orangeSecondary: "#E65C00",
        grayMetallic: "#A2A8B4",
      },
    },
  },
  plugins: [],
}

