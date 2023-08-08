// import firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZuRR8IiErGSg-b2MYzxV8icHUAOOPYvk",
  authDomain: "e-commerce-35695.firebaseapp.com",
  projectId: "e-commerce-35695",
  storageBucket: "e-commerce-35695.appspot.com",
  messagingSenderId: "71702260922",
  appId: "1:71702260922:web:85c705143d874e6cede683",
  measurementId: "G-PLYJ6MT2T7"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export{ db, auth };
