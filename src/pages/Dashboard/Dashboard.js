import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";


const Dashboard = () => {
    const [user] = useAuthState(auth);
  return (
      <div class="drawer drawer-mobile">
          <input id="drawer-sidebar" type="checkbox" class="drawer-toggle" />
          <div class="drawer-content ">
              <h1>DAShboard</h1>
              <Outlet></Outlet>
              {/* <!-- Page content here --> */}
          </div>
      <div class="drawer-side">

              <label for="drawer-sidebar" class="drawer-overlay"></label>
              <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                  {/* <!-- Sidebar content here --> */}
                  <li>
                      <Link to="/dashboard">My Profile</Link>
                  </li>
                  <li>
                      <Link to="/dashboard/myOrders">My Orders</Link>
                  </li>
                  <li>
                      <Link to="/dashboard/addreviews">Add Reviews</Link>
                  </li>
                  {/* {admin && (
                      <>
                          <li>
                              <Link to="/dashboard/allusers">All Users</Link>
                          </li>
                          <li>
                              <Link to="/dashboard/addDoctor">Add Doctor</Link>
                          </li>
                          <li>
                              <Link to="/dashboard/manageDoctor">
                                  Manage Doctor
                              </Link>
                          </li>
                      </>
                  )} */}
              </ul>
          </div>
      </div>
  );
};

export default Dashboard;