import React from 'react'

function Hero5() {
  return (
    <section className="max-w-7xl mx-auto mt-20 px-4">
  <div className="relative flex justify-center items-center h-[400px] rounded-xl p-6 bg-gradient-to-r from-[#031E2A] to-[#000D12] overflow-hidden">

    <h1
      className="
        absolute
        left-1/2
        top-1/3
        -translate-x-1/2
        -translate-y-1/2
        text-[480px]
        font-bold
        text-transparent
        pointer-events-none
        z-0
       
      "
      style={{
        WebkitTextStroke: "2px rgba(0,180,253,0.12)"
      }}
    >
      CB7
    </h1>

    <div className="relative grid grid-cols-1 lg:grid-cols-2 z-10 items-center gap-10">
        <div>
      <h2 className="text-[50px] ">
       Take the full advantage of <br /> going paper less now.
      </h2>

      <p className="text-gray-400 mt-4">
        CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations 
      </p>
      </div>

      <div className="flex justify-center mt-6 gap-12">
        <button className="bg-gradient-to-r border px-12 py-3 rounded-lg">
         Contact us
        </button>
        <button className="bg-gradient-to-r from-[#00B4FD] to-[#003ACE] px-12 py-3 rounded-lg">
          Request Demo
        </button>
      </div>
      
    </div>

  </div>
</section>
  )
}

export default Hero5