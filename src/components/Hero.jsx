import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaJava, FaReact } from "react-icons/fa";
import { SiSpringboot, SiPostgresql } from "react-icons/si";
import { CodeBracketIcon, ServerIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-12 sm:py-16">
        
        {/* Left Column - Main Content */}
        <div className="order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
                Available for opportunities
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight"
          >
            Hi, I'm{" "}
            <span className="text-blue-600 dark:text-blue-400">
              Mohan Kumar
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-3 text-xl sm:text-2xl font-medium text-gray-700 dark:text-gray-300"
          >
            Java Full Stack Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-4 text-base text-gray-600 dark:text-gray-400 leading-relaxed max-w-md"
          >
            Building secure, scalable web applications with Spring Boot and React. 
            Passionate about clean code and great user experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#projects"
              className="inline-flex items-center px-6 py-3 bg-blue-600 dark:bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              Explore My Work
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>

            <a
              href="/pdf/Mohan_resume.pdf"
              download="Mohan_Resume.pdf"
              className="inline-flex items-center px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
            >
              Download CV
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="mt-8 flex gap-4"
          >
            <a
              href="https://github.com/mohankumaronly"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="GitHub"
            >
              <FaGithub size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/mohan-kumar-3151a1308"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={22} />
            </a>
            <a
              href="mailto:mohankumaronly81@gmail.com"
              className="p-2.5 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Email"
            >
              <FaEnvelope size={22} />
            </a>
          </motion.div>
        </div>

        {/* Right Column - Tech Cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="order-1 lg:order-2"
        >
          <div className="grid grid-cols-2 gap-4">
            {/* Main Tech Card - Java */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              whileHover={{ y: -6 }}
              className="col-span-2 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-800/50 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  <FaJava className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Java Expert</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Spring Boot • Hibernate • JPA</p>
                </div>
              </div>
            </motion.div>

            {/* React Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              whileHover={{ y: -6 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-cyan-50 dark:bg-cyan-900/20 flex items-center justify-center mb-3">
                <FaReact className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
              </div>
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white">React</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Frontend Development</p>
            </motion.div>

            {/* Spring Boot Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.4 }}
              whileHover={{ y: -6 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center mb-3">
                <SiSpringboot className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white">Spring Boot</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Backend APIs</p>
            </motion.div>

            {/* PostgreSQL Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              whileHover={{ y: -6 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center mb-3">
                <SiPostgresql className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white">PostgreSQL</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Database</p>
            </motion.div>

            {/* Security Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.4 }}
              whileHover={{ y: -6 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center mb-3">
                <ShieldCheckIcon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white">Security</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">JWT • Spring Security</p>
            </motion.div>

            {/* Tech Stack Tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="col-span-2 flex items-center justify-center gap-2 px-4 py-2 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700"
            >
              <CodeBracketIcon className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              <span className="text-xs text-gray-600 dark:text-gray-400">Full Stack Development</span>
              <span className="w-px h-4 bg-gray-300 dark:bg-gray-600"></span>
              <span className="text-xs font-medium text-gray-700 dark:text-gray-300">5+ Projects</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;