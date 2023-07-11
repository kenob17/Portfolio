/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "project-bg": "url('/src/images/proj.jpg')",
      },
    },
  },
  plugins: [],
};
