import React from "react";
import { toast } from "react-toastify";

const DeleteOrder = ({ setdeleteProduct, refetch, deleteProduct }) => {
    const { _id, name } = deleteProduct;
    const handleDelete = (id) => {
        fetch(`http://localhost:5000/orders/${id}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.deletedCount) {
                    toast.success(` ${name} is deleted`);
                    setdeleteProduct(null);
                    refetch();
                }
            });
        console.log("okkkkkk");
    };
    return (
        <div>
            <input
                type="checkbox"
                id="delete-product-modal"
                className="modal-toggle"
            />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">
                        You are going to Delete{" "}
                        <span className="text-red-600">{name}</span>
                    </h3>

                    <div className="modal-action">
                        <label
                            onClick={() => handleDelete(_id)}
                            htmlFor="delete-product-modal"
                            className="btn btn-error btn-sm"
                        >
                            Delete Order
                        </label>
                        <label
                            htmlFor="delete-product-modal"
                            className="btn btn-warning btn-sm"
                        >
                            back!
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteOrder;
