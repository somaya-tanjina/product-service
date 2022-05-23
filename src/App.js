import "./App.css";
import Navbar from "./sharedComponent/Navbar";
import { Route, Routes } from "react-router-dom";
import { PublicRout } from "./routes/PublicRout/PublicRout";
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
                </Routes>
            </Navbar>
        </div>
    );
}

export default App;
