// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFYaNZCEkzG-ZMI2TT2iaqwUb6i6OSdUo",
  authDomain: "dashboard-f53d1.firebaseapp.com",
  projectId: "dashboard-f53d1",
  storageBucket: "dashboard-f53d1.appspot.com",
  messagingSenderId: "55420897878",
  appId: "1:55420897878:web:698ccbe08ccf8776cbc9f7",
  measurementId: "G-BJ69JKM0RK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
