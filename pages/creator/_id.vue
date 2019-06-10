<template>
  <div id="creator_detail">
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
        <b-col>
          TECHNOLOGY
          <br>FROTEND
          <br>BACKEND
        </b-col>
      </b-row>
      <b-row class="mt-3">
        <b-col>
          SCREENSHOT
          <br>
          <carousel :per-page="5" :paginationEnabled="false" :loop="true" :autoplay="false">
            <slide v-for="item in 10" :key="item.id">
              <b-col>
                <b-img v-bind="mainProps" rounded alt="Rounded image"></b-img>
              </b-col>
            </slide>
          </carousel>
        </b-col>
      </b-row>
      <b-row class="mt-3">
        <b-col class="avatar-card">
          <b-img v-bind="avataProps" rounded alt="Rounded image"></b-img>
          <div class="avatar-txt">
            <h2>{{creator(id).name}}</h2>
            <p>ID : {{creator(id).id}}</p>

            <p>EMAIL : {{creator(id).email}}</p>
          </div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  layout: "topMenu",
  data() {
    return {
      mainProps: {
        blank: true,
        blankColor: "#777",
        width: 240,
        height: 140,
        class: ""
      },
      avataProps: {
        blank: true,
        blankColor: "#777",
        width: 135,
        height: 135,
        class: ""
      }
    };
  },
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

