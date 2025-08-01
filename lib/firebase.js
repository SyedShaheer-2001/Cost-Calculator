// lib/firebase.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBywkaV7u3qeAkG1HFkXnZrvJMMZCYGFl8",
  authDomain: "cost-calculator-655be.firebaseapp.com",
  projectId: "cost-calculator-655be",
  storageBucket: "cost-calculator-655be.firebasestorage.app",
  messagingSenderId: "280829718127",
  appId: "1:280829718127:web:304216ed7a0dc07378679a",
  measurementId: "G-5WFEY0YJTY"
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Conditionally get analytics (only in the browser)
let analytics = null;

if (typeof window !== "undefined") {
  import("firebase/analytics").then(({ getAnalytics }) => {
    analytics = getAnalytics(app);
  });
}

export { db };
