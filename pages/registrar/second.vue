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

      <br>
      <br>
      {{users.length}}
      <br>
      <br>
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
  methods: {
    getIndex() {
      let count = this.users.length;

      if (count % 3 == 0) {
        console.log(count % 3);
        return count - 1;
      } else if (count % 3 == 2) {
        console.log(count % 2);
        return count;
      } else {
        console.log(count % 1);
        return count - 2;
      }
    }
  }
};
</script>
