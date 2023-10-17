
const Banner = () => {
    return (
        <div>
            <div className="hero h-[60vh] rounded-lg" style={{ backgroundImage: 'url(https://i.ibb.co/3kbvwHv/3.jpg)' }}>
                <div className="hero-overlay rounded-lg bg-opacity-65"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-5 text-5xl font-bold text-white">Ignite Your Love for Cars</h1>
                        <p  className="mb-5 max-w-4xl text-[#fff5f0]">Welcome to AutoMobile, where the road meets innovation, and your automotive dreams come to life. Explore a world of cutting-edge vehicles, expert insights, and a passion for everything automotive. Whether you are a gear head, a car enthusiast, or simply looking for the perfect ride, our platform is your gateway to automotive excellence. Start your journey today and drive into a world of possibilities</p>
                        <button className="btn btn-primary">explore</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;