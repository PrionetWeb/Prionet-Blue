import { motion } from 'motion/react';

export function PageLoader() {
  return (
    <div 
      className="min-h-screen flex items-center justify-center bg-background"
      role="status"
      aria-live="polite"
      aria-label="Loading page content"
    >
      <motion.div 
        className="flex flex-col items-center gap-4"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div 
          className="w-16 h-16 border-4 border-primary/30 border-t-primary rounded-full"
          animate={{ rotate: 360 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "linear"
          }}
          aria-hidden="true"
        />
        <motion.p 
          className="text-muted-foreground" 
          style={{ fontFamily: 'var(--font-outfit)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Loading...
        </motion.p>
      </motion.div>
    </div>
  );
}