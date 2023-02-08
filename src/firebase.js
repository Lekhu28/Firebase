// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWqov1ELZh_Efze9PAiM3y_sMBtUf8yQg",
  authDomain: "learninghub-105a3.firebaseapp.com",
  projectId: "learninghub-105a3",
  storageBucket: "learninghub-105a3.appspot.com",
  messagingSenderId: "1085069415554",
  appId: "1:1085069415554:web:6c4111b9d83101bd44109b",
  measurementId: "G-YX6ZQ6KDHQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
export {app,auth}