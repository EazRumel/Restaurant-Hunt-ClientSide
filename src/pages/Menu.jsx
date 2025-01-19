import React from 'react';
import { Helmet} from 'react-helmet-async';
import Cover from '../shared/Cover';
import bgImg from "../assets/assets/menu/banner3.jpg"
import PopularMenu from '../components/PopularMenu';
import useMenu from '../hooks/useMenu';
import CategoryItems from '../components/CategoryItems';
import SectionTitle from '../components/SectionTitle';
import desertImg from "../assets/assets/menu/dessert-bg.jpeg"
import pizzaImg from "../assets/assets/menu/pizza-bg.jpg"
import saladImg from "../assets/assets/menu/salad-bg.jpg"
import soupImg from "../assets/assets/menu/soup-bg.jpg"


const Menu = () => {
  const [menu] = useMenu()
  const dessert = menu.filter(item =>item.category === "dessert")
  const soup = menu.filter(item =>item.category === "soup")
  const salad = menu.filter(item =>item.category === "salad")
  const offered = menu.filter(item =>item.category === "offered")
  const pizza = menu.filter(item =>item.category === "pizza")
  return (
    <div>
    <Helmet>
      <title>
      RH || Menu
      </title>
    </Helmet>
    <Cover img={bgImg} title="our menu"></Cover>
    <SectionTitle heading="Today's Offer" subHeading="Don't Miss"></SectionTitle>
    <CategoryItems items ={offered}></CategoryItems>
    <CategoryItems img={desertImg} items ={dessert} title="Deserts"></CategoryItems>
    <CategoryItems img={pizzaImg} items ={pizza} title="Pizza"></CategoryItems>
    <CategoryItems img={saladImg} items ={salad} title="Salad"></CategoryItems>
    <CategoryItems img={soupImg} items ={soup} title="Soup"></CategoryItems>
    </div>
  );
};

export default Menu;