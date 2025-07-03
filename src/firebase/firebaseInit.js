// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { getAuth } from "firebase/auth";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMfQG0Ny-pcIr-xHixcyPs3VuqQmsZmQU",
  authDomain: "restaurant-hunt-14fe2.firebaseapp.com",
  projectId: "restaurant-hunt-14fe2",
  storageBucket: "restaurant-hunt-14fe2.firebasestorage.app",
  messagingSenderId: "1041915274219",
  appId: "1:1041915274219:web:1b4fa73184fd06667f2fae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);