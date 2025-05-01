import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const FilterAccordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="py-3 border-b border-gray-200"
      initial={false}
      animate={{ backgroundColor: isOpen ? "#f8fafc" : "white" }}
    >
      <motion.div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <span className="text-sm font-medium text-gray-700">{title}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="h-4 w-4 text-gray-500" />
        </motion.div>
      </motion.div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="pt-2"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FilterSidebar = () => {
  return (
    <motion.div
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="w-full md:w-[220px] border-r border-gray-200 pr-6 mb-8 md:mb-0"
    >
      <h2 className="text-base font-semibold mb-4">ALL FILTERS</h2>
      <div className="space-y-1">
        <FilterAccordion title="Category">
          {/* Add your filter options here */}
          <div className="space-y-2 pl-2">
            {["Option 1", "Option 2", "Option 3"].map((option) => (
              <motion.label
                key={option}
                whileHover={{ x: 5 }}
                className="flex items-center space-x-2 text-sm text-gray-600 cursor-pointer"
              >
                <input type="checkbox" className="accent-amber-500" />
                <span>{option}</span>
              </motion.label>
            ))}
          </div>
        </FilterAccordion>
        <FilterAccordion title="Color">
          {/* Color filters */}
          <div className="grid grid-cols-3 gap-2 p-2">
            {["#000000", "#ffffff", "#ff0000"].map((color) => (
              <motion.div
                key={color}
                whileHover={{ scale: 1.1 }}
                className="h-8 w-8 rounded-full border cursor-pointer"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </FilterAccordion>
        <FilterAccordion title="Price">
          {/* Price range slider */}
          <div className="px-2 py-4">
            <motion.input
              type="range"
              min="0"
              max="100000"
              className="w-full accent-amber-500 cursor-pointer"
              whileHover={{ scaleY: 1.5 }}
            />
          </div>
        </FilterAccordion>
      </div>
    </motion.div>
  );
};

export default FilterSidebar;
