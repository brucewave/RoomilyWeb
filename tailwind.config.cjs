/** @type {import('tailwindcss').Config} */
// Bảng màu và thang chữ lấy theo design token của MT House (D:\MTHouseClone\app\(mt)\mt.css).
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0D1524", // nền navy
        surface: "#131D30",
        "surface-2": "#1B273C",
        cream: "#EFE8DE", // chữ chính trên nền tối
        muted: "#B3A899", // 7.8:1 trên ink
        "muted-2": "#918678", // 5.1:1 trên ink
        accent: "#C6AA8F", // sand, 8.3:1 trên ink
        "accent-light": "#DCC6AF",
        warm: "#F1E9DC", // mặt kem sáng
        "warm-text": "#2C3850",
        line: "rgba(239, 232, 222, 0.12)",
        "line-strong": "rgba(239, 232, 222, 0.28)",
        "line-warm": "rgba(13, 21, 36, 0.18)",
      },
      fontFamily: {
        sans: ['"Be Vietnam Pro"', "system-ui", "-apple-system", '"Segoe UI"', "sans-serif"],
        display: ["Archivo", '"Helvetica Neue"', "Arial", "sans-serif"],
        serif: ['"Cormorant Garamond"', "Georgia", '"Times New Roman"', "serif"],
      },
      fontSize: {
        display: ["clamp(2.75rem, 6.6vw, 6.5rem)", { lineHeight: "1.02", letterSpacing: "-0.04em" }],
        h2: ["clamp(2rem, 4vw, 4.25rem)", { lineHeight: "1.08", letterSpacing: "-0.03em" }],
        h3: ["clamp(1.5rem, 2.5vw, 2.25rem)", { lineHeight: "1.15" }],
        lead: ["clamp(1.0625rem, 1.25vw, 1.3125rem)", { lineHeight: "1.6" }],
      },
      spacing: {
        gutter: "clamp(16px, 4vw, 56px)",
        section: "clamp(96px, 13vw, 180px)",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [],
};
