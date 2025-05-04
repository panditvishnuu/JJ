import { images } from "../../public/constants/images";
import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ProductCard from "./ProductCard";
import { Button } from "./ui/button";
import SubmitButton from "./SubmitButton";
import ContactForm from "./ContactForm";
import ProductDetail from "./ProductDetails";

const products = [
  {
    id: 1,
    image: images.Image51415,
    brand: "JJ Atelier",
    name: "Rich Black Alika Jacket | MURAQQA",
    price: "₹40,000.00",
  },
  {
    id: 2,
    image: images.Image51415,
    brand: "JJ Atelier",
    name: "Rich Black Alika Jacket | MURAQQA",
    price: "₹40,000.00",
  },
  {
    id: 3,
    image: images.Image51415,
    brand: "JJ Atelier",
    name: "Rich Black Alika Jacket | MURAQQA",
    price: "₹40,000.00",
  },
  {
    id: 4,
    image: images.Image51415,
    brand: "JJ Atelier",
    name: "Rich Black Alika Jacket | MURAQQA",
    price: "₹40,000.00",
  },
];

const ProductPage = () => {
  const [startIndex, setStartIndex] = useState(0);
  const displayCount = 4;
  const maxStartIndex = Math.max(0, products.length - displayCount);

  const handlePrevious = () => {
    setStartIndex(Math.max(0, startIndex - 1));
  };

  const handleNext = () => {
    setStartIndex(Math.min(maxStartIndex, startIndex + 1));
  };

  const visibleProducts = products.slice(startIndex, startIndex + displayCount);

  return (
    <>
      <section className="relative w-full h-[80vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src={images.Image51301} // Replace with your actual image path
            alt="Background"
            className="w-full h-full object-cover object-center filter contrast-125"
            loading="lazy"
          />
        </div>
        <div className="relative z-10 text-center text-black max-w-4xl px-4 space-y-8">
          <h2 className="text-lg md:text-6xl font-semibold uppercase tracking-widest">
            Product Description
          </h2>
        </div>
      </section>

      <ProductDetail />

      <div>
        <h2 className="text-4xl text-center mt-10 mb-10">
          You Might Also Like
        </h2>
      </div>

      <section className="py-8 md:py-16">
        <div className="container mx-auto px-4">
          <div className="relative">
            <div className="flex justify-between items-center">
              {/* Navigation Buttons */}
              <button
                onClick={handlePrevious}
                disabled={startIndex === 0}
                className="absolute left-4 md:left-0 top-1/2 -translate-y-1/2 z-10 bg-[#d8cba7]/60 hover:bg-[#d8cba7]/80 rounded-full p-2"
              >
                <ArrowLeft className="h-6 w-6 text-[#6b2635]" />
              </button>

              {/* Product Cards Container */}
              <div className="w-full flex gap-4 px-4 md:px-10 overflow-x-hidden snap-x snap-mandatory">
                {visibleProducts.map((product) => (
                  <div
                    key={product.id}
                    className="flex-shrink-0 w-full md:w-1/2 lg:w-1/4 snap-center"
                  >
                    <ProductCard
                      image={product.image}
                      brand={product.brand}
                      name={product.name}
                      price={product.price}
                    />
                  </div>
                ))}
              </div>

              <button
                onClick={handleNext}
                disabled={startIndex >= maxStartIndex}
                className="absolute right-4 md:right-0 top-1/2 -translate-y-1/2 z-10 bg-[#d8cba7]/60 hover:bg-[#d8cba7]/80 rounded-full p-2"
              >
                <ArrowRight className="h-6 w-6 text-[#6b2635]" />
              </button>
            </div>
          </div>

          {/* View More Button */}
          <div className="mt-8 md:mt-14 text-center">
            <SubmitButton>View More</SubmitButton>
          </div>
        </div>
      </section>

      <ContactForm />
    </>
  );
};

export default ProductPage;
