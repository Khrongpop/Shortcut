<template>
  <div :style="bg_home" id="home">
    <div class="home-content">
      <img src="/home_bg.gif" class="img-bg-home">
      <Logo class="logo"/>
    </div>
  </div>
</template>

<script>
import Logo from "~/components/Logo";
export default {
  head() {
    return {
      title: "Home"
    };
  },
  layout: "topMenu",
  computed: {
    id() {
      return parseInt(this.$route.query.id);
    }
  },
  components: {
    Logo
  },
  mounted() {
    if (process.client) {
      if (this.id !== "") {
        // return (window.location.href = `http://shortcut.surge.sh/creator/${
        //   this.id
        // }`);
        console.log(`id`);
      }
    }
  }
};
</script>
