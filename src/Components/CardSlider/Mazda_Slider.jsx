
const Mazda_Slider = () => {
    return (
        <div>
            <div>
                <div className="carousel w-full">
                    <div id="item1" className="carousel-item w-full">
                        <img src="https://i.ibb.co/hLK2xj4/Mazada-cx30.jpg" className="w-full h-96" />
                    </div>
                    <div id="item2" className="carousel-item w-full">
                        <img src="https://i.ibb.co/0fHj0H5/Mazda-6.jpg" className="w-full h-96" />
                    </div>
                    <div id="item3" className="carousel-item w-full">
                        <img src="https://i.ibb.co/SJxXDwd/mazda-mx-5.jpg" className="w-full h-96" />
                    </div>
                </div>
                <div className="flex justify-center w-full py-2 gap-2">
                    <a href="#item1" className="btn btn-xs">1</a>
                    <a href="#item2" className="btn btn-xs">2</a>
                    <a href="#item3" className="btn btn-xs">3</a>
                </div>
            </div>
        </div>
    );
};

export default Mazda_Slider;