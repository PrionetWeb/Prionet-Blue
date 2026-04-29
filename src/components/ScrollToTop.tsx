import { useState, useEffect } from 'react';
import { ArrowUpIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'motion/react';

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? 'auto' : 'smooth'
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      scrollToTop();
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          onClick={scrollToTop}
          onKeyDown={handleKeyDown}
          aria-label="Scroll to top of page"
          title="Scroll to top"
          style={{
            position: 'fixed',
            bottom: '32px',
            right: '32px',
            width: '56px',
            height: '56px',
            borderRadius: 'var(--radius)',
            backgroundColor: 'var(--primary)',
            color: 'var(--primary-foreground)',
            border: '2px solid var(--primary)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            boxShadow: 'var(--elevation-sm)',
            transition: 'all 0.3s ease',
            fontFamily: 'var(--font-outfit)'
          }}
          className="scroll-to-top-button"
          whileHover={{ 
            scale: 1.05,
            boxShadow: '0 0 20px rgba(37, 99, 235, 0.6), 0 0 40px rgba(37, 99, 235, 0.3)'
          }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowUpIcon 
            style={{ 
              width: '24px', 
              height: '24px',
              strokeWidth: '2.5'
            }} 
            aria-hidden="true"
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
