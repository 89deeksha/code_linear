import React from 'react'

function Navbar() {
  return (
    <nav className='w-full  px-6 md:px-20 py-6'>
      
      <div className='max-w-2xl px-5 py-2 bg-[#2F2F2FB2]  mx-auto flex items-center justify-between'>

        {/* Logo */}
        <h1 className='text-2xl font-semibold text-white'>
          N7
        </h1>

        {/* Nav Links */}
        <ul className='hidden md:flex items-center gap-8 text-sm text-white'>
          <li className='hover:text-black cursor-pointer transition'>
            Solutions
          </li>

          <li className='hover:text-black cursor-pointer transition'>
            Resources
          </li>

          <li className='hover:text-black cursor-pointer transition'>
            About
          </li>
        </ul>

        {/* Button */}
        <button className='border border-white px-10 py-1  rounded-md text-sm hover:bg-white/10 transition'>
          Request Demo
        </button>

      </div>

    </nav>
  )
}

export default Navbar