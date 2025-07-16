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
import ManageAllUsers from "./pages/Dashboard/Admin/ManageAllUsers";
import AddItems from "./pages/Dashboard/Admin/AddItems";
import PrivateAdmin from "./shared/PrivateAdmin";
import ManageItems from "./pages/Dashboard/Admin/ManageItems";
import UpdateItem from "./pages/Dashboard/Admin/UpdateItem";
import Payment from "./pages/Dashboard/User/Payment/Payment";




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
    element:<PrivateRoute>
      <Dashboard></Dashboard>
    </PrivateRoute>,
   children:[
    {
    path:"cart",
    element:<MyCart></MyCart>
    },
    {
     path:"payment",
     element:<Payment></Payment>
    }

    //admin routes only
    ,
    {
      path:"manageAllUsers",
      element:<PrivateAdmin><ManageAllUsers></ManageAllUsers></PrivateAdmin>
    },
    {
      path:"addItems",
    element:
    <PrivateAdmin>
      <AddItems></AddItems>
    </PrivateAdmin>
    },
    {
      path:"updateItems/:id",
      element:<UpdateItem></UpdateItem>,
      loader:({params})=>fetch(`http://localhost:3000/menu/${params.id}`)
    },
    {
      path:"manageItems",
      element:<PrivateAdmin>
        <ManageItems></ManageItems>
      </PrivateAdmin>

    }
   ]
  }
]);
