<template>
  <div id="menu">
    <div class="clearfix mn-50">
      <div class="hamburger">
        <img
          src="../assets/images/menu/ham-hover.png"
          @click="menuTrigger()"
        >
      </div>
      <transition name="fade">
        <ul class="menu-list" v-show="!showHamburger">
          <li v-for="link in links" :key="link.name">
            <nuxt-link :to="{name:link.path ? link.path : link.name}">{{link.name}}</nuxt-link>
          </li>
        </ul>
      </transition>
    </div>

    <menu-trigger :status="showHamburger" v-if="click" :menus="links"/>
  </div>
</template>


<script>
import MenuTrigger from "~/components/MenuTrigger";
export default {
  data() {
    return {
      links: [
        { name: "home", path:'index',icon:'001-home'},
        { name: "creator",icon:'002-user'},
        { name: "book", icon:'003-ebook'},
        { name: "exhibition", icon:'004-tickets'},
        { name: "thankyou",  icon:'005-handshake'},
        { name: "contact", icon: '006-contact'}
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

