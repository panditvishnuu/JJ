import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const SubmitButton = ({ className, children = "Submit", ...props }) => {
  return (
    <motion.button
      className={cn(
        "border-2 border-black px-16 py-3 text-center",
        "hover:bg-black hover:text-white",
        "transition-colors duration-300 relative overflow-hidden",
        "text-lg font-medium tracking-wide",
        className
      )}
      type="submit"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <motion.div
        className="absolute inset-0 bg-amber-500 opacity-0"
        whileHover={{ opacity: 0.1 }}
      />
    </motion.button>
  );
};

export default SubmitButton;