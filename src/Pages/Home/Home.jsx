import Banner from "../../Components/Banner/Banner";
import Brands_Card from "../../Components/Brands_Card/Brands_Card";
import Future_Banner from "../../Components/Futurebanner/Future_Banner";

const Home = () => {
    return (
        <>
            <div className="max-w-6xl mx-auto px-4">
                <div className="my-5"><Banner></Banner></div>
                <h1 className="text-5xl text-center my-10 text-red-700 font-medium">Popular brands</h1>
                <Brands_Card></Brands_Card>
                {/* best cars Deals */}
                {/* Banner end*/}
            </div>
            <div className="my-16">
                <Future_Banner></Future_Banner>
            </div>
        </>

    );
};

export default Home;