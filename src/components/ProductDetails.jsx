import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useLocation, useParams, Link } from "react-router-dom";

const ProductDetail = () => {
  const { state } = useLocation();
  const product = state?.product;
  const { id } = useParams();

  if (!product) {
    return <p>Product not found for ID {id}</p>;
  }

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState("M");

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
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 max-w-7xl">
      <Link
        to="/atelier"
        className="text-blue-500 underline mb-6 block text-sm sm:text-base"
      >
        ← Back to collection
      </Link>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left Column - Image Gallery */}
        <div className="lg:w-1/2 w-full">
          <div className="flex flex-col sm:flex-row">
            {/* Thumbnails */}
            <div className="flex sm:flex-col gap-2 sm:mr-4 overflow-x-auto sm:overflow-visible mb-4 sm:mb-0">
              {product.images.map((img, index) => (
                <div
                  key={index}
                  onClick={() => handleThumbnailClick(index)}
                  className={`cursor-pointer border-2 rounded-md ${
                    selectedImageIndex === index
                      ? "border-gray-500"
                      : "border-transparent"
                  }`}
                >
                  <img
                    src={img}
                    alt={`${product.name} thumbnail ${index + 1}`}
                    className="w-20 h-24 object-cover rounded-md"
                  />
                </div>
              ))}
            </div>

            {/* Main Image */}
            <div className="relative w-full">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto object-cover rounded-md"
              />
              <div className="absolute inset-0 flex items-center justify-between px-2 sm:px-4">
                <button
                  onClick={handlePrevImage}
                  className="bg-white rounded-full p-2 shadow-md opacity-70 hover:opacity-100"
                >
                  ‹
                </button>
                <button
                  onClick={handleNextImage}
                  className="bg-white rounded-full p-2 shadow-md opacity-70 hover:opacity-100"
                >
                  ›
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Product Info */}
        <div className="lg:w-1/2 w-full">
          <div className="mb-5 space-y-1">
            <h2 className="text-lg sm:text-xl font-serif text-gray-700">
              {product.brand}
            </h2>
            <h1 className="text-2xl sm:text-3xl font-serif font-semibold">
              {product.name}
            </h1>
          </div>

          <div className="mb-6 space-y-1">
            <p className="text-xl sm:text-2xl font-serif text-gray-900">
              ₹ {product.price}
            </p>
            <p className="text-sm text-gray-600">{product.taxInfo}</p>
          </div>

          <div className="mb-6">
            <p className="text-sm sm:text-base leading-relaxed text-gray-700">
              {product.description}
            </p>
          </div>

          <div className="mb-8">
            <p className="font-serif mb-2 text-base sm:text-lg">Select Size</p>
            <div className="flex flex-wrap gap-2">
              {["XS", "S", "M", "L", "XL", "Custom"].map((size) => (
                <button
                  key={size}
                  onClick={() => handleSizeSelect(size)}
                  className={`px-4 py-1 border rounded-sm text-sm sm:text-base transition ${
                    selectedSize === size
                      ? "bg-gray-200 border-gray-400"
                      : "bg-gray-100 border-gray-300"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-10">
            <h3 className="text-xl sm:text-2xl font-serif mb-4">
              Product Details
            </h3>
            <div className="space-y-2 text-sm sm:text-base text-gray-800">
              {Object.entries({
                "Style code": product.styleCode,
                "Set Includes": product.setIncludes,
                Fabric:
                  typeof product.fabric === "object"
                    ? Object.entries(product.fabric)
                        .map(([k, v]) => `${k}: ${v}`)
                        .join(", ")
                    : product.fabric,
                Color: product.color,
                "Wash care": product.washCare,
                "Model Wearing Size": product.modelSize,
              }).map(([label, value]) => (
                <p key={label}>
                  <span className="font-medium">{label}:</span> {value}
                </p>
              ))}
              <div className="pt-4">
                <p className="text-md text-gray-600 uppercase font-semibold">
                  DISCLAIMER:
                </p>
                <p className="text-sm text-gray-600">{product.disclaimer}</p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <p className="mb-2 text-base sm:text-lg">
              Interested in the Master Piece?{" "}
              <span className="text-xl sm:text-2xl font-serif">Buy Now</span>
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-block w-full text-center px-8 py-3 text-base sm:text-lg font-medium border-2 border-black hover:bg-black hover:text-white transition rounded-sm"
          >
            Book an Appointment Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
