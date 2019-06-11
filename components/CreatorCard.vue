<template>
  <div>
    <router-link :to="`${baseURL}/creator/${vdata.id}`">
      <!-- {{vdata.id}} -->
      <b-img v-bind="mainProps" rounded alt="Rounded image" :src="`/creators/${vdata.id}.jpg`"></b-img>
      <br>
      {{vdata.name}}
      <br>
      {{vdata.id}}
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["vdata"],
  data() {
    return {
      mainProps: {
        // blank: true,
        // blankColor: "#777",
        width: 150,
        height: 200,
        class: "m1"
      }
    };
  },
  computed: {
    baseURL() {
      return process.env.NODE_ENV.toLowerCase() === "production"
        ? "https://www.ict.su.ac.th/func/shortcut"
        : "";
    }
  }
};
</script>

<style scope>
img {
  object-fit: cover;
}
</style>
