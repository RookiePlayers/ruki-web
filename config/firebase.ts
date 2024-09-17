// firebaseConfig.js
import { initializeApp, getApps } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getFirestore } from 'firebase/firestore/lite';

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB8bqSOtm3A7EZQv0mBwldsUJwN-j-UXCw",
    authDomain: "ruki-website.firebaseapp.com",
    projectId: "ruki-website",
    storageBucket: "ruki-website.appspot.com",
    messagingSenderId: "196662092196",
    appId: "1:196662092196:web:e52db3742fea6e5f12a131",
    measurementId: "G-DL7NHYFQS8",
    databaseURL: "https://ruki-website-default-rtdb.europe-west1.firebasedatabase.app"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];

// Initialize Firestore and Realtime Database
const firestore = getFirestore(app);
const firebaseDatabase = getDatabase(app);

export { firestore, firebaseDatabase };
