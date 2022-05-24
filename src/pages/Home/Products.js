import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Loading from "../../sharedComponent/Loading";
import Product from "./Product";

const Products = () => {
    const {
        data: products,
        isLoading,
        refetch,
    } = useQuery("available", () =>
        fetch("http://localhost:5000/products").then((res) => res.json())
    );
    if (isLoading) {
        return (
            <>
                <Loading></Loading>
            </>
        );
    }

    return (
        <div className="px-28">
            <h1>{products.length}</h1>
            <div className="grid grid-cols-3 gap-8">
                {[...products]
                    .reverse()
                    .slice(0, 6)
                    .map((product) => (
                        <Product key={product._id} product={product}></Product>
                    ))}
            </div>
        </div>
    );
};

export default Products;
