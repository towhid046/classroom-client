/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#156BCA",
        "secondary-color": "#EEF2F5",
        "third-color": "#D5E9FF",
      },
      fontFamily: {
        poppins: "Poppins , sans-serif",
      },
    },
  },
  plugins: [],
};
