import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyBI_6KhkBRmacZ1wuIDJYA-H53CXyau-P0",
    authDomain: "willy-app-f2f57.firebaseapp.com",
    databaseURL: "https://willy-app-f2f57.firebaseio.com",
    projectId: "willy-app-f2f57",
    storageBucket: "willy-app-f2f57.appspot.com",
    messagingSenderId: "957572252876",
    appId: "1:957572252876:web:c77c38bb82a60591efee69",
    measurementId: "G-4Y08PYMXK1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
