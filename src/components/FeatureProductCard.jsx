import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ProductCard = ({ image, designer, name, price, link }) => {
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
      className="mb-8 group relative"
    >
      <Link to={link} className="block">
        <motion.div
          className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl"
          whileHover="hover"
          whileTap="tap"
        >
          <div className="relative overflow-hidden">
            <motion.img
              src={image}
              alt={name}
              className="w-full h-[500px] object-cover"
              loading="lazy"
              initial={{ scale: 1 }}
              variants={{
                hover: { scale: 1.02 },
              }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            />

            {/* Hover Overlay */}
            <motion.div
              className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center"
              transition={{ duration: 0.3 }}
            >
              <motion.span
                className="text-white text-lg font-medium bg-black/70 px-6 py-2 rounded-full"
                initial={{ y: 20, opacity: 0 }}
                variants={{
                  hover: { y: 0, opacity: 1 },
                }}
              >
                View Product
              </motion.span>
            </motion.div>
          </div>

          <div className="mt-3 text-center space-y-1 p-4 bg-white">
            <motion.h3
              className="text-sm font-medium text-gray-700"
              whileHover={{ color: "#b45309" }}
            >
              {designer}
            </motion.h3>
            <motion.p
              className="text-sm text-gray-600"
              whileHover={{ color: "#000" }}
            >
              {name}
            </motion.p>
            <motion.p
              className="text-sm font-light text-gray-800"
              whileHover={{ scale: 1.05 }}
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
