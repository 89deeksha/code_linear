import React from "react";
import { FaArrowRight } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#000D12] text-white px-10 py-20">
      <div className="grid lg:grid-cols-4 gap-12">

        {/* Logo */}
        <div>
          <h1 className="text-[180px] font-bold bg-gradient-to-r from-cyan-400 to-blue-700 bg-clip-text text-transparent leading-none">
            N7
          </h1>
        </div>

        {/* Locations */}
        <div className="space-y-10">
          <div>
            <h3 className="font-semibold mb-2">London</h3>
            <p className="text-gray-400 text-sm">
              Linkita Infosystems Ltd – CB7,
              <br />
              26 Main Road Sundridge,
              <br />
              TN14 6EP, England
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Dubai</h3>
            <p className="text-gray-400 text-sm">
              Jumeirah Business Centre 5,
              <br />
              Dubai, UAE
            </p>
          </div>
        </div>

        {/* Solutions */}
        <div>
          <h3 className="mb-4 font-semibold">Solutions</h3>

          <ul className="space-y-3 text-gray-400">
            <li className="flex items-center justify-between">
              Core Banking CB7 <FaArrowRight />
            </li>
            <li className="flex items-center justify-between">
              Digital Banking N7 <FaArrowRight />
            </li>
            <li className="flex items-center justify-between">
              Open Banking <FaArrowRight />
            </li>
            <li className="flex items-center justify-between">
              Loan Origination <FaArrowRight />
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="mb-4 font-semibold">N7 Banking</h3>

          <ul className="space-y-3 text-gray-400">
            <li className="flex items-center justify-between">
              About Us <FaArrowRight />
            </li>
            <li className="flex items-center justify-between">
              Solutions <FaArrowRight />
            </li>
            <li className="flex items-center justify-between">
              Contact <FaArrowRight />
            </li>
            <li className="flex items-center justify-between">
              Careers <FaArrowRight />
            </li>
          </ul>
        </div>

      </div>

      <div className="border-t border-gray-800 mt-16 pt-6 text-center text-gray-500 text-sm">
        Copyright © 2022 Linkita Infosystems Limited. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;