<template>
  <section class="container">
    <fb-login/>
    <div>
      <b-form @submit="onSubmit" v-if="show">
        <b-row>
          <b-col col md="6">
            <b-form-group label="FULL NAME" label-for="input-fullname">
              <b-form-input
                id="input-fullname"
                v-model="form.fullname"
                required
                placeholder="SASITHORN SINJAROENPONG"
              ></b-form-input>
            </b-form-group>

            <b-form-group label="NICKNAME" label-for="input-name">
              <b-form-input id="input-name" v-model="form.name" required placeholder="CHOMPOO"></b-form-input>
            </b-form-group>

            <b-form-group label="JOB / POSITION" label-for="input-job">
              <b-form-input id="input-job" v-model="form.job" required placeholder="CHOMPOO"></b-form-input>
            </b-form-group>

            <b-form-group label="DEPARTMENT / ACADEMY " label-for="input-department">
              <b-form-input id="input-department" v-model="form.department" required placeholder="CHOMPOO"></b-form-input>
            </b-form-group>

            <b-form-group label="EMAIL" label-for="input-email">
              <b-form-input
                id="input-email"
                v-model="form.email"
                type="email"
                required
                placeholder="SASITHORN@SHORYCUT.COM"
              ></b-form-input>
            </b-form-group>
          </b-col>

          <b-col col md="6">
            <b-form-file
              v-model="file"
              :state="Boolean(file)"
              placeholder="Choose a file..."
              drop-placeholder="Drop file here..."
              accept="image/*"
              required
            ></b-form-file>
          </b-col>
        </b-row>

        <b-button type="submit" variant="primary">Submit</b-button>

        <!-- <b-button variant="primary" @click="writeToFirestore" :disabled="writeSuccessful">
          <span v-if="!writeSuccessful">Write now</span>
          <span v-else>Successful!</span>
        </b-button>-->
      </b-form>
    </div>
  </section>
</template>

<script>
import { fireDb, realDb, storage } from "~/plugins/firebase.js";
import fbLogin from "@/components/FacebookLogin";

// import { fireDb, realDb, storage } from "~/func/shortcut/plugins/firebase";

export default {
  components: {
    fbLogin
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
      foods: [
        { text: "Select One", value: null },
        "Carrots",
        "Beans",
        "Tomatoes",
        "Corn"
      ],
      show: true,
      file: null,
      writeSuccessful: false
    };
  },
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

      let filename = new Date().getTime() + "_" + this.file.name;
      // this.form.timestamp = new Date().toString;
      let storageRef = storage
        // .ref("images")
        // .ref("users")
        .ref("image/users/" + filename);

      let uploadTask = storageRef.put(this.file);
      const _this = this;
      const ref = realDb.ref("users");

      uploadTask.on(
        "state_changed",
        function(snapshot) {},
        function(error) {
          // Handle unsuccessful uploads
        },
        function() {
          uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
            console.log("File available at", downloadURL);
            // Editor.insertEmbed(cursorLocation, "image", downloadURL);
            _this.form.image = downloadURL;
            // const ref = _this.realDb.ref("users");
            try {
              ref.push(_this.form);
            } catch (e) {
              // TODO: error handling
              console.error(e);
            }
          });
        }
      );

      //  const ref = realDb.ref("users");
      // try {
      //   await ref.push(this.form);
      // } catch (e) {
      //   // TODO: error handling
      //   console.error(e);
      // }
    },
    // onReset(evt) {
    //   evt.preventDefault();
    //   // Reset our form values
    //   this.form.fullname = "";
    //   this.form.name = "";
    //   this.form.job = "";
    //   this.form.department = "";
    //   this.form.email = "";
    //   // Trick to reset/clear native browser form validation state
    //   this.show = false;
    //   this.$nextTick(() => {
    //     this.show = true;
    //   });
    // }
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
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
</style>
