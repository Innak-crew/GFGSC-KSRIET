import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";

const config = {
  
  apiKey: "AIzaSyCumkzifYKSLG6M5dvUlVUcVnzal7cgUmE",
  authDomain: "gfg-ksriet.firebaseapp.com",
  databaseURL: "https://gfg-ksriet-default-rtdb.firebaseio.com",
  projectId: "gfg-ksriet",
  storageBucket: "gfg-ksriet.appspot.com",
  messagingSenderId: "80430829845",
  appId: "1:80430829845:web:b35e4f4a8f9a1e6db4d91c",
  measurementId: "G-3PC7S9HPR9"
};

export const app = initializeApp(config);
export const auth = getAuth(app);
export const db = getFirestore();
export const database = getDatabase();
export const storage = getStorage(app);
