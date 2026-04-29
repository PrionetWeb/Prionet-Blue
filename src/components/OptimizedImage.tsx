import { useState, useRef, useEffect, memo } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  onLoad?: () => void;
  onError?: () => void;
  width?: number;
  height?: number;
}

/**
 * OptimizedImage component with lazy loading, intersection observer, and progressive loading
 * Follows WCAG 2.2 Level AAA guidelines for images
 */
export const OptimizedImage = memo(function OptimizedImage({
  src,
  alt,
  className = '',
  priority = false,
  onLoad,
  onError,
  width,
  height
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Skip intersection observer if priority loading
    if (priority) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '50px', // Start loading 50px before entering viewport
        threshold: 0.01
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    onError?.();
  };

  return (
    <div 
      ref={imgRef} 
      className={`relative overflow-hidden ${className}`}
      style={{ minHeight: height ? `${height}px` : undefined }}
    >
      {/* Low quality placeholder while loading */}
      {!isLoaded && isInView && (
        <div 
          className="absolute inset-0 bg-secondary/20 animate-pulse"
          role="presentation"
          aria-hidden="true"
        />
      )}
      
      {isInView && (
        <ImageWithFallback
          src={src}
          alt={alt}
          className={`w-full h-screen object-cover transition-opacity duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          } ${className}`}
          onLoad={handleLoad}
          onError={handleError}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          width={width}
          height={height}
          fetchpriority={priority ? 'high' : undefined}
        />
      )}
    </div>
  );
});