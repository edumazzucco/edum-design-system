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
      "teal-900": "#0d3b66",
      "teal-800": "#1a5a82",
      "teal-700": "#2a7a9e",
      "teal-600": "#3a9ab9",
      "teal-500": "#4ab9d5",
      "teal-400": "#5ad8f1",
      "teal-300": "#6af7ff",
      "teal-200": "#8bf7ff",
      "teal-100": "#aef7ff",
      "teal-50": "#d3f7ff",
      "teal-25": "#e8f7ff",
      "teal-10": "#f3f7ff",

      "light-bg": "#f9f7ff",
      "light-text": "#4a4a4a",

      "dark-text": "#1a1a1a",
      "dark-bg": "#0d0d0d",

      "gray-500": "#4a4a4a",
      "gray-300": "#8a8a8a",
    },
    extend: {
      fontFamily: {
        sans: "Inter, sans-serif",
      },
    },
  },
  plugins: [],
};
