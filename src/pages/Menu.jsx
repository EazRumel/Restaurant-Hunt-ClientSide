import React from 'react';
import { Helmet} from 'react-helmet-async';
import Cover from '../shared/Cover';
import bgImg from "../assets/assets/menu/banner3.jpg"
import PopularMenu from '../components/PopularMenu';


const Menu = () => {
  return (
    <div>
    <Helmet>
      <title>
       Menu
      </title>
    </Helmet>
    <Cover img={bgImg} title="our menu"></Cover>
    <PopularMenu></PopularMenu>
    <Cover img={bgImg} title="our menu"></Cover>
    <PopularMenu></PopularMenu>
    <Cover img={bgImg} title="our menu"></Cover>
    <PopularMenu></PopularMenu>
    </div>
  );
};

export default Menu;