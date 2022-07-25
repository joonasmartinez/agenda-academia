// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, getDocs } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxkDGrr__3DYSvFTU4HkZKkJH7UZpy3JA",
  authDomain: "agendamento-3466d.firebaseapp.com",
  projectId: "agendamento-3466d",
  storageBucket: "agendamento-3466d.appspot.com",
  messagingSenderId: "261205098783",
  appId: "1:261205098783:web:9db208c607fc041703302a",
  measurementId: "G-M80X3C7KRM"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

