import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useCart from "../../../../hooks/useCart";
import useAuth from "../../../../hooks/useAuth";
import { Notyf } from "notyf";


const CheckoutForm = () => {
   const notyf = new Notyf({
    duration: 1000,
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
  });
  const { user } = useAuth()
  const [error, setError] = useState(" ")
  const [transactionId, setTransactionId] = useState(" ")
  const [cart,refetch] = useCart()
  const [clientSecret, setClientSecret] = useState(" ")
  const axiosSecure = useAxiosSecure()
  const stripe = useStripe()
  const elements = useElements()
  const totalPrice = cart.reduce((total, item) => total + item.price, 0)

  useEffect(() => {
    if(totalPrice > 0) {
      axiosSecure.post("/create-payment-intent", { price: totalPrice })
      .then(response => {
        console.log(response.data.clientSecret)
        setClientSecret(response.data.clientSecret)
      })
    }
  }, [totalPrice, axiosSecure])
  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!stripe || !elements) {
      return // yet to work with the return statement
    }
    const card = elements.getElement(CardElement)
    if (card === null) {
      return //yet to work on the return statement
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card
    })

    if (error) {
      setError(error.message)
    }
    else {
      console.log('payment successful', paymentMethod)
      setError(" ")
    }
    const { paymentIntent, confirmError } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          email: user?.email,
          name: user?.displayName
        }
      }
    })

    if (confirmError) {
      console.log("payment-error happened", confirmError)
    }
    else {
      console.log("payment-intent", paymentIntent)
      if (paymentIntent.status === "succeeded") {
        console.log(paymentIntent.id)
        setTransactionId(paymentIntent.id)
        const payment = {
          email: user?.email,
          transactionId: paymentIntent.id,
          price: totalPrice,
          date: new Date(),
          cartIds: cart.map(item => item._id),
          menuIds: cart.map(item => item.menuId),
          status: "pending"
        }
        const res = await axiosSecure.post("/payments", payment)
        console.log(res.data)
        if(res.data.paymentResult.insertedId){
        notyf.success('Thank You for your payment')
        }
        refetch()
      }
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
        <button className="btn w-full my-10 bg-orange-500 text-white" type="submit" disabled={!stripe || !clientSecret}>
          Pay ({totalPrice})
        </button>
        <p className="text-red-600">{error}</p>
        {
          transactionId && <p className="text-green-500">Your transactionId is:  {transactionId}</p>
        }
      </form>
    </div>
  );
};

export default CheckoutForm;