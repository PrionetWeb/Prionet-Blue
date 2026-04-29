import { ShieldCheckIcon, LockClosedIcon, CircleStackIcon, UsersIcon, MagnifyingGlassIcon, ComputerDesktopIcon, DevicePhoneMobileIcon, CheckCircleIcon, ClockIcon, CurrencyDollarIcon, ChatBubbleLeftRightIcon, ChartBarIcon, HeartIcon, HandRaisedIcon } from '@heroicons/react/24/outline';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Alert, AlertDescription } from '../ui/alert';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface ProductsPageProps {
  onNavigate: (page: string) => void;
}

export function ProductsPage({ onNavigate }: ProductsPageProps) {
  const practitionerFeatures = [
    {
      icon: <MagnifyingGlassIcon className="w-8 h-8 text-primary" />,
      title: "Patient Balance Search",
      description: "Search the database to check if patients have outstanding medical bills over 90 days old.",
      capabilities: ["Quick patient lookup", "Real-time results", "Simple yes/no indicators", "No financial details shown"]
    },
    {
      icon: <ShieldCheckIcon className="w-8 h-8 text-primary" />,
      title: "Privacy Protection",
      description: "See only whether balances exist without accessing sensitive financial information or amounts.",
      capabilities: ["HIPAA compliant queries", "No amount visibility", "No creditor information", "Patient privacy maintained"]
    },
    {
      icon: <CircleStackIcon className="w-8 h-8 text-primary" />,
      title: "Secure Access",
      description: "Enterprise-grade security with authenticated access and comprehensive activity logging.",
      capabilities: ["Secure login credentials", "Activity monitoring", "Access logging", "Device tracking"]
    },
    {
      icon: <ComputerDesktopIcon className="w-8 h-8 text-primary" />,
      title: "User-Friendly Interface",
      description: "Intuitive dashboard designed specifically for healthcare practitioner workflows.",
      capabilities: ["Simple search interface", "Quick results display", "Easy navigation", "Mobile responsive"]
    }
  ];

  const patientPortalFeatures = [
    {
      icon: <UsersIcon className="w-8 h-8 text-primary" />,
      title: "Complete Balance Visibility",
      description: "View all outstanding medical balance details in one secure, private location.",
      capabilities: ["Full balance information", "Creditor details", "Amount breakdowns", "Payment history"]
    },
    {
      icon: <LockClosedIcon className="w-8 h-8 text-primary" />,
      title: "Dispute Management",
      description: "Tools to dispute charges, resolve billing issues, and communicate with practitioners.",
      capabilities: ["Dispute submission", "Status tracking", "Document upload", "Resolution timeline"]
    },
    {
      icon: <DevicePhoneMobileIcon className="w-8 h-8 text-primary" />,
      title: "Payment Options",
      description: "Make secure payments directly to healthcare practitioners through the platform.",
      capabilities: ["Direct practitioner payments", "Multiple payment methods", "Payment scheduling", "Receipt tracking"]
    }
  ];

  const securityFeatures = [
    {
      title: "Data Encryption",
      description: "All data is encrypted in transit and using industry-standard protocols.",
      icon: <LockClosedIcon className="w-6 h-6 text-primary" />
    },
    {
      title: "Access Logging",
      description: "Comprehensive logging of all system access and activities for security monitoring.",
      icon: <ComputerDesktopIcon className="w-6 h-6 text-primary" />
    },
    {
      title: "HIPAA Compliance",
      description: "Full compliance with healthcare privacy regulations and data protection requirements.",
      icon: <ShieldCheckIcon className="w-6 h-6 text-primary" />
    },
    {
      title: "Privacy",
      description: "Patient data remains within the network and is never shared with external parties.",
      icon: <CircleStackIcon className="w-6 h-6 text-primary" />
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-16">
      {/* Hero Section */}
      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Content - Left Side */}
            <div className="space-y-6">
              <div>
                <h1 className="mb-4 text-[24px] sm:text-4xl lg:text-5xl">
                  Built for Health Care Practitioners
                </h1>
                <p style={{ color: 'var(--muted-foreground)', lineHeight: '1.6' }}>
                  Priority Pay Network is designed specifically to support health care practitioners 
                  in managing patient financial matters with confidence, security, and complete 
                  privacy compliance. Our platform puts the tools you need at your fingertips.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-10 h-10 flex-shrink-0" style={{ backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)', borderRadius: 'var(--radius)' }}>
                    <MagnifyingGlassIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="mb-2">
                      Quick Verification
                    </h4>
                    <p style={{ color: 'var(--muted-foreground)', fontSize: 'var(--text-sm)' }}>
                      Search our secure database in seconds to verify if your patients have outstanding 
                      medical balance over 90 days old, with simple yes/no results.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-10 h-10 flex-shrink-0" style={{ backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)', borderRadius: 'var(--radius)' }}>
                    <ShieldCheckIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="mb-2">
                      Patient-First Approach
                    </h4>
                    <p style={{ color: 'var(--muted-foreground)', fontSize: 'var(--text-sm)' }}>
                      Access only the information you need, balance existence indicators, without viewing any amounts, creditors, or other sensitive patient financial details.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-10 h-10 flex-shrink-0" style={{ backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)', borderRadius: 'var(--radius)' }}>
                    <LockClosedIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="mb-2">
                      Secure, Compliant Platform
                    </h4>
                    <p style={{ color: 'var(--muted-foreground)', fontSize: 'var(--text-sm)' }}>
                      Enterprise-grade security with full HIPAA compliance, comprehensive access logging, 
                      and no third-party data sharing ensures your practice stays protected.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-10 h-10 flex-shrink-0" style={{ backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)', borderRadius: 'var(--radius)' }}>
                    <ComputerDesktopIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="mb-2">
                      User-Friendly
                    </h4>
                    <p style={{ color: 'var(--muted-foreground)', fontSize: 'var(--text-sm)' }}>
                      Intuitive dashboard designed for busy healthcare professionals. Get the 
                      information you need quickly without complicated workflows or training.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="inline-flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl mb-4">
                  <a 
                    href="https://www.prioritypaynet.org/providerLogin.cfm"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Login (opens in new tab)" className="text-[16px]"
                  >
                    Login
                  </a>
                </Button>
                <Button 
                  asChild
                  variant="outline" 
                  className="rounded-xl"
                >
                  <a 
                    href="https://www.prioritypaynet.org/join/join.cfm"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Register for practitioner portal (opens in new tab)" className="text-[16px]"
                  >
                    Join
                  </a>
                </Button>
              </div>
            </div>

            {/* Image - Right Side */}
            <div className="relative h-full min-h-[300px] lg:min-h-[500px]">
              <ImageWithFallback
                src="https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg"
                alt="Confident African American healthcare professional in medical setting demonstrating compassionate patient care"
                className="w-full h-full object-cover object-center shadow-2xl"
                style={{ borderRadius: 'var(--radius)' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why You Want Your Provider to Be a PRIONET Provider */}
      <section className="py-16 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">Why You Want Your Practitioner to Be a PRIONET Practitioner</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              When your healthcare practitioner participates in Priority Pay Network, you benefit from 
              a more transparent, efficient, and privacy-focused approach to managing medical balances.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            <Card className="rounded-2xl w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)]">
              <CardContent className="pt-8">
                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 flex-shrink-0" style={{ backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)', borderRadius: 'var(--radius)' }}>
                    <CurrencyDollarIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="mb-3">Fewer Billing Surprises</h3>
                    <p style={{ color: 'var(--muted-foreground)' }}>
                      PRIONET helps your practitioner manage patient balances more fairly and transparently. If you miss a payment or fall behind, instead of immediately sending your account to collections, PRIONET offers gentle, structured support, giving you time and flexible options to pay.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)]">
              <CardContent className="pt-8">
                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 flex-shrink-0" style={{ backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)', borderRadius: 'var(--radius)' }}>
                    <ChatBubbleLeftRightIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="mb-3">Improved Communication</h3>
                    <p style={{ color: 'var(--muted-foreground)' }}>
                      With PRIONET, your practitioner stays connected with you through a secure, online portal. You'll get reminders, updates, and clear explanations about your medical bills, helping you stay informed and in control of your healthcare.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)]">
              <CardContent className="pt-8">
                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 flex-shrink-0" style={{ backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)', borderRadius: 'var(--radius)' }}>
                    <ChartBarIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="mb-3">No Impact to Credit Score</h3>
                    <p style={{ color: 'var(--muted-foreground)' }}>
                      Traditional collections can hurt your credit. PRIONET works to resolve balances without damaging your financial health. No hard inquiries. No ding to your credit score, just patient support, not punishing you if you are struggling with medical costs.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)]">
              <CardContent className="pt-8">
                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 flex-shrink-0" style={{ backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)', borderRadius: 'var(--radius)' }}>
                    <HeartIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="mb-3">You Stay with the Practitioner You Trust</h3>
                    <p style={{ color: 'var(--muted-foreground)' }}>
                      Because PRIONET helps practitioners keep their practices financially stable, you're more likely to keep seeing the same trusted doctor over time. It helps ensure your care is accessible.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)]">
              <CardContent className="pt-8">
                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 flex-shrink-0" style={{ backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)', borderRadius: 'var(--radius)' }}>
                    <HandRaisedIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="mb-3">Fair and Compassionate Care</h3>
                    <p style={{ color: 'var(--muted-foreground)' }}>
                      PRIONET Practitioners recognize that patients may need to arrange payment, and they are ready to discuss it.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portal Access */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-4">Access Practitioner Portal</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Healthcare practitioners with authorized access can log in here.
          </p>
          
          <Card className="p-8 rounded-2xl shadow-lg max-w-md mx-auto">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <LockClosedIcon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="mb-4">Secure Practitioner Login</h3>
              <p className="text-muted-foreground mb-6">
                Access requires authorized healthcare practitioner credentials and secure authentication.
              </p>
              <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl mb-4">
                <a 
                  href="https://www.prioritypaynet.org/providerLogin.cfm"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Login to provider portal (opens in new tab)" className="text-[16px]"
                >
                  Login
                </a>
              </Button>
              <Button 
                asChild
                variant="outline" 
                className="w-full rounded-xl"
              >
                <a 
                  href="https://www.prioritypaynet.org/join/join.cfm"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Register for portal (opens in new tab)" className="text-[16px]"
                >
                  Join Network
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Support & Contact */}
      <section className="py-16 bg-secondary/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-4">Need Help with Portal Access?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our support team is available to help with portal access, technical issues, 
            or questions about using Priority Pay Network's platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl">
              <span>(702) 570-5200</span>
            </Button>
            <Button 
              variant="outline"
              className="rounded-xl"
              onClick={() => onNavigate('contact')}
            >
              Contact Support
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}