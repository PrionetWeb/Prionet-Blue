import { ShieldCheckIcon, LockClosedIcon, DocumentTextIcon, UserGroupIcon, GlobeAltIcon, ClockIcon } from '@heroicons/react/24/outline';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';

export function PrivacyPolicyPage() {
  const lastUpdated = "November 11, 2025";

  return (
    <div className="min-h-screen pt-32 pb-16">
      {/* Hero Section */}
      <section className="py-12" style={{ backgroundColor: 'var(--secondary)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-6">
              <div 
                className="flex items-center justify-center w-16 h-16" 
                style={{ backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)', borderRadius: 'var(--radius)' }}
              >
                <ShieldCheckIcon className="w-10 h-10" />
              </div>
            </div>
            <h1 className="mb-4 text-[24px] sm:text-4xl lg:text-5xl">
              Privacy Policy & Legal Compliance
            </h1>
            <p style={{ color: 'var(--muted-foreground)' }}>
              Last Updated: {lastUpdated}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Introduction */}
          <Card className="mb-8" style={{ borderRadius: 'var(--radius)', backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
            <CardContent className="p-8">
              <h2 className="mb-4">Introduction</h2>
              <p style={{ color: 'var(--muted-foreground)', lineHeight: '1.8', marginBottom: '1rem' }}>
                Priority Pay Network (also known as PRIONET) is committed to protecting your privacy and ensuring the security 
                of your personal and protected health information (PHI). This Privacy Policy describes how we collect, use, disclose, 
                and safeguard your information in compliance with the Health Insurance Portability and Accountability Act (HIPAA), 
                the General Data Protection Regulation (GDPR), and all applicable U.S. federal and state privacy laws.
              </p>
              <p style={{ color: 'var(--muted-foreground)', lineHeight: '1.8' }}>
                This policy applies to all users of our platform, including healthcare practitioners, patients, and website visitors.
              </p>
            </CardContent>
          </Card>

          {/* HIPAA Compliance */}
          <Card className="mb-8" style={{ borderRadius: 'var(--radius)', backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <LockClosedIcon className="w-6 h-6 mr-3" style={{ color: 'var(--primary)' }} />
                <h2>HIPAA Compliance</h2>
              </div>
              
              <h3 className="mb-3">Covered Entity Status</h3>
              <p style={{ color: 'var(--muted-foreground)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                Priority Pay Network operates as a HIPAA-covered entity and Business Associate. We handle Protected Health 
                Information (PHI) in strict accordance with HIPAA Privacy Rule (45 CFR Part 160 and Part 164, Subparts A and E) 
                and Security Rule (45 CFR Part 164, Subpart C) requirements.
              </p>

              <h3 className="mb-3">Information We Collect Under HIPAA</h3>
              <ul className="space-y-2 mb-4" style={{ color: 'var(--muted-foreground)', lineHeight: '1.8' }}>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong>Patient Identifiers:</strong> Name, date of birth, address, phone number, email address, and Social Security Number (only when necessary for balance verification)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong>Medical Balance Information:</strong> Outstanding balance amounts, creditor information, balance age, and payment history</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong>Health Care Practitioner Information:</strong> Practitioner name, NPI number, practice details, and credentials</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong>Transaction Records:</strong> Query logs, payment records, and dispute documentation</span>
                </li>
              </ul>

              <h3 className="mb-3">Minimum Necessary Standard</h3>
              <p style={{ color: 'var(--muted-foreground)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                Health care practitioners accessing our database receive only the minimum necessary information: a simple indicator 
                of whether a patient has outstanding medical balance over 90 days old. Specific amounts, creditor names, and detailed 
                balance information are never disclosed to practitioners without explicit patient authorization.
              </p>

              <h3 className="mb-3">Patient Rights Under HIPAA</h3>
              <ul className="space-y-2" style={{ color: 'var(--muted-foreground)', lineHeight: '1.8' }}>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong>Right to Access:</strong> Request and obtain copies of your PHI within 30 days</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong>Right to Amend:</strong> Request corrections to inaccurate or incomplete PHI</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong>Right to an Accounting:</strong> Request a list of disclosures of your PHI</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong>Right to Request Restrictions:</strong> Request limits on how we use and disclose your PHI</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong>Right to Confidential Communications:</strong> Request communications through alternative means</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong>Right to Notification of Breach:</strong> Be notified if your PHI is breached</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* GDPR Compliance */}
          <Card className="mb-8" style={{ borderRadius: 'var(--radius)', backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <GlobeAltIcon className="w-6 h-6 mr-3" style={{ color: 'var(--primary)' }} />
                <h2>GDPR Compliance (European Users)</h2>
              </div>
              
              <p style={{ color: 'var(--muted-foreground)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                For users located in the European Economic Area (EEA), United Kingdom, or Switzerland, we comply with the 
                General Data Protection Regulation (GDPR) and related data protection laws.
              </p>

              <h3 className="mb-3">Legal Basis for Processing</h3>
              <ul className="space-y-2 mb-4" style={{ color: 'var(--muted-foreground)', lineHeight: '1.8' }}>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong>Consent:</strong> You have given explicit consent for processing your personal data</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong>Contractual Necessity:</strong> Processing is necessary to fulfill our contractual obligations</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong>Legal Obligation:</strong> Processing is required by law (e.g., debt collection regulations)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong>Legitimate Interests:</strong> Processing is necessary for our legitimate business interests</span>
                </li>
              </ul>

              <h3 className="mb-3">GDPR Rights</h3>
              <ul className="space-y-2 mb-4" style={{ color: 'var(--muted-foreground)', lineHeight: '1.8' }}>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong>Right to Access:</strong> Obtain confirmation and copies of your personal data</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong>Right to Rectification:</strong> Correct inaccurate or incomplete data</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong>Right to Erasure ("Right to be Forgotten"):</strong> Request deletion of your data under certain circumstances</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong>Right to Restriction:</strong> Limit how we process your data</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong>Right to Data Portability:</strong> Receive your data in a structured, machine-readable format</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong>Right to Object:</strong> Object to processing based on legitimate interests</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong>Right to Withdraw Consent:</strong> Withdraw consent at any time</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong>Right to Lodge a Complaint:</strong> File a complaint with a supervisory authority</span>
                </li>
              </ul>

              <h3 className="mb-3">International Data Transfers</h3>
              <p style={{ color: 'var(--muted-foreground)', lineHeight: '1.8' }}>
                When transferring data outside the EEA, we use Standard Contractual Clauses (SCCs) approved by the European 
                Commission and implement appropriate safeguards to ensure your data remains protected.
              </p>
            </CardContent>
          </Card>

          {/* U.S. Federal & State Compliance */}
          <Card className="mb-8" style={{ borderRadius: 'var(--radius)', backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <DocumentTextIcon className="w-6 h-6 mr-3" style={{ color: 'var(--primary)' }} />
                <h2>U.S. Federal & State Privacy Laws</h2>
              </div>

              <h3 className="mb-3">Fair Debt Collection Practices Act (FDCPA)</h3>
              <p style={{ color: 'var(--muted-foreground)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                We comply with the FDCPA (15 U.S.C. §1692 et seq.) and do not engage in abusive, deceptive, or unfair debt 
                collection practices. We respect patient rights and provide clear dispute resolution processes.
              </p>

              <h3 className="mb-3">Fair Credit Reporting Act (FCRA)</h3>
              <p style={{ color: 'var(--muted-foreground)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                Our platform complies with FCRA requirements (15 U.S.C. §1681) regarding the accuracy, fairness, and privacy 
                of information in consumer reports.
              </p>

              <h3 className="mb-3">State Privacy Laws</h3>
              <p style={{ color: 'var(--muted-foreground)', lineHeight: '1.8', marginBottom: '1rem' }}>
                We comply with applicable state privacy laws, including but not limited to:
              </p>
              <ul className="space-y-2 mb-4" style={{ color: 'var(--muted-foreground)', lineHeight: '1.8' }}>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong>California Consumer Privacy Act (CCPA) / California Privacy Rights Act (CPRA):</strong> California residents have specific rights regarding their personal information</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong>Virginia Consumer Data Protection Act (VCDPA):</strong> Virginia residents have rights to access, correct, delete, and opt-out</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong>Colorado Privacy Act (CPA):</strong> Colorado residents have rights similar to CCPA/CPRA</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong>Connecticut Data Privacy Act (CTDPA):</strong> Connecticut residents have data privacy rights</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong>Utah Consumer Privacy Act (UCPA):</strong> Utah residents have data privacy rights</span>
                </li>
              </ul>

              <h3 className="mb-3">California Residents - CCPA/CPRA Rights</h3>
              <ul className="space-y-2" style={{ color: 'var(--muted-foreground)', lineHeight: '1.8' }}>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Right to know what personal information is collected, used, shared, or sold</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Right to delete personal information held by businesses</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Right to opt-out of sale or sharing of personal information</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Right to correct inaccurate personal information</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Right to limit use and disclosure of sensitive personal information</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Right to non-discrimination for exercising CCPA rights</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Security & Compliance */}
          <Card className="mb-8" style={{ borderRadius: 'var(--radius)', backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
            <CardContent className="p-8">
              <h2 className="mb-4">Security & Compliance Measures</h2>
              <p style={{ color: 'var(--muted-foreground)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                Priority Pay Network maintains the highest standards of security and compliance 
                to protect all users and data within the platform.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 flex-shrink-0 bg-primary/10 rounded-[16px]">
                    <LockClosedIcon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-2">Data Encryption</h3>
                    <p style={{ color: 'var(--muted-foreground)', fontSize: 'var(--text-sm)', lineHeight: '1.6' }}>
                      All data is encrypted in transit and at rest using industry-standard protocols.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 flex-shrink-0 bg-primary/10 rounded-[16px]">
                    <DocumentTextIcon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-2">Access Logging</h3>
                    <p style={{ color: 'var(--muted-foreground)', fontSize: 'var(--text-sm)', lineHeight: '1.6' }}>
                      Comprehensive logging of all system access and activities for security monitoring.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 flex-shrink-0 bg-primary/10 rounded-[16px]">
                    <ShieldCheckIcon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-2">HIPAA Compliance</h3>
                    <p style={{ color: 'var(--muted-foreground)', fontSize: 'var(--text-sm)', lineHeight: '1.6' }}>
                      Full compliance with health care privacy regulations and data protection requirements.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 flex-shrink-0 bg-primary/10 rounded-[16px]">
                    <GlobeAltIcon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-2">Privacy Protection</h3>
                    <p style={{ color: 'var(--muted-foreground)', fontSize: 'var(--text-sm)', lineHeight: '1.6' }}>
                      Patient data remains within the network and is never shared with external parties.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Usage and Sharing */}
          <Card className="mb-8" style={{ borderRadius: 'var(--radius)', backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <UserGroupIcon className="w-6 h-6 mr-3" style={{ color: 'var(--primary)' }} />
                <h2>How We Use and Share Information</h2>
              </div>

              <h3 className="mb-3">Information Use</h3>
              <p style={{ color: 'var(--muted-foreground)', lineHeight: '1.8', marginBottom: '1rem' }}>
                We use your information only for the following purposes:
              </p>
              <ul className="space-y-2 mb-4" style={{ color: 'var(--muted-foreground)', lineHeight: '1.8' }}>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Providing balance verification services to health care practitioners</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Enabling patient access to balance information and payment portals</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Processing payments and managing disputes</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Maintaining platform security and preventing fraud</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Complying with legal obligations</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Improving our services (using de-identified, aggregated data only)</span>
                </li>
              </ul>

              <h3 className="mb-3">Information Sharing</h3>
              <p style={{ color: 'var(--muted-foreground)', lineHeight: '1.8', marginBottom: '1rem' }}>
                <strong>We do NOT sell, rent, or share your personal information with third parties for marketing purposes.</strong>
              </p>
              <p style={{ color: 'var(--muted-foreground)', lineHeight: '1.8', marginBottom: '1rem' }}>
                We may share information only in the following limited circumstances:
              </p>
              <ul className="space-y-2" style={{ color: 'var(--muted-foreground)', lineHeight: '1.8' }}>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong>With Healthcare Practitioners:</strong> Limited debt existence information (not amounts or details) when queried</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong>With Service Providers:</strong> Vendors who support our operations under strict confidentiality agreements and BAAs</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong>For Legal Compliance:</strong> When required by law, court order, or government request</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong>With Your Consent:</strong> When you explicitly authorize disclosure</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets (with notification)</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Data Retention */}
          <Card className="mb-8" style={{ borderRadius: 'var(--radius)', backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <ClockIcon className="w-6 h-6 mr-3" style={{ color: 'var(--primary)' }} />
                <h2>Data Retention</h2>
              </div>

              <p style={{ color: 'var(--muted-foreground)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                We retain your information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, 
                unless a longer retention period is required or permitted by law.
              </p>

              <ul className="space-y-2" style={{ color: 'var(--muted-foreground)', lineHeight: '1.8' }}>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong>Active Accounts:</strong> Data retained while account is active and for reasonable period after closure</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong>Transaction Records:</strong> Retained for 7 years in compliance with HIPAA and financial regulations</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong>Audit Logs:</strong> Retained for 6 years as required by HIPAA</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong>Legal Holds:</strong> Data preserved when subject to legal proceedings or investigations</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Cookies and Tracking */}
          <Card className="mb-8" style={{ borderRadius: 'var(--radius)', backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
            <CardContent className="p-8">
              <h2 className="mb-4">Cookies and Tracking Technologies</h2>

              <p style={{ color: 'var(--muted-foreground)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                We use cookies and similar tracking technologies to enhance your experience, analyze usage, and maintain security.
              </p>

              <h3 className="mb-3">Types of Cookies We Use</h3>
              <ul className="space-y-2 mb-4" style={{ color: 'var(--muted-foreground)', lineHeight: '1.8' }}>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong>Essential Cookies:</strong> Required for platform functionality and security (cannot be disabled)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong>Functional Cookies:</strong> Remember your preferences and settings</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong>Analytics Cookies:</strong> Help us understand how users interact with our platform</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong>Security Cookies:</strong> Detect and prevent fraudulent activity</span>
                </li>
              </ul>

              <p style={{ color: 'var(--muted-foreground)', lineHeight: '1.8' }}>
                You can control cookies through your browser settings. Note that disabling essential cookies may affect platform functionality.
              </p>
            </CardContent>
          </Card>

          {/* Data Analytics & Monitoring */}
          <Card className="mb-8" style={{ borderRadius: 'var(--radius)', backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
            <CardContent className="p-8">
              <h2 className="mb-4">Data Analytics & Monitoring</h2>
              <p style={{ color: 'var(--muted-foreground)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                Priority Pay Network collects limited analytics data for internal system monitoring and security purposes:
              </p>
              <ul className="space-y-2 mb-4" style={{ color: 'var(--muted-foreground)', lineHeight: '1.8' }}>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Login times and session duration</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Device type and browser information</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Search frequency and patterns (no patient data)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>System performance metrics</span>
                </li>
              </ul>
              <p style={{ color: 'var(--muted-foreground)', lineHeight: '1.8' }}>
                This data is used exclusively for internal operations and is never shared with third parties 
                or used for any purpose beyond system security and improvement.
              </p>
            </CardContent>
          </Card>

          {/* Children's Privacy */}
          <Card className="mb-8" style={{ borderRadius: 'var(--radius)', backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
            <CardContent className="p-8">
              <h2 className="mb-4">Children's Privacy</h2>
              <p style={{ color: 'var(--muted-foreground)', lineHeight: '1.8' }}>
                Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal 
                information from children. If we learn we have collected information from a child without parental consent, 
                we will delete that information immediately. Parents or guardians who believe we have collected information 
                from a child should contact us at privacy@prioritypaynetwork.com.
              </p>
            </CardContent>
          </Card>

          {/* Breach Notification */}
          <Card className="mb-8" style={{ borderRadius: 'var(--radius)', backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
            <CardContent className="p-8">
              <h2 className="mb-4">Breach Notification</h2>
              <p style={{ color: 'var(--muted-foreground)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                In the event of a data breach affecting your PHI or personal information, we will:
              </p>
              <ul className="space-y-2" style={{ color: 'var(--muted-foreground)', lineHeight: '1.8' }}>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Notify affected individuals without unreasonable delay (within 60 days for HIPAA breaches)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Notify the Department of Health and Human Services (HHS) and, if applicable, media outlets</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">���</span>
                  <span>Comply with all applicable state breach notification laws</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>For GDPR-covered individuals, notify supervisory authorities within 72 hours when required</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Provide information about the breach, potential harm, and steps being taken to address it</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Security Emergency Contact */}
          <Card className="mb-8" style={{ borderRadius: 'var(--radius)', backgroundColor: 'hsl(var(--destructive) / 0.05)', border: '1px solid hsl(var(--destructive) / 0.2)' }}>
            <CardContent className="p-8">
              <div className="text-center">
                <ShieldCheckIcon className="w-12 h-12 mx-auto mb-4" style={{ color: 'var(--destructive)' }} />
                <h3 className="mb-4">Report Security Issues or Data Breach</h3>
                <p style={{ color: 'var(--muted-foreground)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                  If you suspect a security issue, data breach, or unauthorized access to patient information, 
                  contact us immediately:
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    variant="destructive" 
                    style={{ borderRadius: 'var(--radius)' }}
                    asChild
                  >
                    <a href="tel:+17025705200">
                      Emergency: (702) 570-5200
                    </a>
                  </Button>
                  <Button 
                    asChild
                    variant="outline" 
                    style={{ borderRadius: 'var(--radius)' }}
                  >
                    <a 
                      href="mailto:security@prionetprovider.com" 
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Email security team"
                    >
                      security@prionetprovider.com
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Your Rights and Choices */}
          <Card className="mb-8" style={{ borderRadius: 'var(--radius)', backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
            <CardContent className="p-8">
              <h2 className="mb-4">Exercising Your Rights</h2>
              <p style={{ color: 'var(--muted-foreground)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                To exercise any of your privacy rights described in this policy:
              </p>
              <ul className="space-y-2 mb-4" style={{ color: 'var(--muted-foreground)', lineHeight: '1.8' }}>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong>Email:</strong> privacy@prionetprovider.com</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong>Phone:</strong> (702) 570-5200</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong>Patient Portal:</strong> Access your account settings to manage preferences</span>
                </li>
              </ul>

              <p style={{ color: 'var(--muted-foreground)', lineHeight: '1.8', marginBottom: '1rem' }}>
                We will respond to your request within:
              </p>
              <ul className="space-y-2" style={{ color: 'var(--muted-foreground)', lineHeight: '1.8' }}>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>30 days for HIPAA requests (with possible 30-day extension)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>30 days for GDPR requests (with possible 60-day extension for complex requests)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>45 days for CCPA/CPRA requests (with possible 45-day extension)</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Changes to Privacy Policy */}
          <Card className="mb-8" style={{ borderRadius: 'var(--radius)', backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
            <CardContent className="p-8">
              <h2 className="mb-4">Changes to This Privacy Policy</h2>
              <p style={{ color: 'var(--muted-foreground)', lineHeight: '1.8' }}>
                We may update this Privacy Policy periodically to reflect changes in our practices, technology, legal requirements, 
                or other factors. We will notify you of material changes by:
              </p>
              <ul className="space-y-2 mt-3 mb-3" style={{ color: 'var(--muted-foreground)', lineHeight: '1.8' }}>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Posting a notice on our website</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Sending an email to registered users</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Updating the "Last Updated" date at the top of this policy</span>
                </li>
              </ul>
              <p style={{ color: 'var(--muted-foreground)', lineHeight: '1.8' }}>
                Your continued use of our services after notification constitutes acceptance of the updated policy.
              </p>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card style={{ borderRadius: 'var(--radius)', backgroundColor: 'var(--primary)', border: 'none' }}>
            <CardContent className="p-8">
              <h2 className="mb-4" style={{ color: 'var(--primary-foreground)' }}>Contact Us</h2>
              <p style={{ color: 'var(--primary-foreground)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                If you have questions or concerns about this Privacy Policy or our privacy practices, please contact:
              </p>
              <div style={{ color: 'var(--primary-foreground)', lineHeight: '1.8' }}>
                <p><strong>Priority Pay Network</strong></p>
                <p>Privacy Officer</p>
                <p>Email: <a href="mailto:privacy@prionetprovider.com" target="_blank" rel="noopener noreferrer" className="text-[var(--brand-blue)] hover:text-[var(--brand-teal)] transition-colors underline">privacy@prionetprovider.com</a></p>
                <p>Phone: (702) 570-5200</p>
              </div>
              <div className="mt-6 pt-6" style={{ borderTop: '1px solid rgba(255,255,255,0.2)' }}>
                <p style={{ color: 'var(--primary-foreground)', lineHeight: '1.8' }}>
                  <strong>For HIPAA-related complaints:</strong><br />
                  You have the right to file a complaint with the U.S. Department of Health and Human Services 
                  Office for Civil Rights if you believe your privacy rights have been violated.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}