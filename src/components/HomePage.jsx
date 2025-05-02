import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useScroll, useSpring, animate } from "framer-motion";
import { images } from "../../public/constants/images";
import { Link } from "react-router-dom";
import FeaturedCollection from "./FeaturedCard";
import DesignerProfile from "./DesignerProfile";
import ContactForm from "./ContactForm";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const scaleUp = {
  hover: { scale: 1.05, transition: { duration: 0.3 } },
  tap: { scale: 0.95 },
};

const HomePage = () => {
  // Smooth scroll setup
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => (document.documentElement.style.scrollBehavior = "auto");
  }, []);

  // Scroll progress animation
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Intersection Observer hooks
  const [firstSectionRef, firstSectionInView] = useInView({ threshold: 0.1 });
  const [secondSectionRef, secondSectionInView] = useInView({ threshold: 0.1 });

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-amber-500 z-50"
        style={{ scaleX }}
      />

      {/* First Hero Section */}
      <section
        ref={firstSectionRef}
        className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <motion.img
            src={images.Image51686}
            alt="Background"
            className="w-full h-full object-cover object-center contrast-110"
            loading="lazy"
            initial={{ scale: 1.1 }}
            animate={firstSectionInView ? { scale: 1 } : {}}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <motion.div
          className="relative z-10 text-center text-white max-w-4xl px-4 space-y-4"
          initial="hidden"
          animate={firstSectionInView ? "visible" : "hidden"}
          variants={fadeIn}
        >
          <h2 className="text-lg md:text-2xl uppercase tracking-widest text-shadow">
            WELCOME TO THE
          </h2>
          <motion.h2
            className="text-4xl md:text-6xl font-bold uppercase tracking-widest text-shadow"
            variants={fadeIn}
          >
            WORLD OF JJ
          </motion.h2>

          <motion.div
            className="border-2 border-white text-center text-xl md:text-2xl py-3 hover:bg-white/10 transition-colors"
            whileHover="hover"
            whileTap="tap"
            variants={scaleUp}
          >
            <Link to="#" className="inline-block px-8">
              Enter the world of JJ
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Quote Section */}
      <motion.div
        className="py-16 px-4 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <h1 className="text-2xl md:text-4xl font-cormorant font-medium leading-tight tracking-widest mb-4">
          "WHERE PRESENCE IS LEFT, NOT SEEN"
        </h1>
        <h3 className="text-xl md:text-2xl font-medium uppercase tracking-wider">
          Designs That Remember!
        </h3>
      </motion.div>

      {/* Second Hero Section */}
      <section
        ref={secondSectionRef}
        className="relative w-full h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <motion.img
            src={images.Image51788}
            alt="Background"
            className="w-full h-full object-cover object-center contrast-125"
            loading="lazy"
            initial={{ scale: 1.1 }}
            animate={secondSectionInView ? { scale: 1 } : {}}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <motion.div
          className="relative z-10 text-center text-white max-w-4xl px-4 space-y-8"
          initial="hidden"
          animate={secondSectionInView ? "visible" : "hidden"}
          variants={fadeIn}
        >
          <h2 className="text-2xl md:text-4xl font-bold uppercase tracking-widest text-shadow">
            A Sacred Space Of Creation.
          </h2>

          <motion.div
            className="mx-auto border-2 border-white text-center text-xl md:text-2xl py-3 hover:bg-white/10 transition-colors w-2/3"
            whileHover="hover"
            whileTap="tap"
            variants={scaleUp}
          >
            <Link to="#" className="inline-block px-8 w-full">
              Enter the world of JJ
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Collection */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        transition={{ duration: 0.6 }}
      >
        <FeaturedCollection />
      </motion.section>

      {/* Founder's Note */}
      <div className="py-16 px-4 text-center">
        <h2 className="text-4xl md:text-6xl font-cormorant mb-8">
          Founder’s Note
        </h2>
        <DesignerProfile />
      </div>

      {/* Contact Form */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        transition={{ duration: 0.6 }}
        className="py-16 px-4"
      >
        <ContactForm />
      </motion.section>
    </>
  );
};

export default HomePage;
