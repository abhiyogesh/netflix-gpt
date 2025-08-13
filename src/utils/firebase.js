// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB72WGHNUZc_oEXo0RaYVw4dqSByvTPgho",
  authDomain: "netflixgpt-1356.firebaseapp.com",
  projectId: "netflixgpt-1356",
  storageBucket: "netflixgpt-1356.firebasestorage.app",
  messagingSenderId: "993164564605",
  appId: "1:993164564605:web:b729ce41f4f1e32300f914",
  measurementId: "G-GRNBFMJHW9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
