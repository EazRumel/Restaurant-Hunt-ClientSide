import { useState } from "react";
import orderBg  from "../assets/assets/shop/banner2.jpg"
import Cover from "../shared/Cover";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Helmet } from "react-helmet-async";
import useMenu from "../hooks/useMenu";
import FoodCard from "../components/FoodCard";

const Order = () => {

  const [tabIndex,setTabIndex] = useState(0)
  const [menu] = useMenu()
  const dessert = menu.filter(item =>item.category === "dessert")
  const soup = menu.filter(item =>item.category === "soup")
  const salad = menu.filter(item =>item.category === "salad")
  const offered = menu.filter(item =>item.category === "offered")
  const pizza = menu.filter(item =>item.category === "pizza")
  const drinks = menu.filter(item => item.category === "drinks")
  return (
    <div>
    <Helmet>
          <title>
          RH || Order
          </title>
        </Helmet>
      <Cover img={orderBg} title="Order Now"></Cover>
    <div className="flex justify-center mt-20">
    <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
  <TabList>
    <Tab>Salads</Tab>
    <Tab>Pizzas</Tab>
    <Tab>Soups</Tab>
    <Tab>Deserts</Tab>
    <Tab>Drinks</Tab>

  </TabList>
  <TabPanel>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {
      pizza.map(item => <FoodCard item={item} key={item._id}></FoodCard>)
    }
    </div>
  </TabPanel>
  <TabPanel>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {
      salad.map(item => <FoodCard item={item} key={item._id}></FoodCard>)
    }
    </div>
  </TabPanel>
  <TabPanel>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {
      soup.map(item => <FoodCard item={item} key={item._id}></FoodCard>)
    }
    </div>
  </TabPanel>
  <TabPanel>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {
      dessert.map(item => <FoodCard item={item} key={item._id}></FoodCard>)
    }
    </div>
  </TabPanel>
  <TabPanel>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {
      drinks.map(item => <FoodCard item={item} key={item._id}></FoodCard>)
    }
    </div>
  </TabPanel>
</Tabs>
    </div>
    </div>
  );
};

export default Order;