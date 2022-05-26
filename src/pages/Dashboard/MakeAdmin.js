import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../sharedComponent/Loading';
import SignleUser from './SignleUser';

const MakeAdmin = () => {
  const {
      data: allusers,
      isLoading,
      refetch,
  } = useQuery("users", () =>
      fetch("http://localhost:5000/users", {
          method: "GET",
          headers: {
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
      }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>
  }
  return (
      <div>
          <h1> User: {allusers?.length}</h1>

          <div class="overflow-x-auto">
              <table class="table w-full">
                  <thead>
                      <tr>
                          <th></th>
                          <th>Name</th>
                          <th>Job</th>
                          <th>Favorite Color</th>
                      </tr>
                  </thead>
                  <tbody>
                      {allusers.map((user, index) => (
                          <SignleUser
                              refetch={refetch}
                              key={user._id}
                              user={user}
                              index={index}
                          ></SignleUser>
                      ))}
                  </tbody>
              </table>
          </div>
      </div>
  );
};

export default MakeAdmin;