import "./App.css";
import Navbar from "./sharedComponent/Navbar";
import { Route, Routes } from "react-router-dom";
import { PublicRout } from "./routes/PublicRout/PublicRout";
import RequiredAuth from "./authentication/RequiredAuth";
import Dashboard from "./pages/Dashboard/Dashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MyProfile from "./pages/Dashboard/MyProfile";
import Purchase from "./pages/Orders/Purchase";
import MyOrders from "./pages/Dashboard/MyOrders";
import AddReviews from "./pages/Dashboard/AddReviews";
import AddProduct from "./pages/Dashboard/AddProduct";
import Footer from "./sharedComponent/Footer";
import ManageAllOrders from "./pages/Dashboard/ManageAllOrders";
import ManageProducts from "./pages/Dashboard/ManageProducts";
import MakeAdmin from "./pages/Dashboard/MakeAdmin";
import RequiredAdmin from "./authentication/RequiredAdmin";
import Payment from "./pages/Dashboard/Payment";
function App() {
    return (
        <div>
            <Navbar>
                <Routes>
                    {PublicRout.map(({ path, Component }, index) => (
                        <Route
                            key={index}
                            path={path}
                            element={<Component />}
                        ></Route>
                    ))}
                    <Route
                        path="/product/:id"
                        element={
                            <RequiredAuth>
                                <Purchase></Purchase>
                            </RequiredAuth>
                        }
                    ></Route>

                    <Route
                        path="/dashboard"
                        element={
                            <RequiredAuth>
                                <Dashboard></Dashboard>
                            </RequiredAuth>
                        }
                    >
                        <Route index element={<MyProfile></MyProfile>}></Route>
                        <Route
                            path="myOrders"
                            element={<MyOrders></MyOrders>}
                        ></Route>
                        <Route
                            path="addreviews"
                            element={<AddReviews></AddReviews>}
                        ></Route>

                        <Route
                            path="makeAdmin"
                            element={
                                <RequiredAdmin>
                                    <MakeAdmin />
                                </RequiredAdmin>
                            }
                        ></Route>
                        <Route
                            path="addproducts"
                            element={
                                <RequiredAdmin>
                                    <AddProduct />
                                </RequiredAdmin>
                            }
                        ></Route>
                        <Route
                            path="manageAllOrders"
                            element={
                                <RequiredAdmin>
                                    <ManageAllOrders />
                                </RequiredAdmin>
                            }
                        ></Route>
                        <Route
                            path="manageProducts"
                            element={
                                <RequiredAdmin>
                                    <ManageProducts />
                                </RequiredAdmin>
                            }
                        ></Route>
                    </Route>
                </Routes>
                <ToastContainer />
            </Navbar>
            <Footer></Footer>
        </div>
    );
}

export default App;
