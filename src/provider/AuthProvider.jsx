import { onAuthStateChanged } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebaseInit';

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
  const [user,setUser] = useState(null)
  const [loading,setLoading] = useState(true)
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
  loading
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