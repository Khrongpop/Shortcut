<template>
  <div id="top-menu">
    <menu-app :showmenu="true"/>
    <nuxt/>
  </div>
</template>

<script>
import MenuApp from "~/components/Menu";
import SponsorSmall from "~/components/SponsorSmall";

export default {
  components: {
    MenuApp
  }
};
</script>
