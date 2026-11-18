import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaReact, FaRobot, FaLink } from "react-icons/fa";
import { CodeBracketIcon, CpuChipIcon, ServerStackIcon } from "@heroicons/react/24/outline";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 px-4 sm:px-6 lg:px-8 relative py-8 sm:py-0"
    >
      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-8 lg:gap-16 items-center py-8 sm:py-12 lg:py-16">
        
        {/* Left Column - Main Content */}
        <div className="order-1 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-3 lg:mb-4 justify-center lg:justify-start">
              <span className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
                Available for AI engineering roles
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight text-center lg:text-left"
          >
            Hi, I'm{" "}
            <span className="text-blue-600 dark:text-blue-400 block sm:inline">
              Mohan Kumar
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-2 lg:mt-3 text-lg sm:text-xl lg:text-2xl font-medium text-gray-700 dark:text-gray-300 text-center lg:text-left"
          >
            Agentic AI Full Stack Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-3 lg:mt-4 text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed max-w-md mx-auto lg:mx-0 text-center lg:text-left"
          >
            Engineering autonomous AI systems with agentic workflows, tool-calling LLMs, 
            and retrieval-augmented pipelines — paired with secure, scalable full-stack 
            architecture in Spring Boot and React.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-6 lg:mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
          >
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-6 py-2.5 lg:py-3 bg-blue-600 dark:bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-all duration-300 shadow-sm hover:shadow-md w-full sm:w-auto"
            >
              Explore AI Projects
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>

            <a
              href="/pdf/Mohan.pdf"
              download="Mohan.pdf"
              className="inline-flex items-center justify-center px-6 py-2.5 lg:py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 w-full sm:w-auto"
            >
              Download CV
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="mt-6 lg:mt-8 flex gap-4 justify-center lg:justify-start"
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
          className="order-2 lg:order-2"
        >
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {/* Main Tech Card - Agentic AI */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              whileHover={{ y: -6 }}
              className="col-span-2 bg-linear-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-800/50 rounded-xl p-4 sm:p-6 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center gap-3 sm:gap-4 justify-center sm:justify-start">
                <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center shrink-0">
                  <CpuChipIcon className="w-5 h-5 sm:w-7 sm:h-7 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-lg font-semibold text-gray-900 dark:text-white text-center sm:text-left">
                    Agentic AI Engineer
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 text-center sm:text-left">
                    LangChain • LangGraph • RAG • Tool Calling
                  </p>
                </div>
              </div>
            </motion.div>

            {/* LLM Integration Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              whileHover={{ y: -6 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-3 sm:p-5 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300 text-center sm:text-left"
            >
              <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center mb-2 sm:mb-3 mx-auto sm:mx-0">
                <FaRobot className="w-4 h-4 sm:w-6 sm:h-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h4 className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white">LLM Integration</h4>
              <p className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400 mt-0.5 sm:mt-1">Groq • Llama • GPT</p>
            </motion.div>

            {/* LangChain Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.4 }}
              whileHover={{ y: -6 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-3 sm:p-5 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300 text-center sm:text-left"
            >
              <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-lg bg-teal-50 dark:bg-teal-900/20 flex items-center justify-center mb-2 sm:mb-3 mx-auto sm:mx-0">
                <FaLink className="w-4 h-4 sm:w-6 sm:h-6 text-teal-600 dark:text-teal-400" />
              </div>
              <h4 className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white">LangChain</h4>
              <p className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400 mt-0.5 sm:mt-1">Agents • RAG • Chains</p>
            </motion.div>

            {/* Spring Boot Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              whileHover={{ y: -6 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-3 sm:p-5 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300 text-center sm:text-left"
            >
              <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center mb-2 sm:mb-3 mx-auto sm:mx-0">
                <ServerStackIcon className="w-4 h-4 sm:w-6 sm:h-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h4 className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white">Spring Boot</h4>
              <p className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400 mt-0.5 sm:mt-1">AI-Ready Backend APIs</p>
            </motion.div>

            {/* React Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.4 }}
              whileHover={{ y: -6 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-3 sm:p-5 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300 text-center sm:text-left"
            >
              <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-lg bg-cyan-50 dark:bg-cyan-900/20 flex items-center justify-center mb-2 sm:mb-3 mx-auto sm:mx-0">
                <FaReact className="w-4 h-4 sm:w-6 sm:h-6 text-cyan-600 dark:text-cyan-400" />
              </div>
              <h4 className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white">React</h4>
              <p className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400 mt-0.5 sm:mt-1">AI-First Frontends</p>
            </motion.div>

            {/* Tech Stack Tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="col-span-2 flex items-center justify-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700"
            >
              <CodeBracketIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-600 dark:text-gray-400" />
              <span className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400">Agentic AI + Full Stack</span>
              <span className="w-px h-3 sm:h-4 bg-gray-300 dark:bg-gray-600"></span>
              <span className="text-[10px] sm:text-xs font-medium text-gray-700 dark:text-gray-300">5+ AI Projects</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;