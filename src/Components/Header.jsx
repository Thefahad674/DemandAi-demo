import React, { useState } from 'react'
import Logo from "../assets/DemandAI-Logo.png"

const Header = () => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="w-full shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">


        <img className="h-12 md:h-14" src={Logo} alt="Logo" />


        <div className="hidden md:flex space-x-8 font-medium ">
          <button className='hover:text-[#207d7f]'>Home</button>
          <button className='hover:text-[#207d7f]'>Products</button>
          <button className='hover:text-[#207d7f]'>Solutions</button>
          <button className='hover:text-[#207d7f]'>About</button>
          <button className='hover:text-[#207d7f]'>Blog</button>
          <button className='hover:text-[#207d7f]'>Contact</button>
        </div>


        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

      </div>


      {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 pb-6 font-medium">
          <button>Home</button>
          <button>Products</button>
          <button>Solutions</button>
          <button>About</button>
          <button>Blog</button>
          <button>Contact</button>
        </div>
      )}
    </header>
  )
}

export default Header