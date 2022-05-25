import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../../sharedComponent/Loading";
import ConfirmCancel from "./ConfirmCancel";
import SingleOrder from "./SingleOrder";

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const [cancelOrder, setCancelOrder] = useState(null);
    const navigate = useNavigate();

    const {
        data: myorders,
        isLoading,
        refetch,
    } = useQuery(["userOrder", user.email], () =>
        fetch(`http://localhost:5000/orders?email=${user.email}`, {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        }).then((res) => {
            console.log("res", res);
            if (res.status === 401 || res.status === 403) {
                signOut(auth);
                localStorage.removeItem("accessToken");
                navigate("/");
            }
            return res.json();
        })
    );

    if (isLoading) {
        return <Loading></Loading>;
    }

    // useEffect(() => {
    //     if (user) {
    //         console.log(user);

    //         fetch(`http://localhost:5000/orders?email=${user.email}`, {
    //             method: "GET",
    //             headers: {
    //                 authorization: `Bearer ${localStorage.getItem(
    //                     "accessToken"
    //                 )}`,
    //             },
    //         })
    //             .then((res) => {
    //                 console.log("res", res);
    //                 if (res.status === 401 || res.status === 403) {
    //                     signOut(auth);
    //                     localStorage.removeItem("accessToken");
    //                     navigate("/");
    //                 }
    //                 return res.json();
    //             })

    //             .then((data) => {
    //                 console.log(data);
    //                 setMyOrders(data);
    //             });
    //     }
    // }, [user]);
    return (
        <div>
            my order:{myorders?.length}
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
                            {myorders.map((myorder, index) => (
                                <SingleOrder
                                    setCancelOrder={setCancelOrder}
                                    myorder={myorder}
                                    key={index}
                                    index={index}
                                ></SingleOrder>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {cancelOrder && (
                <ConfirmCancel
                    setCancelOrder={setCancelOrder}
                    refetch={refetch}
                    cancelOrder={cancelOrder}
                ></ConfirmCancel>
            )}
        </div>
    );
};

export default MyOrders;
