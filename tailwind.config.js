/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{html,js,jsx}",
    "./components/**/*.{html,js,jsx}",
    "./sections/**/*.{html,js,jsx}",
    "./styles/**/*.{js,jsx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        "primary-black": "#1A232E",
        "secondary-white": "#c7c7c7",
      },
      transitionTimingFunction: {
        "out-flex": "cubic-bezier(0.05, 0.6, 0.4, 0.9)",
      },
      transitionDuration: {
        0: "0ms",
        2000: "2000ms",
        5000: "5000ms",
        12000: "12000ms",
      },
    },
  },
  plugins: [],
};
