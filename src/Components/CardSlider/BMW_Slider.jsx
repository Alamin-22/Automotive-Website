
const BMW_Slider = () => {
  return (
    <div>
      <div>
        <div className="carousel w-full">
          <div id="item1" className="carousel-item w-full">
            <img src="https://i.ibb.co/t2101Hm/bmw-x7.jpg" className="w-full h-96" />
          </div>
          <div id="item2" className="carousel-item w-full">
            <img src="https://i.ibb.co/P9DTxTs/BMW-3se.jpg" className="w-full h-96" />
          </div>
          <div id="item3" className="carousel-item w-full">
            <img src="https://i.ibb.co/31nstkJ/bmw-x1-offers.png" className="w-full h-96" />
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

export default BMW_Slider;