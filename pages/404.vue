<template>
  <div>
    this is 404
    <br>
    url :{{url}}
    <br>
    base : {{base}}
    <br>
    path : {{path}}
  </div>
</template>

<script>
export default {
  layout: "topMenu",
  mounted() {
    console.log(this.$router.path);
    // console.log(window.location.href);
    //39
    let url = window.location.href;
  },
  computed: {
    url() {
      if (process.client) {
        return window.location.href;
      }
    },
    base() {
      if (process.client) {
        return window.location.href.substring(0, 39);
      }
    },
    path() {
      if (process.client) {
        let fullpath = window.location.href.substring(39);
        return fullpath;
      }
    }
  }
};
</script>
