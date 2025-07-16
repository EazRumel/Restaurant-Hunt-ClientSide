
import { FaCcAmazonPay } from 'react-icons/fa';
import { AiFillDelete } from "react-icons/ai";
import useCart from '../../hooks/useCart';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const MyCart = () => {
  const [cart,refetch] = useCart()
  const axiosSecure = useAxiosSecure()
  const totalPrice = cart.reduce((total,item)=>total+item.price,0)
  const handleDelete = (id)=>{
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
    axiosSecure.delete(`/carts/${id}`)
    .then(response=>{
      console.log(response.data)
      if(response.data.deletedCount > 0){
       Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
     refetch()
    }
   
    })
    
   
    
  }
});
  }
  return (
     <div>
      <div className="flex justify-evenly mt-10 text-orange-500 font-extrabold">
        <h2>Cart length:{cart.length}</h2>
      <h2>Total Price:{totalPrice}</h2>
      {
        cart.length ?
        <Link to="/dashboard/payment">
          <button className="btn bg-orange-600 text-white btn-sm px-6">Pay <FaCcAmazonPay /></button>
        </Link>
        :
        <button disabled className="btn bg-orange-600 text-white btn-sm px-6">Pay <FaCcAmazonPay /></button>
      }
    </div>
     <div>
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
      <th>Serial</th>
        <th>Name</th>
        <th>Email</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     {
      cart.map((item,index)=><tr key={item._id}>
      <th>{index+1}</th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={item.image}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{item.name}</div>
            </div>
          </div>
        </td>
        <td>
         {item.email}
          <br />
          <span className="badge badge-ghost badge-sm">{item.userName}</span>
        </td>
        <td>${item.price}</td>
        <th>
          <button onClick={()=>handleDelete(item._id)} className="btn bg-red-500 btn-ghost btn-xs text-white text-x">Delete <AiFillDelete /></button>
        </th>
      </tr>)
     }
    </tbody>
  </table>
</div>
      </div>
     </div>
  );
};

export default MyCart;
  