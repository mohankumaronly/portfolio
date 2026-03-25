  import React from 'react';
  import { motion } from "framer-motion";
  import { Link } from "react-router-dom";
  import { Calendar, Clock, ArrowLeft, Tag, Twitter, Linkedin, Facebook, Code, Shield, Key, Lock, RefreshCw } from "lucide-react";

  const JwtAuthenticationBlog = () => {
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
              <span className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 rounded-full">
                Security
              </span>
              <span className="flex items-center gap-1 text-xs text-gray-600 dark:text-gray-400">
                <Calendar className="w-3 h-3" />
                February 15, 2024
              </span>
              <span className="flex items-center gap-1 text-xs text-gray-600 dark:text-gray-400">
                <Clock className="w-3 h-3" />
                8 min read
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
              Building Production-Grade Authentication with JWT
            </h1>
            
            <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
              A deep dive into implementing secure JWT authentication with refresh tokens, 
              HTTP-only cookies, and industry best practices for production applications.
            </p>
          </motion.header>

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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-8 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800"
          >
            <img 
              src="https://images.unsplash.com/photo-1633265486064-086b219458ec?w=800" 
              alt="JWT Authentication Security Concept"
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
                Authentication is the gatekeeper of your application. In today's landscape, 
                where data breaches cost companies millions and user trust is paramount, 
                implementing a robust authentication system isn't just a feature—it's a necessity.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                JSON Web Tokens (JWT) have become the industry standard for stateless authentication. 
                However, many developers stop at the basics—issuing a single token and calling it done. 
                In this guide, I'll walk you through building a production-grade authentication system 
                that can withstand real-world attacks and scale with your application.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4 flex items-center gap-2">
                <Key className="w-6 h-6 text-blue-500" />
                Understanding JWT Structure
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Before diving into implementation, let's understand what a JWT actually is. 
                A JWT consists of three parts separated by dots:
              </p>
              
              <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg font-mono text-sm mb-4 overflow-x-auto">
                <code className="text-gray-800 dark:text-gray-300">
                  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
                </code>
              </div>

              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex gap-3">
                  <span className="text-blue-500 font-bold">•</span>
                  <span><strong className="text-gray-900 dark:text-white">Header:</strong> Contains the signing algorithm and token type</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-500 font-bold">•</span>
                  <span><strong className="text-gray-900 dark:text-white">Payload:</strong> Contains the claims (user data, permissions, etc.)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-500 font-bold">•</span>
                  <span><strong className="text-gray-900 dark:text-white">Signature:</strong> Verifies the token hasn't been tampered with</span>
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4 flex items-center gap-2">
                <Lock className="w-6 h-6 text-red-500" />
                Why Simple JWT Isn't Enough
              </h2>
              
              <div className="bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800 p-6 rounded-xl mb-6">
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  <strong className="text-gray-900 dark:text-white">Common vulnerabilities in basic JWT implementations:</strong>
                </p>
                <ul className="space-y-2">
                  <li className="flex gap-2 text-gray-700 dark:text-gray-300">
                    <span className="text-red-500">✗</span>
                    No token revocation mechanism
                  </li>
                  <li className="flex gap-2 text-gray-700 dark:text-gray-300">
                    <span className="text-red-500">✗</span>
                    Tokens stored in localStorage (vulnerable to XSS)
                  </li>
                  <li className="flex gap-2 text-gray-700 dark:text-gray-300">
                    <span className="text-red-500">✗</span>
                    No refresh token rotation
                  </li>
                  <li className="flex gap-2 text-gray-700 dark:text-gray-300">
                    <span className="text-red-500">✗</span>
                    Long-lived access tokens
                  </li>
                </ul>
              </div>
            </section>

            {/* Production-Grade Architecture */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4 flex items-center gap-2">
                <Shield className="w-6 h-6 text-green-500" />
                Production-Grade Architecture
              </h2>

              <div className="bg-gray-100 dark:bg-gray-900 p-6 rounded-xl my-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Token Strategy</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      Access Token
                    </h4>
                    <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                      <li>• Short-lived (15 minutes)</li>
                      <li>• Stored in memory only</li>
                      <li>• Contains user claims</li>
                      <li>• Sent with each request</li>
                    </ul>
                  </div>

                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                      <RefreshCw className="w-4 h-4 text-green-500" />
                      Refresh Token
                    </h4>
                    <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                      <li>• Long-lived (7-30 days)</li>
                      <li>• HTTP-only cookie</li>
                      <li>• One-time use only</li>
                      <li>• Rotated on each refresh</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Implementation Code</h3>
              
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-4">
                <pre className="text-sm text-gray-300 font-mono">
                  <code>{`// Generate token pair
  const generateTokens = (userId) => {
    const accessToken = jwt.sign(
      { userId, type: 'access' },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: '15m' }
    );

    const refreshToken = jwt.sign(
      { userId, type: 'refresh' },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: '7d' }
    );

    // Store refresh token hash in database
    await storeRefreshToken(userId, refreshToken);

    return { accessToken, refreshToken };
  };

  // Set HTTP-only cookie
  res.cookie('refreshToken', refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
  });`}</code>
                </pre>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                Refresh Token Rotation
              </h2>
              
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                One of the most critical security features is refresh token rotation. 
                Each time a refresh token is used to get a new access token, a new refresh 
                token is issued and the old one is invalidated.
              </p>

              <div className="bg-gray-100 dark:bg-gray-900 p-6 rounded-xl my-6">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Token Rotation Flow:</h4>
                <ol className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex gap-3">
                    <span className="w-5 h-5 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center text-xs font-bold">1</span>
                    <span>Client sends refresh token to /refresh endpoint</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-5 h-5 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center text-xs font-bold">2</span>
                    <span>Server validates token and checks database for existence</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-5 h-5 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center text-xs font-bold">3</span>
                    <span>Server generates new access token AND new refresh token</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-5 h-5 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center text-xs font-bold">4</span>
                    <span>Old refresh token is removed from database</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-5 h-5 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center text-xs font-bold">5</span>
                    <span>New refresh token is stored and sent via HTTP-only cookie</span>
                  </li>
                </ol>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                Security Best Practices
              </h2>

              <div className="grid gap-4">
                <div className="bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-800 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">✅ HTTP-Only Cookies</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Store refresh tokens in HTTP-only cookies to prevent XSS attacks. 
                    JavaScript cannot access these cookies, making them immune to client-side scripts.
                  </p>
                </div>

                <div className="bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-800 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">✅ Short-Lived Access Tokens</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Keep access tokens short-lived (5-15 minutes). This limits the damage if a token is stolen.
                  </p>
                </div>

                <div className="bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-800 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">✅ Token Fingerprinting</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Bind tokens to specific devices/browsers by including a fingerprint derived from 
                    user-agent and IP address in the token payload.
                  </p>
                </div>

                <div className="bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-800 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">✅ Rate Limiting</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Implement rate limiting on authentication endpoints to prevent brute force attacks.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                Database Schema for Token Management
              </h2>

              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-4">
                <pre className="text-sm text-gray-300 font-mono">
                  <code>{`// MongoDB Schema Example
  const userSchema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    refreshTokens: [{
      token: { type: String, required: true },
      deviceInfo: { type: String },
      ipAddress: { type: String },
      createdAt: { type: Date, default: Date.now },
      expiresAt: { type: Date, required: true }
    }]
  });

  // Index for automatic cleanup
  userSchema.index({ 'refreshTokens.expiresAt': 1 }, 
    { expireAfterSeconds: 0 });`}</code>
                </pre>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                Secure Logout Implementation
              </h2>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                A proper logout should invalidate the refresh token on the server side 
                and clear the client-side cookie.
              </p>

              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                <pre className="text-sm text-gray-300 font-mono">
                  <code>{`// Logout endpoint
  app.post('/api/logout', async (req, res) => {
    const refreshToken = req.cookies.refreshToken;
    
    if (refreshToken) {
      // Remove token from database
      await User.updateOne(
        { 'refreshTokens.token': refreshToken },
        { $pull: { refreshTokens: { token: refreshToken } } }
      );
      
      // Clear cookie
      res.clearCookie('refreshToken');
    }
    
    res.status(200).json({ message: 'Logged out successfully' });
  });`}</code>
                </pre>
              </div>
            </section>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                Conclusion
              </h2>
              
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Building production-grade authentication requires more than just generating 
                tokens. It demands a thoughtful approach to security, careful consideration 
                of token storage, and robust mechanisms for token lifecycle management.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                By implementing short-lived access tokens, HTTP-only cookies, refresh token 
                rotation, and proper database management, you create an authentication system 
                that can withstand common attacks and provide a secure foundation for your 
                application.
              </p>

              <blockquote className="border-l-4 border-blue-500 pl-4 italic my-6 text-gray-700 dark:text-gray-300">
                "Security is not a product, but a process. Your authentication system should 
                be designed with the assumption that it will be attacked and built to survive 
                those attacks."
              </blockquote>
            </section>

            <section className="mb-8">
              <div className="bg-blue-50 dark:bg-blue-900/10 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <Code className="w-5 h-5 text-blue-500" />
                  Additional Resources
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline text-sm">
                      • JWT.io - Debug your tokens
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline text-sm">
                      • OWASP Authentication Cheat Sheet
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline text-sm">
                      • GitHub Repository: Complete Authentication Example
                    </a>
                  </li>
                </ul>
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
              {["Security", "JWT", "Authentication", "Node.js", "Web Development", "Best Practices"].map(tag => (
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
                href={`https://twitter.com/intent/tweet?text=Building Production-Grade Authentication with JWT - A comprehensive guide&url=${window.location.href}`}
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
                to="/blog/oauth2-google-signin-implementation"
                className="group p-4 bg-gray-100 dark:bg-black/40 rounded-lg border border-gray-300 dark:border-gray-800 hover:shadow-md transition"
              >
                <span className="text-xs text-blue-600 dark:text-blue-400">Authentication</span>
                <h4 className="mt-2 font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
                  Implementing OAuth 2.0 and Google Sign-In
                </h4>
                <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">
                  Jan 20, 2024 · 6 min read
                </p>
              </Link>
              
              <Link
                to="/blog/mongodb-query-optimization"
                className="group p-4 bg-gray-100 dark:bg-black/40 rounded-lg border border-gray-300 dark:border-gray-800 hover:shadow-md transition"
              >
                <span className="text-xs text-blue-600 dark:text-blue-400">Database</span>
                <h4 className="mt-2 font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
                  Optimizing MongoDB Queries for High-Scale Applications
                </h4>
                <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">
                  Feb 5, 2024 · 7 min read
                </p>
              </Link>
            </div>
          </motion.div>
        </div>
      </article>
    );
  };

  export default JwtAuthenticationBlog;