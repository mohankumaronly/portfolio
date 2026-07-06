import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { 
  CodeBracketIcon, 
  ServerIcon, 
  ShieldCheckIcon, 
  CloudArrowUpIcon 
} from "@heroicons/react/24/outline";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-8 md:gap-12 items-center py-12 sm:py-16">
        
        {/* Left Column - Text Content */}
        <div className="lg:col-span-3 text-center lg:text-left order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 rounded-full">
              OPEN TO OPPORTUNITIES
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight"
          >
            Hi, I'm{" "}
            <span className="text-blue-600 dark:text-blue-400">
              Mohan
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-2 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-700 dark:text-gray-300"
          >
            Java Full Stack Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed max-w-lg mx-auto lg:mx-0"
          >
            I design and develop production-ready full-stack applications using 
            Spring Boot and React, focusing on secure authentication, scalable 
            backend systems, and clean architecture.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-6 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
          >
            <a
              href="#projects"
              className="group inline-flex items-center justify-center px-6 py-2.5 bg-blue-600 dark:bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              View Projects
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>

            <a
              href="/pdf/Mohan_resume.pdf"
              download="Mohan_Resume.pdf"
              className="inline-flex items-center justify-center px-6 py-2.5 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 font-medium rounded-lg hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
            >
              Download CV
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="mt-6 flex gap-3 justify-center lg:justify-start"
          >
            <a
              href="https://github.com/mohankumaronly"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20"
              aria-label="GitHub"
            >
              <FaGithub size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/mohan-kumar-3151a1308"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={22} />
            </a>
            <a
              href="mailto:mohankumaronly81@gmail.com"
              className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20"
              aria-label="Email"
            >
              <FaEnvelope size={22} />
            </a>
          </motion.div>
        </div>

        {/* Right Column - Tech Stack Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2 order-1 lg:order-2"
        >
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {[
              {
                icon: CodeBracketIcon,
                label: "Frontend",
                tech: "React, Tailwind",
                bgColor: "bg-blue-50 dark:bg-blue-900/20",
                iconColor: "text-blue-600 dark:text-blue-400",
                borderColor: "border-blue-200 dark:border-blue-800"
              },
              {
                icon: ServerIcon,
                label: "Backend",
                tech: "Spring Boot, Java",
                bgColor: "bg-emerald-50 dark:bg-emerald-900/20",
                iconColor: "text-emerald-600 dark:text-emerald-400",
                borderColor: "border-emerald-200 dark:border-emerald-800"
              },
              {
                icon: ShieldCheckIcon,
                label: "Security",
                tech: "JWT, Spring Security",
                bgColor: "bg-purple-50 dark:bg-purple-900/20",
                iconColor: "text-purple-600 dark:text-purple-400",
                borderColor: "border-purple-200 dark:border-purple-800"
              },
              {
                icon: CloudArrowUpIcon,
                label: "Database",
                tech: "PostgreSQL, Hibernate",
                bgColor: "bg-amber-50 dark:bg-amber-900/20",
                iconColor: "text-amber-600 dark:text-amber-400",
                borderColor: "border-amber-200 dark:border-amber-800"
              },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.08, duration: 0.4 }}
                whileHover={{ y: -4 }}
                className={`${item.bgColor} rounded-xl p-4 sm:p-5 border ${item.borderColor} shadow-sm hover:shadow-md transition-all duration-300`}
              >
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg ${item.bgColor} flex items-center justify-center mb-2 sm:mb-3`}>
                  <item.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${item.iconColor}`} />
                </div>
                <h3 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white">
                  {item.label}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-0.5">
                  {item.tech}
                </p>
                <div className={`mt-2 w-8 h-0.5 ${item.iconColor} rounded-full`}></div>
              </motion.div>
            ))}
          </div>

          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.4 }}
            className="mt-4 text-center"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white dark:bg-gray-800 rounded-full border border-gray-200 dark:border-gray-700 shadow-sm">
              <span className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                Available for work
              </span>
              <span className="w-px h-4 bg-gray-300 dark:bg-gray-600"></span>
              <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                💻 5+ projects
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;