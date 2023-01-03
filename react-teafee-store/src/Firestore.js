// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeHU0vA5gkARAJRqjcXk8NLzgQzUL1Vgc",
  authDomain: "react-eshop-b6cbb.firebaseapp.com",
  projectId: "react-eshop-b6cbb",
  storageBucket: "react-eshop-b6cbb.appspot.com",
  messagingSenderId: "381719720686",
  appId: "1:381719720686:web:d27d1b0b8257db542379ff",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
