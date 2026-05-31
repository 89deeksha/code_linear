import React from 'react'
import './index.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Hero2 from './Components/Hero2'
import Hero3 from './Components/Hero3'
import Hero4 from './Components/Hero4'
import Hero5 from './Components/Hero5'
import Hero6 from './Components/Hero6'
import Hero7 from './Components/Hero7'

function App() {
  return (
    <main className="bg-[#000D12] min-h-screen text-white">
      <div className="max-w-7xl mx-auto ">
        <Navbar />
        <Hero />
        <Hero2 />
        <Hero3 />
        <Hero4 />
        <Hero5 />
        <Hero6 />
        <Hero7/>
      </div>
    </main>
  )
}

export default App