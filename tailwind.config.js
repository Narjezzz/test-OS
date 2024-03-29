/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./components/**/*.{js}"],
  theme: {
    extend: {
      colors: {
        "hover-icon": "hsla(0, 0%, 50%, 25%)",
      },
    },
  },
  plugins: [],
};
