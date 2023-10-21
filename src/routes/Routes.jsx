import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

import PrivateRoute from "./PrivateRoute";

import AddProduct from "../pages/AddProduct/AddProduct";
import BrandPage from "../pages/BrandPage/BrandPage";
import Update from "../pages/Update.jsx/Update";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import MyCart from "../pages/MyCart/MyCart";




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
            path:'/add',
            element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute>
           },
           {
            path:'/brands/:brand',
            element:<PrivateRoute><BrandPage></BrandPage></PrivateRoute>,
            loader: () => fetch('https://best-buddy-server.vercel.app/products')
           
           },
           {
            path:'/update/:id',
            element:<PrivateRoute><Update></Update></PrivateRoute>,
            loader: ({params}) => fetch(`https://best-buddy-server.vercel.app/products/${params.id}`)
        
           
           },
           {
            path:'/product/:id',
            element:<PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
            loader: ({params}) => fetch(`https://best-buddy-server.vercel.app/products/${params.id}`)
        
           
           },
           {
            path:'/mycart',
            element:<PrivateRoute><MyCart></MyCart></PrivateRoute>,
            loader: () => fetch('https://best-buddy-server.vercel.app/client')
        
           
           },

        ]
    }
   
])

export default router;