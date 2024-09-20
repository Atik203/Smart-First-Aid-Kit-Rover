import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAB6LZag9FmU2AEpEU3UuYXu5_feD6Z7ys",
  authDomain: "smart-first-aid-4e3b8.firebaseapp.com",
  databaseURL: "https://smart-first-aid-4e3b8-default-rtdb.firebaseio.com",
  projectId: "smart-first-aid-4e3b8",
  storageBucket: "smart-first-aid-4e3b8.appspot.com",
  messagingSenderId: "889423245309",
  appId: "1:889423245309:web:c3de0cf6d84cc46c4af394",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Initialize Realtime Database and get a reference to the service
export const database = getDatabase(app);
