import React from "react";
import Heroimg from "../assets/Hero-image.jpg";

const Hero = () => {
    return (
        <section className="relative w-full min-h-screen">


            <img
                src={Heroimg}
                alt="Hero"
                className="absolute inset-0 w-full h-full object-cover"
            />


            <div className="absolute inset-0 bg-black/60"></div>


            <div className="relative z-10 flex items-center min-h-screen">
                <div className="max-w-6xl mx-auto px-6 md:px-12 w-full">

                    <div className="max-w-3xl text-center md:text-left">

                        <h1 className="text-white text-3xl sm:text-3xl md:text-4xl lg:text-4xl font-bold leading-tight">
                            Unify Data. Ignite Demand. Deliver Outcomes.
                        </h1>

                        <p className="text-white/90 mt-6 text-sm sm:text-base md:text-lg lg:text-xl">
                            Demand AI brings together advanced AI and real-world lead gen
                            expertise to help businesses transform messy data into measurable
                            growth — all with zero disruption and full transparency.
                        </p>

                        <div className="mt-8">
                            <button className="bg-[#207d7f] hover:bg-[#186566] transition-all duration-300 px-6 md:px-8 py-3 md:py-4 text-white rounded-md text-sm md:text-base font-medium">
                                DISCOVER OUR SOLUTIONS →
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;