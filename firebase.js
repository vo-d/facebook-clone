import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA1b3u9D44pihhvWmCU1ftRgMjgoJMzmXg",
  authDomain: "facebookj-clone.firebaseapp.com",
  projectId: "facebookj-clone",
  storageBucket: "facebookj-clone.appspot.com",
  messagingSenderId: "875819554538",
  appId: "1:875819554538:web:b960b447bb051c6617a993"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firestore
const db = getFirestore(app)

// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app)

export {db, storage}


