/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Add this line to include your React files
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFE8AC"
      },
      boxShadow: {
        'custom-overflow': '-5px 0px 50px 0px hsla(42, 30%, 61%, 0.7)',
      },
    },
  },
  plugins: [],
};
