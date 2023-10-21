import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';

const Card = ({product,setProduct}) => {
const {_id,name,image,description,price,rating,type} =product;


    return (
        <div className="px-3">
          <div className="card mb-16 bg-[#b7553f] ">
        <figure  ><img className="max-w-[280px] h-[190px] object-cover" src={image} alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title font-bold text-3xl">{name}</h2>

            <p className="text-lg font-semibold h-[90px]">
  {description && description.length > 65 ? `${description.slice(0, 65)}...` : description}
</p>

         
          <div className="flex justify-between">

<div>
<h3 className="text-3xl">{type}</h3>
</div>

  <div>
     <div className="flex  py-3">
    <h3 className="text-3xl">{rating} </h3>
    <AiFillStar className="text-yellow-500 text-3xl mt-[3px] ml-[4px]"></AiFillStar>
    </div>
  </div>

  </div>
 
 <div className="flex justify-between">
 <button className="btn bg-[#3dd554] p-1 w-32 h-10 " onClick={()=>document.getElementById('my_modal_5').showModal()}><span className="text-white ">Price:</span>${price}</button>
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
<div className="modal-box flex flex-col items-center justify-center">
  <h3 className="font-bold text-lg text-center">Thanks For Purchasing Our Product!</h3>
  <div className="text-center">
    <img className="w-[100px] h-[70px]" src="https://i.ibb.co/1dQMgjz/party-popper.jpg" alt="" />
  </div>
  <h3 className="font-bold text-lg text-center">Please Come Again!</h3>
  <div className="modal-action">
    <form method="dialog">
    
      <button className="btn">Close</button>
    </form>
  </div>
</div>

</dialog>

 <div className="">
    <Link to={`/product/${_id}`}>
      <button className="btn bg-[#97a233] p-1 w-32 h-10">Read More</button>
    </Link>
  </div>
  
 </div>


<div className="flex justify-center">
<div className="">
    <Link to={`/update/${_id}`}>
      <button className="btn bg-[#392ea0] p-1 w-32 h-10">Update</button>
    </Link>
  </div>

  
</div>

</div>

</div>

        </div>
       
     
        
 
    );
};

export default Card;