import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, updateEmail, updatePassword } from 'firebase/auth';
import {
  getStorage,
  //  ref, 
  //  uploadBytes, 
  //  getDownloadURL, 
  //  getBytes 
} from 'firebase/storage';

import {
  getFirestore,
  collection,
  // addDoc, 
  getDocs,
  doc,
  getDoc,
  query,
  where,
  setDoc,
  // deleteDoc 
} from 'firebase/firestore';

import { userInfoRegister } from "../../interface/userInfo.model";

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

export const userExists = async (uid: any) => {
  const docRef = doc(database, 'users', uid)
  const res = await getDoc(docRef)
  return res.exists
}

export const existsUsername = async (username: any) => {
  const users: any[] = [];
  const docsRef = collection(database, 'users');
  const q = query(docsRef, where('username', '==', username));

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach(docs => {
    users.push(docs.data())
  }); 

  return users.length > 0 ? users[0].uid : null;
}

export const registerNewUser = async (user: any) => {
  try {
    const collectionRef = collection(database, 'users');
    const docsRef = doc(collectionRef, user.uid);
    await setDoc(docsRef, user);
  } catch (error) {
    console.log(error)
  }
}

export const updateUser = async (user: any) => {
  try {
    const collectionRef = collection(database, 'users');
    const docRef = doc(collectionRef, user.uid);
    await setDoc(docRef, user)
  } catch (error) {
    console.error(error)
  }
}

export const getUserInfo = async (uid: any): Promise<userInfoRegister | undefined> => {
  try {
    const docRef = doc(database, 'users', uid);
    const document = await getDoc(docRef)
    return document.data();
  } catch (error) {
    console.log(error);
  }
}

export const logout = () => Auth.signOut();

export const signup = (email: string, password: string) => {
  createUserWithEmailAndPassword(Auth, email, password);
}

export const login = (email: string, password: string) => {
  signInWithEmailAndPassword(Auth, email, password);
}

export const resetPassword = (email: string) => {
  sendPasswordResetEmail(Auth, email)
}

export const updateEmailUser = (user: any, email: string) => {
  updateEmail(user, email)
}

export const updatePasswordUser = (user: any, password: string) => {
  updatePassword(user, password)
}