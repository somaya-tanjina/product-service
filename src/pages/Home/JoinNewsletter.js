import React from "react";

const JoinNewsletter = () => {
    return (
        <div className="mt-20 bg-base-100 py-20">
            <div className="container  ">
                <h3 className="text-3xl font-bold text-center">
                    Join to Our
                    <span className="text-[#0364B8]">NewsLetter</span>
                </h3>
                <p className=" text-center my-4">
                    Sign up to receive Email, Update of new Product, Annoucment,
                    Gift Ideas ,Promotions, Sales!!
                </p>
                <div className="mx-auto">
                    <input
                        type="email"
                        placeholder="email"
                        my-3
                        class=" block mx-auto input input-bordered input-info w-full max-w-xl"
                    />

                    <input
                        type="number"
                        placeholder="zipcode"
                        my-3
                        class=" block mx-auto input input-bordered my-3 input-info w-full max-w-xl"
                    />
                    <button className=" btn btn-secondary w-28 lg:w-80 block mx-auto my-3">
                        Join
                    </button>
                </div>
            </div>
        </div>
    );
};

export default JoinNewsletter;
