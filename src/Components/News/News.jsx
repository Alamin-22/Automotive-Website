
const News = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* 1 */}
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img src="https://i.ibb.co/R298wZ8/chose.jpg" alt="Chose" /></figure>
                <div className="card-body">
                    <p>JANUARY 11, 2023</p>
                    <h2 className="card-title">How to Choose the Right Car for You</h2>
                    <p>Choosing the right car for you is a significant decision, and it involves several key factors. Your ideal car should align with your lifestyle, budget, and specific needs. Consider your daily commute, family size, and any personal preferences. Whether it is a compact, fuel-efficient car for city driving or a spacious SUV for family adventures, the perfect car should be a seamless fit for your life. We are here to help you navigate this journey, providing guidance and insights to ensure that you make a choice that suits you best.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Details</button>
                    </div>
                </div>
            </div>
            {/* 2 */}
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img src="https://i.ibb.co/zbxVDyj/tire-in-winter.jpg" alt="Chose" /></figure>
                <div className="card-body">
                    <p>March 28, 2023</p>
                    <h2 className="card-title">Use This Decision to Get Your Tires Right This Winter</h2>
                    <p>Choosing the right car for you is a significant decision, and it involves several key factors. Your ideal car should align with your lifestyle, budget, and specific needs. Consider your daily commute, family size, and any personal preferences. Whether it is a compact, fuel-efficient car for city driving or a spacious SUV for family adventures, the perfect car should be a seamless fit for your life. We are here to help you navigate this journey, providing guidance and insights to ensure that you make a choice that suits you best.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Details</button>
                    </div>
                </div>
            </div>
            {/* 3 */}
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img className="h-[243px]" src="https://i.ibb.co/fF0vtc9/charge-car.jpg" alt="Car CHarging" /></figure>
                <div className="card-body">
                    <p>JANUARY 11, 2023</p>
                    <h2 className="card-title">Revolutionary Electric Vehicle Breaks Barriers in Sustainability</h2>
                    <p>In an exciting leap forward for the automotive industry, a groundbreaking electric vehicle (EV) is turning heads and making headlines. This cutting-edge EV is redefining the future of sustainable transportation, offering impressive range, innovative technology, and a commitment to reducing environmental impact. Join us as we explore how this remarkable vehicle is pushing the boundaries of green mobility, changing the game for eco-conscious drivers everywhere. Stay tuned for all the details on this electrifying development and its impact on the world of automotive innovation.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;