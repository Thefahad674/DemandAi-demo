import React from 'react'
import SapImg from "../assets/SAP.png"
import databricksImg from "../assets/databricks.png"
import eightImg from "../assets/8x8.png"
import datastaxImg from "../assets/datastax.png"

const Partners = () => {
    return (
        <section className="w-full py-20">

            <div className="max-w-7xl mx-auto px-6">


                <div className="flex items-start gap-4 mb-12">

                    <div className="hidden sm:block w-1 h-20 bg-[#207d7f]"></div>

                    <div>
                        <p className="text-[#207d7f] font-bold text-sm md:text-base">
                            OUR PARTNERS
                        </p>

                        <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl mt-2">
                            Chosen by the Best to Accelerate B2B Growth
                        </h2>
                    </div>

                </div>


                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center">

                    <img
                        src={SapImg}
                        alt="SAP"
                        className="mx-auto max-h-12 md:max-h-16 "
                    />

                    <img
                        src={databricksImg}
                        alt="Databricks"
                        className="mx-auto max-h-12 md:max-h-16"
                    />

                    <img
                        src={eightImg}
                        alt="8x8"
                        className="mx-auto max-h-12 md:max-h-16 "
                    />

                    <img
                        src={datastaxImg}
                        alt="DataStax"
                        className="mx-auto max-h-12 md:max-h-16"
                    />

                </div>

            </div>

        </section>
    )
}

export default Partners