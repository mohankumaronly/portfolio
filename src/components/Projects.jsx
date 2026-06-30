import { motion } from "framer-motion";
import { Github, ExternalLink, BookOpen, Server, SparklesIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
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
    caseStudy: "#",
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
    caseStudy: "#",
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
    caseStudy: "#",
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
    caseStudy: "#",
    category: "Developer Tools"
  },
];

const openExternal = (url) => {
  if (!url || url === "#") return;
  window.open(url, "_blank", "noopener,noreferrer");
};

const Projects = () => {
  const navigate = useNavigate();

  return (
    <section
      id="projects"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-purple-300/10 dark:bg-purple-900/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-blue-300/10 dark:bg-blue-900/10 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
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
          <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/30 rounded-full">
            <SparklesIcon className="w-3.5 h-3.5" />
            PORTFOLIO
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Featured <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Production-grade full stack applications showcasing secure backend architecture, 
            modern frontend design, and scalable system solutions
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mx-auto mt-4"></div>
        </motion.div>

        {/* Projects Grid - 2 columns on larger screens */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-white dark:bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 group"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Category Badge */}
                <div className="absolute top-4 right-4 px-3 py-1.5 bg-black/60 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                  {project.category}
                </div>
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {project.desc}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                    Key Features
                  </h4>
                  <ul className="grid grid-cols-1 gap-1.5">
                    {project.features.slice(0, 4).map((f, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-gray-700 dark:text-gray-300">
                        <span className="text-purple-500 dark:text-purple-400 mt-0.5">▹</span>
                        <span>{f}</span>
                      </li>
                    ))}
                    {project.features.length > 4 && (
                      <li className="text-xs text-gray-500 dark:text-gray-500 italic">
                        +{project.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.split(', ').slice(0, 5).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 text-xs font-medium bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.split(', ').length > 5 && (
                      <span className="px-2 py-0.5 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full">
                        +{project.tech.split(', ').length - 5}
                      </span>
                    )}
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-2">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => openExternal(project.github)}
                    className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-lg bg-gray-900 text-white dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 transition shadow-md hover:shadow-lg"
                  >
                    <Github size={14} />
                    GitHub
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => openExternal(project.live)}
                    className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                  >
                    <ExternalLink size={14} />
                    Live
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => openExternal(project.backend)}
                    className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                  >
                    <Server size={14} />
                    API
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => openExternal(project.swagger)}
                    className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-lg border border-blue-500 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition"
                  >
                    <BookOpen size={14} />
                    Docs
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-medium text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors group"
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