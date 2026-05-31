import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import cb from '../assets/CB7.png'
import ic1 from '../assets/Icon1.png'
import ic4 from '../assets/Icon4.png'
import ic2 from '../assets/Icon2.png'
import ic5 from '../assets/Icon5.png'
import ic3 from '../assets/Icon3.png'


function Hero2() {
    const data=[{
        ic1:ic1,
        HD1:"Core Banking CB7",
        para1:"CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations for your employees, improve risk management, increase productivity, and ensure full regulatory compliance.",
        type:''
    },

    {
        ic1:ic4,
        HD1:"Digital Banking N7",
        para1:"N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients ",
        type:''

    },
    {
        ic1:ic2,
        HD1:"Open Banking",
        para1:"Our API banking helps you to gain actionable insights, enable account aggregation, streamline customer onboarding, KYC, and payment initiation, offer predictive budgeting tools, and introduce enhanced credit scoring.",
        type:''

    },
    {
        ic1:ic5,
        HD1:"Loan Origination System",
        para1:"N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients.",
        type:"NBFC"
    },
    {
        ic1:ic3,
        HD1:"Loan Management System",
        para1:"N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients.",
        type:"NBFC"
    },


]
  return (
    <section className='max-w-7xl  mx-auto px-1 md:px-4 py-24'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-start'>

        {/* Left Side */}
        <div>
          <p className='text-xl md:text-4xl  leading-tight'>
            All of our solutions are <br />
            tailor-made to your needs
          </p>
          <button className='border rounded-xl px-6 py-2 mt-5 border-white'>Request Demo</button>
        </div>

        {/* Right Side */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-start'>
            {data.map((data,index)=>{
                return <div key={index}>
                    <div className='flex items-center'>
  <img src={data.ic1} alt="" />

  {data.type && (
    <p className='ml-auto  font-medium'>
      {data.type}
    </p>
  )}
</div>
                <h2 className='mt-4'>{data.HD1}</h2>
          <p className='text-gray-400 mt-5'>
            {data.para1}
          </p>
          <div className='flex items-center gap-2 mt-4 text-[#00B4FD] cursor-pointer group'>
  <span className='group-hover:underline'>
    Learn More
  </span>
  <FaArrowRight className='text-sm transition-transform group-hover:translate-x-1' />
</div>
          </div>
            })}
            
          
        </div>

      </div>
    </section>
  )
}

export default Hero2