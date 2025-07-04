import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, replace, useLocation } from "react-router-dom";
import Loading from "./Loading";


const PrivateRoute = ({children}) => {
  const location = useLocation()
  const {user,loading} = useContext(AuthContext)
  if(loading){
    return <Loading></Loading>
  }
  if(user){
    return children;
  }
  return (
   <Navigate to="/login" state={{from:location }}replace/>
  );
};

export default PrivateRoute;