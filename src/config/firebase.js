// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtOo-cWqcdmYNKjoqnHRWj_2Dn69wRBwo",
  authDomain: "vite-contact-566f7.firebaseapp.com",
  projectId: "vite-contact-566f7",
  storageBucket: "vite-contact-566f7.firebasestorage.app",
  messagingSenderId: "433486451564",
  appId: "1:433486451564:web:4739da486d6f0bb1219949"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)