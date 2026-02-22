import React from 'react'
import SecureImg from "../assets/secure.png"
import safeImg from "../assets/S-A-F-E-White.svg"

const Safe = () => {
    return (
        <section className="w-full bg-[#EBF3F3]">

            <div className="relative w-full min-h-[65vh]">


                <img
                    src={SecureImg}
                    alt="Secure Background"
                    className="absolute inset-0 w-full h-full object-cover"
                />


                <div className="absolute inset-0 bg-black/60"></div>


                <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 py-16 flex items-center min-h-[65vh]">

                    <div className="flex flex-col md:flex-row items-center md:items-start justify-between w-full gap-10 text-white">


                        <div className="md:w-2/3 text-center md:text-left">

                            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight">
                                Your Data, Smarter & Stronger.
                            </h2>

                            <p className="mt-6 text-sm sm:text-base md:text-lg text-white/90">
                                Incomplete, inconsistent, duplicate, or even fake profiles can
                                seriously impact decision-making and business growth. SAFE,
                                our AI-powered data management solution, ensures your customer
                                data is always accurate, complete, and ready for action.
                            </p>

                            <button className="mt-8 bg-[#207d7f] hover:bg-[#186566] transition-all duration-300 px-8 py-3 rounded-md text-sm md:text-base font-medium">
                                OPTIMIZE YOUR DATA NOW
                            </button>

                        </div>


                        <div className="md:w-1/3 flex justify-center md:justify-end">
                            <img
                                src={safeImg}
                                alt="SAFE Logo"
                                className="w-56 sm:w-72 md:w-80  object-contain"
                            />
                        </div>

                    </div>

                </div>

            </div>

        </section>
    )
}

export default Safe