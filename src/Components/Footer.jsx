import React from 'react'
import logo from "../assets/DemandAI-Logo-white.png"
import { FaLinkedin, FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-[#2f2f2f] text-white">

            <div className="max-w-7xl mx-auto px-6 py-16">

                <div className="grid md:grid-cols-3 gap-12">


                    <div>
                        <h3 className="text-xl md:text-4xl font-bold mb-6 whitespace-nowrap">
                            Quick Links
                        </h3>

                        <ul className="space-y-2 text-sm text-gray-300">
                            <li className="hover:text-white cursor-pointer">About us</li>
                            <li className="hover:text-white cursor-pointer">Meet the Team</li>
                            <li className="hover:text-white cursor-pointer">Join the Team</li>
                            <li className="hover:text-white cursor-pointer">Contact</li>
                            <li className="hover:text-white cursor-pointer">FAQs</li>
                            <li className="hover:text-white cursor-pointer">Privacy Policies</li>
                            <li className="hover:text-white cursor-pointer">Cookies Policies</li>
                            <li className="hover:text-white cursor-pointer">Fair Processing Notice</li>
                        </ul>
                    </div>


                    <div>
                        <h3 className="text-xl md:text-4xl font-bold mb-6 whitespace-nowrap">
                            Products / Solutions
                        </h3>

                        <ul className="space-y-2 text-sm text-gray-300">
                            <li className="hover:text-white cursor-pointer">AmplifyeAI</li>
                            <li className="hover:text-white cursor-pointer">S.A.F.E.</li>
                            <li className="hover:text-white cursor-pointer">InSyte</li>
                            <li className="hover:text-white cursor-pointer">InSyte Premium</li>
                            <li className="hover:text-white cursor-pointer">Webinar On Demand</li>
                            <li className="hover:text-white cursor-pointer">Precyse</li>
                            <li className="hover:text-white cursor-pointer">Global Content Solutions</li>
                        </ul>
                    </div>

                    <div className="flex flex-col items-start md:items-start">

                        <img className="h-14 mb-6" src={logo} alt="DemandAI Logo" />

                        <p className="text-sm text-gray-300 mb-6">
                            info@demandai.co  <br /> Call: +1-866-862-4848
                        </p>

                        <div className="flex space-x-6 text-3xl">
                            <FaLinkedin className="hover:text-[#207d7f] cursor-pointer transition" />
                            <FaFacebook className="hover:text-[#207d7f] cursor-pointer transition" />
                            <FaYoutube className="hover:text-[#207d7f] cursor-pointer transition" />
                            <FaInstagram className="hover:text-[#207d7f] cursor-pointer transition" />
                        </div>

                    </div>

                </div>


                <div className="border-t border-gray-600 mt-12 pt-6 text-center text-sm text-gray-400">
                    © Copyright 2025 | All Rights Reserved | Powered by Demand AI
                </div>

            </div>

        </footer>
    )
}

export default Footer