<template>
  <div>
    <div v-if="lg">
      <div style="width:30%" class="float-left">{{creators(name).length}}</div>
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
      อ่านทำไม
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
export default {
  layout: "topMenu",
  components: {
    CreatorCard
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
    }
  }
};
</script>

