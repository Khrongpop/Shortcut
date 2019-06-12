<template>
  <div id="thankyou">
    <div class="row">
      <div class="col-md-2">
        <img src="/shortcut_left.png" class="img-fluid">
      </div>
      <div class="col-md-5">
        <div class="course-information">
          <div class="img-title">
            <img src="/contact/title1.png" class="img-fluid">
          </div>
          <ul class="list-unstyled">
            <li v-for="(link, index) in links1" :key="index">
              <a
                :href="link.link"
                target="_blank"
                rel="noopener noreferrer"
                class="text-white"
              >{{link.text}}</a>
            </li>
          </ul>
        </div>

        <div class="portfolio">
          <div class="img-title">
            <img src="/contact/title3.png" class="img-fluid">
          </div>
          <ul class="list-unstyled">
            <li v-for="(link, index) in links3" :key="index">
              <img :src="`/contact/${link.icon}.png`" class="mr-1" v-if="link.icon">
              <a
                :href="'http://'+link.link"
                target="_blank"
                rel="noopener noreferrer"
                class="text-white"
              >{{link.link}}</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="col-md-5">
        <div class="thesis-list">
          <div class="img-title">
            <img src="/contact/title2.png" class="img-fluid">
          </div>
          <ul class="list-unstyled">
            <li v-for="(link, index) in links2" :key="index">
              <a
                :href="'http://'+link.link"
                target="_blank"
                rel="noopener noreferrer"
                class="text-white"
              >{{link.text}}</a>
            </li>
          </ul>
        </div>

        <div class="funcsl">
          <div class="img-title">
            <img src="/contact/title4.png" class="img-fluid">
          </div>
          <h5>{{links4.name}}</h5>

          <img :src="`/contact/fb.png`" class="mr-1">
          <a
            :href="'http://'+links4.link"
            target="_blank"
            rel="noopener noreferrer"
            class="text-white"
          >{{links4.link}}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "~/components/Logo";
export default {
  layout: "topMenu",
  data() {
    return {
      links1: [
        {
          text: "หลักสูตรเทคโนโลยีสารสนเทศธุรกิจ",
          link: "#"
        },
        {
          text: "หลักสูตรเทคโนโลยีสารสนเทศเพื่อการออกแบบ",
          link: "#"
        },
        {
          text: "หลักสูตรเทคโนโลยีสารสนเทศนิเทศศาสตร์",
          link: "#"
        },
        {
          text: "ติดต่อคณะ",
          link: "#"
        },
        {
          text: "ไอซีทีศิลปากรโชว์เคส(ICT Showcase)",
          link: "#"
        }
      ],
      links2: [
        {
          text: "ICTSUWEB#05",
          link: "#"
        },
        {
          text: "ICTSUWEB#06",
          link: "#"
        },
        {
          text: "ICTSUWEB#07",
          link: "#"
        },
        {
          text: "ICTSUWEB#08",
          link: "#"
        },
        {
          text: "ICTSUWEB#09 - SURAROUND 9.1",
          link: "#"
        },
        {
          text: "ICTSUWEB#10 - OATHLON 10.2",
          link: "#"
        },
        {
          text: "ICTSUWEB#11 - Ultra-Line 11.3",
          link: "#"
        }
      ],
      links3: [
        {
          icon: "fb",
          link: "facebook.com/ictsilpakorn/"
        },
        {
          icon: "twitter",
          link: "twitter.com/ictsilpakorn/"
        },
        {
          icon: "ig",
          link: "instagram.com/ictsilpakorn/"
        },
        {
          icon: "yt",
          link: "youtube.com/ictsilpakorn/"
        },
        {
          icon: "vimeo",
          link: "vimeo.com/ictsilpakorn"
        },
        {
          link: "ict.su.ac.th"
        }
      ],
      links4: { link: "facebook.com/func/", name: "Shotcut 13.5" }
    };
  }
};
</script>

<style>
</style>
