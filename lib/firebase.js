import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDj7RQk8-lyIAdS2Hl20nNAJg8p7liYLoU",
  authDomain: "something-social-4f1c4.firebaseapp.com",
  projectId: "something-social-4f1c4",
  storageBucket: "something-social-4f1c4.appspot.com",
  messagingSenderId: "1071763046667",
  appId: "1:1071763046667:web:2daf7209ab3d476886620e",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
