import { useLoaderData } from "react-router-dom";
import Bmw_card from "../Components/BMW_Card/Bmw_card";

const BMW_cars = () => {
    const Cars = useLoaderData();
    const brand = 'BMW';
    const BMW_Cars = Cars.filter(obj => obj.brand.trim().toUpperCase() === brand.trim().toUpperCase())
    // console.log(BMW_Cars)
    return (
        <div className="max-w-md md:max-w-7xl  mx-auto border-red-300 border">
            <h1 className="text-3xl text-center">Our latest Collection</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
                {
                    BMW_Cars.map((Single_bmw, ixd) => <Bmw_card key={ixd} Single_bmw={Single_bmw}></Bmw_card>)
                }
            </div>
        </div>
    );
};

export default BMW_cars;