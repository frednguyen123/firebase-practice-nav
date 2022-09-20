// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwOSNbMFjmrmkWlKJ5UUmtMgkN6VvmZp4",
  authDomain: "fir-practice-nav.firebaseapp.com",
  projectId: "fir-practice-nav",
  storageBucket: "fir-practice-nav.appspot.com",
  messagingSenderId: "785742024385",
  appId: "1:785742024385:web:3fce88fa8cbc6168fa0e40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();