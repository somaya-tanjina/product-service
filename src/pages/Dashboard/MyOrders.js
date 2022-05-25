import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SingleOrder from './SingleOrder';

const MyOrders = () => {
const [user] = useAuthState(auth)
  const [myorders, setMyOrders] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
      if (user) {
          console.log(user);


          fetch(`http://localhost:5000/orders?email=${user.email}`, {
              method: "GET",
              headers: {
                  authorization: `Bearer ${localStorage.getItem(
                      "accessToken"
                  )}`,
              },
          })
              .then((res) => {
                  console.log("res", res);
                  if (res.status === 401 || res.status === 403) {
                      signOut(auth);
                      localStorage.removeItem("accessToken");
                       navigate("/");
                  }
                  return res.json();
              })

              .then((data) => {
                  console.log(data);
                  setMyOrders(data);
              });
      }
  }, [user]);
  return (
    <div>
      my order:{myorders?.length}

      <div>

        <div class="overflow-x-auto">
  <table class="table w-full">
    {/* <!-- head --> */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
       {myorders.map((myorder, index)=><SingleOrder myorder={myorder} key={index} index={index} ></SingleOrder>)}

    </tbody>
  </table>
</div>
</div>



    </div>
  );
};

export default MyOrders;