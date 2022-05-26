import React from "react";
import { toast } from "react-toastify";

const SignleUser = ({ index, user, refetch }) => {
    const { email, role } = user;
    const makeAdmin = () => {
        fetch(
            `https://frozen-everglades-15145.herokuapp.com/users/admin/${email}`,
            {
                method: "PUT",
                headers: {
                    authorization: `Bearer ${localStorage.getItem(
                        "accessToken"
                    )}`,
                },
            }
        )
            .then((res) => {
                //step:4 of make admin
                if (res.status === 403) {
                    toast.error("failed to make admin");
                }
                return res.json();
            })
            .then((data) => {
                //step:5 of make admin
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Successfully made an admin`);
                }
            });
    };
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{user.email}</td>
            <td>
                {/* <button onClick={makeAdmin} class="btn btn-xs">
                    Make Admin
                </button> */}
                {role !== "admin" && (
                    <button onClick={makeAdmin} class="btn btn-xs">
                        Make Admin
                    </button>
                )}
            </td>
            <td>
                <button class="btn btn-xs">Remove User</button>
            </td>
        </tr>
    );
};

export default SignleUser;
