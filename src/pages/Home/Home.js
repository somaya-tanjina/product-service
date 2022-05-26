import React from 'react';
import Footer from '../../sharedComponent/Footer';
import Banner from './Banner';
import BussinessSummery from './BussinessSummery';
import FeaturedCategory from './FeaturedCategory';
import JoinNewsletter from './JoinNewsletter';
import Products from './Products';
import Reviews from './Reviews';

const Home = () => {
  return (
      <div className="bg-[#F2F4F8]">
          <Banner></Banner>
          <FeaturedCategory></FeaturedCategory>
      <Products></Products>
      <Reviews></Reviews>
      <BussinessSummery></BussinessSummery>
      <JoinNewsletter></JoinNewsletter>

      </div>
  );
};

export default Home;