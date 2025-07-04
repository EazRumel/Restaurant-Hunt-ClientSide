import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebaseInit';


export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
  const [user,setUser] = useState(null)
  const [loading,setLoading] = useState(true)

  const createUser = (email,password) =>{
    setLoading(false)
    return createUserWithEmailAndPassword(auth,email,password)
  }
  const signIn = (email,password)=>{
    setLoading(false)
   return signInWithEmailAndPassword(auth,email,password)
  }
  const updateUser = (name,photo)=>{
    return updateProfile(auth.currentUser,{
      displayName:name,photoURL:photo
    })
  }
  const logOut= ()=>{
    setLoading(false)
    return signOut(auth)
  }
  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth,currentUser=>{
      setUser(currentUser)
      setLoading(false)
    })
    return ()  => {
      return unSubscribe()
    }
  },[])
  const authInfo = {
  user,
  loading,
  createUser,
  signIn,
  logOut,
  updateUser
  }

  return (
    <div>
      <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;