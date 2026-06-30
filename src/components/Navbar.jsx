import { motion, useScroll, useSpring } from "framer-motion";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import DarkModeToggle from "./DarkModeToggle";
import { 
  Bars3Icon, 
  XMarkIcon, 
  HomeIcon,
  UserIcon,
  CogIcon,
  FolderIcon,
  BriefcaseIcon,
  NewspaperIcon
} from "@heroicons/react/24/outline";

const navVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { 
      duration: 0.8, 
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.1
    }
  },
};

const linkVariants = {
  hidden: { opacity: 0, y: -15, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 25 }
  },
};

const mobileMenuVariants = {
  closed: { 
    opacity: 0, 
    height: 0,
    transition: { duration: 0.3, ease: "easeInOut" }
  },
  open: { 
    opacity: 1, 
    height: "auto",
    transition: { 
      duration: 0.4, 
      ease: "easeInOut",
      staggerChildren: 0.05
    }
  },
};

const mobileItemVariants = {
  closed: { opacity: 0, x: -20 },
  open: { opacity: 1, x: 0 }
};

const links = [
  { name: "Home", href: "/#home", icon: HomeIcon, id: "home" },
  { name: "About", href: "/#about", icon: UserIcon, id: "about" },
  { name: "Skills", href: "/#skills", icon: CogIcon, id: "skills" },
  { name: "Projects", href: "/#projects", icon: FolderIcon, id: "projects" },
  { name: "Experience", href: "/#experience", icon: BriefcaseIcon, id: "experience" },
  { name: "Blog", route: "/blog", icon: NewspaperIcon, id: "blog" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleHashLinkClick = (e, href, sectionId) => {
    e.preventDefault();
    
    const [path, hash] = href.split('#');
    
    // Immediately update active section for visual feedback
    if (sectionId) {
      setActiveSection(sectionId);
    }
    
    if (location.pathname === path || (path === '/' && location.pathname === '/')) {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(`${path}#${hash}`);
    }
    
    closeMenu();
  };

  useEffect(() => {
    if (location.hash) {
      const hash = location.hash.substring(1);
      const element = document.getElementById(hash);
      
      setTimeout(() => {
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          setActiveSection(hash);
        }
      }, 100);
    }
  }, [location]);

  useEffect(() => {
    if (location.pathname === '/') {
      const sections = document.querySelectorAll("section[id]");

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id);
            }
          });
        },
        {
          rootMargin: "-50% 0px -50% 0px",
          threshold: 0.1,
        }
      );

      sections.forEach((section) => observer.observe(section));

      return () => sections.forEach((section) => observer.unobserve(section));
    }
  }, [location.pathname]);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  const isHashLinkActive = (linkId) => {
    if (location.pathname !== '/') return false;
    return activeSection === linkId;
  };

  return (
    <>
      <motion.nav
        variants={navVariants}
        initial="hidden"
        animate="visible"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 dark:bg-gray-900/95 shadow-lg shadow-black/5 dark:shadow-white/5"
            : "bg-white/80 dark:bg-gray-900/80"
        } backdrop-blur-lg border-b border-gray-200/50 dark:border-gray-800/50`}
      >
        {/* Progress bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 origin-left z-[60]"
          style={{ scaleX }}
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex justify-between items-center">

            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
              onClick={() => navigate('/')}
              className="flex items-center gap-2 cursor-pointer group"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-purple-500/25 group-hover:scale-105 transition-transform duration-300">
                M
              </div>
              <span className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                Mohankumaronly
              </span>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-1 lg:gap-2 text-sm font-medium">
              {links.map((link, i) => {
                const isActive = link.id ? isHashLinkActive(link.id) : false;
                
                return (
                  <motion.div
                    key={link.name}
                    custom={i}
                    variants={linkVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link.href ? (
                      <a
                        href={link.href}
                        onClick={(e) => handleHashLinkClick(e, link.href, link.id)}
                        className={`group relative px-3 lg:px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-2 ${
                          isActive
                            ? "text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/30"
                            : "text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50/50 dark:hover:bg-purple-900/20"
                        }`}
                      >
                        <link.icon className="w-4 h-4" />
                        <span>{link.name}</span>
                        {isActive && (
                          <motion.div
                            layoutId="activeIndicator"
                            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"
                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                          />
                        )}
                      </a>
                    ) : (
                      <NavLink
                        to={link.route}
                        onClick={closeMenu}
                        className={({ isActive: isRouteActive }) =>
                          `group relative px-3 lg:px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-2 ${
                            isRouteActive
                              ? "text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/30"
                              : "text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50/50 dark:hover:bg-purple-900/20"
                          }`
                        }
                      >
                        <link.icon className="w-4 h-4" />
                        <span>{link.name}</span>
                      </NavLink>
                    )}
                  </motion.div>
                );
              })}

              <motion.div
                variants={linkVariants}
                initial="hidden"
                animate="visible"
                className="ml-2"
              >
                <DarkModeToggle />
              </motion.div>
            </div>

            {/* Mobile Controls */}
            <div className="flex items-center gap-3 md:hidden">
              <DarkModeToggle />

              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={toggleMobileMenu}
                className="relative p-2.5 rounded-xl bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/30 dark:to-blue-900/30 text-gray-700 dark:text-gray-300 hover:shadow-lg transition-all duration-300"
              >
                {isMobileMenuOpen ? (
                  <XMarkIcon className="h-5 w-5" />
                ) : (
                  <Bars3Icon className="h-5 w-5" />
                )}
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu */}
          <motion.div
            variants={mobileMenuVariants}
            initial="closed"
            animate={isMobileMenuOpen ? "open" : "closed"}
            className="md:hidden overflow-hidden"
          >
            <div className="pt-4 pb-3 flex flex-col gap-1 border-t border-gray-200/50 dark:border-gray-800/50 mt-3">
              {links.map((link) => {
                const isActive = link.id ? isHashLinkActive(link.id) : false;
                
                return (
                  <motion.div
                    key={link.name}
                    variants={mobileItemVariants}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {link.href ? (
                      <a
                        href={link.href}
                        onClick={(e) => handleHashLinkClick(e, link.href, link.id)}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                          isActive
                            ? "bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/30 dark:to-blue-900/30 text-purple-600 dark:text-purple-400"
                            : "text-gray-700 dark:text-gray-300 hover:bg-purple-50/50 dark:hover:bg-purple-900/20"
                        }`}
                      >
                        <link.icon className="w-5 h-5" />
                        <span>{link.name}</span>
                        {isActive && (
                          <motion.div
                            layoutId="mobileIndicator"
                            className="ml-auto w-1.5 h-6 rounded-full bg-gradient-to-b from-purple-600 to-blue-600"
                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                          />
                        )}
                      </a>
                    ) : (
                      <NavLink
                        to={link.route}
                        onClick={closeMenu}
                        className={({ isActive: isRouteActive }) =>
                          `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                            isRouteActive
                              ? "bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/30 dark:to-blue-900/30 text-purple-600 dark:text-purple-400"
                              : "text-gray-700 dark:text-gray-300 hover:bg-purple-50/50 dark:hover:bg-purple-900/20"
                          }`
                        }
                      >
                        <link.icon className="w-5 h-5" />
                        <span>{link.name}</span>
                      </NavLink>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </motion.nav>

      {/* Backdrop for mobile menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeMenu}
          className="fixed inset-0 bg-black/20 dark:bg-black/40 backdrop-blur-sm z-40 md:hidden"
        />
      )}
    </>
  );
};

export default Navbar;