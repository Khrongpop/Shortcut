<template>
  <div :style="bg_home" id="home">
    <div class="home-content">
      <img src="/home_bg.gif" class="img-bg-home">

      <div class="project-card project-card-1">
        <b-img rounded alt="Rounded image" src="https://picsum.photos/205/120/?image=58"></b-img>
        <h1>{{creator(13580186).project_name}}</h1>
        <p>
          By
          <span>{{creator(13580186).name}}</span>
        </p>
      </div>

      <div class="project-card project-card-2">
        <b-img rounded alt="Rounded image" src="https://picsum.photos/205/120/?image=58"></b-img>
        <h1>{{creator(13580246).project_name}}</h1>
        <p>
          By
          <span>{{creator(13580246).name}}</span>
        </p>
      </div>

      <div class="project-card project-card-3">
        <b-img rounded alt="Rounded image" src="https://picsum.photos/205/120/?image=58"></b-img>
        <h1>{{creator(13580228).project_name}}</h1>
        <p>
          By
          <span>{{creator(13580228).name}}</span>
        </p>
      </div>

      <div class="project-card project-card-4">
        <b-img rounded alt="Rounded image" src="https://picsum.photos/205/120/?image=58"></b-img>
        <h1>{{creator(13580220).project_name}}</h1>
        <p>
          By
          <span>{{creator(13580220).name}}</span>
        </p>
      </div>

      <div class="project-card project-card-5">
        <b-img rounded alt="Rounded image" src="https://picsum.photos/205/120/?image=58"></b-img>
        <h1>{{creator(13580232).project_name}}</h1>
        <p>
          By
          <span>{{creator(13580232).name}}</span>
        </p>
      </div>

      <div class="project-card project-card-6">
        <b-img rounded alt="Rounded image" src="https://picsum.photos/205/120/?image=58"></b-img>
        <h1>{{creator(13580180).project_name}}</h1>
        <p>
          By
          <span>{{creator(13580180).name}}</span>
        </p>
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
