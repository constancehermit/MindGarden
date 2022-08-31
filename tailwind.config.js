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
      keyframes: {
      },
      animation: {
      },
    },
    fontFamily: {
      'sans': ['Quicksand'],
      'delius': ['Delius'],
    }
  },
  variants: {
    extend: {
      backgroundImage: ['dark', 'sepia'],
      animation: ['hover', 'group-hover']
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
