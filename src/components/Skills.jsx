import { motion } from "framer-motion";
import { useState } from "react";
import { 
  CodeBracketIcon, 
  ServerIcon, 
  CircleStackIcon,
  ShieldCheckIcon,
  WrenchScrewdriverIcon,
  SparklesIcon,
  CheckCircleIcon
} from "@heroicons/react/24/outline";

const skillGroups = [
  {
    title: "Frontend",
    icon: CodeBracketIcon,
    skills: ["React", "JavaScript", "Tailwind CSS", "React Router", "Context API"],
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
    iconColor: "text-blue-600 dark:text-blue-400",
    borderColor: "border-blue-200 dark:border-blue-800"
  },
  {
    title: "Backend",
    icon: ServerIcon,
    skills: ["Java", "Spring Boot", "Spring Security", "REST APIs", "JWT Authentication"],
    bgColor: "bg-emerald-50 dark:bg-emerald-900/20",
    iconColor: "text-emerald-600 dark:text-emerald-400",
    borderColor: "border-emerald-200 dark:border-emerald-800"
  },
  {
    title: "Database",
    icon: CircleStackIcon,
    skills: ["PostgreSQL", "Hibernate (JPA)", "Entity Mapping", "Query Optimization"],
    bgColor: "bg-amber-50 dark:bg-amber-900/20",
    iconColor: "text-amber-600 dark:text-amber-400",
    borderColor: "border-amber-200 dark:border-amber-800"
  },
  {
    title: "Security & Auth",
    icon: ShieldCheckIcon,
    skills: ["JWT Authentication", "Email Verification", "Password Reset", "Role-Based Access Control"],
    bgColor: "bg-purple-50 dark:bg-purple-900/20",
    iconColor: "text-purple-600 dark:text-purple-400",
    borderColor: "border-purple-200 dark:border-purple-800"
  },
  {
    title: "Tools & DevOps",
    icon: WrenchScrewdriverIcon,
    skills: ["Git", "GitHub", "Postman", "Neon DB", "Environment Variables"],
    bgColor: "bg-gray-50 dark:bg-gray-800/50",
    iconColor: "text-gray-600 dark:text-gray-400",
    borderColor: "border-gray-200 dark:border-gray-700"
  },
];

const techTags = [
  "Java", "Spring Boot", "React", "PostgreSQL", 
  "JWT", "REST APIs", "Tailwind CSS", "Git"
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section
      id="skills"
      className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900"
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
            MY SKILLS
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
            Tech <span className="text-blue-600 dark:text-blue-400">Stack</span>
          </h2>
          <div className="w-16 h-1 bg-blue-600 dark:bg-blue-400 rounded-full mx-auto mt-3"></div>
          <p className="mt-4 text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I work with to build modern web applications
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 md:mb-10">
          {skillGroups.map((group, index) => {
            const IconComponent = group.icon;
            return (
              <motion.button
                key={group.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                viewport={{ once: true }}
                onClick={() => setActiveTab(index)}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 flex items-center gap-1.5 sm:gap-2 ${
                  activeTab === index
                    ? `bg-blue-600 dark:bg-blue-500 text-white shadow-sm`
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                }`}
              >
                <IconComponent className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>{group.title}</span>
              </motion.button>
            );
          })}
        </div>

        {/* Skills Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-12"
        >
          <div className="grid md:grid-cols-3 gap-6">
            {/* Main Skills List */}
            <div className="md:col-span-2">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
                <div className="flex items-center gap-3 mb-5">
                  <div className={`p-2.5 rounded-lg ${skillGroups[activeTab].bgColor}`}>
                    {(() => {
                      const IconComponent = skillGroups[activeTab].icon;
                      return <IconComponent className={`w-5 h-5 ${skillGroups[activeTab].iconColor}`} />;
                    })()}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {skillGroups[activeTab].title}
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {skillGroups[activeTab].skills.length} skills
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {skillGroups[activeTab].skills.map((skill, idx) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05, duration: 0.3 }}
                      className="flex items-center gap-2.5 p-3 rounded-lg bg-gray-50 dark:bg-gray-700/30 border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-700 transition-colors duration-200"
                    >
                      <CheckCircleIcon className={`w-4 h-4 ${skillGroups[activeTab].iconColor} flex-shrink-0`} />
                      <span className="text-sm text-gray-700 dark:text-gray-300">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-200 dark:border-gray-700 shadow-sm">
                <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                  Proficiency
                </h4>
                <div className="space-y-3">
                  {skillGroups[activeTab].skills.slice(0, 4).map((skill, idx) => (
                    <div key={skill}>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                        <span className="text-blue-600 dark:text-blue-400 font-medium">
                          {85 - idx * 5}%
                        </span>
                      </div>
                      <div className="w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${85 - idx * 5}%` }}
                          transition={{ duration: 0.8, delay: idx * 0.1 }}
                          className={`h-full bg-blue-600 dark:bg-blue-400 rounded-full`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-200 dark:border-gray-700 shadow-sm">
                <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                  Experience
                </h4>
                <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                  <SparklesIcon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span>2+ years of hands-on experience</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tech Tags */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h4 className="text-center text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
            Technologies I Work With
          </h4>
          <div className="flex flex-wrap justify-center gap-2.5">
            {techTags.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ y: -2 }}
                className="px-4 py-2 text-xs sm:text-sm font-medium bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;