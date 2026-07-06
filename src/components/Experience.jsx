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
  ];

  return (
    <section
      id="experience"
      className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 rounded-full">
            CAREER
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
            Work <span className="text-blue-600 dark:text-blue-400">Experience</span>
          </h2>
          <div className="w-16 h-1 bg-blue-600 dark:bg-blue-400 rounded-full mx-auto mt-3"></div>
          <p className="mt-4 text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Professional journey building production-ready applications with modern technologies
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line - hidden on mobile */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-800 hidden sm:block"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="relative pl-0 sm:pl-16 mb-6 last:mb-0"
            >
              {/* Timeline dot - hidden on mobile */}
              <div className="absolute left-0 top-0 hidden sm:flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 border-2 border-blue-600 dark:border-blue-400 flex items-center justify-center shadow-sm">
                  <BriefcaseIcon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
              </div>

              {/* Experience Card */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-5 sm:p-6 md:p-8 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300">
                
                {/* Mobile header with icon */}
                <div className="flex sm:hidden items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                    <BriefcaseIcon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="flex-1 h-0.5 bg-blue-200 dark:bg-blue-800"></div>
                </div>

                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                      {exp.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 mt-1">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {exp.company}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-gray-400 dark:bg-gray-600 hidden xs:inline"></span>
                      <span className="text-xs px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full font-medium">
                        {exp.type}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col items-start sm:items-end gap-0.5 text-xs sm:text-sm text-gray-600 dark:text-gray-400 flex-shrink-0">
                    <div className="flex items-center gap-1.5">
                      <CalendarIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPinIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                    Responsibilities
                  </h4>
                  <ul className="space-y-1.5">
                    {exp.description.map((item, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 + 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300"
                      >
                        <span className="text-blue-500 dark:text-blue-400 mt-0.5 flex-shrink-0">▹</span>
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
                        className="px-2.5 py-0.5 text-xs font-medium bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full border border-blue-100 dark:border-blue-800"
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
                          transition={{ delay: idx * 0.05 + 0.2 }}
                          viewport={{ once: true }}
                          className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700/30 p-2.5 rounded-lg border border-gray-100 dark:border-gray-700"
                        >
                          <CheckCircleIcon className="w-4 h-4 text-emerald-500 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
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
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white dark:bg-gray-800 rounded-full border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300">
            <span className="text-sm text-gray-700 dark:text-gray-300">
              💼 Open to new opportunities
            </span>
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;