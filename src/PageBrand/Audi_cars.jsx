import { useLoaderData } from "react-router-dom";
import Audi_Card from "../Components/AudiCard/Audi_Card";

const Audi_cars = () => {
    const Cars = useLoaderData();
    const brand = 'Audi';
    const Audi_Cars = Cars.filter(obj => obj.brand.trim().toUpperCase() === brand.trim().toUpperCase())
    // console.log(Audi_Cars);
    return (
        <div>
            <div className="max-w-md md:max-w-7xl  mx-auto">
                <h1 className="text-3xl text-center font-semibold text-[#7a6a6a] my-8">Our latest Collection</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
                    {
                        Audi_Cars.map((Single_Audi, ixd) => <Audi_Card key={ixd} Single_Audi={Single_Audi}></Audi_Card>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Audi_cars;