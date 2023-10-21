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
import UpdateProduct from "../Pages/UpdateProduct/UpdateProduct";
import Private from "../PrivateRout/Private";
import Services from "../Pages/Services/Services";
import AboutUs from "../Pages/AboutUs/AboutUs";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: () => fetch("/news_.json")
            },
            {
                path: "/add_product",
                element: <Private><Add_product /></Private>,
            },
            {
                path: "/my_cart",
                element: <Private><My_Cart /></Private>,
                loader: () => fetch("https://b8a10-brandshop-server-side-alamin-22-pfc4bakvf.vercel.app/added_cart")
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
                path: "/about_us",
                element: <AboutUs />,
            }
            ,
            {
                path: "/contact_us",
                element: <Contact_us />
            },
            {
                path: "/services",
                element: <Services />,
            },
            {
                path: `/news/:id`,
                element: <NewsDetails />,
                loader: () => fetch("/news_.json")
            },
            {
                path: "/bmw_cars",
                element: <BMW_cars />,
                loader: () => fetch("https://b8a10-brandshop-server-side-alamin-22-pfc4bakvf.vercel.app/car")
            },
            {
                path: `/details/:id`,
                element: <Private><BMW_Details /></Private>,
                loader: () => fetch("https://b8a10-brandshop-server-side-alamin-22-pfc4bakvf.vercel.app/car")
            },
            {
                path: "/mazada_cars",
                element: <Mazada_cars />,
                loader: () => fetch("https://b8a10-brandshop-server-side-alamin-22-pfc4bakvf.vercel.app/car")
            },
            {
                path: "/marcedes_cars",
                element: <Marcedes_cars />,
                loader: () => fetch("https://b8a10-brandshop-server-side-alamin-22-pfc4bakvf.vercel.app/car")
            },
            {
                path: "/toyota_cars",
                element: <Toyota_cars />,
                loader: () => fetch("https://b8a10-brandshop-server-side-alamin-22-pfc4bakvf.vercel.app/car"),
            },
            {
                path: "/tesla_cars",
                element: <Tesla_cars />,
                loader: () => fetch("https://b8a10-brandshop-server-side-alamin-22-pfc4bakvf.vercel.app/car")
            },
            {
                path: "/audi_cars",
                element: <Audi_cars />,
                loader: () => fetch("https://b8a10-brandshop-server-side-alamin-22-pfc4bakvf.vercel.app/car"),
            },
            {
                path: `/update_car/:id`,
                element: <Private><UpdateProduct /></Private>,
                loader: ({ params }) => fetch(`https://b8a10-brandshop-server-side-alamin-22-pfc4bakvf.vercel.app/car/${params.id}`)
            }

        ]
    },
]);

export default router;
