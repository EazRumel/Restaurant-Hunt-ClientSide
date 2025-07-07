import { FaHome, FaSearch, FaShoppingBag } from "react-icons/fa";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
  return (

      <div className="flex">
        <div className="w-64 min-h-screen bg-orange-600">
          <ul className="menu bg-blue-700 gap-5 bg-opacity-20 p-4 rounded-xl">
            <li><NavLink to="/">User Home -<FaHome className="text-xl text-white"></FaHome></NavLink></li>
            <li><NavLink to="/dashboard/cart">My Cart -<FaShoppingBag className="text-xl"></FaShoppingBag></NavLink></li> 
            <li><NavLink to="/dashboard/reservations">Reservations</NavLink></li>
            <li><NavLink to="/dashboard/paymentHistory">Payment History</NavLink></li>
            <li><NavLink to="/dashboard/reservation">Reservations</NavLink></li>
            <li><NavLink to="/dashboard/addReview">Add Review</NavLink></li> 
            <li><NavLink to="/dashboard/myBookings">My Bookings -<TbBrandBooking className="text-xl text-white" /></NavLink></li> 
         
          <div className="divider"></div>
          <li><NavLink to="/">Home -<FaHome className="text-xl text-white"></FaHome></NavLink></li>
          <li><NavLink to="/menu">Menu -<MdOutlineRestaurantMenu className="text-xl text-white"/></NavLink></li>
           </ul>
        </div>
        <div className="flex-1">
             <Outlet></Outlet>
        </div>
      </div>
  );
};

export default Dashboard;