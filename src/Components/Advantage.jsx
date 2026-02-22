import React from 'react'
import AdvImg from "../assets/AI-img-1.jpg"

const Advantage = () => {
    return (
        <div className='flex flex-col justify-center items-start md:h-[50em] bg-white overflow-hidden px-4 md:px-0'>

            <div className='md:h-[60%] flex flex-col md:flex-row m-3 mt-10 gap-3 pl-2'>

                <div className='flex flex-col justify-around w-full'>

                    <div>
                        <div className='flex flex-row'>

                            <div className='w-1 h-20 bg-[#207d7f]'></div>

                            <div className='flex flex-col ml-3'>
                                <h1 className='text-[#207d7f] font-bold text-md'>
                                    THE AI ADVANTAGE
                                </h1>

                                <h1 className='text-black font-bold text-2xl md:text-4xl'>
                                    Purpose-Built Gen AI Agents for Real-World Results
                                </h1>
                            </div>

                        </div>

                        <div className='flex flex-col md:flex-row items-start gap-8 mt-9 text-md ml-0 md:ml-4'>

                            <div className='flex flex-row w-full'>

                                <div className='flex flex-col gap-2 w-full md:w-[90%]'>

                                    <p>
                                        Each Demand AI solution is powered by intelligent systems that help you:
                                    </p>

                                    <ul className='list-disc ml-5'>
                                        <li>Segment audiences in real time</li>
                                        <li>Continuously clean and verify your data</li>
                                        <li>Automate multi-channel engagement</li>
                                        <li>Identify buying intent and trigger personalized outreach</li>
                                        <li>Scale with minimal manual effort and full transparency</li>
                                    </ul>

                                    <p>
                                        And the best part? You stay in control — with full visibility and seamless integration into your stack.
                                    </p>

                                    <button className='bg-[#207d7f] w-full md:w-[14em] h-[3em] rounded-sm text-white text-sm mt-4'>
                                        GET STARTED TODAY →
                                    </button>

                                </div>

                            </div>


                            <div className='w-full md:h-[50em] md:w-[40em] pb-5'>
                                <img
                                    src={AdvImg}
                                    alt=""
                                    className='w-full h-auto object-cover'
                                />
                            </div>

                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Advantage