import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAlrqalFgZmky297BOByh6JKJbL450OAOY",
  authDomain: "stockmanagement-dc17c.firebaseapp.com",
  projectId: "stockmanagement-dc17c",
  storageBucket: "stockmanagement-dc17c.firebasestorage.app",
  messagingSenderId: "36728796348",
  appId: "1:36728796348:web:7164b7b31f740b586fccb9",
  measurementId: "G-95N410R2J4"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
