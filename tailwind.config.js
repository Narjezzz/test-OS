/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "hover-icon": "hsla(0, 0%, 50%, 25%)",
      },
    },
  },
  plugins: [],
};
