import React from 'react'
import graph1 from '../assets/graph1.png'
import { FaCheck } from "react-icons/fa6";

function Hero4() {
    const points=[
        { text: "Customer-On Boarding" },
  { text: "CRM Activities" },
  { text: "Managing deposits and withdrawals" },
  { text: "Configuring New Banking Products" },
  { text: "Transaction management" },
  { text: "Loan disbursal and Loan management" },
  { text: "Payments processing (cash, cheques, mandates, NEFT, RTGS etc)" },
  { text: "Establishing criteria for minimum balances, interest rates, number of withdrawals allowed and so on." }
    ]
  return (
    <section className='gap-10 mt-[200px] relative grid grid-cols-2'>
        <img src={graph1} alt="" />
        <div className='p-20 '>
            <h1 className='text-3xl'>Run a more efficient, flexible,and digitally <br /> connected corebanking system</h1>
            <p className='mt-4'>What you will get:</p>
           <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4'>
  {points.map((item, index) => (
    <div key={index} className='flex items-start gap-3'>
      <div className="w-6 h-6 rounded-full bg-blue-700 flex items-center justify-center flex-shrink-0 mt-1">
        <FaCheck className="text-white text-xs" />
      </div>

      <p className='text-gray-300 text-sm'>
        {item.text}
      </p>
    </div>
  ))}
</div>

        </div>
       
       

    </section>
  )
}

export default Hero4