// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUPEQOzRHjjmduc7seXd4ls28W2RkFB1k",
  authDomain: "bookslogin-f0eda.firebaseapp.com",
  projectId: "bookslogin-f0eda",
  storageBucket: "bookslogin-f0eda.appspot.com",
  messagingSenderId: "1037599321472",
  appId: "1:1037599321472:web:eb9215e818c5b3d5c5a565"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app)