import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const FormTextarea = ({ className, ...props }) => {
  return (
    <motion.textarea
      className={cn(
        "w-full px-6 py-4 bg-white rounded-sm shadow-md",
        "focus:outline-none focus:ring-2 focus:ring-amber-500",
        "placeholder:text-gray-400 placeholder:text-lg resize-none",
        "transition-all duration-300 border border-transparent",
        "hover:border-amber-500/30 focus:border-amber-500/50",
        className
      )}
      whileFocus={{ scale: 1.01 }}
      {...props}
    />
  );
};

export default FormTextarea;