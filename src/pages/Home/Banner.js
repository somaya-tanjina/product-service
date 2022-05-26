import React from 'react';
import img from "../../assets/bg.png"

const Banner = () => {
  return (
      <div class="hero min-h-screen bg-base-200">
          <div class="hero-content flex-col lg:flex-row-reverse">
              <div className='w-full'>
                  <img
                      src={img}
                      class=" rounded-lg   "
                      alt=""
                  />
              </div>
              <div className="lg:px-20 lg:my-1 my-9 px-2">
                  <h1 class="text-5xl font-bold">
                      Welcome to{" "}
                      <span className="font-bold text-cyan-500">
                          Thrive Manufacture
                      </span>
                  </h1>
                  <p class="py-6 font-bold text-xl">
                      We are intend to make you Smile!!!!
                  </p>
                  <button class="btn btn-primary">Get Started</button>
              </div>
          </div>
      </div>
  );
};

export default Banner;