import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-primary dark:bg-primary-dark px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl text-center px-4 sm:px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight"
        >
          Hi, I'm Mohan
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-3 sm:mt-4 text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-300"
        >
          Java Full Stack Developer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto"
        >
          I design and develop production-ready full-stack applications using Spring Boot and React, focusing on secure authentication, scalable backend systems, and clean architecture.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4"
        >
          <a
            href="#projects"
            className="w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 rounded-md bg-black text-white dark:bg-white dark:text-black font-medium hover:bg-gray-800 transition text-sm sm:text-base"
          >
            View Projects
          </a>

          <a
            href="/pdf/Mohan_resume.pdf"
            download="Mohan_Resume.pdf"
            className="w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 rounded-md border border-gray-400 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition text-sm sm:text-base"
          >
            Download CV
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 rounded-md border border-transparent text-gray-700 dark:text-gray-200 hover:text-gray-900 hover:underline transition text-sm sm:text-base"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;