import { useLoaderData } from "react-router-dom";
import Tesla_Card from "../Components/TeslaCard/Tesla_Card";
import Tesla_Slider from "../Components/CardSlider/Tesla_Slider";

const Tesla_cars = () => {
    const Cars = useLoaderData();
    const brand = 'Tesla';
    const Tesla_Cars = Cars.filter(obj => obj.brand.trim().toUpperCase() === brand.trim().toUpperCase())
    // console.log(Tesla_Cars);
    return (
        <div>
            <div className="max-w-md md:max-w-7xl  mx-auto">
                {
                    Tesla_Cars.length > 0 ?
                        <>
                            <Tesla_Slider></Tesla_Slider>
                            <h1 className="text-3xl text-center font-semibold text-[#7a6a6a] my-8">Our latest Collection</h1>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
                                {
                                    Tesla_Cars.map((Single_Tesla, ixd) => <Tesla_Card key={ixd} Single_Tesla={Single_Tesla}></Tesla_Card>)
                                }
                            </div>
                        </>
                        :
                        <><h1 className="h-[80vh]  text-7xl flex justify-center items-center font-semibold"> Coming Soon...</h1> </>

                }
            </div>
        </div>
    );
};

export default Tesla_cars;