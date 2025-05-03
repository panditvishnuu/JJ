import { useState } from "react";
import { Button } from "@/components/ui/button";

const ProductDetail = ({ product }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = (useState < string) | (null > null);

  const handleThumbnailClick = (index) => {
    setSelectedImageIndex(index);
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const handlePrevImage = () => {
    setSelectedImageIndex((prev) =>
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setSelectedImageIndex((prev) =>
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Column - Image Gallery */}
        <div className="lg:w-1/2">
          <div className="flex">
            {/* Thumbnails */}
            <div className="hidden sm:flex flex-col gap-2 mr-4">
              {product.images.map((img, index) => (
                <div
                  key={index}
                  className={`cursor-pointer border-2 ${
                    selectedImageIndex === index
                      ? "border-gray-500"
                      : "border-transparent"
                  }`}
                  onClick={() => handleThumbnailClick(index)}
                >
                  <img
                    src={img}
                    alt={`${product.name} thumbnail ${index + 1}`}
                    className="w-20 h-24 object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Main Image */}
            <div className="relative flex-1">
              <img
                src={product.images[selectedImageIndex]}
                alt={product.name}
                className="w-full h-auto object-cover"
              />

              {/* Navigation Arrows */}
              <div className="absolute inset-0 flex items-center justify-between px-4">
                <button
                  onClick={handlePrevImage}
                  className="bg-white rounded-full p-2 shadow-md opacity-70 hover:opacity-100"
                  aria-label="Previous image"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5"
                  >
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                </button>
                <button
                  onClick={handleNextImage}
                  className="bg-white rounded-full p-2 shadow-md opacity-70 hover:opacity-100"
                  aria-label="Next image"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Product Info */}
        <div className="lg:w-1/2">
          {/* Brand and Product Name */}
          <div className="mb-4">
            <h2 className="text-xl font-serif">{product.brand}</h2>
            <h1 className="text-3xl font-serif">{product.name}</h1>
          </div>

          {/* Price */}
          <div className="mb-6">
            <p className="text-2xl font-serif">₹ {product.price}</p>
            <p className="text-sm text-gray-600">{product.taxInfo}</p>
          </div>

          {/* Description */}
          <div className="mb-8">
            <p className="text-sm leading-relaxed">{product.description}</p>
          </div>

          {/* Size Selection */}
          <div className="mb-8">
            <p className="font-serif mb-2">Select Size</p>
            <div className="flex gap-2">
              {["XS", "S", "M", "L", "XL", "Custom"].map((size) => (
                <button
                  key={size}
                  onClick={() => handleSizeSelect(size)}
                  className={`px-4 py-1 border ${
                    selectedSize === size
                      ? "bg-gray-200 border-gray-400"
                      : "bg-gray-100 border-gray-300"
                  } text-sm`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="mb-8">
            <h3 className="text-2xl font-serif mb-4">Product Details</h3>
            <div className="space-y-2 text-sm">
              <p>
                <span className="font-medium">Style code:</span>{" "}
                {product.styleCode}
              </p>
              <p>
                <span className="font-medium">Set Includes:</span>{" "}
                {product.setIncludes}
              </p>
              <p>
                <span className="font-medium">Fabric:</span> {product.fabric}
              </p>
              <p>
                <span className="font-medium">Color:</span> {product.color}
              </p>
              <p>
                <span className="font-medium">Wash care:</span>{" "}
                {product.washCare}
              </p>
              <p>
                <span className="font-medium">Model Wearing Size:</span>{" "}
                {product.modelSize}
              </p>
              <p className="text-xs text-gray-600 uppercase mt-4">
                DISCLAIMER:
              </p>
              <p className="text-xs text-gray-600">{product.disclaimer}</p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mb-8">
            <p className="mb-2">
              Interested in the Master Piece?{" "}
              <span className="text-2xl font-serif">Buy Now</span>
            </p>
          </div>

          {/* Book Appointment Button */}
          <Button
            variant="outline"
            className="w-full py-6 text-lg rounded-none border-2"
          >
            Book an Appointment Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
