import React from 'react';
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import useAxiosPublic from '../hooks/useAxiosPublic';
import { Notyf } from 'notyf';

const SocialLogin = () => {
  const notyf = new Notyf({
    duration: 1000,
    position: {
      x: 'center',
      y: 'top',
    },
    types: [
      {
        type: 'success',
        background: 'green',
        icon: {
          className: 'material-icons',
          tagName: 'i',
          text: 'success'
        }
      },
      {
        type: 'success',
        background: 'green',
        duration: 2000,
        dismissible: true
      }
    ]
  })
  const axiosPublic = useAxiosPublic()
  const {signInWithGoogle} = useAuth()
  const navigate = useNavigate()
  const handleGoogleSignIn = () =>{
   signInWithGoogle()
   .then(response => {
     //console.log(response.user)
    const userInfo = {
      email:response.user?.email,
      name:response.user?.displayName
    }
    axiosPublic.post("/users",userInfo)
    .then(response =>{
      //console.log(response.data)
    })
    notyf.success("Logged in User")
    navigate("/")
   })
  .catch(error =>{
    //console.log(error.message)
    notyf.error("Logging Failed")
  })
  }
  return (
    <div className="px-2 py-2 mx-2 my-5 ">
      <button onClick={handleGoogleSignIn} className="btn  bg-white text-black border-[#e5e5e5]">
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Login with Google
</button>
    </div>
  );
};

export default SocialLogin;