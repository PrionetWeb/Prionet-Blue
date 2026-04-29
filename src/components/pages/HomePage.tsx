import { ArrowRightIcon, ShieldCheckIcon, MagnifyingGlassIcon, UsersIcon, CheckCircleIcon, CircleStackIcon, LockClosedIcon, ClockIcon, EyeSlashIcon, DevicePhoneMobileIcon, HandThumbUpIcon } from '@heroicons/react/24/outline';
import { motion } from 'motion/react';
import { useRef, useEffect, useState, memo, useMemo } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { OptimizedImage } from '../OptimizedImage';
import { LiveRegion } from '../LiveRegion';
import { Alert, AlertDescription } from '../ui/alert';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export const HomePage = memo(function HomePage({ onNavigate }: HomePageProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoStatus, setVideoStatus] = useState<string>('');
  const [currentSection, setCurrentSection] = useState<string>('');
  const [videoError, setVideoError] = useState<boolean>(false);

  useEffect(() => {
    const videoElement = videoRef.current;
    
    if (!videoElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Play video when it comes into view
            videoElement.play().catch((error) => {
              console.log('Video autoplay failed:', error);
              setVideoStatus('Video autoplay prevented. Click to play.');
              setVideoError(true);
            });
          } else {
            // Pause video when it leaves view for performance
            videoElement.pause();
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of video is visible
      }
    );

    observer.observe(videoElement);

    return () => {
      observer.disconnect();
    };
  }, []);

  // Track which section user is viewing for accessibility announcements
  useEffect(() => {
    const sections = [
      { id: 'hero-section', name: 'Hero section' },
      { id: 'features-section', name: 'Features section' },
      { id: 'benefits-section', name: 'Benefits section' },
      { id: 'stats-section', name: 'Statistics section' },
      { id: 'everyone-wins-section', name: 'Everyone wins section' },
      { id: 'join-section', name: 'Join section' },
      { id: 'contact-section', name: 'Contact section' }
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            const sectionName = sections.find(s => s.id === entry.target.id)?.name;
            if (sectionName && sectionName !== currentSection) {
              setCurrentSection(sectionName);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach(section => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [currentSection]);

  const features = useMemo(() => [
    {
      icon: <ClockIcon className="w-8 h-8 text-primary" aria-hidden="true" />,
      title: "No Surprises",
      description: "Your practitioner can check if you have outstanding balances before scheduling new services, so you're never caught off guard or turned away unexpectedly."
    },
    {
      icon: <LockClosedIcon className="w-8 h-8 text-primary" aria-hidden="true" />,
      title: "Your Privacy Matters",
      description: "PRIONET protects your information. Practitioners see only whether a balance exists, not the amount, not the details. You stay in control."
    },
    {
      icon: <EyeSlashIcon className="w-8 h-8 text-primary" aria-hidden="true" />,
      title: "No One Sees Your Balance",
      description: "Not even the practitioner's staff can view your specific balance amounts, only that a balance exists."
    },
    {
      icon: <DevicePhoneMobileIcon className="w-8 h-8 text-primary" aria-hidden="true" />,
      title: "Private Code Access",
      description: "Only you will get a private passcode to securely access your information."
    },
    {
      icon: <ShieldCheckIcon className="w-8 h-8 text-primary" aria-hidden="true" />,
      title: "You Stay in Control",
      description: "Your payment arrangement is between you and your practitioner, outside of PRIONET."
    },
    {
      icon: <HandThumbUpIcon className="w-8 h-8 text-primary" aria-hidden="true" />,
      title: "Resolved Without Shame",
      description: "Once resolved, your information is updated or removed quietly. No judgment, no embarrassment, just resolution and peace of mind."
    }
  ], []);

  const benefits = useMemo(() => [
    {
      icon: <HandThumbUpIcon className="w-6 h-6 text-primary" aria-hidden="true" />,
      title: "Compassion",
      description: "No collections, threats, or credit impact, just understanding."
    },
    {
      icon: <CircleStackIcon className="w-6 h-6 text-primary" aria-hidden="true" />,
      title: "Centralized Database",
      description: "All outstanding medical balances over 90 days old in one secure, searchable database."
    },
    {
      icon: <ShieldCheckIcon className="w-6 h-6 text-primary" aria-hidden="true" />,
      title: "HIPAA Compliant",
      description: "Full compliance with health care privacy regulations and data protection standards."
    }
  ], []);

  const stats = useMemo(() => [
    { 
      title: "Encompass",
      description: ["Health Practitioners,", "Psychiatrist and Behavioral", "Health Specialists"]
    },
    { 
      title: "Embrace",
      description: ["Dentist, Ophthalmologist,", "and Podiatrist"]
    },
    { 
      title: "Include",
      description: ["Labs, Imaging Centers,", "Allied Health Care Specialists,", "and Specialty Clinics"]
    },
    { 
      title: "Incorporate",
      description: ["Chiropractor and Physical", "Therapy and Urgent Care"]
    }
  ], []);

  return (
    <main className="min-h-screen overflow-x-hidden" role="main">
      {/* Live region for section announcements */}
      <LiveRegion 
        message={currentSection ? `Viewing ${currentSection}` : ''}
        politeness="polite"
      />

      {videoStatus && (
        <LiveRegion 
          message={videoStatus}
          politeness="polite"
        />
      )}

      {/* Hero Section */}
      <section 
        id="hero-section"
        className="relative w-full min-h-screen flex flex-col" 
        aria-labelledby="hero-heading"
      >
        {/* Full-width background image with optimization */}
        <div className="absolute inset-0 z-0">
          <OptimizedImage
            src="https://images.pexels.com/photos/7446993/pexels-photo-7446993.jpeg"
            alt="Friendly doctors helping patients in health care setting"
            className="w-full h-full object-cover"
            priority={true}
            width={1920}
            height={1080}
          />
          {/* Overlay for better text readability and AAA contrast */}
          <div className="absolute inset-0 bg-black/40" aria-hidden="true"></div>
        </div>

        {/* Content overlay */}
        <div className="relative z-10 w-full flex-grow flex flex-col justify-start lg:justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-32 pb-12 lg:pt-0 lg:pb-0">
            <motion.div 
              className="max-w-3xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.h1 
                id="hero-heading"
                className="mb-6 text-white text-[1.5rem] sm:text-4xl lg:text-5xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Medical Payment Plan Management{" "}
                <br className="hidden lg:block" />
                Helping Patients Find Relief. Helping Clinics Stay Strong.
              </motion.h1>
              <motion.div 
                className="flex flex-col gap-6 mb-8 text-white/90"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <p className="relative">
                  PRIONET is a secure, privacy-first network that supports patients and medical practices by:
                </p>
                <ul className="list-none space-y-2 pl-0">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Providing patients with private, self-service access to address outstanding medical balances</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Enabling discreet communication about balances without exposing financial details</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Offering a respectful, patient, and practitioner-centered approach to resolving medical balances</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Encouraging shared accountability that supports patient trust and clinic sustainability</span>
                  </li>
                </ul>
              </motion.div>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Button 
                  asChild
                  className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg min-h-[44px] min-w-[44px]"
                >
                  <a 
                    href="https://www.prioritypaynet.org/providerLogin.cfm"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Practitioner portal login (opens in new tab)" className="text-[16px]"
                  >
                    Practitioner Portal Login
                    <ArrowRightIcon className="ml-2 w-4 h-4" aria-hidden="true" />
                  </a>
                </Button>
                <Button 
                  asChild
                  variant="outline"
                  className="rounded-xl border-white/30 text-foreground hover:bg-white/10 hover:text-white transition-all duration-300 hover:scale-105 min-h-[44px] min-w-[44px]"
                >
                  <a 
                    href="https://www.prioritypaynet.org/patientLogin.cfm"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Patient portal login (opens in new tab)" className="text-[16px] text-[rgb(255,255,255)]"
                  >
                    Patient portal login
                  </a>
                </Button>
              </motion.div>
              <motion.div 
                className="mt-8 flex items-center space-x-6 text-white/80"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <div className="flex items-center" role="img" aria-label="HIPAA Compliant">
                  <ShieldCheckIcon className="w-4 h-4 mr-2 text-white" aria-hidden="true" />
                  <span>HIPAA Compliant</span>
                </div>
                <div className="flex items-center" role="img" aria-label="Privacy Protected">
                  <LockClosedIcon className="w-4 h-4 mr-2 text-white" aria-hidden="true" />
                  <span>Privacy Protected</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose PRIONET Section - Combined with How It Works */}
      <section 
        id="features-section"
        className="py-16 bg-secondary/20" 
        aria-labelledby="features-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 id="features-heading" className="mb-4">Why Choose a PRIONET Practitioner</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              When your health care practitioner is part of PRIONET, you're supported by a system that values transparency, privacy, and fairness. Here's what that means for you.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center p-6 rounded-2xl h-full">
                  <CardContent className="pt-6">
                    <div className="flex justify-center mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section 
        id="benefits-section"
        className="py-16" 
        aria-labelledby="benefits-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 id="benefits-heading" className="mb-6">Caring, Secure, and Effective</h2>
              <p className="text-muted-foreground mb-8">
                Prionet provides a secure environment where health care practitioners can identify patients with outstanding balances while ensuring complete patient privacy. Together, the Patient and Practitioner create an exclusive plan to lowering the balance.
              </p>
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      {benefit.icon}
                    </div>
                    <div>
                      <h4 className="mb-2">{benefit.title}</h4>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {videoError && (
                <Alert className="mb-4 rounded-2xl border-primary/20 bg-primary/5" role="alert" aria-live="polite">
                  <ShieldCheckIcon className="h-4 w-4 text-primary" aria-hidden="true" />
                  <AlertDescription className="text-foreground">
                    <strong>Video Blocked:</strong> If you have a pop-up blocker or ad blocker enabled, please disable it to view this video. The video may also be blocked by your browser settings.
                  </AlertDescription>
                </Alert>
              )}
              <ImageWithFallback
                src="https://images.pexels.com/photos/8127976/pexels-photo-8127976.jpeg"
                alt="Patient in wheelchair receiving compassionate care from health care practitioner, representing accessible and dignified medical services"
                className="w-full h-full object-cover object-center shadow-2xl rounded-2xl"
                style={{ borderRadius: 'var(--radius)' }}
              />
              <p className="sr-only">
                Image showing compassionate health care with a patient in a wheelchair receiving care from a health care practitioner, demonstrating Priority Pay Network's commitment to accessible and dignified medical services.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section 
        id="stats-section"
        className="py-16 bg-secondary/20" 
        aria-labelledby="stats-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 id="stats-heading" className="mb-4">Trusted by Health Care Professionals Nationwide</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Priority Pay Network serves healthcare professionals and other health related services nationwide, with patient dignity and support in mind.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-[212px] rounded-[16px]" style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
                  <CardContent className="flex flex-col items-center justify-start pt-6 pb-0 px-6 h-full">
                    <motion.h3 
                      style={{ 
                        fontFamily: 'var(--font-outfit)',
                        fontSize: 'var(--text-h4)',
                        fontWeight: 'var(--font-weight-bold)',
                        color: 'var(--foreground)',
                        lineHeight: '31.2px',
                        marginBottom: '8px',
                        textAlign: 'center'
                      }}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ 
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        delay: index * 0.1 + 0.3 
                      }}
                      viewport={{ once: true }}
                    >
                      {stat.title}
                    </motion.h3>
                    <p style={{ 
                      fontFamily: 'var(--font-outfit)',
                      fontSize: 'var(--text-base)',
                      fontWeight: 'var(--font-weight-regular)',
                      color: 'var(--foreground)',
                      lineHeight: '24px',
                      textAlign: 'center'
                    }}>
                      {Array.isArray(stat.description) ? (
                        <>
                          {stat.description[0]}
                          <br />
                          {stat.description[1]}
                          {stat.description[2] && (
                            <>
                              <br />
                              {stat.description[2]}
                            </>
                          )}
                        </>
                      ) : (
                        stat.description
                      )}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Everyone Wins Section */}
      <section 
        id="everyone-wins-section"
        className="py-16 bg-secondary/20" 
        aria-labelledby="everyone-wins-heading"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 id="everyone-wins-heading" className="mb-8">
              With PRIONET, Everyone Wins
            </h2>
            <div className="space-y-6">
              <motion.p
                className="text-foreground"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                When you need care, you can focus on getting better. Why worry about old bills? By choosing a practitioner who participates in PRIONET, you're choosing someone who believes in transparency, privacy, and dignity for every patient.
              </motion.p>
              <motion.p
                className="text-foreground"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                "Life happens", making paying medical bills sometimes difficult.
              </motion.p>
              <motion.p
                className="text-foreground"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                If you ever have an outstanding balance or are uninsured, PRIONET strengthens relationships and promotes fairness as patients and practitioners manage payment arrangements together.
              </motion.p>
              <motion.div
                className="pt-8 border-t border-border/50 mt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h3 className="mb-4">
                  PRIONET: A Quiet Way to Do the Right Thing
                </h3>
                <p className="text-muted-foreground">
                  No stress. No shame. Just compassionate care and a path forward.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Join Prionet Section */}
      <section 
        id="join-section"
        className="py-16" 
        aria-labelledby="join-heading"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 id="join-heading" className="mb-4">
              Join Prionet Today
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Become part of a network that prioritizes patient dignity and practice sustainability.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Button 
                asChild
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg min-h-[44px] min-w-[44px]"
              >
                <a 
                  href="https://www.prioritypaynet.org/join/join.cfm"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Join Priority Pay Network (opens in new tab)" 
                  className="text-[16px]"
                >
                  Join Prionet Today
                  <ArrowRightIcon className="ml-2 w-4 h-4" aria-hidden="true" />
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        id="contact-section"
        className="py-16 bg-secondary/20" 
        aria-labelledby="contact-heading"
      >
        <motion.div 
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 id="contact-heading" className="mb-4">Need Help? We're Here to Support.</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you're a health care practitioner looking to access our database or a patient 
            needing help in navigating, our support team is ready to assist.
          </p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Button 
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl transition-all duration-300 hover:scale-105 min-h-[44px] min-w-[44px]"
              aria-label="Call support at (702) 570-5200"
              onClick={() => window.location.href = 'tel:+17025705200'}
            >
              <span>(702) 570-5200</span>
            </Button>
            <Button 
              variant="outline"
              className="rounded-xl transition-all duration-300 hover:scale-105 min-h-[44px] min-w-[44px]"
              onClick={() => onNavigate('contact')}
              aria-label="Navigate to contact support page"
            >
              Contact Support
            </Button>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}, (prevProps, nextProps) => true); // Optimize by skipping re-renders since props rarely change
