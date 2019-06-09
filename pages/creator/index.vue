<template>
  <div>
    <b-row>
      <!-- <div v-for="creator in creators" :key="creator.id">
        <creator-card :vdata="creator"/>

      </div>-->
      <b-col>
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
      </b-col>
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
