import React from 'react'
import Marquee from './Marquee'
import { FaArrowRight } from 'react-icons/fa'
import Iphone from '../assets/iphone 13 Pro.png'
import Iphone2 from '../assets/iphone 13 Pro2.png'
import Iphone1 from '../assets/iphone 13 Pro1.png'

function Hero6() {
  const text = [
    { point: "Pre-integrated Security System" },
    { point: "Fully Compliant With Regulatory Requirement" },
    { point: "Digitally Connected Core" }
  ]
  const text1 = [
    { point: "Adaptive & Intelligent API monetization" },
    { point: "Ambient User Experience" },
    { point: "Cloud-native With lower TCO" }
  ]
  const text2 = [
    { point: "Branchless & Paperless Banking" },
    { point: "Digital Transformation Capability" },
    { point: "Optimized, Adoptable and Scalable" }
  ]


  return (
    <div className="">
      
      <Marquee />

      <div className="relative bg-[#EEF4F8] overflow-hidden">

        {/* Background N7 */}
        <h1 className="absolute top-10 left-1/2 -translate-x-1/2 text-[500px] font-bold text-transparent stroke-text">
          N7
        </h1>

        <div className="px-6">

          {/* Row 1 */}
          <div className="grid lg:grid-cols-3 gap-20 items-center">

            <div className='px-6 py-8'>
              <h2 className="text-6xl text-black">
                Digital banking
                <br />
                out-of-the-box
              </h2>

              <p className="mt-6 text-gray-600">
                N7 helps your financial institution improve
                the client experience...
              </p>

              <button className="mt-8 bg-gradient-to-r from-sky-400 to-blue-700 px-8 py-4 rounded-lg text-white">
                REQUEST DEMO
              </button>

              <div className="flex items-center gap-2 mt-6 group cursor-pointer">
                <span className="text-[#0057E7] uppercase tracking-wide border-b-2 border-[#0057E7] pb-1">
                  Learn More
                </span>

                <FaArrowRight className="text-[#0057E7] text-lg transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>

            <div className="flex justify-center">
              <img src={Iphone} className="w-[200px]" alt="" />
            </div>

            <div>
              <h3 className="text-black">
                Fully compliant with regulatory <br /> requirement
              </h3>

              <p className="mt-6 text-gray-600">
                The governance of risk management with regulations is achieved by our risk management framework that is fully integrated to work with digital bank’s operational-risk protocols and procedures.
              </p>

              <ul className="mt-8 text-black space-y-4">
  {text.map((item, index) => (
    <li key={index} className="flex items-center gap-3">
      <div className="w-6 h-6 rounded-full bg-[#0057E7] flex items-center justify-center text-white text-xs">
        ✓
      </div>

      <span>{item.point}</span>
    </li>
  ))}
</ul>
            </div>

          </div>

          {/* Row 2 */}
          <div className="grid lg:grid-cols-3 gap-20 items-center mt-40">

            <div />

            <div>
              <h3 className="text-black">
                No legacy IT systems
              </h3>

              <p className="mt-6 text-gray-600">
                Our Digital Banking solution and multilayered approach help financial institutions take advantage of digital transformation by ensuring customer trust and regulatory compliance.
              </p>

              <ul className="mt-8 text-black space-y-4">
  {text1.map((text1, index) => (
    <li key={index} className="flex items-center gap-3">
      <div className="w-6 h-6 rounded-full bg-[#0057E7] flex items-center justify-center text-white text-xs">
        ✓
      </div>

      <span>{text1.point}</span>
    </li>
  ))}
</ul>
            </div>

            <div className="flex justify-center">
              <img src={Iphone1} className="w-[200px]" alt="" />
            </div>

          </div>

        </div>
        {/* Row 3 */}
{/* Row 3 */}
{/* Row 3 */}
<div className="grid lg:grid-cols-3 gap-20 items-center mt-40">

  <div />
  
  <div className="flex justify-center">
    <img src={Iphone2} className="w-[200px]" alt="" />
  </div>

  <div>
    <h3 className="text-black text-2xl font-semibold">
      No traditional branches
    </h3>

    <p className="mt-6 text-gray-600">
      Our Digital Banking out-of-the-box helps you to accelerate innovation while reducing risks and optimising operational costs for a seamless branchless experience.’
    </p>

    <ul className="mt-8 text-black space-y-4">
      {text1.map((item, index) => (
        <li key={index} className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-full bg-[#0057E7] flex items-center justify-center text-white text-xs">
            ✓
          </div>
          <span>{item.point}</span>
        </li>
      ))}
    </ul>
  </div>

</div>
<section className="max-w-7xl mb-10 mx-auto mt-20 px-4">
  <div className="relative overflow-hidden rounded-[30px] bg-gradient-to-r from-[#021A24] to-[#000C12] px-16 py-20">

    {/* Background N7 */}
    <h1
      className="
        absolute
        right-0
        top-1/2
        -translate-y-1/2
        text-[400px]
        font-bold
        text-transparent
        pointer-events-none
        z-0
      "
      style={{
        WebkitTextStroke: "1px rgba(0,180,253,0.12)"
      }}
    >
      N7
    </h1>

    <div className="relative z-10 grid lg:grid-cols-3 items-center gap-10">

      {/* Left Content */}
      <div>
        <h2 className="text-white text-5xl leading-tight">
          Take the full advantage of
          <br />
          going paper-less now.
        </h2>

        <p className="text-gray-400 mt-6">
          N7 helps your financial institution improve the client
          experience, automate and optimize procedures,
          simplify banking operations.
        </p>
      </div>

      {/* Center Button */}
      <div className="flex justify-center">
        <button className="border border-white text-white px-12 py-4 rounded-xl">
          CONTACT US
        </button>
      </div>

      {/* Right Button */}
      <div className="flex justify-center">
        <button className="bg-gradient-to-r from-[#00B4FD] to-[#003ACE] text-white px-12 py-4 rounded-xl">
          REQUEST DEMO
        </button>
      </div>

    </div>
  </div>
</section>

      </div>
      

    </div>
  )
}

export default Hero6