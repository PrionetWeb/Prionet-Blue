import { useState, useEffect, memo } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

/**
 * ScrollProgress component that shows reading progress
 * Enhances user experience and accessibility by providing visual feedback
 */
export const ScrollProgress = memo(function ScrollProgress() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  
  // Add spring physics for smooth animation
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      // Show progress bar after scrolling 100px
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-[60]"
      style={{ 
        scaleX,
        transformOrigin: '0%'
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      role="progressbar"
      aria-label="Page scroll progress"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(scrollYProgress.get() * 100)}
    />
  );
});
