import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";



const Root = () => {
    return (
        <div >
             <Navbar></Navbar>
               <div className="max-w-[1650px] mx-auto">
           
            <Outlet></Outlet>
           
        </div>

        <Footer></Footer>
        </div>
        
    );
};

export default Root;