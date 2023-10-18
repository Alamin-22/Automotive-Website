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
            }
            
        ]
    },
]);

export default router;
