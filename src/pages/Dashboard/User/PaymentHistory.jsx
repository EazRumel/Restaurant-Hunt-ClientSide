import { useQuery } from "@tanstack/react-query";

import useAxiosSecure from "../../../hooks/useAxiosSecure";
import SectionTitle from "../../../components/SectionTitle";
import useAuth from "../../../hooks/useAuth";

const PaymentHistory = () => {
  const {user} = useAuth()
  const axiosSecure = useAxiosSecure()
  const { data:payments =[] } = useQuery({
  queryKey:["payments",user?.email],
  queryFn:async()=>{
    const res = await axiosSecure.get(`/payments/${user?.email}`)
    console.log(res.data)
    return res.data
  }
  })
  return (
    <div>
     <SectionTitle heading="payment history"></SectionTitle>
     <div className="overflow-x-auto px-5 py-5">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Index</th>
        <th>Email</th>
        <th>Transaction ID</th>
        <th>Status</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        payments.map((payment,index)=> <tr>
        <th>{index+1}</th>
        <td>{payment.email}</td>
        <td>{payment.transactionId}</td>
        <td>{payment.status}</td>
        <td>{payment.price}</td>
      </tr>)
      }
     
    </tbody>
  </table>
</div>
    </div>
  );
};

export default PaymentHistory;