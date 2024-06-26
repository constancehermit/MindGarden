export default {
  target: 'static',

  head: {
    title: 'Drawn To Code',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [
    '@fortawesome/fontawesome-svg-core/styles.css',
  ],

  plugins: [
    '~/plugins/masonry.js',
    '~/plugins/fontawesome.js',
  ],

  components: true,

  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
  ],

  ssr: true,
  target: 'server',
  
  modules: [
    '@nuxt/content',
    'vue-masonry-css',
    'cookie-universal-nuxt',
  ],

  content: {},

  build: {
  },

  googleFonts: {
    families: {
      Delius: true,
      Quicksand: true,
    }
  },

  hooks: {
    'content:file:beforeParse': (file) => {
      if (file.extension !== '.md') return;
      file.data = file.data.replace(/\]\(((?!http))([^\)]*)\)/g, "](/garden/$2)")
    }
  },
  
  vue: {
    config: {
      devtools: true,
    }
  },
}
