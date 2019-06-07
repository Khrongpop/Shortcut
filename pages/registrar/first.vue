<template>
  <section class="container">
    <div>
      <img :src="users[getIndex].image" alt>
      {{ users[getIndex].fullname }}
      <br>
      {{ users[getIndex].email }}
      <br>
      {{ users[getIndex].phone }}
      <br>
      {{users[getIndex].sex}}
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
      users: [],
      check: 1
    };
  },
  async asyncData({ app, params, error }) {
    const ref = realDb.ref("users").orderByChild("starCount");
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
    } catch (e) {
      // TODO: error handling
      console.error(e);
    }
    return {
      users: users
    };
  },

  computed: {
    getIndex() {
      let count = this.users.length;

      if (count % 3 == 0) {
        console.log(count % 3);
        return count - 2 - 1;
      } else if (count % 3 == 2) {
        console.log(count % 2);
        return count - 1 - 1;
      } else {
        console.log(count % 1);
        return count - 1;
      }
    },
    test() {
      let count = this.check;

      // TODO : FIRST
      // if (count % 3 == 0) {
      //   console.log(count % 3);
      //   return count - 2;
      // } else if (count % 3 == 2) {
      //   console.log(count % 2);
      //   return count - 1;
      // } else {
      //   console.log(count % 1);
      //   return count;
      // }

      // TODO : SECOND
      // if (count % 3 == 0) {
      //   console.log(count % 3);
      //   return count - 1;
      // } else if (count % 3 == 2) {
      //   console.log(count % 2);
      //   return count;
      // } else {
      //   console.log(count % 1);
      //   return count - 2;
      // }

      // TODO : THIRD
      // if (count % 3 == 0) {
      //   console.log(count % 3);
      //   return count;
      // } else if (count % 3 == 2) {
      //   console.log(count % 2);
      //   return count - 2;
      // } else {
      //   console.log(count % 1);
      //   return count - 1;
      // }
    }
  }
};
</script>
