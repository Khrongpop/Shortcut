<template>
  <div id="thankyou" :style="bg_animate">
    <div class="row">
      <div class="col-md-2" v-if="md">
        <img :src="`${baseURL}/shortcut_left.png`" class="img-fluid">
      </div>
      <div class="col-md-5">
        <img :src="`${baseURL}/contact.png`" v-if="windowWidth<768">

        <div class="course-information" :class="lg ? 'im-h-50 ':''">
          <div class="img-title" :class="windowWidth < 1024 ?'text-center':''">
            <img :src="`${baseURL}/contact/title1.png`" class="img-fluid">
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

        <div class="portfolio mt-5 mb-5" :class="lg ? 'im-h-50 ':''">
          <div class="img-title" :class="windowWidth < 1024 ?'text-center':''">
            <img :src="`${baseURL}/contact/title3.png`" class="img-fluid">
          </div>
          <ul class="list-unstyled">
            <li v-for="(link, index) in links3" :key="index">
              <img :src="`${baseURL}/contact/${link.icon}.png`" class="mr-1" v-if="link.icon">
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
        <div class="thesis-list" :class="lg ? 'im-h-50 ':''">
          <div class="img-title" :class="windowWidth < 1024 ?'text-center pt-5':''">
            <img :src="`${baseURL}/contact/title2.png`" class="img-fluid">
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

        <div class="funcsl mt-5" :class="lg ? 'im-h-50 ':''">
          <div class="img-title" :class="windowWidth < 1024 ?'text-center':''">
            <img :src="`${baseURL}/contact/title4.png`" class="img-fluid">
          </div>
          <h5>{{links4.name}}</h5>

          <img :src="`${baseURL}/contact/fb.png`" class="mr-1">
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
  head() {
    return {
      title: "Contact"
    };
  },
  layout: "topMenu",
  data() {
    return {
      links1: [
        {
          text: "หลักสูตรเทคโนโลยีสารสนเทศธุรกิจ",
          link: "https://www.ict.su.ac.th/academic/academic-it-business"
        },
        {
          text: "หลักสูตรเทคโนโลยีสารสนเทศเพื่อการออกแบบ",
          link: "https://www.ict.su.ac.th/academic/academic-it-design"
        },
        {
          text: "หลักสูตรเทคโนโลยีสารสนเทศนิเทศศาสตร์",
          link: "https://www.ict.su.ac.th/academic/academic-communication"
        },
        {
          text: "ติดต่อคณะ",
          link: "https://www.ict.su.ac.th/contact"
        }
      ],
      links2: [
        {
          text: "ICTSUWEB#05",
          link: "http://web05.ictsilpakorn.com/"
        },
        {
          text: "ICTSUWEB#06",
          link: "http://web06.ictsilpakorn.com/"
        },
        {
          text: "ICTSUWEB#07",
          link: "http://web07.ictsilpakorn.com/"
        },
        {
          text: "ICTSUWEB#08",
          link: "http://web08.ictsilpakorn.com/"
        },
        {
          text: "ICTSUWEB#09 - SURAROUND 9.1",
          link: "http://web09.ictsilpakorn.com/"
        },
        {
          text: "ICTSUWEB#10 - OATHLON 10.2",
          link: "http://web10.ictsilpakorn.com/"
        },
        {
          text: "ICTSUWEB#11 - Ultra-Line 11.3",
          link: "https://ictsilpakorn.com/im11/portfolio/"
        },
        {
          text: "ICTSUWEB#11 - Comeraam 12.4",
          link: "https://ictsilpakorn.com/im12/comeraam/"
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
      links4: { link: "facebook.com/funcslash/", name: "Shotcut 13.5" }
    };
  }
};
</script>

<style scoped>
.im-h-50 {
  min-height: 50%;
}
</style>


