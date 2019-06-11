import Vue from 'vue'

Vue.mixin({
  computed: {
    baseURL() {
      return process.env.NODE_ENV.toLowerCase() === "production"
        ? "https://www.ict.su.ac.th/func/shortcut"
        : "";
    }
  }
})
