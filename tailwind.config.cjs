/** @type {import('tailwindcss').Config} */
// Màu gốc của portfolio (tím #915EFF trên nền đêm), giữ nguyên bản sắc web cũ.
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        violet: "#915EFF",
        "violet-light": "#b99bff",
        mint: "#00cea8",
        line: "rgba(170, 166, 195, 0.16)",
      },
      fontFamily: {
        display: ['"Baloo 2"', "sans-serif"],
        sans: ['"Be Vietnam Pro"', "system-ui", "sans-serif"],
      },
      fontSize: {
        h2: ["clamp(2.25rem, 5vw, 4.5rem)", { lineHeight: "1.05" }],
      },
      spacing: {
        gutter: "clamp(16px, 4vw, 64px)",
        section: "clamp(88px, 11vw, 160px)",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
        glow: "0 10px 40px -8px rgba(145, 94, 255, 0.65)",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};
