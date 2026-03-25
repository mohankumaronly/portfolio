import React from 'react';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowLeft, Tag, Twitter, Linkedin, Facebook } from "lucide-react";

const OpenClawBlog = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('Link copied to clipboard!');
  };

  return (
    <article className="min-h-screen py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-primary dark:bg-primary-dark">
      <div className="max-w-3xl mx-auto">
        
        {/* Back to blog link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-sm text-gray-700 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to all articles
          </Link>
        </motion.div>

        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 rounded-full">
              AI Agents
            </span>
            <span className="flex items-center gap-1 text-xs text-gray-600 dark:text-gray-400">
              <Calendar className="w-3 h-3" />
              February 19, 2024
            </span>
            <span className="flex items-center gap-1 text-xs text-gray-600 dark:text-gray-400">
              <Clock className="w-3 h-3" />
              6 min read
            </span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
            OpenClaw: AI Agent Attempts to Earn $750 for Mac Mini
          </h1>
          
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
            Inside the autonomous commerce experiment where an AI agent tries to earn money 
            for hardware through creative tasks and micro-transactions.
          </p>
        </motion.header>

        {/* Author Info - Simplified */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-8 flex items-center gap-3"
        >
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
            M
          </div>
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Written by</p>
            <p className="text-lg font-semibold text-gray-900 dark:text-white">Mohan</p>
            <p className="text-xs text-gray-600 dark:text-gray-400">Full-Stack MERN Developer</p>
          </div>
        </motion.div>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-8 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800"
        >
          <img 
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800" 
            alt="AI Agent Concept"
            className="w-full h-auto"
          />
        </motion.div>

        {/* Content - Fixed dark mode colors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-8 prose prose-lg max-w-none"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">The Experiment</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            In a groundbreaking experiment, OpenClaw, an autonomous AI agent, was given a simple 
            mission: earn $750 to purchase a Mac Mini. What followed was a fascinating journey 
            into the world of autonomous commerce, micro-tasks, and AI-driven decision making.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">How It Works</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            OpenClaw leverages multiple AI models and APIs to identify, evaluate, and execute 
            tasks that generate income. From content creation to data processing, the agent 
            autonomously navigates various platforms to maximize earnings.
          </p>

          <div className="bg-gray-100 dark:bg-gray-900 p-6 rounded-xl my-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Key Capabilities:</h3>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-blue-500 font-bold mt-0.5">•</span>
                <span className="text-gray-700 dark:text-gray-300">
                  <span className="font-semibold text-gray-900 dark:text-white">Task Identification:</span> Scans platforms for profitable micro-tasks
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-500 font-bold mt-0.5">•</span>
                <span className="text-gray-700 dark:text-gray-300">
                  <span className="font-semibold text-gray-900 dark:text-white">Resource Management:</span> Allocates computing resources efficiently
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-500 font-bold mt-0.5">•</span>
                <span className="text-gray-700 dark:text-gray-300">
                  <span className="font-semibold text-gray-900 dark:text-white">Learning Loop:</span> Improves performance based on success/failure rates
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-500 font-bold mt-0.5">•</span>
                <span className="text-gray-700 dark:text-gray-300">
                  <span className="font-semibold text-gray-900 dark:text-white">Autonomous Decision Making:</span> Evaluates risk vs reward for each task
                </span>
              </li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Results So Far</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            After 30 days of operation, OpenClaw has earned $247, demonstrating the potential 
            of autonomous AI agents in the gig economy. While short of the $750 goal, the 
            experiment has provided valuable insights into AI-driven commerce.
          </p>

          <div className="grid grid-cols-3 gap-4 my-8">
            <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">$247</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Earned</div>
            </div>
            <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">156</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Tasks</div>
            </div>
            <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">73%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Success Rate</div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Implications for the Future</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            This experiment opens up fascinating questions about the future of work and 
            AI autonomy. As these systems become more sophisticated, we may see a new 
            class of digital workers operating independently in the online economy.
          </p>

          <blockquote className="border-l-4 border-blue-500 pl-4 italic my-8 text-gray-700 dark:text-gray-300">
            "The OpenClaw experiment demonstrates that AI agents can not only assist humans 
            but actively participate in economic activities, potentially revolutionizing how 
            we think about work and value creation in the digital age."
          </blockquote>
        </motion.div>

        {/* Tags */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-8 pt-6 border-t border-gray-300 dark:border-gray-800"
        >
          <div className="flex items-center gap-2 flex-wrap">
            <Tag className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            {["Artificial Intelligence", "Automation", "Experiments", "Future of Work"].map(tag => (
              <Link
                key={tag}
                to={`/blog/tag/${tag.toLowerCase()}`}
                className="px-3 py-1 text-xs bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-full transition"
              >
                #{tag}
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Share Section - Simplified */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-6 flex items-center justify-between"
        >
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600 dark:text-gray-400">Share:</span>
            <a 
              href={`https://twitter.com/intent/tweet?text=Check out this article: OpenClaw: AI Agent Attempts to Earn $750 for Mac Mini&url=${window.location.href}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900/30 dark:hover:text-blue-400 transition"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a 
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900/30 dark:hover:text-blue-400 transition"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a 
              href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900/30 dark:hover:text-blue-400 transition"
            >
              <Facebook className="w-4 h-4" />
            </a>
          </div>
          
          <button 
            onClick={copyToClipboard}
            className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition"
          >
            Copy Link
          </button>
        </motion.div>

        {/* Related Posts */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-12 pt-8 border-t border-gray-300 dark:border-gray-800"
        >
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            Related Articles
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Link
              to="/blog/claude-vs-gpt4-comparison"
              className="group p-4 bg-gray-100 dark:bg-black/40 rounded-lg border border-gray-300 dark:border-gray-800 hover:shadow-md transition"
            >
              <span className="text-xs text-blue-600 dark:text-blue-400">AI Models</span>
              <h4 className="mt-2 font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
                Claude vs GPT-4: A Developer's Perspective
              </h4>
              <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">
                Feb 15, 2024 · 8 min read
              </p>
            </Link>
            
            <Link
              to="/blog/future-full-stack-development-2024"
              className="group p-4 bg-gray-100 dark:bg-black/40 rounded-lg border border-gray-300 dark:border-gray-800 hover:shadow-md transition"
            >
              <span className="text-xs text-blue-600 dark:text-blue-400">Web Development</span>
              <h4 className="mt-2 font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
                The Future of Full-Stack Development in 2024
              </h4>
              <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">
                Feb 10, 2024 · 5 min read
              </p>
            </Link>
          </div>
        </motion.div>
      </div>
    </article>
  );
};

export default OpenClawBlog;