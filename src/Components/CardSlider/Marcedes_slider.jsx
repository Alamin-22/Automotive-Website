
const Marcedes_slider = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                    <img src="https://i.ibb.co/dPSqrp2/GLe-marcedes.png" className="w-full h-96" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src="https://i.ibb.co/DbTsk2D/Mercedes-AMG-GT.jpg" className="w-full h-96" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src="https://i.ibb.co/68jk3sK/2017-mercedes-benz-canada-e-class-sedan.jpg" className="w-full h-96"  />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
            </div>
        </div>
    );
};

export default Marcedes_slider;