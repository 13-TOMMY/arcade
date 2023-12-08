// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNTNvIseRbnZ0JMacNUYMrBOc3YlJjkSI",
  authDomain: "arcade-e4d6f.firebaseapp.com",
  projectId: "arcade-e4d6f",
  storageBucket: "arcade-e4d6f.appspot.com",
  messagingSenderId: "680015251097",
  appId: "1:680015251097:web:501941f2f8aa9b4b7f9a08",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
