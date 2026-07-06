import { motion } from "framer-motion";
import { 
  Mail, 
  Github, 
  Linkedin, 
  Send, 
  MapPin, 
  Clock,
  Phone,
  MessageCircle
} from "lucide-react";
import { useState } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const initializeEmailJS = () => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (publicKey) {
      emailjs.init(publicKey);
    } else {
      console.error("EmailJS public key is not configured in environment variables");
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (errorMessage) setErrorMessage("");
    if (submitStatus) setSubmitStatus(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage("Please fill in all fields");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage("");

    try {
      initializeEmailJS();

      const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

      if (!SERVICE_ID || !TEMPLATE_ID) {
        throw new Error("EmailJS service or template ID is not configured");
      }

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: "Mohan",
        reply_to: formData.email,
      };

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams);
      
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setErrorMessage("");
      
      setTimeout(() => setSubmitStatus(null), 5000);
      
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
      setErrorMessage(
        error.text || "Failed to send message. Please try again later."
      );
      
      setTimeout(() => {
        setSubmitStatus(null);
        setErrorMessage("");
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 rounded-full">
            CONTACT
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
            Get In <span className="text-blue-600 dark:text-blue-400">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-blue-600 dark:bg-blue-400 rounded-full mx-auto mt-3"></div>
          <p className="mt-4 text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Interested in working together or discussing opportunities?  
            Feel free to reach out through any of these channels.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-10"
        >
          {[
            {
              icon: Mail,
              label: "Email",
              value: "mohankumaronly81@gmail.com",
              href: "mailto:mohankumaronly81@gmail.com",
              iconColor: "text-blue-600 dark:text-blue-400",
              bgColor: "bg-blue-50 dark:bg-blue-900/20"
            },
            {
              icon: MapPin,
              label: "Location",
              value: "Available for Remote Work",
              href: null,
              iconColor: "text-emerald-600 dark:text-emerald-400",
              bgColor: "bg-emerald-50 dark:bg-emerald-900/20"
            },
            {
              icon: Clock,
              label: "Response Time",
              value: "Within 24 hours",
              href: null,
              iconColor: "text-purple-600 dark:text-purple-400",
              bgColor: "bg-purple-50 dark:bg-purple-900/20"
            }
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.08, duration: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className={`${item.bgColor} rounded-xl p-5 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300`}
            >
              <div className={`w-10 h-10 rounded-lg ${item.bgColor} flex items-center justify-center mb-3`}>
                <item.icon className={`w-5 h-5 ${item.iconColor}`} />
              </div>
              <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                {item.label}
              </h3>
              {item.href ? (
                <a
                  href={item.href}
                  className="text-sm sm:text-base text-gray-900 dark:text-white font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-sm sm:text-base text-gray-900 dark:text-white font-medium">
                  {item.value}
                </p>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Social Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="https://github.com/mohankumaronly"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition-all duration-300 shadow-sm text-sm font-medium"
          >
            <Github size={17} />
            GitHub
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="https://www.linkedin.com/in/mohan-kumar-3151a1308"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0A66C2] text-white hover:bg-[#0A66C2]/90 transition-all duration-300 shadow-sm text-sm font-medium"
          >
            <Linkedin size={17} />
            LinkedIn
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="mailto:mohankumaronly81@gmail.com"
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 shadow-sm text-sm font-medium"
          >
            <Mail size={17} />
            Email Me
          </motion.a>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 sm:p-8 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <MessageCircle className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
                Send a Message
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900/50 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-300 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900/50 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-300 text-sm"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Your Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900/50 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-300 resize-none text-sm"
                />
              </div>

              {/* Error Message */}
              {errorMessage && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-red-600 dark:text-red-400 text-sm bg-red-50 dark:bg-red-900/20 p-3 rounded-lg border border-red-200 dark:border-red-800"
                >
                  <span>⚠️</span>
                  <span>{errorMessage}</span>
                </motion.div>
              )}

              {/* Success Message */}
              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 text-sm bg-emerald-50 dark:bg-emerald-900/20 p-3 rounded-lg border border-emerald-200 dark:border-emerald-800"
                >
                  <span>✓</span>
                  <span>Message sent successfully! I'll get back to you soon.</span>
                </motion.div>
              )}

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-2.5 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-sm text-sm ${
                  isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          viewport={{ once: true }}
          className="mt-10 text-xs text-gray-500 dark:text-gray-500 text-center"
        >
          © {new Date().getFullYear()} Mohan. Crafted with ❤️ using React & Spring Boot
        </motion.p>
      </div>
    </section>
  );
};

export default Contact;