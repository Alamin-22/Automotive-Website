
const About_Faq = () => {
    return (
        <div >

            {/* Container */}
            <div className="mx-auto  w-full max-w-5xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
                {/* Heading Div */}
                <div className="mb-8 text-center md:mb-12 lg:mb-16">
                    <h2 className="text-3xl font-semibold md:text-5xl">Frequently Asked <span className="bg-cover bg-center bg-no-repeat px-4 text-white" style={{ backgroundImage: "url('https://assets.website-files.com/63904f663019b0d8edf8d57c/639156ce1c70c97aeb755c8a_Rectangle%2010%20(1).svg')" }}>Questions</span>
                    </h2>
                </div>
                {/* FAQ Div */}
                <div className="mb-8 md:mb-12 lg:mb-16 ">
                    <details>
                        <summary className="py-2 font-semibold text-xl outline-none cursor-pointer focus:underline">How do I list my car for sale on your platform?</summary>
                        <div className="px-4 pb-4">
                            <p>To list your car for sale on our platform, start by creating an account or logging in if you already have one. Once you're logged in, navigate to the 'List Your Car' section. Fill in the required information, including the make and model of your car, year, condition, mileage, price, and add high-quality photos. Review your listing, and when you're ready, click 'List Car.' Your car will then be visible to potential buyers on our platform.</p>
                        </div>
                    </details>

                    <details>
                        <summary className="py-2 font-semibold text-xl outline-none cursor-pointer focus:underline">Can I search for specific car models on your website?</summary>
                        <div className="px-4 pb-4">
                            <p>Yes, you can easily search for specific car models on our website. Use the search bar at the top of the page to enter the make and model you're looking for. You can also filter your search by year, price range, and other criteria to narrow down the results. Our user-friendly search feature makes it convenient to find the exact car you want.</p>
                        </div>
                    </details>

                    <details>
                        <summary className="py-2 font-semibold text-xl outline-none cursor-pointer focus:underline">What payment methods are supported for purchasing cars?</summary>
                        <div className="px-4 pb-4 space-y-2">
                            <p>We support a variety of secure payment methods for purchasing cars on our platform. You can pay for your new vehicle using major credit cards, debit cards, bank transfers, and even financing options. Our goal is to provide a seamless and secure payment experience for both buyers and sellers.</p>
                        </div>
                    </details>

                    <details>
                        <summary className="py-2 font-semibold text-xl outline-none cursor-pointer focus:underline">How can I get assistance with car financing or insurance?</summary>
                        <div className="px-4 pb-4 space-y-2">
                            <p>Whether you need assistance with car financing or insurance, we're here to help. Our platform offers resources to connect you with reputable lenders for financing options. Additionally, we provide information and resources to help you find the right insurance providers for your automotive needs. Feel free to reach out to our support team for guidance and recommendations.</p>
                        </div>
                    </details>

                </div>
                <p className="text-center">Can’t find the answer you’re looking for? Reach out to our <a href="#" className="font-bold text-[#1353fe]">customer support team</a>.</p>
            </div>

        </div>
    );
};

export default About_Faq;