import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBncCTXdlDjTz0PtiRMvFJ3f7bGO1GbYUM",
    authDomain: "c70-project.firebaseapp.com",
    projectId: "c70-project",
    storageBucket: "c70-project.appspot.com",
    messagingSenderId: "23262296019",
    appId: "1:23262296019:web:e1e33d9fc48ca366bca126"
};
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();