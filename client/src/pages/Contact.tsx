import { LeadForm } from "@/components/LeadForm";
import { motion } from "framer-motion";
import { Phone, Clock, MessageSquare, CheckCircle2, AlertCircle, Mail } from "lucide-react";
import { SEO } from "@/components/SEO";
import { StickyCallButton } from "@/components/StickyCallButton";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <>
      <SEO 
        title="Contact DekheTrends - Let's Talk About Growing Your Business"
        description="Ready to grow your business with honest digital marketing? Call us at 8077583921 or fill out the form. We respond within 2 hours during business hours."
        canonical="https://dekhetrends.com/contact"
      />
      
      <StickyCallButton />
      
      <div className="min-h-screen pt-24 pb-12 bg-background">
        <div className="container px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-16"
            >
              <h1 className="text-4xl md:text-6xl font-bold font-display mb-8 leading-tight">
                Let's Talk About <span className="gradient-text">Your Business</span>
              </h1>
              
              <div className="prose prose-lg prose-invert max-w-none">
                <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                  No pressure. No sales pitch. Just an honest conversation about where your business is now and where you want it to be.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We get it—reaching out to a marketing agency can feel risky. You've probably been burned before. Maybe you've spent money on marketing that didn't work. Maybe you're skeptical about whether digital marketing even works for your industry.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  That's exactly why we want to talk to you first. No commitments. No contracts. Just a conversation.
                </p>
              </div>
            </motion.div>

            {/* When to Contact Us */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-8">
                When Should You Contact Us?
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/20">
                  <CheckCircle2 className="w-8 h-8 text-green-500 mb-4" />
                  <h3 className="text-xl font-bold mb-3">You're a Good Fit If:</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span>You're willing to invest ₹30K+ per month in marketing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span>You understand results take 2-3 months minimum</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span>You're open to honest feedback (even if it's not what you want to hear)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span>You want a partner, not just a vendor</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span>Your business has been running for at least 6 months</span>
                    </li>
                  </ul>
                </div>

                <div className="p-6 rounded-2xl bg-gradient-to-br from-yellow-500/10 to-yellow-500/5 border border-yellow-500/20">
                  <AlertCircle className="w-8 h-8 text-yellow-500 mb-4" />
                  <h3 className="text-xl font-bold mb-3">We're Probably Not a Fit If:</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500 mt-1">•</span>
                      <span>You're looking for guaranteed first-page rankings in 30 days</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500 mt-1">•</span>
                      <span>You want to spend ₹5,000/month and expect miracles</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500 mt-1">•</span>
                      <span>You're not willing to make changes to your business based on data</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500 mt-1">•</span>
                      <span>You want someone to just "handle it" without your involvement</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500 mt-1">•</span>
                      <span>You're looking for the cheapest option (we're not the cheapest, but we're worth it)</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-6 rounded-2xl bg-card border border-accent/20">
                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-white">Being honest here:</strong> If you're in the second category, we're probably not the right fit. And that's okay. We'd rather be upfront now than waste your time (and ours) later.
                </p>
              </div>
            </div>

            {/* Contact Options */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-8">
                How to Reach Us
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {/* Call Option */}
                <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30">
                  <Phone className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Prefer to Talk? Call Us.</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Sometimes it's easier to just talk. Call us and we'll have a quick conversation about your business and whether we can help.
                  </p>
                  <a href="tel:8077583921">
                    <Button size="lg" className="w-full h-14 text-lg rounded-full bg-white text-black hover:bg-gray-100 font-bold">
                      <Phone className="w-5 h-5 mr-2" />
                      Call: 8077583921
                    </Button>
                  </a>
                  <p className="text-sm text-muted-foreground mt-4">
                    <Clock className="w-4 h-4 inline mr-1" />
                    Mon-Sat, 9 AM - 7 PM IST
                  </p>
                </div>

                {/* Form Option */}
                <div className="p-8 rounded-2xl bg-card border border-accent/20">
                  <MessageSquare className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Or Fill Out the Form Below</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Not ready to call? No problem. Fill out the form and we'll get back to you within 2 hours during business hours.
                  </p>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>We respond within 2 hours (business hours)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>No spam, no automated responses</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Your information stays private</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="mb-16">
              <div className="bg-gradient-to-br from-card to-card/50 border border-accent/30 p-8 md:p-10 rounded-3xl">
                <h2 className="text-2xl font-bold font-display mb-6">Send Us a Message</h2>
                <LeadForm type="contact" />
              </div>
            </div>

            {/* What Happens Next */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-8">
                What Happens After You Contact Us?
              </h2>

              <div className="space-y-6">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center font-bold text-primary">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">We'll Respond Within 2 Hours</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      During business hours (Mon-Sat, 9 AM - 7 PM IST), we'll get back to you within 2 hours. Outside business hours, we'll respond first thing the next morning.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center font-bold text-primary">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">We'll Ask Questions</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We need to understand your business, your goals, and your challenges. This isn't a sales call—it's a discovery call. We're figuring out if we can actually help you.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center font-bold text-primary">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">We'll Be Honest</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      If we think we can help you, we'll tell you how. If we don't think we're a good fit, we'll tell you that too—and we might even recommend someone else who could help.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center font-bold text-primary">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">We'll Send You a Proposal</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      If we're a good fit, we'll send you a detailed proposal within 2-3 business days. It'll include our strategy, timeline, pricing, and expected results. No hidden fees. No surprises.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center font-bold text-primary">
                    5
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">You Decide</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Take your time. Review the proposal. Ask questions. We won't pressure you. If you want to move forward, great. If not, no hard feelings.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Signals */}
            <div className="mb-16">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
                <h3 className="text-2xl font-bold mb-6">Why You Can Trust Us</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                      No Long-Term Contracts
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      We work month-to-month. If you're not happy, you can leave anytime. We earn your business every month.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                      Transparent Pricing
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      No hidden fees. No surprise charges. You'll know exactly what you're paying for and why.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                      Real Results
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      We track everything. You'll get monthly reports showing exactly what's working and what's not.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                      Direct Access
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      You'll have direct access to the people working on your account. No account managers who don't know your business.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-8">
                Questions You Might Have
              </h2>

              <div className="space-y-4">
                <div className="p-6 rounded-2xl bg-card border border-accent/20">
                  <h3 className="font-bold mb-2">How much do your services cost?</h3>
                  <p className="text-muted-foreground">
                    It depends on what you need. Most clients invest ₹30,000-1,00,000 per month. We'll give you exact pricing after we understand your business and goals.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-card border border-accent/20">
                  <h3 className="font-bold mb-2">Do you work with businesses outside India?</h3>
                  <p className="text-muted-foreground">
                    We primarily work with Indian businesses, but we've helped a few international clients. It depends on the project. Let's talk and see if it makes sense.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-card border border-accent/20">
                  <h3 className="font-bold mb-2">How long before I see results?</h3>
                  <p className="text-muted-foreground">
                    Honest answer: 2-3 months minimum for SEO. 2-4 weeks for paid ads. Anyone promising faster results is lying. Good marketing takes time.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-card border border-accent/20">
                  <h3 className="font-bold mb-2">What if I'm not happy with the results?</h3>
                  <p className="text-muted-foreground">
                    We work month-to-month. If you're not happy, you can stop anytime. But before that, let's talk and figure out what's not working. We're here to help you succeed.
                  </p>
                </div>
              </div>
            </div>

            {/* Final CTA */}
            <div className="text-center p-12 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30">
              <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
                Ready to Grow Your Business?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's have a conversation. No pressure. No sales pitch. Just an honest discussion about your business.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="tel:8077583921">
                  <Button size="lg" className="h-16 px-10 text-lg rounded-full bg-white text-black hover:bg-gray-100 font-bold">
                    <Phone className="w-5 h-5 mr-2" />
                    Call: 8077583921
                  </Button>
                </a>
              </div>
              <p className="text-sm text-muted-foreground mt-6">
                Or scroll up and fill out the form. We'll respond within 2 hours.
              </p>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
