import { createApp } from 'vue'

import App from './App.vue'
import './input.css'
import router from "./router";
import firebase from 'firebase/compat/app';
import "firebase/compat/database";
import "firebase/compat/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAtD3iRfu6AJbeBocBwPn8if3LpylGEvWQ",
    authDomain: "learning-icons.firebaseapp.com",
    databaseURL: "https://learning-icons-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "learning-icons",
    storageBucket: "learning-icons.appspot.com",
    messagingSenderId: "97955944020",
    appId: "1:97955944020:web:34dcd0adb227c0b8e17fc1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const application = createApp(App)
application.use(router)
application.mount('#app')


