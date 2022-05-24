import React from "react";
import {
    useSignInWithEmailAndPassword,
    useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../firebase.init";
import Loading from "../sharedComponent/Loading";
import img from "../assets/loginimage/login.png";
import { sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";
import useToken from "../hooks/useToken";

const Login = () => {
    const navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let signInError;
    const {
        register,
        getValues,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const [signInWithEmailAndPassword, user, loading, error] =
        useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, guser, gloading, gError] =
        useSignInWithGoogle(auth);
    const [token] = useToken(user || guser);
    if (token) {
        navigate(from, { replace: true });
    }
    if (error || gError) {
        signInError = (
            <p className="text-red-500">
                <small>{error?.message || gError?.message}</small>
            </p>
        );
    }

    if (loading || gloading) {
        return <Loading></Loading>;
    }

    const onSubmit = (data) => {
        signInWithEmailAndPassword(data.email, data.password);

        console.log("updating");
    };
    const resetPassword = async () => {
        const email = getValues("email");
        if (email) {
            toast.info("Sent email");
            await sendPasswordResetEmail(email);
        } else {
            return toast.info("please enter your email address");
        }
    };

    return (
        <div className="flex bg-violet-100  justify-center items-center">
            <div className="card my-4 lg:w-96 bg-base-100  shadow-xl">
                <div className="card-body ">
                    <div className=" mx-auto w-24 ">
                        <img className="w-full" src={img} alt="" />
                    </div>
                    <h2 className="text-center text-2xl font-bold">Log in</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered focus:outline-blue-400 input-sm w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Email is Required",
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: "Provide a valid Email",
                                    },
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === "required" && (
                                    <span className="label-text-alt text-red-500">
                                        {errors.email.message}
                                    </span>
                                )}
                                {errors.email?.type === "pattern" && (
                                    <span className="label-text-alt text-red-500">
                                        {errors.email.message}
                                    </span>
                                )}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                className="input input-bordered focus:outline-blue-400 input-sm w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: "Password is Required",
                                    },
                                    minLength: {
                                        value: 6,
                                        message:
                                            "Must be 6 characters or longer",
                                    },
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === "required" && (
                                    <span className="label-text-alt text-red-500">
                                        {errors.password.message}
                                    </span>
                                )}
                                {errors.password?.type === "minLength" && (
                                    <span className="label-text-alt text-red-500">
                                        {errors.password.message}
                                    </span>
                                )}
                            </label>
                        </div>

                        {signInError}
                        <button
                            className="text-cyan-600 mb-2"
                            onClick={resetPassword}
                        >
                            Reset Password
                        </button>
                        <input
                            className="btn btn-sm bg-cyan-600 hover:bg-[#00B4FF] border-none w-full max-w-xs text-white"
                            type="submit"
                            value="Log in"
                        />
                    </form>
                    <div>
                        <p>
                            Already Have an Account
                            <Link className="text-cyan-600" to="/login">
                                Log In
                            </Link>
                        </p>
                    </div>
                    <div className="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-sm hover:bg-[#00B4FF] border-cyan-600 hover:border-none  btn-outline"
                    >
                        Continue with Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
