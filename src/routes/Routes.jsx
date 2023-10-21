import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

import PrivateRoute from "./PrivateRoute";
import AboutUs from "../pages/AboutUs/AboutUs";
import AddProduct from "../pages/AddProduct/AddProduct";
import BrandPage from "../pages/BrandPage/BrandPage";
import Update from "../pages/Update.jsx/Update";




const router =createBrowserRouter([
    {
        path: '/',
        element:<Root></Root>,
      
        children:
        [
           {
            path:'/',
            element:<Home></Home>,
            loader: () => fetch('/brands.json'),
           },
           {
            path:'/login',
            element:<Login></Login>
           },
           {
            path:'/register',
            element:<Register></Register>
           },
           {
            path:'/about',
            element:<PrivateRoute><AboutUs></AboutUs></PrivateRoute>
           },
           {
            path:'/add',
            element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute>
           },
           {
            path:'/brands/:brand',
            element:<PrivateRoute><BrandPage></BrandPage></PrivateRoute>,
            loader: () => fetch('http://localhost:5000/products')
           
           },
           {
            path:'/update/:id',
            element:<PrivateRoute><Update></Update></PrivateRoute>,
            loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`)
        
           
           },

        ]
    }
   
])

export default router;