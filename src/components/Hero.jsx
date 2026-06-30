import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 dark:bg-blue-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Column - Text Content */}
        <div className="text-center lg:text-left order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-wider text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/30 rounded-full">
              OPEN TO OPPORTUNITIES
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight"
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Mohan
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-3 text-xl sm:text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300"
          >
            Java Full Stack Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-4 text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed max-w-lg mx-auto lg:mx-0"
          >
            I design and develop production-ready full-stack applications using 
            Spring Boot and React, focusing on secure authentication, scalable 
            backend systems, and clean architecture.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <a
              href="#projects"
              className="group inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
            >
              View Projects
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>

            <a
              href="/pdf/Mohan_resume.pdf"
              download="Mohan_Resume.pdf"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 font-medium rounded-lg hover:border-purple-600 dark:hover:border-purple-400 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300"
            >
              Download CV
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-8 flex gap-4 justify-center lg:justify-start"
          >
            <a
              href="#"
              className="p-2.5 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors rounded-full hover:bg-purple-50 dark:hover:bg-purple-900/20"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="#"
              className="p-2.5 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors rounded-full hover:bg-purple-50 dark:hover:bg-purple-900/20"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="#"
              className="p-2.5 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors rounded-full hover:bg-purple-50 dark:hover:bg-purple-900/20"
              aria-label="Twitter"
            >
              <FaTwitter size={24} />
            </a>
          </motion.div>
        </div>

        {/* Right Column - Avatar/Profile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="order-1 lg:order-2 flex justify-center"
        >
          <div className="relative">
            {/* Outer ring */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur-2xl opacity-30 animate-pulse"></div>
            
            {/* Profile circle */}
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 p-1 shadow-2xl">
              <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center overflow-hidden">
                {/* Placeholder avatar - replace with your image */}
                <div className="w-full h-full bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 flex items-center justify-center">
                  <span className="text-7xl sm:text-8xl font-bold text-gray-800 dark:text-white">
                    M
                  </span>
                </div>
              </div>
            </div>

            {/* Floating tech badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 px-3 py-1.5 rounded-full shadow-lg text-xs font-semibold text-purple-600 dark:text-purple-400 border border-gray-200 dark:border-gray-700"
            >
              Spring Boot
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute -bottom-2 -left-2 bg-white dark:bg-gray-800 px-3 py-1.5 rounded-full shadow-lg text-xs font-semibold text-blue-600 dark:text-blue-400 border border-gray-200 dark:border-gray-700"
            >
              React
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute top-1/2 -left-6 transform -translate-y-1/2 bg-white dark:bg-gray-800 px-3 py-1.5 rounded-full shadow-lg text-xs font-semibold text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
            >
              Java
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;  