import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send, MapPin, Clock } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
      
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-primary dark:bg-primary-dark"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white"
          >
            Get In Touch
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-700 dark:text-gray-400 max-w-2xl mx-auto px-4"
          >
            Interested in working together or discussing opportunities?  
            Feel free to reach out through any of these channels.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-2xl mx-auto"
        >
          <div className="flex items-center gap-3 p-3 sm:p-4 bg-gray-100 dark:bg-black/40 rounded-lg border border-gray-300 dark:border-gray-800">
            <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700 dark:text-gray-300" />
            <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">Available for remote work</span>
          </div>
          <div className="flex items-center gap-3 p-3 sm:p-4 bg-gray-100 dark:bg-black/40 rounded-lg border border-gray-300 dark:border-gray-800">
            <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700 dark:text-gray-300" />
            <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">Response within 24 hours</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:mohankumaronly81@gmail.com"
            className="flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-md bg-black text-white dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 transition text-sm sm:text-base"
          >
            <Mail size={16} className="sm:w-[18px] sm:h-[18px]" />
            <span>Email Me</span>
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/mohankumaronly"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-md border border-gray-500 dark:border-gray-600 text-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 transition text-sm sm:text-base"
          >
            <Github size={16} className="sm:w-[18px] sm:h-[18px]" />
            <span>GitHub</span>
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://www.linkedin.com/in/mohan-kumar-3151a1308"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-md border border-gray-500 dark:border-gray-600 text-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 transition text-sm sm:text-base"
          >
            <Linkedin size={16} className="sm:w-[18px] sm:h-[18px]" />
            <span>LinkedIn</span>
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-14 max-w-xl mx-auto px-4"
        >
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white text-center mb-4 sm:mb-6">
            Or send a message directly
          </h3>

          <form onSubmit={handleSubmit} className="grid gap-3 sm:gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full p-2.5 sm:p-3 rounded-md border border-gray-400 dark:border-gray-700 bg-transparent text-gray-900 dark:text-white placeholder-gray-600 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white text-sm sm:text-base"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full p-2.5 sm:p-3 rounded-md border border-gray-400 dark:border-gray-700 bg-transparent text-gray-900 dark:text-white placeholder-gray-600 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white text-sm sm:text-base"
              />
            </div>
            
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder="Your Message"
              required
              className="w-full p-2.5 sm:p-3 rounded-md border border-gray-400 dark:border-gray-700 bg-transparent text-gray-900 dark:text-white placeholder-gray-600 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white text-sm sm:text-base"
            />

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isSubmitting}
              className={`mt-2 w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 rounded-md bg-black text-white dark:bg-white dark:text-black font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition flex items-center justify-center gap-2 mx-auto text-sm sm:text-base ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white dark:border-black border-t-transparent rounded-full animate-spin" />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <Send size={16} className="sm:w-[18px] sm:h-[18px]" />
                  <span>Send Message</span>
                </>
              )}
            </motion.button>

            {submitStatus === "success" && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-green-600 dark:text-green-400 text-sm text-center mt-2 font-medium"
              >
                ✓ Message sent successfully! I'll get back to you soon.
              </motion.p>
            )}
          </form>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 text-xs sm:text-sm text-gray-600 dark:text-gray-500 text-center"
        >
          © {new Date().getFullYear()} Mohan. All rights reserved.
        </motion.p>
      </div>
    </section>
  );
};

export default Contact;