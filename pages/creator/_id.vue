<template>
  <div id="creator_detail">
    <div style="width:10%" class="float-left">sdsds</div>
    <carousel :per-page="1" :paginationEnabled="false" :loop="true" :autoplay="false">
      <slide>
        <div style="width:70%" class="float-left">
          <div style="width:100%" class="float-left">
            <h1>{{creator(id).project_name}}</h1>
            <h2>การออกแบบ</h2>
          </div>
          <div style="width:50%" class="float-left">
            <b-img v-bind="profileProps" rounded alt="Rounded image"></b-img>
          </div>
          <div style="width:50%" class="float-right">
            <img src="/creators/detail/func.png" alt>
            <br>

            <ul class="list-unstyled">
              <li>
                <img src="/creators/detail/bulet.png" alt>
                รายละเอียดฟังก์ชัน Lorem Ipsum คือ เนื้อหา
                จำลองแบบเรียบๆ ที่ใช้กันในธุรกิจงานพิมพ์
              </li>
              <li>
                <img src="/creators/detail/bulet.png" alt>
                รายละเอียดฟังก์ชัน Lorem Ipsum คือ เนื้อหา
                จำลองแบบเรียบๆ ที่ใช้กันในธุรกิจงานพิมพ์
              </li>
              <li>
                <img src="/creators/detail/bulet.png" alt>
                รายละเอียดฟังก์ชัน Lorem Ipsum คือ เนื้อหา
                จำลองแบบเรียบๆ ที่ใช้กันในธุรกิจงานพิมพ์
              </li>
            </ul>
          </div>
        </div>
      </slide>
      <slide>
        <div style="width:50%" class="float-left">
          <b-row>
            <!-- <carousel :per-page="2" :paginationEnabled="false" :loop="true" :autoplay="false"> -->
            <!-- <slide> -->

            <!-- </slide> -->
            <!-- <slide> -->
            <b-col>
              <b-row class="creator_row">
                <b-col>
                  <img src="/creators/detail/showreel.png" alt>
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
                  <img src="/creators/detail/tech.png" alt>

                  <br>FROTEND
                  <br>BACKEND
                </b-col>
              </b-row>
              <b-row class="mt-3">
                <b-col>
                  <img src="/creators/detail/screenshots.png" alt>

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
            </b-col>
            <!-- </slide> -->
            <!-- </carousel> -->
          </b-row>
        </div>
      </slide>
    </carousel>

    <b-row class="mt-3">
      <div class="avatar">
        <b-col class="avatar-card">
          <b-img
            v-bind="avataProps"
            rounded
            alt="Rounded image"
            :src="`/creators/${creator(id).id}.jpg`"
          ></b-img>
          <div class="avatar-txt">
            <h2>{{creator(id).name}}</h2>
            <p>ID : {{creator(id).id}}</p>

            <p>EMAIL : {{creator(id).email}}</p>
            {{creator(id).facebook}}
          </div>
        </b-col>
      </div>
    </b-row>
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
        // blank: true,
        // blankColor: "#777",
        width: 135,
        height: 135,
        class: ""
      },
      profileProps: {
        blank: true,
        blankColor: "#777",
        width: 340,
        height: 680,
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

<style scoped>
img {
  object-fit: cover;
}
</style>
