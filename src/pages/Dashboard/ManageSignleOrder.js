import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faTrash } from "@fortawesome/free-solid-svg-icons";
const ManageSignleOrder = ({ order, index}) => {
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
                <label
                   
                    htmlFor="cancel-modal"
                    className="btn btn-sm btn-error"
                >
                    <FontAwesomeIcon icon={faTrash} /> open modal
                </label>
                <button className="btn btn-sm btn-error">DELETE</button>
                <button className="btn btn-sm ml-3">PAY</button>
            </td>
        </tr>
    );
};

export default ManageSignleOrder;