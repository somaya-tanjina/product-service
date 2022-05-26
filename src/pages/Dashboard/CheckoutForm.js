import { async } from "@firebase/util";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";

const CheckoutForm = ({ payorder }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState("");
    const [success, setSuccess] = useState("");
    const [transactionId, setTransactionId] = useState("");
    const [clientSecret, setClientSecret] = useState("");
    const { _id, price, email } = payorder;

    useEffect(() => {
        fetch(
            "https://frozen-everglades-15145.herokuapp.com/create-payment-intent",
            {
                method: "POST",
                body: JSON.stringify({ price }),
                headers: {
                    "Content-type": "application/json",
                    authorization: `Bearer ${localStorage.getItem(
                        "accessToken"
                    )}`,
                },
            }
        )
            .then((res) => res.json())
            .then((data) => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret);
                }
            });
    }, [price]);
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card,
        });
        setCardError(error?.message || "");

        // payment

        const { paymentIntent, error: intentError } =
            await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: email,
                    },
                },
            });
        if (intentError) {
            setCardError(intentError?.message);
        } else {
            setCardError("");
            setTransactionId(paymentIntent.id);

            setSuccess("congrates");

            const payment = {
                order: _id,
                transactionId: paymentIntent.id,
            };
            fetch(
                `https://frozen-everglades-15145.herokuapp.com/order/${_id}`,
                {
                    method: "PATCH",
                    body: JSON.stringify(payment),
                    headers: {
                        "Content-type": "application/json",
                        authorization: `Bearer ${localStorage.getItem(
                            "accessToken"
                        )}`,
                    },
                }
            )
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                });
        }
    };

    return (
        <>
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
                <button
                    className="btn btn-sm btn-secondary"
                    type="submit"
                    disabled={!stripe || !clientSecret}
                >
                    Pay
                </button>
            </form>

            {cardError && <p className="text-red-600">{cardError}</p>}
            {success && (
                <div className="text-green-500">
                    <p>{success} </p>
                    <p>
                        Your transaction Id:{" "}
                        <span className="text-blue-500 font-bold">
                            {transactionId}
                        </span>
                    </p>
                </div>
            )}
        </>
    );
};

export default CheckoutForm;
