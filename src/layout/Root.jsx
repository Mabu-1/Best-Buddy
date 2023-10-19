import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";



const Root = () => {
    return (
        <div>
               <div className="max-w-7xl mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
       
        </div>
        
    );
};

export default Root;