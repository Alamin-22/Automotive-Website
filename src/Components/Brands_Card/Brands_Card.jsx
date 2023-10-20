import { Link } from "react-router-dom";

function CarCard() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* 1 */}
            <Link to={"/bmw_cars"} className="card  bg-stone-200 dark:bg-gray-800 shadow-xl">
                <figure className="pt-10">
                    <img src="https://i.ibb.co/09rhthT/bmw-logo-PNG19707.png" alt="BMW" className="rounded-full h-44" />
                </figure>
                <div className="card-body items-center text-center text-gray-700 ">
                    <h2 className="card-title">BMW</h2>
                </div>
            </Link>
            {/* 2 */}
            <Link to={"/mazada_cars"} className="card  bg-stone-200 shadow-xl">
                <figure className=" pt-10">
                    <img src="https://i.ibb.co/jTzYjpK/Mazda-Logo.png" alt="mazada" className="rounded-full h-44" />
                </figure>
                <div className="card-body items-center text-gray-700 text-center">
                    <h2 className="card-title">Mazada</h2>
                </div>
            </Link>
            {/* 3 */}
            <Link to={"/marcedes_cars"} className="card  bg-stone-200 shadow-xl">
                <figure className=" pt-10">
                    <img src="https://i.ibb.co/cTtfJxc/mercedes-logo.png" alt="Marcedes" className="rounded-full h-44" />
                </figure>
                <div className="card-body text-gray-700 items-center text-center">
                    <h2 className="card-title">Marcedes Benz</h2>
                </div>
            </Link>
            {/* 4 */}
            <Link to={"/toyota_cars"} className="card  bg-stone-200 shadow-xl">
                <figure className=" pt-10">
                    <img src="https://i.ibb.co/tc1HYm6/Toyota-removebg-preview.png" alt="Toyota" className="rounded-full h-44" />
                </figure>
                <div className="card-body text-gray-700 items-center text-center">
                    <h2 className="card-title">Toyota</h2>
                </div>
            </Link>
            {/* 5 */}
            <Link to={"/tesla_cars"} className="card  bg-stone-200 shadow-xl">
                <figure className=" pt-10">
                    <img src="https://i.ibb.co/x1Pm7LC/pngwing-com.png" alt="Tesla" className="rounded-full h-44" />
                </figure>
                <div className="card-body text-gray-700 items-center text-center">
                    <h2 className="card-title">Tesla</h2>
                </div>
            </Link>
            {/* 6 */}
            <Link to={"/audi_cars"} className="card  bg-stone-200 shadow-xl">
                <figure className=" pt-10">
                    <img src="https://i.ibb.co/RhKrWSj/audi.png" alt="Audi" className="rounded-full h-44" />
                </figure>
                <div className="card text-gray-700 items-center text-center">
                    <h2 className="card-title">Audi</h2>
                </div>
            </Link>
        </div>
    );
}

export default CarCard;
