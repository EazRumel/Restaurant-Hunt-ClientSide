import { Parallax } from 'react-parallax';
const Cover = ({img,title}) => {

  return (
    <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={img}
        bgImageAlt="the dog"
        strength={-200}
    >
        <div className="hero h-[700px]">
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="text-center hero-content text-neutral-content">
      <div className="max-w-md">
       <h1 className="uppercase text-5xl font-bold">{title}</h1>
       <p className="mt-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum tenetur perspiciatis nam saepe soluta</p>
      </div>
      </div>
    </div>
    </Parallax>
  );
};

export default Cover; 
