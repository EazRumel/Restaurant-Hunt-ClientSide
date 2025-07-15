import Swal from "sweetalert2";
import SectionTitle from "../../../components/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import { MdDelete, MdTipsAndUpdates } from "react-icons/md";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { Notyf } from "notyf";
import { Link } from "react-router-dom";


const ManageItems = () => {
  
  const axiosPublic = useAxiosPublic()
  const [menu,,refetch] = useMenu()
  const notyf = new Notyf({
  duration: 4000,
  position: {
    x: 'center',
    y: 'top',
  },
  types: [
    {
      type: 'success',
      background: 'green',
      icon: {
        className: 'material-icons',
        tagName: 'i',
        text: 'success'
      }
    },
    {
      type: 'success',
      background: 'green',
      duration: 2000,
      dismissible: true
    }
  ]
})
  const handleDelete = (item) => {
    Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then(async(result) => {
  if (result.isConfirmed) {
    const res =await axiosPublic.delete(`/menu/${item._id}`)
    
      console.log(res.data)
      if(res.data.deletedCount > 0){
        refetch();
        notyf.success(`${item.name} has been deleted`);
      }
    // Swal.fire({
    //   title: "Deleted!",
    //   text: "Your file has been deleted.",
    //   icon: "success"
    // });
  }
});
  }
  return (
    <div>
      <SectionTitle heading="Manage All Items" subHeading="! HURRY UP !"></SectionTitle>
      <div className="overflow-x-auto w-full mx-10">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
         #
        </th>
        <th>Name</th>
        <th>Price</th>
        <th>Update</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     {
      menu.map((item,index)=> <tr>
        <th>
         {index+1}
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={item.image}
                  alt={item.image} />
              </div>
            </div>
            <div>
              <div className="font-bold">{item.name}</div>
            </div>
          </div>
        </td>
        <td>${item.price}</td>
        <th>
          <Link to={`/dashboard/updateItems/${item._id}`}><button className="btn btn-ghost"><MdTipsAndUpdates className="text-orange-500 text-2xl" /> </button></Link>
        </th>
        <th>
          <button onClick={()=>handleDelete(item)} className="btn btn-ghost"><MdDelete className="text-red-500 text-2xl" /></button>
        </th>
      </tr>)
     }
    </tbody>
 
    
  </table>
</div>
    </div>
  );
};

export default ManageItems;
