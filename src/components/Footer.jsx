import { motion } from "framer-motion";
import { Heart, ArrowUp, Github, Linkedin, Mail, SparklesIcon } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative py-8 sm:py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 border-t border-gray-200 dark:border-gray-700"
    >
      {/* Scroll to top button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1, y: -4 }}
        whileTap={{ scale: 0.9 }}
        className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 border-2 border-purple-200 dark:border-purple-800 rounded-full p-2.5 shadow-lg hover:shadow-purple-500/20 transition-all duration-300 group"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-4 h-4 text-purple-600 dark:text-purple-400 group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors" />
      </motion.button>

      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 text-sm text-gray-700 dark:text-gray-400">
          {/* Left Section - Brand */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center text-white font-bold text-xs shadow-lg shadow-purple-500/25">
              M
            </div>
            <div>
              <p className="font-semibold text-gray-900 dark:text-white">
                Mohan Kumar
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-500">
                Java Full Stack Developer
              </p>
            </div>
          </motion.div>

          {/* Middle Section - Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 sm:gap-6"
          >
            {["Home", "About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors relative group text-xs sm:text-sm font-medium"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </motion.div>

          {/* Right Section - Social Icons */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
            className="flex gap-2"
          >
            <a
              href="https://github.com/mohankumaronly"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-900/30 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 hover:scale-110 hover:shadow-lg"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/mohan-kumar-3151a1308"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-900/30 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 hover:scale-110 hover:shadow-lg"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:mohankumaronly81@gmail.com"
              className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-900/30 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 hover:scale-110 hover:shadow-lg"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-200 dark:border-gray-700"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500 dark:text-gray-500">
            <div className="flex items-center gap-1.5">
              <span>© {currentYear}</span>
              <span className="font-medium text-gray-700 dark:text-gray-300">Mohan Kumar</span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center gap-1">
                Made with <Heart className="w-3 h-3 text-red-500 fill-red-500 animate-pulse" /> 
                for the dev community
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5">
                <SparklesIcon className="w-3 h-3 text-purple-500" />
                Built with
              </span>
              <span className="flex gap-2">
                <span className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 font-medium">
                  React
                </span>
                <span className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 font-medium">
                  Tailwind
                </span>
                <span className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 font-medium">
                  Framer Motion
                </span>
              </span>
            </div>
          </div>

          {/* Tech stack tags */}
          <div className="flex flex-wrap justify-center gap-1.5 mt-3">
            {["Java", "Spring Boot", "React", "PostgreSQL", "Tailwind CSS"].map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 text-[10px] font-medium bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 rounded-full border border-purple-100 dark:border-purple-800"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;