import { createApp } from 'vue';
import router from './router.js';
import store from './store/index.js';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

import App from './App.vue'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFb1epaqXYD4rKt4tcULoPPrhqE5umnJY",
  authDomain: "online-store-70f91.firebaseapp.com",
  projectId: "online-store-70f91",
  storageBucket: "online-store-70f91.appspot.com",
  messagingSenderId: "1004025142736",
  appId: "1:1004025142736:web:60506cb8bf1abba7c26dd5",
  measurementId: "G-HSYTPZGJKJ"
};

// Initialize Firebase
getAnalytics(initializeApp(firebaseConfig));


library.add(fas);
library.add(fab);

createApp(App)

.component('font-awesome-icon', FontAwesomeIcon)

.use(router)
.use(store)

.mount('#app')
