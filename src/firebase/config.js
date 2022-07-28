// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore,addDoc,collection} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsiD9LiZojUVOmp4A613qaX2y5HjSpsdM",
  authDomain: "tienda-lyp.firebaseapp.com",
  projectId: "tienda-lyp",
  storageBucket: "tienda-lyp.appspot.com",
  messagingSenderId: "57658525627",
  appId: "1:57658525627:web:568e8efe8ed0eb3f76e69e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

// Obtener id para la orden de compra
const addOrder = async (orderr) => {
    const docRef = await addDoc(collection(db, "orders"), orderr)
    return docRef.id
};


export {
  addOrder,
}
