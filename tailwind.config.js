/** @type {import('tailwindcss').Config} */

module.exports = {
  /* darkMode: "class", */
  variants: {
    extend: {
      display: ["group-hover"],
    },
  },
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        naranja: "#ff6a13",
        light: "#f8f9fa",
        marcosFinos: "#E9E9E9",
        darkOld: "#202124",
        dark: "#2b2a33",
        darkBg: "#1c1b22",
        darkDrop: "#42414d",
        darkDropHov: "#53525d",
        darkDark: "#0f0f0f",
      },
    },
  },
  plugins: [],
};
