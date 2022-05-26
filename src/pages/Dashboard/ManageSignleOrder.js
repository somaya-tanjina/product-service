import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
const ManageSignleOrder = ({ order, index, setdeleteProduct }) => {
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
                    <button className="btn btn-secondary btn-sm">
                        Pending
                    </button>
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