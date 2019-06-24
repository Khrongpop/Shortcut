<template>
  <div id="home">
    <div :style="bg_home" v-if="md">
      <div>
        <div class="home-content">
          <img :src="`${this.baseURL}/home_bg.gif`" class="img-bg-home">

          <div class="project-card project-card-1">
            <img :src="`${this.baseURL}/web.png`" alt>
            <!-- <project-card :vdata="creator(13580186)"></project-card> -->
          </div>

          <div class="project-card project-card-2">
            <img :src="`${this.baseURL}/inter-text.png`" alt>
            <!-- <project-card :vdata="creator(13580246)"></project-card> -->
          </div>

          <div class="project-card project-card-3">
            <project-card :vdata="creator(lists[0])"></project-card>
          </div>

          <div class="project-card project-card-4">
            <project-card :vdata="creator(lists[1])"></project-card>
          </div>

          <div class="project-card project-card-5">
            <project-card :vdata="creator(lists[2])"></project-card>
          </div>

          <div class="project-card project-card-6">
            <img :src="`${this.baseURL}/mobile-text.png`" alt>
            <!-- <project-card :vdata="creator(13580180)"></project-card> -->
          </div>

          <Logo class="logo"/>
        </div>

        <div class="row">
          <div class="col-4 text-left">
            <left-item style="margin-top:-140px;"/>
          </div>
          <div class="col-2"></div>
          <div class="col-6 text-right">
            <sponsor-small class="frr" style="margin-top:-120px;"/>
          </div>
        </div>
      </div>
    </div>
    <div v-else :style="home_mobile">
      <div class="home-content-mobile">
        <Logo/>
        <img :src="`${this.baseURL}/home-mobile.gif`" class="img-bg-mobile">

        <div class="project-card project-card-1">
          <project-card :vdata="creator(13580228)"></project-card>
        </div>

        <div class="project-card project-card-2">
          <project-card :vdata="creator(13580246)"></project-card>
        </div>

        <div class="project-card project-card-3">
          <img :src="`${this.baseURL}/web.png`" alt>
        </div>

        <div class="project-card project-card-4">
          <img :src="`${this.baseURL}/inter-text.png`" alt>
        </div>

        <div class="project-card project-card-5">
          <img :src="`${this.baseURL}/mobile-text.png`" alt>
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
  data: () => ({
    ids: [],
    lists: []
  }),
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
    if (this.creators) {
      this.creators.forEach(creator => {
        this.ids.push(creator.id);
      });
    }
    if (this.ids) {
      for (let i = 0; i < 3; i++) {
        const id = this.randomId(this.ids);
        if (this.lists[i - 1] != id) {
          this.lists.push(id);
        }
      }
    }
    console.log("lists=>", this.lists);
  },
  computed: {
    ...mapGetters({
      creator: "creator/getCreatorDetailById",
      creators: "creator/creators"
    }),
    getScreenShotMargin() {
      return this.creator(this.id).tools.length === 0 &&
        !this.creator(this.id).database
        ? ""
        : "screenshot-section";
    }
  },
  methods: {
    randomId(ids) {
      return ids[Math.floor(Math.random() * ids.length)];
    }
  }
};
</script>
