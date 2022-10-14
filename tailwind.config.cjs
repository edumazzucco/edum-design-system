/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      "2xl": 32,
    },
    colors: {
      teal: {
        900: "#0d3b66",
        800: "#1a5a82",
        700: "#2a7a9e",
        600: "#3a9ab9",
        500: "#4ab9d5",
        400: "#5ad8f1",
        300: "#6af7ff",
        200: "#8bf7ff",
        100: "#aef7ff",
        50: "#d3f7ff",
        25: "#e8f7ff",
        10: "#f3f7ff",
      },

      transparent: "transparent",

      "light-bg": "#f9f7ff",
      "dark-text": "#1a1a1a",

      "dark-bg": "#0d0d0d",
      "light-text": "#4a4a4a",

      gray: {
        900: "#1a1a1a",
        800: "#2a2a2a",
        700: "#3a3a3a",
        600: "#4a4a4a",
        500: "#5a5a5a",
        400: "#6a6a6a",
        300: "#7a7a7a",
        200: "#8a8a8a",
        100: "#9a9a9a",
        50: "#aaaaaa",
        25: "#bababa",
        10: "#c9c9c9",
      },
    },
    extend: {
      fontFamily: {
        sans: "Inter, sans-serif",
      },
    },
  },
  plugins: [],
};
