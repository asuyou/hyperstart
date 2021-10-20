const conf = require("./config.json")

module.exports = {
  mode: "jit",
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: conf.foreground,
        secondary: conf.background
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
