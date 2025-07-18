import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";


const CheckoutForm = () => {
  const [error,setError] = useState(" ")
  const stripe  = useStripe()
  const elements = useElements()
  const handleSubmit = async (event) =>{
    event.preventDefault()
    if(!stripe || !elements){
      return // yet to work with the return statement
    }
    const card = elements.getElement(CardElement)
    if(card === null){
     return //yet to work on the return statement
    }

    const {error,paymentMethod} = await stripe.createPaymentMethod({
      type:'card',
      card
      })
     
    if(error){
      setError(error.message)
    }
    else{
      console.log('payment successful',paymentMethod)
      setError(" ")
    }
    }
  return (
    <div className="mx-10">
       <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className="btn my-5 bg-orange-500" type="submit" disabled={!stripe}>
        Pay
      </button>
      <p className="text-red-600">{error}</p>
    </form>
    </div>
  );
};

export default CheckoutForm;