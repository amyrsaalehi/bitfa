/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.jsx",
    "./src/**/*.jsx",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        lg: "10rem",
        xl: "12rem",
        "2xl": "14rem",
      },
    },
    extend: {},
  },
  plugins: [
    require("tailwindcss-flip"),
    require("daisyui")
  ],

  daisyui: {
    rtl: true,
    themes: [
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          primary: "#e89a32",
        },
      },
      {
        halloween: {
          ...require("daisyui/src/colors/themes")["[data-theme=halloween]"],
          primary: "#e78400",
        },
      },
    ],
  },
}
