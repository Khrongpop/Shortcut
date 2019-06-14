import Vue from 'vue'

Vue.mixin({
  data () {
    return {
      scrolled: false,
      windowWidth: 0,
      windowHeight: 0,
      bg_animate: {'background-image':`url(/bg_animate.gif)`,'height':'100%'},
      bg_home: {
        'background-image':`url(/home_bg.gif)`,
        'height':'100%',
        'background-size' : 'contain'
      },
      home_desktop : {
        'background-image':`url(/home-desktop.gif)`,
        'background-repeat':`no-repeat`,
        'background-size' : `contain`,
        'height':'100%',
        'widht':'100%',

      },
      menu_desktop : {
        'background-image':`url(/menu_desktop.gif)`,
        'background-repeat':`no-repeat`,
        'background-size' : `contain`,
        'height':'100%',
        'widht':'100%',

      },
      menu_mobile : {
        'background-image':`url(/menu-mobile_2.gif)`,
        'background-repeat':`no-repeat`,
        'background-size' : `contain`,
        'height':'100%',
        'widht':'100%',

      }
    }
  },
  computed: {
    baseURL() {
      return process.env.NODE_ENV.toLowerCase() === "production"
        // ? "https://www.ict.su.ac.th/func/shortcut"
        ? ""
        : "";
    },
    xs () {
      return this.windowWidth < 576
    },
    sm () {
      return this.windowWidth >= 576
    },
    md () {
      return this.windowWidth >= 768
    },
    lg () {
      return this.windowWidth >= 992
    },
    xl () {
      return this.windowWidth >= 1200
    },
    removeContainerOnMobile () {
      return this.xs ? '' : 'container'
    },
  },
  mounted () {
    this.$nextTick(function () {
      window.addEventListener('resize', this.getWindowWidth)
      window.addEventListener('resize', this.getWindowHeight)

      // Init
      this.getWindowWidth()
      this.getWindowHeight()
    })
  },
  beforeMount () {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {

    handleScroll () {
      this.scrolled = window.scrollY
    },
    getWindowWidth (event) {
      this.windowWidth = document.documentElement.clientWidth
    },
    getWindowHeight (event) {
      this.windowHeight = document.documentElement.clientHeight
    },
    beforeDestroy () {
      window.removeEventListener('resize', this.getWindowWidth)
      window.removeEventListener('resize', this.getWindowHeight)
    }
  }
})
