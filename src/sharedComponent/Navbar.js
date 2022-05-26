import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink } from "react-router-dom";
import auth from "../firebase.init";

const Navbar = ({ children }) => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
        localStorage.removeItem("accessToken");
    };
    return (
        <div class="drawer drawer-end ">
            <input id="my-drawer-3" type="checkbox" class="drawer-toggle h-6" />
            <div class="drawer-content flex flex-col">
                {/* <!-- Navbar --> */}
                <div class="w-full sticky top-0 z-10 navbar  bg-white  ">
                    <div class="flex-1 px-2 text-center  lg:mx-2 ">
                        Thrive Manufacture
                    </div>
                    <div className="navbar-start">
                        <label
                            tabIndex="1"
                            for="drawer-sidebar"
                            className="btn btn-ghost  lg:hidden"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>
                        {/* <label class="btn btn-primary drawer-button lg:hidden">
                        Open drawer
                    </label> */}
                    </div>
                    <div class="flex-none lg:hidden">
                        <label
                            for="my-drawer-3"
                            class="btn btn-square btn-ghost"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                class="inline-block w-6 h-6 stroke-current"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
                        </label>
                    </div>

                    <div class="flex-none hidden lg:block">
                        <ul class="menu menu-horizontal gap-x-3">
                            {/* <!-- Navbar menu content here --> */}
                            <li>
                                <NavLink to="/" className="rounded-lg">
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/about" className="rounded-lg">
                                    About
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/myportfolio"
                                    className="rounded-lg"
                                >
                                    My Portfolio
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/blogs"
                                    className="rounded-lg"
                                >
                                    Blogs
                                </NavLink>
                            </li>

                            {user && (
                                <li>
                                    <NavLink
                                        className=" focus:text-white  focus:bg-[#3A4256]"
                                        to={"/dashboard"}
                                    >
                                        Dashboard
                                    </NavLink>
                                </li>
                            )}

                            <li>
                                <NavLink to="/contact" className="rounded-lg">
                                    Contact
                                </NavLink>
                            </li>

                            <li>
                                {user ? (
                                    <button
                                        onClick={handleSignOut}
                                        className="btn btn-ghost"
                                    >
                                        Sign Out
                                    </button>
                                ) : (
                                    <NavLink
                                        className="rounded-lg"
                                        to={"/login"}
                                    >
                                        Log In
                                    </NavLink>
                                )}
                            </li>
                            {user && <li>{user.displayName}</li>}
                            <li>
                                <NavLink to="/signup" className="rounded-lg">
                                    Sign Up
                                </NavLink>
                            </li>

                            <label class="swap swap-rotate">



                            </label>
                        </ul>
                    </div>
                </div>
                {/* <!-- Page content here --> */}
                {children}
            </div>
            <div class="drawer-side">
                <label for="my-drawer-3" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 gap-y-3">
                    {/* <!-- Sidebar content here --> */}
                    <li>
                        <NavLink to="/" className="rounded-lg">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className="rounded-lg">
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/blogs" className="rounded-lg">
                            Blogs
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/myportfolio" className="rounded-lg">
                            My Portfolio
                        </NavLink>
                    </li>
                    {user && (
                        <li>
                            <NavLink to="/dashboard" className="rounded-lg">
                                Dashboard
                            </NavLink>
                        </li>
                    )}
                    <li>
                        <NavLink to="/contact" className="rounded-lg">
                            Contact
                        </NavLink>
                    </li>
                    {user && <li>{user.displayName}</li>}
                    <li>
                        {user ? (
                            <button
                                onClick={handleSignOut}
                                className="btn btn-ghost"
                            >
                                Sign Out
                            </button>
                        ) : (
                            <NavLink
                                className=" focus:text-white  focus:bg-[#3A4256]"
                                to={"/login"}
                            >
                                Log In
                            </NavLink>
                        )}
                    </li>
                    <li>
                        <NavLink to="/signup" className="rounded-lg">
                            Sign Up
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
