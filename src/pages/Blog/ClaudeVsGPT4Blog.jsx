import React from 'react';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowLeft, Tag, Twitter, Linkedin, Facebook, Code, Brain, Zap, Shield, BarChart, Cpu, GitBranch } from "lucide-react";

const ClaudeVsGPT4Blog = () => {
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

        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 text-xs font-medium bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 rounded-full">
              AI Models
            </span>
            <span className="flex items-center gap-1 text-xs text-gray-600 dark:text-gray-400">
              <Calendar className="w-3 h-3" />
              January 28, 2024
            </span>
            <span className="flex items-center gap-1 text-xs text-gray-600 dark:text-gray-400">
              <Clock className="w-3 h-3" />
              9 min read
            </span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
            Claude vs GPT-4: A Developer's Perspective
          </h1>
          
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
            An in-depth comparison of AI assistants for coding, architecture design, 
            and problem-solving capabilities based on real-world development scenarios.
          </p>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-8 flex items-center gap-3"
        >
          <div className="w-12 h-12 bg-linear-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
            M
          </div>
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Written by</p>
            <p className="text-lg font-semibold text-gray-900 dark:text-white">Mohan</p>
            <p className="text-xs text-gray-600 dark:text-gray-400">Full-Stack MERN Developer</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-8 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800"
        >
          <img 
            src="https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?w=800" 
            alt="Claude vs GPT-4 AI Comparison"
            className="w-full h-auto"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-8"
        >
          <section className="mb-8">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              The AI landscape has evolved dramatically with the emergence of powerful language models 
              that can assist developers in writing code, debugging issues, and architecting solutions. 
              Two giants stand out in this space: OpenAI's GPT-4 and Anthropic's Claude. As a developer 
              who's used both extensively in production environments, I'll share my hands-on experience 
              and help you decide which one fits your workflow better.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Both models represent the cutting edge of AI technology, but they have distinct 
              personalities, strengths, and weaknesses when it comes to developer tasks. Let's dive 
              into a comprehensive comparison across multiple dimensions that matter to developers.
            </p>
          </section>

          <section className="mb-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
              <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <Brain className="w-6 h-6 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                <div className="text-sm font-medium text-gray-900 dark:text-white">Context Window</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">Claude: 100K | GPT-4: 32K</div>
              </div>
              <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <Code className="w-6 h-6 text-green-600 dark:text-green-400 mx-auto mb-2" />
                <div className="text-sm font-medium text-gray-900 dark:text-white">Code Quality</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">Claude: 8.5/10 | GPT-4: 9/10</div>
              </div>
              <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <Zap className="w-6 h-6 text-purple-600 dark:text-purple-400 mx-auto mb-2" />
                <div className="text-sm font-medium text-gray-900 dark:text-white">Speed</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">Claude: Fast | GPT-4: Moderate</div>
              </div>
              <div className="text-center p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                <Shield className="w-6 h-6 text-orange-600 dark:text-orange-400 mx-auto mb-2" />
                <div className="text-sm font-medium text-gray-900 dark:text-white">Security</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">Both: Enterprise-grade</div>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4 flex items-center gap-2">
              <Code className="w-6 h-6 text-blue-500" />
              Coding Capabilities Comparison
            </h2>
            
            <div className="bg-gray-100 dark:bg-gray-900 p-6 rounded-xl my-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Test Case: Building a Rate Limiter</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    GPT-4 Approach
                  </h4>
                  <div className="bg-gray-900 rounded p-3 overflow-x-auto">
                    <pre className="text-xs text-gray-300 font-mono">
                      <code>{`class RateLimiter {
  constructor(limit, windowMs) {
    this.limit = limit;
    this.windowMs = windowMs;
    this.requests = new Map();
  }

  async checkLimit(key) {
    const now = Date.now();
    const windowStart = now - this.windowMs;
    
    if (!this.requests.has(key)) {
      this.requests.set(key, []);
    }
    
    const timestamps = this.requests.get(key)
      .filter(t => t > windowStart);
    
    if (timestamps.length >= this.limit) {
      return false;
    }
    
    timestamps.push(now);
    this.requests.set(key, timestamps);
    return true;
  }
}`}</code>
                    </pre>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                    ✓ Clean, production-ready code
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    Claude Approach
                  </h4>
                  <div className="bg-gray-900 rounded p-3 overflow-x-auto">
                    <pre className="text-xs text-gray-300 font-mono">
                      <code>{`class AdvancedRateLimiter {
  constructor(options = {}) {
    this.limit = options.limit || 100;
    this.windowMs = options.windowMs || 60000;
    this.keyGenerator = options.keyGenerator || 
      (req) => req.ip;
    this.storage = options.storage || new Map();
    this.onLimitReached = options.onLimitReached;
  }

  middleware() {
    return async (req, res, next) => {
      const key = this.keyGenerator(req);
      const current = await this.storage.get(key) || 
        { count: 0, resetTime: Date.now() + this.windowMs };
      
      if (current.count >= this.limit) {
        if (this.onLimitReached) {
          await this.onLimitReached(req, key);
        }
        return res.status(429).json({
          error: 'Rate limit exceeded',
          retryAfter: Math.ceil((current.resetTime - Date.now()) / 1000)
        });
      }
      
      current.count++;
      await this.storage.set(key, current);
      next();
    };
  }
}`}</code>
                    </pre>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                    ✓ More feature-rich, middleware-ready
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-4 mt-4">
              <div className="bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-800 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">GPT-4 Strengths in Coding:</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                  <li className="flex gap-2">• Excellent at following specific coding patterns and style guides</li>
                  <li className="flex gap-2">• Superior at debugging complex issues and explaining errors</li>
                  <li className="flex gap-2">• Better at generating comprehensive test suites</li>
                  <li className="flex gap-2">• More consistent with modern framework best practices</li>
                </ul>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/10 border border-purple-200 dark:border-purple-800 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Claude Strengths in Coding:</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                  <li className="flex gap-2">• Handles massive codebases with its 100K context window</li>
                  <li className="flex gap-2">• More thoughtful about edge cases and error handling</li>
                  <li className="flex gap-2">• Better at explaining architectural decisions and trade-offs</li>
                  <li className="flex gap-2">• Superior at refactoring and code organization</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4 flex items-center gap-2">
              <GitBranch className="w-6 h-6 text-orange-500" />
              System Architecture & Design
            </h2>

            <div className="bg-gray-100 dark:bg-gray-900 p-6 rounded-xl my-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Real-World Test: E-commerce Backend Design</h3>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                When asked to design a scalable e-commerce backend, here's how they approached it:
              </p>

              <div className="space-y-4">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">GPT-4's Response:</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    "I'll design a microservices architecture with API Gateway, separate services for 
                    orders, inventory, and users, using message queues for async processing..."
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                    Focus: Industry standards, AWS services, immediate implementation
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Claude's Response:</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    "Before diving into architecture, let's analyze your scale requirements, team size, 
                    and growth projections. Here are three different approaches with their trade-offs..."
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                    Focus: Context-aware, multiple options, scalability considerations
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4 flex items-center gap-2">
              <Brain className="w-6 h-6 text-purple-500" />
              Problem-Solving Approach
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-100 dark:bg-gray-900 p-5 rounded-xl">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">GPT-4</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500">→</span>
                    <span className="text-gray-700 dark:text-gray-300">Quick to propose solutions, often production-ready</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500">→</span>
                    <span className="text-gray-700 dark:text-gray-300">Excellent at explaining complex concepts simply</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500">→</span>
                    <span className="text-gray-700 dark:text-gray-300">Better at suggesting modern libraries and tools</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-100 dark:bg-gray-900 p-5 rounded-xl">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Claude</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500">→</span>
                    <span className="text-gray-700 dark:text-gray-300">More methodical, asks clarifying questions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500">→</span>
                    <span className="text-gray-700 dark:text-gray-300">Better at identifying potential pitfalls early</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500">→</span>
                    <span className="text-gray-700 dark:text-gray-300">Superior at considering non-functional requirements</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4 flex items-center gap-2">
              <BarChart className="w-6 h-6 text-green-500" />
              When to Use Which?
            </h2>

            <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800 p-6 rounded-xl mb-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Choose GPT-4 When:</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex gap-2">✓ You need production-ready code quickly</li>
                <li className="flex gap-2">✓ Working with popular frameworks (React, Next.js, Node.js)</li>
                <li className="flex gap-2">✓ Debugging complex error messages</li>
                <li className="flex gap-2">✓ Generating comprehensive test suites</li>
                <li className="flex gap-2">✓ Learning new technologies or concepts</li>
              </ul>
            </div>

            <div className="bg-purple-50 dark:bg-purple-900/10 border border-purple-200 dark:border-purple-800 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Choose Claude When:</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex gap-2">✓ Working with large existing codebases</li>
                <li className="flex gap-2">✓ Need architectural guidance with trade-off analysis</li>
                <li className="flex gap-2">✓ Designing systems with complex requirements</li>
                <li className="flex gap-2">✓ Refactoring or optimizing code structure</li>
                <li className="flex gap-2">✓ Discussing security and compliance considerations</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              The Verdict
            </h2>
            
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              After months of using both models daily, here's my honest take: You don't have to choose. 
              Each excels in different scenarios, and the best approach is to use them as complementary tools.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              GPT-4 is your go-to for rapid development, debugging, and learning. It's like having a 
              senior developer who's always up-to-date with the latest frameworks and can produce 
              working code quickly.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Claude shines in architectural discussions, code reviews, and handling large codebases. 
              It's like a thoughtful architect who considers all angles before making recommendations.
            </p>

            <blockquote className="border-l-4 border-purple-500 pl-4 italic my-6 text-gray-700 dark:text-gray-300">
              "The future of development isn't about choosing between AI models—it's about knowing 
              which tool to use for each task. GPT-4 and Claude are both invaluable additions to a 
              developer's toolkit, each with its own superpowers."
            </blockquote>

            <div className="bg-linear-to-r from-blue-500 to-purple-500 p-6 rounded-xl text-white mt-8">
              <h3 className="text-xl font-bold mb-2">Pro Tip</h3>
              <p className="text-white/90">
                Use both! I often start with Claude for architecture discussions and planning, then 
              switch to GPT-4 for implementation. For code reviews, I run the same code through both 
              to get comprehensive feedback from different perspectives.
              </p>
            </div>
          </section>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-8 pt-6 border-t border-gray-300 dark:border-gray-800"
        >
          <div className="flex items-center gap-2 flex-wrap">
            <Tag className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            {["AI", "GPT-4", "Claude", "Comparison", "Development", "Machine Learning", "Programming", "AI Tools"].map(tag => (
              <Link
                key={tag}
                to={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                className="px-3 py-1 text-xs bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-full transition"
              >
                #{tag}
              </Link>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-6 flex items-center justify-between"
        >
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600 dark:text-gray-400">Share:</span>
            <a 
              href={`https://twitter.com/intent/tweet?text=Claude vs GPT-4: A Developer's Perspective - Comprehensive comparison of AI assistants for coding&url=${window.location.href}`}
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
              to="/blog/openclaw-ai-agent-experiment"
              className="group p-4 bg-gray-100 dark:bg-black/40 rounded-lg border border-gray-300 dark:border-gray-800 hover:shadow-md transition"
            >
              <span className="text-xs text-blue-600 dark:text-blue-400">AI Agents</span>
              <h4 className="mt-2 font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
                OpenClaw: AI Agent Attempts to Earn $750 for Mac Mini
              </h4>
              <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">
                Feb 19, 2024 · 6 min read
              </p>
            </Link>
            
            <Link
              to="/blog/jwt-authentication-guide"
              className="group p-4 bg-gray-100 dark:bg-black/40 rounded-lg border border-gray-300 dark:border-gray-800 hover:shadow-md transition"
            >
              <span className="text-xs text-blue-600 dark:text-blue-400">Security</span>
              <h4 className="mt-2 font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
                Building Production-Grade Authentication with JWT
              </h4>
              <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">
                Feb 15, 2024 · 8 min read
              </p>
            </Link>
          </div>
        </motion.div>
      </div>
    </article>
  );
};

export default ClaudeVsGPT4Blog;