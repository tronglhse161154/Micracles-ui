// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKnFaQhKA5UWvCPcS4K3ulXtGCw4FoXIM",
  authDomain: "miracles-ef238.firebaseapp.com",
  databaseURL: "https://miracles-ef238-default-rtdb.firebaseio.com",
  projectId: "miracles-ef238",
  storageBucket: "miracles-ef238.appspot.com",
  messagingSenderId: "555995041548",
  appId: "1:555995041548:web:02f379f440bfff4a36c329",
  measurementId: "G-SPFRLBX64G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

const analytics = getAnalytics(app);

export { storage };