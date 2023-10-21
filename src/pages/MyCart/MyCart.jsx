import { useLoaderData, useParams } from "react-router-dom";

import Card1 from "./Card1";
import { PiSmileySadThin } from 'react-icons/pi'
import { AuthContext } from "../../providers/AuthProvider";
import { useContext } from "react";
const MyCart = () => {
  const clients = useLoaderData();
  const { user } = useContext(AuthContext);
  const email=user.email;
  
 

  const client = clients.filter((client) => client.email ===email );

  if (client.length === 0) {
    return (
      <div className="text-center mb-4">
        <div className="flex justify-center">
         <PiSmileySadThin className="text-8xl text-[#dec945]"></PiSmileySadThin>
        </div>
        <p className="text-2xl font-semibold mt-4">You Did not add any Product .Go and add your favorite Product</p>
      </div>
    );
  }
  
  console.log(client);

  return (
    <div className="mt-4 mb-4">
   <h1 className="text-3xl">{client.brand}</h1>
     
      <div className="mt-4 " >
           <h1 className="text-center text-4xl font-bold mb-4 "> <span className="text-[#FFB807] ml-2">{client.brand}</span> Products</h1>
                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                   {
                   
                   client.map((cli) => (
            <Card1 key={cli._id} client={cli}></Card1>
          ))
          }
                           
            </div>
           </div>
    </div>
  );
};

export default MyCart;
