// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA7xkMDZ39AJmjilsUM1RZ_4wv-V4nTHjM",
    authDomain: "viteproject-8a655.firebaseapp.com",
    projectId: "viteproject-8a655",
    storageBucket: "viteproject-8a655.appspot.com",
    messagingSenderId: "691935892531",
    appId: "1:691935892531:web:28c63b517215a7e1e7ff46",
    measurementId: "G-LWVF2GMXXB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };