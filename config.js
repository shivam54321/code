import firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
    apiKey: "AIzaSyAPSmf5FXrW9ZZUDP0xgEfardN2fB8RLTs",
    authDomain: "bmtc-app-61d5e.firebaseapp.com",
    projectId: "bmtc-app-61d5e",
    storageBucket: "bmtc-app-61d5e.appspot.com",
    messagingSenderId: "604296597500",
    appId: "1:604296597500:web:9767574338bb7d25bf2c79",
    measurementId: "G-EWES1BVZBX"
  };

  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();