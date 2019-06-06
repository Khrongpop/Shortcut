// import _firebase from 'firebase'
// const firebaseConfig = {
  // apiKey: "AIzaSyAfLD6sQmWntuBrakzuk6Z5mP4b6IjqY3k",
  // authDomain: "shortcut-28e33.firebaseapp.com",
  // databaseURL: "https://shortcut-28e33.firebaseio.com",
  // projectId: "shortcut-28e33",
  // storageBucket: "shortcut-28e33.appspot.com",
  // messagingSenderId: "715502984594",
  // appId: "1:715502984594:web:ff4a50ef8ba5c036"
// };

// const firebase = _firebase.initializeApp(firebaseConfig);
// export const users = firebase.database().ref('/users')


import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase'
if (!firebase.apps.length) {
    const config = {
      apiKey: "AIzaSyAfLD6sQmWntuBrakzuk6Z5mP4b6IjqY3k",
      authDomain: "shortcut-28e33.firebaseapp.com",
      databaseURL: "https://shortcut-28e33.firebaseio.com",
      projectId: "shortcut-28e33",
      storageBucket: "shortcut-28e33.appspot.com",
      messagingSenderId: "715502984594",
      appId: "1:715502984594:web:ff4a50ef8ba5c036"
    }
    firebase.initializeApp(config)
    // firebase.firestore().settings({timestampsInSnapshots: true})
}
export const fireDb = firebase.firestore()
export const realDb = firebase.database()

