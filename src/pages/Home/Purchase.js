import React from 'react';
import { useParams } from 'react-router-dom';
import useProductDetails from '../../hooks/useProductDetails';
import Loading from '../../sharedComponent/Loading';

const  Purchase = () => {
  const { id, name } = useParams()
  const [data, isLoading, refetch] = useProductDetails(id)

  if (isLoading) {
      return (
          <>
              <Loading></Loading>
          </>
      );
  }
  return (
    <div>
      <h1>{id}</h1>
      <p>{data.name}</p>
      <div>
        <div>{ }</div>
        <div></div>
      </div>
    </div>
  );
};

export default Purchase;