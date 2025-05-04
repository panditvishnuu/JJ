import { motion, useScroll, useSpring } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { images } from "../../public/constants/images";
import ContactForm from "./ContactForm";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const imageVariants = {
  hover: { scale: 1.02 },
  tap: { scale: 0.98 },
};

const About = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const SectionHeader = ({ text }) => (
    <motion.h2
      className="text-4xl md:text-5xl lg:text-6xl text-center mb-8 mt-8"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.3 }}
    >
      {text}
    </motion.h2>
  );

  const ContentSection = ({ image, title, text, reverse = true}) => {
    const [sectionRef, sectionInView] = useInView({
      threshold: 0.1,
      triggerOnce: true,
    });

    return (
      <motion.div
        ref={sectionRef}
        className="max-w-7xl mx-auto py-16"
        initial="hidden"
        animate={sectionInView ? "visible" : "hidden"}
      >
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 px-4 lg:px-8 ${
            reverse ? "md:flex-row-reverse" : ""
          }`}
        >
          <motion.div
            className="w-full flex justify-center"
            variants={{
              hidden: { x: reverse ? 50 : -50, opacity: 0 },
              visible: { x: 0, opacity: 1 },
            }}
          >
            <motion.img
              src={image}
              alt={title}
              className="w-[90%] h-[90%] rounded-sm shadow-xl"
              loading="lazy"
              variants={imageVariants}
              whileHover="hover"
              whileTap="tap"
            />
          </motion.div>

          <motion.div
            className="flex flex-col justify-center items-start lg:pl-10"
            variants={{
              hidden: { x: reverse ? -50 : 50, opacity: 0 },
              visible: { x: 0, opacity: 1 },
            }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 tracking-wide">
              {title}
            </h2>
            <p className="font-cormorant text-lg md:text-xl leading-relaxed">
              {text}
            </p>
          </motion.div>
        </div>
      </motion.div>
    );
  };

  const FullWidthSection = ({ image, title }) => {
    const [sectionRef, sectionInView] = useInView({
      threshold: 0.2,
      triggerOnce: true,
    });

    return (
      <motion.section
        ref={sectionRef}
        className="relative w-full h-[40vh] flex items-center justify-center my-12 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={sectionInView ? { opacity: 1 } : {}}
      >
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ scale: 1.1 }}
          animate={sectionInView ? { scale: 1 } : {}}
          transition={{ duration: 1.2 }}
        >
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>

        <motion.h1
          className="text-4xl md:text-6xl font-semibold font-cormorant text-white relative z-10"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {title}
        </motion.h1>
      </motion.section>
    );
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-amber-500 z-50 origin-center"
        style={{ scaleX }}
      />
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="overflow-hidden"
      >
        {/* Hero Section */}
        <motion.section
          className="relative w-full h-[80vh] flex items-center justify-center"
          variants={fadeIn}
        >
          <motion.div
            className="absolute inset-0 z-0"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
          >
            <img
              src={images.Image51252}
              alt="About hero"
              className="w-full h-full object-cover object-center filter contrast-125"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/40" />
          </motion.div>

          <motion.div
            className="relative z-10 text-center text-white max-w-4xl px-4 space-y-8"
            variants={fadeIn}
          >
            <h2 className="text-xl md:text-5xl font-semibold uppercase tracking-widest  text-gray-200">
              The Story Behind <br /> our{" "}
              <span className="text-5xl md:text-6xl">Masterpieces</span>
            </h2>
          </motion.div>
        </motion.section>

        <SectionHeader text="We Draft Emotions and Stitch Memories." />

        <ContentSection
          image={images.Image51538}
          title="Where we Started From"
          text="Where we Started From The Rich Black Sherwani Set exudes timeless sophistication, adorned with intricate resham threadwork and antique gold metallic embroidery. Enhanced with sequin work, beads, and detailed kasab embroidery, this sherwani offers a perfect blend of classic elegance and fine craftsmanship. Where we Started From The Rich Black Sherwani Set exudes timeless sophistication, adorned with intricate resham threadwork and antique gold metallic embroidery. Enhanced with sequin work, beads, and detailed kasab embroidery, this sherwani offers a perfect blend of classic elegance and fine craftsmanship. Where we Started From The Rich Black Sherwani Set exudes timeless sophistication, adorned with intricate resham threadwork and antique gold metallic embroidery."
          
        />

        <ContentSection
          image={images.Image}
          title="From The Founder’s Pen"
          text="Where we Started From The Rich Black Sherwani Set exudes timeless sophistication, adorned with intricate resham threadwork and antique gold metallic embroidery. Enhanced with sequin work, beads, and detailed kasab embroidery, this sherwani offers a perfect blend of classic elegance and fine craftsmanship. Where we Started From The Rich Black Sherwani Set exudes timeless sophistication, adorned with intricate resham threadwork and antique gold metallic embroidery. Enhanced with sequin work, beads, and detailed kasab embroidery, this sherwani offers a perfect blend of classic elegance and fine craftsmanship. Where we Started From The Rich Black Sherwani Set exudes timeless sophistication, adorned with intricate resham threadwork and antique gold metallic embroidery."
          
        />

        <div>
          <h2 className="text-4xl text-center text-gray-400">
            What makes the <br />
            <span className="text-6xl text-black"> Difference ?</span>
          </h2>
        </div>

        <FullWidthSection image={images.Image51788} title="Trust" />
        <FullWidthSection image={images.Image51686} title="Design" />
        <FullWidthSection image={images.Image51781} title="Story" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          className="mb-10 md:mb-0"
        >
          <ContactForm />
        </motion.div>
      </motion.div>
    </>
  );
};

export default About;
