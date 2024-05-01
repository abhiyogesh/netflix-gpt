// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBF2FagEZZHI4s6BE_wb-SQaR_H9pmy5xw",
  authDomain: "netflixgpt-test.firebaseapp.com",
  projectId: "netflixgpt-test",
  storageBucket: "netflixgpt-test.appspot.com",
  messagingSenderId: "487022940578",
  appId: "1:487022940578:web:283afeae08edae5a00a2fb",
  measurementId: "G-8F47RHJJ99"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
 export const auth = getAuth();