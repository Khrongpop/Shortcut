<template>
  <div :style="bg_home" id="home">
    <div class="home-content">
      <img src="/home_bg.gif" class="img-bg-home">

      <div class="project-card project-card-1">
        <b-img rounded alt="Rounded image" src="https://picsum.photos/205/120/?image=58"></b-img>
        <h1>Project Name</h1>
        <p>By</p>
      </div>

      <div class="project-card project-card-2">
        <b-img rounded alt="Rounded image" src="https://picsum.photos/205/120/?image=58"></b-img>
        <h1>Project Name</h1>
        <p>By</p>
      </div>

      <div class="project-card project-card-3">
        <b-img rounded alt="Rounded image" src="https://picsum.photos/205/120/?image=58"></b-img>
        <h1>Project Name</h1>
        <p>By</p>
      </div>

      <div class="project-card project-card-4">
        <b-img rounded alt="Rounded image" src="https://picsum.photos/205/120/?image=58"></b-img>
        <h1>Project Name</h1>
        <p>By</p>
      </div>

      <div class="project-card project-card-5">
        <b-img rounded alt="Rounded image" src="https://picsum.photos/205/120/?image=58"></b-img>
        <h1>Project Name</h1>
        <p>By</p>
      </div>

      <div class="project-card project-card-6">
        <b-img rounded alt="Rounded image" src="https://picsum.photos/205/120/?image=58"></b-img>
        <h1>Project Name</h1>
        <p>By</p>
      </div>

      <Logo class="logo"/>
    </div>
  </div>
</template>

<script>
import Logo from "~/components/Logo";
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
  }
};
</script>
