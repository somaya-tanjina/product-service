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
import AllUsers from "./pages/Dashboard/AllUsers";
import AddProduct from "./pages/Dashboard/AddProduct";
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
                            path="allusers"
                            element={<AllUsers></AllUsers>}
                        ></Route>
                        <Route
                            path="addproducts"
                            element={<AddProduct/>}
                        ></Route>
                    </Route>
                </Routes>
                <ToastContainer />
            </Navbar>
        </div>
    );
}

export default App;
