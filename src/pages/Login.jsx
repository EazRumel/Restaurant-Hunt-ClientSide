
import { useContext, useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation, useNavigate } from 'react-router';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';
import SocialLogin from '../components/SocialLogin';


const Login = () => {

  const {signIn} = useContext(AuthContext)
  const [disabled,setDisabled] = useState(true)
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || "/";
  // console.log(location.state)


  const handleLogin = (event) =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email,password)
    signIn(email,password)
    .then(result=>{
      console.log(result)
Swal.fire({
  title: "Login Successful!",
  icon: "success",
  draggable: true
});
      navigate(from,{replace:true})
    }) 
    .catch(error=>{
      console.log(error.message)
      Swal.fire({
  title: "Login Failed!",
  icon: "error",
  draggable: true
});
    })
  }
  const handleCaptchaValidate = (event) =>{
    const captchaValue = event.target.value;
    console.log(captchaValue)
    if(validateCaptcha(captchaValue)){
      setDisabled(false)
    }
  }
  
  useEffect(()=>{
    loadCaptchaEnginge(6); 
  },[])
  return (
    <div className="hero bg-base-200 min-h-screen">
    <Helmet>
              <title>
              RH || Login
              </title>
            </Helmet>
    <div className="hero-content flex-col lg:flex-row-reverse">
      <div className="text-center lg:w-1/2 lg:text-left">
        <h1 className="text-5xl font-bold">Login now!</h1>
        <p className="py-6">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
          quasi. In deleniti eaque aut repudiandae et a id nisi.
        </p>
      </div>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input name="email" type="email" placeholder="email" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input name="password" type="password" placeholder="password" className="input input-bordered" required />
            
          </div>
          <div className="form-control">
          <LoadCanvasTemplate />
            <input onBlur={handleCaptchaValidate} name="captcha" type="text" placeholder="fill the text above" className="input input-bordered" required />
            {/* <button className="btn mt-5 btn-xs" >Validate</button> */}
          </div>
          <div className="form-control mt-6">
            <button disabled={disabled} className="btn bg-orange-500 hover:bg-orange-400 transition-transform scale-100 hover:scale-110 duration-200 text-white">Login</button>
          </div>
           <SocialLogin></SocialLogin>
        </form>
        <p className="px-5 py-5">Don't Have an account?<Link
        className="text-green-500" to="/signUp">Sign Up</Link></p>
      </div> 
     
    </div>
  </div>
  );
};

export default Login;