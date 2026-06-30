import { motion } from "framer-motion";
import { 
  ShieldCheckIcon, 
  ServerIcon, 
  CubeIcon,
  CodeBracketIcon,
  CloudArrowUpIcon,
  CommandLineIcon,
  UserGroupIcon,
  SparklesIcon
} from "@heroicons/react/24/outline";

const highlights = [
  {
    title: "Secure Systems",
    desc: "Implementing JWT authentication, email verification, password reset flows, and role-based access control using Spring Security.",
    icon: ShieldCheckIcon,
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50 dark:bg-purple-900/20",
    iconColor: "text-purple-600 dark:text-purple-400"
  },
  {
    title: "Scalable Backends",
    desc: "Building RESTful APIs with Spring Boot, Hibernate (JPA), and PostgreSQL, focusing on clean architecture and performance optimization.",
    icon: ServerIcon,
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
    iconColor: "text-blue-600 dark:text-blue-400"
  },
  {
    title: "Cloud-Ready Apps",
    desc: "Developing production ready applications using Neon PostgreSQL, secure authentication workflows, and responsive React frontends.",
    icon: CubeIcon,
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50 dark:bg-green-900/20",
    iconColor: "text-green-600 dark:text-green-400"
  },
];

const techStack = [
  { name: "Java", icon: CodeBracketIcon, color: "text-red-500" },
  { name: "Spring Boot", icon: CommandLineIcon, color: "text-green-600" },
  { name: "React", icon: SparklesIcon, color: "text-blue-500" },
  { name: "PostgreSQL", icon: CloudArrowUpIcon, color: "text-blue-800" },
];

const About = () => {
  return (
    <section
      id="about"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-300/10 dark:bg-purple-900/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-300/10 dark:bg-blue-900/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/30 rounded-full">
            GET TO KNOW ME
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            About <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mx-auto mt-4"></div>
        </motion.div>

        {/* Main Description with Timeline */}
        <div className="grid lg:grid-cols-5 gap-12 items-start mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm a passionate <span className="font-semibold text-purple-600 dark:text-purple-400">Java Full Stack Developer</span> dedicated to building 
              secure, scalable, and production-ready web applications. With a strong 
              foundation in both backend and frontend technologies, I create 
              comprehensive solutions that solve real-world problems.
            </p>
            <div className="mt-6 space-y-3">
              {[
                "⚡ Backend: Spring Boot, Spring Security, Hibernate (JPA), RESTful APIs",
                "⚡ Frontend: React, Redux, Tailwind CSS, Responsive Design",
                "⚡ Database: PostgreSQL, MySQL, Neon PostgreSQL",
                "⚡ DevOps: Git, Docker, AWS, CI/CD Pipelines",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                >
                  <span className="text-purple-600 dark:text-purple-400 mt-1">▹</span>
                  <span className="text-sm sm:text-base">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats with icons */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2 grid grid-cols-2 gap-4"
          >
            {[
              { number: "3+", label: "Years of Learning", icon: UserGroupIcon },
              { number: "2+", label: "Projects Completed", icon: CodeBracketIcon },
              { number: "4+", label: "Technologies", icon: SparklesIcon },
              { number: "100%", label: "Commitment", icon: ShieldCheckIcon },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800/50 rounded-xl p-4 text-center border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex justify-center mb-2">
                  <stat.icon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.number}</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Highlights Cards */}
        <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-3">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`${item.bgColor} rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 group relative overflow-hidden`}
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.color} opacity-5 rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-500`}></div>
              
              <div className={`w-14 h-14 rounded-xl ${item.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className={`w-7 h-7 ${item.iconColor}`} />
              </div>

              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {item.title}
              </h3>

              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {item.desc}
              </p>

              <div className={`mt-4 w-12 h-0.5 bg-gradient-to-r ${item.color} rounded-full group-hover:w-20 transition-all duration-300`}></div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 pt-12 border-t border-gray-200 dark:border-gray-700"
        >
          <h3 className="text-center text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-8">
            Technology Stack
          </h3>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ y: -4, scale: 1.05 }}
                className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-full border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <tech.icon className={`w-5 h-5 ${tech.color}`} />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;