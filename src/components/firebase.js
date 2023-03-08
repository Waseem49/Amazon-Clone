import firebase from "firebase";

export const firebaseConfig = {
  apiKey: "AIzaSyA8s0Zq9WpwKZb6PK9iC62t-Jn9zxp_ZmA",
  authDomain: "clone-6dbd4.firebaseapp.com",
  projectId: "clone-6dbd4",
  storageBucket: "clone-6dbd4.appspot.com",
  messagingSenderId: "274965831132",
  appId: "1:274965831132:web:e7cbbcdb5ce06c472d8319",
};

const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
const auth = firebase.auth();

export { db, auth };
