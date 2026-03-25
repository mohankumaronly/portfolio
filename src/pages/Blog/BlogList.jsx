import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, User, Tag, TrendingUp, Code, Cpu, Globe, Shield, Search, Mail } from "lucide-react";
import { useState } from "react";

const posts = [
    {
        title: "OpenClaw: AI Agent Attempts to Earn $750 for Mac Mini",
        slug: "openclaw-ai-agent-experiment",
        desc: "Inside the autonomous commerce experiment where an AI agent tries to earn money for hardware through creative tasks.",
        content: "Full content here...",
        date: "2026-02-19",
        readTime: "6 min read",
        category: "AI Agents",
        categoryIcon: Cpu,
        author: "Mohan",
        authorImage: "/author.jpg",
        featured: true,
        trending: true,
        tags: ["Artificial Intelligence", "Automation", "Experiments"],
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800"
    },
    {
        title: "Building Production-Grade Authentication with JWT",
        slug: "jwt-authentication-guide",
        desc: "Deep dive into implementing secure JWT authentication with refresh tokens, HTTP-only cookies, and best practices.",
        content: "Full content here...",
        date: "2026-02-15",
        readTime: "8 min read",
        category: "Security",
        categoryIcon: Shield,
        author: "Mohan",
        authorImage: "/author.jpg",
        featured: true,
        trending: true,
        tags: ["Security", "JWT", "Authentication", "Node.js"],
        image: "https://images.unsplash.com/photo-1633265486064-086b219458ec?w=800"
    },
    {
        title: "Algorithmic Trading: Building a Crypto Trading Bot with Node.js",
        slug: "algorithmic-trading-crypto-bot-nodejs",
        desc: "Learn how to build a production-ready cryptocurrency trading bot using Node.js, technical indicators, and real-time market data.",
        content: "Full content here...",
        date: "2026-02-22",
        readTime: "10 min read",
        category: "Trading & Finance",
        categoryIcon: TrendingUp,
        author: "Mohan",
        authorImage: "/author.jpg",
        featured: true,
        trending: true,
        tags: ["Trading", "Cryptocurrency", "Node.js", "Algorithmic Trading", "Finance", "Binance API"],
        image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhZGluZ3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        title: "Optimizing MongoDB Queries for High-Scale Applications",
        slug: "mongodb-query-optimization",
        desc: "Advanced indexing strategies, aggregation pipelines, and performance tuning for MongoDB.",
        content: "Full content here...",
        date: "2026-02-05",
        readTime: "7 min read",
        category: "Database",
        categoryIcon: Code,
        author: "Mohan",
        authorImage: "/author.jpg",
        featured: false,
        trending: false,
        tags: ["MongoDB", "Database", "Performance", "Backend"],
        image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800"
    },
    {
        title: "Claude vs GPT-4: A Developer's Perspective",
        slug: "claude-vs-gpt4-comparison",
        desc: "Comparing AI assistants for coding, architecture design, and problem-solving capabilities.",
        content: "Full content here...",
        date: "2026-01-28",
        readTime: "9 min read",
        category: "AI Models",
        categoryIcon: TrendingUp,
        author: "Mohan",
        authorImage: "/author.jpg",
        featured: true,
        trending: true,
        tags: ["AI", "GPT-4", "Claude", "Comparison"],
        image: "https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?w=800"
    },
    {
        title: "Implementing OAuth 2.0 and Google Sign-In",
        slug: "oauth2-google-signin-implementation",
        desc: "Step-by-step guide to integrating OAuth 2.0 with Google authentication in MERN apps.",
        content: "Full content here...",
        date: "2026-01-20",
        readTime: "6 min read",
        category: "Authentication",
        categoryIcon: Shield,
        author: "Mohan",
        authorImage: "/author.jpg",
        featured: false,
        trending: false,
        tags: ["OAuth", "Google API", "Authentication", "Security"],
        image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800"
    }
];

const categories = [
    { name: "All", icon: Globe, count: posts.length },
    { name: "AI Agents", icon: Cpu, count: posts.filter(p => p.category === "AI Agents").length },
    { name: "Security", icon: Shield, count: posts.filter(p => p.category === "Security").length },
    { name: "Web Development", icon: Globe, count: posts.filter(p => p.category === "Web Development").length },
    { name: "Database", icon: Code, count: posts.filter(p => p.category === "Database").length },
    { name: "AI Models", icon: TrendingUp, count: posts.filter(p => p.category === "AI Models").length }
];

const BlogList = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredPosts = posts.filter(post => {
        const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchesCategory && matchesSearch;
    });

    const featuredPosts = filteredPosts.filter(post => post.featured);
    const regularPosts = filteredPosts.filter(post => !post.featured);

    return (
        <section className="min-h-screen py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-primary dark:bg-primary-dark">
            <div className="max-w-7xl mx-auto">

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                        Tech & AI Blog
                    </h1>
                    <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-700 dark:text-gray-400 max-w-3xl mx-auto">
                        Exploring the intersection of artificial intelligence, full-stack development,
                        and modern web technologies
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.6 }}
                    className="mt-8 max-w-xl mx-auto"
                >
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search articles..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full px-5 py-3 pl-12 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-black/40 text-gray-900 dark:text-white placeholder-gray-600 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <Search className="absolute left-4 top-3.5 w-5 h-5 text-gray-500 dark:text-gray-400" />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="mt-8 flex flex-wrap justify-center gap-2"
                >
                    {categories.map((category) => (
                        <button
                            key={category.name}
                            onClick={() => setSelectedCategory(category.name)}
                            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === category.name
                                ? "bg-blue-600 text-white"
                                : "bg-gray-100 dark:bg-black/40 text-gray-700 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800"
                                }`}
                        >
                            <category.icon className="w-4 h-4" />
                            <span>{category.name}</span>
                            <span className={`text-xs px-1.5 py-0.5 rounded-full ${selectedCategory === category.name
                                ? "bg-blue-500 text-white"
                                : "bg-gray-200 dark:bg-gray-700"
                                }`}>
                                {category.count}
                            </span>
                        </button>
                    ))}
                </motion.div>

                {featuredPosts.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="mt-12"
                    >
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                            <TrendingUp className="w-6 h-6 text-blue-500" />
                            Featured Articles
                        </h2>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {featuredPosts.map((post, i) => (
                                <FeaturedPostCard key={post.slug} post={post} index={i} />
                            ))}
                        </div>
                    </motion.div>
                )}

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="mt-12"
                >
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                        Latest Articles
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {regularPosts.map((post, i) => (
                            <BlogPostCard key={post.slug} post={post} index={i} />
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="mt-12"
                >
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                        Stay Updated
                    </h2>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.6 }}
                        className="bg-gray-100 dark:bg-black/40 rounded-xl p-8 border border-gray-300 dark:border-gray-800 hover:shadow-lg transition-all"
                    >
                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                                <Mail className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                Stay Ahead in Tech
                            </h3>
                            <p className="text-gray-700 dark:text-gray-400 mb-6 max-w-md">
                                Get the latest AI and development articles delivered directly to your inbox.
                                No spam, just valuable content.
                            </p>

                            <div className="flex flex-wrap justify-center gap-4 mb-6">
                                <span className="flex items-center gap-1 text-xs text-gray-600 dark:text-gray-500">
                                    <Calendar className="w-3 h-3" />
                                    Weekly updates
                                </span>
                                <span className="flex items-center gap-1 text-xs text-gray-600 dark:text-gray-500">
                                    <Clock className="w-3 h-3" />
                                    5 min read
                                </span>
                                <span className="flex items-center gap-1 text-xs text-gray-600 dark:text-gray-500">
                                    <Tag className="w-3 h-3" />
                                    Tech & AI
                                </span>
                            </div>

                            <div className="w-full max-w-md">
                                <div className="flex flex-col sm:flex-row gap-3">
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent text-gray-900 dark:text-white placeholder-gray-600 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                    />
                                    <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium text-sm whitespace-nowrap">
                                        Subscribe
                                    </button>
                                </div>
                                <p className="mt-3 text-xs text-gray-500 dark:text-gray-500">
                                    Join 500+ developers. Unsubscribe anytime.
                                </p>
                            </div>

                            <div className="mt-6 flex flex-wrap justify-center gap-2">
                                {["AI", "Web Dev", "Security", "Database", "DevOps"].map(tag => (
                                    <span key={tag} className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-400 rounded-full">
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

const FeaturedPostCard = ({ post, index }) => {
    const CategoryIcon = post.categoryIcon;

    return (
        <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="group relative bg-gray-100 dark:bg-black/40 rounded-xl overflow-hidden border border-gray-300 dark:border-gray-800 hover:shadow-xl transition-all hover:-translate-y-1"
        >
            <Link to={`/blog/${post.slug}`} className="block">
                <div className="aspect-video overflow-hidden">
                    <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                </div>

                <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                        <CategoryIcon className="w-4 h-4 text-blue-500" />
                        <span className="text-xs font-medium text-blue-600 dark:text-blue-400">
                            {post.category}
                        </span>
                        {post.trending && (
                            <span className="flex items-center gap-1 text-xs bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400 px-2 py-0.5 rounded-full">
                                <TrendingUp className="w-3 h-3" />
                                Trending
                            </span>
                        )}
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {post.title}
                    </h3>

                    <p className="mt-2 text-sm text-gray-700 dark:text-gray-400 line-clamp-2">
                        {post.desc}
                    </p>

                    <div className="mt-4 flex items-center gap-4 text-xs text-gray-600 dark:text-gray-500">
                        <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                        </span>
                        <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {post.readTime}
                        </span>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                        {post.tags.slice(0, 2).map(tag => (
                            <span key={tag} className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-400 rounded-full">
                                {tag}
                            </span>
                        ))}
                        {post.tags.length > 2 && (
                            <span className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-400 rounded-full">
                                +{post.tags.length - 2}
                            </span>
                        )}
                    </div>
                </div>
            </Link>
        </motion.article>
    );
};

const BlogPostCard = ({ post, index }) => {
    const CategoryIcon = post.categoryIcon;

    return (
        <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="group relative bg-gray-100 dark:bg-black/40 rounded-xl p-6 border border-gray-300 dark:border-gray-800 hover:shadow-lg transition-all hover:-translate-y-1"
        >
            <Link to={`/blog/${post.slug}`} className="block">
                <div className="flex items-center gap-2 mb-3">
                    <CategoryIcon className="w-4 h-4 text-blue-500" />
                    <span className="text-xs font-medium text-blue-600 dark:text-blue-400">
                        {post.category}
                    </span>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {post.title}
                </h3>

                <p className="mt-2 text-sm text-gray-700 dark:text-gray-400 line-clamp-2">
                    {post.desc}
                </p>

                <div className="mt-4 flex items-center gap-4 text-xs text-gray-600 dark:text-gray-500">
                    <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </span>
                    <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                    </span>
                </div>

                <div className="mt-4 flex items-center text-blue-600 dark:text-blue-400 text-sm font-medium group/link">
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover/link:translate-x-1" />
                </div>
            </Link>
        </motion.article>
    );
};

export default BlogList;