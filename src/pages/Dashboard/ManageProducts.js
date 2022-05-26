import React, { useState } from 'react';
import useProducts from '../../hooks/useProducts';
import Loading from '../../sharedComponent/Loading';
import DeleteProduct from './DeleteProduct';

import ManagesingleProduct from './ManagesingleProduct';

const ManageProducts = () => {
  const [data, isLoading, refetch] = useProducts()
  const [deleteProduct, setdeleteProduct] = useState(null);
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
                                  <th>Index</th>
                                  <th>Name</th>
                                  <th>Action</th>
                              </tr>
                          </thead>
                          <tbody>
                              {data.map((product, index) => (
                                  <ManagesingleProduct
                                      setdeleteProduct={setdeleteProduct}
                                      product={product}
                                      key={index}
                                      index={index}
                                  ></ManagesingleProduct>
                              ))}
                          </tbody>
                      </table>
                  </div>
              </div>
              {deleteProduct && (
                  <DeleteProduct
                      setdeleteProduct={setdeleteProduct}
                      refetch={refetch}
                      deleteProduct={deleteProduct}
                  ></DeleteProduct>
              )}
          </div>
      </div>
  );
};

export default ManageProducts;