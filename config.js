import *as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyCmCWc8WiovVIziADgbIua-V_POUAAZKRQ",
    authDomain: "wily-ebad3.firebaseapp.com",
    databaseURL: "https://wily-ebad3.firebaseio.com",
    projectId: "wily-ebad3",
    storageBucket: "wily-ebad3.appspot.com",
    messagingSenderId: "436189579544",
    appId: "1:436189579544:web:1d77782207de39daeb366d",
    measurementId: "G-FZ55THQCRV"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()
