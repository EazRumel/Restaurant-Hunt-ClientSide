import React from 'react';
import MenuItem from './MenuItem';
import Cover from '../shared/Cover';
import { Link } from 'react-router-dom';
const CategoryItems = ({items,title,img}) => {
  return (
    <div className="py-16">
    {
      title &&  <Cover img={img} title={title}></Cover>
    }
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 mb-24 mt-16">
       {
        items.map(item => <MenuItem item={item} key={item.id}></MenuItem>)

       }
      </div>
    
     
    <Link to={`/order/${title}`}>
    <button className="btn btn-outline  border-0 border-b-4">See More</button>
    </Link>
    </div>
  );
};

export default CategoryItems;