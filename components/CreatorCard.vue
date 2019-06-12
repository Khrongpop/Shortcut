<template>
  <div>
    <router-link :to="`/creator/${vdata.id}`" class="text-white" style="text-decoration:none;">
      <!-- {{vdata.id}} -->
      <b-img
        v-bind="mainProps"
        rounded
        alt="Rounded image"
        :src="`${baseURL}/creators/${vdata.id}.jpg`"
      ></b-img>
      <br>
      {{subName}}
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
    subName() {
      let name = this.vdata.name;
      if (this.windowWidth <= 850 && this.windowWidth > 832) {
        return name.length > 20 ? name.substring(0, 20) + "..." : name;
      } else if (this.windowWidth <= 832) {
        return name.length > 19 ? name.substring(0, 17) + "..." : name;
      }
      return name;
    }
  }
};
</script>

<style scope>
img {
  object-fit: cover;
}
</style>
