import React from 'react';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Calendar, Clock, ArrowLeft, Tag, Twitter, Linkedin, Facebook, 
  Database, Zap, BarChart, Filter, Server, GitBranch, AlertTriangle, 
  CheckCircle, Cpu, Activity 
} from "lucide-react";

const MongoDBOptimizationBlog = () => {
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
            <span className="px-3 py-1 text-xs font-medium bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300 rounded-full">
              Database
            </span>
            <span className="flex items-center gap-1 text-xs text-gray-600 dark:text-gray-400">
              <Calendar className="w-3 h-3" />
              February 5, 2024
            </span>
            <span className="flex items-center gap-1 text-xs text-gray-600 dark:text-gray-400">
              <Clock className="w-3 h-3" />
              7 min read
            </span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
            Optimizing MongoDB Queries for High-Scale Applications
          </h1>
          
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
            Advanced indexing strategies, aggregation pipeline optimization, and performance tuning 
            techniques to handle millions of documents with sub-second response times.
          </p>
        </motion.header>

        {/* Author Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-8 flex items-center gap-3"
        >
          <div className="w-12 h-12 bg-linear-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
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
            src="https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800" 
            alt="MongoDB Database Optimization"
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
              MongoDB is powerful, but with great power comes great responsibility—especially when 
              your database grows to handle millions of documents. I've seen too many applications 
              grind to a halt because of poorly optimized queries that worked fine in development 
              but collapsed under production load.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              In this guide, I'll share battle-tested optimization techniques that have helped me 
              reduce query times from seconds to milliseconds in high-scale applications. Whether 
              you're dealing with real-time analytics, user activity feeds, or e-commerce catalogs, 
              these strategies will keep your MongoDB performing at its peak.
            </p>
          </section>

          {/* Quick Stats - Performance Impact */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4 flex items-center gap-2">
              <Zap className="w-6 h-6 text-yellow-500" />
              The Performance Impact
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
              <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <Database className="w-6 h-6 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                <div className="text-sm font-medium text-gray-900 dark:text-white">Without Indexes</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">2-5 seconds</div>
              </div>
              <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <Zap className="w-6 h-6 text-green-600 dark:text-green-400 mx-auto mb-2" />
                <div className="text-sm font-medium text-gray-900 dark:text-white">With Indexes</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">50-200ms</div>
              </div>
              <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <Cpu className="w-6 h-6 text-purple-600 dark:text-purple-400 mx-auto mb-2" />
                <div className="text-sm font-medium text-gray-900 dark:text-white">CPU Usage</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">-70% average</div>
              </div>
              <div className="text-center p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                <Activity className="w-6 h-6 text-orange-600 dark:text-orange-400 mx-auto mb-2" />
                <div className="text-sm font-medium text-gray-900 dark:text-white">Throughput</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">+300% increase</div>
              </div>
            </div>
          </section>

          {/* Understanding the Problem */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4 flex items-center gap-2">
              <AlertTriangle className="w-6 h-6 text-red-500" />
              The "Slow Query" Problem
            </h2>
            
            <div className="bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800 p-6 rounded-xl mb-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Common Performance Killers:</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex gap-2">• ❌ Collection scans instead of index scans</li>
                <li className="flex gap-2">• ❌ Inefficient schema design (too many collections or embedded docs)</li>
                <li className="flex gap-2">• ❌ Returning more data than needed</li>
                <li className="flex gap-2">• ❌ Poorly structured aggregation pipelines</li>
                <li className="flex gap-2">• ❌ Missing compound indexes for multi-field queries</li>
              </ul>
            </div>

            <div className="bg-gray-100 dark:bg-gray-900 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Real-World Example:</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                An e-commerce platform with 10M products. A simple query for "electronics under $500" 
                was taking 4.2 seconds:
              </p>
              <div className="bg-gray-900 rounded p-4 overflow-x-auto mb-3">
                <pre className="text-sm text-gray-300 font-mono">
                  <code>{`// Slow query - no indexes
db.products.find({
  category: "electronics",
  price: { $lt: 500 }
}).sort({ createdAt: -1 }).limit(20)`}</code>
                </pre>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                After optimization with compound indexes, the same query runs in 47ms—an <span className="font-bold text-green-600">89x improvement</span>.
              </p>
            </div>
          </section>

          {/* Indexing Strategies */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4 flex items-center gap-2">
              <Filter className="w-6 h-6 text-blue-500" />
              Advanced Indexing Strategies
            </h2>

            <div className="space-y-6">
              <div className="bg-gray-100 dark:bg-gray-900 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">1. Compound Indexes (ESR Rule)</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  MongoDB's ESR rule: <span className="font-bold">Equality, Sort, Range</span> - the order of fields in your compound index matters immensely.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">❌ Wrong Order</h4>
                    <div className="bg-gray-900 rounded p-3 overflow-x-auto">
                      <pre className="text-xs text-gray-300 font-mono">
                        <code>{`// Index created as:
{ price: 1, category: 1, createdAt: -1 }

// Query using:
db.products.find({
  category: "electronics",
  price: { $lt: 500 }
}).sort({ createdAt: -1 })`}</code>
                      </pre>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                      Forces in-memory sort - slow for large datasets
                    </p>
                  </div>

                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">✅ ESR Compliant</h4>
                    <div className="bg-gray-900 rounded p-3 overflow-x-auto">
                      <pre className="text-xs text-gray-300 font-mono">
                        <code>{`// Index created as:
{ category: 1, price: 1, createdAt: -1 }

// Same query:
db.products.find({
  category: "electronics",
  price: { $lt: 500 }
}).sort({ createdAt: -1 })`}</code>
                      </pre>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                      Uses index for filtering AND sorting
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-100 dark:bg-gray-900 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">2. Partial & Sparse Indexes</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Don't index everything - use partial indexes for specific subsets of data.
                </p>
                
                <div className="bg-gray-900 rounded p-4 overflow-x-auto mb-3">
                  <pre className="text-sm text-gray-300 font-mono">
                    <code>{`// Index only active users (reduces index size by 40%)
db.users.createIndex(
  { email: 1, lastLogin: -1 },
  { 
    partialFilterExpression: { 
      status: "active",
      email: { $exists: true }
    }
  }
);

// Query automatically uses partial index
db.users.find({
  status: "active",
  email: /@company\\.com$/,
  lastLogin: { $gt: new Date("2024-01-01") }
});`}</code>
                  </pre>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  💡 Pro tip: Smaller indexes = faster queries AND less memory usage
                </p>
              </div>
            </div>
          </section>

          {/* Aggregation Pipeline Optimization */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4 flex items-center gap-2">
              <GitBranch className="w-6 h-6 text-purple-500" />
              Aggregation Pipeline Mastery
            </h2>

            <div className="bg-gray-100 dark:bg-gray-900 p-6 rounded-xl my-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Pipeline Optimization Techniques</h3>
              
              <div className="space-y-4">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">🚫 Inefficient Pipeline</h4>
                  <div className="bg-gray-900 rounded p-3 overflow-x-auto">
                    <pre className="text-xs text-gray-300 font-mono">
                      <code>{`db.orders.aggregate([
  { $match: { status: "completed" } },
  { $lookup: { 
      from: "users", 
      localField: "userId", 
      foreignField: "_id", 
      as: "user" 
  }},
  { $unwind: "$user" },
  { $match: { "user.tier": "premium" } },
  { $group: {
      _id: "$user.region",
      total: { $sum: "$amount" }
  }}
])`}</code>
                    </pre>
                  </div>
                  <p className="text-xs text-red-600 dark:text-red-400 mt-2">
                    Problem: Processes all completed orders before filtering premium users
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">✅ Optimized Pipeline</h4>
                  <div className="bg-gray-900 rounded p-3 overflow-x-auto">
                    <pre className="text-xs text-gray-300 font-mono">
                      <code>{`db.orders.aggregate([
  // Filter early - reduce data early
  { $match: { 
      status: "completed",
      amount: { $gt: 100 }  // Add early filters
  }},
  // Use $lookup with pipeline for better performance
  { $lookup: {
      from: "users",
      let: { userId: "$userId" },
      pipeline: [
        { $match: { 
            $expr: { $eq: ["$_id", "$$userId"] },
            tier: "premium"  // Filter in the lookup itself
        }},
        { $project: { region: 1 } }  // Only needed fields
      ],
      as: "user"
  }},
  { $unwind: "$user" },
  { $group: {
      _id: "$user.region",
      total: { $sum: "$amount" }
  }}
])`}</code>
                    </pre>
                  </div>
                  <p className="text-xs text-green-600 dark:text-green-400 mt-2">
                    Result: 65% faster execution, processes 80% less data
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-4 mt-4">
              <div className="bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-800 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Key Aggregation Rules:</h3>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li className="flex gap-2">• <span className="font-bold">$match early</span> - Filter documents as early as possible</li>
                  <li className="flex gap-2">• <span className="font-bold">$project wisely</span> - Remove unnecessary fields early</li>
                  <li className="flex gap-2">• <span className="font-bold">$limit before $skip</span> - In pagination, limit then skip</li>
                  <li className="flex gap-2">• <span className="font-bold">Use $lookup with pipelines</span> - Filter joined documents during the join</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Schema Design Patterns */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4 flex items-center gap-2">
              <Server className="w-6 h-6 text-orange-500" />
              Schema Design for Scale
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-100 dark:bg-gray-900 p-5 rounded-xl">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">❌ Anti-Patterns</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Massive unbounded arrays (comments, likes)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Too many collections with frequent $lookups</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Deeply nested documents (more than 2-3 levels)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-100 dark:bg-gray-900 p-5 rounded-xl">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">✅ Scalable Patterns</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Bucketing pattern for time-series data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Computed fields for frequent aggregations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Extended Reference pattern for frequently accessed data</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800 p-6 rounded-xl mt-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Real-World Example: Activity Feed</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Instead of storing each activity as a separate document (10M+ documents/month), use the bucket pattern:
              </p>
              <div className="bg-gray-900 rounded p-4 overflow-x-auto">
                <pre className="text-sm text-gray-300 font-mono">
                  <code>{`// Bucket by hour
{
  _id: ObjectId("..."),
  userId: "123",
  hour: ISODate("2024-02-05T00:00:00Z"),
  activityCount: 156,
  activities: [
    { type: "view", count: 89 },
    { type: "click", count: 45 },
    { type: "purchase", count: 22 }
  ]
}

// Query: Get hourly activity for a day
db.activity.aggregate([
  { $match: { 
    userId: "123",
    hour: { $gte: startOfDay, $lte: endOfDay }
  }},
  { $group: {
    _id: { $hour: "$hour" },
    totalActivities: { $sum: "$activityCount" }
  }}
])`}</code>
                </pre>
              </div>
              <p className="text-xs text-green-600 dark:text-green-400 mt-2">
                Result: 97% reduction in documents, 85% faster queries
              </p>
            </div>
          </section>

          {/* Query Analysis Tools */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4 flex items-center gap-2">
              <BarChart className="w-6 h-6 text-indigo-500" />
              Using MongoDB's Analysis Tools
            </h2>

            <div className="bg-gray-100 dark:bg-gray-900 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">1. explain() - Your Best Friend</h3>
              
              <div className="bg-gray-900 rounded p-4 overflow-x-auto mb-4">
                <pre className="text-xs text-gray-300 font-mono">
                  <code>{`// Analyze query performance
db.products.find({
  category: "electronics",
  price: { $lt: 500 }
}).explain("executionStats");

// Look for:
// - "stage": "COLLSCAN" (bad) vs "IXSCAN" (good)
// - "totalDocsExamined" (should match "nReturned")
// - "executionTimeMillis" (target < 100ms)
// - "indexBounds" (verify index usage)`}</code>
                </pre>
              </div>

              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">2. Database Profiler</h3>
              <div className="bg-gray-900 rounded p-4 overflow-x-auto">
                <pre className="text-xs text-gray-300 font-mono">
                  <code>{`// Enable profiling for slow queries
db.setProfilingLevel(1, { slowms: 100 });

// Find slow queries
db.system.profile.find({
  millis: { $gt: 200 }
}).sort({ ts: -1 }).limit(10);`}</code>
                </pre>
              </div>
            </div>
          </section>

          {/* Performance Checklist */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4 flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-green-500" />
              Production Optimization Checklist
            </h2>

            <div className="grid gap-3">
              <div className="flex items-start gap-3 p-3 bg-gray-100 dark:bg-gray-900 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-gray-900 dark:text-white">Index all query patterns</span>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Use .explain() to verify each query uses an index</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-3 bg-gray-100 dark:bg-gray-900 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-gray-900 dark:text-white">Limit returned fields</span>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Use projection to return only needed fields</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-3 bg-gray-100 dark:bg-gray-900 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-gray-900 dark:text-white">Use connection pooling</span>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Configure maxPoolSize based on your workload</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-3 bg-gray-100 dark:bg-gray-900 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-gray-900 dark:text-white">Monitor slow queries</span>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Set up alerts for queries taking 100ms</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-3 bg-gray-100 dark:bg-gray-900 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-gray-900 dark:text-white">Regular index review</span>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Remove unused indexes, analyze index usage stats</p>
                </div>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Key Takeaways
            </h2>
            
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              MongoDB optimization isn't about applying a single magic fix—it's a continuous process 
              of measuring, analyzing, and improving. The techniques we've covered can transform your 
              database performance from "struggling under load" to "blazing fast at scale."
            </p>
            
            <div className="bg-linear-to-r from-green-500 to-teal-500 p-6 rounded-xl text-white mt-6">
              <h3 className="text-xl font-bold mb-2">Quick Wins Summary</h3>
              <ul className="space-y-2 text-white/90">
                <li>• ✓ Start with ESR-compound indexes on your slowest queries</li>
                <li>• ✓ Filter early in aggregation pipelines</li>
                <li>• ✓ Use partial indexes for specific data subsets</li>
                <li>• ✓ Implement the bucket pattern for time-series data</li>
                <li>• ✓ Monitor with explain() and the profiler regularly</li>
              </ul>
            </div>

            <blockquote className="border-l-4 border-green-500 pl-4 italic my-8 text-gray-700 dark:text-gray-300">
              "The difference between a MongoDB that handles millions of documents and one that 
              crumbles under thousands often comes down to understanding how indexes actually work 
              and designing your schema for your access patterns—not just your data structure."
            </blockquote>
          </section>

          {/* Additional Resources */}
          <section className="mb-8">
            <div className="bg-blue-50 dark:bg-blue-900/10 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <Database className="w-5 h-5 text-blue-500" />
                Additional Resources
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline text-sm">
                    • MongoDB University - Performance Course
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline text-sm">
                    • GitHub Repository: Query Optimization Examples
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline text-sm">
                    • MongoDB Documentation: Indexing Strategies
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline text-sm">
                    • Atlas Performance Advisor Guide
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
            {["MongoDB", "Database", "Performance", "Backend", "Optimization", "Indexing", "Aggregation", "Node.js", "Scalability"].map(tag => (
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
              href={`https://twitter.com/intent/tweet?text=Optimizing MongoDB Queries for High-Scale Applications - Advanced performance tuning guide&url=${encodeURIComponent(window.location.href)}`}
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
              to="/blog/algorithmic-trading-crypto-bot-nodejs"
              className="group p-4 bg-gray-100 dark:bg-black/40 rounded-lg border border-gray-300 dark:border-gray-800 hover:shadow-md transition"
            >
              <span className="text-xs text-blue-600 dark:text-blue-400">Trading & Finance</span>
              <h4 className="mt-2 font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
                Algorithmic Trading: Building a Crypto Trading Bot
              </h4>
              <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">
                Feb 22, 2024 · 10 min read
              </p>
            </Link>
          </div>
        </motion.div>
      </div>
    </article>
  );
};

export default MongoDBOptimizationBlog;