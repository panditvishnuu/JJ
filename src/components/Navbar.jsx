import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Search, Heart, Menu, X } from "lucide-react";
import { images } from "../../public/constants/images";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white md:static fixed top-0 left-0 right-0 z-50 shadow-md">
      {/* Top Row - Logo & Appointment Button */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        <div className="flex items-center justify-between relative">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-800"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Centered Logo */}
          <Link
            to="/"
            className="absolute left-1/2 -translate-x-1/2 md:relative md:left-16 md:translate-x-0 md:mx-auto"
          >
            <img
              src={images.logo}
              alt="Logo"
              className="w-14 h-14 md:w-16 md:h-16 object-contain"
            />
          </Link>

          {/* Appointment Button (right) */}
          <Link to="/contact" className="hidden md:block">
            <button className="border border-black px-4 py-1.5 text-sm font-medium hover:bg-black hover:text-white transition-colors">
              Book Appointment
            </button>
          </Link>
        </div>

        {/* Navigation Links & Icons Row */}
        <div className="hidden md:flex items-center justify-center mt-4 space-x-8 relative">
          {/* Navigation Links */}
          <nav className="flex space-x-9">
            {[
              { to: "/home", text: "Home" },
              { to: "/atelier", text: "JJ Atelier" },
              { to: "/about", text: "About" },
              { to: "/contact", text: "Contact" },
            ].map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-md font-bold  relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-black hover:after:w-full after:transition-all ${
                    isActive ? "text-black after:w-full" : "text-gray-600"
                  }`
                }
              >
                {link.text}
              </NavLink>
            ))}
          </nav>

          {/* Icons positioned absolutely at right */}
          <div className="absolute right-0 flex space-x-4">
            <button className="text-gray-600 hover:text-black">
              <Search size={18} />
            </button>
            <button className="text-gray-600 hover:text-black">
              <Heart size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="flex flex-col p-4 space-y-4 text-center">
            {[
              { to: "/", text: "Home" },
              { to: "/atelier", text: "JJ Atelier" },
              { to: "/about", text: "About" },
              { to: "/contact", text: "Contact" },
            ].map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `font-medium ${
                    isActive ? "text-black underline" : "text-gray-600"
                  }`
                }
              >
                {link.text}
              </NavLink>
            ))}

            <div className="flex items-center justify-center space-x-4 pt-4">
              <Search size={18} className="text-gray-600" />
              <Heart size={18} className="text-gray-600" />
              <Link to="/appointment">
                <button className="border border-black px-3 py-1 text-sm font-medium hover:bg-black hover:text-white transition-colors">
                  Book Now
                </button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navigation;
