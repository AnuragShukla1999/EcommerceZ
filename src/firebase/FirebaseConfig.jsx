// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwnsBqbsKuvixMDDPmOQgDfT7SgXj8ob8",
  authDomain: "ebharat-f6c28.firebaseapp.com",
  projectId: "ebharat-f6c28",
  storageBucket: "ebharat-f6c28.appspot.com",
  messagingSenderId: "663058607064",
  appId: "1:663058607064:web:8479ee874a23e8ccada0ad",
  measurementId: "G-81ZL2DC9R0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}