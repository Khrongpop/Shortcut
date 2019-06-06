<template>
  <section class="container">
    <div>
      <div v-for="(user,index) in users" :key="index">
        <img :src="user.image" alt>
        {{ user.fullname }}
        <br>
        {{ user.email }}
        <br>
        {{ user.phone }}
        <br>
        {{user.sex}}
      </div>
    </div>
  </section>
</template>
<script>
import { realDb } from "~/plugins/firebase";
export default {
  // firebase: {
  //   usersdata: realDb.ref("users")
  // },
  data() {
    return {
      users: []
    };
  },
  async asyncData({ app, params, error }) {
    const ref = realDb.ref("users");
    let snap;
    const _this = this;
    try {
      // snap = await ref("users").on("value", function(snapshot) {
      //   snap = snapshot.val();
      // });
      ref.on("value", function(snapshot) {
        // console.log(snapshot);
        // console.log(snapshot.val());
        snap = snapshot.val();
        // _this.users = snapshot.val();
      });
      // console.log(snap);
    } catch (e) {
      // TODO: error handling
      console.error(e);
    }
    return {
      // users: JSON.stringify(snap)
      users: snap
    };
  }
};
</script>
