<template>
  <section class="container">
    <div>
      <div>
        <h2>Read from Firestore.</h2>
        <div>
          <button @click="readFromFirestore" :disabled="readSuccessful">
            <span v-if="!readSuccessful">Read now</span>
            <span v-else>Successful!</span>
          </button>
          <p>{{text}}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from "~/components/Logo.vue";
import { fireDb } from "~/plugins/firebase.js";
export default {
  components: {
    Logo
  },
  data() {
    return {
      writeSuccessful: false,
      readSuccessful: false,
      text: "sd"
    };
  },
  async asyncData({ app, params, error }) {
    const ref = fireDb.collection("users");
    let snap;
    console.log(ref);
    try {
      snap = await ref.get();
      console.log(snap);
    } catch (e) {
      // TODO: error handling
      console.error(e);
    }
    return {
      text: "snap.data()"
    };
  },
  methods: {
    async writeToFirestore() {
      const ref = fireDb.collection("users").doc("users");
      const document = {
        text: "This is a test message."
      };
      try {
        await ref.set(document);
      } catch (e) {
        // TODO: error handling
        console.error(e);
      }
      this.writeSuccessful = true;
    },
    async readFromFirestore() {
      const ref = fireDb.collection("users");
      let snap;
      console.log(ref);
      try {
        snap = await ref.get();
      } catch (e) {
        // TODO: error handling
        console.error(e);
      }
      this.text = snap.data();
      this.readSuccessful = true;
    }
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
