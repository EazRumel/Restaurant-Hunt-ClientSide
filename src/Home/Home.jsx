import React from 'react';
import Carousal from '../components/Carousal';
import Category from '../components/Category';
import PopularMenu from '../components/PopularMenu';
import Featured from '../components/Featured';
import Testimonials from '../components/Testimonials';
import { Helmet} from 'react-helmet-async';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>RH || Home</title>
      </Helmet>
      <Carousal></Carousal>
      <Category></Category>
      <PopularMenu></PopularMenu>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;