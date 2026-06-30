import { motion } from "framer-motion";
import { 
  BriefcaseIcon, 
  CalendarIcon, 
  MapPinIcon,
  SparklesIcon,
  CheckCircleIcon
} from "@heroicons/react/24/outline";

const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Developer Intern",
      company: "Tap Academy",
      location: "Bangalore, India",
      period: "Jan 2026 – Present",
      type: "Internship",
      description: [
        "Developed full-stack web applications using Java, Spring Boot, and React with a focus on scalable backend systems",
        "Designed and implemented RESTful APIs to handle business logic, authentication flows, and application workflows",
        "Built secure authentication and authorization using Spring Security, JWT, and role-based access control",
        "Integrated PostgreSQL database using Hibernate (JPA) for efficient data management and persistence",
        "Implemented email verification and password reset workflows using SMTP services",
        "Contributed to backend architecture design, API optimization, and production-ready deployment practices",
      ],
      tech: ["Java", "Spring Boot", "React", "PostgreSQL", "Hibernate", "JWT", "Spring Security"],
      achievements: [
        "Reduced API response time by 40% through query optimization",
        "Implemented comprehensive test coverage using JUnit and Mockito",
        "Successfully deployed 3 production-ready features"
      ]
    },
    // Add more experiences here as you grow
  ];

  return (
    <section
      id="experience"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-purple-300/10 dark:bg-purple-900/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-blue-300/10 dark:bg-blue-900/10 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/30 rounded-full">
            <BriefcaseIcon className="w-3.5 h-3.5" />
            CAREER
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Work <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Professional journey building production-ready applications with modern technologies
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mx-auto mt-4"></div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 via-blue-600 to-purple-600 hidden md:block"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className="relative pl-0 md:pl-20 mb-8 last:mb-0"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-0 hidden md:flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white dark:bg-gray-800 border-4 border-purple-600 dark:border-purple-400 flex items-center justify-center shadow-lg shadow-purple-500/20">
                  <BriefcaseIcon className="w-7 h-7 text-purple-600 dark:text-purple-400" />
                </div>
              </div>

              {/* Experience Card */}
              <div className="bg-white dark:bg-gray-800/50 rounded-2xl p-6 sm:p-8 border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 group">
                {/* Mobile timeline dot */}
                <div className="flex md:hidden items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                    <BriefcaseIcon className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div className="flex-1 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600"></div>
                </div>

                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {exp.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 mt-1.5">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {exp.company}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-gray-400 dark:bg-gray-600"></span>
                      <span className="text-xs px-2 py-0.5 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full font-medium">
                        {exp.type}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <div className="flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-400">
                      <CalendarIcon className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-400">
                      <MapPinIcon className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                    Responsibilities
                  </h4>
                  <ul className="space-y-2">
                    {exp.description.map((item, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 + 0.2 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300"
                      >
                        <span className="text-purple-500 dark:text-purple-400 mt-0.5">▹</span>
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 text-xs font-medium bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 rounded-full border border-purple-100 dark:border-purple-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                {exp.achievements && (
                  <div>
                    <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                      <SparklesIcon className="w-3.5 h-3.5" />
                      Key Achievements
                    </h4>
                    <div className="space-y-1.5">
                      {exp.achievements.map((achievement, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, scale: 0.95 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.05 + 0.4 }}
                          viewport={{ once: true }}
                          className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-2 rounded-lg border border-purple-100 dark:border-purple-800/50"
                        >
                          <CheckCircleIcon className="w-4 h-4 text-green-500 dark:text-green-400 mt-0.5 flex-shrink-0" />
                          <span>{achievement}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800/50 rounded-full border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300">
            <span className="text-sm text-gray-700 dark:text-gray-300">
              💼 Open to new opportunities
            </span>
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;