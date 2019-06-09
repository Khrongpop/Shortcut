<template>
  <div>
    <b-row>
      <div v-for="(creator,index) in creators" :key="creator.id">
        <!-- <creator-card :vdata="creator"/> -->
        <!-- <b-col v-if="index === 0"> -->
        <div v-if="index < 5">
          <b-col v-if="index % 5 === 0">
            <creator-card :vdata="creator" class="mt-5"/>
          </b-col>

          <b-col v-else-if="index % 5 === 1">
            <creator-card :vdata="creator"/>
            <creator-card :vdata="creator"/>
          </b-col>

          <b-col v-else-if="index % 5 === 2" class="mt-5">
            <creator-card :vdata="creator"/>
            <creator-card :vdata="creator"/>
          </b-col>

          <b-col v-else-if="index % 5 === 3">
            <creator-card :vdata="creator"/>
            <creator-card :vdata="creator"/>
          </b-col>

          <b-col v-else-if="index % 5 === 4">
            <creator-card :vdata="creator" class="mt-5"/>
          </b-col>
        </div>
        <div v-else-if="index < 10">
          <b-col v-if="index % 5 === 0">
            <creator-card :vdata="creator"/>
            <creator-card :vdata="creator"/>
          </b-col>

          <b-col v-else-if="index % 5 === 1" class="mt-5">
            <creator-card :vdata="creator"/>
            <creator-card :vdata="creator"/>
          </b-col>

          <b-col v-else-if="index % 5 === 2">
            <creator-card :vdata="creator"/>
            <creator-card :vdata="creator"/>
          </b-col>

          <b-col v-else-if="index % 5 === 3">
            <creator-card :vdata="creator" class="mt-5"/>
          </b-col>

          <b-col v-else-if="index % 5 === 4">
            <creator-card :vdata="creator"/>
            <creator-card :vdata="creator"/>
          </b-col>
        </div>
        <div v-else>
          <b-col v-if="index % 5 === 0" class="mt-5">
            <creator-card :vdata="creator"/>
            <creator-card :vdata="creator"/>
          </b-col>

          <b-col v-else-if="index % 5 === 1">
            <creator-card :vdata="creator"/>
            <creator-card :vdata="creator"/>
          </b-col>

          <b-col v-else-if="index % 5 === 2">
            <creator-card :vdata="creator" class="mt-5"/>
          </b-col>

          <b-col v-else-if="index % 5 === 3">
            <creator-card :vdata="creator"/>
            <creator-card :vdata="creator"/>
          </b-col>

          <b-col v-else-if="index % 5 === 4" class="mt-5">
            <creator-card :vdata="creator"/>
            <creator-card :vdata="creator"/>
          </b-col>
        </div>
      </div>

      <!-- <b-col>
        <creator-card :vdata="creators[0]" class="mt-5"/>
      </b-col>
      <b-col>
        <creator-card :vdata="creators[0]"/>
        <creator-card :vdata="creators[0]"/>
      </b-col>
      <b-col>
        <creator-card :vdata="creators[0]" class="mt-5"/>
        <creator-card :vdata="creators[0]"/>
      </b-col>
      <b-col>
        <creator-card :vdata="creators[0]"/>
        <creator-card :vdata="creators[0]"/>
      </b-col>
      <b-col>
        <creator-card :vdata="creators[0]" class="mt-5"/>
      </b-col>-->
    </b-row>
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
  }
};
</script>
