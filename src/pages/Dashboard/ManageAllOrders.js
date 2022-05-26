import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../../sharedComponent/Loading";
import DeleteOrder from "./DeleteOrder";

import ManageSignleOrder from "./ManageSignleOrder";

const ManageAllOrders = () => {
    const [deleteProduct, setdeleteProduct] = useState(null);

    const {
        data: allorders,
        isLoading,
        refetch,
    } = useQuery("allOrder", () =>
        fetch(`https://frozen-everglades-15145.herokuapp.com/alorders`, {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        }).then((res) => res.json())
    );

    if (isLoading) {
        return <Loading></Loading>;
    }

    return (
        <div>
            Oders:{allorders.length}
            <div>
                <div>
                    <div class="overflow-x-auto">
                        <table class="table w-32 lg:w-full">
                            {/* <!-- head --> */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>User</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {allorders.map((order, index) => (
                                    <ManageSignleOrder
                                        setdeleteProduct={setdeleteProduct}
                                        order={order}
                                        key={index}
                                        index={index}
                                    ></ManageSignleOrder>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                {deleteProduct && (
                    <DeleteOrder
                        setdeleteProduct={setdeleteProduct}
                        refetch={refetch}
                        deleteProduct={deleteProduct}
                    ></DeleteOrder>
                )}
            </div>
        </div>
    );
};

export default ManageAllOrders;
