// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBa4_UFbLV6oXUysk-Eu5m6vrLcA3754Xg",
  authDomain: "buybusy-e0a86.firebaseapp.com",
  projectId: "buybusy-e0a86",
  storageBucket: "buybusy-e0a86.firebasestorage.app",
  messagingSenderId: "974356532345",
  appId: "1:974356532345:web:da420281150ec8e23bd8a8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
