<template>
  <section class="container">
    <div>
      <div v-for="(user,index) in users" :key="index">
        <!-- <img :src="user.image" alt> -->
        <b-img v-bind="mainProps" rounded="circle" :alt="user.fullname" :src="user.image"></b-img>
        {{ user.fullname }}
        <br>
        {{ user.email }}
        <br>
        {{ user.phone }}
        <br>
        {{user.sex}}
        <br>
        <br>
        <br>
      </div>
    </div>
  </section>
</template>
<script>
import { realDb } from "~/plugins/firebase";
// import { realDb } from "~/func/shortcut/plugins/firebase";
export default {
  firebase: {
    //   usersdata: realDb.ref("users")
  },
  data() {
    return {
      users: [],
      mainProps: {
        // blank: true,
        // blankColor: "#777",
        width: 75,
        height: 75,
        class: "m1"
      }
    };
  },
  async asyncData({ app, params, error }) {
    const ref = realDb.ref("users");
    let snap;
    let users = [];
    const _this = this;
    try {
      ref.once("value", function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
          var childKey = childSnapshot.key;
          var childData = childSnapshot.val();
          // console.log("childKey", childKey);
          // console.log("childData", childData);
          users.push(childData);
        });
      });

      // console.log(snap);
    } catch (e) {
      // TODO: error handling
      console.error(e);
    }
    return {
      users: users
    };
  },
  methods: {}
};
</script>

<style scoped>
img {
  object-fit: cover;
}
</style>

