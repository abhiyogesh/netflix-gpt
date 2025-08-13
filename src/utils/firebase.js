// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9g1B2akmsCOcL0MvDqKBvvu8aIIhAqng",
  authDomain: "netflixgpt-3000.firebaseapp.com",
  projectId: "netflixgpt-3000",
  storageBucket: "netflixgpt-3000.firebasestorage.app",
  messagingSenderId: "492361282562",
  appId: "1:492361282562:web:fde0901cafca8ab70e631b",
  measurementId: "G-VJLWFC1E6N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
