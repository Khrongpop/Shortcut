<template>
  <div id="login">
    <div class="btn-fb-box">
      <button
        class="btn-fb p-3 border-0 text-white"
        variant="primary"
        @click="fbSignIn()"
        style="background:#3B5998;"
      >
        <i class="fab fa-facebook-square fa-2x"></i> เข้าสู่ระบบด้วย facebook
      </button>
    </div>
  </div>
</template>

<script>
import { users, dbAuth, provider } from "~/plugins/firebase.js";
export default {
  methods: {
    fbSignIn: function() {
      let _this = this;
      dbAuth
        .signInWithPopup(provider)
        .then(function(result) {
          // This gives you a Facebook Access Token. You can use it to access the Facebook API.
          var token = result.credential.accessToken;
          // The signed-in user info.
          var user = result.user;
          console.log(user);
          // console.log( user.photoURL.substring(27));
          let str = user.photoURL.substring(27);
          str = str.split("/");
          // users.child(user.uid).update({
          //   fullname: user.displayName,
          //   image: user.photoURL,
          // uid: user.uid,
          // email:user.email,
          // provider: str[0]
          // });

          let newUser = {
            fullname: user.displayName,
            image: user.photoURL,
            uid: user.uid,
            email: user.email,
            provider: str[0]
          };
          users.push(newUser);
          // users.child(user.uid).child("photoURL/"+user.photoURL).push("s")
        })
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;

          // console.log(errorCode+' : '+errorMessage+' : '+email+' : '+credential)
          // ...
        });
    }
  }
};
</script>

<style>
#login {
  min-height: 100vh;
  padding-top: 50px;
  box-sizing: border-box;
}

.btn-fb-box {
  width: 300px;
  margin: 0 auto;
}
.btn-fb {
  width: 300px;
  margin: 0 auto;
}
</style>
