// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBd5h6NitrndWvV9rLq3FEZfx0NxWSM5YI",
  authDomain: "auth-839b5.firebaseapp.com",
  projectId: "auth-839b5",
  storageBucket: "auth-839b5.firebasestorage.app",
  messagingSenderId: "568325694345",
  appId: "1:568325694345:web:4e75c4e6449d5835c8b758",
  measurementId: "G-DVE5846NNQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);