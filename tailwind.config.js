/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "darkgray": "#222",
      "darkred": "#7a0c17",
      "lightred": "#B31222",
      "lightgray": "#444",
      "white": "#FFF"
    },
    screens:{
      'sm': '540px',
      'sx': {'max': '539px'}
    }
  },
  plugins: [],
}
