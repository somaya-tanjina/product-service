import Home from "../../pages/Home/Home";

import Contact from "../../pages/Contact";
import Login from "../../pages/Login";
import About from "../../pages/About";
import Signup from "../../pages/Signup";
import Payment from "../../pages/Dashboard/Payment";
//import Purchase from "../../pages/Home/Purchase";

export const PublicRout = [
    { path: "/", name: "Home", Component: Home },
    { path: "dashboard/payment/:id", name: "Payment", Component: Payment },
    { path: "/contact", name: "Contact", Component: Contact },
    { path: "/about", name: "About", Component: About },
    { path: "/login", name: "Login", Component: Login },
    { path: "/signup", name: "Signup", Component: Signup },
];
