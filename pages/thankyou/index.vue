<template>
  <div id="thankyou" :style="bg_animate">
    <div v-if="lg">
      <carousel :per-page="1" :paginationEnabled="false" :loop="true" :autoplay="false">
        <slide>
          <div class="row">
            <div class="col-lg-2 pb-3" v-if="windowWidth>768">
              <img :src="`${baseURL}/shortcut_left.png`" class="img-fluid">
            </div>
            <div class="col-lg-3">
              <img :src="`${baseURL}/thankyou.png`" v-if="windowWidth<768">
              <ul class="list-unstyled text-center" :class="lg?'m50per':''">
                <li>
                  ผู้ช่วยศาสตราจารย์ ดร.วันชัย สุทธะนันท์
                  <br>อธิการบดีมหาวิทยาลัยศิลปากร
                </li>
                <li class="pt-5">
                  ผู้ช่วยศาสตราจารย์สมศักดิ์ ชาติน้ำเพ็ชร
                  <br>คณบดีคณะเทคโนโลยีสารสนเทศและการสื่อสาร
                </li>
              </ul>
            </div>
            <div class="col-lg-7 text-center">
              <img :src="`${baseURL}/thankyou/head.png`" class="img-fluid">
              <div class="row pt-5">
                <div class="col-12 col-md-4">
                  <img :src="`${baseURL}/thankyou/n1.png`" class="img-fluid">
                  <ul class="list-unstyled list-teacher pt-2">
                    <li>อาจารย์รักชนก สุขะกาลนันท์</li>
                    <li>อาจารย์ ดร. อติเทพ แจ้ดนาลาว</li>
                    <li>อาจารย์กมลชนก อุยยืนยงค์</li>
                    <li>อาจารย์พีรพงษ์ เรืองอุดม</li>
                    <li>อาจารย์ศรันยา มะระพฤกษ์วรรณ</li>
                    <li>อาจารย์ศรายุทธ ธิบดี</li>
                  </ul>
                </div>
                <div class="col-12 col-md-4">
                  <img :src="`${baseURL}/thankyou/n2.png`" class="img-fluid">
                  <ul class="list-unstyled list-teacher pt-2">
                    <li>อาจารย์ ดร.กันย์พัชญ์ กะลัมพะเหติ</li>
                    <li>อาจารย์ ดร.รสา สุนทรายุทธ</li>
                    <li>อาจารย์ประธาน ด่านสกุลเจริญกิจ</li>
                    <li>อาจารย์พิสิฐพงษ์ สืบพิลา</li>
                    <li>อาจารย์อิทธิชัย ภูมิศิริวิไล</li>
                  </ul>
                </div>
                <div class="col-12 col-md-4">
                  <img :src="`${baseURL}/thankyou/n3.png`" class="img-fluid">
                  <ul class="list-unstyled list-teacher pt-2">
                    <li>อาจารย์ ดร.อรวรรณ ประฤติดี</li>
                    <li>ผศ. ดร. ธีรพงศ์ ลีลานุภาพ</li>
                    <li>อาจารย์กิตตินนท์ อุ้ยวงค์ไพศาล</li>
                    <li>อาจารย์ณัฐพงศ์ มาเสถียร</li>
                    <li>อาจารย์ศุภณัฐ โกมลารชุน</li>
                  </ul>
                </div>
                <div class="col-12 col-md-4 text-center">
                  <img :src="`${baseURL}/thankyou/n4.png`" class="img-fluid">
                  <ul class="list-unstyled list-teacher pt-2">
                    <li>อาจารย์ขจรพล หิรัญโชติไพศาล</li>
                    <li>อาจารย์จุลดิษฐ์ สันติธรณี</li>
                    <li>อาจารย์พสุพงษ์ ประเสริฐรุ่งเรือง</li>
                    <li>อาจารย์ศุภณัฐ จินตวัฒน์สกุล</li>
                    <li>อาจารย์อภิชาต บัญญัติศุภศิล</li>
                  </ul>
                </div>
                <div class="col-12 col-md-4">
                  <img :src="`${baseURL}/thankyou/n5.png`" class="img-fluid">
                  <ul class="list-unstyled list-teacher pt-2">
                    <li>อาจารย์โกวิท มีบุญ</li>
                    <li>อาจารย์ ดร.วิชญ มุกดามณี</li>
                    <li>อาจารย์ณัฐวุฒิ เลื่อนไธสง</li>
                    <li>อาจารย์ณปสก สันติสุนทรกูล</li>
                    <li>อาจารย์พัทยา อุประ</li>
                  </ul>
                </div>
                <div class="col-12 col-md-4">
                  <img :src="`${baseURL}/thankyou/n6.png`" class="img-fluid">
                  <ul class="list-unstyled list-teacher pt-2">
                    <li>อาจารย์เมธิน ปิงสุธิวงศ์</li>
                    <li>อาจารย์ ดร.บุญชู บุญลิขิตศิริ</li>
                    <li>อาจารย์นพรัตน์ ไพทูลสุริการ</li>
                    <li>อาจารย์นพรัตน์ ไพทูลสุริการ</li>
                    <li>อาจารย์ราเชนทร์ อุยยืนยงค์</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </slide>
        <slide>
          <div class="sponser">
            <img :src="`${baseURL}/thankyou/spon.png`" class="img-fluid">
          </div>
        </slide>
      </carousel>
    </div>
    <div v-else>
      <div class="row">
        <div class="col-lg-2 pb-3" v-if="lg">
          <img :src="`${baseURL}/shortcut_left.png`" class="img-fluid thank-title">
        </div>
        <div class="col-lg-3">
          <div class="text-center">
            <img :src="`${baseURL}/thankyou.png`" v-if="!lg">
          </div>
          <ul class="list-unstyled text-center" :class="lg?'m50per':''">
            <li>
              ผู้ช่วยศาสตราจารย์ ดร.วันชัย สุทธะนันท์
              <br>อธิการบดีมหาวิทยาลัยศิลปากร
            </li>
            <li class="pt-5">
              ผู้ช่วยศาสตราจารย์สมศักดิ์ ชาติน้ำเพ็ชร
              <br>คณบดีคณะเทคโนโลยีสารสนเทศและการสื่อสาร
            </li>
          </ul>
        </div>
        <div class="col-lg-7 text-center">
          <img :src="`${baseURL}/thankyou/head.png`" class="img-fluid">
          <div class="row pt-5">
            <div class="col-12 col-md-4">
              <img :src="`${baseURL}/thankyou/n1.png`" class="img-fluid">
              <ul class="list-unstyled list-teacher pt-2">
                <li>อาจารย์รักชนก สุขะกาลนันท์</li>
                <li>อาจารย์ ดร. อติเทพ แจ้ดนาลาว</li>
                <li>อาจารย์กมลชนก อุยยืนยงค์</li>
                <li>อาจารย์พีรพงษ์ เรืองอุดม</li>
                <li>อาจารย์ศรันยา มะระพฤกษ์วรรณ</li>
                <li>อาจารย์ศรายุทธ ธิบดี</li>
              </ul>
            </div>
            <div class="col-12 col-md-4">
              <img :src="`${baseURL}/thankyou/n2.png`" class="img-fluid">
              <ul class="list-unstyled list-teacher pt-2">
                <li>อาจารย์ ดร.กันย์พัชญ์ กะลัมพะเหติ</li>
                <li>อาจารย์ ดร.รสา สุนทรายุทธ</li>
                <li>อาจารย์ประธาน ด่านสกุลเจริญกิจ</li>
                <li>อาจารย์พิสิฐพงษ์ สืบพิลา</li>
                <li>อาจารย์อิทธิชัย ภูมิศิริวิไล</li>
              </ul>
            </div>
            <div class="col-12 col-md-4">
              <img :src="`${baseURL}/thankyou/n3.png`" class="img-fluid">
              <ul class="list-unstyled list-teacher pt-2">
                <li>อาจารย์ ดร.อรวรรณ ประฤติดี</li>
                <li>ผศ. ดร. ธีรพงศ์ ลีลานุภาพ</li>
                <li>อาจารย์กิตตินนท์ อุ้ยวงค์ไพศาล</li>
                <li>อาจารย์ณัฐพงศ์ มาเสถียร</li>
                <li>อาจารย์ศุภณัฐ โกมลารชุน</li>
              </ul>
            </div>
            <div class="col-12 col-md-4 text-center">
              <img :src="`${baseURL}/thankyou/n4.png`" class="img-fluid">
              <ul class="list-unstyled list-teacher pt-2">
                <li>อาจารย์ขจรพล หิรัญโชติไพศาล</li>
                <li>อาจารย์จุลดิษฐ์ สันติธรณี</li>
                <li>อาจารย์พสุพงษ์ ประเสริฐรุ่งเรือง</li>
                <li>อาจารย์ศุภณัฐ จินตวัฒน์สกุล</li>
                <li>อาจารย์อภิชาต บัญญัติศุภศิล</li>
              </ul>
            </div>
            <div class="col-12 col-md-4">
              <img :src="`${baseURL}/thankyou/n5.png`" class="img-fluid">
              <ul class="list-unstyled list-teacher pt-2">
                <li>อาจารย์โกวิท มีบุญ</li>
                <li>อาจารย์ ดร.วิชญ มุกดามณี</li>
                <li>อาจารย์ณัฐวุฒิ เลื่อนไธสง</li>
                <li>อาจารย์ณปสก สันติสุนทรกูล</li>
                <li>อาจารย์พัทยา อุประ</li>
              </ul>
            </div>
            <div class="col-12 col-md-4">
              <img :src="`${baseURL}/thankyou/n6.png`" class="img-fluid">
              <ul class="list-unstyled list-teacher pt-2">
                <li>อาจารย์เมธิน ปิงสุธิวงศ์</li>
                <li>อาจารย์ ดร.บุญชู บุญลิขิตศิริ</li>
                <li>อาจารย์นพรัตน์ ไพทูลสุริการ</li>
                <li>อาจารย์นพรัตน์ ไพทูลสุริการ</li>
                <li>อาจารย์ราเชนทร์ อุยยืนยงค์</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="sponser-m">
          <div class="text-center">
            <img :src="`${baseURL}/thankyou/spon.png`" class="img-fluid">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "~/components/Logo";
export default {
  layout: "topMenu",
  components: {
    Logo
  },
  head() {
    return {
      title: `Thankyou`
    };
  }
};
</script>

<style scoped>
.m50per {
  margin-top: 50%;
}
</style>
