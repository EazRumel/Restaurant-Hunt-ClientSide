import { Elements } from '@stripe/react-stripe-js';
import SectionTitle from '../../../../components/SectionTitle';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';

const Payment = () => {
  const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway)
  return (
    <div>
      <SectionTitle heading="Payment Section" subHeading="YOU CAN COMPLETE YOUR PAYMENT HERE"></SectionTitle>
      <div>
        <Elements stripe={stripePromise}>
          <CheckoutForm></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;