import { CONTACT } from "../constants";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="border-neutral-900 pb-20 px-4 pt-16">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl mb-4 bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent"
          >
            Get In Touch
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed"
          >
            Ready to bring your ideas to life? Let's discuss how we can work
            together to create something extraordinary.
          </motion.p>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          {/* Email Card */}
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="group bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-all duration-300"
          >
            <div className="flex flex-col items-center text-center">
              <div className="p-3 bg-blue-500/10 rounded-full mb-4 group-hover:bg-blue-500/20 transition-colors duration-300">
                <Mail className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Email</h3>
              <a
                href={`mailto:${CONTACT.email}`}
                className="text-neutral-400 hover:text-blue-400 transition-colors duration-300 break-all"
              >
                {CONTACT.email}
              </a>
            </div>
          </motion.div>

          {/* Phone Card */}
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="group bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-all duration-300"
          >
            <div className="flex flex-col items-center text-center">
              <div className="p-3 bg-green-500/10 rounded-full mb-4 group-hover:bg-green-500/20 transition-colors duration-300">
                <Phone className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Phone</h3>
              <a
                href={`tel:${CONTACT.phoneNo}`}
                className="text-neutral-400 hover:text-green-400 transition-colors duration-300"
              >
                {CONTACT.phoneNo}
              </a>
            </div>
          </motion.div>

          {/* Location Card */}
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="group bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-all duration-300"
          >
            <div className="flex flex-col items-center text-center">
              <div className="p-3 bg-purple-500/10 rounded-full mb-4 group-hover:bg-purple-500/20 transition-colors duration-300">
                <MapPin className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">
                Location
              </h3>
              <p className="text-neutral-400">{CONTACT.address}</p>
            </div>
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.a
            href={`https://wa.me/2347056502162?`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            Let's Start a Conversation
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
