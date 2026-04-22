import { SEO } from "@/components/SEO";
import { motion } from "framer-motion";
import { Cookie, Settings, Eye, Target, BarChart } from "lucide-react";

export default function CookiePolicy() {
  return (
    <>
      <SEO 
        title="Cookie Policy | Dekhe Trends"
        description="Learn about how Dekhe Trends uses cookies and tracking technologies to improve your experience."
        canonical="https://dekhetrends.com/cookie-policy"
      />
      
      <div className="pt-24 pb-12 min-h-screen">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Cookie className="w-10 h-10 text-primary" />
              <h1 className="text-4xl md:text-5xl font-bold font-display">Cookie Policy</h1>
            </div>
            <p className="text-muted-foreground mb-8">Last Updated: January 2025</p>

            <div className="bg-primary/10 p-6 rounded-lg border border-primary/20 mb-8">
              <p className="text-lg leading-relaxed">
                Cookies aren't just delicious snacks - they're also tiny files that help websites work better. 
                Here's everything you need to know about how we use them (the digital kind, not the chocolate chip kind).
              </p>
            </div>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold font-display mb-4">What Are Cookies?</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Cookies are small text files that websites store on your device when you visit them. Think of 
                  them as digital sticky notes that help websites remember things about you.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  They help us recognize you when you come back, remember your preferences, and understand how 
                  you use our site so we can make it better.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-display mb-4">Why We Use Cookies</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use cookies to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Keep you logged in to your account</li>
                  <li>Remember your preferences and settings</li>
                  <li>Understand which pages you visit and how you use our site</li>
                  <li>Show you relevant content and ads</li>
                  <li>Improve our website's performance and features</li>
                  <li>Protect against fraud and security threats</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-display mb-4">Types of Cookies We Use</h2>
                
                <div className="space-y-6">
                  <div className="p-6 rounded-lg bg-card border border-accent/20">
                    <div className="flex items-start gap-4">
                      <Settings className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-bold mb-2">Essential Cookies</h3>
                        <p className="text-muted-foreground mb-3">
                          These are the cookies we absolutely need to make our website work. Without them, 
                          basic features would break.
                        </p>
                        <p className="text-sm text-muted-foreground">
                          <strong>What they do:</strong> Keep you logged in, remember items in your cart, 
                          enable secure areas of the site
                        </p>
                        <p className="text-sm text-muted-foreground mt-2">
                          <strong>Can you disable them?</strong> Not really - the site won't work properly without them
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 rounded-lg bg-card border border-accent/20">
                    <div className="flex items-start gap-4">
                      <BarChart className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-bold mb-2">Analytics Cookies</h3>
                        <p className="text-muted-foreground mb-3">
                          These help us understand how people use our website so we can make it better.
                        </p>
                        <p className="text-sm text-muted-foreground">
                          <strong>What they do:</strong> Track page views, time spent on pages, bounce rates, 
                          user journeys, and technical performance
                        </p>
                        <p className="text-sm text-muted-foreground mt-2">
                          <strong>Tools we use:</strong> Google Analytics, Google Tag Manager
                        </p>
                        <p className="text-sm text-muted-foreground mt-2">
                          <strong>Can you disable them?</strong> Yes, through your browser settings or cookie preferences
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 rounded-lg bg-card border border-accent/20">
                    <div className="flex items-start gap-4">
                      <Target className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-bold mb-2">Marketing Cookies</h3>
                        <p className="text-muted-foreground mb-3">
                          These track your activity across websites to show you relevant ads and measure 
                          campaign effectiveness.
                        </p>
                        <p className="text-sm text-muted-foreground">
                          <strong>What they do:</strong> Show you personalized ads, track ad performance, 
                          prevent you from seeing the same ad too many times
                        </p>
                        <p className="text-sm text-muted-foreground mt-2">
                          <strong>Tools we use:</strong> Google AdSense, Facebook Pixel, LinkedIn Insight Tag
                        </p>
                        <p className="text-sm text-muted-foreground mt-2">
                          <strong>Can you disable them?</strong> Yes, and you'll still see ads - just less relevant ones
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 rounded-lg bg-card border border-accent/20">
                    <div className="flex items-start gap-4">
                      <Eye className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-bold mb-2">Preference Cookies</h3>
                        <p className="text-muted-foreground mb-3">
                          These remember your choices to give you a more personalized experience.
                        </p>
                        <p className="text-sm text-muted-foreground">
                          <strong>What they do:</strong> Remember your language preference, region, display 
                          settings, and other customizations
                        </p>
                        <p className="text-sm text-muted-foreground mt-2">
                          <strong>Can you disable them?</strong> Yes, but you'll need to reset your preferences each visit
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-display mb-4">Third-Party Cookies</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Some cookies come from third-party services we use to make our site better:
                </p>
                
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-card/50 border border-accent/10">
                    <h4 className="font-bold mb-2">Google Analytics</h4>
                    <p className="text-sm text-muted-foreground">
                      Helps us understand website traffic and user behavior. 
                      <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">
                        Google's Privacy Policy
                      </a>
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-card/50 border border-accent/10">
                    <h4 className="font-bold mb-2">Google AdSense</h4>
                    <p className="text-sm text-muted-foreground">
                      Displays relevant ads on our website. 
                      <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">
                        How Google uses cookies in advertising
                      </a>
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-card/50 border border-accent/10">
                    <h4 className="font-bold mb-2">Social Media Platforms</h4>
                    <p className="text-sm text-muted-foreground">
                      Facebook, LinkedIn, and Twitter may set cookies when you interact with social sharing buttons
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-display mb-4">How Long Do Cookies Last?</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Cookies have different lifespans:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li><strong>Session Cookies:</strong> Disappear when you close your browser</li>
                  <li><strong>Persistent Cookies:</strong> Stay on your device for a set period (days, months, or years)</li>
                  <li><strong>First-Party Cookies:</strong> Set by us, typically last 1-2 years</li>
                  <li><strong>Third-Party Cookies:</strong> Set by other services, duration varies</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-display mb-4">Managing Your Cookie Preferences</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You're in control! Here's how to manage cookies:
                </p>

                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                    <h4 className="font-bold mb-2">Option 1: Cookie Consent Banner</h4>
                    <p className="text-sm text-muted-foreground">
                      When you first visit our site, you'll see a cookie banner. You can accept all cookies, 
                      reject non-essential ones, or customize your preferences.
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                    <h4 className="font-bold mb-2">Option 2: Browser Settings</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      All browsers let you control cookies. Here's how:
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                      <li>• Chrome: Settings → Privacy and Security → Cookies</li>
                      <li>• Firefox: Settings → Privacy & Security → Cookies</li>
                      <li>• Safari: Preferences → Privacy → Cookies</li>
                      <li>• Edge: Settings → Privacy → Cookies</li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                    <h4 className="font-bold mb-2">Option 3: Opt-Out Tools</h4>
                    <p className="text-sm text-muted-foreground">
                      Use tools like Google's Ad Settings or the Network Advertising Initiative opt-out page 
                      to control advertising cookies across multiple sites.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-display mb-4">What Happens If You Disable Cookies?</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You can still use our website, but some features might not work as well:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>You'll need to log in every time you visit</li>
                  <li>Your preferences won't be saved</li>
                  <li>Some pages might load slower</li>
                  <li>Forms might not work properly</li>
                  <li>You'll see less relevant content and ads</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-display mb-4">Do Not Track Signals</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Some browsers have a "Do Not Track" feature. Currently, there's no industry standard for 
                  how to respond to these signals, so our website doesn't respond to Do Not Track requests. 
                  However, you can still control cookies through your browser settings.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-display mb-4">Updates to This Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We might update this Cookie Policy from time to time as we add new features or comply with 
                  new regulations. We'll post any changes here and update the "Last Updated" date at the top.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-display mb-4">Questions About Cookies?</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Still confused about cookies? Want to know more? We're here to help:
                </p>
                <div className="bg-card p-6 rounded-lg border border-accent/20">
                  <p className="text-muted-foreground mb-2"><strong>Dekhe Trends</strong></p>
                  <p className="text-muted-foreground mb-2">Email: dekhetrends@gmail.com</p>
                  <p className="text-muted-foreground mb-2">Phone: +91 80775 83921</p>
                  <p className="text-muted-foreground">Address: Bareilly, Uttar Pradesh, India</p>
                </div>
              </section>

              <section className="bg-accent/10 p-6 rounded-lg border border-accent/20 mt-8">
                <h3 className="text-xl font-bold mb-3">The Simple Version</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We use cookies to make our website work better and understand how people use it. You can 
                  control which cookies you accept, but some are necessary for the site to function. We respect 
                  your privacy and only use cookies to improve your experience.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
