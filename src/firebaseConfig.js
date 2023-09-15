// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAp5Ks-WuVqn3nG7iCXCMJw0HwKfV5u3Fs",
  authDomain: "ducat-e-commerce.firebaseapp.com",
  projectId: "ducat-e-commerce",
  storageBucket: "ducat-e-commerce.appspot.com",
  messagingSenderId: "834393376663",
  appId: "1:834393376663:web:6fd57ee2bf50d67e5126d2",
  measurementId: "G-PB2S5RS7P3"
}; 
// Initialize Firebase
export  const app = initializeApp(firebaseConfig);

// FireStore initilization
export const db = getFirestore(app);

// storage initilization
export const storage = getStorage(app);

// authentication
export const auth = getAuth(app);