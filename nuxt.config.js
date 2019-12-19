
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  generate: {
    dir: "docs"
  },
  head: {
    htmlAttrs: {
      lang: 'ja'
    }
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {src: '~/plugins/vue-meta', ssr: true},
    {src: '~/plugins/vue-ripple-directive', ssr: false},
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/style-resources'
  ],
  styleResources: {
    scss: [
     '~/assets/scss/_var.scss'
     ]
   },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  router: {
    base: '/Debriefing/'
  }
}
