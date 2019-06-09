<template>
  <div>
    <router-link :to="`/creator/${vdata.id}`">
      <!-- {{vdata.id}} -->
      <b-img v-bind="mainProps" rounded alt="Rounded image"></b-img>
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
        blank: true,
        blankColor: "#777",
        width: 75,
        height: 75,
        class: "m1"
      }
    };
  }
};
</script>

<style>
</style>
