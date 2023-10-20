import { useLoaderData } from "react-router-dom";
import Marcedes_Card from "../Components/MarcedesCard/Marcedes_Card";
import Marcedes_slider from "../Components/CardSlider/Marcedes_slider";

const Marcedes_cars = () => {
    const Cars = useLoaderData();
    const brand = 'Mercedes';
    const Marcedes_Cars = Cars.filter(obj => obj.brand.trim().toUpperCase() === brand.trim().toUpperCase())
    // console.log(Marcedes_Cars);
    return (
        <div>
            <div className="max-w-md md:max-w-7xl  mx-auto">
                <Marcedes_slider></Marcedes_slider>
                <h1 className="text-3xl text-center font-semibold text-[#7a6a6a] my-8">Our latest Collection</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
                    {
                        Marcedes_Cars.map((Single_marcedes, ixd) => <Marcedes_Card key={ixd} Single_marcedes={Single_marcedes}></Marcedes_Card>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Marcedes_cars;