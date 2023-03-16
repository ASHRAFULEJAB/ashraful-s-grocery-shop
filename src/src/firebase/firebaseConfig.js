// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  query,
  where,
  Firestore,
} from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { createContext, useContext, useEffect, useState } from "react";

const FirebaseContext = createContext(null);
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
export const useFirebase = () => useContext(FirebaseContext);

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

// const googleProvider = new GoogleAuthProvider();

export const FirebaseProvider = (children) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // onAuthStateChanged(firebaseAuth, (user) => {
    //   if (user) setUser(user);
    //   else setUser(null);
    // });
  }, []);
  const listAllProducts = () => {
    return getDocs(collection(firestore, "products"));
  };
  console.log(listAllProducts)
  return (
    <FirebaseContext.Provider
      value={{
        listAllProducts,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};
