import { motion, useScroll, useSpring } from "framer-motion";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import DarkModeToggle from "./DarkModeToggle";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navVariants = {
  hidden: { y: -80, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const linkVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08 },
  }),
};

const mobileMenuVariants = {
  closed: { opacity: 0, height: 0 },
  open: { opacity: 1, height: "auto" },
};

const links = [
  { name: "Home", href: "/#home" }, 
  { name: "About", href: "/#about" }, 
  { name: "Skills", href: "/#skills" }, 
  { name: "Projects", href: "/#projects" }, 
  { name: "Experience", href: "/#experience" }, 
  { name: "Blog", route: "/blog" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();
  const navigate = useNavigate();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const handleHashLinkClick = (e, href) => {
    e.preventDefault();
    
    const [path, hash] = href.split('#');
    
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
        }
      );

      sections.forEach((section) => observer.observe(section));

      return () => sections.forEach((section) => observer.unobserve(section));
    }
  }, [location.pathname]);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  const isHashLinkActive = (href) => {
    if (location.pathname !== '/' && location.pathname !== '/') return false;
    const hash = href.split('#')[1];
    return activeSection === hash;
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-primary-dark/80 backdrop-blur border-b border-gray-200 dark:border-gray-800"
    >
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-black dark:bg-white origin-left z-[60]"
        style={{ scaleX }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex justify-between items-center">

          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            onClick={() => navigate('/')}
            className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white cursor-pointer"
          >
            Mohankumaronly.dev
          </motion.h1>

          <div className="hidden md:flex items-center gap-4 lg:gap-6 text-sm font-medium">

            {links.map((link, i) => (
              <motion.div
                key={link.name}
                custom={i}
                variants={linkVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.08 }}
              >
                {link.href ? (
                  <a
                    href={link.href}
                    onClick={(e) => handleHashLinkClick(e, link.href)}
                    className={`transition whitespace-nowrap ${
                      isHashLinkActive(link.href)
                        ? "text-black dark:text-white font-semibold"
                        : "text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
                    }`}
                  >
                    {link.name}
                  </a>
                ) : (
                  <NavLink
                    to={link.route}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `transition whitespace-nowrap ${
                        isActive
                          ? "text-black dark:text-white font-semibold"
                          : "text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                )}
              </motion.div>
            ))}

            <DarkModeToggle />
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <DarkModeToggle />

            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={toggleMobileMenu}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="h-5 w-5 sm:h-6 sm:w-6" />
              ) : (
                <Bars3Icon className="h-5 w-5 sm:h-6 sm:w-6" />
              )}
            </motion.button>
          </div>
        </div>

        <motion.div
          variants={mobileMenuVariants}
          initial="closed"
          animate={isMobileMenuOpen ? "open" : "closed"}
          className="md:hidden overflow-hidden"
        >
          <div className="pt-4 pb-2 flex flex-col gap-2">

            {links.map((link) =>
              link.href ? (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleHashLinkClick(e, link.href)}
                  className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition ${
                    isHashLinkActive(link.href)
                      ? "bg-gray-100 dark:bg-gray-800 text-black dark:text-white"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                  }`}
                >
                  {link.name}
                </a>
              ) : (
                <NavLink
                  key={link.name}
                  to={link.route}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `block px-4 py-2.5 rounded-lg text-sm font-medium transition ${
                      isActive
                        ? "bg-gray-100 dark:bg-gray-800 text-black dark:text-white"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              )
            )}

          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;