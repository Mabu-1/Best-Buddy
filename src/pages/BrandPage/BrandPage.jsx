import { useLoaderData, useParams } from "react-router-dom";
import Advertisement from "./Advertisement";
import Marquee from "react-fast-marquee";
import Card from "./Card";
import { PiSmileySadThin } from 'react-icons/pi'
const BrandPage = () => {
  const products = useLoaderData();

  const { brand } = useParams();

  const product = products.filter((product) => product.brand === brand);
  

  if (product.length === 0) {
    return (
      <div className="text-center mb-4">
        <div className="flex justify-center">
         <PiSmileySadThin className="text-8xl text-[#dec945]"></PiSmileySadThin>
        </div>
        <p className="text-2xl font-semibold mt-4">We're sorry, but this product is currently out of stock. Please explore our other amazing products!</p>
      </div>
    );
  }
  
  console.log(product);

  return (
    <div className="mt-4 mb-4">
   
      <div className="gap-4">
        <Marquee pauseOnHover={true} speed={100}>
          {product.map((pro) => (
            <Advertisement key={pro._id} product={pro}></Advertisement>
          ))}
        </Marquee>
      </div>

      <div className="mt-4 ">
           <h1 className="text-center text-4xl font-bold mb-4 "> <span className="text-[#FFB807] ml-2">{product.brand}</span> Products</h1>
                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                   {
                   
                   product.map((pro) => (
            <Card key={pro._id} product={pro}></Card>
          ))
          }
                           
            </div>
           </div>
    </div>
  );
};

export default BrandPage;
