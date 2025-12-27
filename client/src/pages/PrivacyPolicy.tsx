import { SEO } from "@/components/SEO";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  return (
    <>
      <SEO 
        title="Privacy Policy | Dekhe Trends"
        description="Privacy Policy for Dekhe Trends. Learn how we collect, use, and protect your personal information."
        canonical="https://dekhetrends.com/privacy-policy"
      />
      
      <div className="pt-24 pb-12 min-h-screen">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold font-display mb-6">Privacy Policy</h1>
            <p className="text-muted-foreground mb-8">Last Updated: December 20, 2025</p>

            <div className="prose prose-invert max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-bold font-display mb-4">1. Introduction</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Welcome to Dekhe Trends ("we," "our," or "us"). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website dekhetrends.com and use our services.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing or using our website, you agree to this Privacy Policy. If you do not agree with the terms of this Privacy Policy, please do not access the site.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-display mb-4">2. Information We Collect</h2>
                
                <h3 className="text-xl font-semibold mb-3">2.1 Personal Information</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We may collect personal information that you voluntarily provide to us when you:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Register for our services</li>
                  <li>Request a free audit</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Contact us through forms</li>
                  <li>Participate in surveys or promotions</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  This information may include:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Name and contact information (email, phone number)</li>
                  <li>Company name and job title</li>
                  <li>Business information and industry</li>
                  <li>Payment and billing information</li>
                  <li>Any other information you choose to provide</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6">2.2 Automatically Collected Information</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  When you visit our website, we automatically collect certain information about your device and browsing behavior:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>IP address and location data</li>
                  <li>Browser type and version</li>
                  <li>Device information (type, operating system)</li>
                  <li>Pages visited and time spent on pages</li>
                  <li>Referring website and search terms</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-display mb-4">3. How We Use Your Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use the information we collect for the following purposes:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li><strong>Service Delivery:</strong> To provide, maintain, and improve our services</li>
                  <li><strong>Communication:</strong> To respond to your inquiries and send you updates</li>
                  <li><strong>Marketing:</strong> To send you promotional materials (with your consent)</li>
                  <li><strong>Analytics:</strong> To analyze website usage and improve user experience</li>
                  <li><strong>Security:</strong> To protect against fraud and unauthorized access</li>
                  <li><strong>Legal Compliance:</strong> To comply with legal obligations and regulations</li>
                  <li><strong>Business Operations:</strong> To manage our business and client relationships</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-display mb-4">4. Cookies and Tracking Technologies</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use cookies and similar tracking technologies to enhance your experience on our website:
                </p>
                
                <h3 className="text-xl font-semibold mb-3">Types of Cookies We Use:</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li><strong>Essential Cookies:</strong> Required for website functionality</li>
                  <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site</li>
                  <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
                  <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                </ul>

                <p className="text-muted-foreground leading-relaxed">
                  You can control cookies through your browser settings. However, disabling cookies may affect the functionality of our website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-display mb-4">5. Third-Party Services</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We may use third-party services that collect, monitor, and analyze information:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li><strong>Google Analytics:</strong> Website analytics and reporting</li>
                  <li><strong>Google AdSense:</strong> Display advertising</li>
                  <li><strong>Payment Processors:</strong> Secure payment processing (Razorpay, Stripe)</li>
                  <li><strong>Email Services:</strong> Email delivery and marketing automation</li>
                  <li><strong>Social Media Platforms:</strong> Social sharing and engagement</li>
                  <li><strong>Cloud Services:</strong> Data storage and hosting</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  These third parties have their own privacy policies. We encourage you to review them.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-display mb-4">6. Google AdSense</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use Google AdSense to display advertisements on our website. Google uses cookies to serve ads based on your prior visits to our website or other websites. You may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Ads Settings</a>.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Third-party vendors, including Google, use cookies to serve ads based on your past visits to our website. Google's use of advertising cookies enables it and its partners to serve ads based on your visit to our site and/or other sites on the Internet.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-display mb-4">7. Data Security</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We implement appropriate technical and organizational security measures to protect your personal information:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>SSL/TLS encryption for data transmission</li>
                  <li>Secure servers and databases</li>
                  <li>Regular security audits and updates</li>
                  <li>Access controls and authentication</li>
                  <li>Employee training on data protection</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  However, no method of transmission over the Internet is 100% secure. We cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-display mb-4">8. Data Retention</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law. When we no longer need your information, we will securely delete or anonymize it.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-display mb-4">9. Your Rights (India & GDPR)</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Under Indian data protection laws and GDPR (if applicable), you have the following rights:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li><strong>Access:</strong> Request a copy of your personal data</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate data</li>
                  <li><strong>Deletion:</strong> Request deletion of your data ("right to be forgotten")</li>
                  <li><strong>Restriction:</strong> Request restriction of processing</li>
                  <li><strong>Portability:</strong> Request transfer of your data</li>
                  <li><strong>Objection:</strong> Object to processing of your data</li>
                  <li><strong>Withdraw Consent:</strong> Withdraw consent at any time</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  To exercise these rights, please contact us at privacy@dekhetrends.com
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-display mb-4">10. Children's Privacy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-display mb-4">11. International Data Transfers</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Your information may be transferred to and processed in countries other than India. We ensure that appropriate safeguards are in place to protect your data in accordance with this Privacy Policy and applicable laws.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-display mb-4">12. Changes to This Privacy Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. We encourage you to review this Privacy Policy periodically.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-display mb-4">13. Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="bg-card p-6 rounded-lg border border-accent/20">
                  <p className="text-muted-foreground mb-2"><strong>Dekhe Trends</strong></p>
                  <p className="text-muted-foreground mb-2">Email: dekhetrends@gmail.com</p>
                  <p className="text-muted-foreground mb-2">Phone: +91 80775 83921</p>
                  <p className="text-muted-foreground">Address: Bareilly, Uttar Pradesh, India</p>
                </div>
              </section>

              <section className="bg-primary/10 p-6 rounded-lg border border-primary/20 mt-8">
                <h3 className="text-xl font-bold mb-3">Consent</h3>
                <p className="text-muted-foreground leading-relaxed">
                  By using our website, you hereby consent to our Privacy Policy and agree to its terms.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

