import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebaseInit';
import { GoogleAuthProvider } from 'firebase/auth';
import useAxiosPublic from '../hooks/useAxiosPublic';


export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
  const googleLogin = new GoogleAuthProvider()
  const axiosPublic = useAxiosPublic()
  const [user,setUser] = useState(null)
  const [loading,setLoading] = useState(true)

  const signInWithGoogle = () => {
    setLoading(true)
    return signInWithPopup(auth,googleLogin)
  }

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
      if(currentUser){
          //generate token
          const userInfo = {
            email:currentUser.email
          }
          axiosPublic.post("/jwt",userInfo)
          .then(response=>{
            if(response.data.token){
              localStorage.setItem('access-token',response.data.token)
            }
            console.log(response.data.token)
          })
      }
      else{
        //if no token remove the user
        localStorage.removeItem('access-token')
      }
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
  updateUser,
  signInWithGoogle
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