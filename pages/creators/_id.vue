<template>
  <div id="creator_detail" :style="bg_animate">
    <div v-if="lg">
      <transition name="modal" v-if="showModal">
        <div class="modal-mask" @click="showModal = false">
          <div class="modal-wrapper">
            <div class="modal-container">
              <!-- <button class="modal-default-button" @click="showModal = false">OK</button> -->
              <b-img :src="showImage" center fluid :style="getImgStyle"></b-img>
            </div>
          </div>
        </div>
      </transition>
      <!-- <div style="width:10%" class="float-left">อ่านทำไม</div> -->
      <carousel
        :per-page="1"
        :paginationEnabled="false"
        :loop="true"
        :autoplay="false"
        style="margin-left:10%"
      >
        <slide>
          <div style="width:70%" class="float-left">
            <div style="width:100%" class="float-left">
              <h1>{{creator(id).project_name}}</h1>
              <h2>{{creator(id).project_fullname_th}}</h2>
            </div>
            <div style="width:50%" class="float-left">
              <b-img
                class="profileProps"
                rounded
                alt="Rounded image"
                :src="`${baseURL}/creators_detail/${creator(id).id}_creator.png`"
              ></b-img>
            </div>
            <div style="width:50%; margin-left:-7%;" class="float-left">
              <img :src="`${baseURL}/creators/detail/func.png`" alt class="func-title" />

              <ul class="list-unstyled">
                <li
                  v-for="(func, index) in creator(id).functions"
                  :key="index"
                  :class="getClass(index)"
                >
                  <img
                    :src="`${baseURL}/creators/detail/bulet.png`"
                    width="60"
                    style="margin-top:-20px;"
                  />
                  <div class="text-list">
                    <h5>{{func.name}}</h5>
                    <p>{{func.des}}</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </slide>
        <slide>
          <div style="width:50%" class="float-left item-2">
            <b-row>
              <b-col>
                <b-row class="creator_row">
                  <b-col>
                    <img :src="`${this.baseURL}/creators/detail/showreel.png`" alt />
                    <br />
                    <iframe
                      width="480"
                      height="245"
                      :src="creator(id).showreel"
                      frameborder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </b-col>
                  <b-col class="tech-section">
                    <img :src="`${baseURL}/creators/detail/tech.png`" alt />
                    <b-row class="mt-3">
                      <b-col v-if="creator(id).frontends.length > 0">
                        <div class="tech-title">
                          <img
                            :src="`${baseURL}/creators/detail/bulet.png`"
                            alt
                            class="bulet"
                            width="60"
                          />
                          <span>FROTEND</span>
                          <b-row class="mt-3">
                            <b-col v-for="(frontend, index) in creator(id).frontends" :key="index">
                              <!-- <b-img v-bind="toolProps" rounded alt="Rounded image"></b-img> -->
                              <dev-icon
                                :name="frontend.img"
                                size="2"
                                v-if="frontend.img"
                                :svg="frontend.svg"
                              />
                              <!-- {{frontend}} -->
                              <p>{{frontend.name}}</p>
                            </b-col>
                          </b-row>
                        </div>
                      </b-col>
                      <b-col v-if="creator(id).backends.length > 0">
                        <div class="tech-title">
                          <img
                            :src="`${baseURL}/creators/detail/bulet.png`"
                            alt
                            class="bulet"
                            width="60"
                          />
                          <span class="mt-3">BACKEND</span>
                          <b-row class="mt-3">
                            <b-col v-for="(backend, index) in creator(id).backends" :key="index">
                              <!-- <b-img v-bind="toolProps" rounded alt="Rounded image"></b-img> -->
                              <dev-icon
                                :name="backend.img"
                                size="2"
                                v-if="backend.img"
                                :svg="backend.svg"
                              />

                              <p>{{backend.name}}</p>
                            </b-col>
                          </b-row>
                        </div>
                      </b-col>
                    </b-row>
                    <b-row class="mt-3">
                      <b-col v-if="creator(id).database">
                        <div class="tech-title">
                          <img :src="`${baseURL}/creators/detail/bulet.png`" alt class="bulet" />
                          <span class="mt-3">DATABASE</span>
                          <b-row class="mt-3">
                            <b-col>
                              <dev-icon
                                :name="creator(id).database.img"
                                size="2"
                                v-if="creator(id).database.img"
                                :svg="creator(id).database.svg"
                              />

                              <!-- <b-img v-bind="toolProps" rounded alt="Rounded image"></b-img> -->
                              <p
                                v-if="creator(id).database.name !== 'Firebase Realtime Database'"
                              >{{creator(id).database.name}}</p>
                              <p v-else>RTDB</p>
                            </b-col>
                          </b-row>
                        </div>
                      </b-col>
                      <b-col v-if="creator(id).tools.length > 0">
                        <div class="tech-title">
                          <img :src="`${baseURL}/creators/detail/bulet.png`" alt class="bulet" />
                          <span class="mt-3">TOOLS</span>
                          <b-row class="mt-3">
                            <!-- <b-col v-if="creator(id).tools.length > 3">
                            <b-row>
                              <carousel
                                :per-page="4"
                                :loop="true"
                                :autoplay="true"
                                :paginationEnabled="false"
                              >
                                <slide v-for="(tool, index) in creator(id).tools" :key="index">
                                  <b-img v-bind="toolProps" rounded alt="Rounded image"></b-img>
                                  <p>{{tool.name}}</p>
                                </slide>
                              </carousel>
                            </b-row>
                            </b-col>-->
                            <b-col v-for="(tool, index) in creator(id).tools" :key="index">
                              <div v-if="index < 3">
                                <dev-icon
                                  :name="tool.img"
                                  size="2"
                                  v-if="tool.img"
                                  :svg="tool.svg"
                                />
                                <p>{{tool.name}}</p>
                              </div>
                            </b-col>
                          </b-row>
                        </div>
                      </b-col>
                    </b-row>
                  </b-col>
                </b-row>
                <b-row :class="getScreenShotMargin">
                  <b-col>
                    <img :src="`${baseURL}/creators/detail/screenshots.png`" alt />

                    <br />

                    <!-- <silentbox-group>
                      <silentbox-item
                        src="https://i.imgur.com/U0FeDs1.png"
                        description="Sunken dreams II. by Arbebuk"
                      >
                        <img src="https://i.imgur.com/U0FeDs1.png" width="200px">
                      </silentbox-item>
                      <silentbox-item
                        src="https://i.imgur.com/RLxvDs3.jpg"
                        description="Tunnel View Sunrise by Porbital"
                      >
                        <img src="https://i.imgur.com/RLxvDs3.jpg" width="200px">
                      </silentbox-item>
                      <silentbox-item
                        src="https://i.imgur.com/U0FeDs1.png"
                        description="Mythology by Nelleke"
                      >
                        <img src="https://i.imgur.com/U0FeDs1.png" width="200px">
                      </silentbox-item>
                    </silentbox-group>-->

                    <carousel
                      :per-page="5"
                      :paginationEnabled="false"
                      :loop="true"
                      :autoplay="false"
                    >
                      <slide v-for="(val,item) in 10" :key="item.id">
                        <b-col>
                          <!-- <v-lazy-image src="http://lorempixel.com/400/200/" /> -->

                          <b-img
                            rounded
                            v-if="creator(id).screeshots[item]"
                            :src="creator(id).screeshots[item]"
                            width="240"
                            height="140"
                            @click="showModalImage(creator(id).screeshots[item])"
                          ></b-img>
                          <b-img v-bind="mainProps" rounded v-else></b-img>
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
              :src="`${baseURL}/creators/${creator(id).id}.jpg`"
            ></b-img>
            <div class="avatar-txt">
              <h3>{{creator(id).name}}</h3>
              <p>ID : {{creator(id).id}}</p>

              <p>EMAIL : {{creator(id).email}}</p>

              <div class="soical-set">
                <a :href="creator(id).facebook_link" target="_blank" rel="noopener noreferrer">
                  <i class="fa fa-facebook socail-icon"></i>
                  <!-- {{creator(id).facebook}} -->
                </a>
              </div>
            </div>
          </b-col>
        </div>
      </b-row>
    </div>
    <div v-else class="tab mt-5">
      <div>
        <b-row>
          <div>
            <h1>{{creator(id).project_name}}</h1>
            <h2>{{creator(id).project_fullname_th}}</h2>
          </div>
        </b-row>
        <b-row>
          <div
            class="float-left"
            :style="windowWidth > 499 ? {'width':'200px'} : {'width':'100%','margin':'20px 0 30px'}"
          >
            <b-img
              class="profilePropsMD"
              rounded
              alt="Rounded image"
              :src="`${baseURL}/creators/${creator(id).id}.jpg`"
              :style="windowWidth > 499 ? {'width':'180px'} : {'width':'100%'}"
            ></b-img>
          </div>
          <div class="float-left" :style="windowWidth > 499 ? {'width':'60%'} : {'width':'100%'}">
            <img :src="`${baseURL}/creators/detail/func.png`" alt class="func-title" />

            <ul class="list-unstyled">
              <li v-for="(func, index) in creator(id).functions" :key="index">
                <img
                  :src="`${baseURL}/creators/detail/bulet.png`"
                  width="50"
                  style="margin-top:-20px;"
                />
                <div class="text-list">
                  <h5>{{func.name}}</h5>
                  <p>{{func.des}}</p>
                </div>
              </li>
            </ul>
          </div>
        </b-row>
        <b-row>
          <b-col class="mt-3">
            <img :src="`${this.baseURL}/creators/detail/showreel.png`" alt class="mb-3" />
            <br />
            <iframe
              :width="windowWidth > 555 ? `480` : `100%`"
              height="245"
              :src="creator(id).showreel"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </b-col>
        </b-row>
        <b-row class="mt-3 mb-3">
          <b-col>
            <img :src="`${baseURL}/creators/detail/screenshots.png`" alt />

            <br />
            <carousel :per-page="3" :paginationEnabled="false" :loop="true" :autoplay="false">
              <slide v-for="(val,item) in 10" :key="item.id">
                <b-img
                  rounded
                  v-if="creator(id).screeshots[item]"
                  :src="creator(id).screeshots[item]"
                  width="240"
                  height="140"
                ></b-img>
                <b-img v-bind="mainProps" rounded v-else></b-img>
              </slide>
            </carousel>
          </b-col>
        </b-row>
        <b-row>
          <b-col class="mt-3">
            <img :src="`${baseURL}/creators/detail/tech.png`" alt class="mb-3" />
            <b-row class="mt-3">
              <b-col v-if="creator(id).frontends.length > 0">
                <div class="tech-title">
                  <img :src="`${baseURL}/creators/detail/bulet.png`" alt class="bulet" />
                  <span>FRONTEND</span>
                  <b-row class="mt-3">
                    <b-col v-for="(frontend, index) in creator(id).frontends" :key="index">
                      <!-- <b-img v-bind="toolProps" rounded alt="Rounded image"></b-img> -->
                      <dev-icon
                        :name="frontend.img"
                        size="2"
                        v-if="frontend.img"
                        :svg="frontend.svg"
                      />
                      <!-- {{frontend}} -->
                      <p>{{frontend.name}}</p>
                    </b-col>
                  </b-row>
                </div>
              </b-col>
              <b-col v-if="creator(id).backends.length > 0">
                <div class="tech-title">
                  <img :src="`${baseURL}/creators/detail/bulet.png`" alt class="bulet" />
                  <span class="mt-3">BACKEND</span>
                  <b-row class="mt-3">
                    <b-col v-for="(backend, index) in creator(id).backends" :key="index">
                      <!-- <b-img v-bind="toolProps" rounded alt="Rounded image"></b-img> -->
                      <dev-icon :name="backend.img" size="2" v-if="backend.img" :svg="backend.svg" />

                      <p>{{backend.name}}</p>
                    </b-col>
                  </b-row>
                </div>
              </b-col>
            </b-row>
            <b-row class="mt-4">
              <b-col v-if="creator(id).database">
                <div class="tech-title">
                  <img :src="`${baseURL}/creators/detail/bulet.png`" alt class="bulet" />
                  <span class="mt-3">DATABASE</span>
                  <b-row class="mt-3">
                    <b-col>
                      <dev-icon
                        :name="creator(id).database.img"
                        size="2"
                        v-if="creator(id).database.img"
                        :svg="creator(id).database.svg"
                      />

                      <!-- <b-img v-bind="toolProps" rounded alt="Rounded image"></b-img> -->
                      <p>{{creator(id).database.name}}</p>
                    </b-col>
                  </b-row>
                </div>
              </b-col>
              <b-col v-if="creator(id).tools.length > 0">
                <div class="tech-title">
                  <img :src="`${baseURL}/creators/detail/bulet.png`" alt class="bulet" />
                  <span class="mt-3">TOOLS</span>
                  <b-row class="mt-3">
                    <b-col v-for="(tool, index) in creator(id).tools" :key="index">
                      <div v-if="index < 3">
                        <dev-icon :name="tool.img" size="2" v-if="tool.img" :svg="tool.svg" />
                        <p>{{tool.name}}</p>
                      </div>
                    </b-col>
                  </b-row>
                </div>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </div>

      <div class="avatar">
        <b-col class="avatar-card">
          <b-img v-bind="avataProps" rounded :src="`${baseURL}/creators/${creator(id).id}.jpg`"></b-img>
          <div class="avatar-txt">
            <h3>{{creator(id).name}}</h3>
            <p>ID : {{creator(id).id}}</p>

            <p>EMAIL : {{creator(id).email}}</p>

            <div class="soical-set">
              <a :href="creator(id).facebook_link" target="_blank" rel="noopener noreferrer">
                <i class="fa fa-facebook socail-icon"></i>
                <!-- {{creator(id).facebook}} -->
              </a>
            </div>
          </div>
        </b-col>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import DevIcon from "~/components/DevIcon";
export default {
  head() {
    return {
      title: `${this.creator(this.id).project_name} | ${
        this.creator(this.id).project_fullname_th
      } | ${this.creator(this.id).name_th}`
    };
  },
  layout: "noMenu",
  components: {
    DevIcon
  },
  data() {
    return {
      showModal: false,
      imageCheck: false,
      showImage: null,
      mainProps: {
        blank: true,
        // blankColor: "#000",
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
        // blank: true,
        // blankColor: "#777",
        width: 340,
        height: 680,
        class: ""
      },
      toolProps: {
        blank: true,
        blankColor: "#777",
        width: 75,
        height: 75,
        class: ""
      }
    };
  },
  methods: {
    getClass(index) {
      if (index === 0) {
        return "";
      } else if (index === 1) {
        return "ml-6";
      }
      return "ml-10";
    },

    showModalImage(image) {
      if (process.client) {
        var img = new Image();
        img.src = image;
        let _this = this;
        img.addEventListener("load", function() {
          let width = this.naturalWidth;
          let height = this.naturalHeight;
          // console.log(width - height < 0);
          // console.log(_this.imageCheck);
          _this.imageCheck = width - height < 0;
          _this.showImage = image;
          _this.showModal = true;
          // return width - height < 0;
        });
      }
    }
  },
  computed: {
    id() {
      return parseInt(this.$route.params.id);
    },
    ...mapGetters({
      creator: "creator/getCreatorById"
    }),
    getScreenShotMargin() {
      return this.creator(this.id).tools.length === 0 &&
        !this.creator(this.id).database
        ? ""
        : "screenshot-section";
    },
    getImgStyle() {
      if (this.imageCheck) {
        return { width: "50%" };
      }
      return { width: "100%" };
    }
  }
};
</script>

<style scoped>
img {
  object-fit: cover;
}
#creator_detail .profileProps {
  width: 500px;
  height: 570px;
  margin-left: -190px;
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 40%;
  margin: 0px auto;
  /* padding: 20px 30px; */
  padding: 20px 10px;
  position: relative;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.7);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  /* float: right; */
  position: absolute;
  right: 10px;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
