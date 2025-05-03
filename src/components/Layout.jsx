import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { images } from "../../public/constants/images";

const staggerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Index = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <motion.div
      className="min-h-screen bg-white py-0"
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={staggerVariants}
    >
      <div className="container mx-auto px-4 lg:px-20 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Contact Information */}
          <div className="flex flex-col justify-center space-y-12 lg:space-y-20 pl-0 lg:pl-8">
            {[
              [
                "DISCOVER US",
                "Flick is here to help you; Our experts are available to answer any questions you might have. We’ve got the answers.",
              ],
              [
                "VISIT US",
                "Office no. G-02. Building 1, Ground Floor. Dubai Media City – Dubai",
              ],
            ].map(([title, text], index) => (
              <motion.div
                key={title}
                className="space-y-4"
                variants={itemVariants}
              >
                <h2 className="text-3xl lg:text-4xl font-light tracking-wide text-gray-800">
                  {title}
                </h2>
                <p className="text-gray-600 font-light leading-relaxed underline">
                  {text}
                </p>
              </motion.div>
            ))}

            <motion.div className="space-y-4" variants={itemVariants}>
              <h2 className="text-3xl lg:text-4xl font-light tracking-wide text-gray-800">
                EMAIL US
              </h2>
              <motion.a
                href="mailto:flick@flick.com"
                className="text-gray-600 hover:text-gray-900 font-light underline"
                whileHover={{ x: 5 }}
              >
                flick@flick.com
              </motion.a>
            </motion.div>

            <motion.div className="space-y-4" variants={itemVariants}>
              <h2 className="text-3xl lg:text-4xl font-light tracking-wide text-gray-800">
                CALL US
              </h2>
              <div className="space-y-2">
                {["+971-4-576-6770", "+971-55-983-7007"].map((number) => (
                  <motion.p key={number} whileHover={{ x: 5 }}>
                    <a
                      href={`tel:${number}`}
                      className="text-gray-600 hover:text-gray-900 font-semibold underline"
                    >
                      {number}
                    </a>
                  </motion.p>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Image Gallery */}
          <motion.div
            className="relative h-[600px] lg:h-auto"
            variants={staggerVariants}
          >
            <motion.div
              className="absolute right-0 top-0 w-3/4 lg:w-1/2"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <motion.img
                src={images.Image51521}
                alt="Fashion model"
                className="w-full h-auto object-cover rounded-sm shadow-xl"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring" }}
                loading="lazy"
              />
            </motion.div>

            <motion.div
              className="absolute left-0 top-1/4 w-3/4 lg:w-1/2 mt-20 lg:mt-28"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <motion.img
                src={images.Image51322}
                alt="Fashion models"
                className="w-full h-auto object-cover rounded-sm shadow-xl"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring" }}
                loading="lazy"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Index;
