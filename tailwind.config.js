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
  },
  variants: {
    extend: {
      backgroundImage: ['dark', 'sepia'],
    },
  },
  plugins: [],
}
