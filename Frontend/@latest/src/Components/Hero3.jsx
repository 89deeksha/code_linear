import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import graph1 from '../assets/Frame 89.png'

function Hero3() {
  return (
    <section className='relative grid grid-cols-1 lg:grid-cols-2'>
        <h1
  className="
    absolute
    left-[-70px]
    top-1/2
    -translate-y-1/2
    text-[425px]
    font-bold
    text-transparent
    select-none
    pointer-events-none
    z-0
  "
  style={{
    WebkitTextStroke: "2px rgba(0,180,253,0.15)"
  }}
>
  CB7
</h1>
<div className="relative pt-80 z-10 px-8">
  <h1 className="text-[40px]">
    A complete cloud-based <br /> core banking
  </h1>

  <p className="mt-3 text-gray-400">
    Faster time to market with our cloud-based <br /> core banking services
  </p>
  <button
                className="
                 bg-gradient-to-r
    from-[#00B4FD]
    to-[#003ACE]
                  text-white
                  px-8
                  py-3
                  rounded-lg
                  font-sm
                  transition
                  mt-4
                  

]
                "
              >
                REQUEST DEMO
              </button>
              <div className='flex items-center gap-2 mt-4 text-[#00B4FD] cursor-pointer group'>
  <span className='group-hover:underline'>
    Learn More
  </span>

  <FaArrowRight className='text-sm transition-transform group-hover:translate-x-1' />
</div>
              

</div>
<div className='mt-70 relative  border p-2 rounded-xl   text-[#00B4FD]'>
  <img className='border rounded-xl'  src={graph1} alt="" />
  <div
    className="
      absolute
      bottom-[-17px]
      left-1/2
      -translate-x-1/2
      w-[120%]
      h-[10px]
      border
      p-3
      border-cyan-500
      rounded-full
      z-0
      
    "
  />
</div>




    </section>
  
  )
}

export default Hero3