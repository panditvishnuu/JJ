import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { images } from "../../public/constants/images";

const products = [
  {
    id: 1,
    image: images.Image51229,
    brand: "JJ Atelier",
    name: "Rich Black Alika Jacket | MURAQQA",
    price: "₹40,000.00",
  },
  {
    id: 2,
    image: images.Image51582,
    brand: "JJ Atelier",
    name: "Rich Black Alika Jacket | MURAQQA",
    price: "₹40,000.00",
  },
  {
    id: 3,
    image: images.Image51545,
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

const FeaturedCollection = () => {
  const [startIndex, setStartIndex] = useState(0);
  const displayCount = 4;
  const maxStartIndex = Math.max(0, products.length - displayCount);
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  const handlePrevious = () => {
    setStartIndex(Math.max(0, startIndex - 1));
  };

  const handleNext = () => {
    setStartIndex(Math.min(maxStartIndex, startIndex + 1));
  };

  const visibleProducts = products.slice(startIndex, startIndex + displayCount);

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const buttonVariants = {
    hover: { scale: 1.1, backgroundColor: "#8b2332" },
    tap: { scale: 0.95 },
  };

  return (
    <motion.section
      className="py-16 bg-[#d8cba7] overflow-hidden"
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-10" variants={titleVariants}>
          <motion.h2
            className="text-3xl text-[#8b2332] tracking-wider opacity-80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ delay: 0.4 }}
          >
            FEATURED COLLECTION
          </motion.h2>
          <motion.h1
            className="text-6xl text-[#6b2635] mt-2"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            AARAMBH
          </motion.h1>
        </motion.div>

        <div className="relative">
          <div className="flex justify-between items-center">
            <motion.button
              onClick={handlePrevious}
              disabled={startIndex === 0}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-[#d8cba7]/60 rounded-full p-2"
              whileHover={{ scale: 1.1, backgroundColor: "#d8cba7" }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowLeft className="h-6 w-6 text-[#6b2635]" />
            </motion.button>

            <div className="w-full flex justify-between px-10">
              <AnimatePresence mode="wait">
                {visibleProducts.map((product, index) => (
                  <motion.div
                    key={product.id + startIndex}
                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.6, type: "spring" }}
                    className="flex-1 mx-2"
                  >
                    <ProductCard
                      image={product.image}
                      brand={product.brand}
                      name={product.name}
                      price={product.price}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            <motion.button
              onClick={handleNext}
              disabled={startIndex >= maxStartIndex}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-[#d8cba7]/60 rounded-full p-2"
              whileHover={{ scale: 1.1, backgroundColor: "#d8cba7" }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowRight className="h-6 w-6 text-[#6b2635]" />
            </motion.button>
          </div>
        </div>

        <motion.div
          className="mt-14 text-center"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Button
            asChild
            className="bg-[#6b2635] hover:bg-[#8b2332] text-white px-8 py-2 rounded-none relative overflow-hidden"
          >
            <motion.div
              whileHover="hover"
              whileTap="tap"
              variants={buttonVariants}
            >
              <span className="relative z-10">Visit the Atelier</span>
              <motion.div
                className="absolute inset-0 bg-[#8b2332] opacity-0"
                variants={{
                  hover: { opacity: 0.1 },
                  tap: { opacity: 0.2 },
                }}
              />
            </motion.div>
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default FeaturedCollection;
