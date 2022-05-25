import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const SingleOrder = ({ index, myorder, setCancelOrder }) => {
    return (
        <tr>
            <th>{index + 1}</th>
            <td title={myorder.name}>
                {myorder.name.length > 20
                    ? myorder.name.slice(0, 16) + "..."
                    : myorder.name}
            </td>
            <td>{myorder.email}</td>
            <td className="flex ">
                <label
                    onClick={() => setCancelOrder(myorder)}
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

export default SingleOrder;