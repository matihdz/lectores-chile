import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyCZd_d_ONKdFkkV0z0j02LPxKr0Gb5zEmQ",
  authDomain: "mundo-resenas.firebaseapp.com",
  projectId: "mundo-resenas",
  storageBucket: "gs://mundo-resenas.appspot.com",
  messagingSenderId: "814015570989",
  appId: "1:814015570989:web:e893a834a516196799c4a4",
  measurementId: "G-GJ08VQRQLY"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();

export {
  firebase,
  db,
  storage
}