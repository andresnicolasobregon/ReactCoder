
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAX1GFoOnWSOKuVJw62mAjXCZCggG_w6QA",
  authDomain: "dreamfest-958ed.firebaseapp.com",
  projectId: "dreamfest-958ed",
  storageBucket: "dreamfest-958ed.appspot.com",
  messagingSenderId: "108325786708",
  appId: "1:108325786708:web:476c0f6fe820ff03c709c1"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);