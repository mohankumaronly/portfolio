import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const root = document.documentElement;

    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode((prev) => !prev)}
      className="p-2 rounded-md bg-gray-200 dark:bg-gray-800 
                 text-gray-700 dark:text-gray-200 
                 hover:scale-105 transition-all duration-200 shadow-sm"
    >
      {darkMode ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
};

export default DarkModeToggle;
