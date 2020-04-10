import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCdoqaTLlAsWAdLxR1sFbt-nf337K5KOAc",
  authDomain: "ecommerce-c4011.firebaseapp.com",
  databaseURL: "https://ecommerce-c4011.firebaseio.com",
  projectId: "ecommerce-c4011",
  storageBucket: "ecommerce-c4011.appspot.com",
  messagingSenderId: "531373771094",
  appId: "1:531373771094:web:b38dee13159f9f35b22ef7"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
