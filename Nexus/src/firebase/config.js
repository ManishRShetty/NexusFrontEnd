import { initializeApp } from 'firebase/app';
import { getAuth, setPersistence, browserLocalPersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getDatabase } from "firebase/database";


const firebaseConfig = {
    apiKey: "AIzaSyBH6XkvCVL3f02eECVz6OSjIniNIEMUw38",
    authDomain: "nexus-b2593.firebaseapp.com",
    projectId: "nexus-b2593",
    storageBucket: "nexus-b2593.firebasestorage.app",
    messagingSenderId: "57430901641",
    appId: "1:57430901641:web:cfa04395f6d4bca0301758",
    measurementId: "G-LCM7BVYTXY"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Firebase services
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const database = getDatabase(app); // Initialize Realtime Database

// Set persistence
setPersistence(auth, browserLocalPersistence)
  .catch((error) => {
    console.error("Persistence error:", error);
  });

export { auth, db, database }; // Export database
export default app;