import colors from 'tailwindcss/colors'
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      "primary-dark": '#222831',
      "primary": '#EEEEEE',
      "primary-blue": "#00ADB5",
      "primary-dark-light": "#393E46",
      "primary-grey": "#757575",
      "panna": "#EAE3E0",
      "orange": "#EC7A5C",
      "brick": "#a52121",
      "test": "#D0CCC9",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      red: colors.red,
      slate: colors.slate
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
})
