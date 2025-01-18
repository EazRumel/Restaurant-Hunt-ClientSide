import React, { useEffect, useState } from 'react';
import SectionTitle from './SectionTitle';
import MenuItem from './MenuItem';


const PopularMenu = () => {
   const [menu,setMenu] = useState([]);
   useEffect(()=>{
    fetch("/menu.json")
    .then(res=>res.json())
    .then(data=>{
      const popularItems = data.filter(item=>item.category === "popular");
      setMenu(popularItems)
    })
   },[])
  return (
    <section>
    <SectionTitle
    heading="Our Menu"
    subHeading="Should Try">
    </SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 mb-24">
       {
        menu.map(item => <MenuItem item={item} key={item.id}></MenuItem>)
       }
      </div>
    </section>
  );
};

export default PopularMenu;