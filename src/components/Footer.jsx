import { motion } from "framer-motion";
import { Heart, ArrowUp, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative py-6 sm:py-8 px-4 sm:px-6 lg:px-8 bg-primary dark:bg-black border-t border-gray-300 dark:border-gray-800"
    >
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gray-100 dark:bg-gray-800 border border-gray-400 dark:border-gray-700 rounded-full p-2 shadow-md hover:shadow-lg transition-shadow"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-4 h-4 text-gray-800 dark:text-gray-300" />
      </motion.button>

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-700 dark:text-gray-400">

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="flex items-center gap-1.5 order-2 sm:order-1"
          >
            <span>© {new Date().getFullYear()}</span>
            <span className="font-medium text-gray-900 dark:text-white">Mohan</span>
            <span className="flex items-center gap-1">
              <span>with</span>
              <Heart className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-red-500 fill-red-500" />
              <span>for dev community</span>
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="flex gap-4 sm:gap-6 order-1 sm:order-2"
          >
            {["Home", "Projects", "Skills", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors relative group font-medium"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 dark:bg-white transition-all group-hover:w-full"></span>
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="flex justify-center gap-4 mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-300 dark:border-gray-800"
        >
          <a
            href="https://github.com/mohankumaronly"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/mohan-kumar-3151a1308"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
          <a
            href="mailto:mohankumaronly81@gmail.com"
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white transition-colors"
            aria-label="Email"
          >
            <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center text-xs text-gray-600 dark:text-gray-500 mt-4"
        >
          Built with <span className="font-medium text-gray-800 dark:text-gray-400">React</span>,
          <span className="font-medium text-gray-800 dark:text-gray-400"> Tailwind CSS</span>, and
          <span className="font-medium text-gray-800 dark:text-gray-400"> Framer Motion</span>
        </motion.p>
      </div>
    </motion.footer>
  );
};

export default Footer;