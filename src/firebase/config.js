import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
    apiKey: "AIzaSyCRgFIB7zZGfo3S9Jneoukb0Va8-4BOI5w",
    authDomain: "apps-2591d.firebaseapp.com",
    projectId: "apps-2591d",
    storageBucket: "apps-2591d.firebasestorage.app",
    messagingSenderId: "706145434168",
    appId: "1:706145434168:web:33dce9509c3f24930804cd",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app); // Pass 'app' to getAuth()