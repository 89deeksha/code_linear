import React from 'react'
import img1 from '../assets/img1.jpg'
import logo1 from '../assets/logo1.png'
import logo2 from '../assets/logo2.png'
import logo6 from '../assets/logo6.png'
import logo3 from '../assets/logo3.png'
import logo4 from '../assets/logo4.png'
import logo5 from '../assets/logo5.png'

function Hero() {
  return (
    <section className='relative max-w-7xl mx-auto overflow-hidden  px-4 sm:px-6 lg:px-8 pt-12 lg:pt-20'>
<div className='absolute right-4
        top-20
        
       bg-gradient-to-r from-[#00B4FD] to-[#003ACE]
        blur-[100px]
        rounded-full'>

            

</div>
<div className='relative z-10 max-w-4xl'>
        <h2
          className='text-white text-xl sm:text-5xl md:text-7xl lg:text-7xl 
          font-medium leading-tight '
        >
          The new foundation <br />
          of modern banking
        </h2>
        <p className='text-[#E9F4F9] mt-3'>We drive innovation and growth, provide seamless <br /> customer experience and operational excellence</p>
      </div>

      

      <div className="flex gap-4 mt-8 font-['Chivo Mono ']">
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
                  

]
                "
              >
                REQUEST DEMO
              </button>

              <button
                className="
                  border
                  border-gray-600
                  text-white
                  px-8
                  py-3
                  rounded-lg
                  hover:bg-white/10
                  transition
                "
              >
                CONTACT US
              </button>
            </div>
            <div className='flex flex-col mt-25 '>
        <p className='text-white'>Trusted By:</p>
        <div className='flex gap-3 md:flex-wrap'>
          <div className='flex mt-2 gap-2 font-bold'>
          <img src={logo1} alt="" />
          <p className='text-[#586E84]'>Shell</p>
          </div>
          <div className='flex mt-2 gap-2 font-bold'>
          <img src={logo2} alt="" />
          <p className='text-[#586E84]'>SmartFinder</p>
          </div>
          <div className='flex mt-2 gap-2 font-bold'>
          <img src={logo6} alt="" />
          <p className='text-[#586E84]'>Zoomerr</p>
          </div>
          <div className='flex mt-2 gap-2 font-bold'>
          <img src={logo3} alt="" />
          <p className='text-[#586E84]'>ArtVenue</p>
          </div>
          <div className='flex mt-2 gap-2 font-bold'>
          <img src={logo4} alt="" />
          <p className='text-[#586E84]'>Kontrastr</p>
          </div>
          <div className='flex mt-2 gap-2 font-bold'>
          <img src={logo5} alt="" />
          <p className='text-[#586E84]'>WavesMarathon</p>
          </div>
        </div>
      </div>
           <div className="relative lg:absolute right-0 top-24 w-full lg:w-fit mt-10 lg:mt-0">
  <img
    src={img1}
    alt=""
   className="w-full max-w-[550px] rounded-xl object-contain"

  />
  <div
    className='
relative lg:absolute
left-0 lg:left-[-140px]
mt-4 lg:mt-0
lg:bottom-[-1px]
bg-white
backdrop-blur-md
rounded-3xl
px-3 py-2
w-full
max-w-[500px]
shadow-xl
'
  >
    <p className='text-black font-semibold text-xl'>
      Recent Activity
    </p>
     <div className='flex gap-5 mt-5'>

  <button className='bg-gray-200 px-3 py-2 rounded-full text-sm text-black'>
    This Day
  </button>

  <button className='bg-[#1E3A8A] text-white px-3 py-2 rounded-full text-sm'>
    This Week
  </button>

  <button className='bg-gray-200 px-3 py-2 rounded-full text-sm text-black'>
    The Month
  </button>

  <button className='bg-gray-200 px-3 py-2 rounded-full text-sm text-black'>
    This Month
  </button>

</div>
    <div className='flex items-center justify-between mt-6'>
      <div>
        <p className='text-black font-medium'>To Jin . Work</p>
        <p className='text-gray-500 text-sm'>12 jun 2022</p>
      </div>

      <p className='text-black font-bold'>-$59</p>
    </div>
  </div>

 
</div>
 <div
  className='
relative
lg:absolute
lg:right-0
lg:top-[1px]
mt-6
lg:mt-0
bg-white
backdrop-blur-md
rounded-2xl
px-5
py-4
w-full
max-w-[260px]
z-20
'
>

  <p className='text-black font-semibold text-lg'>
    Card Balance
  </p>

  <div className='mt-5'>

    <p className='text-gray-500 text-sm'>
      Total Balance
    </p>

    <h3 className='text-black text-3xl font-bold mt-1'>
      $12,560
    </h3>

  </div>

  <div className='flex justify-between mt-6'>

    <div>
      <p className='text-gray-400 text-xs'>
        Valid Thru
      </p>

      <p className='text-black font-medium'>
        12/24
      </p>
    </div>

    <div>
      <p className='text-gray-400 text-xs'>
        CVV
      </p>

      <p className='text-black font-medium'>
        ***
      </p>
    </div>

  </div>

</div>
         
      

    </section>
  )
}

export default Hero