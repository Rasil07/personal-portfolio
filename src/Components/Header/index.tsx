"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";

const Header = () => {
  const [mounted, setMounted] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up");
  const [lastScrollY, setLastScrollY] = useState(0);
  const { theme, setTheme, systemTheme } = useTheme();

  // Wait for component to mount to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle scroll direction detection
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Handle initial theme
  useEffect(() => {
    if (!mounted) return;
    const currentTheme = theme === "system" ? systemTheme : theme;
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(currentTheme || "light");
  }, [theme, systemTheme, mounted]);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDark = currentTheme === "dark";

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ease-default  dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20
      ${scrollDirection === "down" ? "-translate-y-full" : "translate-y-0"}
      ${lastScrollY > 0 ? "glass-effect" : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-xl font-display font-semibold tracking-tight 
              text-gray-900 dark:text-white hover:text-primary-500 dark:hover:text-primary-400
              transition-colors duration-200"
            >
              RB
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden sm:flex sm:space-x-8">
            {["About", "Work", "Blog", "Contact"].map((item) => (
              <Link
                key={item}
                href={`${item.toLowerCase()}`}
                className="text-sm font-medium text-gray-700 dark:text-gray-300
                  hover:text-primary-500 dark:hover:text-primary-400
                  transition-colors duration-200"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Theme Switcher */}
          <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="fixed bottom-8 right-8 p-3 rounded-full shadow-lg 
              bg-white dark:bg-gray-800 text-gray-900 dark:text-white
              hover:bg-gray-100 dark:hover:bg-gray-700
              focus:outline-none focus:ring-2 focus:ring-primary-500
              transform transition-all duration-200 ease-bounce
              hover:scale-110 active:scale-95"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            )}
          </button>

          {/* Mobile Menu Button */}
          <div className="sm:hidden">
            <button
              type="button"
              className="p-2 rounded-md text-gray-700 dark:text-gray-300
                hover:text-primary-500 dark:hover:text-primary-400
                focus:outline-none focus:ring-2 focus:ring-primary-500"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
