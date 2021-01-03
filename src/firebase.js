import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAxXvwRaI8pBHpJLqOO_oIyob5YXJ6gl28",
  authDomain: "whats-app-clone-54a60.firebaseapp.com",
  projectId: "whats-app-clone-54a60",
  storageBucket: "whats-app-clone-54a60.appspot.com",
  messagingSenderId: "846593336627",
  appId: "1:846593336627:web:331bda1e4d0e3486e68a46",
  measurementId: "G-165KHRVXVR",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;
