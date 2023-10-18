import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Add_product from "../Pages/AddProducts/Add_product";
import My_Cart from "../Pages/My_Cart/My_Cart";
import Login from "../Pages/HandleLogin/Login/Login";
import Register from "../Pages/HandleLogin/Register/Register";
import Contact_us from "../Components/Contact_Us/Contact_Us";
import NewsDetails from "../Components/News/NewsDetails";
import BMW_cars from "../PageBrand/BMW_cars";
import Mazada_cars from "../PageBrand/Mazada_cars";
import Marcedes_cars from "../PageBrand/Marcedes_cars";
import Toyota_cars from "../PageBrand/Toyota_cars";
import Tesla_cars from "../PageBrand/Tesla_cars";
import Audi_cars from "../PageBrand/Audi_cars";
import BMW_Details from "../Components/BMW_Card/BMW_Details";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader:()=>fetch("/news_.json")
            },
            {
                path: "/add_product",
                element: <Add_product />,
            },
            {
                path: "/my_cart",
                element: <My_Cart />
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path:"/contact_us",
                element:<Contact_us/>
            },
            {
                path:`/news/:id`,
                element:<NewsDetails/>,
                loader:()=>fetch("/news_.json")
            },
            {
                path:"/bmw_cars",
                element:<BMW_cars/>,
                loader: ()=> fetch("http://localhost:5000/car")
            },
            {
                path:`/bmw_details/:id`,
                element:<BMW_Details/>,
                loader: ()=> fetch("http://localhost:5000/car")
            },
            {
                path:"/mazada_cars",
                element:<Mazada_cars/>
            },
            {
                path:"/marcedes_cars",
                element:<Marcedes_cars/>
            },
            {
                path:"/toyota_cars",
                element:<Toyota_cars/>
            },
            {
                path:"/tesla_cars",
                element:<Tesla_cars/>
            },
            {
                path:"/audi_cars",
                element:<Audi_cars/>
            }
            
        ]
    },
]);

export default router;
