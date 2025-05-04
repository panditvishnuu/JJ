import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import FormInput from "./FormInput";
import FormTextarea from "./FormTextarea";
import SubmitButton from "./SubmitButton";
import { useState } from "react";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    secondName: "",
    collectionName: "",
    phoneNumber: "",
    description: "",
  });

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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to send message");

      toast({
        title: "Appointment Booked",
        description: "We'll be in touch shortly to confirm your appointment.",
      });

      setFormData({
        firstName: "",
        secondName: "",
        collectionName: "",
        phoneNumber: "",
        description: "",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="max-w-5xl mx-auto px-4 py-0 lg:py-16"
    >
      <motion.div className="text-center mb-10" variants={itemVariants}>
        <h2 className="text-gray-500 font-bold mb-2 text-xl tracking-wide">
          Explore Our Bespoke Collection
        </h2>
        <h1 className="text-4xl md:text-5xl font-normal mb-8">
          Book an Appointment
        </h1>
      </motion.div>

      <motion.form
        onSubmit={handleSubmit}
        className="space-y-6"
        variants={containerVariants}
      >
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
        >
          {[
            ["firstName", "First Name"],
            ["secondName", "Second Name"],
          ].map(([name, placeholder], idx) => (
            <motion.div key={name} variants={itemVariants}>
              <FormInput
                name={name}
                placeholder={placeholder}
                value={formData[name]}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, [name]: e.target.value }))
                }
                required
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
        >
          {[
            ["collectionName", "Collection Name"],
            ["phoneNumber", "Phone Number"],
          ].map(([name, placeholder], idx) => (
            <motion.div key={name} variants={itemVariants}>
              <FormInput
                name={name}
                placeholder={placeholder}
                type={name === "phoneNumber" ? "tel" : "text"}
                value={formData[name]}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, [name]: e.target.value }))
                }
                required={name === "phoneNumber"}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={itemVariants}>
          <FormTextarea
            name="description"
            placeholder="Description"
            rows={5}
            value={formData.description}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, description: e.target.value }))
            }
          />
        </motion.div>

        <motion.div
          className="flex justify-center mt-14"
          variants={itemVariants}
        >
          <button onClick={handleSubmit}>submit</button>
        </motion.div>
      </motion.form>
    </motion.div>
  );
};

export default ContactForm;
