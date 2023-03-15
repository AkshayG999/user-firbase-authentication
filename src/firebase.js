// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAXpIjMa4179tsqnPMM3oSgTv0ckW4LpFs",
  authDomain: "flash-realm-365016.firebaseapp.com",
  projectId: "flash-realm-365016",
  storageBucket: "flash-realm-365016.appspot.com",
  messagingSenderId: "30808951869",
  appId: "1:30808951869:web:b2bc3b04a26bc0f5ec2e54",
  measurementId: "G-XQEGQTJLLN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export{app, auth};
