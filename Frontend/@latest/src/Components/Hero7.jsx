import React from "react";

export default function Hero7() {
  const insights = [1, 2, 3];

  return (
    <div className="bg-[#08111F] text-white">
      {/* Insights Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className=" md:text-5xl  leading-tight max-w-md">
              Get yourself up-to-speed on all the things happening in fintech
            </h2>

            <button className="mt-8 px-8 py-3 border border-cyan-400 rounded-xl hover:bg-cyan-400/10 transition">
              Insights
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {insights.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl bg-[#0E1C2E] border border-white/5 overflow-hidden"
              >
                {index === 0 && (
                  <div className="bg-[#1D4CFF] p-8 grid grid-cols-2 gap-4">
                    {[1, 2, 3, 4].map((x) => (
                      <div
                        key={x}
                        className="h-20 rounded-2xl bg-cyan-300"
                      />
                    ))}
                  </div>
                )}

                <div className="p-6">
                  <span className="text-xs uppercase tracking-widest text-cyan-400">
                    Getting Started
                  </span>

                  <h3 className="mt-3 text-xl font-bold leading-snug">
                    How to transition from a traditional to a digital bank
                  </h3>

                  <button className="w-full mt-6 py-3 border border-cyan-400 rounded-xl text-sm font-medium">
                    Read More
                  </button>
                </div>
              </div>
            ))}

            <div className="col-span-full text-right">
              <button className="text-cyan-400 text-sm font-medium">
                READ ALL INSIGHTS →
              </button>
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
      <footer className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-5 gap-12">
            <div>
              <h1 className="text-8xl font-extrabold bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
                N7
              </h1>
            </div>

            <div>
              <h4 className="font-semibold mb-4">London</h4>
              <p className="text-sm text-gray-400 leading-7">
                Linketa Systems Ltd
                <br />
                20 Main Road
                <br />
                London, United Kingdom
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Dubai</h4>
              <p className="text-sm text-gray-400 leading-7">
                Linketa Systems Ltd
                <br />
                Business Center
                <br />
                Dubai, UAE
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Solutions</h4>

              <ul className="space-y-3 text-gray-400 text-sm">
                <li>Core Banking</li>
                <li>Digital Banking</li>
                <li>Digital Wallet</li>
                <li>Loan Management</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>

              <ul className="space-y-3 text-gray-400 text-sm">
                <li>About Us</li>
                <li>Insights</li>
                <li>Case Studies</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>

          <div className="mt-16 border-t border-white/10 pt-8 text-center text-sm text-gray-500">
            © 2025 N7. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}