
const Future_Banner = () => {
    return (
        <div>
            <div className="hero  bg-base-200" style={{ backgroundImage: 'url(https://i.ibb.co/3d8pNyC/bg-road.jpg)' }}>
                <div className="hero-content flex-col-reverse lg:flex-row-reverse">
                    <img src="https://i.ibb.co/hc3g78G/card-prev-ui.png" className="max-w-sm   md:max-w-2xl rounded-lg " />
                    <div >
                        <h1 className="text-5xl text-white font-bold">The future is Electric</h1>
                        <p className="py-6 text-[#bebaba]">The BMW i8 is an icon of progress, marking an extraordinary evolution of The Ultimate Driving Machine.® As an innovative plug-in hybrid, it uses eDrive technology to combine the efficiency of an all-electric motor and the power of a TwinPower Turbo engine for an exhilarating driving experience that is every bit BMW.</p>
                        <div className="flex ">
                            <div className="flex items-center mr-14">
                                <img className="w-16" src="https://i.ibb.co/XJQSytB/charge.png" alt="charge" />
                                <div >
                                    <h2 className="text-xl text-white">30 min Charge</h2>
                                    <p className="text-[#bebaba]">400 km</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <img className="w-20" src="https://i.ibb.co/92ZDm3p/horsepower.png" alt="Power" />
                                <div>
                                    <h2 className="text-xl text-white">398hp</h2>
                                    <p className="text-[#bebaba]">0-100 in 3.2s</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Future_Banner;