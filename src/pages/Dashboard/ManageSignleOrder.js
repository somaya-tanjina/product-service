import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
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
                <label htmlFor="cancel-modal" className="btn btn-sm btn-error">
                    <FontAwesomeIcon icon={faTrash} /> open modal
                </label>
                <Link to=''>
                    <button className="btn btn-sm ml-3">PAY</button>
                </Link>
            </td>
        </tr>
    );
};

export default ManageSignleOrder;