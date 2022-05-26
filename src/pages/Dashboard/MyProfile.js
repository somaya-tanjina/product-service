import { async } from "@firebase/util";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import auth from "../../firebase.init";
import Loading from "../../sharedComponent/Loading";

const MyProfile = () => {
    const [user] = useAuthState(auth);

    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm();

    const {
        data: userProfile,
        isLoading,
        refetch,
    } = useQuery(["userProfile", user.email], () =>
        fetch(`http://localhost:5000/user/${user.email}`, {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        }).then((res) => res.json())
    );

    if (isLoading) {
        return <Loading></Loading>;
    }

    const onSubmit = async (data) => {
        const updatedProfile = {
            name: data.name,
            number: data.number,
            location: data.location,
            education: data.education,
        };

        fetch(`http://localhost:5000/user/${user.email}`, {
            method: "PATCH",
            body: JSON.stringify(updatedProfile),
            headers: {
                "Content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            });
        refetch();
    };

    return (
        <div className="lg:flex justify-around px-4">
            <div class="card lg:w-96 bg-base-100 lg:my-2 my-9 shadow-xl">
                <div class=" mt-10 text-center leading-8">
                    <h2 class="text-2xl font-bold">{userProfile?.name}</h2>
                    <h1 className=" font-bold ">
                        User :{" "}
                        <span className="text-cyan-600">{user?.email}</span>
                    </h1>
                    <p className="font-semibold">
                        Location:{" "}
                        <span className="text-cyan-600 font-semibold">
                            {userProfile?.location}
                        </span>
                    </p>
                    <p className="font-semibold">
                        Education:{" "}
                        <span className="text-cyan-600 font-semibold">
                            {userProfile?.education}
                        </span>
                    </p>
                    <p className="font-semibold">
                        Phone:{" "}
                        <span className="text-cyan-600 font-semibold">
                            {userProfile?.number}
                        </span>
                    </p>
                </div>
            </div>

            <div>
                <div className="flex items-center  justify-center">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h2 className="text-3xl">Update Your Profile</h2>
                        <div className="form-control w-full max-w-xs">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="input input-bordered w-full max-w-xs"
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
                            <input
                                type="number"
                                placeholder="Phone number"
                                className="input input-bordered w-full max-w-xs"
                                {...register("number", {
                                    required: {
                                        value: true,
                                        message: "Number i is Required",
                                    },
                                })}
                            />
                        </div>
                        <div className="form-control w-full my-4 max-w-xs">
                            <textarea
                                {...register("location", {
                                    required: {
                                        value: true,
                                        message: "Location is Required",
                                    },
                                })}
                                name="location"
                                placeholder="Your location"
                                className=" border w-full  px-3"
                            ></textarea>
                        </div>
                        <div className="form-control w-full my-4 max-w-xs">
                            <textarea
                                {...register("education", {
                                    required: {
                                        value: true,
                                        message: "Education is Required",
                                    },
                                })}
                                name="education"
                                placeholder="Your Education"
                                className=" border w-full  px-3"
                            ></textarea>
                        </div>

                        <input
                            className="btn btn-primary btn-sm w-full max-w-xs text-white"
                            type="submit"
                            value=" Update"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;
