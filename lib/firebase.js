// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHEqh1tP9VvrulJX9_q5o2JAISWnvhZIA",
  authDomain: "nextjstodo-fa399.firebaseapp.com",
  projectId: "nextjstodo-fa399",
  storageBucket: "nextjstodo-fa399.appspot.com",
  messagingSenderId: "31279788417",
  appId: "1:31279788417:web:f980ab622f79f506263880",
  measurementId: "G-1H5K6QTNZF" 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);