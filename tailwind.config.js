/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: "Inter",
      },
      screens: {
        xs: "300px",
        "400": "400px",
        "500": "500px",
        "600": "600px",
        "700": "700px"
      },
    },
  },
  plugins: [],
};
