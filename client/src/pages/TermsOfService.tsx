import { SEO } from "@/components/SEO";
import { motion } from "framer-motion";

export default function TermsOfService() {
  return (
    <>
      <SEO 
        title="Terms of Service | Dekhe Trends"
        description="Terms of Service for Dekhe Trends. Read our terms and conditions for using our website and services."
        canonical="https://dekhetrends.com/terms-of-service"
      />
      
      <div className="pt-24 pb-12 min-h-screen">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold font-display mb-6">Terms of Service</h1>
            <p className="text-muted-foreground mb-8">Last Updated: December 20, 2025</p>

            <div className="prose prose-invert max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-bold font-display mb-4">1. Agreement to Terms</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  These Terms of Service ("Terms") govern your access to and use of the Dekhe Trends website (dekhetrends.com) and services. By accessing or using our website, you agree to be bound by these Terms and our Privacy Policy.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  If you do not agree to these Terms, you may not access or use our services. We reserve the right to modify these Terms at any time.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-display mb-4">2. Services Description</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Dekhe Trends provides market intelligence, trend analysis, competitor research, and strategic consulting services to businesses. Our services include but are not limited to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Trend Reporting and Analysis</li>
                  <li>Competitor Intelligence</li>
                  <li>Market Research</li>
                  <li>Brand Strategy Consulting</li>
                  <li>Growth Marketing Services</li>
                  <li>Digital Marketing Solutions</li>
                  <li>And other related professional services</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-display mb-4">3. User Eligibility</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You must be at least 18 years old and have the legal capacity to enter into contracts to use our services. By using our services, you represent and warrant that you meet these requirements.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-display mb-4">4. Account Registration</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  To access certain features of our services, you may need to create an account. You agree to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Provide accurate, current, and complete information</li>
                  <li>Maintain and update your information</li>
                  <li>Keep your account credentials confidential</li>
                  <li>Notify us immediately of any unauthorized access</li>
                  <li>Accept responsibility for all activities under your account</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-display mb-4">5. Payment Terms</h2>
                
                <h3 className="text-xl font-semibold mb-3">5.1 Pricing</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  All prices are listed in Indian Rupees (₹ INR) unless otherwise stated. Prices are subject to change without notice. We will notify you of any price changes before they take effect.
                </p>

                <h3 className="text-xl font-semibold mb-3">5.2 Payment Methods</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We accept payment through various methods including credit/debit cards, UPI, net banking, and other payment gateways. All payments are processed securely through third-party payment processors.
                </p>

                <h3 className="text-xl font-semibold mb-3">5.3 Billing</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  For subscription services, you will be billed automatically on a recurring basis until you cancel. You authorize us to charge your payment method for all fees incurred.
                </p>

                <h3 className="text-xl font-semibold mb-3">5.4 GST and Taxes</h3>
                <p className="text-muted-foreground leading-relaxed">
                  All prices are exclusive of applicable taxes including GST (Goods and Services Tax) as per Indian tax laws. Taxes will be added to your invoice as required by law.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-display mb-4">6. Refund and Cancellation Policy</h2>
                
                <h3 className="text-xl font-semibold mb-3">6.1 Refunds</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Due to the nature of our services (digital content and consulting), refunds are generally not provided once services have been delivered. However, we may consider refunds on a case-by-case basis for:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Services not delivered as promised</li>
                  <li>Technical issues preventing service delivery</li>
                  <li>Duplicate charges or billing errors</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3">6.2 Cancellations</h3>
                <p className="text-muted-foreground leading-relaxed">
                  You may cancel subscription services at any time. Cancellations will take effect at the end of the current billing period. No refunds will be provided for partial months or unused services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-display mb-4">7. Intellectual Property Rights</h2>
                
                <h3 className="text-xl font-semibold mb-3">7.1 Our Content</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  All content on our website, including text, graphics, logos, images, reports, data, and software, is the property of Dekhe Trends or its licensors and is protected by Indian and international copyright, trademark, and other intellectual property laws.
                </p>

                <h3 className="text-xl font-semibold mb-3">7.2 License to Use</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We grant you a limited, non-exclusive, non-transferable license to access and use our services for your internal business purposes. You may not:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Reproduce, distribute, or publicly display our content</li>
                  <li>Modify or create derivative works</li>
                  <li>Reverse engineer or decompile any software</li>
                  <li>Remove copyright or proprietary notices</li>
                  <li>Use our content for commercial purposes without permission</li>
                  <li>Share reports or deliverables with unauthorized parties</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-display mb-4">8. User Conduct</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You agree not to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Violate any laws or regulations</li>
                  <li>Infringe on intellectual property rights</li>
                  <li>Transmit harmful code or malware</li>
                  <li>Attempt unauthorized access to our systems</li>
                  <li>Interfere with the operation of our services</li>
                  <li>Engage in fraudulent or deceptive practices</li>
                  <li>Harass, abuse, or harm others</li>
                  <li>Collect user data without consent</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-display mb-4">9. Confidentiality</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Both parties agree to maintain the confidentiality of any proprietary or confidential information shared during the course of our business relationship. This includes:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Business strategies and plans</li>
                  <li>Financial information</li>
                  <li>Customer data and insights</li>
                  <li>Proprietary methodologies</li>
                  <li>Reports and deliverables</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-display mb-4">10. Disclaimers and Limitations of Liability</h2>
                
                <h3 className="text-xl font-semibold mb-3">10.1 Service "As Is"</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our services are provided "as is" and "as available" without warranties of any kind, either express or implied. We do not guarantee that our services will be uninterrupted, error-free, or completely secure.
                </p>

                <h3 className="text-xl font-semibold mb-3">10.2 No Guarantee of Results</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  While we strive to provide accurate and valuable insights, we cannot guarantee specific business results or outcomes from using our services. Market conditions and business success depend on many factors beyond our control.
                </p>

                <h3 className="text-xl font-semibold mb-3">10.3 Limitation of Liability</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To the maximum extent permitted by law, Dekhe Trends shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or business opportunities, arising from your use of our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-display mb-4">11. Indemnification</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You agree to indemnify and hold harmless Dekhe Trends, its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from your use of our services or violation of these Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-display mb-4">12. Third-Party Links and Services</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our website may contain links to third-party websites or services. We are not responsible for the content, privacy policies, or practices of third-party sites. Your use of third-party services is at your own risk.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-display mb-4">13. Termination</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We reserve the right to suspend or terminate your access to our services at any time, with or without notice, for any reason, including violation of these Terms. Upon termination:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Your right to use our services will immediately cease</li>
                  <li>You must stop using all our content and materials</li>
                  <li>We may delete your account and data</li>
                  <li>Provisions regarding confidentiality and liability will survive</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-display mb-4">14. Governing Law and Jurisdiction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising from these Terms or your use of our services shall be subject to the exclusive jurisdiction of the courts in [Your City], India.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-display mb-4">15. Dispute Resolution</h2>
                <p className="text-muted-foreground leading-relaxed">
                  In the event of any dispute, both parties agree to first attempt to resolve the matter through good faith negotiations. If negotiations fail, disputes may be resolved through arbitration in accordance with Indian arbitration laws.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-display mb-4">16. Changes to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify these Terms at any time. We will notify you of material changes by posting the updated Terms on our website and updating the "Last Updated" date. Your continued use of our services after changes constitutes acceptance of the new Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-display mb-4">17. Severability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions will continue in full force and effect.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-display mb-4">18. Entire Agreement</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms, together with our Privacy Policy, constitute the entire agreement between you and Dekhe Trends regarding your use of our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-display mb-4">19. Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If you have any questions about these Terms, please contact us:
                </p>
                <div className="bg-card p-6 rounded-lg border border-accent/20">
                  <p className="text-muted-foreground mb-2"><strong>Dekhe Trends</strong></p>
                  <p className="text-muted-foreground mb-2">Email: dekhetrends@gmail.com</p>
                  <p className="text-muted-foreground mb-2">Phone: +91 80775 83921</p>
                  <p className="text-muted-foreground">Address: Bareilly, Uttar Pradesh, India</p>
                </div>
              </section>

              <section className="bg-primary/10 p-6 rounded-lg border border-primary/20 mt-8">
                <h3 className="text-xl font-bold mb-3">Acknowledgment</h3>
                <p className="text-muted-foreground leading-relaxed">
                  By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

