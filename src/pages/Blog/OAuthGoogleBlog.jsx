import React from 'react';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Calendar, Clock, ArrowLeft, Tag, Twitter, Linkedin, Facebook, 
  Shield, Key, Lock, RefreshCw, CheckCircle, AlertTriangle, 
  Globe, Users, Smartphone, Server, Github, Chrome 
} from "lucide-react";

const OAuthGoogleBlog = () => {
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
              Authentication
            </span>
            <span className="flex items-center gap-1 text-xs text-gray-600 dark:text-gray-400">
              <Calendar className="w-3 h-3" />
              January 20, 2024
            </span>
            <span className="flex items-center gap-1 text-xs text-gray-600 dark:text-gray-400">
              <Clock className="w-3 h-3" />
              6 min read
            </span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
            Implementing OAuth 2.0 and Google Sign-In
          </h1>
          
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
            A complete step-by-step guide to integrating OAuth 2.0 with Google authentication 
            in MERN applications, including security best practices and common pitfalls to avoid.
          </p>
        </motion.header>

        {/* Author Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-8 flex items-center gap-3"
        >
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
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
            src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800" 
            alt="OAuth 2.0 and Google Sign-In Implementation"
            className="w-full h-auto"
            loading="lazy"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-8"
        >
          {/* Introduction */}
          <section className="mb-8">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Remember the days of filling out yet another registration form? Your users certainly do—and they hate it. 
              OAuth 2.0 and "Sign in with Google" have become the gold standard for modern authentication, offering a 
              seamless experience while delegating the security headaches to tech giants who've spent billions getting it right.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              In this guide, I'll walk you through implementing Google Sign-In in your MERN application, from setting up 
              credentials in Google Cloud Console to handling the OAuth flow on both client and server. By the end, you'll 
              have a production-ready authentication system that users will love.
            </p>
          </section>

          {/* Quick Stats - Adoption & Benefits */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4 flex items-center gap-2">
              <Users className="w-6 h-6 text-blue-500" />
              Why OAuth Matters
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
              <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <Globe className="w-6 h-6 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                <div className="text-sm font-medium text-gray-900 dark:text-white">Adoption Rate</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">77% of users prefer</div>
              </div>
              <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <Users className="w-6 h-6 text-green-600 dark:text-green-400 mx-auto mb-2" />
                <div className="text-sm font-medium text-gray-900 dark:text-white">Conversion</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">+30% sign-ups</div>
              </div>
              <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <Shield className="w-6 h-6 text-purple-600 dark:text-purple-400 mx-auto mb-2" />
                <div className="text-sm font-medium text-gray-900 dark:text-white">Security</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">2FA & Account Protection</div>
              </div>
              <div className="text-center p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                <Smartphone className="w-6 h-6 text-orange-600 dark:text-orange-400 mx-auto mb-2" />
                <div className="text-sm font-medium text-gray-900 dark:text-white">Cross-Platform</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">Works everywhere</div>
              </div>
            </div>
          </section>

          {/* Understanding OAuth 2.0 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4 flex items-center gap-2">
              <Key className="w-6 h-6 text-indigo-500" />
              Understanding OAuth 2.0 Flow
            </h2>

            <div className="bg-gray-100 dark:bg-gray-900 p-6 rounded-xl my-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">The OAuth 2.0 Authorization Code Flow</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold flex-shrink-0">1</div>
                  <div className="flex-1">
                    <p className="text-gray-700 dark:text-gray-300">
                      <span className="font-semibold text-gray-900 dark:text-white">User clicks "Sign in with Google"</span> - Client redirects to Google's authorization server
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold flex-shrink-0">2</div>
                  <div className="flex-1">
                    <p className="text-gray-700 dark:text-gray-300">
                      <span className="font-semibold text-gray-900 dark:text-white">Google authenticates user</span> - User logs into their Google account and grants permissions
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold flex-shrink-0">3</div>
                  <div className="flex-1">
                    <p className="text-gray-700 dark:text-gray-300">
                      <span className="font-semibold text-gray-900 dark:text-white">Authorization code returned</span> - Google redirects back to your app with a temporary code
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold flex-shrink-0">4</div>
                  <div className="flex-1">
                    <p className="text-gray-700 dark:text-gray-300">
                      <span className="font-semibold text-gray-900 dark:text-white">Server exchanges code for tokens</span> - Backend sends code + client secret to Google
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold flex-shrink-0">5</div>
                  <div className="flex-1">
                    <p className="text-gray-700 dark:text-gray-300">
                      <span className="font-semibold text-gray-900 dark:text-white">Access & Refresh tokens received</span> - Server can now access Google APIs on behalf of user
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Google Cloud Console Setup */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4 flex items-center gap-2">
              <Chrome className="w-6 h-6 text-red-500" />
              Step 1: Google Cloud Console Setup
            </h2>

            <div className="bg-gray-100 dark:bg-gray-900 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Creating OAuth 2.0 Credentials</h3>
              
              <ol className="space-y-4">
                <li className="flex gap-3">
                  <span className="w-5 h-5 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">1</span>
                  <span className="text-gray-700 dark:text-gray-300">Go to <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Google Cloud Console</a> and create a new project or select existing</span>
                </li>
                <li className="flex gap-3">
                  <span className="w-5 h-5 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">2</span>
                  <span className="text-gray-700 dark:text-gray-300">Navigate to "APIs & Services" → "OAuth consent screen"</span>
                </li>
                <li className="flex gap-3">
                  <span className="w-5 h-5 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">3</span>
                  <span className="text-gray-700 dark:text-gray-300">Choose "External" user type (for most applications)</span>
                </li>
                <li className="flex gap-3">
                  <span className="w-5 h-5 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">4</span>
                  <span className="text-gray-700 dark:text-gray-300">Fill in app information (name, support email, etc.)</span>
                </li>
                <li className="flex gap-3">
                  <span className="w-5 h-5 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">5</span>
                  <span className="text-gray-700 dark:text-gray-300">Add scopes: email, profile, openid (basic info)</span>
                </li>
                <li className="flex gap-3">
                  <span className="w-5 h-5 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">6</span>
                  <span className="text-gray-700 dark:text-gray-300">Add test users (for development)</span>
                </li>
                <li className="flex gap-3">
                  <span className="w-5 h-5 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">7</span>
                  <span className="text-gray-700 dark:text-gray-300">Go to "Credentials" → "Create Credentials" → "OAuth client ID"</span>
                </li>
              </ol>

              <div className="bg-yellow-50 dark:bg-yellow-900/10 border border-yellow-200 dark:border-yellow-800 p-4 rounded-lg mt-6">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-yellow-500" />
                  Important Configuration
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Add your authorized JavaScript origins and redirect URIs:
                </p>
                <div className="bg-gray-900 rounded p-3 mt-2 overflow-x-auto">
                  <pre className="text-xs text-gray-300 font-mono">
                    <code>{`// Development
Authorized JavaScript origins:
http://localhost:3000

Authorized redirect URIs:
http://localhost:3000/auth/google/callback

// Production
https://yourapp.com
https://yourapp.com/auth/google/callback`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </section>

          {/* Client-Side Implementation */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4 flex items-center gap-2">
              <Globe className="w-6 h-6 text-green-500" />
              Step 2: Client-Side Implementation (React)
            </h2>

            <div className="space-y-6">
              <div className="bg-gray-100 dark:bg-gray-900 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Installation & Setup</h3>
                
                <div className="bg-gray-900 rounded p-4 overflow-x-auto mb-4">
                  <pre className="text-sm text-gray-300 font-mono">
                    <code>{`// Install the Google OAuth library
npm install @react-oauth/google

// Or for the older version (if you prefer)
npm install react-google-login`}</code>
                  </pre>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 mt-6">GoogleOAuthProvider Setup</h3>
                
                <div className="bg-gray-900 rounded p-4 overflow-x-auto">
                  <pre className="text-sm text-gray-300 font-mono">
                    <code>{`// App.js or index.js
import { GoogleOAuthProvider } from '@react-oauth/google';

const App = () => {
  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
      <YourAppComponents />
    </GoogleOAuthProvider>
  );
};

export default App;`}</code>
                  </pre>
                </div>
              </div>

              <div className="bg-gray-100 dark:bg-gray-900 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Login Component</h3>
                
                <div className="bg-gray-900 rounded p-4 overflow-x-auto">
                  <pre className="text-sm text-gray-300 font-mono">
                    <code>{`// components/GoogleLogin.js
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

const GoogleLoginButton = () => {
  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        // Send the token to your backend
        const res = await axios.post(
          'http://localhost:5000/api/auth/google',
          {
            token: tokenResponse.access_token
          }
        );
        
        // Store user data and tokens
        localStorage.setItem('user', JSON.stringify(res.data.user));
        localStorage.setItem('accessToken', res.data.accessToken);
        
        // Redirect or update UI
        window.location.href = '/dashboard';
      } catch (error) {
        console.error('Login failed:', error);
      }
    },
    onError: (error) => {
      console.error('Google Login Failed:', error);
    },
    scope: 'email profile openid'
  });

  return (
    <button
      onClick={() => login()}
      className="flex items-center gap-3 px-6 py-3 bg-white dark:bg-gray-800 
                 border border-gray-300 dark:border-gray-700 rounded-lg 
                 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
    >
      <img 
        src="/google-icon.svg" 
        alt="Google" 
        className="w-5 h-5"
      />
      <span className="text-gray-700 dark:text-gray-300 font-medium">
        Sign in with Google
      </span>
    </button>
  );
};

export default GoogleLoginButton;`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </section>

          {/* Server-Side Implementation */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4 flex items-center gap-2">
              <Server className="w-6 h-6 text-purple-500" />
              Step 3: Server-Side Implementation (Node.js)
            </h2>

            <div className="space-y-6">
              <div className="bg-gray-100 dark:bg-gray-900 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Required Packages</h3>
                
                <div className="bg-gray-900 rounded p-4 overflow-x-auto">
                  <pre className="text-sm text-gray-300 font-mono">
                    <code>{`npm install axios jsonwebtoken
npm install google-auth-library  // For token verification`}</code>
                  </pre>
                </div>
              </div>

              <div className="bg-gray-100 dark:bg-gray-900 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Auth Controller</h3>
                
                <div className="bg-gray-900 rounded p-4 overflow-x-auto">
                  <pre className="text-sm text-gray-300 font-mono">
                    <code>{`// controllers/authController.js
const { OAuth2Client } = require('google-auth-library');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

const googleAuth = async (req, res) => {
  try {
    const { token } = req.body;
    
    // Verify the Google token
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID
    });
    
    const { email, name, picture, sub: googleId } = ticket.getPayload();
    
    // Check if user exists
    let user = await User.findOne({ email });
    
    if (!user) {
      // Create new user
      user = await User.create({
        email,
        name,
        avatar: picture,
        googleId,
        authProvider: 'google',
        isVerified: true // Google emails are pre-verified
      });
    } else if (!user.googleId) {
      // Link Google account to existing user
      user.googleId = googleId;
      user.authProvider = 'google';
      user.isVerified = true;
      await user.save();
    }
    
    // Generate JWT tokens
    const accessToken = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: '15m' }
    );
    
    const refreshToken = jwt.sign(
      { userId: user._id },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: '7d' }
    );
    
    // Store refresh token in HTTP-only cookie
    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 7 * 24 * 60 * 60 * 1000
    });
    
    res.status(200).json({
      success: true,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        avatar: user.avatar
      },
      accessToken
    });
    
  } catch (error) {
    console.error('Google Auth Error:', error);
    res.status(401).json({
      success: false,
      message: 'Authentication failed'
    });
  }
};

module.exports = { googleAuth };`}</code>
                  </pre>
                </div>
              </div>

              <div className="bg-gray-100 dark:bg-gray-900 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">User Model</h3>
                
                <div className="bg-gray-900 rounded p-4 overflow-x-auto">
                  <pre className="text-sm text-gray-300 font-mono">
                    <code>{`// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    select: false // Don't return password by default
  },
  avatar: String,
  googleId: {
    type: String,
    sparse: true,
    unique: true
  },
  authProvider: {
    type: String,
    enum: ['local', 'google', 'facebook'],
    default: 'local'
  },
  isVerified: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  lastLogin: Date
});

module.exports = mongoose.model('User', userSchema);`}</code>
                  </pre>
                </div>
              </div>

              <div className="bg-gray-100 dark:bg-gray-900 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Auth Routes</h3>
                
                <div className="bg-gray-900 rounded p-4 overflow-x-auto">
                  <pre className="text-sm text-gray-300 font-mono">
                    <code>{`// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const { googleAuth } = require('../controllers/authController');

router.post('/auth/google', googleAuth);

module.exports = router;`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </section>

          {/* Security Best Practices */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4 flex items-center gap-2">
              <Lock className="w-6 h-6 text-red-500" />
              Security Best Practices
            </h2>

            <div className="grid gap-4">
              <div className="bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-800 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Always Verify Tokens on Server
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Never trust client-side assertions. Always verify the ID token on your backend using Google's library.
                </p>
              </div>

              <div className="bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-800 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Use State Parameter
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Implement the state parameter to prevent CSRF attacks. Generate a random string and verify it on return.
                </p>
              </div>

              <div className="bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-800 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Validate Email Domain
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  For enterprise apps, validate that the email domain matches your organization's domain (hd="@company.com").
                </p>
              </div>

              <div className="bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-800 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Implement Rate Limiting
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Protect your auth endpoints from brute force and DoS attacks using rate limiting.
                </p>
              </div>
            </div>
          </section>

          {/* Common Pitfalls & Solutions */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4 flex items-center gap-2">
              <AlertTriangle className="w-6 h-6 text-orange-500" />
              Common Pitfalls & Solutions
            </h2>

            <div className="space-y-4">
              <div className="bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">❌ Redirect URI Mismatch</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  One of the most common errors. The redirect URI in your code must exactly match what's registered in Google Cloud Console.
                </p>
                <div className="bg-gray-900 rounded p-2 mt-2">
                  <code className="text-xs text-gray-300">Error 400: redirect_uri_mismatch</code>
                </div>
                <p className="text-xs text-green-600 dark:text-green-400 mt-2">
                  ✅ Solution: Check for trailing slashes, http vs https, and port numbers
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">❌ Token Verification Failing</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  Using the wrong token type or not verifying the audience claim.
                </p>
                <div className="bg-gray-900 rounded p-2 mt-2">
                  <code className="text-xs text-gray-300">Error: Invalid token signature</code>
                </div>
                <p className="text-xs text-green-600 dark:text-green-400 mt-2">
                  ✅ Solution: Use access_token for API calls, id_token for user info; always verify audience
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">❌ CORS Issues</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  Frontend and backend on different ports/domains without proper CORS configuration.
                </p>
                <div className="bg-gray-900 rounded p-2 mt-2">
                  <code className="text-xs text-gray-300">Access to fetch at '...' from origin '...' has been blocked by CORS policy</code>
                </div>
                <p className="text-xs text-green-600 dark:text-green-400 mt-2">
                  ✅ Solution: Configure CORS properly on your backend
                </p>
              </div>
            </div>
          </section>

          {/* Environment Variables */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4 flex items-center gap-2">
              <Key className="w-6 h-6 text-yellow-500" />
              Environment Variables
            </h2>

            <div className="bg-gray-100 dark:bg-gray-900 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">.env Configuration</h3>
              
              <div className="bg-gray-900 rounded p-4 overflow-x-auto">
                <pre className="text-sm text-gray-300 font-mono">
                  <code>{`# Frontend (.env)
REACT_APP_GOOGLE_CLIENT_ID=your-google-client-id.apps.googleusercontent.com
REACT_APP_API_URL=http://localhost:5000

# Backend (.env)
GOOGLE_CLIENT_ID=your-google-client-id.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=your-google-client-secret
ACCESS_TOKEN_SECRET=your-access-token-secret
REFRESH_TOKEN_SECRET=your-refresh-token-secret
MONGODB_URI=your-mongodb-connection-string
CLIENT_URL=http://localhost:3000`}</code>
                </pre>
              </div>
              <p className="text-xs text-red-600 dark:text-red-400 mt-3">
                ⚠️ Never commit these files to version control. Use .gitignore!
              </p>
            </div>
          </section>

          {/* Testing Your Implementation */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4 flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-green-500" />
              Testing Your Implementation
            </h2>

            <div className="bg-gray-100 dark:bg-gray-900 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Test Checklist</h3>
              
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <input type="checkbox" className="rounded text-blue-600" readOnly checked />
                  <span className="text-gray-700 dark:text-gray-300">New user can sign up with Google</span>
                </li>
                <li className="flex items-center gap-2">
                  <input type="checkbox" className="rounded text-blue-600" readOnly checked />
                  <span className="text-gray-700 dark:text-gray-300">Existing user can log in with Google</span>
                </li>
                <li className="flex items-center gap-2">
                  <input type="checkbox" className="rounded text-blue-600" readOnly checked />
                  <span className="text-gray-700 dark:text-gray-300">User data is correctly saved in database</span>
                </li>
                <li className="flex items-center gap-2">
                  <input type="checkbox" className="rounded text-blue-600" readOnly checked />
                  <span className="text-gray-700 dark:text-gray-300">JWT tokens are generated and returned</span>
                </li>
                <li className="flex items-center gap-2">
                  <input type="checkbox" className="rounded text-blue-600" readOnly checked />
                  <span className="text-gray-700 dark:text-gray-300">Refresh token is stored in HTTP-only cookie</span>
                </li>
                <li className="flex items-center gap-2">
                  <input type="checkbox" className="rounded text-blue-600" readOnly checked />
                  <span className="text-gray-700 dark:text-gray-300">Protected routes work with access token</span>
                </li>
                <li className="flex items-center gap-2">
                  <input type="checkbox" className="rounded text-blue-600" readOnly checked />
                  <span className="text-gray-700 dark:text-gray-300">Logout clears cookies and invalidates tokens</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Key Takeaways
            </h2>
            
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Implementing Google Sign-In with OAuth 2.0 might seem daunting at first, but it's one of the best 
              investments you can make for your application's user experience and security. Users get a frictionless 
              login experience, and you offload the complex security concerns to Google.
            </p>
            
            <div className="bg-gradient-to-r from-blue-500 to-red-500 p-6 rounded-xl text-white mt-6">
              <h3 className="text-xl font-bold mb-2">Quick Implementation Summary</h3>
              <ul className="space-y-2 text-white/90">
                <li>• ✓ Set up project in Google Cloud Console</li>
                <li>• ✓ Configure OAuth consent screen and credentials</li>
                <li>• ✓ Implement Google Login button on frontend</li>
                <li>• ✓ Verify tokens and create/update users on backend</li>
                <li>• ✓ Generate JWT tokens for session management</li>
                <li>• ✓ Test thoroughly with both new and existing users</li>
              </ul>
            </div>

            <blockquote className="border-l-4 border-blue-500 pl-4 italic my-8 text-gray-700 dark:text-gray-300">
              "The best authentication system is the one your users don't notice. Google Sign-In gets them 
              into your app in seconds, with security they can trust."
            </blockquote>
          </section>

          {/* Additional Resources */}
          <section className="mb-8">
            <div className="bg-blue-50 dark:bg-blue-900/10 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <Github className="w-5 h-5 text-blue-500" />
                Additional Resources
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline text-sm">
                    • Google OAuth 2.0 Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline text-sm">
                    • OAuth 2.0 Playground - Test your configuration
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline text-sm">
                    • GitHub Repository: Complete Example
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline text-sm">
                    • React OAuth Google Library Documentation
                  </a>
                </li>
              </ul>
            </div>
          </section>
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
            {["OAuth", "Google API", "Authentication", "Security", "JWT", "React", "Node.js", "MongoDB", "MERN"].map(tag => (
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

        {/* Share Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-6 flex items-center justify-between"
        >
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600 dark:text-gray-400">Share:</span>
            <a 
              href={`https://twitter.com/intent/tweet?text=Implementing OAuth 2.0 and Google Sign-In - Complete guide for MERN apps&url=${encodeURIComponent(window.location.href)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900/30 dark:hover:text-blue-400 transition"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a 
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900/30 dark:hover:text-blue-400 transition"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a 
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
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

export default OAuthGoogleBlog;