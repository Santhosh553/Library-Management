import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCV20eXR6ua1iw7PK5-xgYHwJqFerK6AeQ",
  authDomain: "library-75582.firebaseapp.com",
  projectId: "library-75582",
  storageBucket: "library-75582.appspot.com",
  messagingSenderId: "956134785518",
  appId: "1:956134785518:web:1e7e6db9c197d36d6eceff",
  measurementId: "G-W1KRZYH2F3"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
