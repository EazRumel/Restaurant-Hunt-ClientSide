import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../shared/Footer';
import Navbar from '../shared/Navbar';
import DemoCarousel from '../components/Carousal';

const MainLayout = () => {
  const location = useLocation()
  // console.log(location)
  const hideNavFooter = location.pathname.includes("login")
  return (
    <div>
      {hideNavFooter || <Navbar></Navbar>}
      <Outlet></Outlet>
      {hideNavFooter || <Footer></Footer>}
    </div>
  );
};

export default MainLayout;