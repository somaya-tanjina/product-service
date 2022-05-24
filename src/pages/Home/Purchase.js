import React, { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import useProductDetails from "../../hooks/useProductDetails";
import Loading from "../../sharedComponent/Loading";
import { toast } from "react-toastify";
import { async } from "@firebase/util";

const Purchase = () => {
    const { id, name } = useParams();
  const [data, isLoading, refetch] = useProductDetails(id);
  const emailRef = useRef("");
  const [error, setError] = useState('')

  const handlePurchase = () => {
    console.log(emailRef.current.value);
    if (
      emailRef.current.value < data.minimumQuantity)
    {
       setError("You cannot purchase less than minimum quantity");


    } else if (emailRef.current.value > data.availableQuantity) {
      setError("You cannot purchase more than available quantity");

    }
    return toast.error(error);
  }

    if (isLoading) {
        return (
            <>
                <Loading></Loading>
            </>
        );
    }
    return (
        <div className="px-4 lg:px-20">
            <h1>{id}</h1>

            <div className="lg:flex justify-between items-center fl flex-shrink-0">
                <div className="flex-1 ">
                    <img
                        className="lg:w-72  mx-auto"
                        src={data.picture}
                        alt=""
                    />
                </div>
                <div className="flex-1 leading-7">
                    <p className="text-2xl font-semibold">{data.name}</p>
                    <p>{data.description}</p>
                    <p className="font-bold">
                        <span className="text-xl font-semibold">Price: </span>$
                        {data.price}
                    </p>
                    <p> Available: {data.availableQuantity}</p>
                    <p> Minimum Order: {data.minimumQuantity}</p>

                    <div>
                        <input
                            className=" my-3 border-2"
                            type="number"
                            id="quantity"
                            ref={emailRef}
                            placeholder={data.minimumQuantity}
                            required
                        />
                    </div>
                    <button
                        disabled={!data.minimumQuantity}
                        onClick={handlePurchase}
                        className="btn bg-cyan-600 hover:bg-[#00B4FF] border-cyan-600 border-none btn-sm  "
                    >
                        Purchase
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Purchase;
