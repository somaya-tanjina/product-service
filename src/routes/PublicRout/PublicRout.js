import Home from "../../pages/Home/Home";

import Contact from "../../pages/Contact";
import Login from "../../pages/Login";
import About from "../../pages/About";
import Signup from "../../pages/Signup";
import Payment from "../../pages/Dashboard/Payment";
import NotFoundPage from "../../pages/NotFoundPage";
import MyPortFolio from "../../pages/MyPortFolio";
import Blogs from "../../pages/Blogs";



export const PublicRout = [
    { path: "/", name: "Home", Component: Home },
    { path: "dashboard/payment/:id", name: "Payment", Component: Payment },
    { path: "/contact", name: "Contact", Component: Contact },
    { path: "/about", name: "About", Component: About },
    { path: "/login", name: "Login", Component: Login },
    { path: "/signup", name: "Signup", Component: Signup },
    { path: "/myportfolio", name: "MyPortfolio", Component: MyPortFolio },
    { path: "/blogs", name: "Blogs", Component: Blogs },
    { path: "/*", name: "NotFound", Component: NotFoundPage },
];
