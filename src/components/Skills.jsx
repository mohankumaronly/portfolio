import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { 
  CodeBracketIcon, 
  ServerIcon, 
  CircleStackIcon,
  ShieldCheckIcon,
  WrenchScrewdriverIcon,
  SparklesIcon,
  TrophyIcon,
  UserGroupIcon,
  RocketLaunchIcon,
  CheckBadgeIcon
} from "@heroicons/react/24/outline";

const skillGroups = [
  {
    title: "Frontend",
    icon: CodeBracketIcon,
    skills: ["React", "JavaScript", "Tailwind CSS", "React Router", "Context API"],
    color: "from-blue-500 to-cyan-400",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
    iconColor: "text-blue-600 dark:text-blue-400",
    gradient: "from-blue-500 to-cyan-400",
    emoji: "🎨"
  },
  {
    title: "Backend",
    icon: ServerIcon,
    skills: ["Java", "Spring Boot", "Spring Security", "REST APIs", "JWT Authentication"],
    color: "from-green-500 to-emerald-400",
    bgColor: "bg-green-50 dark:bg-green-900/20",
    iconColor: "text-green-600 dark:text-green-400",
    gradient: "from-green-500 to-emerald-400",
    emoji: "⚙️"
  },
  {
    title: "Database",
    icon: CircleStackIcon,
    skills: ["PostgreSQL", "Hibernate (JPA)", "Entity Mapping", "Query Optimization"],
    color: "from-yellow-500 to-orange-400",
    bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
    iconColor: "text-yellow-600 dark:text-yellow-400",
    gradient: "from-yellow-500 to-orange-400",
    emoji: "🗄️"
  },
  {
    title: "Security & Auth",
    icon: ShieldCheckIcon,
    skills: [
      "JWT Authentication",
      "Email Verification",
      "Password Reset Flow",
      "Role-Based Access Control",
      "Secure API Design",
    ],
    color: "from-purple-500 to-pink-400",
    bgColor: "bg-purple-50 dark:bg-purple-900/20",
    iconColor: "text-purple-600 dark:text-purple-400",
    gradient: "from-purple-500 to-pink-400",
    emoji: "🔒"
  },
  {
    title: "Tools & DevOps",
    icon: WrenchScrewdriverIcon,
    skills: ["Git", "GitHub", "Postman", "Neon DB", "Environment Variables"],
    color: "from-gray-600 to-gray-400",
    bgColor: "bg-gray-50 dark:bg-gray-800/50",
    iconColor: "text-gray-600 dark:text-gray-400",
    gradient: "from-gray-600 to-gray-400",
    emoji: "🛠️"
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -right-40 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-400/20 dark:from-purple-900/10 dark:to-pink-900/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 -left-40 w-96 h-96 bg-gradient-to-tr from-blue-400/20 to-cyan-400/20 dark:from-blue-900/10 dark:to-cyan-900/10 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 bg-gradient-to-r from-purple-500/10 to-blue-500/10 dark:from-purple-500/20 dark:to-blue-500/20 rounded-full border border-purple-200/50 dark:border-purple-800/50">
            <RocketLaunchIcon className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            <span className="text-xs font-semibold tracking-wider text-purple-600 dark:text-purple-400 uppercase">
              My Arsenal
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white">
            Skills &{" "}
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies I've mastered to build exceptional digital experiences
          </p>
        </motion.div>

        {/* Skills Grid - Clean cards without percentages */}
        <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative bg-white/70 dark:bg-gray-800/50 backdrop-blur-sm rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 group"
            >
              {/* Glass effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent dark:from-white/5 rounded-3xl pointer-events-none"></div>
              
              {/* Header */}
              <div className="relative flex items-center gap-4 mb-6">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${group.color} flex items-center justify-center shadow-lg transform group-hover:rotate-6 transition-transform duration-300`}>
                  <group.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <span className="text-2xl">{group.emoji}</span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {group.title}
                  </h3>
                  <div className={`w-12 h-0.5 bg-gradient-to-r ${group.color} rounded-full mt-1`}></div>
                </div>
              </div>

              {/* Skills List - Clean tags */}
              <div className="relative flex flex-wrap gap-2">
                {group.skills.map((skill, idx) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05 + 0.2, duration: 0.3 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className={`px-4 py-2 text-sm font-medium rounded-xl border ${group.bgColor} border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-1.5`}
                  >
                    <CheckBadgeIcon className={`w-4 h-4 ${group.iconColor}`} />
                    {skill}
                  </motion.span>
                ))}
              </div>

              {/* Skill count badge */}
              <div className="absolute top-4 right-4 px-2.5 py-1 rounded-lg bg-gradient-to-r from-purple-500/10 to-blue-500/10 dark:from-purple-500/20 dark:to-blue-500/20 border border-purple-200/50 dark:border-purple-800/50">
                <span className="text-xs font-semibold text-purple-600 dark:text-purple-400">
                  {group.skills.length} skills
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section - Cleaner design */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { number: "5+", label: "Core Technologies", icon: CodeBracketIcon, color: "from-blue-500 to-cyan-400" },
              { number: "15+", label: "Skills Mastered", icon: TrophyIcon, color: "from-yellow-500 to-orange-400" },
              { number: "100%", label: "Commitment to Quality", icon: ShieldCheckIcon, color: "from-green-500 to-emerald-400" },
              { number: "24/7", label: "Learning Mindset", icon: UserGroupIcon, color: "from-purple-500 to-pink-400" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="relative group text-center p-6 rounded-2xl bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
                <div className="relative">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mx-auto mb-3 shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tech Stack Tags - Enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-wrap justify-center gap-3"
        >
          {[
            { name: "Java", color: "from-red-500 to-red-600" },
            { name: "Spring Boot", color: "from-green-500 to-emerald-600" },
            { name: "React", color: "from-blue-500 to-cyan-600" },
            { name: "PostgreSQL", color: "from-blue-600 to-indigo-600" },
            { name: "JWT", color: "from-pink-500 to-rose-600" },
            { name: "REST APIs", color: "from-purple-500 to-violet-600" },
            { name: "Tailwind CSS", color: "from-cyan-500 to-teal-600" },
            { name: "Git", color: "from-orange-500 to-red-600" },
          ].map((tech, index) => (
            <motion.span
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className={`px-4 py-2 text-sm font-semibold bg-gradient-to-r ${tech.color} text-white rounded-full shadow-lg shadow-${tech.color.split(' ')[1]?.replace('-600', '')}-500/20 hover:shadow-xl transition-all duration-300 cursor-default`}
            >
              {tech.name}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;