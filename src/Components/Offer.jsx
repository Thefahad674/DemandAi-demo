import React from 'react'
import AmpLogo from "../assets/amplify.png"
import SafeLogo from "../assets/SAFE.png"
import InstyleLogo from "../assets/Insyte-iconimg-1.png"
import InsyltepmLogo from "../assets/Insyte-premium-iconimg-1.png"
import WodLogo from "../assets/webinar-on-demand-iconimg-1.png"
import PrecyseLogo from "../assets/Precyse.png"
import GscLogo from "../assets/content-solutions-icon-1.png"
import ContactImg from "../assets/contact-banner-new2.jpg"

const Offer = () => {

    const features = [
        {
            logo: AmpLogo,
            title: "Amplifye.AI",
            description: "Enhance demand generation with Demand AI insights, precise audience segmentation, and real-time analytics for informed decision-making.",
        },
        {
            logo: SafeLogo,
            title: "S.A.F.E",
            description: "Transform your customer data into a powerful revenue-generating asset with AI-driven insights, personalization, and strategic activation across key channels.",
        },
        {
            logo: InstyleLogo,
            title: "InSyte",
            description: "InSyte transforms B2B content into interactive, measurable journeys — host, manage and amplify assets with AI, analytics, automation and enterprise-grade security.",
        },
        {
            logo: InsyltepmLogo,
            title: "InSyte Premium",
            description: "InSyte Premium turns your content into a branded, AI-powered hub that sparks richer conversations, surfaces high-intent leads, and delivers deeper user insights.",
        },
        {
            logo: WodLogo,
            title: "Webinar on Demand",
            description: "Webinar on Demand turns static recordings into interactive, AI-powered experiences that ignite engagement, capture buyer intent, and generate qualified leads.",
        },
        {
            logo: PrecyseLogo,
            title: "Precyse",
            description: "Launch AI-powered programmatic campaigns across channels, leveraging first-party data and real-time optimization for maximum impact.",
        },
        {
            logo: GscLogo,
            title: "Global Content Solutions",
            description: "Global Content Solutions delivers premium B2B content consultancy and production driving measurable buyer influence.",
        },
    ]

    return (
        <section className="bg-[#EBF3F3] w-full">


            <div className="max-w-7xl mx-auto px-6 pt-24 pb-16">
                <div className="flex items-start gap-4">


                    <div className="hidden sm:block w-1 h-22 bg-[#207d7f]"></div>

                    <div>
                        <p className="text-[#207d7f] font-bold text-sm md:text-base ">
                            WHAT WE OFFER
                        </p>

                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-1 leading-tight">
                            An AI-Powered Ecosystem for Smarter Business Growth
                        </h2>
                    </div>

                </div>
            </div>


            <div className="max-w-7xl mx-auto px-6 pb-28">

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">

                    {features.map((item, index) => (
                        <div
                            key={index}
                            className="relative flex flex-col bg-[#e6eff0] rounded-2xl p-10 mb-7 border border-gray-200 shadow-sm hover:shadow-xl hover:border-[#207d7f] transition-all duration-300"
                        >


                            <div className="absolute -top-6 left-8 p-2 rounded-lg ">
                                <img
                                    src={item.logo}
                                    alt={item.title}
                                    className="w-12 h-12"
                                />
                            </div>

                            <h3 className="text-xl font-bold mt-10 mb-4">
                                {item.title}
                            </h3>

                            <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                {item.description}
                            </p>

                            <a
                                href="#"
                                className="text-[#207d7f] font-medium hover:underline mt-auto"
                            >
                                Learn More →
                            </a>

                        </div>
                    ))}

                </div>


                <div className="mt-28">
                    <img
                        src={ContactImg}
                        alt="Contact Banner"
                        className="w-full shadow-lg object-cover"
                    />
                </div>

            </div>

        </section>
    )
}

export default Offer