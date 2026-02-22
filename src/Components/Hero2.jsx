import React from "react";
import Heroimg2 from "../assets/Hero-image2.jpg";
import icon1 from "../assets/data-driven-icon.png";
import icon2 from "../assets/automation-icon.png";
import icon3 from "../assets/stack-integration.png";

const Hero2 = () => {
    const Icons = [
        {
            icon: icon1,
            header: "Data-Driven Insights",
            para: "Empowering decisions with actionable data and performance metrics.",
        },
        {
            icon: icon2,
            header: "Real-time automation & intent",
            para: "Empowering decisions with actionable data and performance metrics.",
        },
        {
            icon: icon3,
            header: "Seamless stack integration",
            para: "Empowering decisions with actionable data and performance metrics.",
        },
    ];

    return (
        <section className="w-full">


            <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">


                <div>
                    <img
                        src={Heroimg2}
                        alt="Hero"
                        className="w-full h-auto rounded-xl shadow-lg"
                    />
                </div>


                <div className="flex gap-6">


                    <div className="hidden sm:block w-2 bg-[#207d7f]"></div>

                    <div>
                        <p className="text-sm md:text-base text-[#207d7f] font-semibold mb-2">
                            WHO WE ARE
                        </p>

                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                            We Don’t Follow AI Trends.
                        </h2>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                            We Set Them.
                        </h2>

                        <p className="mt-4 text-gray-600 text-sm sm:text-base">
                            The demand generation landscape is evolving. While many still rely
                            on legacy systems or human-heavy processes, Demand AI redefines the
                            approach.
                        </p>

                        <p className="mt-4 text-gray-600 text-sm sm:text-base">
                            We’re not here to enhance old models — we’re here to replace them.
                            From traditional tactics to autonomous systems, we help businesses
                            transition confidently into the Gen AI era.
                        </p>
                    </div>
                </div>
            </div>


            <div className="bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">

                        {Icons.map((item, index) => (
                            <div key={index} className="text-left">

                                <img
                                    src={item.icon}
                                    alt={item.header}
                                    className="w-14 h-14 mb-6"
                                />

                                <h3 className="font-bold text-lg mb-3">
                                    {item.header}
                                </h3>

                                <p className="text-gray-600 text-sm">
                                    {item.para}
                                </p>

                            </div>
                        ))}

                    </div>


                    <div className="flex justify-center mt-12">
                        <button className="bg-[#207d7f] px-8 py-3 text-white rounded-md text-sm md:text-base hover:bg-[#186566] transition-all duration-300">
                            LEARN MORE
                        </button>
                    </div>

                </div>
            </div>

        </section>
    );
};

export default Hero2;