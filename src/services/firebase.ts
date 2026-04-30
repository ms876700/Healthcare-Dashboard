
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyBbzyRwGmlOY024DFDh-OTVSz0b6738hZc",
  authDomain: "healthcare-c45cc.firebaseapp.com",
  projectId: "healthcare-c45cc",
  storageBucket: "healthcare-c45cc.firebasestorage.app",
  messagingSenderId: "481192995906",
  appId: "1:481192995906:web:550fc4200cf44e6317d1db",
  measurementId: "G-THM6YHNXW2"
};


const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);