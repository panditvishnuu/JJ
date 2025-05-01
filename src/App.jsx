import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Welcome from "./components/Welcome";
import ScrollToTop from "./components/ScrollToTop";

// Import your page components
import Home from "./components/HomePage";
import Atelier from "./components/Atelier";
import About from "./components/About";
import Contact from "./components/Contact";
import ProductPage from "./components/ProductPage";

const App = () => {
  const location = useLocation();

  // Only show nav+footer when we're _not_ at "/"
  const showLayout = location.pathname !== "/";

  return (
    <div className="font-cormorant">
      {showLayout && <Navbar />}
      <ScrollToTop />

      {/* Use Routes to define your routes */}
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/atelier" element={<Atelier />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {showLayout && <Footer />}
    </div>
  );
};

export default App;
