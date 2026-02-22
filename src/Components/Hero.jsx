import React from "react";
import Heroimg from "../assets/Hero-image.jpg";

const Hero = () => {
    return (
        <section className="relative w-full aspect-[2/3] md:aspect-auto md:h-screen overflow-hidden">

            {/* Background Image */}
            <img
                src={Heroimg}
                alt="Hero"
                className="
          absolute inset-0
          w-full h-full
          object-cover
          object-[75%_center]
          md:object-center
        "
            />

            {/* Dark Left Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/40 md:from-black/70 md:via-black/50 md:to-transparent"></div>

            {/* Content */}
            <div className="relative z-10 flex items-center h-full pt-16 md:pt-20">
                <div className="max-w-6xl px-5 sm:px-6 md:px-11 w-full">

                    <div className="max-w-xl sm:max-w-2xl md:max-w-3xl text-left">

                        <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-4xl font-bold leading-snug md:leading-tight text-white">
                            Unify Data. Ignite Demand. Deliver Outcomes.
                        </h1>

                        <p className="text-white/90 mt-4 sm:mt-6 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
                            Demand AI brings together advanced AI and real-world lead gen
                            expertise to help businesses transform messy data into measurable
                            growth — all with zero disruption and full transparency.
                        </p>

                        <div className="mt-6 sm:mt-8">
                            <button className="w-full sm:w-auto bg-[#207d7f] hover:bg-[#186566] transition-all duration-300 px-6 md:px-8 py-3 md:py-4 text-white rounded-md text-sm md:text-base font-medium shadow-lg">
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