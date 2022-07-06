/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      faintblue: "#EBF4FF",
      gray: "#00000036",
      lightblue: "#2979EC",
      darkblue: "#0A459E",
      orange: "#FFBE3C",
      white: "#FFFFFF",
      black: "#000000",
    },
    fontSize: {
      base: "15px",
      md: "20px",
      "5xl": "42px",
    },
    extend: {
      lineHeight: {
        8: "45px",
        10: "52px",
      },
      fontFamily: {
        ebq: ["'Open Sans', sans-serif"],
      },
      boxShadow: {
        md: "3px 6px 15px #00000036;",
      },
    },
  },
  plugins: [],
}
