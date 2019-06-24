<template>
  <div id="menu-trigger" class="triggermb">
    <div :class="triggerClass" :style="menu_mobile">
      <div class="row px-5">
        <div class="col-5">
          <div class="clearfix hfix">
            <logo/>
          </div>
          <div>
            <ul class="menu-list2 list2-l pl-0" style="font-size:0.7em !important;">
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
        </div>

        <div class="col-7">
          <div class="text-right hfix">
            <img :src="`${baseURL}/menu/imsu.png`" class="mt-5 img-fluid">
          </div>

          <ul class="menu-list2 list2-r pl-0" style="font-size:0.7em;">
            <li
              v-for="(link,index) in categories"
              :key="link.name"
              style="float:none;"
              @click="$emit('routeChange', true )"
            >
              <nuxt-link :to="`/creators/category/${link.name}`">
                <!-- <nuxt-link :to="{ name:'creators-category-name', params:{name: link.name}}"> -->
                <!-- <nuxt-link :to="{ name:'category', query:{name: link.name}}"> -->
                <img :src="`${baseURL}/menu/cat-${index+1}.png`" width="80">
                {{link.name}}
              </nuxt-link>
            </li>
          </ul>
        </div>

        <!-- <div class="col-md-4">

        </div>

        <div class="col-md-4">

          <sponsor-small class="frr"/>
        </div>-->
      </div>
      <div class="text-center pt-4">
        <a href="https://www.facebook.com/funcslash/" target="_blank">
          <img :src="`${baseURL}/menu/mfb.png`">
        </a>
        <a href="https://www.instagram.com/funcslash/" target="_blank">
          <img :src="`${baseURL}/menu/mig.png`">
        </a>
      </div>
      <div class="text-center pb-4">
        <img :src="`${baseURL}/menu/mspon.png`" class="img-fluid pl-3 pr-2">
      </div>
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

<style lang='scss'>
.ffix {
  font-size: 0.7em !important;
}
.hfix {
  height: 200px;
}
.triggermb {
  font-size: 0.8em;
}
.triggermb {
  .logo-shortcut_left {
    position: relative !important;
  }
}

.frr {
  position: relative;
  bottom: 0;
  right: 0;
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


