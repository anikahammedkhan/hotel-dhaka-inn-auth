// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBSCs1I73riFKNjTqUYQTJTSU0HID8HvXA",
    authDomain: "hotel-dhaka-inn.firebaseapp.com",
    projectId: "hotel-dhaka-inn",
    storageBucket: "hotel-dhaka-inn.appspot.com",
    messagingSenderId: "281552364465",
    appId: "1:281552364465:web:05089e910c4004b7679390"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;