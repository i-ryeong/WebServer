// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD7PvXOEsWpS12L_eK24_EiI2QW1sIHWWI",
    authDomain: "fir-fa0e6.firebaseapp.com",
    databaseURL: "https://fir-fa0e6-default-rtdb.firebaseio.com",
    projectId: "fir-fa0e6",
    storageBucket: "fir-fa0e6.appspot.com",
    messagingSenderId: "679440944869",
    appId: "1:679440944869:web:71b63876c17f0914ba4e0c",
    measurementId: "G-LTTH2LW8DT"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);