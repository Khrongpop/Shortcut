<template>
  <div>
    <div style="height:100%">
      <div style="width:30%" class="float-left">sdsds</div>
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
    ...mapGetters({
      creators: "creator/creators"
    })
  },
  methods: {}
};
</script>
