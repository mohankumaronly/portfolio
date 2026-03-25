import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const skillGroups = [
  {
    title: "Frontend",
    skills: ["React", "JavaScript", "Tailwind CSS", "React Router", "Context API"],
    color: "from-blue-500 to-cyan-400",
  },
  {
    title: "Backend",
    skills: ["Java", "Spring Boot", "Spring Security", "REST APIs", "JWT Authentication"],
    color: "from-green-500 to-emerald-400",
  },
  {
    title: "Database",
    skills: ["PostgreSQL", "Hibernate (JPA)", "Entity Mapping", "Query Optimization"],
    color: "from-yellow-500 to-orange-400",
  },
  {
    title: "Security & Auth",
    skills: [
      "JWT Authentication",
      "Email Verification",
      "Password Reset Flow",
      "Role-Based Access Control",
      "Secure API Design",
    ],
    color: "from-purple-500 to-pink-400",
  },
  {
    title: "Tools & DevOps",
    skills: ["Git", "GitHub", "Postman", "Neon DB", "Environment Variables"],
    color: "from-gray-600 to-gray-400",
  },
];

const SkillBar = ({ skill, index }) => {
  const [width, setWidth] = useState(0);
  
  useEffect(() => {
   const levels = {
  "React": 85,
  "JavaScript": 85,
  "Tailwind CSS": 80,
  "React Router": 78,
  "Context API": 80,

  "Java": 85,
  "Spring Boot": 80,
  "Spring Security": 75,
  "REST APIs": 88,
  "JWT Authentication": 85,

  "PostgreSQL": 80,
  "Hibernate (JPA)": 78,
  "Entity Mapping": 75,
  "Query Optimization": 75,

  "Email Verification": 82,
  "Password Reset Flow": 82,
  "Role-Based Access Control": 75,
  "Secure API Design": 80,

  "Git": 85,
  "GitHub": 85,
  "Postman": 88,
  "Neon DB": 78,
  "Environment Variables": 90,
};
    
    setTimeout(() => setWidth(levels[skill] || 75), 100);
  }, [skill]);

  return (
    <div className="mb-3">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm text-gray-700 dark:text-gray-300">{skill}</span>
        <span className="text-xs text-gray-600 dark:text-gray-500">{width}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${width}%` }}
          transition={{ duration: 1, delay: index * 0.1 }}
          className="h-full bg-linear-to-r from-blue-500 to-purple-500 rounded-full"
        />
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-primary dark:bg-black"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white text-center"
        >
          Technical Skills
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-4 text-sm sm:text-base text-gray-700 dark:text-gray-400 text-center max-w-2xl mx-auto"
        >
          Technologies and tools I work with to build modern web applications
        </motion.p>

        {/* Skills Grid */}
        <div className="mt-10 sm:mt-14 grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group bg-gray-100 dark:bg-primary-dark rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-sm border border-gray-300 dark:border-gray-800 hover:shadow-lg dark:hover:shadow-gray-900/30 transition-all duration-300"
            >
              {/* Title with gradient line */}
              <div className="relative mb-5">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                  {group.title}
                </h3>
                <div className={`absolute -bottom-2 left-0 w-12 h-1 bg-linear-to-r ${group.color} rounded-full transition-all duration-300 group-hover:w-20`} />
              </div>

              {/* Skills List - Bullet points with proper colors */}
              <ul className="space-y-2 text-gray-700 dark:text-gray-400">
                {group.skills.map((skill, idx) => (
                  <motion.li
                    key={skill}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 + i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start text-sm sm:text-base"
                  >
                    <span className="mr-2 text-gray-500 dark:text-gray-600">•</span>
                    <span className="flex-1">{skill}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Skills Summary with proper colors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 flex flex-wrap justify-center items-center gap-4 sm:gap-6"
        >
          <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-primary-dark rounded-full border border-gray-300 dark:border-gray-800">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-400">Continuously improving</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-primary-dark rounded-full border border-gray-300 dark:border-gray-800">
            <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-400">
              <span className="font-semibold text-gray-900 dark:text-white">5+</span> core technologies
            </span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-primary-dark rounded-full border border-gray-300 dark:border-gray-800">
            <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-400">
              <span className="font-semibold text-gray-900 dark:text-white">15+</span> skills mastered
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;