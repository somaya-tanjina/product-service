import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const SingleOrder = ({ index, myorder, setCancelOrder }) => {
    return (
        <tr>
            <th>{index + 1}</th>
            <td title={myorder.name}>
                {myorder.name.length > 20
                    ? myorder.name.slice(0, 16) + "..."
                    : myorder.name}
            </td>
            <td>
                {myorder.email}
                {myorder.paid && (
                    <p>
                        TransactionId:{" "}
                        <span className="text-orange-600 font-bold">
                            {myorder.transactionId}
                        </span>
                    </p>
                )}
            </td>
            <td className="flex ">
                {!myorder.paid && (
                    <label
                        onClick={() => setCancelOrder(myorder)}
                        htmlFor="cancel-modal"
                        className="btn btn-sm btn-error"
                    >
                        <FontAwesomeIcon icon={faTrash} /> Delete
                    </label>
                )}

                {myorder.price && !myorder.paid && (
                    <Link to={`/dashboard/payment/${myorder._id}`}>
                        <button className="btn btn-xs btn-success">pay</button>
                    </Link>
                )}
                {myorder.price && myorder.paid && (
                    <span className="text-2xl text-lime-700">paid</span>
                )}
            </td>
        </tr>
    );
};

export default SingleOrder;
