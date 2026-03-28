// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1O6W3pbg-itwLiN9kab1PwrjWdRZVFnQ",
  authDomain: "kureghar-98e0d.firebaseapp.com",
  projectId: "kureghar-98e0d",
  storageBucket: "kureghar-98e0d.firebasestorage.app",
  messagingSenderId: "233430375885",
  appId: "1:233430375885:web:860e3666d61ced33ef7884"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

