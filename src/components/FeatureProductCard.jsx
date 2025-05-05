import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ProductCard = ({ product }) => {
  const { image, designer, name, price, id } = product;
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4 }}
      className="mb-6 sm:mb-8 group relative w-full max-w-sm mx-auto"
    >
      <Link to={`/product/${id}`} state={{ product }} className="block">
        <motion.div
          className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 bg-white"
          whileHover="hover"
          whileTap="tap"
        >
          <div className="relative overflow-hidden">
            <motion.img
              src={image}
              alt={name}
              className="w-full h-64 sm:h-80 md:h-96 object-cover transition-transform duration-700 ease-in-out"
              loading="lazy"
              initial={{ scale: 1 }}
              variants={{ hover: { scale: 1.02 } }}
            />
            <motion.div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
              <motion.span
                className="text-white text-base font-medium bg-black/70 px-4 py-2 rounded-full"
                initial={{ y: 20, opacity: 0 }}
                variants={{ hover: { y: 0, opacity: 1 } }}
              >
                View Product
              </motion.span>
            </motion.div>
          </div>

          <div className="mt-3 text-center space-y-1 p-4">
            <motion.h3
              whileHover={{ color: "#b45309" }}
              className="text-sm font-medium text-gray-700"
            >
              {designer}
            </motion.h3>
            <motion.p
              whileHover={{ color: "#000" }}
              className="text-sm text-gray-600 truncate"
            >
              {name}
            </motion.p>
            <motion.p
              whileHover={{ scale: 1.05 }}
              className="text-sm font-light text-gray-800"
            >
              {price}
            </motion.p>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
