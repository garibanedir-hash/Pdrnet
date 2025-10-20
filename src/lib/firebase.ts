import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCO03cdJD_VVlS__DEFk0_9FA83JudHtXY",
  authDomain: "pdrnet-7331f.firebaseapp.com",
  projectId: "pdrnet-7331f",
  storageBucket: "pdrnet-7331f.firebasestorage.app",
  messagingSenderId: "233726317905",
  appId: "1:233726317905:web:7ee3c3d96c90aa52daef70",
  measurementId: "G-4K5SQ13WYG",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
