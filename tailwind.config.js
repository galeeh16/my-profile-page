/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif']
    },
    extend: {
      colors: {
        primary: '#e84179',
        primaryHover: '#b02352',
        dark: '#111317',
        // dark: '#111',
      },
      // fontSize: {
      //   base: '15px'
      // },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

