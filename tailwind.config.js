/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "skbm-green": "#0E6B4F",
        "skbm-green-light": "#1F8A70",
        "skbm-blue": "#1B5E9E",
        "skbm-navy": "#0C2A4D",
        "skbm-gray": "#6B7280",
        "skbm-gray-dark": "#111827",
        "skbm-gray-light": "#F3F4F6"
      },
      boxShadow: {
        soft: "0 10px 30px rgba(12, 42, 77, 0.08)",
        card: "0 18px 45px rgba(15, 23, 42, 0.08)"
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem"
      }
    }
  },
  plugins: []
};
