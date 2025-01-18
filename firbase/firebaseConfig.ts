// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore, Firestore } from 'firebase/firestore';
import { getStorage, Storage } from 'firebase/storage';

// Define Firebase configuration type
interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId: string;
}

// Your web app's Firebase configuration
const firebaseConfig: FirebaseConfig = {
  apiKey: 'AIzaSyBY-hmJ23h9uADb53XDmj75QRpPxJ9m9DY',
  authDomain: 'kodlab-projem.firebaseapp.com',
  projectId: 'kodlab-projem',
  storageBucket: 'kodlab-projem.appspot.com',
  messagingSenderId: '780049199249',
  appId: '1:780049199249:web:98c7a1f1d5a535c8ed0f30',
  measurementId: 'G-L9KWMSMNLN',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firestore and Storage instances with their types
export const db: Firestore = getFirestore(app);
export const storage: Storage = getStorage(app);
