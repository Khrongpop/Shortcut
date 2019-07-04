<template>
  <div class="creator" :style="bg_animate">
    <div v-if="lg">
      <!-- <div style="width:5%;" class="float-left">อ่านทำไม</div> -->
      <div class="center-section" @scroll="nextSlide">
        <Logo/>

        <div class="creator-txt">
          <h2>{{currentCreatorLG}}</h2>
          <h3>/</h3>
          <h1>35</h1>
          <p>CREATORS</p>
        </div>
      </div>
      <div style="width:70%;" class="float-right mb-5">
        <carousel
          :per-page="5"
          :paginationEnabled="true"
          :loop="true"
          :autoplay="false"
          :scrollPerPage="true"
          :navigationEnabled="true"
          paginationActiveColor="#6cdbe0"
          paginationColor="#ccc"
          @page-change="handleCurrentLG"
          ref="creatorCarousel"
        >
          <slide v-for="(val, index)  in 20" :key="index">
            <div v-if="index < 5">
              <b-col v-if="index % 5 === 0">
                <creator-card :vdata="creators[index]" class="mt-9"/>
              </b-col>

              <b-col v-else-if="index % 5 === 1">
                <creator-card :vdata="creators[index]"/>
                <creator-card :vdata="creators[index+index]" class="mt-3"/>
              </b-col>

              <b-col v-else-if="index % 5 === 2" class="mt-5">
                <creator-card :vdata="creators[index+(index % 5 - 1)]"/>
                <creator-card :vdata="creators[index+index]" class="mt-3"/>
              </b-col>

              <b-col v-else-if="index % 5 === 3">
                <creator-card :vdata="creators[index+(index % 5 - 1)]"/>
                <creator-card :vdata="creators[index+index]" class="mt-3"/>
              </b-col>

              <b-col v-else-if="index % 5 === 4">
                <creator-card :vdata="creators[index+(index % 5 - 1)]" class="mt-9"/>
              </b-col>
            </div>

            <div v-else-if="index < 10">
              <b-col v-if="index % 5 === 0">
                <creator-card :vdata="creators[index+(index % 5 + 3)]"/>
                <creator-card :vdata="creators[index+(index % 5 + 4)]" class="mt-3"/>
              </b-col>

              <b-col v-else-if="index % 5 === 1" class="mt-5">
                <creator-card :vdata="creators[index+(index % 5 + 3)]"/>
                <creator-card :vdata="creators[index+(index % 5 + 4)]" class="mt-3"/>
              </b-col>

              <b-col v-else-if="index % 5 === 2">
                <creator-card :vdata="creators[index+(index % 5 + 3)]"/>
                <creator-card :vdata="creators[index+(index % 5 + 4)]" class="mt-3"/>
              </b-col>

              <b-col v-else-if="index % 5 === 3">
                <creator-card :vdata="creators[index+(index % 5 + 3)]" class="mt-9"/>
              </b-col>

              <b-col v-else-if="index % 5 === 4">
                <creator-card :vdata="creators[index+(index % 5 + 2)]"/>
                <creator-card :vdata="creators[index+(index % 5 + 3)]" class="mt-3"/>
              </b-col>
            </div>

            <div v-else-if="index  < 15">
              <b-col v-if="index % 5 === 0" class="mt-5">
                <creator-card :vdata="creators[index+(index % 5 + 7)]"/>
                <creator-card :vdata="creators[index+(index % 5 + 8)]" class="mt-3"/>
              </b-col>

              <b-col v-else-if="index % 5 === 1">
                <creator-card :vdata="creators[index+(index % 5 + 7)]"/>
                <creator-card :vdata="creators[index+(index % 5 + 8)]" class="mt-3"/>
              </b-col>

              <b-col v-else-if="index % 5 === 2">
                <creator-card :vdata="creators[index+(index % 5 + 7)]" class="mt-9"/>
              </b-col>

              <b-col v-else-if="index % 5 === 3">
                <creator-card :vdata="creators[index+(index % 5 + 6)]"/>
                <creator-card :vdata="creators[index+(index % 5 + 7)]" class="mt-3"/>
              </b-col>

              <b-col v-else-if="index % 5 === 4" class="mt-5">
                <creator-card :vdata="creators[index+(index % 5 + 6)]"/>
                <creator-card :vdata="creators[index+(index % 5 + 7)]" class="mt-3"/>
              </b-col>
            </div>

            <div v-else-if="index < 20">
              <b-col v-if="index % 5 === 0">
                <creator-card :vdata="creators[index+(index % 5 + 11)]"/>
                <creator-card :vdata="creators[index+(index % 5 + 12)]" class="mt-3"/>
              </b-col>

              <b-col v-else-if="index % 5 === 1" class="mt-5">
                <creator-card :vdata="creators[index+(index % 5 + 11)]"/>
                <creator-card :vdata="creators[index+(index % 5 + 12)]" class="mt-3"/>
              </b-col>

              <b-col v-else-if="index % 5 === 2">
                <creator-card :vdata="creators[index+(index % 5 + 11)]"/>
                <creator-card :vdata="creators[index+(index % 5 + 12)]" class="mt-3"/>
              </b-col>

              <b-col v-else-if="index % 5 === 3">
                <creator-card :vdata="creators[index+(index % 5 + 11)]" class="mt-9"/>
              </b-col>

              <b-col v-else-if="index % 5 === 4">
                <creator-card :vdata="creators[index+(index % 5 + 10)]"/>
                <creator-card :vdata="creators[index+(index % 5 + 11)]" class="mt-3"/>
              </b-col>
            </div>
          </slide>
        </carousel>
      </div>
      <span class="clearfix"></span>
    </div>
    <div v-else>
      <b-row class="mb-4">
        <div class="creator-txt-m">
          <p>
            CREATORS
            <span>{{creators.length}}</span>
          </p>
        </div>
      </b-row>
      <carousel
        :per-page="!lg ? 4 : (xs ? 2 : 3)"
        :loop="true"
        :paginationEnabled="false"
        :autoplay="false"
        :scrollPerPage="true"
        :navigationEnabled="true"
      >
        <slide v-for="(val, index)  in getSize" :key="index" v-if="index % 3 === 0">
          <b-col>
            <creator-card :vdata="creators[index]" v-if="creators[index]" class/>
          </b-col>
        </slide>
      </carousel>
      <carousel
        :per-page="!lg ? 4 : (xs ? 2 : 3)"
        :paginationEnabled="false"
        :loop="true"
        :autoplay="false"
        :scrollPerPage="true"
        :navigationEnabled="true"
      >
        <slide v-for="(val, index)  in getSize" :key="index" v-if="index % 3 === 1">
          <b-col>
            <creator-card :vdata="creators[index]" v-if="creators[index]" class/>
          </b-col>
        </slide>
      </carousel>
      <carousel
        :per-page="!lg ? 4 : (xs ? 2 : 3)"
        :paginationEnabled="false"
        :loop="true"
        :autoplay="false"
        :scrollPerPage="true"
        :navigationEnabled="true"
      >
        <slide v-for="(val, index)  in getSize" :key="index" v-if="index % 3 === 2">
          <b-col>
            <creator-card :vdata="creators[index]" v-if="creators[index]" class/>
          </b-col>
        </slide>
      </carousel>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Logo from "~/components/Logo";
import CreatorCard from "@/components/CreatorCard";
export default {
  head() {
    return {
      title: "Creators"
    };
  },
  layout: "topMenu",
  data() {
    return {
      currentLG: 0
    };
  },
  components: {
    CreatorCard,
    Logo
  },
  created() {
    if (process.browser) {
      if (this.lg) {
        console.log("55555");
        document.documentElement.style.overflow = "hidden";
      }
    }
  },
  mounted() {
    if (this.lg) {
      console.log("55555");
      // document.documentElement.style.overflow = "hidden";
    }
  },
  destroyed() {
    if (process.browser) {
    }
  },
  computed: {
    ...mapGetters({
      creators: "creator/creators"
    }),
    getSize() {
      // return this.creators.length / 4;
      let size = this.creators.length / 1;
      console.log(Math.ceil(size));
      return Math.ceil(size);
    },
    currentCreatorLG() {
      if (this.currentLG === 0) {
        return 8;
      } else if (this.currentLG === 1) {
        return 17;
      } else if (this.currentLG === 2) {
        return 26;
      }
      return this.creators.length;
    }
  },
  watch: {
    modalOpen: function(isOpen) {
      if (isOpen) {
        if (process.browser) {
          document.documentElement.style.overflow = "hidden";
          // document.documentElement is the same as using document.querySelector('#root')
        }
      } else {
        if (process.browser) {
          document.documentElement.style.overflow = "auto";
        }
      }
    }
  },
  methods: {
    nextSlide() {
      this.$refs.creatorCarousel.goToPage(
        this.$refs.creatorCarousel.getNextPage()
      );
    },
    prevSlide() {
      this.$refs.creatorCarousel.goToPage(
        this.$refs.creatorCarousel.getPreviousPage()
      );
    },
    getIndex(val, index) {
      if (val === 1) {
        return index;
      } else if (val === 2) {
        return 3;
      } else if (val === 3) {
        return 6;
      } else if (val === 4) {
        // return val * 2 + 2;
        return 9;
      } else if (val === 5) {
        // return (index - 1) * (val - 1) + 1;
        return 12;
      } else if (val === 6) {
        // return (index - 1) * (val - 1) - 4;
        return 15;
      } else if (val === 7) {
        // return (index - 2) * (val - 2) - 1;
        return 18;
      } else if (val === 8) {
        // return (index - 3) * (val - 2) - 2;
        return 21;
      } else if (val === 9) {
        return 24;
      } else if (val === 10) {
        return 27;
      } else if (val === 11) {
        return 30;
      } else if (val === 12) {
        return 33;
      }
      return index;
    },
    handleCurrentLG(e) {
      console.log(e);
      this.currentLG = e;
    }
  }
};
</script>

  <!-- <creator-card :vdata="creators[val + index]" v-if="creators[val + index]" class/> -->
            <!-- <creator-card :vdata="creators[index]" v-if="creators[index]" class/> -->
            <!-- <creator-card :vdata="creators[index+2]" v-if="creators[index+2]" class/> -->
            <!-- <creator-card
              :vdata="creators[getIndex(val,index)]"
              v-if="creators[getIndex(val,index)]"
              class
            />-->
            <!-- <creator-card
              :vdata="creators[getIndex(val,index)+ 1]"
              v-if="creators[getIndex(val,index)+1]"
              class
            />
            <creator-card
              :vdata="creators[getIndex(val,index)+ 2]"
              v-if="creators[getIndex(val,index)+2]"
              class
            />-->
