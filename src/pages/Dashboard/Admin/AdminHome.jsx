import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const AdminHome = () => {
  const axiosSecure = useAxiosSecure();
  const { data:stats } = useQuery({
    queryKey:["admin-stats"],
    queryFn:async()=>{
      const res = await axiosSecure.get("/admin-stats")
      return res.data
    }
  })
  const {user} = useAuth()
  return (
    <div>
      <h2 className="tex-extrabold text-2xl text-orange-400">
      Hello Welcome 
      <span className="ml-2">
      {
       user ? user.displayName : <p>Back</p>
      }</span>
      </h2>
      <h3>{stats?.revenueCount}</h3>
    </div>
  );
};

export default AdminHome;