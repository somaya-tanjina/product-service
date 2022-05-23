import "./App.css";
import Navbar from "./sharedComponent/Navbar";
import { Route, Routes } from "react-router-dom";
import { PublicRout } from "./routes/PublicRout/PublicRout";
import RequiredAuth from "./authentication/RequiredAuth";
import Dashboard from "./pages/Dashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
                        path="/dashboard"
                        element={
                            <RequiredAuth>
                                <Dashboard></Dashboard>
                            </RequiredAuth>
                        }
                    ></Route>
                </Routes>
                <ToastContainer />
            </Navbar>
        </div>
    );
}

export default App;
