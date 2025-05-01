import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { images } from "../../public/constants/images";
import Loading from "./Loading";

const Welcome = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate loading time for demonstration
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleShopClick = () => {
    setIsAnimating(true);
    setTimeout(() => {
      // Force scroll to top before navigation
      window.history.scrollRestoration = "manual";
      navigate("/home", { state: { fromWelcome: true } });
      window.scrollTo(0, 0);
    }, 1200);
    if (isLoading) return <Loading />;
  };

  if (isLoading) return <Loading />;

  return (
    <div className="relative flex w-full h-screen overflow-hidden">
      {/* Left Door */}
      <motion.div
        className="w-1/2 h-full origin-left"
        animate={{
          rotateY: isAnimating ? -90 : 0,
          filter: isAnimating ? "grayscale(100%)" : "grayscale(0%)",
        }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      >
        <img
          src={images.Image51545}
          alt="Left Door"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </motion.div>

      {/* Right Door */}
      <motion.div
        className="w-1/2 h-full origin-right"
        animate={{
          rotateY: isAnimating ? 90 : 0,
          filter: isAnimating ? "grayscale(100%)" : "grayscale(0%)",
        }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      >
        <img
          src={images.Image51582}
          alt="Right Door"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </motion.div>

      {/* Centered Content */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{ opacity: isAnimating ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col items-center space-y-6">
          <motion.img
            src={images.logo}
            alt="Logo"
            className="w-40 h-40"
            loading="lazy"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
          />

          <motion.p
            className="text-4xl md:text-5xl font-light text-white text-center tracking-wider"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Welcome to the <br />{" "}
            <span className="text-6xl text-center"> World of JJ</span>
          </motion.p>

          <motion.button
            onClick={handleShopClick}
            className="px-8 py-3 md:px-10 md:py-4 rounded-full border-2 border-white text-white 
             hover:bg-white/10 hover:border-gray-400 hover:text-white 
             backdrop-blur-md shadow-md hover:shadow-lg focus:outline-none 
             focus:ring-2 focus:ring-white/50 transition-all duration-300"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            Shop Collection
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Welcome;
