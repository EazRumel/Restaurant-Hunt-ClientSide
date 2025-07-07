
import useCart from '../../hooks/useCart';

const MyCart = () => {
  const [cart] = useCart()
  const totalPrice = cart.reduce((total,item)=>total+item.price,0)
  return (
     <div>
      <div className="flex justify-evenly mt-10 text-orange-500 font-extrabold">
        <h2>Cart length:{cart.length}</h2>
      <h2>Total Price:{totalPrice}</h2>
      <button className="btn bg-orange-600 text-white btn-sm px-6">Pay</button>
    </div>
     <div>
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     {
      cart.map(item=><tr key={item._id}>
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
              <div className="text-sm opacity-50">United States</div>
            </div>
          </div>
        </td>
        <td>
         {item.email}
          <br />
          <span className="badge badge-ghost badge-sm">{item.userName}</span>
        </td>
        <td>{item.price}</td>
        <th>
          <button className="btn bg-red-500 btn-ghost btn-xs">Delete</button>
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
  