module.exports = {
  darkMode: 'class',
  content: [],
  theme: {
    extend: {
      backgroundImage: {
        'dark': 'url("assets/texture/stardust.png")',
        'light': 'url("assets/texture/so-white.png")',
        'sepia': 'url("assets/texture/vintage-concrete.png")',
      },
    },
    theme: {
      fontFamily: {
        sans: {},
        serif: {}
      }
    }
  },
  variants: {
    extend: {
      backgroundImage: ['dark', 'sepia'],
    },
  },
  plugins: [],
}
