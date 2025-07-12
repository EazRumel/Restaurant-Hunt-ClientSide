import { Navigate, replace, useLocation } from "react-router-dom";
import Loading from "./Loading";
import useAuth from "../hooks/useAuth";


const PrivateRoute = ({children}) => {
  const location = useLocation()
  const {user,loading} = useAuth()
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