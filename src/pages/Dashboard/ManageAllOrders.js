import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../sharedComponent/Loading';

import ManageSignleOrder from './ManageSignleOrder';

const ManageAllOrders = () => {

   const {
       data: allorders,
       isLoading,
       refetch,
   } = useQuery("allOrder", () =>
       fetch(`http://localhost:5000/alorders`, {
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
                                     
                                      order={order}
                                      key={index}
                                      index={index}
                                  ></ManageSignleOrder>
                              ))}
                          </tbody>
                      </table>
                  </div>
              </div>

          </div>
      </div>
  );
};

export default ManageAllOrders;