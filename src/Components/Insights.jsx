import React from 'react'
import DeliverydgImg from "../assets/Delivering-dg.png"
import B2BImg from "../assets/B2B-Marketing.png"
import AihelpsImg from "../assets/AI-Helps.png"

const Insights = () => {
    let insightsDetails = [
        {
            image: DeliverydgImg,
            text: "Delivering Demand Generation You Can Trust – With Total Transparency",
            date: "February 17, 2026",
        },
        {
            image: B2BImg,
            text: "How AI is Impacting B2B Marketing in 2026",
            date: "February 17, 2026",
        },
        {
            image: AihelpsImg,
            text: "AI Helps Great Creators Make Great Content… And Lazy Ones Fail",
            date: "February 17, 2026",
        },
    ]

    return (
        <div className='w-full md:h-[40em] bg-[#f4f0e8] flex flex-col justify-center items-start px-4 md:pl-3 py-10 md:py-0'>


            <div className='flex flex-row gap-2 md:pl-3'>
                <div className='w-1 h-16 md:h-20 bg-[#207d7f]'></div>
                <div>
                    <h1 className='text-[#207d7f] font-bold text-sm md:text-base'>BLOG</h1>
                    <h1 className='text-black text-3xl md:text-5xl font-bold'>
                        Insights That Matter
                    </h1>
                </div>
            </div>


            <div className='flex flex-col md:flex-row w-full mt-6'>
                {insightsDetails.map((item, index) => (
                    <div
                        key={index}
                        className='flex flex-col w-full md:w-[30%] gap-4 mt-6 md:m-3 md:pl-5 md:ml-6'
                    >
                        <img
                            src={item.image}
                            alt=""
                            className='w-full h-auto object-cover'
                        />
                        <h1 className='text-[#207d7f] font-bold text-base md:text-lg'>
                            {item.text}
                        </h1>
                        <p className='text-gray-400 text-sm'>
                            {item.date}
                        </p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Insights