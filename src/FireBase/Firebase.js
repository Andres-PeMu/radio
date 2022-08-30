import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
import { getStorage, ref, uploadBytes, getDownloadURL, getBytes } from 'firebase/storage'
import { getFirestore, collection, addDoc, getDocs, doc, getDoc, query, where, setDoc, deleteDoc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBNoAtaiGYTUjcxSBCVO1kuiuzgOyUEiiw',
  authDomain: "radiofmconexion.firebaseapp.com",
  projectId: "radiofmconexion",
  storageBucket: "radiofmconexion.appspot.com",
  messagingSenderId: "346765308832",
  appId: "1:346765308832:web:aaa6c4745beae70809aac5",
  measurementId: "G-K86H1CJJN9"
};

export const app = initializeApp(firebaseConfig);
export const Analytics = getAnalytics(app);
export const Auth = getAuth(app);
export const database = getFirestore(app);
export const Storage = getStorage(app);

export const userExists = async (uid) => {
  const docRef = doc(database, 'users', uid)
  const res = await getDoc(docRef)
  return res.exists
}