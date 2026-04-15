/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'between-sm-md': {'min': '480px', 'max': '1026px'},
      },
    },
  },
  plugins: [],
};
