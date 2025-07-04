
import { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';


const SignUp = () => {
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
});
  const navigate = useNavigate();
  const {
    register,handleSubmit,reset,formState: { errors },} = useForm()
    const {createUser,updateUser}  = useContext(AuthContext)
  const onSubmit = (data)  => {
    console.log(data)
    createUser(data.email,data.password)
    .then(result=>{
      console.log(result)
    updateUser(data.name,data.photo)
    .then(result=>{
      console.log(result)
    notyf.success("User has been update");
    navigate("/")
      reset()
    })
    .catch(error=>{
      console.log(error.message)
      notyf.error("User updating was failed");
    })
    })
   
  }
 
  return (
    <div className="hero bg-base-200 min-h-screen">
    <Helmet>
              <title>
              RH || SignUp
              </title>
     </Helmet>
    <div className="hero-content flex-col lg:flex-row-reverse">
      <div className="text-center lg:w-1/2 lg:text-left">
        <h1 className="text-5xl font-bold">Sign Up now!</h1>
        <p className="py-6">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
          quasi. In deleniti eaque aut repudiandae et a id nisi.
        </p>
      </div>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input {...register("email",{required:true})} email="email" type="email" placeholder="email" className="input input-bordered"  />
            {errors.email && <p className="text-red-500 font-semibold my-3">Email is required</p>}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input {...register("name",{required:true})} name="name" type="text" placeholder="name" className="input input-bordered"  />
           {errors.name && <p className="text-red-500 font-semibold my-3">Name is required</p>}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input {...register("photo",{required:true})} name="photo" type="photo" placeholder="photo" className="input input-bordered" />
            {errors.photo && <p className="text-red-500 font-semibold my-3">Photo is required</p>}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input {...register("password",{required:true, minLength:6,maxLength:20,pattern:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.[!@#$%^&*?_~()-]*).*$/})} name="password" type="password" placeholder="password" className="input input-bordered"  />
           {errors.password?.type === "required" && <p className="text-red-500 font-semibold my-3">Password is required</p>}
           {errors.password?.type === "minLength" && <p className="text-red-500 font-semibold my-3">Password must be 6 characters</p>}
           {errors.password?.type === "maxLength" && <p className="text-red-500 font-semibold my-3">Password must be more than 6 characters</p>}
           {errors.password?.type === "pattern" && <p className="text-red-500 font-semibold my-3">uppercase,lowercase and number symbols are required</p>}
          </div>
          <div className="form-control">
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-orange-500 hover:bg-orange-400 transition-transform translate-x-0 scale-100 hover:scale-110 duration-200 text-white">Sign Up</button>
          </div>
        </form>
        <p className="px-5 py-5">Don't Have an account?<Link
        className="text-green-500" to="/login">Login</Link></p>
      </div>
    </div>
  </div>
  );
};

export default SignUp;