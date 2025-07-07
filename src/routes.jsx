import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./Home/Home";
import Menu from "./pages/Menu";
import Order from "./pages/Order";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import PrivateRoute from "./shared/PrivateRoute";
import Loading from "./shared/Loading";
import Dashboard from "./layout/Dashboard";
import MyCart from "./pages/Dashboard/MyCart";




export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/menu",
        element:<Menu></Menu>
      },
      {
        path:"/order/:category",
        element:
          <Order></Order>

      },
     {
      path:"/login",
      element:<Login></Login>
     },
     {
      path:"/signUp",
      element:<SignUp></SignUp>
     },{
      path:"/loader",
      element:<Loading></Loading>
     }
    ]
  },
  {
    path:"dashboard",
    element:<Dashboard></Dashboard>,
   children:[
    {
    path:"cart",
    element:<MyCart></MyCart>
    }
   ]
  }
]);
