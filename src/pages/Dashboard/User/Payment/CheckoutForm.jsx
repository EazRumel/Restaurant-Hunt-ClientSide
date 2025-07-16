import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";


const CheckoutForm = () => {
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
      console.log('there has been an error',error)
    }
    else{
      console.log('payment successful',paymentMethod)
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
    </form>
    </div>
  );
};

export default CheckoutForm;