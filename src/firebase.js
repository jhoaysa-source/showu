import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBC2bzQz3nosjXWzM9HK3Gp-01aO8jQcFY",
  authDomain: "showu-298c6.firebaseapp.com",
  projectId: "showu-298c6",
  storageBucket: "showu-298c6.appspot.com",
  messagingSenderId: "202121565409",
  appId: "1:202121565409:web:cf3f197b4ad7efa83d13a0",
  measurementId: "G-D85QYZ98K1"
}

// Inicializa Firebase
const app = initializeApp(firebaseConfig)

// Exports de Firebase
export const db = getFirestore(app)
export const auth = getAuth(app)