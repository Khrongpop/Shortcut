import Vue from 'vue'

Vue.mixin({
  data () {
    return {
      scrolled: false,
      windowWidth: 0,
      windowHeight: 0
    }
  },
  computed: {
    baseURL() {
      return process.env.NODE_ENV.toLowerCase() === "production"
        ? "https://www.ict.su.ac.th/func/shortcut"
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
