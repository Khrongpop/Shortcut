<template>
  <div class="creator" :style="bg_animate">
    <div v-if="lg">
      <!-- <div style="width:5%;" class="float-left">อ่านทำไม</div> -->
      <div class="center-section">
        <Logo/>

        <div class="creator-txt">
          <h2>{{currentCreatorLG}}</h2>
          <h3>/</h3>
          <h1>{{creators(name).length}}</h1>
          <p>CREATORS</p>
        </div>
      </div>
      <div style="width:70%" class="float-right mb-5">
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
        >
          <slide v-for="(val, index)  in getSizes" :key="index">
            <!-- <creator-card :vdata=" creators(name)[index]" class="mt-9"/> -->
            <div v-if="index < 5">
              <b-col v-if="index % 5 === 0">
                <creator-card :vdata=" creators(name)[index]" class="mt-9"/>
              </b-col>

              <b-col v-else-if="index % 5 === 1">
                <creator-card :vdata=" creators(name)[index]"/>
                <creator-card
                  :vdata=" creators(name)[index+index]"
                  class="mt-3"
                  v-if="creators(name)[index+index]"
                />
              </b-col>

              <b-col v-else-if="index % 5 === 2" class="mt-5">
                <creator-card
                  :vdata=" creators(name)[index+(index % 5 - 1)]"
                  v-if="creators(name)[index+(index % 5 - 1)]"
                />
                <creator-card
                  :vdata=" creators(name)[index+index]"
                  class="mt-3"
                  v-if="creators(name)[index+index]"
                />
              </b-col>

              <b-col v-else-if="index % 5 === 3">
                <creator-card
                  :vdata=" creators(name)[index+(index % 5 - 1)]"
                  v-if="creators(name)[index+(index % 5 - 1)]"
                />
                <creator-card
                  :vdata=" creators(name)[index+index]"
                  class="mt-3"
                  v-if="creators(name)[index+index]"
                />
              </b-col>

              <b-col v-else-if="index % 5 === 4">
                <creator-card
                  :vdata=" creators(name)[index+(index % 5 - 1)]"
                  class="mt-9"
                  v-if="creators(name)[index+(index % 5 - 1)]"
                />
              </b-col>
            </div>

            <div v-else-if="index < 10">
              <b-col v-if="index % 5 === 0">
                <creator-card :vdata=" creators(name)[index+(index % 5 + 3)]"/>
                <creator-card :vdata=" creators(name)[index+(index % 5 + 4)]" class="mt-3"/>
              </b-col>

              <b-col v-else-if="index % 5 === 1" class="mt-5">
                <creator-card
                  :vdata=" creators(name)[index+(index % 5 + 3)]"
                  v-if="creators(name)[index+(index % 5 + 3)]"
                />
                <creator-card
                  :vdata=" creators(name)[index+(index % 5 + 4)]"
                  v-if="creators(name)[index+(index % 5 + 4)]"
                  class="mt-5"
                />
              </b-col>

              <b-col v-else-if="index % 5 === 2">
                <creator-card
                  :vdata=" creators(name)[index+(index % 5 + 3)]"
                  v-if="creators(name)[index+(index % 5 + 3)]"
                />
                <creator-card
                  :vdata=" creators(name)[index+(index % 5 + 4)]"
                  class="mt-3"
                  v-if="creators(name)[index+(index % 5 + 4)]"
                />
              </b-col>

              <b-col v-else-if="index % 5 === 3">
                <creator-card :vdata=" creators(name)[index+(index % 5 + 3)]" class="mt-9"/>
              </b-col>

              <b-col v-else-if="index % 5 === 4">
                <creator-card :vdata=" creators(name)[index+(index % 5 + 2)]"/>
                <creator-card :vdata=" creators(name)[index+(index % 5 + 3)]" class="mt-3"/>
              </b-col>
            </div>

            <div v-else-if="index  < 15">
              <b-col v-if="index % 5 === 0" class="mt-5">
                <creator-card :vdata=" creators(name)[index+(index % 5 + 7)]"/>
                <creator-card :vdata=" creators(name)[index+(index % 5 + 8)]" class="mt-3"/>
              </b-col>

              <b-col v-else-if="index % 5 === 1">
                <creator-card :vdata=" creators(name)[index+(index % 5 + 7)]"/>
                <creator-card :vdata=" creators(name)[index+(index % 5 + 8)]" class="mt-3"/>
              </b-col>

              <b-col v-else-if="index % 5 === 2">
                <creator-card :vdata=" creators(name)[index+(index % 5 + 7)]" class="mt-9"/>
              </b-col>

              <b-col v-else-if="index % 5 === 3">
                <creator-card :vdata=" creators(name)[index+(index % 5 + 6)]"/>
                <creator-card :vdata=" creators(name)[index+(index % 5 + 7)]" class="mt-3"/>
              </b-col>

              <b-col v-else-if="index % 5 === 4" class="mt-5">
                <creator-card :vdata=" creators(name)[index+(index % 5 + 6)]"/>
                <creator-card :vdata=" creators(name)[index+(index % 5 + 7)]" class="mt-3"/>
              </b-col>
            </div>

            <div v-else-if="index < 20">
              <b-col v-if="index % 5 === 0">
                <creator-card :vdata=" creators(name)[index+(index % 5 + 11)]"/>
                <creator-card :vdata=" creators(name)[index+(index % 5 + 12)]" class="mt-3"/>
              </b-col>

              <b-col v-else-if="index % 5 === 1" class="mt-5">
                <creator-card :vdata=" creators(name)[index+(index % 5 + 11)]"/>
                <creator-card :vdata=" creators(name)[index+(index % 5 + 12)]" class="mt-3"/>
              </b-col>

              <b-col v-else-if="index % 5 === 2">
                <creator-card :vdata=" creators(name)[index+(index % 5 + 11)]"/>
                <creator-card :vdata=" creators(name)[index+(index % 5 + 12)]" class="mt-3"/>
              </b-col>

              <b-col v-else-if="index % 5 === 3">
                <creator-card :vdata=" creators(name)[index+(index % 5 + 11)]" class="mt-9"/>
              </b-col>

              <b-col v-else-if="index % 5 === 4">
                <creator-card :vdata=" creators(name)[index+(index % 5 + 10)]"/>
                <creator-card :vdata=" creators(name)[index+(index % 5 + 11)]" class="mt-3"/>
              </b-col>
            </div>
          </slide>
        </carousel>
      </div>
      <span class="clearfix"></span>
    </div>
    <div v-else-if="md">
      <b-row class="mb-4">
        <div class="creator-txt-m">
          <p>
            CREATORS
            <span>{{creators(name).length}}</span>
          </p>
        </div>
      </b-row>
      <carousel
        :per-page="3"
        :paginationEnabled="true"
        :loop="true"
        :autoplay="false"
        :scrollPerPage="true"
        :navigationEnabled="true"
        paginationActiveColor="#6cdbe0"
        paginationColor="#ccc"
      >
        <slide v-for="(val, index)  in getSize" :key="index">
          <b-col>
            <creator-card
              :vdata="creators(name)[val + index-1]"
              v-if="creators(name)[val + index-1]"
              class
            />

            <creator-card
              :vdata="creators(name)[val + index]"
              v-if="creators(name)[val + index]"
              class
            />
          </b-col>
        </slide>
      </carousel>
    </div>
    <div v-else>
      <b-row class="mb-4">
        <div class="creator-txt-m">
          <p>
            CREATORS
            <span>{{creators(name).length}}</span>
          </p>
        </div>
      </b-row>
      <carousel
        :per-page="!lg ? 4 : (xs ? 2 : 3)"
        :paginationEnabled="true"
        :loop="true"
        :autoplay="false"
        :scrollPerPage="true"
        :navigationEnabled="true"
        paginationActiveColor="#6cdbe0"
        paginationColor="#ccc"
      >
        <slide v-for="(val, index)  in getSize" :key="index">
          <!-- {{creators(name)[index]}} -->
          <b-col>
            <creator-card
              :vdata="creators(name)[getIndex(val,index)]"
              v-if="creators(name)[getIndex(val,index)]"
              class
            />
            <creator-card
              :vdata="creators(name)[getIndex(val,index)+ 1]"
              v-if="creators(name)[getIndex(val,index)+1]"
              class
            />
            <creator-card
              :vdata="creators(name)[getIndex(val,index)+ 2]"
              v-if="creators(name)[getIndex(val,index)+2]"
              class
            />
          </b-col>
        </slide>
      </carousel>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CreatorCard from "@/components/CreatorCard";
import Logo from "~/components/Logo";
export default {
  head() {
    return {
      title: this.name
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
  computed: {
    name() {
      return this.$route.params.name;
    },
    ...mapGetters({
      creators: "creator/getCreatorByCat"
    }),
    getSizes() {
      let size = this.creators(this.name).length;
      if (size === 7) {
        return 5;
      } else if (size === 12) {
        return 7;
      }
      return 2;
    },
    getSize() {
      // return this.creators.length / 4;
      let size = this.creators(this.name).length / (this.md ? 2 : 3);
      console.log(Math.ceil(size));
      return Math.ceil(size);
    },
    currentCreatorLG() {
      let category_id = this.creators(this.name)[0].category_id;
      let size = this.creators(this.name).length;

      if (this.currentLG === 0 && size > 8) {
        return 8;
      }

      return size;
    }
  },
  methods: {
    getIndex(val, index) {
      if (val === 1) {
        return index;
      } else if (val === 2 || val === 3) {
        return index * val + 1;
      } else if (val === 4) {
        return val * 2 + 2;
      } else if (val === 5) {
        return (index - 1) * (val - 1) + 1;
      } else if (val === 6) {
        return (index - 1) * (val - 1) - 4;
      } else if (val === 7) {
        return (index - 2) * (val - 2) - 1;
      } else if (val === 8) {
        return (index - 3) * (val - 2) - 2;
      } else if (val === 9) {
        return 25;
      } else if (val === 10) {
        return 28;
      } else if (val === 11) {
        return 31;
      } else if (val === 12) {
        return 34;
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

