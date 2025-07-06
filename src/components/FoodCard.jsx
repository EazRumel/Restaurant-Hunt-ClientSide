import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";

import { Notyf } from "notyf";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useCart from "../hooks/useCart";

const FoodCard = ({item}) => {
  const [cart,refetch]= useCart()
const {user} = useAuth()
const navigate = useNavigate()
const location = useLocation()
const axiosSecure = useAxiosSecure()
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
  const {name,recipe,image,category,price,_id} = item;
  const handleAddToCart = (food) =>{
   console.log(food)
   if(user && user.email){
    const cartItem = {
       menuId:_id,
       email:user.email,
      name,
      price
    }
    axiosSecure.post("/carts",cartItem)
    .then(response =>{
      console.log(response.data)
    if(response.data.insertedId){
     notyf.success(`${name} has been added to your cart`);
    }
    refetch()
    })
   }
   else{
    Swal.fire({
  title: "You are not logged in",
  text:"Please login to continue",
  showCancelButton: true,
  confirmButtonColor:"#f66",
  confirmButtonText: "Login?",
  
}).then((result) => {
  /* Read more about isConfirmed, isDenied below */
  if (result.isConfirmed) {
navigate("/login",{state:{from:location}})
  } 
});
   }
  }
  return (
    <div className="card bg-base-100 text-center shadow-xl mb-10 mt-10">
  <figure>
    <img
      src={image}
      alt="Shoes" />
      <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white">${price}</p>
  </figure>
 
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{recipe}</p>
    <div className="card-actions justify-end">
    <button onClick={()=> handleAddToCart(item)} className="btn btn-outline bg-slate-100 border-orange-400  border-0 border-b-4">Add To Cart</button>
    </div>
  </div>
</div>

  );
};

export default FoodCard;