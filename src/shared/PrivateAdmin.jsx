import React from 'react';
import useAdmin from '../hooks/useAdmin';
import useAuth from '../hooks/useAuth';
import Loading from './Loading';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateAdmin = ({children}) => {
  const location = useLocation()
  const [isAdmin,adminLoading] = useAdmin()
  const {user,loading} = useAuth()

  if(loading || adminLoading){
    <Loading></Loading>
  }
if(user || isAdmin){
  return children
}
return (
  <Navigate to="/login" state={{from:location}}></Navigate>
)
};

export default PrivateAdmin; 