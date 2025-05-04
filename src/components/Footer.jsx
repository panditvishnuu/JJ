import React from "react";
import { images } from "../../public/constants/images";

const Footer = () => {
  return (
    <footer className="bg-[#CBBD93] text-[#2e1f1c] border-t border-[#2e1f1c]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-10">
        <div className="flex flex-col md:flex-row md:justify-between gap-12">
          {/* Left Section */}
          <div className="md:w-1/3 flex flex-col items-start">
            <div className="w-32 h-32 mb-4">
              <img
                src={images.logo}
                alt="JJ Atelier Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-xl font-bold italic leading-relaxed">
              We Design Emotions with
              <br />
              Bespoke Collections.
            </p>
          </div>

          {/* Columns */}
          <div className="md:w-2/3 flex flex-col md:flex-row justify-between">
            {/* Customer Support */}
            <div className="mb-8 md:mb-0">
              <h3 className=" uppercase text-xl font-bold tracking-widest mb-3">
                Customer Support
              </h3>
              <ul className="space-y-2 text-md font-semibold">
                <li>
                  <a href="#" className="hover:text-black">
                    Customer Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black">
                    Buy Online. Pick Up In-Store.
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black">
                    Store Location
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black">
                    Gift Cards
                  </a>
                </li>
              </ul>
            </div>

            {/* JJ Atelier */}
            <div className="mb-8 md:mb-0">
              <h3 className=" uppercase text-xl font-bold tracking-widest mb-3">
                JJ Atelier
              </h3>
              <ul className="space-y-2 text-md font-semibold">
                <li>
                  <a href="#" className="hover:text-black">
                    Our Story
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black">
                    My Rewards
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black">
                    Why Us
                  </a>
                </li>
              </ul>
            </div>

            {/* About Us */}
            <div>
              <h3 className=" uppercase text-xl font-bold tracking-widest mb-3">
                About Us
              </h3>
              <ul className="space-y-2 text-md font-semibold">
                <li>
                  <a href="#" className="hover:text-black">
                    Our Values
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black">
                    Sustainability
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-[#2e1f1c] pt-4">
          <p className="text-center text-sm uppercase tracking-wide">
            Copyright 2025 Reserved to JJ Atelier. <span className="font-bold underline">   Designed & Developed by CLAPONN ❤️ </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
