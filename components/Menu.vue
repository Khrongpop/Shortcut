<template>
  <div id="menu">
    <div class="clearfix mn-50">
      <div class="hamburger">
        <img
          src="https://campriverrun.org/wp-content/themes/allyourbase/img/hamburger.png"
          width="40"
          @click="menuTrigger()"
        >
      </div>
      <transition name="fade">
        <ul class="menu-list" v-show="!showHamburger">
          <li v-for="link in links" :key="link.name">
            <nuxt-link :to="{name:link.name}">{{link.name}}</nuxt-link>
          </li>
        </ul>
      </transition>
    </div>

    <menu-trigger :status="showHamburger" v-if="click"/>
  </div>
</template>


<script>
import MenuTrigger from "~/components/MenuTrigger";
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
      showHamburger: false,
      click: false
    };
  },
  methods: {
    menuTrigger() {
      this.click = true;
      this.showHamburger = !this.showHamburger;
    }
  },
  components: {
    MenuTrigger
  }
};
</script>

