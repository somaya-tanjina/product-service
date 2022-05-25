import React from 'react';

const SingleOrder = ({ index, myorder }) => {
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{myorder.name}</td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
        </tr>
    );
};

export default SingleOrder;