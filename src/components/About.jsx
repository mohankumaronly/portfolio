import { motion } from "framer-motion";
import { ShieldCheckIcon, ServerIcon, CubeIcon } from "@heroicons/react/24/outline";

const highlights = [
  {
    title: "Secure Systems",
    desc: "Implementing JWT authentication, email verification, password reset flows, and role-based access control using Spring Security.",
    icon: ShieldCheckIcon,
  },
  {
    title: "Scalable Backends",
    desc: "Building RESTful APIs with Spring Boot, Hibernate (JPA), and PostgreSQL, focusing on clean architecture and performance optimization.",
    icon: ServerIcon,
  },
  {
    title: "Cloud-Ready Applications",
    desc: "Developing production ready applications using Neon PostgreSQL, secure authentication workflows, and responsive React frontends.",
    icon: CubeIcon,
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-primary-dark"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white text-center"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-6 sm:mt-8 text-base sm:text-lg text-gray-700 dark:text-gray-400 leading-relaxed text-center max-w-3xl mx-auto px-4"
        >
          I'm a Java Full Stack Developer focused on building secure, scalable, and production-ready web applications. I specialize in developing RESTful APIs using Spring Boot, implementing JWT-based authentication systems, and designing clean, maintainable backend architectures. On the frontend, I work with React to create responsive and user-friendly interfaces that integrate seamlessly with modern backend systems.
        </motion.p>

        <div className="mt-12 sm:mt-16 grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4 sm:px-0">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-gray-100 dark:bg-black/40 rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-gray-300 dark:border-gray-800 text-center hover:shadow-lg dark:hover:shadow-gray-900/30 transition-all duration-300"
            >
              {item.icon && (
                <div className="flex justify-center mb-4">
                  <item.icon className="w-8 h-8 sm:w-10 sm:h-10 text-gray-800 dark:text-gray-300" />
                </div>
              )}

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                {item.title}
              </h3>

              <p className="mt-2 sm:mt-3 text-sm sm:text-base text-gray-700 dark:text-gray-400 leading-relaxed">
                {item.desc}
              </p>

              <div className="mt-4 w-12 h-1 bg-gray-400 dark:bg-gray-700 rounded-full mx-auto"></div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 flex flex-wrap justify-center gap-6 sm:gap-8 text-center"
        >
          <div className="px-4 sm:px-6">
            <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">3+</div>
            <div className="text-xs sm:text-sm text-gray-700 dark:text-gray-400">Years Learning</div>
          </div>
          <div className="px-4 sm:px-6">
            <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">2+</div>
            <div className="text-xs sm:text-sm text-gray-700 dark:text-gray-400">Projects Built</div>
          </div>
          <div className="px-4 sm:px-6">
            <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">4+</div>
            <div className="text-xs sm:text-sm text-gray-700 dark:text-gray-400">Technologies</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;