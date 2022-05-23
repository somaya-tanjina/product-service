import React from "react";
import { useForm } from "react-hook-form";
import {
    useCreateUserWithEmailAndPassword,
    useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../sharedComponent/Loading";
import img from "../assets/loginimage/login.png";

const Signup = () => {
    const navigate = useNavigate();
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const [createUserWithEmailAndPassword, user, loading, error] =
        useCreateUserWithEmailAndPassword(auth, {
            sendEmailVerification: true,
        });
    const [signInWithGoogle, guser, gloading, gerror] =
        useSignInWithGoogle(auth);

    if (loading || gloading) {
        return <Loading></Loading>;
    }

    const onSubmit = async (data) => {
        await createUserWithEmailAndPassword(data.email, data.password);

        console.log("updating");
    };
  if (guser ||user) {
    navigate('/')
  }
      return (
          <div className="flex bg-violet-100  justify-center items-center">
              <div className="card lg:w-96 bg-base-100  my-5 shadow-xl">
                  <div className="card-body ">
                      <div className=" mx-auto w-24 ">
                          <img className="w-full" src={img} alt="" />
                      </div>
                      <h2 className="text-center text-2xl font-bold">
                          Sign Up
                      </h2>
                      <form onSubmit={handleSubmit(onSubmit)}>
                          <div className="form-control w-full max-w-xs">
                              <label className="label">
                                  <span className="label-text">Name</span>
                              </label>
                              <input
                                  type="text"
                                  placeholder="Your Name"
                                  className="input input-bordered focus:outline-blue-400 input-sm w-full max-w-xs"
                                  {...register("name", {
                                      required: {
                                          value: true,
                                          message: "Name is Required",
                                      },
                                  })}
                              />
                              <label className="label">
                                  {errors.name?.type === "required" && (
                                      <span className="label-text-alt text-red-500">
                                          {errors.name.message}
                                      </span>
                                  )}
                              </label>
                          </div>

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

                          {/* {signInError} */}
                          <input
                              className="btn btn-sm bg-cyan-600 hover:bg-[#00B4FF] border-none  w-full max-w-xs text-white"
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
                          className="btn hover:bg-[#00B4FF] border-cyan-600 hover:border-none btn-sm  btn-outline"
                      >
                          Continue with Google
                      </button>
                  </div>
              </div>
          </div>
      );
};

export default Signup;
