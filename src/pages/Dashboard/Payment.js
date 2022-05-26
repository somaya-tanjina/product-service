import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../../sharedComponent/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
    "pk_test_51L16TaCLCsdMEE07Y57CJwNbG8HROnv6SBH4g2P9UeM57vEYkmE1xtVew01saORKMtVSHG3mD41FRWolutrK5Ji600yBoMsC49"
);

const Payment = () => {
    const { id } = useParams();

    const { data: payorder, isLoading } = useQuery(["payOrder", id], () =>
        fetch(`https://frozen-everglades-15145.herokuapp.com/orders/${id}`, {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        }).then((res) => res.json())
    );
    if (isLoading) {
        return <Loading></Loading>;
    }

    return (
        <div className="px-20 text-center">
            <h2 className="text-xl text-slate-900">
                {" "}
                You are going to pay for {id}
            </h2>
            <div>
                <h3>payment:{payorder.name}</h3>
                <div>
                    <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                        <div class="card-body">
                            <p className="text-success font-bold">Hello,</p>
                            <h2 class="card-title">Please Pay for</h2>
                            <p>
                                Your Order:
                                <span className="text-green-600 font-bold">
                                    {" "}
                                    {payorder.name}
                                </span>
                                at
                            </p>
                            <p>
                                Please pay:{" "}
                                <span className="text-green-600">
                                    $ {payorder.price}
                                </span>
                            </p>
                        </div>
                    </div>
                    <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                        <div class="card-body">
                            <Elements stripe={stripePromise}>
                                <CheckoutForm payorder={payorder} />
                            </Elements>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;
