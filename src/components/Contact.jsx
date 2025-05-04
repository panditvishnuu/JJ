import { motion, useScroll, useSpring } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { images } from "../../public/constants/images";
import ContactForm from "./ContactForm";
import Index from "./Layout";

const Contact = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-amber-500 z-50 origin-center"
        style={{ scaleX }}
      />
      <motion.div initial="hidden" animate={inView ? "visible" : "hidden"}>
        <motion.section
          className="relative w-full h-[80vh] flex items-center justify-center"
          ref={ref}
        >
          <motion.div
            className="absolute inset-0 z-0 filter contrast-125 overflow-hidden"
            initial={{ scale: 1.1 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ duration: 1.5 }}
          >
            <img
              src={images.Image51539}
              alt="Contact background"
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/15" />
          </motion.div>

          <motion.div
            className="relative text-center text-white max-w-4xl px-4 space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-xl md:text-6xl font-semibold tracking-wider  text-white">
              We are just a <br /> <span className="text-5xl">Text Away</span>
            </h2>
          </motion.div>
        </motion.section>

        <motion.div
          className="py-0 mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl text-center ">
            We are waiting on the <br />{" "}
            <span className="text-6xl">Next Step.....</span>
          </h2>
        </motion.div>

        <Index />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "0px 0px 0px 0px" }}
          className="mb-10 md:mb-0"
        >
          <ContactForm />
        </motion.div>
      </motion.div>
    </>
  );
};

export default Contact;
