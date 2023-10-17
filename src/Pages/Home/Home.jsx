import Banner from "../../Components/Banner/Banner";
import Brands_Card from "../../Components/Brands_Card/Brands_Card";
import Future_Banner from "../../Components/Futurebanner/Future_Banner";
import News from "../../Components/News/News";

const Home = () => {
    return (
        <>
            <div className="max-w-6xl mx-auto px-4">
                <div className="my-5"><Banner></Banner></div>
                <h1 className="text-5xl text-center my-10 text-red-700 font-medium">Popular brands</h1>
                <Brands_Card></Brands_Card>
            </div>
            {/* Banner end*/}
            <div className="my-16">
                <Future_Banner></Future_Banner>
            </div>
            <div className="max-w-6xl mx-auto px-4">
                <h1 className="text-5xl text-center font-serif font-semibold my-11">News of Automobile industry</h1>
                <News></News>
            </div>
        </>

    );
};

export default Home;