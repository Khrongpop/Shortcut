<template>
  <div id="exhibition" :style="bg_animate">
    <div v-if="lg">
      <!-- <div style="width:5%;" class="float-left">อ่านทำไม</div> -->
      <carousel :per-page="1" :paginationEnabled="false" :loop="true" :autoplay="false">
        <slide class="exhibition-section-1">
          <Logo/>
          <div class="video">
            <img :src="`${baseURL}/exhibition/banner.jpg`" alt>
          </div>

          <div class="bottom-content-1">
            <img :src="`${baseURL}/exhibition/key-title.png`" alt class="img-key">

            <!-- <div class="img-key"></div> -->
            <div class="bottom-left-content-1">
              <!-- <div class="img-title"></div> -->
              <img :src="`${baseURL}/exhibition/web-title.png`" alt>
              <p>
                คณะเทคโนโลยีสารสนเทศและการสื่อสาร มหาวิทยาลัยศิลปากåร มหาวิทยาลัยชั้น
                นำแห่งการสร้างสรรค์ ได้เล็งเห็นความสำคัญของการนำระบบเทคโนโลยีสารสนเทศ
                และการสื่อสารเข้ามาใช้ให้เกิดประโยชน์ มุ่งหวังการผลิตบัณฑิตในสาขาวิชาที่สามารถ
                ประยุกต์ความรู้และทักษะการบูรณาการศิลปะการออกแบบ และเทคโนโลยีเข้าด้วยกัน
                เพื่อตอบโจทย์ความต้องการของประเทศที่กำลังก้าวเข้าสู่ยุคเศรษฐกิจดิจิทัลอย่างเต็มตัว
              </p>
            </div>
          </div>
        </slide>
        <slide class="exhibition-section-2">
          <!-- <div class="slide">
            <b-row>
              <carousel :per-page="1" :paginationEnabled="false" :loop="true" :autoplay="false">
                <slide v-for="(item,index) in 5" :key="index">
                  <b-col>
                  <img src="https://placehold.it/400x250">
                  </b-col>
                </slide>
              </carousel>
            </b-row>
          </div>-->
          <div class="bottom-content-1">
            <span class="clearfix"></span>
            <div class="bottom-left-content-2 mt-3">
              <img :src="`${baseURL}/exhibition/pick.png`" alt class="pick">
              <img :src="`${baseURL}/exhibition/ex-title.png`" alt class="ex-title">
              <!-- <div class="img-title"> -->
              <!-- <div class="img"></div> -->
              <!-- </div> -->
              <p>
                ทางลัด คือตัวช่วย ทางออก วิธี ดีที่สุด ทางเลือก เปรียบเทียบกับวิธีอื่นที่ดีน้อยกว่า
                อัจฉริยะ คือมีความรู้ แก้ไขปัญหา เป็นที่น่าแปลกใจ ไม่จำเป็นต้องซับซ้อน ไม่จำเป็นต้องยาก เป้าหมาย คือ
                ปัญหาในชีวิตประจำวันหรือเรื่องราวเล็กๆน้อยๆ ไม่จำเป็นต้องเป็นเรื่องใหญ่
              </p>
              <p>
                ให้ก้าวล้ำเส้นแถวหน้าในกระแสวิวัฒน์ของสังคมโลก มีงานผ่านผลงานทั้ง 35 ชิ้น
                โดยแต่ละชิ้นล้วนมีความแตกต่างและโดดเด่น สะท้อนองค์ความรู้ด้านการออกแบบและพัฒนางานให้ออกมาใช้ได้จริง
                บนสื่อดิจิทัลที่ทันสมัย ตอบโจทย์วงการวิชาการและวิชาชีพ
              </p>
              <span>*หมายเลข 13.5 มีนัยยะแฝงสองส่วนคือ สื่อถึงรุ่นที่ 13</span>
            </div>
          </div>
        </slide>
      </carousel>
      <span class="clearfix"></span>
    </div>
    <div v-else>
      <b-row>
        <img :src="`${baseURL}/exhibition/m-title.png`" alt>
      </b-row>
      <b-row>
        <img
          :src="`${baseURL}/exhibition/web-title.png`"
          alt
          style="width:300px; margin-left:6rem"
          class="mb-3"
        >
      </b-row>
      <b-row>
        <img :src="`${baseURL}/exhibition/banner.jpg`" alt style="width:100%;">
      </b-row>
      <b-row class="exhibition-section-m">
        <div class="bottom-content-1">
          <img :src="`${baseURL}/exhibition/pick.png`" alt class="img_pick">
          <img :src="`${baseURL}/exhibition/key-title.png`" alt class="img_txt">

          <!-- <div class="img-key"></div> -->
          <div class="bottom-left-content-1">
            <p>
              คณะเทคโนโลยีสารสนเทศและการสื่อสาร มหาวิทยาลัยศิลปากåร มหาวิทยาลัยชั้น
              นำแห่งการสร้างสรรค์ ได้เล็งเห็นความสำคัญของการนำระบบเทคโนโลยีสารสนเทศ
              และการสื่อสารเข้ามาใช้ให้เกิดประโยชน์ มุ่งหวังการผลิตบัณฑิตในสาขาวิชาที่สามารถ
              ประยุกต์ความรู้และทักษะการบูรณาการศิลปะการออกแบบ และเทคโนโลยีเข้าด้วยกัน
              เพื่อตอบโจทย์ความต้องการของประเทศที่กำลังก้าวเข้าสู่ยุคเศรษฐกิจดิจิทัลอย่างเต็มตัว
            </p>
          </div>
        </div>
      </b-row>
      <b-row>
        <div class="bottom-left-content-m mt-3">
          <img :src="`${baseURL}/exhibition/ex-title.png`" alt class="ex-title">
          <!-- <div class="img-title"> -->
          <!-- <div class="img"></div> -->
          <!-- </div> -->
          <p>
            ทางลัด คือตัวช่วย ทางออก วิธี ดีที่สุด ทางเลือก เปรียบเทียบกับวิธีอื่นที่ดีน้อยกว่า
            อัจฉริยะ คือมีความรู้ แก้ไขปัญหา เป็นที่น่าแปลกใจ ไม่จำเป็นต้องซับซ้อน ไม่จำเป็นต้องยาก เป้าหมาย คือ
            ปัญหาในชีวิตประจำวันหรือเรื่องราวเล็กๆน้อยๆ ไม่จำเป็นต้องเป็นเรื่องใหญ่
          </p>
          <p>
            ให้ก้าวล้ำเส้นแถวหน้าในกระแสวิวัฒน์ของสังคมโลก มีงานผ่านผลงานทั้ง 35 ชิ้น
            โดยแต่ละชิ้นล้วนมีความแตกต่างและโดดเด่น สะท้อนองค์ความรู้ด้านการออกแบบและพัฒนางานให้ออกมาใช้ได้จริง
            บนสื่อดิจิทัลที่ทันสมัย ตอบโจทย์วงการวิชาการและวิชาชีพ
          </p>
          <span>*หมายเลข 13.5 มีนัยยะแฝงสองส่วนคือ สื่อถึงรุ่นที่ 13</span>
        </div>
      </b-row>
    </div>
  </div>
</template>

<script>
import Logo from "~/components/Logo";
export default {
  head() {
    return {
      title: `Exhibition`
    };
  },
  layout: "topMenu",
  components: {
    Logo
  }
};
</script>

<style>
</style>
