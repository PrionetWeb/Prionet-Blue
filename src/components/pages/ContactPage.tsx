import { useState } from 'react';
import { EnvelopeIcon, PhoneIcon, MapPinIcon, ClockIcon, PaperAirplaneIcon, ShieldCheckIcon, UsersIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Alert, AlertDescription } from '../ui/alert';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    organization: '',
    phone: '',
    userType: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for contacting Priority Pay Network. Our support team will respond within 24 hours.');
  };

  const contactInfo = [
    {
      icon: <PhoneIcon className="w-6 h-6 text-primary" />,
      title: "Support Hotline",
      content: "(702) 570-5200",
      description: "Available Monday-Friday, 8 AM - 6 PM PST"
    },
    {
      icon: <EnvelopeIcon className="w-6 h-6 text-primary" />,
      title: "Email Support",
      content: "support@prionetprovider.com",
      description: "Response within 24 hours"
    },
    {
      icon: <ClockIcon className="w-6 h-6 text-primary" />,
      title: "Business Hours",
      content: "Monday - Friday",
      description: "8:00 AM - 6:00 PM PST"
    },
    {
      icon: <ShieldCheckIcon className="w-6 h-6 text-primary" />,
      title: "Security Issues",
      content: "security@prionetprovider.com",
      description: "Report security concerns immediately"
    }
  ];

  const supportTypes = [
    {
      icon: <MagnifyingGlassIcon className="w-8 h-8 text-primary" />,
      title: "Practitioner Support",
      description: "Help with portal access, patient searches, and technical issues for health care practitioners.",
      services: ["Portal login assistance", "Patient search help", "Technical troubleshooting", "Account setup"]
    },
    {
      icon: <UsersIcon className="w-8 h-8 text-primary" />,
      title: "Patient Support", 
      description: "Assistance for patients managing their medical balances through our secure portal.",
      services: ["Balance inquiry assistance", "Dispute resolution help", "Payment processing support", "Account access issues"]
    },
    {
      icon: <ShieldCheckIcon className="w-8 h-8 text-primary" />,
      title: "Privacy & Security",
      description: "Questions about data protection, privacy policies, and security measures.",
      services: ["Privacy policy questions", "Data security inquiries", "HIPAA compliance", "Security incident reporting"]
    }
  ];

  const faqs = [
    {
      question: "How do I access the Practitioner Portal?",
      answer: "Health care practitioners need authorized credentials to access the portal. Contact our support team at (702) 570-5200 to request access or if you have login issues."
    },
    {
      question: "What information can practitioners see about patients?",
      answer: "Practitioners can only see whether a patient has outstanding medical balances over 90 days old. No amounts, creditor information, or other sensitive details are visible to maintain patient privacy."
    },
    {
      question: "How can patients access their balance information?",
      answer: "Patients can access their secure portal to view complete balance details, dispute charges, and make payments. Contact support for help with patient portal access."
    },
    {
      question: "Is Priority Pay Network HIPAA compliant?",
      answer: "Yes, Priority Pay Network is fully HIPAA compliant with enterprise-grade security, data encryption, and strict privacy controls to protect all patient information."
    },
    {
      question: "What data does Priority Pay Network collect?",
      answer: "We collect limited analytics data like login times and device information for security monitoring. This data is used internally only and never shared with third parties."
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-16">
      {/* Hero Section */}
      <section className="py-12 px-[0px] py-[24px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Grid - Text Left, Image Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 items-center">
            {/* Left Column - Text Content */}
            <div>
              <h1 className="mb-6 text-[24px] sm:text-4xl lg:text-5xl">Support & Contact</h1>
              <p className="text-muted-foreground mb-8">
                Priority Pay Network provides comprehensive support for health care practitioners and patients. 
                Whether you need help with portal access, or have questions about general use.
              </p>

              <Alert className="rounded-2xl border-primary/20 bg-primary/5">
                <PhoneIcon className="h-4 w-4 text-primary" />
                <AlertDescription className="text-foreground">
                  Call (702) 570-5200 for assistance with portal access, or urgent technical issues.
                </AlertDescription>
              </Alert>
            </div>

            {/* Right Column - Image */}
            <div className="rounded-2xl overflow-hidden">
              <ImageWithFallback
                src="https://images.pexels.com/photos/7659568/pexels-photo-7659568.jpeg"
                alt="Health care support team assisting patients"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="rounded-2xl p-[25px]">
                <CardContent className="pt-0 flex flex-col items-center gap-[11px] px-[8px] py-[24px]">
                  <div className="size-[48px] bg-primary/10 rounded-[16px] flex items-center justify-center">
                    {info.icon}
                  </div>
                  <h4 className="text-center">{info.title}</h4>
                  {info.content.includes('@') ? (
                    <a 
                      href={`mailto:${info.content}`}
                      className="text-center text-foreground underline cursor-pointer hover:text-primary transition-colors"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-foreground text-center">{info.content}</p>
                  )}
                  {info.content.includes('@') ? (
                    <p className="text-muted-foreground text-center">
                      {info.title === "Security Issues" ? "Report security concerns immediately" : "Email us anytime, and we’ll be in touch as soon as possible."}
                    </p>
                  ) : (
                    info.title === "Business Hours" && (
                      <p className="text-muted-foreground text-center">{info.description}</p>
                    )
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support Types */}
      <section className="py-16 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">How We Can Help</h2>
            <p className="text-muted-foreground">
              Specialized support for different user types and needs within Priority Pay Network.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportTypes.map((type, index) => (
              <Card key={index} className="rounded-2xl">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      {type.icon}
                    </div>
                  </div>
                  <CardTitle className="text-center">{type.title}</CardTitle>
                  <p className="text-muted-foreground text-center">{type.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {type.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="flex items-start text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        {service === "Dispute resolution help" ? "Dispute resolution navigation" : service}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-secondary/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 items-center text-center">
            <div className="flex flex-col gap-4 w-full">
              <h2>Frequently Asked Questions</h2>
              <p className="text-muted-foreground">
                Have questions or concerns? Check out our FAQ page below.
              </p>
            </div>
            <div className="mt-4">
              <Button 
                asChild 
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-2xl px-6 py-3"
              >
                <a 
                  href="https://www.prioritypaynet.org/faq.cfm" 
                  aria-label="Go to FAQ page"
                  target="_blank"
                  rel="noopener noreferrer" className="text-[16px]"
                >
                  FAQ Page
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Office Information */}
      <section className="py-16 bg-secondary/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-4">Contact Prionet</h2>
          <div className="flex items-center justify-center space-x-2 text-muted-foreground mb-4">
            <MapPinIcon className="w-4 h-4" aria-hidden="true" />
            <span>Serving Health Care Practitioners Nationwide</span>
          </div>
          <p className="text-muted-foreground mb-8">
            Priority Pay Network operates as a secure online platform serving health care practitioners 
            and patients across the United States. Our support team is available to assist with 
            any questions or technical issues.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl">
              (702) 570-5200
            </Button>
            <Button 
              asChild
              variant="outline" 
              className="rounded-xl"
            >
              <a 
                href="mailto:support@prionetprovider.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email support team" className="text-[16px]"
              >
                support@prionetprovider.com
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}