import { motion } from "framer-motion";
import ProductCard from "./FeatureProductCard";
import { images } from "../../public/constants/images";

const productVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

const FeaturedCollection = () => {
  const productData = [
    {
      id: 1,
      image: images.Image51415,
      designer: "JJ Atelier",
      name: "Rich Black Afllia Jacket | MURAQQA",
      price: "₹ 40,000.00",
      link: "/product",
    },
    {
      id: 2,
      image: images.Image51415,
      designer: "JJ Atelier",
      name: "Rich Black Afllia Jacket | MURAQQA",
      price: "₹ 40,000.00",
      link: "/product",
    },
    {
      id: 3,
      image: images.Image51415,
      designer: "JJ Atelier",
      name: "Rich Black Afllia Jacket | MURAQQA",
      price: "₹ 40,000.00",
      link: "/product",
    },
    {
      id: 4,
      image: images.Image51415,
      designer: "JJ Atelier",
      name: "Rich Black Afllia Jacket | MURAQQA",
      price: "₹ 40,000.00",
      link: "/product",
    },
    {
      id: 5,
      image: images.Image51415,
      designer: "JJ Atelier",
      name: "Rich Black Afllia Jacket | MURAQQA",
      price: "₹ 40,000.00",
      link: "/product",
    },
    {
      id: 6,
      image: images.Image51415,
      designer: "JJ Atelier",
      name: "Rich Black Afllia Jacket | MURAQQA",
      price: "₹ 40,000.00",
      link: "/product",
    },
    {
      id: 7,
      image: images.Image51415,
      designer: "JJ Atelier",
      name: "Rich Black Afllia Jacket | MURAQQA",
      price: "₹ 40,000.00",
      link: "/product",
    },
    {
      id: 8,
      image: images.Image51415,
      designer: "JJ Atelier",
      name: "Rich Black Afllia Jacket | MURAQQA",
      price: "₹ 40,000.00",
      link: "/product",
    },
    {
      id: 9,
      image: images.Image51415,
      designer: "JJ Atelier",
      name: "Rich Black Afllia Jacket | MURAQQA",
      price: "₹ 40,000.00",
      link: "/product",
    },
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
          },
        },
      }}
      className="flex-1 md:pl-10"
    >
      <motion.h1
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-xl font-serif mb-8 text-center md:text-left"
      >
        FEATURED COLLECTION BY{" "}
        <span className="italic font-medium underline decoration-amber-500">
          JJ ATELIER
        </span>
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {productData.map((product, index) => (
          <motion.div
            key={product.id}
            variants={productVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <ProductCard
              image={product.image}
              designer={product.designer}
              name={product.name}
              price={product.price}
              link={product.link}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default FeaturedCollection;
