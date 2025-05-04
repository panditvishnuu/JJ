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
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <Link to="/atelier" className="text-blue-500 underline mb-4 block">
        ← Back to collection
      </Link>
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Column - Image Gallery */}
        <div className="lg:w-1/2">
          <div className="flex">
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
            <div className="relative flex-1">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-between px-4">
                <button
                  onClick={handlePrevImage}
                  className="bg-white rounded-full p-2 shadow-md opacity-70 hover:opacidade-100"
                >
                  ‹
                </button>
                <button
                  onClick={handleNextImage}
                  className="bg-white rounded-full p-2 shadow-md opacity-70 hover:opacidade-100"
                >
                  ›
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Right Column - Info */}
        <div className="lg:w-1/2">
          <div className="mb-4">
            <h2 className="text-xl font-serif">{product.brand}</h2>
            <h1 className="text-3xl font-serif">{product.name}</h1>
          </div>
          <div className="mb-6">
            <p className="text-2xl font-serif">₹ {product.price}</p>
            <p className="text-sm text-gray-600">{product.taxInfo}</p>
          </div>
          <div className="mb-8">
            {" "}
            <p className="text-sm leading-relaxed">
              {product.description}
            </p>{" "}
          </div>
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
          <div className="mb-8">
            <h3 className="text-2xl font-serif mb-4">Product Details</h3>
            <div className="space-y-2 text-sm">
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
              <p className="text-md text-gray-600 uppercase mt-4">
                DISCLAIMER:
              </p>
              <p className="text-sm text-gray-600">{product.disclaimer}</p>
            </div>
          </div>
          <div className="mb-8">
            <p className="mb-2">
              Interested in the Master Piece?{" "}
              <span className="text-2xl font-serif">Buy Now</span>
            </p>
          </div>
          <Link to="/contact"
            
            className="w-full px-14 py-4 text-lg rounded-none border-2"
          >
            Book an Appointment Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
