<template>
<div id="menu">
  <div class="clearfix">
    <div class="hamburger">
      <img src="https://campriverrun.org/wp-content/themes/allyourbase/img/hamburger.png" width="40" @click="menuTrigger()">
    </div>
    <ul class="menu-list">
      <li v-for="link in links" :key="link.name">
        <nuxt-link :to="{name:link.name}">{{link.name}}</nuxt-link>
      </li>
    </ul>
  </div>

  <menu-trigger :status="showHamburger"/>

</div>
</template>


<script>
import MenuTrigger from '~/components/MenuTrigger'
export default {
  data() {
    return {
      links: [
        { name: "home" },
        { name: "creator" },
        { name: "book" },
        { name: "exhibition" },
        { name: "book" },
        { name: "thankyou" },
        { name: "contact" }
      ],
      showHamburger: false

    };
  },
  methods: {
    menuTrigger() { this.showHamburger  = !this.showHamburger },
  },
  components:{
    MenuTrigger
  }
};
</script>
