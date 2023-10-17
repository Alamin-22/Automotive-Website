import { Link } from "react-router-dom";

function CarCard() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* 1 */}
            <div className="card  bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src="https://i.ibb.co/09rhthT/bmw-logo-PNG19707.png" alt="BMW" className="rounded-full h-44" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">BMW</h2>
                    <p>Click Show Cars button to see Our BMW latest collections</p>
                    <div className="card-actions">
                    <Link to={"/bmw_cars"}  className="btn  btn-outline">Show Cars</Link>
                    </div>
                </div>
            </div>
            {/* 2 */}
            <div className="card  bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src="https://i.ibb.co/C9D4s1J/mazada.jpg" alt="mazada" className="rounded-full h-44" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Mazada</h2>
                    <p>Click Show Cars button to see Our  latest collections</p>
                    <div className="card-actions">
                    <Link to={"/mazada_cars"}  className="btn  btn-outline">Show Cars</Link>
                    </div>
                </div>
            </div>
            {/* 3 */}
            <div className="card  bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src="https://i.ibb.co/Kqrs0Hj/marcedes.png" alt="Marcedes" className="rounded-full h-44" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Marcedes Benz</h2>
                    <p>Click Show Cars button to see Our latest collections</p>
                    <div className="card-actions">
                    <Link to={"/marcedes_cars"}  className="btn  btn-outline">Show Cars</Link>
                    </div>
                </div>
            </div>
            {/* 4 */}
            <div className="card  bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src="https://i.ibb.co/rx62cWd/Toyota.png" alt="Toyota" className="rounded-full h-44" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Toyota</h2>
                    <p>Click Show Cars button to see Our latest collections</p>
                    <div className="card-actions">
                    <Link to={"/toyota_cars"}  className="btn  btn-outline">Show Cars</Link>
                    </div>
                </div>
            </div>
            {/* 5 */}
            <div className="card  bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src="https://i.ibb.co/sQtfZx7/tesla.jpg" alt="Tesla" className="rounded-full h-44" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Tesla</h2>
                    <p>Click Show Cars button to see Our Tesla latest collections</p>
                    <div className="card-actions">
                    <Link to={"/tesla_cars"}  className="btn  btn-outline">Show Cars</Link>
                    </div>
                </div>
            </div>
            {/* 6 */}
            <div className="card  bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src="https://i.ibb.co/RhKrWSj/audi.png" alt="Audi" className="rounded-full h-44" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Audi</h2>
                    <p>Click Show Cars button to see Our Audi latest collections</p>
                    <div className="card-actions">
                        <Link to={"/audi_cars"}  className="btn  btn-outline">Show Cars</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CarCard;
