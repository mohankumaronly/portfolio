import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { CodeBracketIcon, ServerIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";

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

      <div className="max-w-5xl mx-auto grid lg:grid-cols-5 gap-8 items-center relative z-10">
        {/* Left Column - Text Content (spans 3 columns) */}
        <div className="lg:col-span-3 text-center lg:text-left">
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

        {/* Right Column - Tech Stack Cards (spans 2 columns) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-2 order-1 lg:order-2"
        >
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                icon: CodeBracketIcon,
                label: "Frontend",
                tech: "React, Tailwind",
                color: "from-blue-500 to-cyan-400",
                bgColor: "bg-blue-50 dark:bg-blue-900/20",
                iconColor: "text-blue-600 dark:text-blue-400"
              },
              {
                icon: ServerIcon,
                label: "Backend",
                tech: "Spring Boot, Java",
                color: "from-green-500 to-emerald-400",
                bgColor: "bg-green-50 dark:bg-green-900/20",
                iconColor: "text-green-600 dark:text-green-400"
              },
              {
                icon: ShieldCheckIcon,
                label: "Security",
                tech: "JWT, Spring Security",
                color: "from-purple-500 to-pink-400",
                bgColor: "bg-purple-50 dark:bg-purple-900/20",
                iconColor: "text-purple-600 dark:text-purple-400"
              },
              {
                icon: CodeBracketIcon,
                label: "Database",
                tech: "PostgreSQL, Hibernate",
                color: "from-yellow-500 to-orange-400",
                bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
                iconColor: "text-yellow-600 dark:text-yellow-400"
              },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`${item.bgColor} rounded-2xl p-5 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all duration-300 group`}
              >
                <div className={`w-12 h-12 rounded-xl ${item.bgColor} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className={`w-6 h-6 ${item.iconColor}`} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {item.label}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {item.tech}
                </p>
                <div className={`mt-3 w-12 h-0.5 bg-gradient-to-r ${item.color} rounded-full group-hover:w-20 transition-all duration-300`}></div>
              </motion.div>
            ))}
          </div>

          {/* Coding Stats Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-4 text-center"
          >
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white dark:bg-gray-800 rounded-full border border-gray-200 dark:border-gray-700 shadow-sm">
              <span className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                Available for work
              </span>
              <span className="w-px h-4 bg-gray-300 dark:bg-gray-600"></span>
              <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                💻 3+ projects
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;