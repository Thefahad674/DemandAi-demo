import React from 'react'
import GrowthImg from "../assets/growth.png"
import StrategyImg from "../assets/Strategic-2.png"
import RootedImg from "../assets/rooted-lead-gen.png"
import CommitImg from "../assets/commitment.png"

const Growth = () => {

    const content = [
        {
            title: "AI as Your Growth Engine",
            description:
                "Our proprietary technologies power end-to-end growth from real-time data cleansing to predictive intent scoring and outreach automation.",
            logo: StrategyImg,
        },
        {
            title: "Rooted in Lead Gen",
            description:
                "Decades in lead gen taught us what drives results and what doesn’t. That’s why we built SAFE to fix the gaps and scale what works.",
            logo: RootedImg,
        },
        {
            title: "Trust, Transparency, Results",
            description:
                "We go beyond building AI tools. We help you achieve measurable outcomes, using reliable data and a partnership-first approach.",
            logo: CommitImg,
        },
    ]

    return (
        <section className="relative w-full min-h-screen flex items-center py-16 md:py-0">


            <img
                src={GrowthImg}
                alt="Growth Background"
                className="absolute inset-0 w-full h-full object-cover"
            />


            <div className="absolute inset-0 bg-black/50"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">


                <div className="flex items-start gap-4 mb-12">

                    <div className="hidden sm:block w-1 h-16 bg-[#207d7f]"></div>

                    <div>
                        <p className="text-[#207d7f] font-semibold text-sm md:text-base">
                            WHY CHOOSE US
                        </p>

                        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mt-2">
                            The Intelligence Behind Intelligent Growth
                        </h2>
                    </div>

                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-20">

                    {content.map((item, index) => (
                        <div
                            key={index}
                            className="relative flex flex-col bg-black/30 border border-[#207d7f] rounded-2xl p-6 md:p-8 overflow-hidden backdrop-blur-sm"
                        >


                            <div className="absolute bottom-0 right-0 w-20 h-20 md:w-26 md:h-26 bg-[#2e8b88] rounded-tl-full"></div>

                            <h3 className="text-white text-lg md:text-2xl font-bold mb-4 relative z-10">
                                {item.title}
                            </h3>

                            <p className="text-gray-300 text-sm md:text-base mb-6 relative z-10">
                                {item.description}
                            </p>

                            <button className="text-[#207d7f] font-medium underline text-left relative z-10">
                                Learn More
                            </button>

                            <img
                                src={item.logo}
                                alt={item.title}
                                className="absolute bottom-3 right-3 w-12 md:w-16 opacity-90"
                            />

                        </div>
                    ))}

                </div>

            </div>

        </section>
    )
}

export default Growth