import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { FaShoppingCart } from 'react-icons/fa';
import useCart from '../hooks/useCart';

const Navbar = () => {
  const [cart] = useCart()
  const {user,logOut} = useContext(AuthContext)
  const links = <ul className="flex justify-evenly">
        <li><Link to="/">Home</Link></li>
     <li><Link to="/menu">Menu</Link></li>
     <li><Link to="/order/salad">Order</Link></li>
     <li>
     <Link to="/dashboard/cart">
     <button className="btn">
  Cart {cart.length} <div className="badge badge-sm badge-secondary"><FaShoppingCart /></div>
</button>
</Link>
</li>
  </ul>
  const handleLogOut =() =>{
    logOut()
    .catch(error=>{
      console.log(error)
    })
  }
  return (
    <div className="navbar fixed z-10 bg-opacity-30  bg-black text-white max-w-screen-xl ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
       {
        links
       }
      </ul>
    </div>
    <a className="btn btn-ghost text-l">Restaurant Hunt</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {
      links
     }
    </ul>
  </div>
  <div className="navbar-end">
   {
    user ? <>
     
      
       <button className="btn bg-opacity-30">
         <p className="font-bold text-x text-orange-500">{user?.displayName}</p>
      <img className="w-8  rounded-full" src={user?.photoURL} alt="" />
       </button>
 <Link to="/login"> <button onClick={handleLogOut} className="btn btn-link text-blue-600">LogOut</button></Link>
    </> : <>
      <Link to="/login"> <button className="btn btn-link text-blue-600">Login</button></Link>
    </>
   }
   
  </div>
</div>
  );
};

export default Navbar;