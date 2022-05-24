import Home from "../../pages/Home/Home";

import Contact from "../../pages/Contact";
import Login from "../../pages/Login";
import About from "../../pages/About";
import Signup from "../../pages/Signup";
import ProductDetails from "../../pages/Home/ProductDetails";

export const PublicRout = [
    { path: "/", name: "Home", Component: Home },
    { path: "/product/:id", name: "Product", Component: ProductDetails },
    { path: "/contact", name: "Contact", Component: Contact },
    { path: "/about", name: "About", Component: About },
    { path: "/login", name: "Login", Component: Login },
    { path: "/signup", name: "Signup", Component: Signup },
];
