import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebaseInit';
import { GoogleAuthProvider } from 'firebase/auth';
import useAxiosPublic from '../hooks/useAxiosPublic';


export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
  const googleLogin = new GoogleAuthProvider()
  const [user,setUser] = useState(null)
  const [loading,setLoading] = useState(true)
  const axiosPublic = useAxiosPublic()

  const signInWithGoogle = () => {
    setLoading(true)
    return signInWithPopup(auth,googleLogin)
  }

  const createUser = (email,password) =>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
  }
  const signIn = (email,password)=>{
    setLoading(true)
   return signInWithEmailAndPassword(auth,email,password)
  }
  const updateUser = (name,photo)=>{
    return updateProfile(auth.currentUser,{
      displayName:name,photoURL:photo
    })
  }
  const logOut= ()=>{
    setLoading(true)
    return signOut(auth)
  }
  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth,currentUser=>{
      setUser(currentUser)
      if(currentUser){
        const userInfo={
          email:currentUser.email
        }
        axiosPublic.post("/jwt",userInfo)
        .then(response=>{
          if(response.data.token){
           localStorage.setItem("access-token",response.data.token)
           setLoading(false)
          }
        })
      }
      else{
        localStorage.removeItem("access-token")
        setLoading(false)
      }
     
      
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