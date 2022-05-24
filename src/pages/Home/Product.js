import React from "react";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
    const {
        _id,
        name,
        picture,
        price,
        description,
        availableQuantity,
        minimumQuantity,
    } = product;
    const navigate = useNavigate();
    const handleClick = (id) => {
        navigate(`/product/${id}`);
    };
    return (
        <div className="card card-compact  bg-base-100 shadow-xl">
            <figure className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                <img src={picture} alt="product" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Price:${price}</p>
                <p className="text-xl text-black">
                    Avaiable:{availableQuantity}
                </p>
                <p>MiniMum Order:{minimumQuantity}</p>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button
                        onClick={() => handleClick(_id)}
                        className="btn btn-sm mx-auto w-60 btn-primary"
                    >
                        Purchase
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Product;
