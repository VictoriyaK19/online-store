// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFb1epaqXYD4rKt4tcULoPPrhqE5umnJY",
  authDomain: "online-store-70f91.firebaseapp.com",
  databaseURL: "https://online-store-70f91-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "online-store-70f91",
  storageBucket: "online-store-70f91.appspot.com",
  messagingSenderId: "1004025142736",
  appId: "1:1004025142736:web:60506cb8bf1abba7c26dd5",
  measurementId: "G-HSYTPZGJKJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Firebase Analytics and get a reference to the service
const analytics = getAnalytics(app);

export { auth, analytics };