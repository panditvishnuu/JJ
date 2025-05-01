import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import FilterSidebar from "./FilterSidebar";
import FeaturedCollection from "./FeaturedCollection";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      when: "beforeChildren",
    },
  },
};

const Index = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <motion.div
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      ref={ref}
      className="container mx-auto py-12 px-4"
    >
      <div className="flex flex-col md:flex-row">
        <FilterSidebar />
        <FeaturedCollection />
      </div>
    </motion.div>
  );
};

export default Index;
