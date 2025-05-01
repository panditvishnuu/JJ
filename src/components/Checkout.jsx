import { images } from "../../public/constants/images";
import React from "react";

const Checkout = () => {
  return (
    <>
      <section className="relative w-full h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src={images.Image51686} // Replace with your actual image path
            alt="Background"
            className="w-full h-[80%] object-cover object-center"
            loading="lazy"
          />
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl px-4 space-y-8">
          <h2 className="text-lg md:text-xl uppercase tracking-widest font-light text-gray-200">
            WELCOME TO THE WORLD OF JJ
          </h2>
        </div>
      </section>
    </>
  );
};

export default Checkout;
