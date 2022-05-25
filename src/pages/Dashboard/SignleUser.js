import React from 'react';

const SignleUser = ({ index, user, refetch }) => {
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{user.email}</td>
        <td>
          p
                {/* {role !== "admin" && (
                    <button onClick={makeAdmin} class="btn btn-xs">
                        Make Admin
                    </button>
                )} */}
            </td>
            <td>
                <button class="btn btn-xs">Remove User</button>
            </td>
        </tr>
    );
};

export default SignleUser;