/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gred1": "#a472ee",
        "gred2": "#c08eff"
      }
    },
  },
  plugins: [require("daisyui")],
}

