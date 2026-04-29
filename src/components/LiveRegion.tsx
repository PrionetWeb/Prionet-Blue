import { useEffect, useRef, memo } from 'react';

interface LiveRegionProps {
  message: string;
  politeness?: 'polite' | 'assertive' | 'off';
  atomic?: boolean;
  relevant?: 'additions' | 'removals' | 'text' | 'all';
  className?: string;
}

/**
 * LiveRegion component for announcing dynamic content changes to screen readers
 * Implements WCAG 2.2 Level AAA status message requirements
 */
export const LiveRegion = memo(function LiveRegion({
  message,
  politeness = 'polite',
  atomic = true,
  relevant = 'additions text',
  className = ''
}: LiveRegionProps) {
  const regionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Clear and re-announce to ensure screen readers pick up the change
    if (regionRef.current && message) {
      regionRef.current.textContent = '';
      
      requestAnimationFrame(() => {
        if (regionRef.current) {
          regionRef.current.textContent = message;
        }
      });
    }
  }, [message]);

  return (
    <div
      ref={regionRef}
      role="status"
      aria-live={politeness}
      aria-atomic={atomic}
      aria-relevant={relevant}
      className={`sr-only ${className}`}
    >
      {message}
    </div>
  );
});

/**
 * Hook to manage live region announcements
 */
export function useLiveAnnouncer() {
  const [announcement, setAnnouncement] = useState('');

  const announce = (message: string, delay = 100) => {
    // Clear previous announcement
    setAnnouncement('');
    
    // Set new announcement after a brief delay to ensure screen readers pick it up
    setTimeout(() => {
      setAnnouncement(message);
    }, delay);
  };

  return { announcement, announce };
}

import { useState } from 'react';
