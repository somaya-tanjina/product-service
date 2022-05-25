import React from 'react';
import Banner from './Banner';
import FeaturedCategory from './FeaturedCategory';
import Products from './Products';
import Reviews from './Reviews';

const Home = () => {
  return (
      <div className="bg-[#F2F4F8]">
          <Banner></Banner>
          <FeaturedCategory></FeaturedCategory>
      <Products></Products>
      <Reviews></Reviews>
      </div>
  );
};

export default Home;