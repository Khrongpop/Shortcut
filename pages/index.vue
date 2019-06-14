<template>
  <div id="home">
    <div :style="bg_home" v-if="md">
      <div>
        <div class="home-content">
          <img src="/home_bg.gif" class="img-bg-home">

          <div class="project-card project-card-1">
            <img src="/web.png" alt>
            <!-- <project-card :vdata="creator(13580186)"></project-card> -->
          </div>

          <div class="project-card project-card-2">
            <img src="/inter-text.png" alt>
            <!-- <project-card :vdata="creator(13580246)"></project-card> -->
          </div>

          <div class="project-card project-card-3">
            <project-card :vdata="creator(13580228)"></project-card>
          </div>

          <div class="project-card project-card-4">
            <project-card :vdata="creator(13580186)"></project-card>
          </div>

          <div class="project-card project-card-5">
            <project-card :vdata="creator(13580232)"></project-card>
          </div>

          <div class="project-card project-card-6">
            <img src="/mobile-text.png" alt>
            <!-- <project-card :vdata="creator(13580180)"></project-card> -->
          </div>

          <Logo class="logo"/>
        </div>

        <div class="row">
          <div class="col-4 text-left">
            <left-item/>
          </div>
          <div class="col-2"></div>
          <div class="col-6 text-right">
            <sponsor-small class="frr"/>
          </div>
        </div>
      </div>
    </div>
    <div v-else :style="home_mobile">
      <div class="home-content-mobile">
        <Logo/>
        <img src="/home-mobile.gif" class="img-bg-mobile">

        <div class="project-card project-card-1">
          <project-card :vdata="creator(13580228)"></project-card>
        </div>

        <div class="project-card project-card-2">
          <project-card :vdata="creator(13580246)"></project-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "~/components/Logo";
import SponsorSmall from "~/components/SponsorSmall";
import LeftItem from "~/components/LeftItem";

import { mapGetters } from "vuex";
import ProjectCard from "@/components/ProjectCard";
export default {
  head() {
    return {
      title: "Home"
    };
  },
  layout: "topMenu",
  computed: {
    id() {
      return parseInt(this.$route.query.id);
    }
  },
  components: {
    Logo,
    ProjectCard,
    SponsorSmall,
    LeftItem
  },
  mounted() {
    if (process.client) {
      if (this.id !== "") {
        // return (window.location.href = `http://shortcut.surge.sh/creator/${
        //   this.id
        // }`);
        console.log(`id`);
      }
    }
  },
  computed: {
    ...mapGetters({
      creator: "creator/getCreatorDetailById"
    }),
    getScreenShotMargin() {
      return this.creator(this.id).tools.length === 0 &&
        !this.creator(this.id).database
        ? ""
        : "screenshot-section";
    }
  }
};
</script>
