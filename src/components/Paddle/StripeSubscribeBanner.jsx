import {CheckoutProvider} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import {appConfig} from "@/config.js";
import {useCheckout, PaymentElement} from '@stripe/react-stripe-js';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51RZwwB048ozVK0WFiNW6wr7FNxKurC5xA3Zb9AzkEF2SAupo1MyFVFUFAdu9h1RKY4ny9vhgWBuNrgZ8VOK5Ml6y00RwCXw3ad');

const CheckoutForm = () => {
  const checkout = useCheckout();

  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    const result = await checkout.confirm();

    if (result.type === 'error') {
      // Show error to your customer (for example, payment details incomplete)
      console.log(result.error.message);
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  };

  return (
      <form onSubmit={handleSubmit}>
        <PaymentElement/>
        <button>Submit</button>
      </form>
  )
};

export const StripeSubscribeBanner = (stripeParams) => {

  if (!stripeParams) {
    stripeParams = {
      user_id: "firebase_user_id", // здесь надо из firebase положить id созданного юзера
      user_email: "test@test.com",
      price_id: "price_1RdQd2048ozVK0WFsyeB7O6T" // взято отсюда: https://dashboard.stripe.com/prices/price_1RdQd2048ozVK0WFsyeB7O6T , ID цены для триального тарифа, сюда надо подсунуть ID с кнопки выбора}
    }
  }

  const fetchClientSecret = () => {
    return fetch(`${appConfig.apiEndpoint}/stripe/create-checkout-session`, {
      method: 'POST',
      body: stripeParams
    })
        .then((response) => response.json())
        .then((json) => json.checkoutSessionClientSecret)
  };

  return (
      <CheckoutProvider stripe={stripePromise} options={{fetchClientSecret}}>
        <CheckoutForm/>
      </CheckoutProvider>
  );
}