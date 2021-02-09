import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import firebaseConfig from "./firebase_config.js";

console.log("Initializing firebase");
firebase.initializeApp(firebaseConfig);

export default firebase;
