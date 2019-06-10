<template>
  <div>
    <div style="width:30%" class="float-left">sdsds</div>
    <div style="width:70%" class="float-right mb-5">
      <b-row>
        <b-col>
          SHOWREEL
          <br>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/lELqMu5HCY0"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </b-col>
        <b-col>TECHNOLOGY</b-col>
      </b-row>
    </div>
    <pre class="text-white">
        {{creator(id)}}
    </pre>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  layout: "topMenu",
  computed: {
    id() {
      return parseInt(this.$route.params.id);
    },
    ...mapGetters({
      creator: "creator/getCreatorById"
    })
  }
};
</script>

