import React from 'react';

const SingleFeaturedItem = ({ featutre }) => {
  const { name, img } = featutre;
    return (
        <div className="card card-compact transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 w-full lg:w-40 bg-base-100 shadow-xl">
            <figure >
                <img className=" mt-5 mx-auto" src={img} alt="feature" />
            </figure>
            <div className="card-body">
                <h2 className="text-lg text-center">{name}</h2>
            </div>
        </div>
    );
};

export default SingleFeaturedItem;