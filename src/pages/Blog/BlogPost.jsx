import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import OpenClawBlog from "./OpenClawBlog";
import JwtAuthenticationBlog from "./JwtAuthenticationBlog";
import TradingBotBlog from "./TradingBotBlog";
import ClaudeVsGPT4Blog from "./ClaudeVsGPT4Blog";
import MongoDBOptimizationBlog from "./MongoDBOptimizationBlog";
import OAuthGoogleBlog from "./OAuthGoogleBlog";
import FutureFullStackBlog from "./FutureFullStackBlog";

const BlogPost = () => {
  const { slug } = useParams();

  const posts = {
    "openclaw-ai-agent-experiment": <OpenClawBlog />,
    "jwt-authentication-guide": <JwtAuthenticationBlog />,
    "algorithmic-trading-crypto-bot-nodejs": <TradingBotBlog />,
    "claude-vs-gpt4-comparison": <ClaudeVsGPT4Blog />,
    "mongodb-query-optimization": <MongoDBOptimizationBlog />,
    "oauth2-google-signin-implementation": <OAuthGoogleBlog />,
    "future-full-stack-development-2024": <FutureFullStackBlog />,
  };

  if (!posts[slug]) {
    return (
      <section className="min-h-screen py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-primary dark:bg-primary-dark">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
              Post Not Found
            </h1>
            <p className="mt-4 text-gray-700 dark:text-gray-400">
              The blog post you're looking for doesn't exist or has been moved.
            </p>
            <Link
              to="/blog"
              className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition text-sm font-medium"
            >
              Back to Blog
            </Link>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {posts[slug]}
    </motion.div>
  );
};

export default BlogPost;