import { useEffect, memo } from 'react';
import { toast } from 'sonner@2.0.3';

interface KeyboardShortcutsProps {
  onNavigate: (page: string) => void;
}

/**
 * KeyboardShortcuts component for enhanced keyboard navigation
 * Implements WCAG 2.2 Level AAA keyboard operability requirements
 */
export const KeyboardShortcuts = memo(function KeyboardShortcuts({ onNavigate }: KeyboardShortcutsProps) {
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      // Only trigger if Alt key is pressed (doesn't conflict with browser shortcuts)
      if (!event.altKey) return;

      // Prevent default for our custom shortcuts
      const shortcuts: Record<string, () => void> = {
        'h': () => {
          event.preventDefault();
          onNavigate('home');
          toast.success('Navigated to Home', {
            description: 'Press Alt+? to see all keyboard shortcuts'
          });
        },
        'a': () => {
          event.preventDefault();
          onNavigate('about');
          toast.success('Navigated to About');
        },
        's': () => {
          event.preventDefault();
          onNavigate('services');
          toast.success('Navigated to How It Works');
        },
        'p': () => {
          event.preventDefault();
          onNavigate('products');
          toast.success('Navigated to Practitioner Portal');
        },
        'c': () => {
          event.preventDefault();
          onNavigate('contact');
          toast.success('Navigated to Support');
        },
        '/': () => {
          event.preventDefault();
          showShortcutsHelp();
        },
        '?': () => {
          event.preventDefault();
          showShortcutsHelp();
        }
      };

      const handler = shortcuts[event.key.toLowerCase()];
      if (handler) {
        handler();
      }
    };

    const showShortcutsHelp = () => {
      toast.info('Keyboard Shortcuts', {
        description: (
          <div className="space-y-1" style={{ fontFamily: 'var(--font-inter)' }}>
            <p><strong>Alt + H</strong>: Home</p>
            <p><strong>Alt + A</strong>: About</p>
            <p><strong>Alt + S</strong>: How It Works</p>
            <p><strong>Alt + P</strong>: Practitioner Portal</p>
            <p><strong>Alt + C</strong>: Support</p>
            <p><strong>Alt + ?</strong>: Show shortcuts</p>
          </div>
        ),
        duration: 8000
      });
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [onNavigate]);

  // Visual indicator for keyboard shortcuts availability
  return (
    <div 
      className="sr-only" 
      role="region" 
      aria-label="Keyboard shortcuts available"
    >
      Press Alt plus H for Home, A for About, S for Services, P for Products, C for Contact, or ? for help
    </div>
  );
});
