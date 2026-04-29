import { memo } from 'react';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';
import svgPaths from '../imports/svg-hkwhgthqtp';

interface FooterProps {
  onNavigate?: (page: string) => void;
}

export const Footer = memo(function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-card border-t border-border" role="contentinfo">
      <div className="max-w-7xl mx-auto px-8 pt-12 pb-0">
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr] gap-8 mb-8">
          {/* Company Info */}
          <section aria-labelledby="company-info">
            <h3 id="company-info" className="text-primary mb-6">Priority Pay Network</h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              A secure platform connecting health care practitioners and patients to resolve outstanding medical bills over 90 days old thus sustaining our health care system and ensuring both (practitioners and patients) can thrive.
            </p>
            <div className="flex space-x-4" role="list" aria-label="Social media links">
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded"
                aria-label="LinkedIn profile"
                role="listitem"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d={svgPaths.p3e7f1900} />
                </svg>
              </a>
            </div>
          </section>

          {/* Quick Links */}
          <nav aria-labelledby="quick-links">
            <h4 id="quick-links" className="mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-[16px] text-muted-foreground hover:text-primary hover:font-bold hover:underline transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-[16px] text-muted-foreground hover:text-primary hover:font-bold hover:underline transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#" className="text-[16px] text-muted-foreground hover:text-primary hover:font-bold hover:underline transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded">
                  Practitioner Portal
                </a>
              </li>
              <li>
                <a href="#" className="text-[16px] text-muted-foreground hover:text-primary hover:font-bold hover:underline transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded">
                  Support
                </a>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate?.('privacy')}
                  className="text-[16px] text-muted-foreground hover:text-primary hover:font-bold hover:underline transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded text-left"
                >
                  Privacy Policy
                </button>
              </li>
            </ul>
          </nav>

          {/* Contact Info */}
          <section aria-labelledby="contact-info">
            <h4 id="contact-info" className="mb-4">Contact</h4>
            <address className="space-y-3 not-italic">
              <div className="flex items-center gap-3">
                <PhoneIcon className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />
                <a href="tel:+17025705200" className="text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded">
                  (702) 570-5200
                </a>
              </div>
            </address>
          </section>
        </div>

        <div className="border-t border-border pt-8 pb-0 text-center">
          <p className="text-muted-foreground m-[0px] mb-[16px]">
            © 2025 Priority Pay Network. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
});