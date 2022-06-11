// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDeYf2MUKT92KKsr5CV2Y7lh5rao1TlDVo",
    authDomain: "project-app-5962f.firebaseapp.com",
    projectId: "project-app-5962f",
    storageBucket: "project-app-5962f.appspot.com",
    messagingSenderId: "465603405716",
    appId: "1:465603405716:web:85a82fb92f74017e091181",
    measurementId: "G-G8PDD60FXQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);