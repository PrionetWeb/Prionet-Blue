import {
  ShieldCheckIcon,
  UsersIcon,
  CircleStackIcon,
  LockClosedIcon,
  ChartBarIcon,
  TrophyIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import { motion } from "motion/react";
import { useRef } from "react";
import { Card, CardContent } from "../ui/card";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function AboutPage() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = 400; // Approximate card width
      const targetScroll = container.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
      
      container.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  const values = [
    {
      icon: (
        <ShieldCheckIcon className="w-8 h-8 text-primary" />
      ),
      title: "Privacy First",
      description:
        "Patient information remains completely private. Practitioners never see amounts owed or sensitive details, only balance existence.",
    },
    {
      icon: <LockClosedIcon className="w-8 h-8 text-primary" />,
      title: "Data Security",
      description:
        "Enterprise-grade security with HIPAA compliance ensures all patient and practitioner data is protected at the highest levels.",
    },
    {
      icon: <UsersIcon className="w-8 h-8 text-primary" />,
      title: "Clinic Support",
      description:
        "Helping health care practitioners efficiently identify patients with outstanding balances while maintaining ethical practices.",
    },
    {
      icon: <ChartBarIcon className="w-8 h-8 text-primary" />,
      title: "Focused Solutions",
      description:
        "To promote access to health care by easing systemic increases in health care costs due to unpaid balances",
    },
  ];

  const features = [
    {
      title: "90+ Day Focus",
      description:
        "Our platform exclusively manages medical balances that are 90 days or older, ensuring we're only dealing with appropriate collection timeframes.",
      icon: "⏰",
    },
    {
      title: "Privacy Protection",
      description:
        "Health care practitioners can only see whether a patient has outstanding balances, never the specific amounts or details.",
      icon: "🔒",
    },
    {
      title: "Patient Control",
      description:
        "Patients have full access to their balance details through a secure private portal and can dispute or resolve issues directly.",
      icon: "👤",
    },
    {
      title: "Secure Access",
      description:
        "PRIONET is designed for all patient and clinic scenarios, including insured, underinsured, and uninsured, to keep people healthy and clinics open.",
      icon: "🤝",
    },
  ];

  const testimonials = [
    {
      text: "Where has this great concept been all my adult life. I love the idea of an entity having compassion when it comes to medical bills. Meaning, life happens and I would either forget to pay or just cannot pay my medical bills. Then they pile up and get out of hand. Knowing there's a possibility for help paying my medical bills is a huge relief. The payment plan or the Prionet Patient Fund is a lifesaver.",
      author: "C. Johnson",
    },
    {
      text: "One of the reasons I am no longer in private practice is because of the challenges of collecting on unpaid medical bills. What I like about Prionet is that it maximizes accountability in a community of both doctors and patients. In the end, physicians and dentists are just small to midsize business owners or employees of small to midsize business owners. They need their cash flow. Thank you for finding a constructive way to protect it.",
      author: "Darryl F.",
    },
    {
      text: (
        <>
          PRIONET is situated to support all those involved in healthcare; from the patient, to the provider and the health insurance company!
          <br />
          <br />
          It will provide a stable, trustworthy patient provider relationship for the necessary care that’s needed and also keep provider network stabilized which is a benefit the health plan insurance companies.
          <br />
          <br />
          Very excited for the launch of PRIONET!
        </>
      ),
      author: "N. Darnell",
    },
    {
      text: "As a professional biller and coder, I believe Prionet is a valuable platform for both healthcare providers and patients. It enables providers to devote more time to patient care by reducing the administrative burden of collecting outstanding balances during office visits. For patients, it offers a safe and secure payment solution that promotes peace of mind and helps prevent concerns about potential collection actions. I highly recommend this platform for both providers and patients as an effective solution for resolving outstanding account balances.",
      author: "Robin, CPC",
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-16">
      {/* Hero Section */}
      <section className="py-12 px-[0px] py-[24px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.h1
                className="mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                About Priority Pay Network
              </motion.h1>
              <motion.p
                className="text-muted-foreground mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Priority Pay Network (PPN) is a secure online
                platform designed to help healthcare
                practitioners and patients manage outstanding
                medical payments that are over 90 days old. We
                bridge the gap between practitioners seeking
                debt information and patients managing their
                health care payment obligations while maintaining the
                highest privacy standards.
              </motion.p>
              <motion.p
                className="text-muted-foreground mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Our system allows health care practitioners to
                quickly check if a patient has unpaid medical
                bills without exposing sensitive information
                like amounts owed or creditor details.
                Meanwhile, patients have secure access to their
                complete balance information through a private
                portal where they can view details, dispute
                charges, and make payments directly.
              </motion.p>
              <motion.p
                className="text-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Founded on principles of privacy, security, and
                ethical balance management, Priority Pay Network
                serves health care practitioners while protecting
                patient rights and maintaining HIPAA compliance
                throughout all operations.
              </motion.p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <ImageWithFallback
                src="https://images.pexels.com/photos/4266944/pexels-photo-4266944.jpeg"
                alt="Doctor consulting with multicultural patients"
                className="w-full aspect-square object-cover rounded-2xl shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-secondary/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6">Our Mission</h2>
            <p className="text-muted-foreground mb-8">
              PPN's mission is to securely connect practitioners
              and patients with the information they need to
              manage and resolve medical payments over 90 days
              old—promoting clarity, accountability, and trust
              throughout the health care financial journey.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 rounded-2xl">
              <CardContent className="pt-6">
                <p className="text-foreground">
                  The Prionet Provider Network (PPN) is built on
                  ethical debt management. We empower practitioners and
                  patients to collaboratively reduce outstanding
                  medical balances, to ensure continued access
                  to healthcare. PPN promotes fairness by
                  enabling patients to challenge or dispute
                  balances, fostering a transparent,
                  accountable, and HIPAA-compliant environment.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4">What Makes Us Different</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Priority Pay Network is specifically designed to
              facilitate health care balance management between
              patients and practitioners, enabling them to agree on
              mutual payment arrangements through fair,
              friendly, and bi-directional accountability.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
              >
                <Card className="p-6 rounded-2xl h-full">
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="text-4xl">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="mb-3">
                          {feature.title}
                        </h4>
                        <p className="text-muted-foreground">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4">Our Core Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These fundamental principles guide every decision
              we make and every feature we develop.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
              >
                <Card className="text-center p-6 rounded-2xl h-full">
                  <CardContent className="pt-6">
                    <div className="flex justify-center mb-4">
                      {value.icon}
                    </div>
                    <h4 className="mb-3">{value.title}</h4>
                    <p className="text-muted-foreground">
                      {value.description}.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Protect Privacy */}
      <section className="py-16 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4">
              Privacy Protection at Every Level
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Priority Pay Network implements multiple layers of
              privacy protection to ensure patient
              information remains secure while enabling
              efficient balance management.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 rounded-2xl h-full">
                <CardContent className="pt-6">
                  <h3 className="mb-4 flex items-center">
                    <CircleStackIcon className="w-6 h-6 text-primary mr-2" />
                    Practitioner Access Level
                  </h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>
                      • Can only see if balance exists (yes/no)
                    </li>
                    <li>• Cannot view balance amounts</li>
                    <li>• Cannot see creditor information</li>
                    <li>
                      • Cannot access patient contact details
                    </li>
                    <li>
                      • All searches are logged and monitored
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 rounded-2xl h-full">
                <CardContent className="pt-6">
                  <h3 className="mb-4 flex items-center">
                    <UsersIcon className="w-6 h-6 text-primary mr-2" />
                    Patient Portal Access
                  </h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>
                      • Full access to their balance details
                    </li>
                    <li>• Ability to dispute charges</li>
                    <li>• Direct payment to practitioners</li>
                    <li>
                      • Complete control over information
                      sharing
                    </li>
                    <li>
                      • Secure login with activity monitoring
                    </li>
                    <li>• Multi-factor authentication login</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4">Our Impact</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              How trust is taking shape in healthcare. What our community is saying.
            </p>
          </motion.div>
          
          <div className="relative group">
            {/* Left Button - Desktop */}
            <button 
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 -ml-5 z-10 hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-background border shadow-md hover:bg-muted transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeftIcon className="w-6 h-6 text-foreground" />
            </button>

            {/* Scroll Container */}
            <div
              ref={scrollContainerRef}
              className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-4 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0 [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]"
              style={{ 
                scrollbarWidth: 'none', 
                msOverflowStyle: 'none',
                WebkitOverflowScrolling: 'touch'
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-[300px] sm:w-[350px] md:w-[450px] flex-shrink-0 snap-center">
                  <Card className="p-6 rounded-2xl h-full flex flex-col justify-between border-border shadow-sm hover:shadow-md transition-shadow bg-card">
                    <CardContent className="pt-0 px-0 pb-0 flex flex-col h-full">
                      <div className="text-base leading-relaxed text-muted-foreground mb-6 flex-grow">
                        {testimonial.text}
                      </div>
                      <div className="mt-auto">
                        <span className="text-primary mr-1 font-bold">-</span>
                        <span className="text-primary font-bold">
                          {testimonial.author}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>

            {/* Right Button - Desktop */}
            <button 
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 -mr-5 z-10 hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-background border shadow-md hover:bg-muted transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRightIcon className="w-6 h-6 text-foreground" />
            </button>
          </div>
        </div>
      </section>

      {/* Compliance & Security */}
      <section className="py-16 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4">Compliance & Security</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Compliance and Security Powered by{" "}
              <a 
                href="https://vandersoncybergroup.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Vanderson Cyber Group
              </a>
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}