import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  sendPasswordResetEmail,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../../../firebase.init";


const googleProvider= new GoogleAuthProvider();

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log(user);
  

  // create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   login
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   logout
  const logOut = () => {
    return signOut(auth);
  };

  // google signIn
  const googleSignIn=()=>{
    setLoading(true);
    return signInWithPopup(auth, googleProvider)
  }

  // reset password
  const passwordReset=(email)=>{
    return sendPasswordResetEmail(auth, email)
  }

  //   updata user
  const updateUser = (updateData) => {
    return updateProfile(auth.currentUser, updateData);
  };

  //   Observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authData = {
    user,
    setUser,
    createUser,
    logOut,
    signIn,
    googleSignIn,
    passwordReset,
    loading,
    setLoading,
    updateUser,
  };

  return <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
