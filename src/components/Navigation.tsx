import { useState, useEffect, useCallback, useMemo, memo } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Logo } from './Logo';
import { ThemeToggle } from './ThemeToggle';
import { FocusTrap } from './FocusTrap';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export const Navigation = memo(function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = useMemo(() => [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'How It Works' },
    { id: 'about', label: 'About' },
    { id: 'products', label: 'Practitioner Portal' },
    { id: 'contact', label: 'Support' }
  ], []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when Escape key is pressed
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  const handleNavItemClick = useCallback((itemId: string) => {
    onNavigate(itemId);
    setIsMobileMenuOpen(false);
  }, [onNavigate]);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-2' : 'py-4'
      }`}
      role="navigation" 
      aria-label="Primary navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className="bg-card/80 backdrop-blur-lg border border-border rounded-[var(--radius-lg)] shadow-[var(--elevation-sm)]"
          style={{
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
          }}
        >
          <div className="flex justify-between items-center h-16 px-4 sm:px-6">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Logo onClick={() => onNavigate('home')} />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center">
              <ul className="ml-10 flex items-baseline space-x-2" role="menubar">
                {navItems.map((item) => (
                  <li key={item.id} role="none">
                    <button
                      onClick={() => onNavigate(item.id)}
                      role="menuitem"
                      aria-current={currentPage === item.id ? 'page' : undefined}
                      className={`relative group overflow-hidden px-4 py-2 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-lg min-h-[44px] min-w-[44px] ${
                        currentPage === item.id
                          ? 'text-primary-foreground'
                          : 'text-foreground hover:text-primary'
                      }`}
                    >
                      <span className="absolute inset-[-100%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,currentColor_50%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <span className={`absolute inset-[1.5px] rounded-[6px] transition-colors duration-300 ${
                        currentPage === item.id 
                          ? 'bg-primary' 
                          : 'bg-transparent group-hover:bg-card'
                      }`} />
                      <span className="relative z-10 group-hover:font-bold">
                        {item.label}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
              {/* Theme Toggle - Desktop */}
              <div className="ml-4">
                <ThemeToggle />
              </div>
            </div>

            {/* Mobile menu button and theme toggle */}
            <div className="md:hidden flex items-center space-x-2">
              <ThemeToggle />
              <button
                onClick={toggleMobileMenu}
                className="inline-flex items-center justify-center p-2 text-foreground hover:text-primary transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-lg min-h-[44px] min-w-[44px]"
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-navigation-menu"
                aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              >
                {isMobileMenuOpen ? (
                  <XMarkIcon className="w-6 h-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="w-6 h-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation with Focus Trap */}
          {isMobileMenuOpen && (
            <FocusTrap active={isMobileMenuOpen}>
              <div 
                className="md:hidden bg-card/95 backdrop-blur-lg border-t border-border rounded-b-[var(--radius-lg)] mt-0"
                id="mobile-navigation-menu"
                role="menu"
                aria-label="Mobile navigation"
                style={{
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                }}
              >
                <ul className="px-4 pt-2 pb-4 space-y-1">
                  {navItems.map((item) => (
                    <li key={item.id} role="none">
                      <button
                        onClick={() => {
                          onNavigate(item.id);
                          setIsMobileMenuOpen(false);
                        }}
                        role="menuitem"
                        aria-current={currentPage === item.id ? 'page' : undefined}
                        className={`block px-4 py-2 w-full text-left transition-all duration-300 hover:font-bold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-lg min-h-[44px] ${
                          currentPage === item.id
                            ? 'bg-primary text-primary-foreground'
                            : 'text-foreground hover:text-primary hover:bg-secondary/70 hover:translate-x-1'
                        }`}
                      >
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </FocusTrap>
          )}
        </div>
      </div>
    </nav>
  );
});