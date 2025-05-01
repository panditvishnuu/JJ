import React from "react";
import { images } from "../../public/constants/images";

const Footer = () => {
  return (
    <footer className="bg-[#CBBD93] text-gray-700 border-t">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Section - Logo and Tagline */}
          <div className="md:w-1/3">
            <div className="w-32 h-32 mb-4">
              <img
                src={images.logo}
                alt="JJ Atelier Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-lg italic text-gray-600">
              We Design Emotions with Bespoke Collections.
            </p>
          </div>

          {/* Right Section - Columns and Copyright */}
          <div className="md:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {/* Customer Support */}
              <div>
                <h3 className="font-bold uppercase text-sm mb-4 tracking-wider">
                  CUSTOMER SUPPORT
                </h3>
                <ul className="space-y-2">
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
              <div>
                <h3 className="font-bold uppercase text-sm mb-4 tracking-wider">
                  JJ ATELIER
                </h3>
                <ul className="space-y-2">
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
                <h3 className="font-bold uppercase text-sm mb-4 tracking-wider">
                  ABOUT US
                </h3>
                <ul className="space-y-2">
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

            {/* Copyright */}
            <div className="border-t border-gray-300 pt-4">
              <p className="text-right text-sm text-gray-500">
                Copyright © 2025 Reserved to JJ Atelier.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
