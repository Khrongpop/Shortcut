<template>
  <div id="menu-trigger">
    <div :class="triggerClass">
      <div class="row px-5">
        <div class="col-md-4">
          <img src="../assets/images/menu/logo.png">
        </div>

        <div class="col-md-4">
          <ul class="menu-list2">
            <li v-for="link in menus" :key="link.name" style="float:none;" @click="$emit('routeChange', true )">
              <nuxt-link :to="{name:link.path ? link.path : link.name}">
                {{link.name}}
              </nuxt-link>
            </li>
          </ul>
        </div>


        <div class="col-md-4">
          <ul class="menu-list2">
            <li v-for="link in categories" :key="link.name" style="float:none;">
              <nuxt-link :to="{name:link.path ? link.path : link.name}">
                {{link.name}}
              </nuxt-link>
            </li>
          </ul>
        </div>


      </div>
    </div>
  </div>
</template>

<script>
import categories from '../data/categories.json'
export default {
  props: ["status", "menus"],
  data() {
    return {
      categories
    }
  },
  computed: {
    triggerClass() {
      let status = this.status;
      let sclass = "menu-trigger-";
      return sclass + (status ? "in" : "out");
    }
  }
};
</script>

