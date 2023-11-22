/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "330px",
      },
      fontFamily: {
        sans: ["Rubik"],
      },
      colors: {
        shadowColor: "#0D1025",
        textColor: "#0B132A",
        secTextColor: "#4F5665",
        btnColor: "#F53838",
      },
      fontWeight: {
        bold: "700",
        semibold: "500",
        light: "400",
      },
      fontSize: {
        small: "16px",
      },
    },
  },
  plugins: [],
};
