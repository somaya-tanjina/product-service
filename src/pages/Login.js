import React from "react";
import {
    useSignInWithEmailAndPassword,
    useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import auth from "../firebase.init";
import Loading from "../sharedComponent/Loading";
import img from "../assets/loginimage/login.png";
const Login = () => {
    const navigate = useNavigate();
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const [signInWithEmailAndPassword, user, loading, error] =
        useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, guser, gloading, gerror] =
        useSignInWithGoogle(auth);
if (guser || user) {
    navigate("/");
}
    if (loading || gloading) {
        return <Loading></Loading>;
    }

    const onSubmit = async (data) => {
        await signInWithEmailAndPassword(data.email, data.password);

        console.log("updating");
    };

    return (
        <div className="flex bg-violet-100  justify-center items-center">
            <div className="card my-6 lg:w-96 bg-base-100  shadow-xl">
                <div className="card-body ">
                    <div className=" mx-auto w-24 lg:w-36">
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
                                className="input input-bordered w-full max-w-xs"
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
                                className="input input-bordered w-full max-w-xs"
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

                        {/* {signInError} */}
                        <input
                            className="btn bg-cyan-600 hover:bg-[#00B4FF] border-none w-full max-w-xs text-white"
                            type="submit"
                            value="Sign Up"
                        />
                    </form>
                    <div>
                        <p>
                            Already Have an Account
                            <Link className="text-cyan-600" to="/login">
                                Log In
                            </Link>
                        </p>
                        <p>
                            <Link className="text-cyan-600" to="/login">
                                Forget Password
                            </Link>
                        </p>
                    </div>
                    <div className="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn hover:bg-[#00B4FF] border-cyan-600 hover:border-none  btn-outline"
                    >
                        Continue with Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
