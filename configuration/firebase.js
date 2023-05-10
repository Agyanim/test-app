// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFULpAmpLJHA4xWd8aks0enwk0E3EeoIo",
  authDomain: "fir-project-1-584ef.firebaseapp.com",
  projectId: "fir-project-1-584ef",
  storageBucket: "fir-project-1-584ef.appspot.com",
  messagingSenderId: "135277164114",
  appId: "1:135277164114:web:0688486e5cfbaca205118b",
  measurementId: "G-S6W8CQDV1P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth(app)
export const googleProvider=new GoogleAuthProvider(app)
