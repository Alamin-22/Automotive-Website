import { useLoaderData } from "react-router-dom";
import Toyota_Card from "../Components/ToyotaCard/Toyota_Card";
import Toyota_Slider from "../Components/CardSlider/Toyota_Slider";

const Toyota_cars = () => {
    const Cars = useLoaderData();
    const brand = 'Toyota';
    const Toyota_Cars = Cars.filter(obj => obj.brand.trim().toUpperCase() === brand.trim().toUpperCase())
    // console.log(Toyota_Cars);
    return (
        <div>
            <div className="max-w-md md:max-w-7xl  mx-auto">
                {
                    Toyota_Cars.length > 0 ?
                        <>
                            <Toyota_Slider></Toyota_Slider>
                            <h1 className="text-3xl text-center font-semibold text-[#7a6a6a] my-8">Our latest Collection</h1>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
                                {
                                    Toyota_Cars.map((Single_toyota, ixd) => <Toyota_Card key={ixd} Single_toyota={Single_toyota}></Toyota_Card>)
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

export default Toyota_cars;