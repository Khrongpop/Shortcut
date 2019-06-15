<template>
  <section class="container x-ban">
    <VueMatrixRaindrop
      textContent="01"
      :fontSize="15"
      textColor="#FFFFFF"
      :speed="6"
      :canvasWidth="canvasWidth"
      :canvasHeight="canvasWidth*0.8"
    ></VueMatrixRaindrop>
    <Logo/>
    <!-- <img src="shortcut_left.png" alt="logoshortcut" class="logo-shortcut_left"> -->
    <div class="row w-100">
      <img src="logo+regis.png" alt="logoregister" class="logo-regis">
    </div>
    <img src="/png_error_line_right.png" alt="png_error_line_right" class="img-bg-font-right">
    <img src="/line_right.png" alt="line_right" class="img-bg-line-right">

    <div class="wrapper">
      <img src="/font_design_left_butt.png" alt="font_design_left_butt" class="img-bg-font-left">
      <img src="/png_line_left_butt.png" alt="png_line_left_butt" class="img-bg-line-left">

      <b-form @submit="onSubmit" v-if="show">
        <b-row class="w-100 d-content">
          <b-col col sm="12" md="6" offset-md="1" offset-lg="0" class="p-0 ml-lg-5">
            <b-form-group label="ชื่อ-สกุล" label-for="input-fullname">
              <b-form-input id="input-fullname" v-model="form.fullname" required class="bg-input"></b-form-input>
            </b-form-group>

            <b-form-group label="ชื่อเล่น" label-for="input-name">
              <b-form-input id="input-name" v-model="form.name" required class="bg-input"></b-form-input>
            </b-form-group>

            <b-form-group label="อาชีพ / ตำแหน่งงาน" label-for="input-job">
              <b-form-input id="input-job" v-model="form.job" required class="bg-input"></b-form-input>
            </b-form-group>

            <b-form-group label="หน่วยงาน / สถานศึกษา" label-for="input-department">
              <b-form-input
                id="input-department"
                v-model="form.department"
                required
                class="bg-input"
              ></b-form-input>
            </b-form-group>

            <b-form-group label="อีเมล" label-for="input-email">
              <b-form-input
                id="input-email"
                v-model="form.email"
                type="email"
                required
                class="bg-input"
              ></b-form-input>
            </b-form-group>
          </b-col>

          <b-col col sm="12" md="4" class="ml-md-5 p-0">
            <div class="bg-upload-img-outline">
              <div
                class="bg-upload-img-inside"
                :style="windowWidth >= 800 ? {'overflow': 'hidden'} : {'overflow':'hidden'}"
              >
                <div class="bg-upload-img-people">
                  <div v-if="windowWidth >= 800" style="width:140%;margin-left:-40px;">
                    <img :src="`${baseURL}/faceid2.png`" alt id="faceID">
                    <!-- <img
                    :src="form.image ? form.image:preview"x
                    alt="profile_people"
                    @click="$refs.up.click()"
                    class="img-profile"
                  >
                    <img src="/profile_gradient.png" alt="profile_gradient" class="img-bg">-->

                    <vue-web-cam
                      ref="webcam"
                      :device-id="deviceId"
                      width="100%"
                      @started="onStarted"
                      @stopped="onStopped"
                      @error="onError"
                      @cameras="onCameras"
                      @camera-change="onCameraChange"
                      v-if="!img"
                    />
                    <img
                      v-else
                      :src="img ? img:preview"
                      alt="profile_people"
                      @click="$refs.up.click()"
                      class="img-profile preview"
                    >
                  </div>
                  <div v-else>
                    <img
                      :src="img ? img:preview"
                      alt="profile_people"
                      @click="$refs.up.click()"
                      class="img-profile"
                    >
                  </div>
                </div>

                <!-- <input
                    @change="setImg"
                    ref="up"
                    required
                    style="display: none;"
                    type="file"
                    name="image"
                  >
                  <img
                    src="/icon_camera.png"
                    alt="icon_camera"
                    class="icon-addimg"
                    @click="$refs.up.click()"
                >-->
              </div>
              <div ref="up" name="image" class="text-center">
                <div v-if="windowWidth >= 800">
                  <img
                    src="/icon_camera.png"
                    alt="icon_camera"
                    class="icon-addimg"
                    @click="onCapture"
                    v-if="!img"
                  >
                  <b-button type="button" style="margin: 20px auto;" @click="onStart" v-else>Reset</b-button>
                  <button
                    type="button"
                    class="btn btn-secondary"
                    :disabled="counting"
                    @click="counting = true"
                  >
                    <countdown
                      v-if="counting"
                      :time="60000"
                      :leading-zero="false"
                      @countdownend="counting = false"
                    >
                      <template
                        slot-scope="props"
                      >Fetch again {{ props.totalSeconds }} seconds later</template>
                    </countdown>
                    <span v-else>Fetch Verification Code</span>
                  </button>
                </div>
                <div v-else>
                  <input
                    @change="setImg"
                    ref="up"
                    required
                    class="mobile-upload"
                    type="file"
                    name="image"
                  >
                  <img
                    src="/icon_camera.png"
                    alt="icon_camera"
                    class="icon-addimg"
                    @click="$refs.up.click()"
                  >
                </div>
              </div>
            </div>
          </b-col>
        </b-row>
        <b-col col md="11" offset-md="1" class="text-center mt-40">
          <div class="w-25 btn-bg"></div>
          <b-button type="submit" class="btn-shortcut">
            <img src="/get_shortcut.png" alt="btn">
          </b-button>
        </b-col>

        <!-- <fb-login/> -->

        <!-- <b-button variant="primary" @click="writeToFirestore" :disabled="writeSuccessful">
          <span v-if="!writeSuccessful">Write now</span>
          <span v-else>Successful!</span>
        </b-button>-->
      </b-form>
    </div>
  </section>
</template>

<script>
const Swal = require("sweetalert2");

import { fireDb, realDb, storage, dbAuth } from "~/plugins/firebase.js";
import fbLogin from "@/components/FacebookLogin";
import VueMatrixRaindrop from "@/node_modules/vue-matrix-digit-rain";
import Logo from "~/components/Logo";
// import { fireDb, realDb, storage } from "~/func/shortcut/plugins/firebase";
// import { WebCam } from "vue-web-cam";
export default {
  components: {
    fbLogin,
    VueMatrixRaindrop,
    Logo
    // "vue-web-cam": WebCam
  },
  head() {
    return {
      title: `Register`,
      counting: false
    };
  },
  data() {
    return {
      form: {
        fullname: "",
        name: "",
        job: "",
        department: "",
        email: "",
        image: null,
        timestamp: null
      },
      preview: "/profile_people.png",
      show: true,
      file: {},
      writeSuccessful: false,
      canvasWidth: 1440,
      canvasHeight: 1100,
      img: null,
      camera: null,
      deviceId: null,
      devices: [],
      img_file: null
    };
  },
  created() {},
  methods: {
    async writeToFirestore() {
      // const ref = fireDb.collection("users").doc();
      const ref = realDb.ref("users");
      this.form.timestamp = new Date();
      // const document = {
      //   text: "This is a test message."
      // };
      try {
        // await ref.set(this.form);
        await ref.push(this.form);
      } catch (e) {
        // TODO: error handling
        console.error(e);
      }
      this.writeSuccessful = true;
    },
    async onSubmit(evt) {
      evt.preventDefault();

      // this.form.timestamp = new Date().toString;
      if (this.img_file) {
        const ref = realDb.ref("users");
        let status = true;
        const _this = this;

        // let filename = new Date().getTime() + "_" + this.img.name;
        let filename = new Date().getTime() + "_" + this.form.name + ".jpeg";
        let storageRef = storage
          // .ref("images")
          // .ref("users")
          .ref("image/users/" + filename);

        let newUser = dbAuth
          .createUserWithEmailAndPassword(this.form.email, "password")
          .then(function(result) {
            // sucseess
            console.log("sucseess");
            let user = result.user;
            // console.log(_this.img);
            let uploadTask = storageRef.put(_this.img_file);

            uploadTask.on(
              "state_changed",
              function(snapshot) {
                console.log(snapshot);
              },
              function(error) {
                console.log(error);
                // Handle unsuccessful uploads
              },
              function() {
                console.log("upload");
                uploadTask.snapshot.ref
                  .getDownloadURL()
                  .then(function(downloadURL) {
                    console.log("File available at", downloadURL);
                    // Editor.insertEmbed(cursorLocation, "image", downloadURL);
                    _this.form.image = downloadURL;
                    // const ref = _this.realDb.ref("users");
                    try {
                      // ref.child(user.uid).set(_this.form);
                      ref.push(_this.form);
                      //  suscess
                      // TODO :   Alret upload suscess
                      Swal.fire({
                        type: "succcess",
                        title: "ขอบคุณ",
                        text: "คุณได้ทำการลงเบียนงาน Shortcut 13.5 สำเร็จ"
                      });
                      _this.clearData();
                    } catch (e) {
                      // error handling
                      Swal.fire({
                        type: "error",
                        title: "ขออภัย",
                        text: "ไม่สามารถอัพโหลดรูปได้!"
                      });
                      console.error(e);
                    }
                  });
              }
            );
          })
          .catch(function(error) {
            // Handle Errors here.
            //  error

            var errorCode = error.code;
            var errorMessage = error.message;

            console.log(errorCode);
            console.log(errorMessage);

            if (errorCode === "auth/email-already-in-use") {
              Swal.fire({
                type: "error",
                title: "แจ้งเตือน",
                text:
                  "email ผู้ใข้งานนี้ได้ทำการลงทะเบียนเรียบร้อยแล้ว กรุณาใช้ email อื่นในการลงทะเบียน"
              });
            } else if (errorCode === "auth/network-request-failed") {
              Swal.fire({
                type: "error",
                title: "แจ้งเตือน",
                text:
                  "ไม่สามารถเชื่อมต่อ Internet ได้ กรุณาเชื่อมต่อ Internet อีกครั้ง"
              });
            }
            // status = false;
            // ...
          });

        if (status) {
        } else {
          console.log("already have user");
        }

        //  const ref = realDb.ref("users");
        // try {
        //   await ref.push(this.form);
        // } catch (e) {
        //   // TODO: error handling
        //   console.error(e);
        // }
      } else {
        Swal.fire({
          type: "error",
          title: "แจ้งเตือน",
          text: "กรุณถ่ายรูปภาพ"
        });
      }
    },
    setImg(e) {
      this.img = URL.createObjectURL(event.target.files[0]);
      this.img_file = e.target.files[0];

      // this.form.image = e.target.files[0];
      // this.preview = URL.createObjectURL(event.target.files[0]);
    },
    onCapture() {
      this.img = this.$refs.webcam.capture();
      const _this = this;
      // console.log(this.img);
      const url = this.$refs.webcam.capture();
      fetch(url)
        .then(res => res.blob())
        .then(blob => {
          const file = new File([blob], "File name", {
            type: "image/jpeg"
          });
          _this.img_file = file;
        });
      this.$refs.webcam.stop();
    },
    onReset() {
      this.img = null;
      this.img_file = null;
      // this.$refs.webcam.stop();
      // this.$refs.webcam.start();
    },
    onStarted(stream) {
      console.log("On Started Event", stream);
    },
    onStopped(stream) {
      console.log("On Stopped Event", stream);
    },
    onStop() {
      this.$refs.webcam.stop();
    },
    async onStart() {
      await this.onReset();
      // this.img = null;
      this.$refs.webcam.start();
    },

    onError(error) {
      console.log("On Error Event", error);
    },
    onCameras(cameras) {
      this.devices = cameras;
      console.log("On Cameras Event", cameras);
    },
    onCameraChange(deviceId) {
      this.deviceId = deviceId;
      this.camera = deviceId;
      console.log("On Camera Change Event", deviceId);
    },
    clearData() {
      this.form = {
        fullname: "",
        name: "",
        job: "",
        department: "",
        email: "",
        image: null,
        timestamp: null
      };

      this.img = null;
      this.onStart();
      // this.$router.go(0);
    }
  },
  computed: {
    device() {
      return this.devices.find(n => n.deviceId === this.deviceId);
    }
  },
  watch: {
    camera(id) {
      this.deviceId = id;
    },
    devices() {
      // Once we have a list select the first one
      const [first, ...tail] = this.devices;
      if (first) {
        this.camera = first.deviceId;
        this.deviceId = first.deviceId;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
#vue-matrix-raindrop {
  position: absolute;
  z-index: 0;
  opacity: 0.2;
  max-width: 100%;
  max-height: 750px;
}
.x-ban {
  max-width: 100%;
  width: 100%;
  margin: 0 auto;
  padding: 0;
  justify-content: center;
  background-color: #000;
  color: #fff;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.btn-secondary:hover {
  background: none;
  border: none;
}
@media screen and (min-width: 1140px) {
  #vue-matrix-raindrop {
    left: 18%;
  }
}
</style>
