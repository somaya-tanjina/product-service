import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
const ManageSignleOrder = ({ order, index, setdeleteProduct }) => {
    const handleshipped = (id) => {
        const status = { status: "shipped" };
        fetch(`https://frozen-everglades-15145.herokuapp.com/orders/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(status),
        })
            .then((res) => res.json())
            .then((data) => console.log(data));
    };

    return (
        <tr>
            <th>{index + 1}</th>
            <td title={order.name}>
                {order.name.length > 20
                    ? order.name.slice(0, 16) + "..."
                    : order.name}
            </td>
            <td>{order.email}</td>
            <td className="flex ">
                {order.paid && (
                    <>
                        {order?.status ? (
                            <button className="btn btn-secondary btn-sm">
                                shipped
                            </button>
                        ) : (
                            <button
                                onClick={() => handleshipped(order._id)}
                                className="btn btn-secondary btn-sm"
                            >
                                pending
                            </button>
                        )}
                    </>
                )}
                {!order.paid && (
                    <>
                        <label
                            onClick={() => setdeleteProduct(order)}
                            htmlFor="delete-product-modal"
                            className="btn  btn-error btn-sm"
                        >
                            <FontAwesomeIcon icon={faTrash} /> Delete
                        </label>
                        <p className="text-xl font-bold text-red-600">Unpaid</p>
                    </>
                )}
            </td>
        </tr>
    );
};

export default ManageSignleOrder;
