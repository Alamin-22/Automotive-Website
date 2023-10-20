import { useLoaderData } from "react-router-dom";
import Mazada_Card from "../Components/Mazada_Card/Mazada_Card";
import Mazda_Slider from "../Components/CardSlider/Mazda_Slider";

const Mazada_cars = () => {
    const Cars = useLoaderData();
    const brand = 'Mazda';
    const Mazada_Cars = Cars.filter(obj => obj.brand.trim().toUpperCase() === brand.trim().toUpperCase())
    // console.log(Mazada_Cars);
    return (
        <div>
            <div className="max-w-md md:max-w-7xl  mx-auto">
                <Mazda_Slider></Mazda_Slider>

                {
                    Mazada_Cars.length > 0 ? <> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
                        {
                            Mazada_Cars.map((Single_mazada, ixd) => <Mazada_Card key={ixd} Single_mazada={Single_mazada}></Mazada_Card>)
                        }
                    </div></>
                        :
                        <><h1> Coming Soon</h1> </>
                }

            </div>
        </div>
    );
};

export default Mazada_cars;