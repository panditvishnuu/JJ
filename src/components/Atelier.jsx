import { images } from "../../public/constants/images";
import React, { useEffect } from "react";
import { motion, useScroll, useSpring, animate } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Collection from "./Collection";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const scaleUp = {
  hover: { scale: 1.05, transition: { duration: 0.3 } },
  tap: { scale: 0.95 },
};

const Atelier = () => {
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

  // Intersection Observer for hero section
  const [heroRef, heroInView] = useInView({ threshold: 0.1 });

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-amber-500 z-50"
        style={{ scaleX }}
      />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <motion.img
            src={images.Image51510}
            alt="Bespoke collection background"
            className="w-full h-full object-cover object-center filter contrast-125"
            loading="lazy"
            initial={{ scale: 1.1 }}
            animate={heroInView ? { scale: 1 } : {}}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <motion.div
          className="relative z-10 text-center text-white max-w-4xl px-4 space-y-8"
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
          variants={fadeIn}
        >
          <motion.h2
            className="text-lg md:text-6xl font-semibold uppercase tracking-widest text-shadow"
            variants={fadeIn}
          >
            Bespoke collection of <br /> JJ Atelier
          </motion.h2>
        </motion.div>
      </section>

      {/* Collection Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        transition={{ duration: 0.6 }}
        className="py-16 px-4"
      >
        <Collection />
      </motion.section>
    </>
  );
};

export default Atelier;
