import { motion } from "framer-motion";
import { Github, ExternalLink, Server, BookOpen, SparklesIcon } from "lucide-react";
import project1 from "../assets/images/project1.png";

const projects = [
  {
    title: "LearnFlow – SaaS Learning Platform",
    image: project1,
    desc: "A production-ready SaaS platform for students and instructors with secure authentication, scalable backend architecture, and modern frontend integration.",
    features: [
      "Spring Boot authentication with JWT & refresh tokens",
      "Email verification & password reset using Brevo",
      "PostgreSQL (Neon) with Hibernate (JPA)",
      "Spring Security with role-based access control",
      "Swagger API documentation for testing",
      "React frontend with API integration",
    ],
    tech: "Java, Spring Boot, Spring Security, PostgreSQL, Hibernate, React, JWT",
    github: "https://github.com/mohankumaronly/LearnFlow",
    live: "https://minilearnflow.vercel.app",
    backend: "https://java-authentication-6hpt.onrender.com/test",
    swagger: "https://java-authentication-6hpt.onrender.com/swagger-ui/index.html",
    category: "SaaS"
  },
  {
    title: "EcoTrack – Carbon Footprint Tracker",
    image: project1,
    desc: "An eco-friendly application that helps users track and reduce their carbon footprint through data visualization and actionable insights.",
    features: [
      "Real-time carbon footprint calculations",
      "Interactive data visualization with charts",
      "User authentication and profile management",
      "Goal setting and progress tracking",
      "Email notifications for milestones",
      "Responsive dashboard design",
    ],
    tech: "React, Spring Boot, PostgreSQL, Chart.js, JWT, Tailwind CSS",
    github: "https://github.com/mohankumaronly/EcoTrack",
    live: "https://ecotrack.vercel.app",
    backend: "https://ecotrack-api.onrender.com/api",
    swagger: "https://ecotrack-api.onrender.com/swagger-ui/index.html",
    category: "Sustainability"
  },
  {
    title: "HealthBridge – Telemedicine Platform",
    image: project1,
    desc: "A comprehensive telemedicine platform connecting patients with healthcare providers through secure video consultations and medical record management.",
    features: [
      "Secure video consultation with WebRTC",
      "Patient and doctor dashboard with appointments",
      "Electronic health records (EHR) management",
      "Prescription and medication tracking",
      "Real-time chat and notifications",
      "Multi-role access (Patient, Doctor, Admin)",
    ],
    tech: "Spring Boot, React, WebRTC, PostgreSQL, Redis, JWT, Docker",
    github: "https://github.com/mohankumaronly/HealthBridge",
    live: "https://healthbridge.vercel.app",
    backend: "https://healthbridge-api.onrender.com/api",
    swagger: "https://healthbridge-api.onrender.com/swagger-ui/index.html",
    category: "Healthcare"
  },
  {
    title: "DevForge – Developer Collaboration Hub",
    image: project1,
    desc: "A collaborative platform for developers to share code snippets, discuss technical challenges, and build projects together in real-time.",
    features: [
      "Code snippet sharing with syntax highlighting",
      "Real-time collaboration with WebSocket",
      "Project management and task tracking",
      "Discussion forums with threaded comments",
      "User reputation and gamification system",
      "API documentation and testing tools",
    ],
    tech: "Java, Spring Boot, React, WebSocket, PostgreSQL, Redis, Tailwind CSS",
    github: "https://github.com/mohankumaronly/DevForge",
    live: "https://devforge.vercel.app",
    backend: "https://devforge-api.onrender.com/api",
    swagger: "https://devforge-api.onrender.com/swagger-ui/index.html",
    category: "Developer Tools"
  },
];

const openExternal = (url) => {
  if (!url || url === "#") return;
  window.open(url, "_blank", "noopener,noreferrer");
};

const Projects = () => {
  return (
    <section
      id="projects"
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
            PORTFOLIO
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
            Featured <span className="text-blue-600 dark:text-blue-400">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-blue-600 dark:bg-blue-400 rounded-full mx-auto mt-3"></div>
          <p className="mt-4 text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Production-grade full stack applications showcasing secure backend architecture, 
            modern frontend design, and scalable system solutions
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden aspect-video bg-gray-100 dark:bg-gray-700">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                {/* Category Badge */}
                <div className="absolute top-3 right-3 px-3 py-1 bg-black/60 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                  {project.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                  {project.desc}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                    Key Features
                  </h4>
                  <ul className="grid grid-cols-1 gap-1">
                    {project.features.slice(0, 3).map((f, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-gray-700 dark:text-gray-300">
                        <span className="text-blue-500 dark:text-blue-400 mt-0.5">▹</span>
                        <span>{f}</span>
                      </li>
                    ))}
                    {project.features.length > 3 && (
                      <li className="text-xs text-gray-500 dark:text-gray-400 italic">
                        +{project.features.length - 3} more features
                      </li>
                    )}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.split(', ').slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 text-xs font-medium bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.split(', ').length > 4 && (
                      <span className="px-2 py-0.5 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full">
                        +{project.tech.split(', ').length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-2">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => openExternal(project.github)}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-gray-900 dark:bg-gray-700 text-white hover:bg-gray-800 dark:hover:bg-gray-600 transition shadow-sm"
                  >
                    <Github size={14} />
                    Code
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => openExternal(project.live)}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition shadow-sm"
                  >
                    <ExternalLink size={14} />
                    Live
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => openExternal(project.backend)}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                  >
                    <Server size={14} />
                    API
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => openExternal(project.swagger)}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border border-blue-300 dark:border-blue-700 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition"
                  >
                    <BookOpen size={14} />
                    Docs
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors group"
          >
            View All Projects
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;