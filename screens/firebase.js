// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaJoCqxGY7cbxMD6h3Qu0UiMY6j5xHOzQ",
  authDomain: "unknownchat-c7ecf.firebaseapp.com",
  projectId: "unknownchat-c7ecf",
  storageBucket: "unknownchat-c7ecf.appspot.com",
  messagingSenderId: "391138731930",
  appId: "1:391138731930:web:ac41ed9b573f1d0b90bc23"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db= getFirestore(app);