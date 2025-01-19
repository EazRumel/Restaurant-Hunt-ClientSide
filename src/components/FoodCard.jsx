import React from 'react';

const FoodCard = ({item}) => {
  const {name,recipe,image,category,price} = item;
  return (
    <div className="card bg-base-100 text-center shadow-xl mb-10 mt-10">
  <figure>
  
    <img
      src={image}
      alt="Shoes" />
      <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white">${price}</p>
  </figure>
 
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{recipe}</p>
    <div className="card-actions justify-end">
    <button className="btn btn-outline  border-0 border-b-4">Add To Cart</button>
    </div>
  </div>
</div>
  );
};

export default FoodCard;