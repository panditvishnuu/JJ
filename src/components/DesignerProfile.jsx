import { images } from "../../public/constants/images";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const DesignerProfile = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <motion.div
      className="max-w-7xl mx-auto py-16 lg:py-24"
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 px-4 lg:px-8">
        {/* Designer Image */}
        <motion.div
          className="w-full flex justify-center lg:justify-end"
          variants={fadeIn}
        >
          <motion.img
            src={images.Image}
            alt="Jateen and Jasmeet"
            className="w-[90%] h-[90%] grayscale hover:grayscale-0 transition-all duration-700 cursor-pointer rounded-sm shadow-xl"
            loading="lazy"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </motion.div>

        {/* Designer Information */}
        <motion.div
          className="flex flex-col justify-center items-start lg:pl-10"
          variants={{
            visible: {
              transition: { staggerChildren: 0.2, delayChildren: 0.3 },
            },
            hidden: {},
          }}
        >
          <div className="w-full text-center lg:text-left space-y-8">
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-1 tracking-wide font-light uppercase"
              variants={fadeIn}
            >
              THE DESIGNERS:
            </motion.h2>

            <motion.h1
              className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-10 tracking-wide"
              variants={fadeIn}
            >
              JATEEN & JASMEET
            </motion.h1>

            <div className="space-y-6">
              <motion.p
                className="font-cormorant text-base sm:text-lg md:text-xl leading-relaxed text-center lg:text-left"
                variants={fadeIn}
              >
                Jateen and Jasmeet, the creative minds behind the brand, bring a
                visionary approach to luxury fashion. With a deep-rooted passion
                for design and an unwavering commitment to craftsmanship, they
                redefine prêt couture with silhouettes that exude
                sophistication, modernity, and timeless appeal.
              </motion.p>

              <motion.p
                className="font-cormorant text-base sm:text-lg md:text-xl leading-relaxed text-center lg:text-left"
                variants={fadeIn}
              >
                Drawing from years of experience and an innate understanding of
                fabric, drape, and detailing, Jateen and Jasmeet create pieces
                that blend traditional artistry with contemporary sensibilities.
                Their design philosophy is centered on exclusivity, precision,
                and an effortless sense of style, making every creation a
                masterpiece tailored for the discerning elite.
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default DesignerProfile;
