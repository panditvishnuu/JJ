import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

const ProductCard = ({ image, brand, name, price, className }) => {
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
      className={cn("flex flex-col items-center group relative", className)}
    >
      <motion.div
        className="mb-4 overflow-hidden rounded-sm relative"
        whileHover="hover"
        whileTap="tap"
      >
        <motion.img
          src={image}
          alt={name}
          className="h-[350px] w-[300px] object-cover"
          initial={{ scale: 1 }}
          variants={{
            hover: { scale: 1.04 },
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />

        {/* Hover Overlay */}
        <motion.div
          className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center"
          transition={{ duration: 0.5 }}
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
      </motion.div>

      <div className="text-center space-y-1">
        <motion.h3
          className="font-serif text-base tracking-wider text-gray-700"
          whileHover={{ color: "#b45309" }}
          transition={{ duration: 0.2 }}
        >
          {brand}
        </motion.h3>
        <motion.p
          className="font-serif text-sm text-gray-600"
          whileHover={{ color: "#000" }}
          transition={{ duration: 0.2 }}
        >
          {name}
        </motion.p>
        <motion.p
          className="mt-1 font-serif text-sm text-gray-800"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {price}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default ProductCard;
