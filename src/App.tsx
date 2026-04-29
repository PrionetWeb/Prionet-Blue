import { useState, useCallback, lazy, Suspense } from 'react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { ErrorBoundary } from './components/ErrorBoundary';
import { SkipToContent } from './components/SkipToContent';
import { PageLoader } from './components/PageLoader';
import { CookieConsent } from './components/CookieConsent';
import { ScrollProgress } from './components/ScrollProgress';
import { KeyboardShortcuts } from './components/KeyboardShortcuts';
import { ScrollToTop } from './components/ScrollToTop';
import { Toaster } from './components/ui/sonner';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./components/pages/HomePage').then(module => ({ default: module.HomePage })));
const AboutPage = lazy(() => import('./components/pages/AboutPage').then(module => ({ default: module.AboutPage })));
const ServicesPage = lazy(() => import('./components/pages/ServicesPage').then(module => ({ default: module.ServicesPage })));
const ProductsPage = lazy(() => import('./components/pages/ProductsPage').then(module => ({ default: module.ProductsPage })));
const ContactPage = lazy(() => import('./components/pages/ContactPage').then(module => ({ default: module.ContactPage })));
const PrivacyPolicyPage = lazy(() => import('./components/pages/PrivacyPolicyPage').then(module => ({ default: module.PrivacyPolicyPage })));

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = useCallback((page: string) => {
    setCurrentPage(page);
    
    // Focus on main content after navigation for accessibility
    setTimeout(() => {
      const mainContent = document.getElementById('main-content');
      if (mainContent) {
        mainContent.focus();
      }
    }, 100);
    
    // Smooth scroll to top with reduced motion support
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ 
      top: 0, 
      behavior: prefersReducedMotion ? 'auto' : 'smooth' 
    });
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'about':
        return <AboutPage />;
      case 'services':
        return <ServicesPage onNavigate={handleNavigate} />;
      case 'products':
        return <ProductsPage onNavigate={handleNavigate} />;
      case 'contact':
        return <ContactPage />;
      case 'privacy':
        return <PrivacyPolicyPage />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <ErrorBoundary>
      <div className="min-h-screen flex flex-col">
        <SkipToContent />
        <ScrollProgress />
        <KeyboardShortcuts onNavigate={handleNavigate} />
        <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
        <main 
          id="main-content"
          className="flex-1"
          tabIndex={-1}
          role="main"
          aria-label="Main content"
        >
          <Suspense fallback={<PageLoader />}>
            {renderPage()}
          </Suspense>
        </main>
        <Footer onNavigate={handleNavigate} />
        <CookieConsent onNavigate={handleNavigate} />
        <ScrollToTop />
        <Toaster 
          position="top-right"
          theme="system"
          richColors
          closeButton
          toastOptions={{
            style: {
              fontFamily: 'var(--font-outfit)',
            },
            className: 'min-h-[44px]',
          }}
        />
      </div>
    </ErrorBoundary>
  );
}