import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddProduct = () => {
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
                    const product = {
                        name: data.name,
                        price: data.price,
                        availableQuantity: data.availableQuantity,
                        minimumQuantity: data.minimumQuantity,
                        description: data.description,
                        picture: img,
                    };
                    console.log(product);

                    fetch(
                        "https://frozen-everglades-15145.herokuapp.com/products",
                        {
                            method: "POST",
                            headers: {
                                "Content-type": "application/json",
                                authorization: `Bearer ${localStorage.getItem(
                                    "accessToken"
                                )}`,
                            },
                            body: JSON.stringify(product),
                        }
                    )
                        .then((res) => res.json())
                        .then((inserted) => {
                            if (inserted.insertedId) {
                                toast.success("Product added successfully");
                                reset();
                            } else {
                                toast.error("Failed to add Product");
                            }
                            console.log(inserted);
                        });
                }
            });
    };
    return (
        <div>
            <div className="flex items-center justify-center">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h2 className="text-3xl">Add Product</h2>
                    <div className="form-control w-full max-w-xs">
                        <input
                            type="text"
                            placeholder="Product Name"
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
                            placeholder="price"
                            className="input input-bordered w-full max-w-xs"
                            {...register("price", {
                                required: {
                                    value: true,
                                    message: "price i is Required",
                                },
                            })}
                        />
                    </div>
                    <div className="form-control my-4 w-full max-w-xs">
                        <input
                            type="number"
                            placeholder="availableQuantity"
                            className="input input-bordered w-full max-w-xs"
                            {...register("availableQuantity", {
                                required: {
                                    value: true,
                                    message: "availableQuantity i is Required",
                                },
                            })}
                        />
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <input
                            type="number"
                            placeholder="minimumQuantity"
                            className="input input-bordered w-full max-w-xs"
                            {...register("minimumQuantity", {
                                required: {
                                    value: true,
                                    message: "minimumQuantity i is Required",
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
                    <div className="form-control w-full my-4 max-w-xs">
                        <textarea
                            {...register("description", {
                                required: {
                                    value: true,
                                    message: "description is Required",
                                },
                            })}
                            name="description"
                            placeholder="Description"
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
                        className="btn btn-secondary btn-sm w-full max-w-xs text-white"
                        type="submit"
                        value=" Add Product"
                    />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;
