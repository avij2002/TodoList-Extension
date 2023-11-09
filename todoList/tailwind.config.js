/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        "40.8125rem": "40.8125rem",
      },
      width: {
        "27.375rem": "27.375rem",
        "19rem": "19rem",
      },
      borderRadius: {
        "1.875rem": "1.875rem;",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans"],
      },
      backgroundColor: {
        "#343434": "#343434",
        "#202020": "#202020",
      },
    },
  },
  plugins: [],
};
