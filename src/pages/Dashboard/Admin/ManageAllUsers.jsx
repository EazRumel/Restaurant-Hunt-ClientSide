import { useQuery } from '@tanstack/react-query';
import { FaUser } from 'react-icons/fa';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { RiDeleteBin4Fill } from "react-icons/ri";
import Swal from 'sweetalert2';


const ManageAllUsers = () => {
  const axiosSecure = useAxiosSecure()
  const { data : users = [],refetch } = useQuery({
   queryKey:["users"],
   queryFn:async()=>{
    const res = await axiosSecure.get("/users")
    return res.data
   }
  })
const handleMakeAdmin = (user) =>{
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, Make Admin!"
  }).then((result) => {
    if (result.isConfirmed) {
      axiosSecure.patch(`/users/admin/${user._id}`)
      .then(response=>{
        console.log(response.data)
        refetch()
        if(response.data.modifiedCount > 0){
          refetch()
         Swal.fire({
        title: "Updated!",
        text: `${user.name} is an admin now.`,
        icon: "success"
      });
      }
      })  
      .catch(error=>{
        console.log(error.message)
      })
    }
  })
}
  const handleMakeDelete = (user) =>{ 
     Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
      axiosSecure.delete(`/users/${user._id}`)
      .then(response=>{
        console.log(response.data)
        refetch()
        if(response.data.deletedCount > 0){
         Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success"
      });
      }
      })  
      .catch(error=>{
        console.log(error.message)
      })
    }
  })
  }
  return (
    <div>
      <h2 className="flex justify-center gap-2 text-3xl text-center text-orange-500 font-semibold mx-10 my-10">Manage All Users -<FaUser/></h2>
      <hr className="font-bold text-orange-500" /> 
    <h2 className="font-medium text-2xl text-orange-500 px-10 pb-10 mt-2">Total Users:{users.length}</h2>
    <div className="overflow-x-auto px-10">
  <table className="table">
    <thead>
      <tr>
      <th>Serial</th>
        <th>Name</th>
        <th>Email</th>
        <th>Action</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
    {
      users.map(
      (user,index)=><tr key={user._id}>
        <th>{index+1}</th>
        <th>{user.name}</th>
        <td>{user.email}</td>
        <td>
        {user.role === "admin" ? <p className="text-gray-700 font-bold">Admin</p> :<button onClick={()=>handleMakeAdmin(user)} className="btn bg-red-200"><FaUser className="text-xl text-orange-600 "/>
        </button>}
        </td>
        <td>
        <button onClick={()=>handleMakeDelete(user)} className="btn bg-red-400"><RiDeleteBin4Fill /></button>
        </td>
      </tr>
      )
    }
    </tbody>
  </table>
</div>
    </div>
  );
};
export default ManageAllUsers;