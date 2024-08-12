
import firebase from "firebase/compat/app";
import {getAuth} from "firebase/auth"
import "firebase/compat/firestore"
import "firebase/compat/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_DvcejyZ0gNoYS_CCmsYPXO4MikILQ2o",
  authDomain: "project-c597a.firebaseapp.com",
  projectId: "project-c597a",
  storageBucket: "project-c597a.appspot.com",
  messagingSenderId: "105437143574",
  appId: "1:105437143574:web:ea0ba04f3dec0cb0f44b37",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth =getAuth(app);
export const db = app.firestore()

