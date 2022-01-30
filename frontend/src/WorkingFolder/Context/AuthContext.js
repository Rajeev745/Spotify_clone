import React, { useEffect, useState } from "react";
import firebaseContext from "./CreateContext";
import { auth } from "../../Firebase";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'


export default function AuthContext({ children }) {
  const [currentUser, setCurrentUser] = useState();

  function signup(email, password) {
    auth.createUserWithEmailAndPassword(email, password);
  }
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);
  const value = { currentUser, signup };

  return (
    <firebaseContext.Provider value={value}>
      {children}
    </firebaseContext.Provider>
  );
}
