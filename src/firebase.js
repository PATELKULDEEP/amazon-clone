import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBlRr0ZY25cU93KyxhYboaS62m4o68zVPQ",
  authDomain: "clone-f4093.firebaseapp.com",
  databaseURL: "https://clone-f4093.firebaseio.com",
  projectId: "clone-f4093",
  storageBucket: "clone-f4093.appspot.com",
  messagingSenderId: "437527292601",
  appId: "1:437527292601:web:1b394df19083694fc80968",
  measurementId: "G-JD5Y2G6EW1"

});

const auth = firebase.auth();

export {auth}; 