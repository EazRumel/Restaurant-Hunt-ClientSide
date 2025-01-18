const Cover = ({img,title}) => {
  return (
    <div className="hero h-[700px]" style={{backgroundImage: `url("${img}")`}}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="text-center hero-content text-neutral-content">
      <div className="max-w-md">
       <h1 className="uppercase text-5xl font-bold">{title}</h1>
       <p className="mt-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum tenetur perspiciatis nam saepe soluta</p>
      </div>
      </div>
    </div>
  );
};

export default Cover; 