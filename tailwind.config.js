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
      sans: ['Inter', 'sans-serif'],
      galih: ['Pacifico', 'sans-serif'],
      rubrik: ['ICA Rubrik', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#e84179',
        primaryHover: '#b02352',
        dark: '#0e1217',
        // dark: '#161d26'
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

