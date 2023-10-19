import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

import About from "../pages/About/About";

import PrivateRoute from "./PrivateRoute";


const router =createBrowserRouter([
    {
        path: '/',
        element:<Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children:
        [
            {
                path:'/',
                element:<Home></Home>,
                loader: () => fetch('/services.json'),
               
            },
          
            {
                path:'/about',
                element:<PrivateRoute><About></About></PrivateRoute> ,
                loader: () => fetch('/members.json'),
               
               
               
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]
    }
   
])

export default router;