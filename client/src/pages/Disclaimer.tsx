import { SEO } from "@/components/SEO";
import { motion } from "framer-motion";
import { AlertTriangle, Info } from "lucide-react";

export default function Disclaimer() {
  return (
    <>
      <SEO 
        title="Disclaimer | Dekhe Trends"
        description="Important disclaimers about using Dekhe Trends services. Understand the limitations and responsibilities."
        canonical="https://dekhetrends.com/disclaimer"
      />
      
      <div className="pt-24 pb-12 min-h-screen">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="w-10 h-10 text-primary" />
              <h1 className="text-4xl md:text-5xl font-bold font-display">Disclaimer</h1>
            </div>
            <p className="text-muted-foreground mb-8">Last Updated: January 2025</p>

            <div className="bg-primary/10 p-6 rounded-lg border border-primary/20 mb-8">
              <p className="text-lg leading-relaxed">
                We believe in being upfront and honest. This disclaimer explains what we can and cannot promise, 
                so there are no surprises down the road.
              </p>
            </div>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold font-display mb-4 flex items-center gap-2">
                  <Info className="w-6 h-6 text-primary" />
                  General Information
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The information on this website is for general guidance only. While we work hard to keep everything 
                  accurate and up-to-date, we're human and things change fast in the digital marketing world.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Think of our content as helpful advice from experienced marketers, not as legal, financial, or 
                  professional counsel. For specific situations, always consult with qualified professionals.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-display mb-4">No Guaranteed Results</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Here's the truth: Marketing is part science, part art, and part luck. We can't promise you'll 
                  become the next viral sensation or 10x your revenue overnight.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  What we can promise:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>We'll use proven strategies that have worked for other businesses</li>
                  <li>We'll be honest about what's realistic for your situation</li>
                  <li>We'll work our hardest to get you results</li>
                  <li>We'll adjust our approach based on what the data tells us</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  But your results depend on many factors: your industry, competition, budget, product quality, 
                  market conditions, and how well you implement our recommendations. We're partners in this, not magicians.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-display mb-4">Website Content</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Everything on our website - blog posts, case studies, guides, and insights - is based on our 
                  experience and research. We try to be as accurate as possible, but:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Marketing trends change constantly</li>
                  <li>What worked yesterday might not work tomorrow</li>
                  <li>Different businesses need different approaches</li>
                  <li>We might occasionally make mistakes (we're only human)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-display mb-4">Third-Party Links & Services</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We sometimes link to other websites, tools, or services that we think are helpful. But here's the thing:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>We don't control those websites</li>
                  <li>We're not responsible for their content or practices</li>
                  <li>We don't endorse everything they say or do</li>
                  <li>They have their own terms and privacy policies</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  Click at your own risk, and always read the fine print on other sites.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-display mb-4">Testimonials & Case Studies</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  When we share client success stories, they're real. We don't make stuff up. However:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Every business is different</li>
                  <li>Past performance doesn't guarantee future results</li>
                  <li>What worked for them might not work exactly the same for you</li>
                  <li>Results shown are specific to those clients' situations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-display mb-4">Professional Advice</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We're marketing experts, not lawyers, accountants, or financial advisors. Our advice is about 
                  marketing strategy, not:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Legal compliance (talk to a lawyer)</li>
                  <li>Tax implications (talk to an accountant)</li>
                  <li>Financial planning (talk to a financial advisor)</li>
                  <li>Medical, health, or safety matters</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  If you need specialized advice, please consult the appropriate professionals.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-display mb-4">Errors & Omissions</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We do our best to keep our website error-free, but mistakes happen. If you spot something wrong, 
                  please let us know! We'll fix it as soon as we can. We're not liable for any errors, omissions, 
                  or outdated information on our site.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-display mb-4">Technical Issues</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Sometimes websites break. Servers crash. Internet connections fail. We try to keep our site 
                  running smoothly, but we can't guarantee:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>24/7 uptime without interruptions</li>
                  <li>Zero bugs or technical glitches</li>
                  <li>Compatibility with every device and browser</li>
                  <li>Protection against all security threats</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-display mb-4">Advertising & Sponsored Content</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use Google AdSense and may display ads on our website. We don't control which ads appear, 
                  and showing an ad doesn't mean we endorse that product or service.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  If we ever publish sponsored content or affiliate links, we'll clearly disclose it. We only 
                  promote things we genuinely believe are valuable.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-display mb-4">Changes to Services</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We're always improving and evolving. We might change our services, pricing, features, or 
                  website content at any time. We'll try to give you a heads up about major changes, but we're 
                  not obligated to.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-display mb-4">Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  In plain English: We're not responsible for any losses, damages, or problems that might arise 
                  from using our website or services. This includes:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Lost profits or revenue</li>
                  <li>Business interruptions</li>
                  <li>Data loss</li>
                  <li>Indirect or consequential damages</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  We limit our liability to the maximum extent allowed by Indian law.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-display mb-4">Your Responsibility</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You're responsible for:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>How you use the information we provide</li>
                  <li>Verifying information before making business decisions</li>
                  <li>Complying with all applicable laws and regulations</li>
                  <li>Protecting your account credentials</li>
                  <li>Using our services ethically and legally</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-display mb-4">Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Questions about this disclaimer? Want to report an error? Just want to chat? Reach out:
                </p>
                <div className="bg-card p-6 rounded-lg border border-accent/20">
                  <p className="text-muted-foreground mb-2"><strong>Dekhe Trends</strong></p>
                  <p className="text-muted-foreground mb-2">Email: dekhetrends@gmail.com</p>
                  <p className="text-muted-foreground mb-2">Phone: +91 80775 83921</p>
                  <p className="text-muted-foreground">Address: Bareilly, Uttar Pradesh, India</p>
                </div>
              </section>

              <section className="bg-accent/10 p-6 rounded-lg border border-accent/20 mt-8">
                <h3 className="text-xl font-bold mb-3">Bottom Line</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We're here to help you succeed, but we can't control everything. Use our services wisely, 
                  do your own research, and remember that marketing success takes time, effort, and sometimes 
                  a bit of trial and error. We're in this together!
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
