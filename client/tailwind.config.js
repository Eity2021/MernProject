/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  daisyui: {
    themes: ["white"],
  },
  theme: {
    extend: {},
  },
  plugins: [ require('daisyui'),],
}

