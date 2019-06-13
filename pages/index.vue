<template>
  <div :style="bg_animate">this is home</div>
</template>

<script>
export default {
  head () {
    return {
      title: 'Home'
    }
  },
  layout: "topMenu",
  computed: {
    id() {
      return parseInt(this.$route.query.id);
    }
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
