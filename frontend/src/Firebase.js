import { initializeApp } from 'firebase/app';
import "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  // apikey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messaggingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_FIREBASE_APP_ID,
  // measurementId: process.env.REACT_APP_MEASUREMENT_ID,
  apiKey: "AIzaSyD0lfOF2ZZHgK2ssAKUvBtVfNp1BHap2aU",
  authDomain: "spotify-6b4e1.firebaseapp.com",
  projectId: "spotify-6b4e1",
  storageBucket: "spotify-6b4e1.appspot.com",
  messagingSenderId: "894437490787",
  appId: "1:894437490787:web:cba00281d5de067ff2f856",
  measurementId: "G-SH5LF8LBLS"
};

export const app=initializeApp(firebaseConfig)
const analytics=getAnalytics(app)