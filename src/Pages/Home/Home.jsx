import Banner from "../../Components/Banner/Banner";
import Brands_Card from "../../Components/Brands_Card/Brands_Card";

const Home = () => {
    return (
        <>
            <div className="max-w-6xl mx-auto px-4">
                <div className="my-5"><Banner></Banner></div>
                <h1 className="text-5xl text-center my-10 text-red-700 font-medium">Popular brands</h1>
                <div >
                    <Brands_Card></Brands_Card>
                </div>
            </div>
        </>

    );
};

export default Home;