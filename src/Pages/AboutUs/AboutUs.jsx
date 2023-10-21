import { Link } from "react-router-dom";
import About_Faq from "../../Components/About_UsFAQ/About_Faq";


const AboutUs = () => {
    return (
        <>
            <section>
                <div className="py-12 md:py-16 lg:py-20 mx-auto w-full max-w-7xl px-5 md:px-10">
                    <div className="flex items-stretch max-[991px]:min-h-[auto] max-[991px]:w-full max-[991px]:flex-col grid-cols-1 lg:grid-cols-[65%_30%] gap-8 lg:gap-20">
                        <div className="flex-col flex-1 flex justify-center gap-8">
                            <div className="flex-col flex gap-8">
                                <h2 className="font-bold text-3xl text-red-800 md:text-5xl">About us</h2>
                                <p className="max-[479px]:text-sm">
                                    Welcome to AutoMotive, your trusted source for all things automotive. We're more than just a company; we're a community of car enthusiasts, dedicated to providing you with top-notch services and a wealth of knowledge in the world of automobiles.

                                    At AutoMotive, our passion for cars drives us every day. Whether you're a car owner, a car enthusiast, or simply looking for the best automotive solutions, we've got you covered. Our journey in the automotive industry has been a long and exciting one, and it's a pleasure to share our expertise with you.
                                </p>
                            </div>
                            <div className="flex items-center justify-start gap-4 flex-wrap">
                                <Link to={"/"} className="inline-block items-center bg-black px-6 py-3 text-center font-semibold text-white">
                                    Explore
                                </Link>
                            </div>
                            <div className="mb-8 mt-8 h-px w-full bg-black"></div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4">
                                <div className="flex-col flex w-full items-start justify-between gap-4 border border-solid bg-stone-200 text-gray-700 rounded-md p-6 md:p-4">
                                    <p className="text-sm sm:text-sm">
                                        I can't say enough good things about AutoMotive. Their expertise and dedication to their customers are truly remarkable. I brought my car in for a repair, and they went above and beyond to ensure it was in top-notch condition. The team's attention to detail, professionalism, and commitment to customer satisfaction are unmatched. I highly recommend AutoMotive to all car owners and enthusiasts.


                                    </p>
                                    <div className="flex items-center gap-x-4 text-left max-[767px]:w-full max-[479px]:gap-2">
                                        <div className="flex items-center gap-x-2">
                                            <img src="https://i.ibb.co/hs8H46v/smith.jpg" alt=""
                                                className="flex h-12 min-h-[48px] w-12 min-w-[48px] items-center rounded-[100%] object-cover"
                                            />
                                            <p className="font-semibold max-[479px]:text-sm">Al Amin Mollik </p>
                                        </div>
                                        <div className="w-px bg-[#636262] h-5"></div>
                                        <div className="flex items-center gap-x-2">
                                            <p className="font-semibold max-[479px]:text-sm">5.0</p>
                                            <div className="flex text-[#f6ad1b]">
                                                <div className="flex-col flex h-4 w-4 items-center justify-center">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                                        width="100%"
                                                        height="100%"
                                                        preserveAspectRatio="xMidYMid meet"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path fill="currentColor" d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"></path>
                                                    </svg>
                                                </div>
                                                <div className="flex-col flex h-4 w-4 items-center justify-center">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                                        width="100%"
                                                        height="100%"
                                                        preserveAspectRatio="xMidYMid meet"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path fill="currentColor" d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"></path>
                                                    </svg>
                                                </div>
                                                <div className="flex-col flex h-4 w-4 items-center justify-center">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                                        width="100%"
                                                        height="100%"
                                                        preserveAspectRatio="xMidYMid meet"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path fill="currentColor" d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83-.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"></path>
                                                    </svg>
                                                </div>
                                                <div className="flex-col flex h-4 w-4 items-center justify-center">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                                        width="100%"
                                                        height="100%"
                                                        preserveAspectRatio="xMidYMid meet"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path fill="currentColor" d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83-.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-col flex w-full items-start justify-between gap-4 border border-solid bg-stone-200 text-gray-700 rounded-md p-6 md:p-4">
                                    <p className="text-sm sm:text-sm">
                                        As a car enthusiast, I'm always on the lookout for reliable sources of information and services for my vehicles. I stumbled upon [Your Company Name] while searching for automotive resources and couldn't be happier. Their website is a treasure trove of valuable content, from maintenance tips to the latest industry trends. I appreciate their commitment to keeping the automotive community informed and engaged.
                                    </p>
                                    <div className="flex items-center gap-x-4 text-left max-[767px]:w-full max-[479px]:gap-2">
                                        <div className="flex items-center gap-x-2">
                                            <img
                                                src="https://i.ibb.co/hmkn9P6/michel.jpg"
                                                alt=""
                                                className="flex h-12 min-h-[48px] w-12 min-w-[48px] items-center rounded-[100%] object-cover"
                                            />
                                            <p className="font-semibold max-[479px]:text-sm">Alleyah</p>
                                        </div>
                                        <div className="w-px bg-[#636262] h-5"></div>
                                        <div className="flex items-center gap-x-2">
                                            <p className="font-semibold max-[479px]:text-sm">5.0</p>
                                            <div className="flex text-[#f6ad1b]">
                                                <div className="flex-col flex h-4 w-4 items-center justify-center">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                                        width="100%"
                                                        height="100%"
                                                        preserveAspectRatio="xMidYMid meet"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path fill="currentColor" d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"></path>
                                                    </svg>
                                                </div>
                                                <div className="flex-col flex h-4 w-4 items-center justify-center">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                                        width="100%"
                                                        height="100%"
                                                        preserveAspectRatio="xMidYMid meet"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path fill="currentColor" d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"></path>
                                                    </svg>
                                                </div>
                                                <div className="flex-col flex h-4 w-4 items-center justify-center">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                                        width="100%"
                                                        height="100%"
                                                        preserveAspectRatio="xMidYMid meet"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path fill="currentColor" d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"></path>
                                                    </svg>
                                                </div>
                                                <div className="flex-col flex h-4 w-4 items-center justify-center">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                                        width="100%"
                                                        height="100%"
                                                        preserveAspectRatio="xMidYMid meet"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path fill="currentColor" d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="block overflow-hidden bg-[#f2f2f7] max-[991px]:h-[475px] rounded-md w-full lg:w-[30%]">
                            <img src="https://i.ibb.co/WKLJWKH/sidebanner.jpg" className="h-full w-full" alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <div>
                <About_Faq></About_Faq>
            </div>
            
        </>
    );
};

export default AboutUs;