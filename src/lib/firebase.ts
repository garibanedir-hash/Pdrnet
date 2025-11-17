// src/lib/firebase.ts
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCSWXJ0hF_3yqa3SBTOEFkRQsFucpz4RgM",
  authDomain: "pdr1-cba6d.firebaseapp.com",
  projectId: "pdr1-cba6d",
  storageBucket: "pdr1-cba6d.firebasestorage.app",
  messagingSenderId: "105083128800",
  appId: "1:105083128800:web:23c291aa15cf5699957985",
  measurementId: "G-T190Y3SS8N",
};

// Next.js hot-reload’da “yeniden init” hatasını engelle
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
