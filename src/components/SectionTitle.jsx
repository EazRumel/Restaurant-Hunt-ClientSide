import React from 'react';

const SectionTitle = ({heading,subHeading}) => {
  return (
    <div className = "text-center w-4/12 mx-auto my-8">
      <p className="text-yellow-600">{subHeading}</p>
      <h3 className="text-4xl uppercase border-y-4 py-4">{heading}</h3>
    </div>
  );
};

export default SectionTitle;