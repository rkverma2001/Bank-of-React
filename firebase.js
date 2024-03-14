// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4WYNitUEEE1E5FjZnhHbZjFNo_nYEJxI",
  authDomain: "vite-firebase-6fed2.firebaseapp.com",
  projectId: "vite-firebase-6fed2",
  storageBucket: "vite-firebase-6fed2.appspot.com",
  messagingSenderId: "868536993591",
  appId: "1:868536993591:web:9bcb09f8684e066d833cb2",
  measurementId: "G-CYDGN0911R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);