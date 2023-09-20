/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "theme-color-100" : "#FF5F1B",
        "theme-color-200" : "#212121",
      }
    },
  },
  plugins: [require("daisyui")],
}