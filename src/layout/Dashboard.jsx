import { FaHistory, FaHome, FaSearch, FaShoppingBag } from "react-icons/fa";
import { MdOutlineRestaurantMenu, MdRateReview } from "react-icons/md";
import { RiReservedFill } from "react-icons/ri";
import { TbBrandBooking } from "react-icons/tb";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";


const Dashboard = () => {
  const [cart]= useCart()
  return (

      <div className="flex">
        <div className="w-64 p-5 min-h-screen bg-orange-600">
          <ul className="menu bg-blue-700 gap-5 bg-opacity-20 p-4 rounded-xl">
            <li className="text-white font-semibold"><NavLink to="/">User Home -<FaHome className="text-xl text-white"></FaHome></NavLink></li>
            <li className="text-white font-semibold"><NavLink to="/dashboard/cart">My Cart({cart.length}) -<FaShoppingBag className="text-xl"></FaShoppingBag></NavLink></li> 
            <li className="text-white font-semibold"><NavLink to="/dashboard/reservations">Reservations -<RiReservedFill /></NavLink></li>
            <li className="text-white font-semibold"><NavLink to="/dashboard/paymentHistory">Payment History -<FaHistory className="text-xl text-white"/></NavLink></li>
            <li className="text-white font-semibold"><NavLink to="/dashboard/addReview">Add Review -<MdRateReview className="text-xl text-white" /></NavLink></li> 
            <li className="text-white font-semibold"><NavLink to="/dashboard/myBookings">My Bookings -<TbBrandBooking className="text-xl text-white" /></NavLink></li> 
          <div className="divider"></div>
          <li className="text-white font-semibold"><NavLink to="/">Home -<FaHome className="text-xl text-white"></FaHome></NavLink></li>
          <li className="text-white font-semibold"><NavLink to="/menu">Menu -<MdOutlineRestaurantMenu className="text-xl text-white"/></NavLink></li>
           </ul>
        </div>
        <div className="flex-1">
             <Outlet></Outlet>
        </div>
      </div>
  );
};

export default Dashboard;