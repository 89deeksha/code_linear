import React from "react";
import Footer from "./Footer";

export default function Hero7() {
  const insights = [1, 2, 3];

  return (
    <div className="bg-[#08111F] text-white">
      {/* Insights Section */}
      <section className="bg-[#02131B] min-h-screen px-4 sm:px-6 lg:px-12 py-12 lg:py-16">

  <div className="grid lg:grid-cols-2 gap-20">

    {/* Left Content */}
    <div>
      <h1 className="text-white text-3xl sm:text-5xl lg:text-6xl leading-tight max-w-md">
        Get yourself up-to-speed on all the things happening in fintech
      </h1>

      <button className="mt-12 border border-white text-white px-10 py-3 rounded-lg">
        INSIGHTS
      </button>
    </div>

    {/* Right Content */}
    <div>

      {/* Top Featured Card */}
    <div className="bg-[#041B24] rounded-2xl p-6 flex flex-col lg:flex-row gap-6">
        <div className="w-[260px] h-[220px] bg-[#08235E] rounded-xl" />

        <div className="flex flex-col justify-between">
          <div>
            <p className="text-[#00B4FD] text-sm uppercase">
              Getting Started
            </p>

            <h3 className="text-white text-4xl mt-4">
              How to transition from a traditional to a digital bank
            </h3>
          </div>

          <button className="border border-gray-500 rounded-lg py-3 text-white">
            READ MORE
          </button>
        </div>
      </div>

      {/* Bottom Cards */}
      <div className="grid md:grid-cols-2 gap-6 mt-8">

        <div className="bg-[#041B24] rounded-2xl p-6">
          <h3 className="text-white text-3xl">
            How to transition from a traditional to a digital bank
          </h3>

          <button className="w-full border border-gray-500 rounded-lg py-3 mt-8 text-white">
            READ MORE
          </button>
        </div>

        <div className="bg-[#041B24] rounded-2xl p-6">
          <h3 className="text-white text-3xl">
            How to transition from a traditional to a digital bank
          </h3>

          <button className="w-full border border-gray-500 rounded-lg py-3 mt-8 text-white">
            READ MORE
          </button>
        </div>

      </div>

    </div>
  </div>

  

</section>

      {/* Case Studies */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <h2 className="text-center text-5xl font-bold mb-14">
          Our Case Studies
        </h2>

        <div className="bg-[#0E1C2E] rounded-3xl overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <div className="bg-[#1D4CFF] flex items-center justify-center p-12">
              <div className="grid grid-cols-2 gap-6">
                {[1, 2, 3, 4].map((item) => (
                  <div
                    key={item}
                    className="w-24 h-24 rounded-3xl bg-cyan-300"
                  />
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-center p-10 lg:p-14">
              <span className="text-xs uppercase tracking-widest text-cyan-400">
                Getting Started
              </span>

              <h3 className="mt-4 text-4xl font-bold max-w-lg">
                How we help brand reach out to more people
              </h3>

              <p className="mt-4 text-gray-300">⚪ Zoomerr</p>

              <button className="mt-8 border border-cyan-400 rounded-xl py-3 px-8 w-fit">
                Read More
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-5 mt-8">
          <button className="w-12 h-12 rounded-full border border-cyan-400 text-cyan-400">
            ←
          </button>

          <div className="flex gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span className="w-2 h-2 rounded-full bg-white/20" />
            <span className="w-2 h-2 rounded-full bg-white/20" />
          </div>

          <button className="w-12 h-12 rounded-full border border-cyan-400 text-cyan-400">
            →
          </button>
        </div>

        <div className="text-right mt-4">
          <button className="text-cyan-400 text-sm font-medium">
            VIEW ALL →
          </button>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="flex flex-col lg:flex-row justify-between gap-12 items-center">
          <div>
            <h2 className="text-5xl lg:text-6xl font-bold leading-tight max-w-3xl">
              Take the full advantage of going paper-less now.
            </h2>

            <p className="mt-5 text-gray-400 max-w-xl">
              CBT helps your financial institution improve the client
              experience, automate and optimize processes, simplify banking
              operations.
            </p>
          </div>

          <div className="flex gap-4">
            <button className="px-8 py-3 rounded-xl border border-cyan-400">
              Contact Us
            </button>

            <button className="px-8 py-3 rounded-xl bg-cyan-400 text-black font-semibold">
              Request Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer/>
    </div>
  );
}