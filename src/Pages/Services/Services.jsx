import { FaOilCan } from 'react-icons/fa';
import { GiAutoRepair } from 'react-icons/gi';
import { AiFillCar } from 'react-icons/ai';
import { MdCarRepair } from 'react-icons/md';
import { BiSolidCarWash } from 'react-icons/bi';
const Services = () => {
    return (
        <div>
            <section className="bg-gray-900 text-white ">
                <div className="max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
                    <div className="max-w-xl mx-auto text-center">
                        <h2 className="text-3xl  font-bold sm:text-4xl">What makes us special</h2>
                    </div>

                    <div
                        className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3"
                    >
                        <div className="flex items-start gap-4">
                            <span className="shrink-0 rounded-lg bg-gray-800 p-4">
                                <FaOilCan></FaOilCan>
                            </span>

                            <div>
                                <h2 className="text-lg font-bold">Oil Change Service</h2>

                                <p className="mt-1 text-sm text-gray-300">
                                    Keep your engine running smoothly with our professional oil change service. We offer a variety of high-quality oils to suit your vehicle's needs. Our expert technicians will also replace the oil filter and conduct a multi-point inspection for added peace of mind.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <span className="shrink-0 rounded-lg bg-gray-800 p-4">
                                <GiAutoRepair></GiAutoRepair>
                            </span>

                            <div>
                                <h2 className="text-lg font-bold">Brake Inspection and Repair</h2>

                                <p className="mt-1 text-sm text-gray-300">
                                    Your safety is our priority. Let our experts inspect and repair your brakes, ensuring your vehicle stops reliably when you need it. We'll assess the condition of your brake pads, rotors, and brake fluid to ensure optimal performance and safety.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <span className="shrink-0 rounded-lg bg-gray-800 p-4">
                                <AiFillCar></AiFillCar>
                            </span>

                            <div>
                                <h2 className="text-lg font-bold">Tire Rotation and Balancing</h2>

                                <p className="mt-1 text-sm text-gray-300">
                                    Extend the life of your tires and improve handling by getting them rotated and balanced at our facility. Our service includes a comprehensive tire inspection to identify and address any potential issues
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <span className="shrink-0 rounded-lg bg-gray-800 p-4">
                                <MdCarRepair />
                            </span>

                            <div>
                                <h2 className="text-lg font-bold">Engine Diagnostics</h2>

                                <p className="mt-1 text-sm text-gray-300">
                                    Is your check engine light on? Our advanced diagnostic tools can identify and solve engine issues to keep your vehicle in top condition. We'll provide you with a detailed report on the health of your engine and recommend necessary repairs.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <span className="shrink-0 rounded-lg bg-gray-800 p-4">
                                <GiAutoRepair></GiAutoRepair>
                            </span>

                            <div>
                                <h2 className="text-lg font-bold">Air Conditioning Service</h2>

                                <p className="mt-1 text-sm text-gray-300">
                                    Stay cool during hot summer days with our air conditioning service. We'll ensure your A/C system is running efficiently by checking refrigerant levels, cleaning filters, and addressing any cooling system problems.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <span className="shrink-0 rounded-lg bg-gray-800 p-4">
                                <BiSolidCarWash></BiSolidCarWash>
                            </span>

                            <div>
                                <h2 className="text-lg font-bold">Detailing and Car Wash</h2>

                                <p className="mt-1 text-sm text-gray-300">
                                    Treat your vehicle to a spa day with our professional detailing and car wash service. We'll make your car look and feel like new, with services including interior and exterior cleaning, waxing, and leather treatment.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;