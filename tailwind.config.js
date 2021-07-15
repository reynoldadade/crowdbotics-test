module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transBlack: 'rgba(0, 0, 0, 0.5)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
