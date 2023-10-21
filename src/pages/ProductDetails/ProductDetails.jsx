import { Link, useLoaderData, useParams } from "react-router-dom";
import { AiOutlineArrowLeft} from 'react-icons/ai'
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import axios from "axios";
import Swal from 'sweetalert2';

const ProductDetails = () => {
    
    const { user } = useContext(AuthContext);
    const email=user.email;
    
    const product =useLoaderData()
    const {  name, image, brand, description, price, rating, type } = product;
   

    const handleAdd = async (e) => {
        e.preventDefault();
    
        const myData = {
            name,
            image,
            brand,
            description,
            price,
            rating,
            type,
            email,
           
           
            // Add other properties you want to include
        };
   
    try {
        const res = await axios.post("http://localhost:5000/client", myData);
        if (res.data.acknowledged) {
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Product has been saved',
                showConfirmButton: false,
                timer: 1500
            });
           
        }
    } catch (error) {
        console.log(error);
    }
    };




    const backgroundImageStyle = {
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        minHeight: "60vh", 
      
    };
    const overlayStyle = {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        background: "rgba(11, 11, 11, 0.8)",
        paddingTop: "20px", 
    };
    return (
           <div>
             <div className="relative bg-cover bg-no-repeat bg-center" style={backgroundImageStyle}>
             <div style={overlayStyle} className="flex justify-between"> 
             <div className="mt-[-10px]">
   <Link to={`/brands/${brand}`}><button id="" type="submit" className="bg-[#FF444A] text-white text-center text-xl font-bold ml-[20px] my-3 w-[190px] rounded-lg p-3 flex"> <AiOutlineArrowLeft className="mr-4 text-xl mt-[7px]"></AiOutlineArrowLeft> Go Back</button> </Link> 
  </div>
  <div className="mt-[-10px]">
  <button className="btn bg-[#FF444A] text-white text-center text-xl font-bold ml-[20px] my-3 w-[2`10px] rounded-lg p-6  mr-[20px]" onClick={handleAdd}>Add to Cart </button>

  </div>
 
</div>


        </div>

        {/* text */}
        <div>
        
        <div className="text-center">
        <div className="mt-[40px]">
            <h1 className="font-bold text-5xl underline"> {name}</h1>
            
        </div>
        </div>
        <div className="flex justify-center mt-[20px]">
                <img className="w-[420px] h-[300px]" src="https://i.ibb.co/BB4YRzk/41588.jpg" alt="" />
            </div>
            <div className="mt-[40px]" >
                     <p className="text-2xl font-semibold text-gray-600">{description && description.length > 0 ? `${description.slice(0, 300)}` : description}</p>
            </div>
            <div className="flex justify-center mt-[20px]">
                <img className="w-[420px] h-[300px]" src="https://i.ibb.co/frHP20Z/66815.jpg" alt="" />
            </div>
            <div className="mt-[40px]" >
            <p className="text-2xl font-semibold text-gray-600">{description && description.length > 300 ? `${description.slice(300, 600)}` : description}</p>
            </div>
            <div className="flex justify-center mt-[20px] ">
                <img className="w-[420px] h-[300px]" src="https://i.ibb.co/CBhcBZc/7317975.jpg" alt="" />
            </div>
            <div className="mt-[40px]" >
            <p className="text-2xl font-semibold text-gray-600">{description && description.length > 600 ? `${description.slice(600, 900)}` : description}</p>
            </div>
           
          

        </div>
      
 
        </div>
    );
};

export default ProductDetails;