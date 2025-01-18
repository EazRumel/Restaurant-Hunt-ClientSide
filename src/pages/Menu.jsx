import React from 'react';
import { Helmet} from 'react-helmet-async';
import Cover from '../shared/Cover';
import bgImg from "../assets/assets/menu/banner3.jpg"
import PopularMenu from '../components/PopularMenu';
import useMenu from '../hooks/useMenu';
import CategoryItems from '../components/CategoryItems';
import SectionTitle from '../components/SectionTitle';


const Menu = () => {
  const [menu] = useMenu()
  const desert = menu.filter(item =>item.category === "desert")
  const soup = menu.filter(item =>item.category === "soup")
  const salad = menu.filter(item =>item.category === "salad")
  const offered = menu.filter(item =>item.category === "offered")
  return (
    <div>
    <Helmet>
      <title>
       Menu
      </title>
    </Helmet>
    <Cover img={bgImg} title="our menu"></Cover>
    <SectionTitle heading="Today's Offer" subHeading="Don't Miss"></SectionTitle>
    <CategoryItems items ={offered}></CategoryItems>
    </div>
  );
};

export default Menu;