import { Link } from "react-router-dom";

const BrandCard = ({brands}) => {

    const { brand, image } = brands;
    return (
      <Link to={`/brands/${brands.brand}`}>
             <div className="card w-96 bg-base-100 shadow-xl">
         
  <figure className="px-10 pt-10">
    <img   src={image} alt={brand} className="rounded-xl h-[130px] w-[150px]" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{brand}</h2>
    
  </div>
</div>
          </Link>
       
    );
};

export default BrandCard;