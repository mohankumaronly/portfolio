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

// Animation variants
const navVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { 
      duration: 0.6, 
      ease: [0.22, 1, 0.36, 1]
    }
  },
};

const linkVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.06,
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1]
    }
  }),
};

const mobileMenuVariants = {
  closed: { 
    opacity: 0, 
    height: 0,
    transition: { duration: 0.25, ease: "easeInOut" }
  },
  open: { 
    opacity: 1, 
    height: "auto",
    transition: { 
      duration: 0.3, 
      ease: "easeInOut"
    }
  },
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
  const [navbarHeight, setNavbarHeight] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Get navbar height
  useEffect(() => {
    const updateNavbarHeight = () => {
      const navbar = document.querySelector('nav');
      if (navbar) {
        setNavbarHeight(navbar.offsetHeight);
      }
    };
    
    updateNavbarHeight();
    window.addEventListener('resize', updateNavbarHeight);
    return () => window.removeEventListener('resize', updateNavbarHeight);
  }, []);

  // Apply scroll margin to sections
  useEffect(() => {
    if (navbarHeight > 0) {
      const sections = document.querySelectorAll('section[id]');
      sections.forEach((section) => {
        section.style.scrollMarginTop = `${navbarHeight + 20}px`;
      });
    }
  }, [navbarHeight]);

  const handleHashLinkClick = (e, href, sectionId) => {
    e.preventDefault();
    
    const [path, hash] = href.split('#');
    
    if (sectionId) {
      setActiveSection(sectionId);
    }
    
    if (location.pathname === path || (path === '/' && location.pathname === '/')) {
      const element = document.getElementById(hash);
      if (element) {
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navbarHeight - 20;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    } else {
      navigate(`${path}#${hash}`);
    }
    
    closeMenu();
  };

  // Handle hash on load
  useEffect(() => {
    if (location.hash) {
      const hash = location.hash.substring(1);
      const element = document.getElementById(hash);
      
      setTimeout(() => {
        if (element) {
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navbarHeight - 20;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
          setActiveSection(hash);
        }
      }, 100);
    }
  }, [location, navbarHeight]);

  // Intersection Observer for active section
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
            ? "bg-white/95 dark:bg-gray-900/95 shadow-sm"
            : "bg-white/80 dark:bg-gray-900/80"
        } backdrop-blur-md border-b border-gray-100/50 dark:border-gray-800/50`}
      >
        {/* Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-500 origin-left z-60"
          style={{ scaleX }}
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16">

            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              onClick={() => navigate('/')}
              className="flex items-center gap-2 cursor-pointer group"
            >
              <div className="w-8 h-8 rounded-lg bg-blue-600 dark:bg-blue-500 flex items-center justify-center text-white font-bold text-sm shadow-sm group-hover:scale-105 transition-transform duration-200">
                MK
              </div>
              <span className="text-base font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                Mohankumaronly
              </span>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-1">
              {links.map((link, i) => {
                const isActive = link.id ? isHashLinkActive(link.id) : false;
                
                return (
                  <motion.div
                    key={link.name}
                    custom={i}
                    variants={linkVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {link.href ? (
                      <a
                        href={link.href}
                        onClick={(e) => handleHashLinkClick(e, link.href, link.id)}
                        className={`group relative px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                          isActive
                            ? "text-blue-600 dark:text-blue-400 bg-blue-50/80 dark:bg-blue-900/20"
                            : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50/80 dark:hover:bg-gray-800/30"
                        }`}
                      >
                        <link.icon className="w-4 h-4" />
                        <span className="hidden lg:inline">{link.name}</span>
                        <span className="lg:hidden">{link.name.charAt(0)}</span>
                        {isActive && (
                          <motion.div
                            layoutId="activeIndicator"
                            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-5 h-0.5 bg-blue-600 dark:bg-blue-400 rounded-full"
                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                          />
                        )}
                      </a>
                    ) : (
                      <NavLink
                        to={link.route}
                        onClick={closeMenu}
                        className={({ isActive: isRouteActive }) =>
                          `group relative px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                            isRouteActive
                              ? "text-blue-600 dark:text-blue-400 bg-blue-50/80 dark:bg-blue-900/20"
                              : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50/80 dark:hover:bg-gray-800/30"
                          }`
                        }
                      >
                        <link.icon className="w-4 h-4" />
                        <span className="hidden lg:inline">{link.name}</span>
                        <span className="lg:hidden">{link.name.charAt(0)}</span>
                      </NavLink>
                    )}
                  </motion.div>
                );
              })}

              <motion.div
                custom={links.length}
                variants={linkVariants}
                initial="hidden"
                animate="visible"
                className="ml-2"
              >
                <DarkModeToggle />
              </motion.div>
            </div>

            {/* Mobile Controls */}
            <div className="flex items-center gap-2 md:hidden">
              <DarkModeToggle />

              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={toggleMobileMenu}
                className="p-2 rounded-lg bg-gray-50/80 dark:bg-gray-800/30 text-gray-700 dark:text-gray-300 hover:bg-gray-100/80 dark:hover:bg-gray-700/30 transition-all duration-200"
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
            <div className="pt-2 pb-3 flex flex-col gap-0.5 border-t border-gray-100/50 dark:border-gray-800/50 mt-2">
              {links.map((link) => {
                const isActive = link.id ? isHashLinkActive(link.id) : false;
                
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {link.href ? (
                      <a
                        href={link.href}
                        onClick={(e) => handleHashLinkClick(e, link.href, link.id)}
                        className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                          isActive
                            ? "bg-blue-50/80 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                            : "text-gray-600 dark:text-gray-300 hover:bg-gray-50/80 dark:hover:bg-gray-800/30"
                        }`}
                      >
                        <link.icon className="w-5 h-5" />
                        <span>{link.name}</span>
                        {isActive && (
                          <motion.div
                            layoutId="mobileIndicator"
                            className="ml-auto w-1 h-5 rounded-full bg-blue-600 dark:bg-blue-400"
                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                          />
                        )}
                      </a>
                    ) : (
                      <NavLink
                        to={link.route}
                        onClick={closeMenu}
                        className={({ isActive: isRouteActive }) =>
                          `flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                            isRouteActive
                              ? "bg-blue-50/80 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                              : "text-gray-600 dark:text-gray-300 hover:bg-gray-50/80 dark:hover:bg-gray-800/30"
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

      {/* Mobile Backdrop */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeMenu}
          className="fixed inset-0 bg-black/10 dark:bg-black/30 backdrop-blur-sm z-40 md:hidden"
        />
      )}
    </>
  );
};

export default Navbar;