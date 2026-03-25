import { motion } from "framer-motion";
import { Github, ExternalLink, BookOpen, Server } from "lucide-react";
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
      className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-primary dark:bg-primary-dark"
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white text-center"
        >
          Featured Project
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-4 text-sm sm:text-base text-gray-700 dark:text-gray-400 text-center max-w-2xl mx-auto"
        >
          Production-grade full stack application showcasing secure backend architecture and scalable system design
        </motion.p>

        <div className="mt-10">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-gray-100 dark:bg-black/40 rounded-2xl p-6 border border-gray-300 dark:border-gray-800 hover:shadow-xl transition-all group"
            >
              <div className="relative overflow-hidden rounded-lg mb-6 aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white">
                {project.title}
              </h3>

              <p className="mt-3 text-sm sm:text-base text-gray-700 dark:text-gray-400">
                {project.desc}
              </p>

              <ul className="mt-4 space-y-2 text-gray-700 dark:text-gray-400 text-sm">
                {project.features.map((f, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="text-blue-500">•</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-4 text-sm text-gray-600 dark:text-gray-500">
                <span className="font-semibold text-gray-800 dark:text-gray-300">
                  Tech:
                </span>{" "}
                {project.tech}
              </p>

              {/* Buttons */}
              <div className="mt-6 flex flex-wrap gap-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => openExternal(project.github)}
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md bg-gray-900 text-white dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 transition"
                >
                  <Github size={16} />
                  GitHub
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => openExternal(project.live)}
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md border border-gray-500 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-800 transition"
                >
                  <ExternalLink size={16} />
                  Live
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => openExternal(project.backend)}
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md border border-gray-500 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-800 transition"
                >
                  <Server size={16} />
                  Backend API
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => openExternal(project.swagger)}
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md border border-blue-500 text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition"
                >
                  <BookOpen size={16} />
                  API Docs
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;