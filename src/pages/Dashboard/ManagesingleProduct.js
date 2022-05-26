import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const ManagesingleProduct = ({ setdeleteProduct, product, index }) => {
    return (
        <tr>
            <th>{index + 1}</th>
            <td title={product.name}>
                {product.name.length > 20
                    ? product.name.slice(0, 16) + "..."
                    : product.name}
            </td>
            <td className="flex ">
                <label
                    onClick={() => setdeleteProduct(product)}
                    htmlFor="delete-product-modal"
                    className="btn  btn-error btn-sm"
                >
                    <FontAwesomeIcon icon={faTrash} /> Delete
                </label>
                
                <button className="btn btn-sm ml-3">Update</button>
            </td>
        </tr>
    );
};

export default ManagesingleProduct;
