// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCSY4SWevWUIq8ioBj4Hh6XTLjRkrCDeUk",
  authDomain: "web-kelas-343a2.firebaseapp.com",
  projectId: "web-kelas-343a2",
  storageBucket: "web-kelas-343a2.firebasestorage.app",
  messagingSenderId: "366310606799",
  appId: "1:366310606799:web:696509335075f8a956f4ba"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
