<template>
  <div :style="bg_home" id="home">
    <div class="home-content">
      <img src="/home_bg.gif" class="img-bg-home">

      <div class="project-card project-card-1">
        <project-card :vdata="creator(13580186)"></project-card>
      </div>

      <div class="project-card project-card-2">
        <project-card :vdata="creator(13580246)"></project-card>
      </div>

      <div class="project-card project-card-3">
        <project-card :vdata="creator(13580228)"></project-card>
      </div>

      <div class="project-card project-card-4">
        <project-card :vdata="creator(13580220)"></project-card>
      </div>

      <div class="project-card project-card-5">
        <project-card :vdata="creator(13580232)"></project-card>
      </div>

      <div class="project-card project-card-6">
        <project-card :vdata="creator(13580180)"></project-card>
      </div>

      <Logo class="logo"/>
    </div>
  </div>
</template>

<script>
import Logo from "~/components/Logo";
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
    ProjectCard
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
