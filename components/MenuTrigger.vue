<template>
  <div id="menu-trigger">
    <div :class="triggerClass">
      <div class="row">
        <div class="col-md-4">
          <img src="../assets/images/menu/logo.png">
        </div>
        <div class="col-md-4">
          <ul class="menu-list">
            <li v-for="link in menus" :key="link.name" style="float:none;">
              <nuxt-link :to="{name:link.path ? link.path : link.name}"><img :src="`../assets/images/menu/${link.icon}.png`" width="40">{{link.name}}</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["status", "menus"],
  computed: {
    triggerClass() {
      let status = this.status;
      let sclass = "menu-trigger-";
      return sclass + (status ? "in" : "out");
    }
  }
};
</script>

