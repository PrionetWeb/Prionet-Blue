import { useState, useEffect, useCallback, memo } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { motion } from 'motion/react';

interface ThemeToggleProps {
  className?: string;
}

export const ThemeToggle = memo(function ThemeToggle({ className = "" }: ThemeToggleProps) {
  const [isDark, setIsDark] = useState(false);

  // Helper function to determine if it should be dark mode based on time
  const shouldBeDarkBasedOnTime = useCallback(() => {
    const now = new Date();
    const hour = now.getHours();
    // Dark mode from 6 PM (18:00) to 6 AM (6:00)
    return hour >= 18 || hour < 6;
  }, []);

  // Initialize theme from localStorage or timezone-based automatic setting
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    
    // If user has manually set a theme, respect it
    // Otherwise, use timezone-based automatic setting
    const shouldBeDark = savedTheme 
      ? savedTheme === 'dark' 
      : shouldBeDarkBasedOnTime();
    
    setIsDark(shouldBeDark);
    
    if (shouldBeDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Update theme every minute to check for time changes
    const intervalId = setInterval(() => {
      const savedThemeCheck = localStorage.getItem('theme');
      // Only auto-update if user hasn't manually set a preference
      if (!savedThemeCheck) {
        const newShouldBeDark = shouldBeDarkBasedOnTime();
        if (newShouldBeDark !== isDark) {
          setIsDark(newShouldBeDark);
          if (newShouldBeDark) {
            document.documentElement.classList.add('dark');
          } else {
            document.documentElement.classList.remove('dark');
          }
        }
      }
    }, 60000); // Check every minute

    return () => clearInterval(intervalId);
  }, [shouldBeDarkBasedOnTime, isDark]);

  const toggleTheme = useCallback(() => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }

    // Announce theme change to screen readers
    const announcement = newTheme ? 'Dark mode activated' : 'Light mode activated';
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('role', 'status');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.className = 'sr-only';
    liveRegion.textContent = announcement;
    document.body.appendChild(liveRegion);
    setTimeout(() => document.body.removeChild(liveRegion), 1000);
  }, [isDark]);

  return (
    <motion.button
      onClick={toggleTheme}
      className={`
        inline-flex items-center justify-center p-2 
        text-foreground hover:text-primary 
        transition-colors duration-300 
        rounded-md hover:bg-secondary
        focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2
        ${className}
      `}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <motion.div
        key={isDark ? 'sun' : 'moon'}
        initial={{ rotate: -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: 90, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {isDark ? (
          <SunIcon className="w-5 h-5 transition-transform duration-200" aria-hidden="true" />
        ) : (
          <MoonIcon className="w-5 h-5 transition-transform duration-200" aria-hidden="true" />
        )}
      </motion.div>
      <span className="sr-only">
        {isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      </span>
    </motion.button>
  );
});