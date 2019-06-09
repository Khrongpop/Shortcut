<template>
  <div>
    <div>
      <div style="width:30%" class="float-left">sdsds</div>
      <div style="width:70%" class="float-right">
        <carousel :per-page="5" :paginationEnabled="false" :loop="true" :autoplay="false">
          <slide v-for="(creator, index) in creators" :key="index">
            <!-- <creator-card :vdata="creator" class="mt-5"/> -->
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
          </slide>
        </carousel>
      </div>
      <span class="clearfix"></span>
    </div>
    <!-- <b-row>
      <br>
      <br>
      <div style="width:30%" class="float-left">sdsds</div>
      <div style="width:70%" class="float-right">
        <b-row>
          <div v-for="(creator,index) in creators" :key="creator.id">
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
    </b-row>-->
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
