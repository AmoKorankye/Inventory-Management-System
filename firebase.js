// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCg5gS_d2XR6UIOQx7Bvwg9sGieFhzhaCw",
  authDomain: "inventory-management-15f37.firebaseapp.com",
  projectId: "inventory-management-15f37",
  storageBucket: "inventory-management-15f37.appspot.com",
  messagingSenderId: "869592282265",
  appId: "1:869592282265:web:8751e6074641ac8663b408",
  measurementId: "G-4SZZLFDFZS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const firestore = getFirestore(app);

export { firestore };