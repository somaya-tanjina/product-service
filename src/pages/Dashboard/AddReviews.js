import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddReviews = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm();

    const imagestorekey = "d8b9cf4ee8d66919eb31b8a54bb4dbea";

    const onSubmit = async (data) => {
        // console.log(data.review);
        const image = data.image[0];

        //send image info in imgbb
        const formData = new FormData();
        formData.append("image", image);
        const url = `https://api.imgbb.com/1/upload?key=${imagestorekey}`;
        fetch(url, {
            method: "POST",
            body: formData,
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.success) {
                    // create doctor info
                    const img = result.data.url;
                    const review = {
                        name: data.name,
                        review: data.review,
                        rating: data.rating,
                        img: img,
                    };
                    console.log(review);

                    fetch(
                        "https://frozen-everglades-15145.herokuapp.com/reviews",
                        {
                            method: "POST",
                            headers: {
                                "Content-type": "application/json",
                                authorization: `Bearer ${localStorage.getItem(
                                    "accessToken"
                                )}`,
                            },
                            body: JSON.stringify(review),
                        }
                    )
                        .then((res) => res.json())
                        .then((inserted) => {
                            if (inserted.insertedId) {
                                toast.success("Review added successfully");
                                reset();
                            } else {
                                toast.error("Failed to add Review");
                            }
                            console.log(inserted);
                        });
                }
            });
    };
    return (
        <div className=" ">
            <div className="flex items-center   justify-center">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h2 className="text-3xl">Add Your Review</h2>
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
                            placeholder="rating"
                            className="input input-bordered w-full max-w-xs"
                            {...register("rating", {
                                required: {
                                    value: true,
                                    message: "Rating i is Required",
                                },
                            })}
                        />
                    </div>
                    <div className="form-control w-full my-4 max-w-xs">
                        <textarea
                            {...register("review", {
                                required: {
                                    value: true,
                                    message: "Name is Required",
                                },
                            })}
                            name="review"
                            placeholder="Your reviews"
                            className=" border w-full  px-3"
                        ></textarea>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <input
                            type="file"
                            className="input input-bordered  w-full max-w-xs"
                            {...register("image", {
                                required: {
                                    value: true,
                                    message: "image is Required",
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

                    <input
                        className="btn btn-primary btn-sm w-full max-w-xs text-white"
                        type="submit"
                        value=" Add Review"
                    />
                </form>
            </div>
        </div>
    );
};

export default AddReviews;
