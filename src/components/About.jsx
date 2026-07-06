import { motion } from "framer-motion";
import { 
  ShieldCheckIcon, 
  ServerIcon, 
  CubeIcon,
  CodeBracketIcon,
  CloudArrowUpIcon,
  CommandLineIcon,
  UserGroupIcon,
  SparklesIcon,
  CheckCircleIcon
} from "@heroicons/react/24/outline";

const highlights = [
  {
    title: "Secure Systems",
    desc: "Implementing JWT authentication, email verification, password reset flows, and role-based access control using Spring Security.",
    icon: ShieldCheckIcon,
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
    iconColor: "text-blue-600 dark:text-blue-400",
    borderColor: "border-blue-200 dark:border-blue-800"
  },
  {
    title: "Scalable Backends",
    desc: "Building RESTful APIs with Spring Boot, Hibernate (JPA), and PostgreSQL, focusing on clean architecture and performance optimization.",
    icon: ServerIcon,
    bgColor: "bg-indigo-50 dark:bg-indigo-900/20",
    iconColor: "text-indigo-600 dark:text-indigo-400",
    borderColor: "border-indigo-200 dark:border-indigo-800"
  },
  {
    title: "Cloud-Ready Apps",
    desc: "Developing production ready applications using Neon PostgreSQL, secure authentication workflows, and responsive React frontends.",
    icon: CubeIcon,
    bgColor: "bg-teal-50 dark:bg-teal-900/20",
    iconColor: "text-teal-600 dark:text-teal-400",
    borderColor: "border-teal-200 dark:border-teal-800"
  },
];

const techStack = [
  { name: "Java", icon: CodeBracketIcon, color: "text-red-500" },
  { name: "Spring Boot", icon: CommandLineIcon, color: "text-emerald-600" },
  { name: "React", icon: SparklesIcon, color: "text-blue-500" },
  { name: "PostgreSQL", icon: CloudArrowUpIcon, color: "text-blue-700" },
];

const stats = [
  { number: "3+", label: "Years of Learning", icon: UserGroupIcon },
  { number: "5+", label: "Projects Completed", icon: CodeBracketIcon },
  { number: "8+", label: "Technologies", icon: SparklesIcon },
  { number: "100%", label: "Commitment", icon: ShieldCheckIcon },
];

const expertise = [
  "Backend: Spring Boot, Spring Security, Hibernate (JPA), RESTful APIs",
  "Frontend: React, Redux, Tailwind CSS, Responsive Design",
  "Database: PostgreSQL, MySQL, Neon PostgreSQL",
  "DevOps: Git, Docker, AWS, CI/CD Pipelines",
];

const About = () => {
  return (
    <section
      id="about"
      className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 relative"
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
            ABOUT ME
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
            Know Me <span className="text-blue-600 dark:text-blue-400">Better</span>
          </h2>
          <div className="w-16 h-1 bg-blue-600 dark:bg-blue-400 rounded-full mx-auto mt-3"></div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-5 gap-8 md:gap-12 mb-16">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm a passionate <span className="font-semibold text-blue-600 dark:text-blue-400">Java Full Stack Developer</span> dedicated to building 
              secure, scalable, and production-ready web applications. With a strong 
              foundation in both backend and frontend technologies, I create 
              comprehensive solutions that solve real-world problems.
            </p>
            
            <div className="mt-6 space-y-2.5">
              {expertise.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.08, duration: 0.4 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                >
                  <CheckCircleIcon className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-2 grid grid-cols-2 gap-3 sm:gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-4 text-center border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <stat.icon className="w-5 h-5 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                <div className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">{stat.number}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Highlights Cards */}
        <div className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-3">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -6 }}
              className={`${item.bgColor} rounded-xl p-5 sm:p-6 border ${item.borderColor} hover:shadow-lg transition-all duration-300`}
            >
              <div className={`w-12 h-12 rounded-lg ${item.bgColor} flex items-center justify-center mb-3`}>
                <item.icon className={`w-6 h-6 ${item.iconColor}`} />
              </div>

              <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-1.5">
                {item.title}
              </h3>

              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {item.desc}
              </p>

              <div className={`mt-3 w-10 h-0.5 ${item.iconColor} rounded-full`}></div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 pt-10 border-t border-gray-200 dark:border-gray-700"
        >
          <h3 className="text-center text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-6">
            Technology Stack
          </h3>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.08, duration: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ y: -3 }}
                className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-white dark:bg-gray-800 rounded-full border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <tech.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${tech.color}`} />
                <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;