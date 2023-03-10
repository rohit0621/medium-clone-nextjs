/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/*.tsx", "./components/*.js"],
  theme: {
    extend: {
      maxWidth: { 360: "360px" },
      colors: {
        "modal-rgba": "rgba(255, 255, 255, 0.9)",
      },
    },
  },
  plugins: [],
};
