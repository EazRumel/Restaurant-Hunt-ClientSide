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
        element:<PrivateRoute>
          <Order></Order>
        </PrivateRoute>
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
]);
