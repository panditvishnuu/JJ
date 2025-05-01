// components/Loading.jsx
import { motion } from "framer-motion";
import { images } from "../../public/constants/images";

const Loading = () => {
  return (
    <motion.div
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative flex flex-col items-center space-y-6">
        {/* Rotating Border */}
        <motion.div
          className="absolute w-32 h-32 border-t-4 border-amber-500 border-b-4 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
        />

        {/* Pulsing Logo */}
        <motion.img
          src={images.logo}
          alt="Loading..."
          className="w-24 h-24"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Text Animation */}
        <motion.p
          className="text-white font-light tracking-wider text-lg"
          animate={{ y: [0, -5, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          Curating Luxury...
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Loading;
