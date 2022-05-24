import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import useProducts from "../../hooks/useProducts";
import Loading from "../../sharedComponent/Loading";
import Product from "./Product";

const Products = () => {
    // const {
    //     data: products,
    //     isLoading,
    //     refetch,
    // } = useQuery("available", () =>
    //     fetch("http://localhost:5000/products").then((res) => res.json())
    // );
    const [data, isLoading, refetch] = useProducts();
    if (isLoading) {
        return (
            <>
                <Loading></Loading>
            </>
        );
    }

    return (
        <div className="px-4 lg:px-28">
            <h1>{data.length}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[...data]
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
