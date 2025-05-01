import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { images } from "../../public/constants/images";
import ContactForm from "./ContactForm";
import Index from "./Layout";

const Contact = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
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
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>

        <motion.div 
          className="relative text-center text-white max-w-4xl px-4 space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-xl md:text-6xl font-semibold uppercase tracking-widest  text-gray-200">
            We are just a Text Away
          </h2>
        </motion.div>
      </motion.section>

      <motion.div 
        className="py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl text-center mb-8 ">
          We are waiting on the Next Step.....
        </h2>
      </motion.div>

      <Index />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      >
        <ContactForm />
      </motion.div>
    </motion.div>
  );
};

export default Contact;