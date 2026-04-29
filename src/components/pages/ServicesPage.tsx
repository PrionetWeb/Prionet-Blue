import { MagnifyingGlassIcon, UsersIcon, ShieldCheckIcon, CircleStackIcon, CheckCircleIcon, ClockIcon, ArrowRightIcon, KeyIcon, HeartIcon } from '@heroicons/react/24/outline';
import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { useState, useRef } from 'react';
import { Alert } from '../ui/alert';

interface ServicesPageProps {
  onNavigate: (page: string) => void;
}

export function ServicesPage({ onNavigate }: ServicesPageProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  
  const steps = [
    {
      step: "1",
      icon: <MagnifyingGlassIcon className="w-8 h-8" style={{ color: 'var(--primary)' }} />,
      title: "Practitioner Database Query",
      description: "Healthcare practitioners log into the secure portal and search for patients by basic identifying information to check for outstanding balances over 90 days old.",
      details: ["Secure login with credentials", "Search by patient information", "Results show only balance existence", "No amount or creditor details visible"]
    },
    {
      step: "2", 
      icon: <ShieldCheckIcon className="w-8 h-8" style={{ color: 'var(--primary)' }} />,
      title: "Privacy-Protected Results",
      description: "The system returns only whether the patient has outstanding medical balances, never revealing specific amounts, or other sensitive details.",
      details: ["Simple yes/no balance indicator", "No financial details exposed", "Patient privacy maintained", "HIPAA compliant results"]
    },
    {
      step: "3",
      icon: <UsersIcon className="w-8 h-8" style={{ color: 'var(--primary)' }} />,
      title: "Patient Portal Access",
      description: "Patients can access their secure private portal to view complete balance details, dispute charges, make payments or payment arrangements directly to healthcare practitioners.",
      details: ["Secure patient login", "Full balance detail access", "Dispute resolution tools", "Direct payment options"]
    },
    {
      step: "4",
      icon: <CircleStackIcon className="w-8 h-8" style={{ color: 'var(--primary)' }} />,
      title: "Secure Data Management",
      description: "All interactions are logged for security purposes while maintaining strict privacy standards.",
      details: ["Activity logging and monitoring", "Device and login analytics", "No third-party sharing", "Complete data protection"]
    }
  ];

  const providerFeatures = [
    {
      title: "Quick Balance Verification",
      description: "Instantly check for outstanding medical debts over 90 days old",
      icon: <MagnifyingGlassIcon className="w-6 h-6" style={{ color: 'var(--primary)' }} />
    },
    {
      title: "Strengthen Relationship",
      description: "Make payment arrangements; keep your patient",
      icon: <ShieldCheckIcon className="w-6 h-6" style={{ color: 'var(--primary)' }} />
    },
    {
      title: "Compassion Sustainability",
      description: "Keep clinics open, respected and financially healthy",
      icon: <CircleStackIcon className="w-6 h-6" style={{ color: 'var(--primary)' }} />
    }
  ];

  const patientFeatures = [
    {
      title: "Complete Balance Visibility",
      description: "View all outstanding medical balance details in one secure location",
      icon: <UsersIcon className="w-6 h-6" style={{ color: 'var(--primary)' }} />
    },
    {
      title: "Dispute Management",
      description: "Easily dispute charges or resolve billing issues directly",
      icon: <CheckCircleIcon className="w-6 h-6" style={{ color: 'var(--primary)' }} />
    },
    {
      title: "Direct Payment",
      description: "Make payments directly to your practitioners payment portal",
      icon: <ClockIcon className="w-6 h-6" style={{ color: 'var(--primary)' }} />
    }
  ];

  const benefits = [
    {
      title: "90+ Day Focus",
      description: "Specifically designed for managing medical balances that are 90 days.",
      icon: "⏰"
    },
    {
      title: "Privacy First",
      description: "Practitioners see only balance existence, never amounts or details, maintaining complete patient privacy.",
      icon: "🔒"
    },
    {
      title: "Patient Control",
      description: "Patients have full access to their information and control over dispute resolution and payments.",
      icon: "👤"
    },
    {
      title: "HIPAA Compliant",
      description: "Full compliance with healthcare privacy regulations and industry best practices.",
      icon: "🛡️"
    },
    {
      title: "Secure Platform",
      description: "Enterprise-grade security with encryption, monitoring, and regular audits.",
      icon: "💻"
    },
    {
      title: "No Third-Party Sharing",
      description: "Patient data stays within the network and is never shared with external parties.",
      icon: "🚫"
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-16">
      {/* Hero Section with Bento Layout */}
      <section className="py-12 px-[0px] py-[24px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Grid - Bento Style */}
          <div className="grid grid-cols-12 gap-6 mb-16">
            {/* Main Title Card */}
            <motion.div 
              className="col-span-12 lg:col-span-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Card className="h-full overflow-hidden" style={{ borderRadius: 'var(--radius)', backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
                <CardContent className="p-8">
                  <h1 className="text-[24px] sm:text-4xl lg:text-5xl" style={{ marginBottom: '1.5rem' }}>
                    How Priority Payment Network Works
                  </h1>
                  <p style={{ color: 'var(--muted-foreground)', lineHeight: '1.6', maxWidth: '600px' }}>
                    When you visit a PRIONET practitioner, staff securely verify your name and date of birth—or the last four digits of your SSN—within the PPN system. No balance details are shared at check-in. If an outstanding balance exists, you’ll receive a secure code to view it privately in the PPN app. You work directly with your practitioner to resolve the balance, and once it’s settled, your record is discreetly updated.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            
            {/* Stats Cards */}
            <div className="col-span-12 lg:col-span-4 grid grid-rows-2 gap-6">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Card style={{ borderRadius: 'var(--radius)', backgroundColor: 'var(--primary)', border: 'none' }}>
                  <CardContent className="p-6 text-center">
                    <div style={{ fontSize: 'var(--text-h2)', fontWeight: 'var(--font-weight-bold)', color: 'var(--primary-foreground)', fontFamily: 'var(--font-roboto)' }}>
                      90+
                    </div>
                    <p style={{ fontSize: 'var(--text-sm)', color: 'var(--primary-foreground)', marginTop: '0.5rem' }}>
                      Days minimum balance age
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Card style={{ borderRadius: 'var(--radius)', backgroundColor: 'var(--accent)', border: 'none' }}>
                  <CardContent className="p-6 text-center">
                    <div style={{ fontSize: 'var(--text-h2)', fontWeight: 'var(--font-weight-bold)', color: 'var(--accent-foreground)', fontFamily: 'var(--font-roboto)' }}>
                      100%
                    </div>
                    <p style={{ fontSize: 'var(--text-sm)', color: 'var(--accent-foreground)', marginTop: '0.5rem' }}>
                      HIPAA Compliant
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
          
          {/* Hero Image with Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 items-center">
            {/* Image - Left Side */}
            <div className="relative h-full min-h-[500px] flex items-center justify-center overflow-hidden rounded-2xl">
              {videoError ? (
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1666886573681-a8fbe983a3fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjBoZWFsdGhjYXJlJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2NTk2ODI3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Healthcare professional providing compassionate patient care"
                  className="w-full aspect-video object-cover"
                  style={{ borderRadius: 'var(--radius)' }}
                />
              ) : (
                <video
                  ref={videoRef}
                  className="w-full aspect-video object-contain bg-black/5"
                  style={{ borderRadius: 'var(--radius)' }}
                  controls
                  playsInline
                  poster="https://images.unsplash.com/photo-1666886573681-a8fbe983a3fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjBoZWFsdGhjYXJlJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2NTk2ODI3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  onError={() => setVideoError(true)}
                  onLoadedData={() => setVideoLoaded(true)}
                >
                  <source src="https://www.prioritypaynet.org/video/ppn_rev05.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
            
            {/* Content - Right Side */}
            <div className="space-y-6">
              <div>
                <h2 className="mb-4">
                  Patient-First Healthcare Management
                </h2>
                <p style={{ color: 'var(--muted-foreground)', lineHeight: '1.6' }}>
                  Priority Pay Network bridges the gap between healthcare practitioners and patients when they make payment arrangements, 
                  offering a secure solution that respects patient privacy.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-10 h-10 flex-shrink-0" style={{ backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)', borderRadius: 'var(--radius)' }}>
                    <CheckCircleIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="mb-2">
                      Compassion
                    </h4>
                    <p style={{ color: 'var(--muted-foreground)', fontSize: 'var(--text-sm)' }}>
                      No collections, threats, or credit impact, just a simple understanding.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-10 h-10 flex-shrink-0" style={{ backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)', borderRadius: 'var(--radius)' }}>
                    <ClockIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="mb-2">
                      Ongoing Care
                    </h4>
                    <p style={{ color: 'var(--muted-foreground)', fontSize: 'var(--text-sm)' }}>
                      Patients keep seeing their practitioner while balances are resolved.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-10 h-10 flex-shrink-0" style={{ backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)', borderRadius: 'var(--radius)' }}>
                    <ShieldCheckIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="mb-2">
                      Patient Privacy Protected
                    </h4>
                    <p style={{ color: 'var(--muted-foreground)', fontSize: 'var(--text-sm)' }}>
                      Practitioners only see if a balance exists, never the amount, whom owed, or specific details. 
                      Complete privacy compliance with HIPAA regulations.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-10 h-10 flex-shrink-0" style={{ backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)', borderRadius: 'var(--radius)' }}>
                    <UsersIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="mb-2">
                      Patient Empowerment
                    </h4>
                    <p style={{ color: 'var(--muted-foreground)', fontSize: 'var(--text-sm)' }}>
                      Patients maintain full control with secure portal access to view balance details, dispute charges, and/or make payments directly to healthcare providers.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="pt-6">
                <Button 
                  asChild
                  className="hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)', borderRadius: 'var(--radius)' }}
                >
                  <a 
                    href="https://www.prioritypaynet.org/join/join.cfm"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Join Priority Pay Network (opens in new tab)"
                    className="text-[16px]"
                  >
                    Join Priority Pay Network
                    <ArrowRightIcon className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </div>
              

            </div>
          </div>
        </div>
      </section>

      {/* Process Steps - Modern Bento Grid */}
      <section className="py-16" style={{ backgroundColor: 'var(--secondary)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">
              The Priority Pay Network Process
            </h2>
            <p style={{ color: 'var(--muted-foreground)', maxWidth: '600px', margin: '0 auto' }}>
              A secure, privacy-focused approach to healthcare balance management that protects 
              patient information while enabling efficient balance resolution.
            </p>
          </div>
          
          {/* Asymmetric Bento Grid for Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Step 1 */}
            <div>
              <Card className="h-full" style={{ borderRadius: 'var(--radius)', backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
                <CardContent className="p-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="flex items-center justify-center w-12 h-12" style={{ backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)', borderRadius: 'var(--radius)', fontSize: 'var(--text-h4)', fontWeight: 'var(--font-weight-bold)' }}>
                      1
                    </div>
                  </div>
                  <h3 className="mb-2">
                    {steps[0].title}
                  </h3>
                  <p style={{ color: 'var(--muted-foreground)', marginBottom: '1rem' }}>
                    {steps[0].description}
                  </p>
                </CardContent>
              </Card>
            </div>
            
            {/* Step 2 */}
            <div>
              <Card className="h-full" style={{ borderRadius: 'var(--radius)', backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
                <CardContent className="p-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="flex items-center justify-center w-12 h-12" style={{ backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)', borderRadius: 'var(--radius)', fontSize: 'var(--text-h4)', fontWeight: 'var(--font-weight-bold)' }}>
                      2
                    </div>
                  </div>
                  <h3 className="mb-3">
                    {steps[1].title}
                  </h3>
                  <p style={{ color: 'var(--muted-foreground)' }}>
                    {steps[1].description}
                  </p>
                </CardContent>
              </Card>
            </div>
            
            {/* Step 3 */}
            <div>
              <Card className="h-full" style={{ borderRadius: 'var(--radius)', backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
                <CardContent className="p-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="flex items-center justify-center w-12 h-12" style={{ backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)', borderRadius: 'var(--radius)', fontSize: 'var(--text-h4)', fontWeight: 'var(--font-weight-bold)' }}>
                      3
                    </div>
                  </div>
                  <h3 className="mb-3">
                    {steps[2].title}
                  </h3>
                  <p style={{ color: 'var(--muted-foreground)' }}>
                    {steps[2].description}
                  </p>
                </CardContent>
              </Card>
            </div>
            
            {/* Step 4 */}
            <div>
              <Card className="h-full" style={{ borderRadius: 'var(--radius)', backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
                <CardContent className="p-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="flex items-center justify-center w-12 h-12" style={{ backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)', borderRadius: 'var(--radius)', fontSize: 'var(--text-h4)', fontWeight: 'var(--font-weight-bold)' }}>
                      4
                    </div>
                  </div>
                  <h3 className="mb-2">
                    {steps[3].title}
                  </h3>
                  <p style={{ color: 'var(--muted-foreground)', marginBottom: '1rem' }}>
                    {steps[3].description}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Practitioner & Patient Features - Split Bento */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-12 gap-8">
            {/* Patient Section */}
            <div className="col-span-12 lg:col-span-6">
              <div className="mb-8">
                <h2 className="mb-4">
                  For Patients
                </h2>
                <p style={{ color: 'var(--muted-foreground)' }}>
                  Manage your outstanding medical balance through a secure, private portal 
                  with complete control over your information.
                </p>
              </div>
              <div className="space-y-4">
                {patientFeatures.map((feature, index) => (
                  <Card key={index} className="hover:shadow-xl transition-shadow" style={{ borderRadius: 'var(--radius)', backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex items-center justify-center w-12 h-12 bg-accent/10" style={{ borderRadius: 'var(--radius)' }}>
                          {feature.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="mb-2">
                            {feature.title}
                          </h4>
                          <p style={{ color: 'var(--muted-foreground)' }}>
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="mt-6">
                <Button 
                  asChild
                  className="hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)', borderRadius: 'var(--radius)' }}
                >
                  <a 
                    href="https://www.prioritypaynet.org/patientLogin.cfm"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Patient portal (opens in new tab)" className="text-[15px]"
                  >
                    Patient Portal
                    <ArrowRightIcon className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Practitioner Section */}
            <div className="col-span-12 lg:col-span-6">
              <div className="mb-8">
                <h2 className="mb-4">
                  For Practitioners
                </h2>
                <p style={{ color: 'var(--muted-foreground)' }}>
                  Access our secure database to efficiently check for patient balances while 
                  maintaining strict privacy compliance.
                </p>
              </div>
              <div className="space-y-4">
                {providerFeatures.map((feature, index) => (
                  <Card key={index} className="hover:shadow-xl transition-shadow" style={{ borderRadius: 'var(--radius)', backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex items-center justify-center w-12 h-12 bg-primary/10" style={{ borderRadius: 'var(--radius)' }}>
                          {feature.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="mb-2">
                            {feature.title}
                          </h4>
                          <p style={{ color: 'var(--muted-foreground)' }}>
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="mt-6">
                <Button 
                  asChild
                  variant="outline"
                  className="rounded-xl border-white/30 text-foreground hover:bg-white/10 hover:text-white transition-all duration-300 hover:scale-105 min-h-[44px] min-w-[44px]"
                >
                  <a 
                    href="https://www.prioritypaynet.org/providerLogin.cfm"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Practitioner portal (opens in new tab)" className="text-[16px] text-[rgb(255,255,255)]"
                  >
                    Practitioner Portal
                    <ArrowRightIcon className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits - Masonry Style Bento Grid */}
      <section className="py-16" style={{ backgroundColor: 'var(--secondary)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">
              Why Choose Priority Pay Network?
            </h2>
          </div>
          
          {/* Asymmetric Benefit Cards */}
          <div className="grid grid-cols-12 gap-6">
            {/* Large benefit card */}
            <div className="col-span-12 md:col-span-8">
              <Card className="h-full hover:shadow-xl transition-shadow" style={{ borderRadius: 'var(--radius)', backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
                <CardContent className="p-8 text-center flex flex-col justify-center h-full">
                  <div className="text-6xl mb-4">{benefits[0].icon}</div>
                  <h3 className="mb-4">
                    {benefits[0].title}
                  </h3>
                  <p style={{ color: 'var(--muted-foreground)', maxWidth: '400px', margin: '0 auto' }}>
                    {benefits[0].description}
                  </p>
                </CardContent>
              </Card>
            </div>
            
            {/* Stacked smaller cards */}
            <div className="col-span-12 md:col-span-4 grid grid-rows-2 gap-6">
              {benefits.slice(1, 3).map((benefit, index) => (
                <Card key={index + 1} className="hover:shadow-xl transition-shadow" style={{ borderRadius: 'var(--radius)', backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl mb-2">{benefit.icon}</div>
                    <h4 className="mb-2">
                      {benefit.title}
                    </h4>
                    <p style={{ color: 'var(--muted-foreground)' }}>
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Bottom row - three equal cards */}
            {benefits.slice(3).map((benefit, index) => (
              <div key={index + 3} className="col-span-12 md:col-span-4">
                <Card className="h-full hover:shadow-xl transition-shadow" style={{ borderRadius: 'var(--radius)', backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-3">{benefit.icon}</div>
                    <h4 className="mb-3">
                      {benefit.title}
                    </h4>
                    <p style={{ color: 'var(--muted-foreground)' }}>
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-4">
            Ready to Get Started?
          </h2>
          <p style={{ color: 'var(--muted-foreground)', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
            Whether you're a healthcare provider looking to access our database or a patient 
            needing help with your portal, we're here to support you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              className="hover:opacity-90 transition-opacity"
              style={{ backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)', borderRadius: 'var(--radius)' }}
            >
              <a 
                href="https://www.prioritypaynet.org/patientLogin.cfm"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Patient portal (opens in new tab)" className="text-[16px]"
              >
                Patient Portal
              </a>
            </Button>
            <Button 
              asChild
              variant="outline"
              className="rounded-xl border-white/30 text-foreground hover:bg-white/10 hover:text-white transition-all duration-300 hover:scale-105 min-h-[44px] min-w-[44px]"
            >
              <a 
                href="https://www.prioritypaynet.org/providerLogin.cfm"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Access practitioner portal (opens in new tab)" className="text-[16px] text-[rgb(255,255,255)]"
              >
                Practitioner Portal Access
                <ArrowRightIcon className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}