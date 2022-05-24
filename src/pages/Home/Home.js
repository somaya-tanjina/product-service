import React from 'react';
import Banner from './Banner';
import FeaturedCategory from './FeaturedCategory';
import Products from './Products';

const Home = () => {
  return (
      <div className="bg-[#F2F4F8]">
          <Banner></Banner>
          <FeaturedCategory></FeaturedCategory>
          <Products></Products>
      </div>
  );
};

export default Home;