import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { XMarkIcon, Cog6ToothIcon } from '@heroicons/react/24/outline';

interface CookieConsentProps {
  onNavigate: (page: string) => void;
}

export function CookieConsent({ onNavigate }: CookieConsentProps) {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState({
    essential: true, // Always true, cannot be disabled
    functional: true,
    analytics: true,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Show banner after a short delay for better UX
      setTimeout(() => setShowBanner(true), 1000);
    }
  }, []);

  const handleAcceptAll = () => {
    const consent = {
      essential: true,
      functional: true,
      analytics: true,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem('cookieConsent', JSON.stringify(consent));
    setShowBanner(false);
    setShowPreferences(false);
  };

  const handleRejectAll = () => {
    const consent = {
      essential: true, // Essential cookies cannot be rejected
      functional: false,
      analytics: false,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem('cookieConsent', JSON.stringify(consent));
    setShowBanner(false);
    setShowPreferences(false);
  };

  const handleSavePreferences = () => {
    const consent = {
      ...preferences,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem('cookieConsent', JSON.stringify(consent));
    setShowBanner(false);
    setShowPreferences(false);
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Cookie Consent Banner */}
      <div
        className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6"
        role="dialog"
        aria-labelledby="cookie-consent-title"
        aria-describedby="cookie-consent-description"
      >
        <Card
          className="max-w-4xl mx-auto shadow-2xl"
          style={{
            borderRadius: 'var(--radius)',
            backgroundColor: 'var(--card)',
            border: '1px solid var(--border)',
            backdropFilter: 'blur(12px)',
          }}
        >
          <CardContent className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h2
                  id="cookie-consent-title"
                  className="mb-2"
                  style={{ fontSize: 'var(--text-h4)' }}
                >
                  🍪 We Value Your Privacy
                </h2>
                <p
                  id="cookie-consent-description"
                  style={{ color: 'var(--muted-foreground)', lineHeight: '1.6', fontSize: 'var(--text-sm)' }}
                >
                  We use cookies and similar technologies to enhance your experience, analyze usage, and maintain 
                  security on our HIPAA-compliant platform. Essential cookies are required for platform functionality. 
                  You can customize your preferences or accept all cookies.
                </p>
              </div>
              <button
                onClick={() => setShowBanner(false)}
                className="ml-4 p-2 hover:opacity-70 transition-opacity focus:outline-none focus:ring-2 focus:ring-ring rounded"
                aria-label="Close cookie banner"
                style={{ color: 'var(--muted-foreground)' }}
              >
                <XMarkIcon className="w-5 h-5" />
              </button>
            </div>

            {/* Preferences Panel */}
            {showPreferences && (
              <div className="mb-6 p-4 space-y-4" style={{ backgroundColor: 'var(--secondary)', borderRadius: 'var(--radius)' }}>
                <h3 className="mb-3" style={{ fontSize: 'var(--text-base)' }}>
                  Cookie Preferences
                </h3>

                {/* Essential Cookies */}
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 style={{ fontSize: 'var(--text-sm)', marginBottom: '0.25rem' }}>
                      Essential Cookies
                    </h4>
                    <p style={{ fontSize: 'var(--text-sm)', color: 'var(--muted-foreground)' }}>
                      Required for platform functionality and security. Cannot be disabled.
                    </p>
                  </div>
                  <div className="ml-4">
                    <input
                      type="checkbox"
                      checked={true}
                      disabled
                      className="w-4 h-4"
                      aria-label="Essential cookies (required)"
                    />
                  </div>
                </div>

                {/* Functional Cookies */}
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 style={{ fontSize: 'var(--text-sm)', marginBottom: '0.25rem' }}>
                      Functional Cookies
                    </h4>
                    <p style={{ fontSize: 'var(--text-sm)', color: 'var(--muted-foreground)' }}>
                      Remember your preferences and settings for a better experience.
                    </p>
                  </div>
                  <div className="ml-4">
                    <input
                      type="checkbox"
                      checked={preferences.functional}
                      onChange={(e) => setPreferences({ ...preferences, functional: e.target.checked })}
                      className="w-4 h-4 cursor-pointer"
                      aria-label="Functional cookies"
                    />
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 style={{ fontSize: 'var(--text-sm)', marginBottom: '0.25rem' }}>
                      Analytics Cookies
                    </h4>
                    <p style={{ fontSize: 'var(--text-sm)', color: 'var(--muted-foreground)' }}>
                      Help us understand platform usage and improve our services.
                    </p>
                  </div>
                  <div className="ml-4">
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                      className="w-4 h-4 cursor-pointer"
                      aria-label="Analytics cookies"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                onClick={handleAcceptAll}
                className="flex-1"
                style={{
                  backgroundColor: 'var(--primary)',
                  color: 'var(--primary-foreground)',
                  borderRadius: 'var(--radius)',
                }}
                aria-label="Accept all cookies"
              >
                Accept All
              </Button>
              <Button
                onClick={handleRejectAll}
                variant="outline"
                className="flex-1"
                style={{
                  borderRadius: 'var(--radius)',
                  borderColor: 'var(--border)',
                  color: 'var(--foreground)',
                }}
                aria-label="Reject non-essential cookies"
              >
                Reject All
              </Button>
              <Button
                onClick={() => setShowPreferences(!showPreferences)}
                variant="outline"
                className="flex-1"
                style={{
                  borderRadius: 'var(--radius)',
                  borderColor: 'var(--border)',
                  color: 'var(--foreground)',
                }}
                aria-label={showPreferences ? 'Hide preferences' : 'Customize cookie preferences'}
              >
                <Cog6ToothIcon className="w-4 h-4 mr-2" />
                {showPreferences ? 'Hide' : 'Customize'}
              </Button>
              {showPreferences && (
                <Button
                  onClick={handleSavePreferences}
                  style={{
                    backgroundColor: 'var(--primary)',
                    color: 'var(--primary-foreground)',
                    borderRadius: 'var(--radius)',
                  }}
                  aria-label="Save cookie preferences"
                >
                  Save Preferences
                </Button>
              )}
            </div>

            {/* Privacy Policy Link */}
            <div className="mt-4 text-center">
              <button
                onClick={() => {
                  setShowBanner(false);
                  onNavigate('privacy');
                }}
                className="hover:underline focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded"
                style={{ color: 'var(--muted-foreground)', fontSize: 'var(--text-sm)' }}
                aria-label="Read our privacy policy"
              >
                Learn more in our Privacy Policy
              </button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/20 z-40"
        style={{ backdropFilter: 'blur(2px)' }}
        onClick={() => setShowBanner(false)}
        aria-hidden="true"
      />
    </>
  );
}
