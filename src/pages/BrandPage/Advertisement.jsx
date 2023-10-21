

const Advertisement = ({product}) => {
    const {name,image,brand,price}=product;
    return (
<div className="px-5">
<div className="hero bg-[#f4dbba] rounded-xl">
  <div className="hero-content flex-col lg:flex-row justify-between">
    <img src={image} className="h-[250px] w-[320px] lg:h-[400px] lg:w-[630px]  md:h-[300px] md:w-[500px]  rounded-xl shadow-2xl" />
    <div className="">
      <h1 className="text-5xl font-bold text-center">{name}</h1>
      <h3 className="py-6 text-2xl text-[#fe6f5e] text-center"> <b>{brand}</b> </h3>
      <p className="text-lg text-gray-600"><b>Find Your Perfect Ride, Where Every Mile Tells a Story, and Every Turn Leads to a New Adventure, Embrace the Road Ahead.</b></p>
        
    </div>
  </div>
</div>
</div>
    );
};

export default Advertisement;