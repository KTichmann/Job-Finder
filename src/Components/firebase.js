var firebase = require("firebase/app");
require("firebase/auth");

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDWaSsU27YAJpPgI530-R3nWjl1wOQOe5k",
  authDomain: "test-project-47ea6.firebaseapp.com",
  databaseURL: "https://test-project-47ea6.firebaseio.com",
  projectId: "test-project-47ea6",
  storageBucket: "",
  messagingSenderId: "290018144982"
};

firebase.initializeApp(config);

export default firebase;