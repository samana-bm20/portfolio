/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#66fcf1",
      secondary: "#c5c6c7",
      bgblack: "#080b0e",
      bggray: "#11171d",
    },
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        mono: ["Roboto Mono", "monospace"],
      },
      boxShadow: {
        card: 'rgba(50, 50, 93, 0.25) 0px 1px 2px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px'
      },
      writingMode: {
        vertical: "vertical-rl",
      },
    },
  },
  plugins: [],
};
