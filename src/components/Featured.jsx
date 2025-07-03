import React from 'react';
import SectionTitle from './SectionTitle';
import featuredImg from '../assets/assets/home/featured.jpg';
import "./Featured.css"

const Featured = () => {
  return (
    <div className="featured-bg bg-fixed pt-8 my-20">
    <SectionTitle
    subHeading={"Check it out"}
    heading={"From Our Menu"}
    ></SectionTitle>
      <div className="flex justify-center items-center pb-20 pt-12 py-20 px-36 text-white bg-slate-500 bg-opacity-20">
        <div>
        <img className="rounded-xl" src={featuredImg} alt="" />
        </div>
        <div className="ml-10">
        <p>Aug 20,2025</p>
        <p className="uppercase">Where can I find it?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, nemo vero. Quas expedita sunt beatae animi modi dolorem illo corrupti, vel eligendi aliquam consequatur! Ipsum distinctio architecto nemo commodi atque!</p>
        <button className="btn btn-outline  border-0 border-b-4">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;