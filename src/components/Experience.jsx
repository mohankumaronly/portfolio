import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-primary dark:bg-black"
    >
      <div className="max-w-5xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white text-center"
        >
          Experience
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-10 sm:mt-14 bg-gray-100 dark:bg-primary-dark rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-300 dark:border-gray-800"
        >
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
            Full Stack Developer Intern - Tap Academy
          </h3>

          <p className="mt-2 text-sm sm:text-base text-gray-600 dark:text-gray-400">
            Jan 2026 – Present
          </p>

          <ul className="mt-6 space-y-3 text-gray-700 dark:text-gray-400 text-sm sm:text-base">
            
            <li className="flex gap-2">
              <span className="text-blue-500">•</span>
              <span>
                Developed full-stack web applications using Java, Spring Boot, and React with a focus on scalable backend systems
              </span>
            </li>

            <li className="flex gap-2">
              <span className="text-blue-500">•</span>
              <span>
                Designed and implemented RESTful APIs to handle business logic, authentication flows, and application workflows
              </span>
            </li>

            <li className="flex gap-2">
              <span className="text-blue-500">•</span>
              <span>
                Built secure authentication and authorization using Spring Security, JWT, and role-based access control
              </span>
            </li>

            <li className="flex gap-2">
              <span className="text-blue-500">•</span>
              <span>
                Integrated PostgreSQL database using Hibernate (JPA) for efficient data management and persistence
              </span>
            </li>

            <li className="flex gap-2">
              <span className="text-blue-500">•</span>
              <span>
                Implemented email verification and password reset workflows using SMTP services
              </span>
            </li>

            <li className="flex gap-2">
              <span className="text-blue-500">•</span>
              <span>
                Contributed to backend architecture design, API optimization, and production-ready deployment practices
              </span>
            </li>

          </ul>
        </motion.div>

      </div>
    </section>
  );
};

export default Experience;