import { useEffect, useRef, memo, ReactNode } from 'react';

interface FocusTrapProps {
  active: boolean;
  children: ReactNode;
  initialFocus?: HTMLElement | null;
  returnFocus?: HTMLElement | null;
}

/**
 * FocusTrap component to trap keyboard focus within a container
 * Essential for modals, dialogs, and mobile menus - WCAG 2.2 Level AAA compliant
 */
export const FocusTrap = memo(function FocusTrap({ 
  active, 
  children, 
  initialFocus,
  returnFocus 
}: FocusTrapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!active) return;

    // Store the currently focused element to return focus later
    previousActiveElement.current = (document.activeElement as HTMLElement) || null;

    const container = containerRef.current;
    if (!container) return;

    // Get all focusable elements
    const getFocusableElements = () => {
      const focusableSelectors = [
        'a[href]',
        'button:not([disabled])',
        'textarea:not([disabled])',
        'input:not([disabled])',
        'select:not([disabled])',
        '[tabindex]:not([tabindex="-1"])',
        '[contenteditable="true"]'
      ].join(', ');

      return Array.from(
        container.querySelectorAll<HTMLElement>(focusableSelectors)
      ).filter(el => {
        // Ensure element is visible and not hidden
        return el.offsetParent !== null && 
               window.getComputedStyle(el).visibility !== 'hidden' &&
               window.getComputedStyle(el).display !== 'none';
      });
    };

    // Set initial focus
    const focusableElements = getFocusableElements();
    if (initialFocus) {
      initialFocus.focus();
    } else if (focusableElements.length > 0) {
      focusableElements[0].focus();
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Tab') return;

      const focusableElements = getFocusableElements();
      if (focusableElements.length === 0) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      const activeElement = document.activeElement as HTMLElement;

      // Shift + Tab (backwards)
      if (event.shiftKey) {
        if (activeElement === firstElement || !container.contains(activeElement)) {
          event.preventDefault();
          lastElement.focus();
        }
      } 
      // Tab (forwards)
      else {
        if (activeElement === lastElement || !container.contains(activeElement)) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    // Cleanup: return focus to previous element
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      
      if (returnFocus && returnFocus.offsetParent !== null) {
        returnFocus.focus();
      } else if (previousActiveElement.current && previousActiveElement.current.offsetParent !== null) {
        previousActiveElement.current.focus();
      }
    };
  }, [active, initialFocus, returnFocus]);

  return (
    <div ref={containerRef}>
      {children}
    </div>
  );
});
