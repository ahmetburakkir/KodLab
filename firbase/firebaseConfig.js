// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBY-hmJ23h9uADb53XDmj75QRpPxJ9m9DY",
  authDomain: "kodlab-projem.firebaseapp.com",
  projectId: "kodlab-projem",
  storageBucket: "kodlab-projem.appspot.com",
  messagingSenderId: "780049199249",
  appId: "1:780049199249:web:98c7a1f1d5a535c8ed0f30",
  measurementId: "G-L9KWMSMNLN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);

