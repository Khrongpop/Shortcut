const pkg = require('./package')


module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s | Shortcut 13.5',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    // CSS file in the project
   // '@/assets/css/main.css',
    // SCSS file in the project
    '@/assets/css/main.scss',

    // '@/assets/less/main.less'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/firebase.js',
    { src: '~plugins/ga.js', ssr: false },
    { src: "~/plugins/vue-carousel", ssr: false },
    { src: "~/plugins/vue-swal", ssr: false },
    { src: "~/plugins/lazyimg", ssr: false },
    { src: "~/plugins/vue-web-cam", ssr: false },
    '~/plugins/mixin.js'
    // '~/plugins/vuefire.js'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
  ],

  router: {
    // routeNameSplitter: '/func/shortcut/',
    // base: '/func/shortcut/',
    extendRoutes (routes, resolve) {
      routes.push({
        name: 'custom',
        path: '*',
        component: resolve(__dirname, 'pages/404.vue')
      })
    }
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
  //  publicPath: 'https://www.ict.su.ac.th/func/shortcut/',
  // srcDir:'https://www.ict.su.ac.th/func/shortcut/',
  // rootDir:'https://www.ict.su.ac.th/func/shortcut/',
  //  publicPath: '/func/shortcut/',
  //  srcDir:'/func/shortcut/',
  //  rootDir:'/func/shortcut/',
    extend(config, ctx) {
    }
  }
}
