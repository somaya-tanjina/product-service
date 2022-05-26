import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const ManagesingleProduct = ({ product, index, setdeleteproduct }) => {
    return (
        <tr>
            <th>{index + 1}</th>
            <td title={product.name}>
                {product.name.length > 20
                    ? product.name.slice(0, 16) + "..."
                    : product.name}
            </td>
            <td>{product.email}</td>
            <td className="flex ">
                <label
                    onClick={() => setdeleteproduct(product)}
                    htmlFor="cancel-modal"
                    className="btn btn-sm btn-error"
                >
                    <FontAwesomeIcon icon={faTrash} /> open modal
                </label>
                <button className="btn btn-sm ml-3">Update</button>
            </td>
        </tr>
    );
};

export default ManagesingleProduct;