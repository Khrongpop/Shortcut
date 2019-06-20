<template>
  <div id="menu-trigger">
    <div :class="triggerClass">
      <div :style="menu_desktop">
        <div class="row px-5">
          <div class="col-md-4">
            <logo/>
          </div>

          <div class="col-md-4">
            <ul class="menu-list2 list2-l">
              <li
                v-for="link in menus"
                :key="link.name"
                style="float:none;"
                @click="$emit('routeChange', true )"
              >
                <nuxt-link :to="{name:link.path ? link.path : link.name}">
                  <img :src="`${baseURL}/menu/${link.name}.png`" width="48">
                  <span>{{link.name}}</span>
                </nuxt-link>
              </li>
            </ul>
          </div>

          <div class="col-md-4">
            <ul class="menu-list2 list2-r">
              <li
                v-for="(link,index) in categories"
                :key="link.name"
                style="float:none;"
                @click="$emit('routeChange', true )"
              >
                <nuxt-link :to="{ name:'creators-category-name', params:{name: link.name}}">
                  <!-- <nuxt-link :to="{ name:'category', query:{name: link.name}}"> -->
                  <img :src="`${baseURL}/menu/cat-${index+1}.png`" width="80">
                  {{link.name}}
                </nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <left-item
        style="position: absolute;
    bottom: 40px;
    left: 40px;
    width:600px;
    z-index: 999;"
      />

      <sponsor-small
        style="position: absolute;
    bottom: 40px;
    right: 40px;
    z-index: 999;
    }"
      />
    </div>
  </div>
</template>

<script>
import SponsorSmall from "~/components/SponsorSmall";
import LeftItem from "~/components/LeftItem";
import Logo from "~/components/Logo";

import categories from "../data/categories.json";
export default {
  props: ["status", "menus"],
  data() {
    return {
      categories
    };
  },
  components: {
    SponsorSmall,
    Logo,
    LeftItem
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

<style scoped lang='scss'>
.frr {
  // position: relative;
  // bottom: 0;
  // right: 0;
}
.list2-l {
  font-family: "geometosregular";
  font-size: 1em !important;
  margin-top: 40px;
}
.list2-r {
  li {
    padding-bottom: 1em;
  }
}
</style>


