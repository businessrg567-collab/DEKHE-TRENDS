import { SEO } from "@/components/SEO";
import { motion } from "framer-motion";
import { RefreshCw, CheckCircle2, XCircle, Clock, AlertCircle } from "lucide-react";

export default function RefundPolicy() {
  return (
    <>
      <SEO 
        title="Refund Policy | Dekhe Trends"
        description="Understand our refund and cancellation policy. We believe in fair treatment and transparency."
        canonical="https://dekhetrends.com/refund-policy"
      />
      
      <div className="pt-24 pb-12 min-h-screen">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <RefreshCw className="w-10 h-10 text-primary" />
              <h1 className="text-4xl md:text-5xl font-bold font-display">Refund Policy</h1>
            </div>
            <p className="text-muted-foreground mb-8">Last Updated: January 2025</p>

            <div className="bg-primary/10 p-6 rounded-lg border border-primary/20 mb-8">
              <p className="text-lg leading-relaxed">
                We want you to be happy with our services. If something goes wrong, we'll work with you to 
                make it right. Here's our straightforward refund policy - no confusing legal jargon.
              </p>
            </div>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold font-display mb-4">Our Philosophy</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We believe in earning your business, not trapping you in contracts. If we're not delivering 
                  value, you shouldn't have to pay. That said, we also need to protect ourselves from abuse.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  This policy balances fairness for both sides. We'll always try to resolve issues before 
                  jumping to refunds.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-display mb-4">Services Covered</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  This refund policy applies to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Monthly marketing retainers</li>
                  <li>One-time strategy audits</li>
                  <li>Consulting packages</li>
                  <li>Digital marketing campaigns</li>
                  <li>Content creation services</li>
                  <li>Any other paid services we offer</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-display mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-green-400" />
                  When You Can Get a Refund
                </h2>
                
                <div className="space-y-4">
                  <div className="p-6 rounded-lg bg-green-500/10 border border-green-500/20">
                    <h3 className="text-xl font-bold mb-3">1. Services Not Delivered</h3>
                    <p className="text-muted-foreground mb-2">
                      If we fail to deliver the services we promised within the agreed timeframe, you're 
                      entitled to a full refund.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>Example:</strong> You paid for a strategy audit to be delivered in 7 days, 
                      but we haven't started after 14 days.
                    </p>
                  </div>

                  <div className="p-6 rounded-lg bg-green-500/10 border border-green-500/20">
                    <h3 className="text-xl font-bold mb-3">2. Technical Issues on Our End</h3>
                    <p className="text-muted-foreground mb-2">
                      If technical problems prevent us from delivering your service and we can't fix them 
                      within a reasonable time, we'll refund you.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>Example:</strong> Our systems crash and we lose your campaign data with no backup.
                    </p>
                  </div>

                  <div className="p-6 rounded-lg bg-green-500/10 border border-green-500/20">
                    <h3 className="text-xl font-bold mb-3">3. Duplicate Charges</h3>
                    <p className="text-muted-foreground mb-2">
                      If you're accidentally charged twice for the same service, we'll immediately refund 
                      the duplicate charge.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>Processing time:</strong> Usually within 24-48 hours
                    </p>
                  </div>

                  <div className="p-6 rounded-lg bg-green-500/10 border border-green-500/20">
                    <h3 className="text-xl font-bold mb-3">4. Service Quality Issues (First 14 Days)</h3>
                    <p className="text-muted-foreground mb-2">
                      For new clients, if you're genuinely unhappy with our work quality in the first 14 days, 
                      we'll either fix it or refund you.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>Note:</strong> You need to give us a chance to fix issues first. Communication is key!
                    </p>
                  </div>

                  <div className="p-6 rounded-lg bg-green-500/10 border border-green-500/20">
                    <h3 className="text-xl font-bold mb-3">5. We Can't Help You</h3>
                    <p className="text-muted-foreground mb-2">
                      If we realize we can't actually help your specific situation (and we're honest about it), 
                      we'll refund any unused portion of your payment.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>Example:</strong> Your industry has regulations we're not equipped to handle
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-display mb-4 flex items-center gap-2">
                  <XCircle className="w-6 h-6 text-red-400" />
                  When Refunds Aren't Available
                </h2>
                
                <div className="space-y-4">
                  <div className="p-6 rounded-lg bg-red-500/10 border border-red-500/20">
                    <h3 className="text-xl font-bold mb-3">1. Services Already Delivered</h3>
                    <p className="text-muted-foreground">
                      Once we've completed and delivered your service (audit, strategy, content, etc.), 
                      we can't refund it. You've received the value.
                    </p>
                  </div>

                  <div className="p-6 rounded-lg bg-red-500/10 border border-red-500/20">
                    <h3 className="text-xl font-bold mb-3">2. Results-Based Disappointment</h3>
                    <p className="text-muted-foreground mb-2">
                      Marketing results depend on many factors. We can't refund because:
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                      <li>• Your campaign didn't go viral</li>
                      <li>• You didn't get as many leads as you hoped</li>
                      <li>• Results took longer than expected</li>
                      <li>• Market conditions changed</li>
                    </ul>
                    <p className="text-sm text-muted-foreground mt-2">
                      We promise effort and expertise, not guaranteed outcomes.
                    </p>
                  </div>

                  <div className="p-6 rounded-lg bg-red-500/10 border border-red-500/20">
                    <h3 className="text-xl font-bold mb-3">3. Change of Mind</h3>
                    <p className="text-muted-foreground">
                      If you simply change your mind after we've started work, we can't offer a refund. 
                      However, we might be able to pause or adjust your service.
                    </p>
                  </div>

                  <div className="p-6 rounded-lg bg-red-500/10 border border-red-500/20">
                    <h3 className="text-xl font-bold mb-3">4. Third-Party Costs</h3>
                    <p className="text-muted-foreground">
                      We can't refund money spent on third-party services like ad spend, tools, or software 
                      subscriptions purchased for your campaigns.
                    </p>
                  </div>

                  <div className="p-6 rounded-lg bg-red-500/10 border border-red-500/20">
                    <h3 className="text-xl font-bold mb-3">5. Violation of Terms</h3>
                    <p className="text-muted-foreground">
                      If we terminate your service because you violated our Terms of Service, no refund 
                      will be provided.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-display mb-4">Partial Refunds</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Sometimes a full refund doesn't make sense, but a partial refund does:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>We completed some work but couldn't finish the rest</li>
                  <li>You want to cancel mid-project</li>
                  <li>There were delays or issues that affected service quality</li>
                  <li>You're canceling a subscription mid-month</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  We'll calculate the refund based on work completed vs. work remaining.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-display mb-4 flex items-center gap-2">
                  <Clock className="w-6 h-6 text-primary" />
                  Refund Timeline
                </h2>
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-card border border-accent/20">
                    <p className="font-bold mb-2">Step 1: Request (Day 0)</p>
                    <p className="text-sm text-muted-foreground">
                      Email us at dekhetrends@gmail.com with your refund request and reason
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-card border border-accent/20">
                    <p className="font-bold mb-2">Step 2: Review (1-3 Business Days)</p>
                    <p className="text-sm text-muted-foreground">
                      We'll review your request and respond with our decision
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-card border border-accent/20">
                    <p className="font-bold mb-2">Step 3: Processing (3-5 Business Days)</p>
                    <p className="text-sm text-muted-foreground">
                      If approved, we'll process the refund through your original payment method
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-card border border-accent/20">
                    <p className="font-bold mb-2">Step 4: Bank Processing (5-10 Business Days)</p>
                    <p className="text-sm text-muted-foreground">
                      Your bank or payment provider will credit your account (timing varies by provider)
                    </p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  <strong>Total time:</strong> Usually 10-15 business days from request to money in your account
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-display mb-4">Subscription Cancellations</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  For monthly retainer or subscription services:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>You can cancel anytime - no long-term contracts</li>
                  <li>Cancellation takes effect at the end of your current billing period</li>
                  <li>You'll continue to receive service until the period ends</li>
                  <li>No refunds for partial months or unused time</li>
                  <li>You can reactivate anytime if you change your mind</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>How to cancel:</strong> Email us at least 7 days before your next billing date
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-display mb-4">How to Request a Refund</h2>
                <div className="p-6 rounded-lg bg-primary/10 border border-primary/20">
                  <p className="text-muted-foreground mb-4">
                    Send an email to <strong>dekhetrends@gmail.com</strong> with:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Your name and contact information</li>
                    <li>Invoice number or transaction ID</li>
                    <li>Service you purchased</li>
                    <li>Reason for refund request</li>
                    <li>Any relevant details or documentation</li>
                  </ul>
                  <p className="text-muted-foreground mt-4">
                    We'll respond within 1-3 business days. If we need more information, we'll ask.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-display mb-4 flex items-center gap-2">
                  <AlertCircle className="w-6 h-6 text-primary" />
                  Before Requesting a Refund
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Please try these first:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li><strong>Talk to us:</strong> Most issues can be resolved with a conversation</li>
                  <li><strong>Give us a chance to fix it:</strong> We want to make things right</li>
                  <li><strong>Review what was promised:</strong> Make sure expectations were clear</li>
                  <li><strong>Check the timeline:</strong> Some services take time to show results</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  We're reasonable people. If there's a genuine problem, we'll work with you to solve it.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-display mb-4">Chargebacks</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Please don't file a chargeback without talking to us first. Chargebacks:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Damage our business reputation</li>
                  <li>Cost us additional fees</li>
                  <li>Take longer than requesting a refund directly</li>
                  <li>Often get denied if services were delivered</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  If you file a chargeback, we'll provide evidence to your bank showing services were delivered. 
                  We'd much rather resolve things directly with you.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-display mb-4">Special Circumstances</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Life happens. If you're facing genuine hardship (medical emergency, business closure, etc.), 
                  talk to us. We'll work with you to find a fair solution.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We're not heartless robots. We understand that sometimes circumstances change unexpectedly.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-display mb-4">Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Questions about refunds? Want to discuss your situation? Reach out:
                </p>
                <div className="bg-card p-6 rounded-lg border border-accent/20">
                  <p className="text-muted-foreground mb-2"><strong>Dekhe Trends</strong></p>
                  <p className="text-muted-foreground mb-2">Email: dekhetrends@gmail.com</p>
                  <p className="text-muted-foreground mb-2">Phone: +91 80775 83921</p>
                  <p className="text-muted-foreground">Address: Bareilly, Uttar Pradesh, India</p>
                </div>
              </section>

              <section className="bg-accent/10 p-6 rounded-lg border border-accent/20 mt-8">
                <h3 className="text-xl font-bold mb-3">Our Commitment</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We want you to be happy with our services. If something goes wrong, we'll do our best to 
                  make it right - whether that's fixing the issue, adjusting our approach, or providing a 
                  refund. Fair treatment goes both ways, and we believe in building long-term relationships 
                  based on trust and results.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
