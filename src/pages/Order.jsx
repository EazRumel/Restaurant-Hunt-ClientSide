import { useState } from "react";
import orderBg  from "../assets/assets/shop/banner2.jpg"
import Cover from "../shared/Cover";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Helmet } from "react-helmet-async";
import useMenu from "../hooks/useMenu";
import FoodCard from "../components/FoodCard";
import { useParams } from "react-router-dom";
import OrderTab from "../components/OrderTab";

const Order = () => {
  const categories = ["salad","pizza","soup","dessert","drinks"]
  const {category} = useParams()
  const initialIndex = categories.indexOf(category)
  const [tabIndex,setTabIndex] = useState(initialIndex)
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
    <div className="mt-20">
    <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
  <TabList>
    <Tab>Salads</Tab>
    <Tab>Pizzas</Tab>
    <Tab>Soups</Tab>
    <Tab>Deserts</Tab>
    <Tab>Drinks</Tab>

  </TabList>
  <TabPanel>
   <OrderTab items={salad}></OrderTab>
  </TabPanel>
  <TabPanel>
  <OrderTab items={pizza}></OrderTab>
  </TabPanel>
  <TabPanel>
  <OrderTab items={soup}></OrderTab>
  </TabPanel>
  <TabPanel>
  <OrderTab items={dessert}></OrderTab>
  </TabPanel>
  <TabPanel>
<OrderTab items={drinks}></OrderTab>
  </TabPanel>
</Tabs>
    </div>
    </div>
  );
};

export default Order;