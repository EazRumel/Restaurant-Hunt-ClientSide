import { useQuery } from '@tanstack/react-query';
import { FaUser } from 'react-icons/fa';
import useAxiosSecure from '../../../hooks/useAxiosSecure';


const ManageAllUsers = () => {
  const axiosSecure = useAxiosSecure()
  const { data : users = [] } = useQuery({
   queryKey:["users",refetch],
   queryFn:async()=>{
    const res = await axiosSecure.get("/users")
    return res.data,refetch
   }
  })
  return (
    <div>
      <h2 className="flex justify-center gap-2 text-3xl text-center text-orange-500 font-semibold mx-10 my-10">Manage All Users -<FaUser/></h2>
      <hr className="font-bold text-orange-500" /> 
    <h2>Total Users:{users.length}</h2>
    </div>
  );
};
export default ManageAllUsers;