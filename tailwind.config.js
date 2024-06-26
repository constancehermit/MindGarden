const { readonly } = require('vue');

module.exports = {
  darkMode: 'class',
  content: [],
  theme: {
    extend: {
      backgroundImage: {
        'dark': 'url("assets/texture/stardust.png")',
        'light': 'url("assets/texture/so-white.png")',
      },
      colors: {
        darkBgCol:'#3D3C42',
      },
      keyframes: {
      },
      animation: {
      },
      typography: {
        DEFAULT: {
          css: {
            a: {
              color: '#3182ce',
              '&:hover': {
                color: '#2c5282',
              },
              textDecoration: 'none',
            }
          }
        }
      }
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
  purge: {
    options: {
      safelist: [{
        pattern: /^h-/,
      }],
    },
  }
}
