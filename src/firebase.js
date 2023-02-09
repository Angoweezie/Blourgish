import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBKLosVpR9kaqjchlHM-jvkFvf5_Nx27qU",
  authDomain: "fb-clone-11638.firebaseapp.com",
  projectId: "fb-clone-11638",
  storageBucket: "fb-clone-11638.appspot.com",
  messagingSenderId: "895882659416",
  appId: "1:895882659416:web:1b24b08207e2e7d620ec2d"
};
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export {firebase};
