import { useEffect } from 'react';

/**
 * Custom hook to update document title and announce page changes to screen readers
 * Implements WCAG 2.4.2 (Page Titled - Level A)
 * 
 * @param title - The page title
 * @param announce - Whether to announce the title change to screen readers
 */
export function useDocumentTitle(title: string, announce: boolean = true) {
  useEffect(() => {
    const previousTitle = document.title;
    
    // Update document title
    document.title = `${title} | Priority Pay Network`;
    
    // Announce page title to screen readers
    if (announce) {
      const announcement = document.createElement('div');
      announcement.setAttribute('role', 'status');
      announcement.setAttribute('aria-live', 'polite');
      announcement.setAttribute('aria-atomic', 'true');
      announcement.className = 'sr-only';
      announcement.textContent = `Navigated to ${title}`;
      
      document.body.appendChild(announcement);
      
      // Remove announcement after screen reader has time to read it
      setTimeout(() => {
        document.body.removeChild(announcement);
      }, 1000);
    }
    
    // Cleanup: restore previous title if component unmounts
    return () => {
      document.title = previousTitle;
    };
  }, [title, announce]);
}

/**
 * Custom hook to update meta description for SEO
 * 
 * @param description - The page description
 */
export function useMetaDescription(description: string) {
  useEffect(() => {
    let metaDescription = document.querySelector('meta[name="description"]');
    
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    
    metaDescription.setAttribute('content', description);
  }, [description]);
}

/**
 * Custom hook to update Open Graph meta tags for social sharing
 * 
 * @param title - The page title
 * @param description - The page description
 * @param image - Optional image URL for social sharing
 */
export function useOpenGraph(title: string, description: string, image?: string) {
  useEffect(() => {
    const updateMetaTag = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      
      meta.setAttribute('content', content);
    };
    
    updateMetaTag('og:title', `${title} | Priority Pay Network`);
    updateMetaTag('og:description', description);
    
    if (image) {
      updateMetaTag('og:image', image);
    }
    
    // Update Twitter card tags
    updateMetaTag('twitter:title', `${title} | Priority Pay Network`);
    updateMetaTag('twitter:description', description);
    
    if (image) {
      updateMetaTag('twitter:image', image);
    }
  }, [title, description, image]);
}
