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
  CheckBadgeIcon,
  CpuChipIcon,
  CommandLineIcon,
  SwatchIcon,
  GlobeAltIcon
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
  const [activeTab, setActiveTab] = useState(0);
  const [selectedSkill, setSelectedSkill] = useState(null);

  // Helper function to render icon component
  const renderIcon = (IconComponent, className) => {
    return <IconComponent className={className} />;
  };

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
        {/* Section Header - New Design */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 bg-gradient-to-r from-purple-500/10 to-blue-500/10 dark:from-purple-500/20 dark:to-blue-500/20 rounded-full border border-purple-200/50 dark:border-purple-800/50">
            <SparklesIcon className="w-4 h-4 text-purple-600 dark:text-purple-400 animate-pulse" />
            <span className="text-xs font-semibold tracking-wider text-purple-600 dark:text-purple-400 uppercase">
              Tech Stack
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white">
            My{" "}
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 bg-clip-text text-transparent animate-gradient bg-300%">
              Developer
            </span>
            {" "}Toolbox
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here's my tech stack - the tools and technologies I use to build amazing applications
          </p>
        </motion.div>

        {/* Modern Tabs Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {skillGroups.map((group, index) => {
            const IconComponent = group.icon;
            return (
              <motion.button
                key={group.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                viewport={{ once: true }}
                onClick={() => setActiveTab(index)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                  activeTab === index
                    ? `bg-gradient-to-r ${group.color} text-white shadow-lg shadow-purple-500/30`
                    : 'bg-white/70 dark:bg-gray-800/70 text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                }`}
              >
                <IconComponent className="w-4 h-4" />
                {group.title}
              </motion.button>
            );
          })}
        </div>

        {/* Dynamic Content Area */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-16"
        >
          <div className="grid lg:grid-cols-5 gap-6">
            {/* Left - Main Card */}
            <div className="lg:col-span-3">
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl p-8 border border-gray-200/50 dark:border-gray-700/50 shadow-2xl hover:shadow-3xl transition-shadow duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${skillGroups[activeTab].color} flex items-center justify-center shadow-lg animate-float`}>
                    {(() => {
                      const IconComponent = skillGroups[activeTab].icon;
                      return <IconComponent className="w-8 h-8 text-white" />;
                    })()}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {skillGroups[activeTab].title}
                    </h3>
                    <div className={`w-16 h-1 bg-gradient-to-r ${skillGroups[activeTab].color} rounded-full mt-1`}></div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {skillGroups[activeTab].skills.map((skill, idx) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.05, duration: 0.3 }}
                      whileHover={{ 
                        scale: 1.05,
                        rotate: idx % 2 === 0 ? 1 : -1,
                        transition: { type: "spring", stiffness: 300 }
                      }}
                      onClick={() => setSelectedSkill(selectedSkill === skill ? null : skill)}
                      className={`p-4 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                        selectedSkill === skill
                          ? `border-purple-500 bg-gradient-to-br ${skillGroups[activeTab].bgColor}`
                          : 'border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-700'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${skillGroups[activeTab].color} flex items-center justify-center shadow-md`}>
                          <CheckBadgeIcon className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-medium text-gray-800 dark:text-gray-200">
                          {skill}
                        </span>
                      </div>
                      {selectedSkill === skill && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700"
                        >
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {`Expert in ${skill} with hands-on experience in real-world projects`}
                          </p>
                        </motion.div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right - Stats & Info */}
            <div className="lg:col-span-2 space-y-4">
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <CpuChipIcon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  <h4 className="font-semibold text-gray-900 dark:text-white">Proficiency</h4>
                </div>
                <div className="space-y-3">
                  {skillGroups[activeTab].skills.slice(0, 4).map((skill, idx) => (
                    <div key={skill} className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                        <span className="text-purple-600 dark:text-purple-400 font-semibold">
                          {90 - idx * 5}%
                        </span>
                      </div>
                      <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${90 - idx * 5}%` }}
                          transition={{ duration: 1, delay: idx * 0.1 }}
                          className={`h-full bg-gradient-to-r ${skillGroups[activeTab].color} rounded-full`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-xl">
                <div className="flex items-center gap-3 mb-3">
                  <GlobeAltIcon className="w-6 h-6 text-green-600 dark:text-green-400" />
                  <h4 className="font-semibold text-gray-900 dark:text-white">Projects Using</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[1, 2, 3].map((i) => (
                    <span key={i} className="px-3 py-1 text-xs font-medium bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full border border-purple-200 dark:border-purple-800">
                      Project {i}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Floating Tech Stack - New Design */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="bg-gradient-to-r from-purple-500/10 via-transparent to-blue-500/10 dark:from-purple-500/5 dark:to-blue-500/5 rounded-3xl p-8 border border-purple-200/30 dark:border-purple-800/30">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: CodeBracketIcon, label: "Frontend", color: "from-blue-500 to-cyan-400" },
                { icon: ServerIcon, label: "Backend", color: "from-green-500 to-emerald-400" },
                { icon: ShieldCheckIcon, label: "Security", color: "from-purple-500 to-pink-400" },
                { icon: WrenchScrewdriverIcon, label: "DevOps", color: "from-gray-600 to-gray-400" },
              ].map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5, scale: 1.05 }}
                    className="text-center p-4 rounded-2xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-2xl transition-all duration-300"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mx-auto mb-3 shadow-lg`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{item.label}</h4>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Bottom Floating Tags */}
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
              whileHover={{ 
                scale: 1.15, 
                rotate: 5,
                transition: { type: "spring", stiffness: 300 }
              }}
              className="group relative px-5 py-2.5 text-sm font-semibold bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full shadow-lg shadow-purple-500/20 hover:shadow-xl transition-all duration-300 cursor-default"
            >
              <span className="relative z-10">{tech.name}</span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg"></div>
            </motion.span>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .bg-300\% { background-size: 300% 300%; }
        .animate-gradient { animation: gradient 6s ease infinite; }
      `}</style>
    </section>
  );
};

export default Skills;