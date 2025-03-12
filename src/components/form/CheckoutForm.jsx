import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useAuth } from "../../hooks/useAuth";
import { useAxios } from "../../hooks/useAxios";
import "./CheckoutForm.css";
export const CheckoutForm = ({ totalPrice, viewRoomInfo }) => {
  const stripe = useStripe();
  const { user } = useAuth();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState();
  const axios = useAxios();

  useEffect(() => {
    if (totalPrice && totalPrice > 1) {
      getClientSecret({ amount: totalPrice });
    }
  }, [totalPrice]);

  const getClientSecret = async (amount) => {
    const { data } = await axios.post("/create-payment-intent", {
      amount: totalPrice,
    });
    console.log(data);
    setClientSecret(data.clientSecret);
  };

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();
    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
      billing_details: {
        email: user?.email,
        name: user?.displayName,
      },
    });

    if (error) {
      console.log("[error]", error);
      setCardError(error.message);
      setProcessing(false);
      return;
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }
    const { error: confirmError, paymentIntent } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: paymentMethod.id,
      });
    if (confirmError) {
      console.log("confirmErr", confirmError);
    } else {
      if (paymentIntent.status === "succeeded") {
        const paymentInfo = {
          roomId: viewRoomInfo._id,
          email: user?.email,
          name: user?.displayName,
          transID: paymentIntent.id,
          totalPrice,
        };
        console.log(paymentInfo);
        try {
          const { data } = await axios.post("/add-to-payment", paymentInfo);
          console.log(data);
          toast.success("Congrats ! Room Booking Successfully");
        } catch (err) {
          console.log(err);
        }
      }
    }
  };

  return (
    <>
      {" "}
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />

        <div className="flex mt-2 justify-between">
          <button
            type="submit"
            className="inline-flex w-full justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
          >
            Pay ${totalPrice}
          </button>
          <button
            type="button"
            className="inline-flex w-full justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
          >
            Cancel
          </button>
        </div>
      </form>
    </>
  );
};
