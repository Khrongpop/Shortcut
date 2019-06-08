<template>
  <div id="menu">
    <div class="clearfix mn-50">
      <div class="hamburger">
        <img src="../assets/images/menu/ham-hover.png" @click="menuTrigger()">
      </div>
      <transition name="fade">
        <ul class="menu-list" v-show="!showHamburger">
          <li v-for="link in links" :key="link.name">
            <aside class="loading">
              <nuxt-link :to="{name:link.path ? link.path : link.name}">{{link.name}}</nuxt-link>
              <span :class="$route.name == (link.path ? link.path : link.name) ? 'border' :''"></span>
            </aside>
          </li>
        </ul>
      </transition>

      <!-- <aside class="loading">
        <span class="text">Loading</span>
        <span class="border"></span>
      </aside>-->
    </div>

    <menu-trigger
      :status="showHamburger"
      v-if="click"
      :menus="links"
      @routeChange="triggerFalse()"
    />
  </div>
</template>


<script>
import MenuTrigger from "~/components/MenuTrigger";
export default {
  data() {
    return {
      links: [
        { name: "home", path: "index", icon: "001-home" },
        { name: "creator", icon: "002-user" },
        { name: "book", icon: "003-ebook" },
        { name: "exhibition", icon: "004-tickets" },
        { name: "thankyou", icon: "005-handshake" },
        { name: "contact", icon: "006-contact" }
      ],
      showHamburger: false,
      click: false
    };
  },
  methods: {
    menuTrigger() {
      this.click = true;
      this.showHamburger = !this.showHamburger;
    },
    triggerFalse() {
      this.showHamburger = false;
    }
  },
  components: {
    MenuTrigger
  }
};
</script>

<style lang="less" scoped>
// @import url(https://fonts.googleapis.com/css?family=The+Girl+Next+Door);

.wrapper {
  padding: 30px;
}
aside {
  margin: auto;
  width: 120px;
}

@hueRotate: 10deg;

.loading {
  // font-family: "The Girl Next Door", cursive;
  padding: 3px;
  box-sizing: border-box;

  -webkit-filter: hue-rotate(@hueRotate);
  height: 71px;
  // line-height: 46px;
  color: white;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.4) inset;

  text-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);

  position: relative;
}

.text,
.border {
  z-index: 5;
  border-radius: 25px;
  display: block;
  position: absolute;
  // left: 4px;
  // top: 4px;
  // bottom: 4px;
  // right: 4px;
  display: block;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.text {
  top: 7px;
}
.border {
  // border: 2px dashed rgba(255, 255, 255, 1);
  // border: 2px dashed #6cdbe0 !important;
  border: 2px solid #6cdbe0 !important;
  clip: rect(0, 0, 0, 0);

  animation: maskBorder 3s infinite;
}

@keyframes maskBorder {
  0% {
    // height: 200%;
    clip: rect(0, 50px, 10px, 0);
  }
  20% {
    clip: rect(0, 200px, 10px, 0);
  }
  35% {
    clip: rect(0, 200px, 10px, 190px);
  }
  50% {
    clip: rect(10px, 200px, 71px, 190px);
  }
  60% {
    clip: rect(40px, 200px, 71px, 190px);
  }
  70% {
    clip: rect(40px, 200px, 71px, 0px);
  }
  85% {
    clip: rect(40px, 10px, 71px, 0px);
  }
  90% {
    clip: rect(0, 10px, 71px, 0px);
  }
  100% {
    clip: rect(0, 10px, 10px, 0px);
  }
}

body {
  background: #bbddee;
  background: radial-gradient(ellipse cover, #fff 0%, #bbddee 100%);
  padding: 50px 100px;
  height: 500px;
}

.loading,
.nuxt-link-active {
  // background-color: #36c4e6;
  border-radius: 25px;
  // border: 2px solid #bbddee;
}
</style>
