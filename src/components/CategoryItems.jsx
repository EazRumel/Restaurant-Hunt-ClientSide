import React from 'react';
import MenuItem from './MenuItem';

const CategoryItems = ({items}) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 mb-24">
       {
        items.map(item => <MenuItem item={item} key={item.id}></MenuItem>)

       }
      </div>
    </div>
  );
};

export default CategoryItems;