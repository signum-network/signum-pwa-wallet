module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./features/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        default: "#3D6670",
        disable: "#94AFB6",
        primary: "#243972",
        secondary: "#F1F3F6",
        separator: "#DDDDDD",
        income: "#41BE06",
        spending: "#EB1F39",
      },
    },
  },
  plugins: [],
};
