import React, { useState } from 'react';
import useProducts from '../../hooks/useProducts';
import Loading from '../../sharedComponent/Loading';
import DeleteOrder from './DeleteOrder';
import ManagesingleProduct from './ManagesingleProduct';

const ManageProducts = () => {
  const [data, isLoading, refetch] = useProducts()
  const [deleteOrder, setdeleteOrder] = useState(null);
  if (isLoading) {
      return (
          <>
              <Loading></Loading>
          </>
      );
  }
  return (
      <div>
          Oders:{data.length}
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
                              {data.map((product, index) => (
                                  <ManagesingleProduct
                                      setdeleteOrder={setdeleteOrder}
                                      product={product}
                                      key={index}
                                      index={index}
                                  ></ManagesingleProduct>
                              ))}
                          </tbody>
                      </table>
                  </div>
              </div>
              {deleteOrder && (
                  <DeleteOrder
                      setdeleteOrder={setdeleteOrder}
                      refetch={refetch}
                      cancelOrder={deleteOrder}
                  ></DeleteOrder>
              )}
          </div>
      </div>
  );
};

export default ManageProducts;