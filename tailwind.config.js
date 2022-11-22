/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.jsx",
    "./src/**/*.jsx",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("tailwindcss-flip"),
    require("daisyui")
  ],

  daisyui: {
    rtl: true,
  },
}
